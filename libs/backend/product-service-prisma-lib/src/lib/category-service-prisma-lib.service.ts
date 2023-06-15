import { Exception } from "@exception";
import { Injectable } from "@nestjs/common";
import { PrismaDbLibService } from "@prisma-db-lib";

@Injectable()
export class CategoryServicePrismaLibService{
    constructor(private dbService: PrismaDbLibService){}

    async isCategoryExistById(id: string, willThrow?: boolean) {
        const isExist = !!await this.dbService.category.count({
            where: {
                id
            }
        })

        if (!isExist && willThrow) throw Exception.NOT_FOUND('Category');

        return isExist;
    }
    
}