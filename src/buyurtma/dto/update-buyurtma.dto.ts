import { PartialType } from '@nestjs/swagger';
import { CreateBuyurtmaDto } from './create-buyurtma.dto';

export class UpdateBuyurtmaDto extends PartialType(CreateBuyurtmaDto) {}
