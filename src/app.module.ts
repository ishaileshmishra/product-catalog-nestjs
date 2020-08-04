import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
//import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import config from './config/keys';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ProductsModule,
    SharedModule,
    AuthModule,
    MongooseModule.forRoot(config.mongoURI),
    SharedModule,
  ],
  providers: [AppService, AuthService],
  controllers: [AppController],
})
export class AppModule {}
