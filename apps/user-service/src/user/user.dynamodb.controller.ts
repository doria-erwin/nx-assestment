import {
  ApiKeyHeaderGuard,
} from "@auth-guard-lib";
import { UsersDto } from '@dto';
import { UserService } from '@dynamo-db-lib';
import {
  Body, Controller, Delete, Get, Param, Post, UseGuards
} from '@nestjs/common';
import {
  // ApiBearerAuth,
  ApiHeader,
  ApiTags,
} from "@nestjs/swagger";

@Controller("users-dynamo-db")
@ApiTags("users-dynamo-db")
// @ApiBearerAuth("JWT-auth")
// @UseGuards(CognitoAuthGuard)
export class UserDynamoDbController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() data: UsersDto) {

    return this.userService.createUserRecord(data);
  }

  @Get(":userId")
  getById(@Param("userId")userId: string){
    return this.userService.findById(userId);
  }

  @Get("/email/:email")
  getByEmail(@Param("email")email: string){
    return this.userService.findByEmail(email);
  }



  @Get("/role/:role/email/:email")
  getByRoleAndEmail(@Param("userRole")userRole: string,@Param("email")email: string){
    return this.userService.findByEmailByRole(userRole,email);
  }

  @Delete(":userId")
  deleteById(@Param("userId")userId: string){
    this.userService.deleteById(userId);
  }

  @Get("email-via-api-key/:email")
  @ApiHeader({
      name: "X-API-KEY",
  })
  @UseGuards(ApiKeyHeaderGuard)
  findUserByEmail(@Param("email") email: string) {
      return this.userService.findByEmail(email);
  }

}
