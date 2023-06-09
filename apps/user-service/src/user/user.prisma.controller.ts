import { UsersDto } from "@dto";

import {
  CognitoAuthGuard,
  CurrentUser,
  UserCognito
} from "@auth-guard-lib";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserServicePrismaLibService } from "@user-service-prisma-lib";

@Controller("users-prisma-db")
@ApiTags("users-prisma-db")
@ApiBearerAuth("JWT-auth")
// @UseGuards(CognitoAuthGuard)
export class UserPrismaDbController {
  constructor(private readonly userService: UserServicePrismaLibService) {}

  @Post()
  create(@Body() data: UsersDto) {
    return this.userService.createRecord(data);
  }

  @Get(":userId")
  @UseGuards(CognitoAuthGuard)
  getById(
    @CurrentUser() currentUser: UserCognito,
    @Param("userId") userId: string
  ) {
    console.log(currentUser);
    return this.userService.getById(userId);
  }
}
