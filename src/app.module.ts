import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './database/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [PrismaModule, CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
