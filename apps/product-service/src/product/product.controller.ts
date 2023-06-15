import { PrismaClientExceptionFilter } from '@core-lib';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { PageDto, ProductQueryDto, ProductsCreateDto, ProductsDto, ProductsUpdateDto } from '@dto';
import { PaginationResponse } from '@decorator';
@Controller('product')
@ApiTags('product')
@UseFilters(PrismaClientExceptionFilter)
export class ProductController {
    constructor(private productService: ProductService){}

    @Post()
    @ApiOkResponse({ description: 'Product', type: ProductsDto })
    async create(@Body() body: ProductsCreateDto) {
        return await this.productService.create(body);
    }

    @Patch(':id')
    @ApiOkResponse({ description: 'Product', type: ProductsDto })
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() body: ProductsUpdateDto){
        return await this.productService.update(id, body);
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Product', type: ProductsDto })
    async findById(@Param('id', ParseUUIDPipe) id: string){
        return await this.productService.findById(id)
    }

    @Get()
    @PaginationResponse(ProductsDto)
    async findAll(@Query() query: ProductQueryDto): Promise<PageDto<ProductsDto>> {
        return await this.productService.findAll(query);
    }

    @Delete(':id')
    async deleteById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.productService.deleteById(id);
    }
}
