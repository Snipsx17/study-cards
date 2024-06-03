import mongoose, { Schema } from 'mongoose';

const userSchema: Schema = new Schema(
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
    saltRounds: {
      type: Number,
      required: true,
      default: 5,
      index: true,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

export const User = mongoose.model('User', userSchema);
