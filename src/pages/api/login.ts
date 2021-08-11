import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { secret } from '../../../api/secret';
import database from '../../../lib/database';
import initMiddleware from '../../../lib/init-middleware';
import { User } from '../../../model/user';
import Cors from 'cors';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS', 'PUT'],
  })
);

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      await database();

      const { email, password } = req.body;

      const [user] = await User.find({
        email: { $in: [email.toLowerCase()] },
      });

      if (!user) {
        return res.status(401).json({ message: 'usuário não existente' });
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'senha incorreta' });
      }

      const token = sign({ id: user.id }, secret, {
        expiresIn: '4h',
      });
      return res.status(201).json({
        user: {
          name: user.name,
          phone: user.phone,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Error servidor' });
    }
  } else {
    return res.status(405).json({ message: 'We only support POST' });
  }
}
