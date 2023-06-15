import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class PageDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly data: T[];

  @ApiProperty()
  itemCount!: number;

  @ApiProperty()
  pageCount!: number;

  constructor(data: T[], itemCount: number, pageCount: number) {
    this.data = data;

    this.itemCount = itemCount;

    this.pageCount = pageCount;
  }
}
