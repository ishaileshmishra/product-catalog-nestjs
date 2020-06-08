import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductSchema } from './product.model';

@Module({
  // Mongoose, the most popular MongoDB object modeling tool
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  // This is the controller for the Products Module
  controllers: [ProductController],
  // This is the provider in this case ProductService
  providers: [ProductsService],
})
export class ProductsModule {}
