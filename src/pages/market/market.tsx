/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "../../components/box/box";
import CarOfferCard, { CarBrand, CarInfo } from "./components/car-offer-card/car-offer-card";
import './market.scss';

const carInfo: CarInfo[] = [
  {
    brand: CarBrand.Toyota,
    model: 'Corolla',
  },
  {
    brand: CarBrand.Toyota,
    model: 'Rav4',
  },
  {
    brand: CarBrand.Skoda,
    model: 'Superb'
  },
  {
    brand: CarBrand.Toyota,
    model: 'Celica'
  }
];

function Market() {
    return (
    <Box className='market-root'>
    {carInfo.map((car, index) => 
      (<Box key={index} style={{padding: '16px'}}>
        <CarOfferCard carInfo={car}/>
      </Box>)
    )}

    </Box>
  );
}

export default Market;