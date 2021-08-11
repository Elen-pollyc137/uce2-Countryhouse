// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';

import { Local } from '../../../model/local';

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
      const local = await Local.find();

      return res.status(200).json(local);
    }
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
