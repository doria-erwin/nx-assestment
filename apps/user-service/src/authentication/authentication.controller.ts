import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { ApiTags } from "@nestjs/swagger";
import { CognitoDto } from "@dto";

@Controller("authentication")
@ApiTags("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  create(@Body() data: CognitoDto) {
    return this.authenticationService.createCognitoUser(
      data.email,
      data.password
    );
  }

  @Post("login")
  login(@Body() data: CognitoDto) {
    return this.authenticationService.login(data.email, data.password);
  }
}
