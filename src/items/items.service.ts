import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}

  async getItems(): Promise<Item[]> {
    return this.itemModel.find();
  }

  async getItemById(id: string): Promise<Item> {
    return this.itemModel.findById(id);
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const newItemModel = new this.itemModel(createItemDto);
    return await newItemModel.save();
  }

  async removeItem(id: string): Promise<Item> {
    return this.itemModel.findByIdAndRemove(id);
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto) {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true });
  }
}
