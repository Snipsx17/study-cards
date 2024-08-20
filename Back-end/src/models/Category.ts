import mongoose, { Schema } from 'mongoose';
import { CategoryInterface } from '../types';

const categorySchema = new Schema<CategoryInterface>(
  {
    name: { type: 'string', index: true, required: true },
    owner: { type: Schema.Types.ObjectId, index: true, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'categories',
  }
);

export const Category = mongoose.model<CategoryInterface>(
  'Category',
  categorySchema
);
