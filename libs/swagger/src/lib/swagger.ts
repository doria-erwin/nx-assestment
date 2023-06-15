import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export class Swagger {

    constructor(
        private properties: {
            app: INestApplication,
            title: string,
            description: string,
            version: string,
            globalPrefix?: string,
            useGlobalPrefix?: boolean,
            bearerOptions?: {
                options?: SecuritySchemeObject,
                name?: string
            }
        }) {

        const {
            app,
            title,
            description,
            version,
            useGlobalPrefix = false,
            globalPrefix = 'api',
            bearerOptions
        } = properties;
        const {
            options,
            name
        } = bearerOptions || {};

        const config = new DocumentBuilder()
            .setTitle(title)
            .setVersion(version)
            .setDescription(description)
            .addBearerAuth(options || {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            }, name || 'Bearer')
            .build();

        const document = SwaggerModule.createDocument(app, config);

        SwaggerModule.setup(
            globalPrefix,
            app,
            document,
            {
                useGlobalPrefix
            }
        );
    }
}