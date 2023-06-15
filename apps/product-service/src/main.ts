/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Swagger } from '@swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  app.setGlobalPrefix(globalPrefix);

  new Swagger({
    title: 'Product',
    description: 'Product API',
    version: '1.0',
    app,
  });


  const port = process.env.PORT || 4006;
  await app.listen(port);
  Logger.log(`🚀 User Service is running on: http://localhost:${port}`);
  Logger.log(`🚀 User Swagger Endpoint : http://localhost:${port}/api`);
}

bootstrap();
