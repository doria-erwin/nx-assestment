import { Module } from '@nestjs/common';
import { CoreLibModule } from "@core-lib";
import { PrismaDbLibModule } from "@prisma-db-lib";
import { ProductServicePrismaLibService } from './product-service-prisma-lib.service';
import { CategoryServicePrismaLibService } from './category-service-prisma-lib.service';

@Module({
	imports: [CoreLibModule, PrismaDbLibModule],
	providers: [ProductServicePrismaLibService, CategoryServicePrismaLibService],
	exports: [ProductServicePrismaLibService, CategoryServicePrismaLibService],
})
export class ProductServicePrismaLibModule {}
