// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';
import nc from 'next-connect';

import { Local } from '../../../model/local';
import Cors from 'cors';

import { JWT } from '../../../utils/jwt';
import upload from '../../../utils/upload';
import initMiddleware from '../../../lib/init-middleware';

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
  .delete(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    await cors(req, res);

    const id: string = await JWT(req);
    await database();

    if (id) {
      const { query } = req;
      const { file } = query;

      const local: any = await Local.remove({ _id: file } as IFileQuery);

      return res.status(200).json({ message: true });
    } else {
      return res.status(401).json({ message: `Usuário não Autenticado` });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
