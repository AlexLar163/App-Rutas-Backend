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
  @Post('/favorites')
  favorites(@Body() body: CreateFavoriteUserDTO): Promise<User> {
    try {
      return this.userService.favoritesUser(body);
    } catch (err) {
      throw err;
    }
  }
  @Get('/favorites')
  getFavorites(): Promise<object> {
    try {
      return this.userService.getFavoritesUser();
    } catch (err) {
      throw err;
    }
  }
}
