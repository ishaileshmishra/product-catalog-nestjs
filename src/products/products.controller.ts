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

@Controller('products')
export class ProductController {
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
    const productId = await this.productService.createProduct(productDto);
    return { id: productId };
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
