import mongoose, { Schema } from 'mongoose';
import { CategoryInterface } from '../types';

const cardSchema = new Schema<CategoryInterface>(
  {
    name: { type: 'string', index: true, required: true },
    userId: { type: Schema.Types.ObjectId, index: true, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'categories',
  }
);

export const Card = mongoose.model<CategoryInterface>('Card', cardSchema);
