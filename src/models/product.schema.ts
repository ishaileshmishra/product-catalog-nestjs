import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: String,
  description: String,
  price: String,
  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
