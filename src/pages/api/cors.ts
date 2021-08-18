import Cors from 'cors';
import initMiddleware from '../../../lib/init-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

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

  res.json({ message: 'Hello Everyone!' });
}
