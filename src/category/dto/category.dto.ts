import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  parentId: string | null;

  @ApiProperty({ required: false, nullable: true })
  parent?: CategoryDto | null;

  @ApiProperty({ type: [CategoryDto], required: false })
  children?: CategoryDto[];
}
