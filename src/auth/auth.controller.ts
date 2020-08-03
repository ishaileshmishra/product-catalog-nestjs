import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
//import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //constructor(private readonly authService: AuthService) {}
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  //@UseGaurds(AuthGuard('jwt'))
  tempAuth() {
    return { auth: 'works' };
  }

  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload = {
      username: user.username,
      seller: user.seller,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
}
