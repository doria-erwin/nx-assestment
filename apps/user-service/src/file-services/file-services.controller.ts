import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  StreamableFile,
  Query,
} from "@nestjs/common";
import { FileServicesService } from "./file-services.service";
import { ApiConsumes, ApiBody, ApiTags } from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";
import { Readable } from "stream";

@Controller("file-services")
@ApiTags("file-services")
export class FileServicesController {
  constructor(private readonly fileServicesService: FileServicesService) {}

  @Post("upload-logo")
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileServicesService.uploadFile(file);
  }

  @Get()
  async downloadFile(
    @Query("bucketName") bucketName: string,
    @Query("key") key: string,
    @Query("mimeType") mimeType: string,
    @Query("expiration") expiration: number
  ) {
    return  await this.fileServicesService.downloadFile(
      bucketName,
      key,
      mimeType,
      expiration
    );
  }
}
