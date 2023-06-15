import { Injectable } from "@nestjs/common";
import { PrismaDbLibService } from "@prisma-db-lib";
import { Exception } from "@exception";

@Injectable()
export class ProductServicePrismaLibService{
    constructor(private dbService: PrismaDbLibService){}
    
    async isProductExistById(id: string, willThrow?: boolean){
        const isExist = !!await this.dbService.product.count({
            where: {
                id
            }
        })

        if (!isExist && willThrow) throw Exception.NOT_FOUND('Product');

        return isExist;
    }
}