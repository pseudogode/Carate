export enum CarBrand {
  Toyota = 'Toyota', Skoda = 'Skoda'
}

export interface CarInfo {
  brand: CarBrand,
  model: string;
  year: string; // TODO: fix
}
