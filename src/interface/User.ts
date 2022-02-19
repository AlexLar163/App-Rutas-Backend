import { Document } from 'mongoose';
import { Route } from './Route';
export interface User extends Document {
  id?: number;
  name: string;
  email: string;
  password: string;
  favorites?: Array<Route>;
}
