import {
  Injectable,
  BadRequestException,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { AuthCredentialDTO } from './dto/auth.credential.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private readonly users: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(credentialDTO: AuthCredentialDTO): Promise<void> {
    const { username, password } = credentialDTO;
    const salt = await bcrypt.genSalt();
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

  async signIn(
    credentialDTO: AuthCredentialDTO,
  ): Promise<{ accessToken: string }> {
    const { username, password } = credentialDTO;
    // let's findout the username exitst in the users [collection/ document/ schema]
    const user = await this.users.findOne({ username: username }).exec();
    if (user) {
      // If user exits in the users colletion, match the password provided by the user.
      // Using the salt
      // make hash with help of password and salt
      // compare tha user's password from database to the hash created by user hashed password.
      const hash = await bcrypt.hash(password, user.salt);
      if (hash != user.password) {
        // case: If strored password in table does not match with the hashed one.
        // throw UnauthorizedException
        throw new UnauthorizedException('Invalid Credentials');
      }
    } else {
      // If user Doest not exits
      // throw: NotFoundException
      throw new NotFoundException('username doest not exist');
    }

    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    // Information about the user credential could be checked at below address:
    // https://jwt.io/
    return { accessToken };
  }

  // async validatePassword(credentialDTO: AuthCredentialDTO){
  //   const { username, password } = credentialDTO;
  //   // let's findout the username exitst in the users [collection/ document/ schema]
  //   const user = await this.users.findOne({ username: username }).exec();
  //   if (user) {
  //     // If user exits in the users colletion, match the password provided by the user.
  //     // Using the salt
  //     // make hash with help of password and salt
  //     // compare tha user's password from database to the hash created by user hashed password.
  //     const hash = await bcrypt.hash(password, user.salt);
  //     if (hash != user.password) {
  //       // case: If strored password in table does not match with the hashed one.
  //       // throw UnauthorizedException
  //       throw new UnauthorizedException('Invalid Credentials');
  //     }
  //   } else {
  //     // If user Doest not exits
  //     // throw: NotFoundException
  //     throw new NotFoundException('username doest not exist');
  //   }
  // }
}
