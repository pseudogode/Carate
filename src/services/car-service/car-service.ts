// import axios from "axios";

import { CAR_DATA } from "./car-data";

class CarService {
  // private instance = axios.create({
  //   baseURL: 'https://api.api-ninjas.com/v1',
  //   headers: { 
  //     'X-Api-Key': import.meta.env['VITE_NINJAS_API_KEY']
  //   }
  // })

  async getAllCarBrands() {
    return CAR_DATA.map(c => c.brand);
  }

  async getModelsByBrand(brand: string) {
    return CAR_DATA.filter(d => d.brand === brand).find(Boolean)?.models;
  }
}

export const carService = new CarService();