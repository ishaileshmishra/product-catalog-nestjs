import { IsNotEmpty, IsIn } from 'class-validator';
import { DeliveryStatus } from '../product.model';
import { Optional } from '@nestjs/common';

export class ProductDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  price: number;

  @Optional()
  @IsIn([
    DeliveryStatus.DELIVERED,
    DeliveryStatus.IN_PROGRESS,
    DeliveryStatus.ORDERED,
  ])
  status: DeliveryStatus;
}
