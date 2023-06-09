import { Module } from "@nestjs/common";
import { UserDynamoDbController } from "./user.dynamodb.controller";
import { DynamoDbLibModule } from "@dynamo-db-lib";
import { CoreLibModule } from "@core-lib";
import { AuthGuardLibModule } from "@auth-guard-lib";
import { UserPrismaDbController } from "./user.prisma.controller";
import { UserServicePrismaLibModule } from "@user-service-prisma-lib";
import { CognitoLibModule } from "@cognito-lib";
@Module({
  imports: [
    CoreLibModule,
    AuthGuardLibModule,
    DynamoDbLibModule,
    UserServicePrismaLibModule,
    CognitoLibModule,
  ],
  controllers: [UserDynamoDbController, UserPrismaDbController],
  providers: [],
})
export class UserModule {}
