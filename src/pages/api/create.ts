import database from '../../../lib/database';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../../model/user';
import { hash } from 'bcrypt';

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      await database();
      const { email, password, phone, name } = req.body;
      const hashPassword = await hash(password, 10);
      await User.create({
        email,
        password: hashPassword,
        phone,
        name,
      });

      return res.send({ response: 'Criado com Sucesso' });
    } catch (err) {
      return res.status(500).send('error');
    }
  } else {
    return res.status(405).json({ messagge: 'Method not allowedm' });
  }
}
