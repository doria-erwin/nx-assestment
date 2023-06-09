import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';

@Module({
	controllers: [],
	providers: [UserService],
	exports: [UserService],
})
export class DynamoDbLibModule {}
