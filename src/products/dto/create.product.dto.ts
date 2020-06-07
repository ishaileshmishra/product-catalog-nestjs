// Creating DTO is good practice to create
// new variable or remove a variable easily
import { IsNotEmpty, IsIn } from 'class-validator';
import { DeliveryStatus } from '../product.model';
import { Optional } from '@nestjs/common';

export class CreateProductDto{

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;

    @Optional()
    @IsIn([DeliveryStatus.DELIVERED, DeliveryStatus.IN_PROGRESS, DeliveryStatus.ORDERED])
    status: DeliveryStatus
}

