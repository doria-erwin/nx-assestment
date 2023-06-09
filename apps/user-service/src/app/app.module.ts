import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "../user/user.module";
import { AuthenticationModule } from "../authentication/authentication.module";
import { FileServicesModule } from "../file-services/file-services.module";

@Module({
  imports: [UserModule, AuthenticationModule, FileServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
