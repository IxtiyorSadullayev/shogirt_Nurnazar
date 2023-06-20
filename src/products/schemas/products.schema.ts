import {SchemaFactory, Schema, Prop} from '@nestjs/mongoose'

@Schema()
export class Product{
    @Prop({type: String, required: true,minlength: 4, maxlength: 100})
    product_type: string;

    @Prop({type: String, required: true, minlength: 4, maxlength: 150})
    product_sub_type: string;

    @Prop({type: String, required: true, minlength: 4, maxlength: 200})
    product_name: string;

    @Prop({type: Array, required: false, default: []})
    product_photo: [string];

    @Prop({type: String, required: true,})
    product_amount: string;

    @Prop({type: Array, required: true, })
    product_characters: [string];

    @Prop({type: String, required: true,})
    product_description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)