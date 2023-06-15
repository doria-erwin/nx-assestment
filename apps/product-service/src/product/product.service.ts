import { ProductsCreateDto } from '@dto';
import { Injectable } from '@nestjs/common';
import { PrismaDbLibService } from '@prisma-db-lib';

@Injectable()
export class ProductService {
    constructor(private prismaDbLib: PrismaDbLibService) { }

    async create(body: ProductsCreateDto) {
        const { categoryId, name, description, pictures, price } = body;

        return await this.prismaDbLib.product.create({
            data: {
                name,
                description,
                categoryId,
                price,
                pictures: {
                    create: [
                        ...pictures.map(url => ({
                            url
                        }))
                    ]
                }
            },
            include: {
                pictures: true,
                category: true
            }
        })
    }
}
