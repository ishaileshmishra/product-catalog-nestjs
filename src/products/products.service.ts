import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { ProductDto } from './dto/create.prooduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  // gets all products
  async getAllProducts() {
    const products = await this.productModel.find().exec();
    // Make a proper response formate to avoid return value like _id and v included in the response by the mongoose.
    return products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    }));
  }

  async getProductsWithFilters(productDto: ProductDto) {
    const { title, description, price } = productDto;
    let products = await this.getAllProducts();
    if (title) {
      products = products.filter(product => product.title === title);
    }
    if (description) {
      products = products.filter(product => product.description == description);
    }
    if (price) {
      products = products.filter(product => product.price == price);
    }
    return products.map(product => ({
      title: product.title,
      description: product.description,
      price: product.price,
    }));
  }

  async getProductById(productId: string): Promise<object> {
    const product = await this.productModel.findOne({ _id: productId });
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }

  // update a product
  async updateProduct(
    productId: string,
    productDTO: ProductDto,
  ): Promise<string> {
    const { title, description, price } = productDTO;
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
    // if (status) {
    //   updatedProduct.status = status;
    // }
    updatedProduct.save();
    return `${productId} updated successfully`;
  }

  // delete a product
  async deleteProduct(productId: string): Promise<string> {
    const result = await this.productModel.deleteOne({ _id: productId }).exec();
    console.log('result', result);
    if (result.n === 0) {
      throw new NotFoundException('could not found product');
    }
    return `${productId} deleted successfully`;
  }

  // creates new product
  async createProduct(productDto: ProductDto) {
    const { title, description, price, status } = productDto;
    console.log(
      `product recieved in service: title: ${title},  description: ${description}, price: ${price}, status: ${status}`,
    );
    const newProduct = new this.productModel({
      title: title,
      description: description,
      price: price,
      status: status,
    });
    const result = await newProduct.save();
    return result.id;
  }

  private async findProduct(id: string) {
    let product: Product;
    try {
      product = await this.productModel.findById(id).exec();
      if (!product) {
        throw new NotFoundException('could not found product');
      }
    } catch (error) {
      throw new NotFoundException('could not found product');
    }
    return product;
  }
}
