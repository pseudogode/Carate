// import axios from "axios";

import { CAR_DATA } from "./car-data";

class CarService {
  // private instance = axios.create({
  //   baseURL: 'https://api.api-ninjas.com/v1',
  //   headers: { 
  //     'X-Api-Key': import.meta.env['VITE_NINJAS_API_KEY']
  //   }
  // })

  getAllCarBrands() {
    return CAR_DATA.map(c => c.brand);
  }

  getCarData() {
    return CAR_DATA;
  }
}

export const carService = new CarService();