import { Document } from 'mongoose';
export interface Route extends Document {
  name: string;
  description: string;
  image: string;
  stars: number;
  difficulty: string;
  duration: number;
  distance: number;
  location: string;
  lat: string;
  lng: string;
}
