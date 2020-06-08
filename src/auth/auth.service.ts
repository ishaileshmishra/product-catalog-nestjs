import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { AuthCredentialDTO } from './dto/auth.credential.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly users: Model<User>) {}

  async signUp(credentialDTO: AuthCredentialDTO): Promise<void> {
    const { username, password } = credentialDTO;
    const newUser = new this.users({
      username,
      password,
    });
    await newUser.save();
  }
}
