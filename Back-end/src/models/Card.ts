import mongoose, { Schema } from 'mongoose';
import { CardInterface } from '../types';

const cardSchema = new Schema<CardInterface>(
  {
    question: { type: 'string', index: true, required: true },
    response: { type: 'string', required: true },
    category: { type: 'string', index: true },
    owner: { type: Schema.Types.ObjectId, index: true, ref: 'User' },
  },
  {
    timestamps: true,
    collection: 'cards',
  }
);

export const Card = mongoose.model<CardInterface>('Card', cardSchema);
