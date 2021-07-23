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
      const newUser = await User.create({
        email,
        password: hashPassword,
        phone,
        name,
      });

      res.send({ response: 'susses' });
    } catch (err) {
      res.status(500).send('error');
    }
  } else {
    res.status(405).json({ messagge: 'Method not allowedm' });
  }
}
