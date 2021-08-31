import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';

import { Local } from '../../../model/local';
import { User } from '../../../model/user';

type Auth = {
  authorization: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await database();

  switch (method) {
    case 'GET': {
      try {
        const locals: any = await Local.find({ available: true }).populate(
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
      } catch (err) {
        return res.status(500).json({ message: 'err' });
      }
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
