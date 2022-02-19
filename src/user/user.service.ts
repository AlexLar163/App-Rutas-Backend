import { Injectable } from '@nestjs/common';
import { CreateFavoriteUserDTO, CreateUserDTO, LoginUserDTO } from 'src/dto/user.dto';
import { User } from '../interface/User';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('Users') private userModel: Model<User>) {}
  async loginUser(Body: LoginUserDTO): Promise<User> {
    return await this.userModel.findOne({ name: Body.name, password: Body.password },'name email');
  }
  async registerUser(body: CreateUserDTO): Promise<User> {
    return await this.userModel.create(body);
  }
  async favoritesUser(body: CreateFavoriteUserDTO): Promise<User> {
    return await this.userModel.findByIdAndUpdate(body._id, {
      $push: { favorites: body.favorites },
    });
  }
  async getFavoritesUser(): Promise<object> {
    return await this.userModel.find();
  }
}
