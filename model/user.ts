import { Document, model, Model, Schema, models } from 'mongoose';
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

export const User: Model<IUser> = models.User || model('User', UserSchema);
