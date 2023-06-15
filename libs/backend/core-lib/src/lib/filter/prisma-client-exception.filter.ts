import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const message = exception.message.replace(/\n/g, '');
        const request = ctx.getRequest<Request>();

        switch (exception.code) {
            case 'P2002': {
                const status = HttpStatus.CONFLICT;
                response.status(status).json({
                    url: request.url,
                    body: request.body,
                    statusCode: status,
                    message: message,
                });

                break;
            }
            case 'P2003':
            case 'P2019':
            case 'P2025': {
                const status = HttpStatus.BAD_REQUEST;
                response.status(status).json({
                    url: request.url,
                    body: request.body,
                    statusCode: status,
                    message: message,
                });
                break;
            }
            default:
                // default 500 error code
                super.catch(exception, host);
                break;
        }

    }
}
