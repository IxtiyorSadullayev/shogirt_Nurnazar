import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.model';
import {Model} from 'mongoose'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  
  async create(createUserDto: CreateUserDto) {
    const condidate = await this.userModel.findOne({email: createUserDto.email});
    if(condidate){
      throw new HttpException("Kechirasiz ushbu foydalanuvchi allaqachon yaratilgan.",400);
    }
    const newuser = await this.userModel.create(createUserDto);
    return newuser;
  }

  async findAll() {
    const allusers = await this.userModel.find();
    if(!allusers || allusers.length ==0 ){
      throw new HttpException("Kechirasiz hali foydalanuvchi mavjud emas.", 400);
    }
    return allusers;
  }

  async findOne(id: string) {
    const oneuser = await this.userModel.findById(id); 
    if(!oneuser){
      throw new HttpException("Kechirasiz bunday foydalanuvchi topilmadi.", 404);
    }
    return oneuser;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const oneuser = await this.userModel.findById(id); 
    if(!oneuser){
      throw new HttpException("Kechirasiz bunday foydalanuvchi topilmadi.", 404);
    }
    const newdatas = await this.userModel.findByIdAndUpdate(id, updateUserDto);
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const oneuser = await this.userModel.findById(id); 
    if(!oneuser){
      throw new HttpException("Kechirasiz bunday foydalanuvchi topilmadi.", 404);
    }
    const deluser = await this.userModel.findByIdAndRemove(id);
    return deluser;
  }
}
