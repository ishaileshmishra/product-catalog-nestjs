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

// =========== Understand Core Concepts ===========
// providers => the providers that will be instantiated by the Nest injector and that may be shared at least across this module
// controllers => the set of controllers defined in this module which have to be instantiated
// imports => the list of imported modules that export the providers which are required in this module
// exports => the subset of providers that are provided by this module and should be available in other modules which import this module
