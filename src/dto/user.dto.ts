import { Route } from '../interface/Route';

export class LoginUserDTO {
  username: string;
  password: string;
}

export class CreateUserDTO {
  username: string;
  email: string;
  password: string;
}

export class CreateFavoriteUserDTO {
  '_id': string;
  favorites: Array<Route>;
}
