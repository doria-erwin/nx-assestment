/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Core')
    .setDescription('Core API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { useGlobalPrefix: true });


  const port = process.env.PORT || 4000;
  await app.listen(port);
  Logger.log(`🚀 Authentication Service is running on: http://localhost:${port}`);
  Logger.log(`🚀 Authentication Swagger Endpoint : http://localhost:${port}/api`);
}

bootstrap();
