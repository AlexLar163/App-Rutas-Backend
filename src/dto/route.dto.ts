export class createRouteDTO {
  name: string;
  description: string;
  image: string;
  stars: number;
  difficulty: string;
  duration: number;
  distance: number;
  location: string;
  origin: {
    lat: string;
    lng: string;
  };
  destination: {
    lat: string;
    lng: string;
  };
}
