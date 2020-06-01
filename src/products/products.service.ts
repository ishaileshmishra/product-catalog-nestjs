import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { GetProductsFilterDto } from './dto/get.products.filter.dto';

// This service will be responsible for data storage and retrieval,
// and is designed to be used by the ProductsController,
// so it's a good candidate to be defined as a provider. Thus, we decorate the class with @Injectable().
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  // gets all products
  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    }));
  }

  // gets single product by id
  async getProductById(productId: string) {
    // Validate whether requested productId is available in the database otherwise throw an exception
    const product = await this.findProduct(productId);
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  // async getProductByFilters( filterDTO: GetProductsFilterDto){
  //    const products = await this.productModel.
  // }

  // update a product
  async updateProduct(
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
    return productId;
  }

  // delete a product
  async deleteProduct(productId: string) {
    const result = await this.productModel.deleteOne({ _id: productId }).exec();
    console.log('result', result);
    if (result.n === 0) {
      throw new NotFoundException('could not found product');
    }
  }

  // creates new product
  async createProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const result = await newProduct.save();
    return result;
  }

  // private common function to find the product
  // Validate whether requested productId is available in the database otherwise throw an exception
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
