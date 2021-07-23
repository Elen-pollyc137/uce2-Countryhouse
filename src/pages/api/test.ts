// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { User } from '../../../model/user';

import { JWT } from '../../../utils/jwt';

type Auth = {
  authorization: string;
};

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  const id = await JWT(req);

  if (id && req.method === 'GET') {
    const [user] = await User.find({ _id: { $in: id } });

    res.send(user);
  } else {
    res.status(401);
  }
}
