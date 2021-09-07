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
  .put(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    await cors(req, res);

    const id: string = await JWT(req);
    await database();

    if (id) {
      const { body, query } = req;
      const { file } = query;

      console.log('***query', query);
      const fields = [
        'name',
        'description',
        'lat',
        'lng',
        'price',
        'available',
      ];
      const local: any = await Local.findOne({ _id: file } as IFileQuery);

      fields.map((fild) => {
        const newValue = body[fild];
        if (newValue != undefined) {
          local[fild] = newValue;
        }
      });

      if (req?.file?.location) {
        local.img = req.file.location;
      }
      local.save();

      return res.send(local);
    } else {
      return res.status(401).json({ message: `Usuário não Autenticado` });
    }
  });

export const config = {
  api: {
    externalResolver: true,
    bodyParser: true,
  },
};

export default handler;
