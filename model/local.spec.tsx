import { Local } from './local';
import database from '../lib/database';
const URI =
  'mongodb+srv://admin:3n5df3k9@goweek.nxmj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
/**
 * @jest-environment jsdom
 */

describe('database if return', () => {
  it('local is exist', async () => {
    type IFileQuery = {
      _id: string;
    };
    await database(URI);

    const local: any = await Local.findOne({
      _id: 'dd88bf7a-384b-46f6-9eb2-dc8130857298',
    } as IFileQuery);

    expect(local.id).toBe('dd88bf7a-384b-46f6-9eb2-dc8130857298');
  });
  it('local is totals fil', async () => {
    type IFileQuery = {
      _id: string;
    };
    await database(URI);

    const local: any = await Local.findOne({
      _id: 'dd88bf7a-384b-46f6-9eb2-dc8130857298',
    } as IFileQuery);

    expect(local['_id']).toBeTruthy();
    expect(local['name']).toBeTruthy();
    expect(local['lat']).toBeTruthy();
    expect(local['lng']).toBeTruthy();
    expect(local['description']).toBeTruthy();
    expect(local['price']).toBeTruthy();
    expect(local['img']).toBeTruthy();
  });
  it('local is values', async () => {
    type IFileQuery = {
      _id: string;
    };
    await database(URI);

    const local: any = await Local.findOne({
      _id: 'dd88bf7a-384b-46f6-9eb2-dc8130857298',
    } as IFileQuery);

    expect(local['name']).toBe('Casa de Campo Monte Alto');
    expect(local['lat']).toBe('-15.592642002760249');
    expect(local['lng']).toBe('-42.82834128829648');
  });
  it('local is array > 1', async () => {
    await database(URI);

    const local: any = await Local.find();

    expect(local.length > 1).toBeTruthy();
  });
});
