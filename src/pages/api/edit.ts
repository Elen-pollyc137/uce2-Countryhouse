// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';
import initMiddleware from '../../../lib/init-middleware';
import Cors from 'cors';

import { User } from '../../../model/user';

import { JWT } from '../../../utils/jwt';
import { MdEmail } from 'react-icons/md';

type Auth = {
  authorization: string;
};
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS', 'PUT'],
  })
);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const id = await JWT(req);
  await database();
  const { method } = req;

  if (id) {
    switch (method) {
      case 'PUT': {
        const { body } = req;
        const fields = ['name', 'email', 'phone'];
        const user: any = await User.findOne({ _id: id });

        fields.map((fild) => {
          const newValue = body[fild];
          if (newValue != undefined) {
            user[fild] = newValue;
          }
        });
        user.save();
        return res.status(200).json({
          user: { email: user.email, phone: user.phone, name: user.name },
        });
      }
      default:
        res.setHeader('Allow', ['PUT']);
        return res
          .status(405)
          .json({ message: `Method ${method} Not Allowed` });
    }
  } else {
    return res.status(401).json({ message: `Not user authentication` });
  }
}
