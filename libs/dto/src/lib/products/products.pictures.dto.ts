import { ApiProperty } from "@nestjs/swagger";

export class ProductPictures{

    @ApiProperty()
    id!:string;

    @ApiProperty()
    url!: string;

    @ApiProperty()
    productId!: string;
    
}