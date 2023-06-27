import { Module } from '@nestjs/common';
import { BuyurtmaService } from './buyurtma.service';
import { BuyurtmaController } from './buyurtma.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Buyurtma, BuyurtmaSchema } from './schemas/buyurtma.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Buyurtma.name, schema: BuyurtmaSchema}])],
  controllers: [BuyurtmaController],
  providers: [BuyurtmaService]
})
export class BuyurtmaModule {}
