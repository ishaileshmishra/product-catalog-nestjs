import { IsNotEmpty } from 'class-validator';
//import { Passport } from '@nestjs/passport'

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  salt: string;
}
