import { PageDto, ProductQueryDto, ProductsCreateDto, ProductsDto, ProductsUpdateDto, ResponseMessageDto } from '@dto';
import { Injectable } from '@nestjs/common';
import { PrismaDbLibService } from '@prisma-db-lib';
import { Product, ProductPicture } from '@prisma/client';
import { CategoryServicePrismaLibService, ProductServicePrismaLibService } from '@product-service-prisma-lib';
import { removeUndefinedOrNullFromObject } from '@utils';

@Injectable()
export class ProductService {
    constructor(
        private prismaDbLib: PrismaDbLibService,
        private productServiceDbLib: ProductServicePrismaLibService,
        private categoryServiceDbLib: CategoryServicePrismaLibService) { }

    async create(body: ProductsCreateDto) {
        const { categoryId, name, description, pictures, price } = body;

        const product = await this.prismaDbLib.product.create({
            data: {
                name,
                description,
                categoryId,
                price,
                pictures: {
                    create: pictures.map(url => ({
                        url
                    }))
                }
            },
            include: {
                pictures: true,
                category: true
            }
        })

        return this.mapToDto(product)
    }

    async update(id: string, body: ProductsUpdateDto) {
        await this.productServiceDbLib.isProductExistById(id, true);

        const { categoryId, description, name, pictures, price } = body;
        let newPictures: object | undefined;
        let hasCategory = false;

        if (categoryId) hasCategory = await this.categoryServiceDbLib.isCategoryExistById(categoryId);

        if (pictures !== undefined) {
            newPictures = {
                deleteMany: {
                    productId: id
                },
                create: pictures.map(url => ({ url }))
            }
        }

        const updateProduct = removeUndefinedOrNullFromObject({
            name,
            pictures: newPictures,
            price,
            description,
        })

        const product = await this.prismaDbLib.product.update({
            where: {
                id
            },
            data: updateProduct,
            include: {
                pictures: !!newPictures,
                category: hasCategory
            }
        })

        return this.mapToDto(product)
    }

    async findById(id: string) {
        const product = await this.prismaDbLib.product.findFirstOrThrow({
            where: {
                id,
                isDeleted: false
            },
            include: {
                pictures: true
            }
        })

        return this.mapToDto(product)
    }

    async findAll(query: ProductQueryDto): Promise<PageDto<ProductsDto>> {
        const { limit, order, orderBy, page, search, categoryId } = query;

        const where = {
            name: {
                contains: search
            },
            isDeleted: false
        };

        if (categoryId) {
            await this.categoryServiceDbLib.isCategoryExistById(categoryId, true);
            where['categoryId'] = categoryId
        }

        const [count, products] = await this.prismaDbLib.$transaction([
            this.prismaDbLib.product.count({
                where
            }),
            this.prismaDbLib.product.findMany({
                skip: page,
                take: limit,
                orderBy: {
                    [orderBy]: order
                },
                where,
                include: {
                    pictures: true
                }
            })
        ]);

        return new PageDto(
            products?.map(product => this.mapToDto(product)),
            products?.length,
            Math.ceil(count / limit)
        );
    }

    async deleteById(id:string):Promise<ResponseMessageDto>{
        await this.productServiceDbLib.isProductExistById(id, true);

        await this.prismaDbLib.product.update({
            where: {
                id
            },
            data:{
                isDeleted: true
            }
        })

        return {
            message: 'Successfully deleted product'
        }
    }

    mapToDto(product: Product & {
        pictures: ProductPicture[];
    }): ProductsDto {
        const { id, name, description, price, categoryId, pictures, createdAt, updatedAt } = product;
        return {
            id,
            name,
            description,
            price: price.toNumber(),
            categoryId,
            pictures: pictures?.map(picture => picture?.url),
            createdAt,
            updatedAt
        }
    }
}
