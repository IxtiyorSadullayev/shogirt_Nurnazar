import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({type: String, required: true, title: "Foydalanuvchi ismi."})
    name: string;

    @ApiProperty({type: String, required: true, title: "Foydalanuvchi familiyasi."})
    fullname: string;

    @ApiProperty({type: String, required: true , title: "Foydalanuvchi emaili"})
    email: string;

    @ApiProperty({type: String, required: true, title: "Foydalanuvchi paroli."})
    password: string;

    @ApiProperty({type: String, required: true, title: "Foydalanuvchi telefon raqami"})
    phone: string;

    @ApiProperty({title: "Foydalanuvchining yoshi", type: Date, required: false})
    age?: Date;

    @ApiProperty({type: String, title: "Foydalanuvchi ish joyi", required: false})
    work?:string ;

    @ApiProperty({title: "Foydalanuvchi ban olganligi.", default: false, type: Boolean, required: false})
    ban?: boolean;

    @ApiProperty({type: Array, title: "Foydalanuvchi ip manzili.", required: false})
    ip?: [];

    @ApiProperty({type: String, title: "User Type", enum: ["USER", "ADMIN"], default: "USER"})
    usertype: string;

}
