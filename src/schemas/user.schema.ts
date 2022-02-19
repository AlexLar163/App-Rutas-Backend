import { Schema } from 'mongoose';
import {routeSchema} from './route.schema'
export const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  favorites: [routeSchema],
});
