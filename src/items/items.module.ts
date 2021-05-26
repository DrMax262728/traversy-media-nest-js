import { Module } from '@nestjs/common';
// controllers
import { ItemsController } from './items.controller';
// services
import { ItemsService } from './items.service';
import { MongooseModule } from '@nestjs/mongoose';
// schemas
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
