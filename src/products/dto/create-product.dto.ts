import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty({type: String, required: true, enum: ["Aksesuarlar", "Oshxona anjomlari", "Elektronika", "Yotoqxona uchun jihozlar", "Mehmonhona uchun jihozlar"]})
    product_type: string;

    @ApiProperty({type: String, enum: [
        "Telefon",
        "Komputer",
        "NoteBook",
        "G'iloflar",
        "Mishka",
        "Soat",
        "Oshxona mebellari",
        "Idishlar to'plami",
        "Tozalik buyumlari",
        "Kir mashina",
        "Muzlatgich",
        "Blender",
        "Dxopka",
        "Yotoqxona mebellari",
        "Yostiqlar to'plami",
        "Ko'rpalar to'plami",
        "Creative Pardalar",
        "Buyumlar",
        "Stol va stullar",
    ],
    required: true, 
    title: "Maxsulot subtitle"
})
    product_sub_type: string;

    @ApiProperty({type: String, required: true, title: "Maxsulot nomi"})
    product_name: string;

    @ApiProperty({type: Array, required: true, title: "Maxsulotning rasmlari"})
    product_photo: [string];

    @ApiProperty({type: String, required: true, title: "Maxsulotning narxi"})
    product_amount: string;

    @ApiProperty({type: Array, required: false})
    product_characters: [string];

    @ApiProperty({type: String, required: true,})
    product_description: string;
}
