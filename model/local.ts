import { Document, model, Model, Schema, models } from 'mongoose';
export interface ILocal extends Document {
  _id: string;
  name: string;
  description: string;
  lat: string;
  lng: string;
  phone: string;
  userId: string;
  img: string;
  price: string;
}

const LocalSchema: Schema = new Schema({
  _id: {
    type: String,
    unique: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  lat: { type: String, required: true },
  lng: { type: String, required: true },
  phone: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: String, required: true },
  userId: {
    type: String,
    ref: 'User',
  },
});

export const Local: Model<ILocal> = models.Local || model('Local', LocalSchema);
