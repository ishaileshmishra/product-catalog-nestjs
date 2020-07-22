// imports from @nestjs/common
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';

import { ProductsService } from './products.service';
import { ProductDto } from './dto/create.prooduct.dto';
//import { Product } from './product.model';
// import { User } from 'src/auth/user.model';
// import { GetUser } from 'src/auth/get-user.decorator';

@Controller('products')
export class ProductController {
  // [Example of Dependency injection]
  // This is the instance of the ProductsService class in the contructor and it is Singleton in the nature.
  // It's useful to access the functions from the ProductService class !
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts(@Query() filterDTO: ProductDto) {
    if (Object.keys(filterDTO).length) {
      // Get Queries params using the decorator @Query
      return await this.productService.getProductsWithFilters(filterDTO);
    } else {
      // Get all the products
      return await this.productService.getAllProducts();
    }
  }

  @Get('/:id')
  async getProductById(@Param('id') prodId: string) {
    return await this.productService.getProductById(prodId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createProduct(@Body() productDto: ProductDto) {
    console.log(`product recieved in controller: ${productDto.title}`);
    return await this.productService.createProduct(productDto);
  }

  @Patch('/:id')
  async updateProduct(
    @Param('id') prodId: string,
    @Body() productDto: ProductDto,
  ) {
    const productId = await this.productService.updateProduct(
      prodId,
      productDto,
    );
    return productId;
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') prodId: string) {
    await this.productService.deleteProduct(prodId);
    return null;
  }
}
