import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyurtmaService } from './buyurtma.service';
import { CreateBuyurtmaDto } from './dto/create-buyurtma.dto';
import { UpdateBuyurtmaDto } from './dto/update-buyurtma.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Buyurtma berish routi')
@Controller('buyurtma')
export class BuyurtmaController {
  constructor(private readonly buyurtmaService: BuyurtmaService) {}

  @Post()
  create(@Body() createBuyurtmaDto: CreateBuyurtmaDto) {
    return this.buyurtmaService.create(createBuyurtmaDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.buyurtmaService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buyurtmaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuyurtmaDto: UpdateBuyurtmaDto) {
    return this.buyurtmaService.update(id, updateBuyurtmaDto);
  }

}
