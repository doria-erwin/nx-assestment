import { Injectable } from '@nestjs/common';
import { PrismaDbLibService } from '@prisma-db-lib';
import { CategoriesCreateDto, CategoriesDto, PageDto, QueryDto, ResponseMessageDto } from '@dto';
import { Category } from '@prisma/client';
import { CategoryServicePrismaLibService } from '@product-service-prisma-lib';

@Injectable()
export class CategoryService {

    constructor(
        private prismaDbLib: PrismaDbLibService,
        private categoryServiceDbLib: CategoryServicePrismaLibService) { }

    async create(body: CategoriesCreateDto) {
        const { name, description } = body;

        const product = await this.prismaDbLib.category.create({
            data: {
                name,
                description
            }
        });

        return this.mapToDto(product)

    }

    async update(id: string, body: CategoriesCreateDto) {
        const { name, description } = body;

        const category = await this.prismaDbLib.category.update({
            data: {
                name,
                description
            },
            where: {
                id
            }
        });

        return this.mapToDto(category);
    }

    async findById(id: string) {
        const category = await this.prismaDbLib.category.findFirstOrThrow({
            where: {
                id,
                isDeleted: false
            }
        })

        return this.mapToDto(category);
    }

    async findAll(query: QueryDto): Promise<PageDto<CategoriesDto>> {
        const { limit, order, orderBy, page, search } = query;

        const where = {
            name: {
                contains: search
            },
            isDeleted: false
        };

        const [count, categories] = await this.prismaDbLib.$transaction([
            this.prismaDbLib.category.count({
                where
            }),
            this.prismaDbLib.category.findMany({
                skip: page,
                take: limit,
                orderBy: {
                    [orderBy]: order
                },
                where
            })
        ]);

        return new PageDto(
            categories,
            categories?.length,
            Math.ceil(count / limit)
        );

    }

    async deleteById(id:string):Promise<ResponseMessageDto>{
        await this.categoryServiceDbLib.isCategoryExistById(id, true);

        await this.prismaDbLib.category.update({
            where: {
                id
            },
            data:{
                isDeleted: true
            }
        })

        return {
            message: 'Successfully deleted category'
        }
    }

    mapToDto(category: Category):CategoriesDto{
        const {id, name, description, createdAt, updatedAt} = category;

        return {
            id,
            name,
            description,
            createdAt,
            updatedAt
        }
    }

}
