import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`application runs on port: ${config.port}`);
  await app.listen(config.port);
}
bootstrap();
