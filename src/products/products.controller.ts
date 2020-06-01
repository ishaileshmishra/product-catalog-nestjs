// imports from @nestjs/common
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
// import ProductsService that has instance in the constructor of the
// ProductController to communicate with the service class that contains the business logic for the product module.
import { ProductsService } from './products.service';
// Type of the data to pass/retrieve throughout communication
import { CreateProductDto } from './dto/create.product.dto';

// The @Controller() decorator, which is required to define a basic controller.
// with a products entity under the route /products.
@Controller('products')
export class ProductController {
  // [Example of Dependency injection]
  // This is the instance of the ProductsService class in the contructor and it is Singleton in the nature.
  // It's useful to access the functions from the ProductService class !
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProducts();
  }

  @Get('/:id')
  async getProductById(@Param('id') prodId: string) {
    return await this.productService.getProductById(prodId);
  }

  @Post()
  async createProduct(@Body() productDto: CreateProductDto) {
    const { title, description, price } = productDto;
    const generatedId = await this.productService.createProduct(
      title,
      description,
      price,
    );
    return { id: generatedId };
  }

  @Patch('/:id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const productId = await this.productService.updateProduct(prodId, title, description, price);
    return productId;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') prodId: string) {
    await this.productService.deleteProduct(prodId);
    return null;
  }
}
