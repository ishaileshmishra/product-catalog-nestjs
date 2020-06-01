import { Module } from '@nestjs/common';
// Mongoose, the most popular MongoDB object modeling tool
import { MongooseModule } from '@nestjs/mongoose';
// Controllers are responsible for handling incoming requests and returning responses to the client.
import { ProductController } from './products.controller';
// Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on
import { ProductsService } from './products.service';
// Model for the data type to communicate
import { ProductSchema } from './product.model';

// In Nest, modules are singletons by default,
// and thus you can share the same instance of any provider between multiple modules effortlessly
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
