import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CoreLibModule } from '@core-lib';
import { PrismaDbLibModule } from '@prisma-db-lib';
import { CategoryController } from './category.controller';
import { ProductServicePrismaLibModule } from '@product-service-prisma-lib';

@Module({
  imports: [
    CoreLibModule,
    PrismaDbLibModule,
    ProductServicePrismaLibModule
  ],
  providers: [
    CategoryService
  ],
  controllers: [
    CategoryController
  ]
})
export class CategoryModule { }
