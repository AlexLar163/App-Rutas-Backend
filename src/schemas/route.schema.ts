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
  origin: {
    lat: String,
    lng: String,
  },
  destination: {
    lat: String,
    lng: String,
  },
});
