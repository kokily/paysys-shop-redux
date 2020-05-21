import mongoose, { Document } from 'mongoose';
import { ItemType } from './Item';

export type CartType = {
  count: number;
  amount: number;
} & ItemType;

export interface BillSchemaType {
  _id: mongoose.Types.ObjectId;
  title: string;
  hall: string;
  etc: string;
  total: number;
  list: CartType;
  user: {
    _id: mongoose.Types.ObjectId;
    username: string;
  };
  reserve: number;
}

export interface BillQueryType {
  title: string;
  username: string;
}

export interface BillType extends Document {
  title: string;
  hall: string;
  etc: string;
  total: number;
  list: CartType;
  user: {
    _id: mongoose.Types.ObjectId;
    username: string;
  };
  reserve?: number;
  createdAt?: string;
  updatedAt?: string;
}

const billSchema = new mongoose.Schema({
  title: String,
  hall: String,
  etc: String,
  total: Number,
  list: [
    {
      name: String,
      native: String,
      divide: String,
      unit: String,
      price: Number,
      count: Number,
      amount: Number,
    },
  ],
  user: {
    _id: mongoose.Types.ObjectId,
    username: String,
  },
  reserve: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

export default mongoose.model<BillType>('bill', billSchema);
