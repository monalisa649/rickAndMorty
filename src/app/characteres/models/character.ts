export interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  created: string;
  status: string;
  location : Location;
  episode : string[];
}

export interface Location {
  name: string;
  url:  string;
}
