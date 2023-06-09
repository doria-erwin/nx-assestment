import { PageDto, UsersDto } from '@dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { dynamoDbMainTable } from '../dynamodb.main.table';
import { createDynamoDbOptionWithPKSKIndex } from '../utils/dynamodb.options.util';
@Injectable()
export class UserService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private userTable: any = null;

  constructor() {
    this.userTable = dynamoDbMainTable.getModel('User');
  }



  async createUserRecord(userData: UsersDto) {
    const existingRecords = await this.findByEmail(userData.email);
    if (existingRecords.length > 0) {
      throw new BadRequestException('Email Already Exist');
    }

    await this.userTable.create({
      userRole: userData.userRole,
      data: {
        country: userData.data.country,
      },
      firstName: userData.firstName,
      lastName: userData.lastName,
      GSI1PK: userData.userRole,
      GSI1SK: userData.email,
      GSI2PK: userData.email,
    });
  }

  async findByEmail(email: string) {
    const userRecord = await this.userTable.find(
      {
        GSI2PK: email,
      },
      {
        index: 'GSI2',
        follow: true,
      }
    );
    return await userRecord;
  }

  async findByEmailByRole(userRole : string ,email: string) {
    const userRecord = await this.userTable.find(
      {
        GSI1PK: userRole,
        GSI1SK: email
      },
      {
        index: 'GSI1',
        follow: true,
      }
    );
    return await userRecord;
  }

  async findById(userId: string) {
    const userRecord = await this.userTable.find({
      userId: userId,
    });
    return await userRecord;
  }

  async deleteById(userId: string) {

    await this.userTable.remove({ userId: userId });
  }


  async findRecordsByEmailWithNamesContaining(
    email: string,
    keywords: string
  ) {
    const records = await this.userTable.find(
      {
        GSI2PK: email,
      },
      {
        where:
          'contains(${firstName}, @{keywords}) OR contains(${lastName}, @{keywords})',
        substitutions: { keywords: keywords.toLowerCase() },
        index: 'GSI2',
      }
    );


    return records;
  }

  async findRecordswithPaging(
    email: string,
    limit: number,
    direction: string,
    cursorPointer: string
  ) {
    const dynamoDbOption = createDynamoDbOptionWithPKSKIndex(
      limit,
      'GSI2',
      direction,
      cursorPointer
    );


    const userRecords = await this.userTable.find(
      {
        GSI3PK: email,
      },
      dynamoDbOption
    );

 

    return new PageDto(userRecords, userRecords.next, userRecords.prev);
  }

 

}
