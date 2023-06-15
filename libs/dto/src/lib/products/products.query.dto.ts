import { ApiProperty } from "@nestjs/swagger";
import { QueryDto } from "../pagination/query.dto";
import { IsOptional, IsString } from "class-validator";

export class ProductQueryDto extends QueryDto{
    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    categoryId?: string;
}