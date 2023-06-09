import { CognitoLibService } from "@cognito-lib";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  constructor(private readonly cognitoService: CognitoLibService) {}

  async login(username: string, password: string) {
    return await this.cognitoService.loginUser(username, password);
  }

  async createCognitoUser(username: string, password: string) {
    return await this.cognitoService.createUser(username, password);
  }
}
