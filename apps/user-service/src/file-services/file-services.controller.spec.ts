import { Test, TestingModule } from '@nestjs/testing';
import { FileServicesController } from './file-services.controller';
import { FileServicesService } from './file-services.service';

describe('FileServicesController', () => {
  let controller: FileServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileServicesController],
      providers: [FileServicesService],
    }).compile();

    controller = module.get<FileServicesController>(FileServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
