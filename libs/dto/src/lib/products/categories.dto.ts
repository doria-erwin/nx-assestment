import { ApiProperty } from "@nestjs/swagger";

export class CategoriesDto {

    @ApiProperty()
    id!: string;
    
    @ApiProperty()
    name!: string;

    @ApiProperty()
    description!: string;

    @ApiProperty()
    createdAt!: Date;

    @ApiProperty()
    updatedAt!: Date;

}