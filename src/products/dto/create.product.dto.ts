// Creating DTO is good practice to create
// new variable or remove a variable easily

import { IsNotEmpty } from 'class-validator';

export class CreateProductDto{

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;
}