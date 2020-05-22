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
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productService.fetchProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productService.fetchSingleProducts(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Param('title') title: string,
    @Param('description') description: string,
    @Param('price') price: number,
  ) {
    this.productService.patchProduct(prodId, title, description, price);
    return null;
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productService.deleteProduct(prodId);
    return null;
  }
}
