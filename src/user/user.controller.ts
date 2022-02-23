import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from '../interface/User';
import {
  CreateFavoriteUserDTO,
  CreateUserDTO,
  LoginUserDTO,
} from '../dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/login')
  loginUser(@Body() body: LoginUserDTO): Promise<User> {
    return this.userService.loginUser(body);
  }
  @Post('/register')
  registerUser(@Body() body: CreateUserDTO): Promise<User> {
    return this.userService.registerUser(body);
  }
  @Post('/addfavorites')
  favorites(@Body() body): Promise<User> {
    try {
      return this.userService.favoritesUser(body);
    } catch (err) {
      throw err;
    }
  }
  @Post('/getfavorites')
  getFavorites(@Body() body: Object): Promise<object> {
    try {
      return this.userService.getFavoritesUser(body);
    } catch (err) {
      throw err;
    }
  }
}
