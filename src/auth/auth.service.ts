import { Injectable } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { Payload } from 'src/types/payload';
import { sign } from 'jsonwebtoken';
import config from '../config/keys';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signPayload(payload: Payload) {
    return sign(payload, config.SECRET_KEY, { expiresIn: '12h' });
  }

  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
}
