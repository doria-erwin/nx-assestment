import { Module } from "@nestjs/common";
import { UserServicePrismaLibService } from "./user-service-prisma-lib.service";
import { CoreLibModule } from "@core-lib";
import { PrismaDbLibModule } from "@prisma-db-lib";

@Module({
  imports: [CoreLibModule, PrismaDbLibModule],
  providers: [UserServicePrismaLibService],
  exports: [UserServicePrismaLibService],
})
export class UserServicePrismaLibModule {}
