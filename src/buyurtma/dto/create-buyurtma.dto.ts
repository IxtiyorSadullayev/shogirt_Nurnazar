import { ApiProperty } from "@nestjs/swagger";

export class CreateBuyurtmaDto {
    @ApiProperty({type: String, required: true, title: "Olinmoqchi bo'lgan maxsulotning id is"})
    product_id: string;

    @ApiProperty({type: String, required: true, title: "Olmoqchi bo'lgan user id si"})
    user_id: string;

    @ApiProperty({type: Boolean, default: true, title: "Buyurtma bajarilish jarayonida" })
    jarayonda: boolean;

    @ApiProperty({type: Boolean, default: false, title: "Buyurtma bajarildi."})
    bajarildi: boolean;

    @ApiProperty({type: Number, default: 1, title: "Nechta product olinmoqda"})
    count: number;
}
