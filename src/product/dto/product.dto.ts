import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsArray,
  IsOptional,
} from 'class-validator';
import { CategoryDto } from '../../category/dto/category.dto';

export class ProductDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  photo: string;

  @ApiProperty({ type: [CategoryDto] })
  categories: CategoryDto[];
}

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  qty: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty()
  @IsString()
  @IsUrl()
  photo: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  categoryIds: string[];
}

export class UpdateProductDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  qty?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsUrl()
  @IsOptional()
  photo?: string;

  @ApiProperty({ type: [String], required: false })
  @IsArray()
  @IsOptional()
  categoryIds?: string[];
}
