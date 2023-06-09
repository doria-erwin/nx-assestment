import { Injectable } from "@nestjs/common";

import {
  AdminCreateUserCommand,
  AdminDeleteUserCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class CognitoLibService {
  private cognitoClient: CognitoIdentityProviderClient;
  constructor(private readonly configService: ConfigService) {
    this.cognitoClient = new CognitoIdentityProviderClient({
      region: this.configService.get<string>("DEFAULT_REGION"),
    });
  }

  async getCognitoUser(email: string) {
    const input = {
      UserPoolId: this.configService.get<string>("AWS_COGNITO_USER_POOL_ID"),
      Username: email,
    };
    const command = new AdminGetUserCommand(input);
    const response = await this.cognitoClient.send(command);
    return response;
  }

  async deleteUser(email: string) {
    const input = {
      UserPoolId: this.configService.get<string>("AWS_COGNITO_USER_POOL_ID"),
      Username: email,
    };
    const command = new AdminDeleteUserCommand(input);
    const response = await this.cognitoClient.send(command);
    return response;
  }

  async loginUser(email: string, password: string) {
    const input = {
      UserPoolId: this.configService.get<string>("AWS_COGNITO_USER_POOL_ID"),
      ClientId: this.configService.get<string>("AWS_COGNITO_CLIENT_ID"),
      AuthFlow: "ADMIN_USER_PASSWORD_AUTH",
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };
    const command = new AdminInitiateAuthCommand(input);
    const response = await this.cognitoClient.send(command);
    return response;
  }

  async createUser(email: string, password: string) {
    const input = {
      UserPoolId: this.configService.get<string>("AWS_COGNITO_USER_POOL_ID"),
      Username: email,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
        {
          Name: "email_verified",
          Value: "true",
        },
      ],
      TemporaryPassword: password,
      ForceAliasCreation: false,

      DesiredDeliveryMediums: ["EMAIL"],
    };
    const command = new AdminCreateUserCommand(input);
    const response = await this.cognitoClient.send(command);
    return response;
  }
}
