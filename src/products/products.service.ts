import { HttpException, Injectable,  } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {InjectModel} from '@nestjs/mongoose'
import { Product } from './schemas/products.schema';
import {Model} from 'mongoose'

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model <Product>){}

  async create(createProductDto: CreateProductDto) {
    const condidate = await this.productModel.findOne({product_name: createProductDto.product_name});
    if(condidate){
      throw new HttpException("Bu maxsulot allaqachon yaratilgan", 400)
    }
    const newproduct = await this.productModel.create(createProductDto);
    return newproduct;
  }

  async findAll() {
    const products = await this.productModel.find();
    if(!products || products.length ==0 ){
      throw new HttpException("Kechirasiz maxsulotlar topilmadi", 404);
    }
    return products;
  }

  async findOne(id: number) {
    const condidate = await this.productModel.findById(id);
    if(!condidate){
      throw new HttpException("Kechirasiz ushbu maxsulot topilmadi.", 404);
    }
    return condidate;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const condidate = await this.productModel.findById(id);
    if(!condidate){
      throw new HttpException("Kechirasiz ushbu maxsulot topilmadi.", 404);
    }
    const oldproduct = await this.productModel.findByIdAndUpdate(id, updateProductDto);
    return oldproduct;
  }

  async remove(id: number) {
    const condidate = await this.productModel.findById(id);
    if(!condidate){
      throw new HttpException("Kechirasiz ushbu maxsulot topilmadi.", 404);
    }
    const deletedproduct = await this.productModel.findByIdAndDelete(id);
    return deletedproduct;
  }
}
