import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from 'src/types/user';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDTO, RegisterDTO } from 'src/auth/auth.dto';
import * as bcrypt from 'bcrypt';
import { Payload } from 'src/types/payload';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async find() {
    return await this.userModel.find();
  }

  async create(userDTO: RegisterDTO) {
    const { username } = userDTO;
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    // try {
    //   const createdUser = new this.userModel(userDTO);
    //   console.log(`createdUser:  ${createdUser}`);
    //   await createdUser.save();
    //   console.log(`created:  ${createdUser._id}`);
    // } catch (exception) {
    //   console.log(` hamara exception: ${exception}`);
    // }
    const createdUser = new this.userModel(userDTO);
    console.log(`createdUser:  ${createdUser}`);
    await createdUser.save();
    console.log(`created:  ${createdUser._id}`);
    return this.sanitizeUser(createdUser);
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username, password } = userDTO;
    console.log(`username is: ${username} and password is: ${password}`);
    const user = await this.userModel.findOne({ username });
    console.log(`user foundOne: ${user}`);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    if (await bcrypt.compare(password, user.password)) {
      console.log(`user found: ${user}`);
      const returnResult = this.sanitizeUser(user);
      console.log(`returnResult: ${returnResult}`);
      return this.sanitizeUser(user);
    } else {
      console.log(`Exception occured!`);
      throw new HttpException('Invlid credentials', HttpStatus.UNAUTHORIZED);
    }
  }

  sanitizeUser(user: User) {
    const sanitized = user.toObject();
    delete sanitized['password'];
    return sanitized;
  }

  async findByPayload(payload: Payload) {
    const { username } = payload;
    return await this.userModel.findOne({ username });
  }
}
