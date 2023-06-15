import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

type Order = 'asc' | 'desc';

export class QueryDto {

    @ApiProperty({
        required: false,
    })
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    page?: number;

    @ApiProperty({
        required: false,
    })
    @IsInt()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    limit?: number = 20;

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    orderBy?: string;

    @ApiProperty({
        required: false,
        enum: ['asc', 'desc']
    })
    @IsIn(['asc', 'desc'])
    @IsOptional()
    order?: Order;

    @ApiProperty({
        required: false,
    })
    @IsString()
    @IsOptional()
    search?: string;

}
