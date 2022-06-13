import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel('users') private userModel: Model<User>, private jwtService: JwtService) { }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    createUserDto.accessToken = this.jwtService.sign(createUserDto);
    const data = await this.userModel.findOne({ email: createUserDto.email });
    if (data) {
      throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
    } else {
      const newUser = new this.userModel(createUserDto);
      return newUser.save();
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
