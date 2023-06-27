import { Injectable } from '@nestjs/common';
import { CreateBuyurtmaDto } from './dto/create-buyurtma.dto';
import { UpdateBuyurtmaDto } from './dto/update-buyurtma.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Buyurtma } from './schemas/buyurtma.schema';
import {Model} from 'mongoose'

@Injectable()
export class BuyurtmaService {
  constructor(@InjectModel(Buyurtma.name) private buyurtmaModel : Model <Buyurtma>){}

  async create(createBuyurtmaDto: CreateBuyurtmaDto) {
    const newbuyurtma = await this.buyurtmaModel.create(createBuyurtmaDto);
    return newbuyurtma;
  }

  async findAll(userId: string) {
    const buyurtmalar = await this.buyurtmaModel.find({user_id: userId}).populate('buyurtma_id');

    return buyurtmalar;
  }

  async findOne(id: string) {
    const onebuyurtma = await this.buyurtmaModel.findById(id).populate('product_id');
    return onebuyurtma;
  }

  async update(id: string, updateBuyurtmaDto: UpdateBuyurtmaDto) {
    const updatedbuyurtma = await this.buyurtmaModel.findByIdAndUpdate(id, updateBuyurtmaDto);
    return updatedbuyurtma;
  }

}
