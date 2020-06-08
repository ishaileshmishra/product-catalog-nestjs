// We are going to use this DTO for both login and Signup
import { IsNotEmpty } from 'class-validator';

export class AuthCredentialDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
