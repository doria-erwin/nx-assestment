import { Injectable } from '@nestjs/common';
import { PrismaDbLibService } from '@prisma-db-lib';
import { CategoriesCreateDto, CategoriesDto, PageDto, QueryDto } from '@dto';

@Injectable()
export class CategoryService {

    constructor(private prismaDbLib: PrismaDbLibService) { }

    async create(body: CategoriesCreateDto) {
        const { name, description } = body;

        return await this.prismaDbLib.category.create({
            data: {
                name,
                description
            }
        });

    }

    async update(id: string, body: CategoriesCreateDto) {
        const { name, description } = body;

        return await this.prismaDbLib.category.update({
            data: {
                name,
                description
            },
            where: {
                id
            }
        });
    }

    async findById(id: string) {
        return await this.prismaDbLib.category.findFirstOrThrow({
            where: {
                id
            }
        })
    }

    async findAll(query: QueryDto): Promise<PageDto<CategoriesDto>> {
        const { limit, order, orderBy, page, search } = query;

        const where = {
            name: {
                contains: search
            }
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

}
