import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { BuyurtmaModule } from './buyurtma/buyurtma.module';

@Module({
  imports: [UserModule,
  MongooseModule.forRoot("mongodb://127.0.0.1/onlinemagazine"),
  ProductsModule,
  BuyurtmaModule
  
  ],
})
export class AppModule {}
