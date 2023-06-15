import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsUrl } from "class-validator";
export class ProductsDto {
    
    @ApiProperty()
    id!: string;

    @ApiProperty()
    name!: string;

    @ApiProperty()
    description!: string;

    @ApiProperty()
    @IsNumber({
        maxDecimalPlaces: 2
    })
    price!: number;

    @ApiProperty()
    categoryId!: string;

    @ApiProperty()
    @IsArray()
    @IsUrl({}, { each: true })
    pictures!: string[]

    @ApiProperty()
    createdAt!: Date;

    @ApiProperty()
    updatedAt!: Date;

}