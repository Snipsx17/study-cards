import mongoose, { Schema } from 'mongoose';

interface UserInterface {
  username: string;
  email: string;
  password: string;
}
const userSchema = new Schema<UserInterface>(
  {
    username: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

export const User = mongoose.model<UserInterface>('User', userSchema);
