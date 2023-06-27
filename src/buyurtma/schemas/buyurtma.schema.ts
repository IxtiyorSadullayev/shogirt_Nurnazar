import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Schema as S} from 'mongoose'
import { Product } from "src/products/schemas/products.schema";
import { User } from "src/user/schemas/user.model";


@Schema({timestamps: true})
export class Buyurtma {
    @Prop({type: S.Types.ObjectId, required: true, ref: Product.name})
    product_id: string;
    
    @Prop({type: S.Types.ObjectId, required: true, ref: User.name})
    user_id: string;

    @Prop({type: Boolean, default: true, })
    jarayonda: boolean;

    @Prop({type: Boolean, default: false})
    bajarildi: boolean;

    @Prop({type: Number, default: 1})
    count: number;
}

export const BuyurtmaSchema = SchemaFactory.createForClass(Buyurtma);