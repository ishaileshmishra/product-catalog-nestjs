import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  // creates new product
  async insertProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }

  // gets all products
  async fetchProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  // gets single product by id
  async fetchSingleProducts(productId: string) {
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  // update a product
  async patchProduct(
    productId: string,
    title: string,
    description: string,
    price: number,
  ) {
    const updatedProduct = await this.findProduct(productId);
    if (title) {
      updatedProduct.title = title;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    updatedProduct.save();
  }

  // delete a product
  async deleteProduct(productId: string) {
    const result = await this.productModel.deleteOne({ _id: productId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('could not found product');
    }
  }

  // private common function to find the product
  private async findProduct(id: string): Promise<Product> {
    let product: Product;
    try {
      product = await this.productModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('could not found product');
    }
    if (!product) {
      throw new NotFoundException('could not found product');
    }
    return product;
  }
}
