import { AwsS3LibService } from "@aws-s3-lib";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class FileServicesService {
  constructor(
    private readonly s3Service: AwsS3LibService,
    private readonly configService: ConfigService
  ) {}

  async uploadFile(file: Express.Multer.File) {
    //get the bucket name
    const bucketName = this.configService.get<string>("AWS_BUCKET_NAME");
    await this.s3Service.uploadFile("logo", bucketName, file,null);
  }

  async downloadFile(filename: string, key: string , mimeType : string , expiration :number) {
    const bucketName = this.configService.get<string>("AWS_BUCKET_NAME");
    return await this.s3Service.getSignedUrl(
      bucketName,
      key,
      mimeType,
      expiration
    );
  }
}
