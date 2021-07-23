import type { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { secret } from '../api/secret';

export const JWT = async (req: NextApiRequest) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return false;
  }

  const token = authorization.replace('Bearer', ' ').trim();

  const data = await verify(token, secret);

  const { id }: any = data;

  return id;
};
