import { ApiProperty } from "@nestjs/swagger"
import { UserDataDto } from "./users.data.dto";

export class UsersDto {
    
    @ApiProperty()
    email!: string;

    @ApiProperty()
    userRole!: string;

    @ApiProperty()
    firstName!: string;

    @ApiProperty()
    lastName!: string;

  
    @ApiProperty()
    @ApiProperty({ type: () => UserDataDto })
    data!: UserDataDto;

  
  }