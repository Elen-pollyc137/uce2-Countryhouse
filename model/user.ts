import { Document, model, Model, Schema, models } from 'mongoose';
import { v4 } from 'uuid';
export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
}

const UserSchema: Schema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
});

export const User: Model<IUser> = models.User || model('User', UserSchema);
