import Box from "../../components/box/box";
import CarOfferCard from "./components/car-offer-card/car-offer-card";
import { CarBrand, CarInfo } from "./components/car-offer-card/models";
import classes from './market.module.scss';

const carInfo: CarInfo[] = [
  {
    brand: CarBrand.Toyota,
    model: 'Corolla',
    year: '2002',
  },
  {
    brand: CarBrand.Toyota,
    model: 'Rav4',
    year: '2012',
  },
  {
    brand: CarBrand.Skoda,
    model: 'Superb',
    year: '2018'
  },
  {
    brand: CarBrand.Toyota,
    model: 'Celica',
    year: '2009'
  }
];

function Market() {
    return (
    <Box className={classes.root}>
    {carInfo.map((car, index) => 
      (<Box key={index} className={classes.offer}>
        <CarOfferCard carInfo={car}/>
      </Box>)
    )}

    </Box>
  );
}

export default Market;