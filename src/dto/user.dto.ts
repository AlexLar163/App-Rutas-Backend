import { Route } from '../interface/Route';

export class LoginUserDTO {
  name: string;
  password: string;
}

export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class CreateFavoriteUserDTO {
  '_id': string;
  favorites: Array<Route>;
}
