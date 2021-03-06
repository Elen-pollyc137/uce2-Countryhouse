// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';
import Cors from 'cors';

import { JWT } from '../../../utils/jwt';
import { Local } from '../../../model/local';
import { User } from '../../../model/user';
import initMiddleware from '../../../lib/init-middleware';

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

  const { method } = req;
  const id = await JWT(req);
  await database();

  if (id) {
    switch (method) {
      case 'GET': {
        const locals: any = await Local.find({ user: id }).populate(
          'user',
          User
        );
        const localFormat = locals.map((item: any) => ({
          id: item._id,
          name: item.name,
          description: item.description,
          lat: item.lat,
          lng: item.lng,
          price: item.price,
          img: item.img,
          phone: item.user.phone,
          available: item.available,
        }));
        return res.status(200).json(localFormat);
      }
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        return res
          .status(405)
          .json({ message: `Method ${method} Not Allowed` });
    }
  } else {
    return res.status(401).json({ message: `Not user authentication` });
  }
}
