import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app/app.module';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Authentication')
    .setDescription('Authentication API')
    .setVersion('1.0')
    .addServer(`/${process.env.STAGE}/authentication`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, { useGlobalPrefix: true });

  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: APIGatewayEvent, context: Context, callback: Callback) => {
  if (event.path === '/swagger') {
    event.path = '/swagger/'
  }

  event.path = event.path.includes('swagger-ui') ? `/swagger${event.path}` : event.path;
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};