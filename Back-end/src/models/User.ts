import mongoose, { Schema } from 'mongoose';
import { UserInterface } from '../types';

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
