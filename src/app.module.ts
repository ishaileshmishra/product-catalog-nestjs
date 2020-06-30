// Module is a class annotated with a @Module() decorator.
// The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

// Add your array of modules in the section of impots.
@Module({
  imports: [
    ProductsModule,
    // get the root link from https://cloud.mongodb.com/
    // find the  username and password from the secuirity section and Network Access Tab
    MongooseModule.forRoot(
      'mongodb+srv://shaileshmishra:VEvKCG4zYt9r7dfX@cluster0-lmmr1.mongodb.net/product-catalog-nestjs?retryWrites=true&w=majority',
    ),
    AuthModule,
    ConfigModule.forRoot({
      // envFilePath: '.development.env', // Custom env file path
      // ignoreEnvFile: true, // Disable env variables loading
      isGlobal: true, // Use module globally
    }),
  ],
})
export class AppModule {}

// =========== Understand Core Concepts ===========
// providers => the providers that will be instantiated by the Nest injector and that may be shared at least across this module
// controllers => the set of controllers defined in this module which have to be instantiated
// imports => the list of imported modules that export the providers which are required in this module
// exports => the subset of providers that are provided by this module and should be available in other modules which import this module
