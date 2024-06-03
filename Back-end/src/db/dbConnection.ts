import { config } from 'dotenv';
import mongoose from 'mongoose';
config();

const DB_URI = 'mongodb://localhost:27017/study-cards';

mongoose.connection.once('open', () => {
  console.log(`Connected to ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Disconnected from ${mongoose.connection.name}`);
});

export const dbConnection = () => {
  return mongoose.connect(DB_URI);
};
