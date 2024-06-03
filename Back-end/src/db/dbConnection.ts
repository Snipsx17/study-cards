import mongoose from 'mongoose';

mongoose.connection.once('open', () => {
  console.log(`Connected to ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Disconnected from ${mongoose.connection.name}`);
});

export const dbConnection = async (DB_URI: string) => {
  return mongoose.connect(DB_URI);
};
