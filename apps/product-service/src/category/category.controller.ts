import { CategoriesCreateDto, CategoriesDto, PageDto, QueryDto } from '@dto';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { PrismaClientExceptionFilter } from '@core-lib';
import { PaginationResponse } from '@decorator';

@Controller('category')
@ApiTags('category')
@UseFilters(PrismaClientExceptionFilter)
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    @ApiOkResponse({ description: 'Category', type: CategoriesDto })
    async create(@Body() body: CategoriesCreateDto) {
        return await this.categoryService.create(body);
    }

    @Put(':id')
    @ApiOkResponse({ description: 'Category', type: CategoriesDto })
    async update(@Param('id', ParseUUIDPipe) id: string, @Body() body: CategoriesCreateDto) {
        return await this.categoryService.update(id, body);
    }

    @Get(':id')
    @ApiOkResponse({ description: 'Category', type: CategoriesDto })
    async findById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.categoryService.findById(id);
    }

    @Get()
    @PaginationResponse(CategoriesDto)
    async findAll(@Query() query: QueryDto): Promise<PageDto<CategoriesDto>> {
        return await this.categoryService.findAll(query);
    }

    @Delete(':id')
    async deleteById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.categoryService.deleteById(id);
    }

}
