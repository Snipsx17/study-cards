import mongoose, { Schema } from 'mongoose';

const User: Schema = new Schema(
  {
    name: {
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

const userModel = mongoose.model('User', User);
