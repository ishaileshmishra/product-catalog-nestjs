import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/types/product';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private products: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return await this.products.find().populate('owner');
  }

  async create(productModel: Product) {
    console.log(productModel);
    //const { title, description, image, price } = productModel;

    return await this.products.create(productModel);
  }
}
