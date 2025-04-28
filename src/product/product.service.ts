import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(name?: string) {
    const products = await this.prisma.product.findMany({
      where: {
        name: name ? { contains: name, mode: 'insensitive' } : undefined,
      },
      include: {
        categories: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        categories: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async create(data: CreateProductDto) {
    const { categoryIds, ...rest } = data;

    const product = await this.prisma.product.create({
      data: {
        ...rest,
        categories: {
          connect: categoryIds.map((id) => ({ id })),
        },
      },
      include: {
        categories: true,
      },
    });

    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    const { categoryIds, ...rest } = data;

    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    const product = await this.prisma.product.update({
      where: { id },
      data: {
        ...rest,
        categories: categoryIds
          ? {
              set: categoryIds.map((categoryId) => ({ id: categoryId })),
            }
          : undefined,
      },
      include: {
        categories: true,
      },
    });

    return product;
  }

  async remove(id: string) {
    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    await this.prisma.product.delete({ where: { id } });
  }
}
