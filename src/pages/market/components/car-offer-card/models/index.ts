export enum CarBrand {
  Toyota = 'Toyota', Skoda = 'Skoda', Unkown = '...'
}

export interface CarInfo {
  brand: CarBrand,
  model: string;
  year: string; // TODO: fix
}
