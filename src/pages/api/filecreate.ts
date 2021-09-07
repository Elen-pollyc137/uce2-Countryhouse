// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';
import nc from 'next-connect';
import { v4 } from 'uuid';
import initMiddleware from '../../../lib/init-middleware';

import { Local } from '../../../model/local';
import Cors from 'cors';

import { JWT } from '../../../utils/jwt';
import upload from '../../../utils/upload';

type NextApiRequestWithFormData = NextApiRequest & {
  file: {
    location: string;
  };
};

type IFileQuery = {
  _id: string;
};
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    methods: ['GET', 'POST', 'OPTIONS', 'PUT'],
  })
);

const handler = nc()
  .use(upload.single('file'))
  .post(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    await cors(req, res);

    const id: string = await JWT(req);
    await database();

    if (id) {
      const { name, description, lat, lng, price, available } = req.body;

      const parseAvailable = !!Number(available);

      const local = await Local.create({
        _id: v4(),
        name,
        description,
        lat,
        lng,
        price,
        img: req?.file?.location,
        user: id,
        available: parseAvailable,
      });
      return res.status(200).json(local);
    } else {
      return res.status(401).json({ message: `Usuário não Autenticado` });
    }
  });

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

export default handler;
