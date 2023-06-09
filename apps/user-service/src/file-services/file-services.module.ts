import { Module } from "@nestjs/common";
import { FileServicesService } from "./file-services.service";
import { FileServicesController } from "./file-services.controller";
import { AwsS3LibModule } from "@aws-s3-lib";

@Module({
  imports: [AwsS3LibModule],
  controllers: [FileServicesController],
  providers: [FileServicesService],
})
export class FileServicesModule {}
