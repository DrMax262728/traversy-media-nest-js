import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
// dto(s)
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
// services
import { ItemsService } from './items.service';
// types
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(): Promise<Item[]> {
    return this.itemsService.getItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: string): Promise<Item> {
    return this.itemsService.getItemById(id);
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(createItemDto);
  }

  @Delete(':id')
  removeItem(@Param('id') id: string): Promise<Item> {
    return this.itemsService.removeItem(id);
  }

  @Put(':id')
  updateItem(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }
}
