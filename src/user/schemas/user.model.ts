import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true, timeseries:{
    timeField: "calculated_at",
    metaField: "metadata",
    granularity: "hours"
}})
export class User {
    @Prop({type: String, required: true, minlength: 3, maxlength: 50})
    name: string;

    @Prop({type: String, required: true, minlength: 3, maxlength: 50})
    fullname: string;

    @Prop({type: String, required: true, unique: true, minlength: 7, maxlength:50})
    email: string;

    @Prop({type: String, required: true, minlength: 4, maxlength: 50})
    password: string;

    @Prop({type:String, required: false, })
    phone: string;

    @Prop({type: Date, required: false})
    age?: string;

    @Prop({type: String, required: false, minlength:5, maxlength: 100})
    work?:string ;

    @Prop({type: Boolean, required: false, default: false,})
    ban?: boolean;

    @Prop({type: Array, required: false, default: []})
    ip?: [];
}

export const UserModel = SchemaFactory.createForClass(User)