import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { CognitoLibModule } from "@cognito-lib";

@Module({
  controllers: [AuthenticationController],
  imports: [CognitoLibModule],
  providers: [AuthenticationService],
})
export class AuthenticationModule {}
