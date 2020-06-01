import * as mongoose from 'mongoose';

export enum Status {
  ORDERED = 'ORDERED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
}

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
}
