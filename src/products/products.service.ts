import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';
import { ProductDto } from './dto/create.prooduct.dto';
import { User } from 'src/auth/user.model';

// This service will be responsible for business logic,
// and is designed to be used by the ProductsController,
// so it's a good candidate to be defined as a provider.
// Thus, we decorate the class with @Injectable().
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

  async getProductsWithFilters(filterDto: ProductDto) {
    const { title, description, price } = filterDto;
    let products = await this.getProducts();
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

  // update a product
  async updateProduct(productId: string, productDTO: ProductDto) {
    const { title, description, price, status } = productDTO;
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
    if (status) {
      updatedProduct.status = status;
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
  async createProduct(productDto: ProductDto, user: User) {
    const { title, description, price, status } = productDto;
    const {} = user;
    const newProduct = new this.productModel({
      title,
      description,
      price,
      status,
    });
    const result = await newProduct.save();
    return result.id;
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
