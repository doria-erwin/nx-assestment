import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsUrl } from "class-validator";

export class ProductsUpdateDto {
    @ApiProperty()
    @IsOptional()
    name?: string;

    @ApiProperty()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber({
        maxDecimalPlaces: 2
    })
    price?: number;

    @ApiProperty()
    @IsOptional()
    categoryId?: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsUrl({}, { each: true })
    pictures?: string[]

}