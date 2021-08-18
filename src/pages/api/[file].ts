// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../../lib/database';
import nc from 'next-connect';
import { v4 } from 'uuid';

import { User } from '../../../model/user';
import { Local } from '../../../model/local';

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

const handler = nc()
  .use(upload.single('file'))
  .post(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    const id: string = await JWT(req);
    await database();

    if (id) {
      const { name, description, lat, lng, price, available } = req.body;

      const parseAvailable = !!Number(available);
      console.log(parseAvailable);
      const user = await User.findOne({ _id: id });

      const local = await Local.create({
        _id: v4(),
        name,
        description,
        lat,
        lng,
        price,
        phone: user?.phone,
        img: req.file.location,
        userId: id,
        available: parseAvailable,
      });
      return res.send(local);
    } else {
      return res.status(401).json({ message: `Not user authentication` });
    }
  })
  .put(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    const id: string = await JWT(req);
    await database();

    if (id) {
      const { body, query } = req;
      const { file } = query;
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
      return res.status(401).json({ message: `Not user authentication` });
    }
  })
  .delete(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    const id: string = await JWT(req);
    await database();

    if (id) {
      const { query } = req;
      const { file } = query;

      const local: any = await Local.remove({ _id: file } as IFileQuery);

      return res.status(200).json({ message: true });
    } else {
      return res.status(401).json({ message: `Not user authentication` });
    }
  })
  .get(async (req: NextApiRequestWithFormData, res: NextApiResponse) => {
    const id: string = await JWT(req);
    await database();

    if (id) {
      const { query } = req;
      const { file } = query;

      const local = await Local.findOne({ _id: file } as IFileQuery);
      console.log(local);
      if (!local) {
        return res.status(403).json({ message: 'location is not found' });
      }

      return res.status(200).json(local);
    } else {
      return res.status(401).json({ message: `Not user authentication` });
    }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
