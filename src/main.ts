import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //console.log(`Running on port : ${config.port}`);
  app.setGlobalPrefix('api');
  // process.env.PORT
  await app.listen(config.port);
}
bootstrap();
