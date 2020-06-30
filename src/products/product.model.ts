import * as mongoose from 'mongoose';

export enum DeliveryStatus {
  ORDERED = 'ORDERED',
  IN_PROGRESS = 'IN_PROGRESS',
  DELIVERED = 'DELIVERED',
}

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: DeliveryStatus, required: true },
});

export interface Product extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  price: number;
  status: DeliveryStatus;
}

// export class Product {
//   constructor(
//     public id: string,
//     public title: string,
//     public description: string,
//     public price: number,
//   ) {}
// }
