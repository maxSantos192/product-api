import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PrismaModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
