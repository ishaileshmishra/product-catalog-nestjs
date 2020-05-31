import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  //imports: [ProductsModule],
  imports: [
    ProductsModule,
    // get the root link putting usernamre and password hardcoded for now
    MongooseModule.forRoot(
      'mongodb+srv://shaileshmishra:VEvKCG4zYt9r7dfX@cluster0-lmmr1.mongodb.net/product-catalog-nestjs?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
