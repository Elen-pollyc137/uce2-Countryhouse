import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export default async function database() {
  return await mongoose.connect(MONGODB_URI, option);
}
