import { Schema } from 'mongoose';

export const routeSchema = new Schema({
  name: String,
  description: String,
  image: String,
  stars: Number,
  difficulty: String,
  duration: Number,
  distance: Number,
  location: String,
  lat: String,
  lng: String,
});
