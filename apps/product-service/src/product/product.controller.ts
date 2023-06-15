import { PrismaClientExceptionFilter } from '@core-lib';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { ProductsCreateDto } from '@dto';

@Controller('product')
@ApiTags('product')
@UseFilters(PrismaClientExceptionFilter)
export class ProductController {
    constructor(private productService: ProductService){}

    @Post()
    async create(@Body() body: ProductsCreateDto) {
        return this.productService.create(body);
    }
}
