import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialDTO } from './dto/auth.credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialDTO: AuthCredentialDTO,
  ): Promise<void> {
    //console.log(authCredentialDTO);
    return await this.authService.signUp(authCredentialDTO);
  }

  @Post('/login')
  async signIn(
    @Body(ValidationPipe) authCredentialDTO: AuthCredentialDTO,
  ): Promise<void> {
    return await this.authService.signIn(authCredentialDTO);
  }
}
