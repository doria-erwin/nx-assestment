import { ApiProperty } from "@nestjs/swagger";
import {CategoriesDto} from "./categories.dto";
import { IsArray, IsNumber } from "class-validator";
import { ProductPictures } from "./products.pictures.dto";

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

    @ApiProperty({
        required: false,
        readOnly: true,
        type: () => CategoriesDto
    })
    category!: CategoriesDto;

    @ApiProperty({
        required: false,
        readOnly: true,
        type: () => ProductPictures
    })
    @IsArray()
    pictures!: ProductPictures[]

}