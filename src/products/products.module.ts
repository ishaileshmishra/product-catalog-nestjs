import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from 'src/models/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductsService],
  // this is to create shared module for products
  //exports: [ProductsService],
})
export class ProductsModule {}
