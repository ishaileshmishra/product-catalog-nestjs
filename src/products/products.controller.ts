import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productService.fetchProducts();
    return products;
  }

  @Get(':id')
  async getProduct(@Param('id') prodId: string) {
    return await this.productService.fetchSingleProducts(prodId);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') prodId: string,
    @Param('title') title: string,
    @Param('description') description: string,
    @Param('price') price: number,
  ) {
    await this.productService.patchProduct(prodId, title, description, price);
    return null;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') prodId: string) {
    await this.productService.deleteProduct(prodId);
    return null;
  }
}
