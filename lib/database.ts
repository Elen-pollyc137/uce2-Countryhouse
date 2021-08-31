import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

export default async function database(URI = MONGODB_URI) {
  return await mongoose.connect(URI, option);
}
