import { UsersDto } from "@dto";
import { Injectable } from "@nestjs/common";
import { PrismaDbLibService } from "@prisma-db-lib";

@Injectable()
export class UserServicePrismaLibService {
  constructor(private dbService: PrismaDbLibService) {}

  async createRecord(data: UsersDto) {
    return await this.dbService.user.create({
      data: {
        email: data.email,
        fullName: data.firstName + " " + data.lastName ,
        country: data.data.country,
      },
    });
  }

  async getById(id: string) {
    return await this.dbService.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
