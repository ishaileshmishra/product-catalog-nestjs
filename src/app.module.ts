import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(config.mongoURI),
    AuthModule,
  ],
})
export class AppModule {}
