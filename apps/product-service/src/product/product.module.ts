import { Module } from '@nestjs/common';
import {CoreLibModule} from '@core-lib';
import {PrismaDbLibModule} from '@prisma-db-lib';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
@Module({
    imports:[
        CoreLibModule,
        PrismaDbLibModule
    ],
    providers:[ProductService],
    controllers: [ProductController]
})
export class ProductModule {}
