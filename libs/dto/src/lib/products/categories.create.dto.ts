import { ApiProperty } from "@nestjs/swagger";

export class CategoriesCreateDto {

    @ApiProperty()
    name!: string;

    @ApiProperty()
    description!: string;

}