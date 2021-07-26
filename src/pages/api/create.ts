import database from '../../../lib/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../model/user';
import { hash } from 'bcrypt';
import { validateEmail } from '../../../utils/validate';
import { v4 } from 'uuid';

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await database();
      const { email, password, phone, name, passwordConfirm } = req.body;
      const isEmail = validateEmail(email);
      if (!isEmail) {
        return res.status(401).json({ message: 'email inválido' });
      }

      const [user] = await User.find({
        email: { $in: [email.toLowerCase()] },
      });

      if (user) {
        return res.status(401).json({ message: 'email já cadastrado' });
      }

      if (password !== passwordConfirm) {
        return res.status(401).json({ message: 'senhas não confere' });
      }
      const hashPassword = await hash(password, 10);
      await User.create({
        _id: v4(),
        email,
        password: hashPassword,
        phone,
        name,
      });
      console.log({ password, passwordConfirm });
      return res.status(201).json({ message: 'criado com Sucesso' });
    } catch (err) {
      console.log(err);
      return res.status(500).send('error servidor');
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' });
  }
}
