import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { AuthCredentialDTO } from './dto/auth.credential.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly users: Model<User>) {}

  async signUp(credentialDTO: AuthCredentialDTO): Promise<void> {
    const { username, password } = credentialDTO;
    const salt = await bcrypt.genSalt();
    // salt password => console.log(salt);
    // const hashedPassword = await this.hashPassword(password, salt);
    // hash password => console.log(hashedPassword);
    const exist = await this.users.findOne({ username: username }).exec();
    if (exist) {
      throw new BadRequestException('Username Already Exists :(');
    }
    const newUser = new this.users({
      username,
      password: await this.hashPassword(password, salt),
      salt,
    });
    try {
      await newUser.save();
    } catch (error) {
      throw new ConflictException('username already exists');
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  // async validateUserPassword(@Body() credentialDTO: AuthCredentialDTO): Promise<string> {
  //   const { username, password } = credentialDTO;
  //   const user = await this.users.findOne({ username: username }).exec();
  //   if (user && user.validatePassword(password)) {
  //     return user.username;
  //   }else{
  //     return null;
  //   }
  // }

  async signIn(credentialDTO: AuthCredentialDTO) {
    const { username, password } = credentialDTO;
    console.log(username);
    console.log(password);
    const result = this.users.findOne({ username });
    console.log(result);
  }
}
