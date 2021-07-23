import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { secret } from '../../../api/secret';
import database from '../../../lib/database';
import { User } from '../../../model/user';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await database();

      const { email, password } = req.body;

      const [user] = await User.find({
        email: { $in: [email.toLowerCase()] },
      });

      if (!user) {
        res.status(401);
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        res.status(401);
      }

      const token = sign({ id: user.id }, secret, {
        expiresIn: '1m',
      });
      res.send({ name: user.name, token });
    } catch (error) {
      res.status(500).send('error');
    }
  } else {
    res.status(405).json({ message: 'We only support POST' });
  }
}
