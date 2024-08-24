import { Link } from "react-router-dom";
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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

const placeHolderCar: CarInfo = {
  brand: CarBrand.Unkown,
  model: '',
  year: new Date().getFullYear().toString(),
}

function Market() {
    return (
    <Box className={classes.root}>
      <Link to='/order' style={{textDecoration: 'none'}}>
        <Box className={classes.customOffer}>
          <CarOfferCard carInfo={placeHolderCar}/>
        </Box>
      </Link>
      
      {carInfo.map((car, index) => 
        (<Box key={index}>
          <CarOfferCard carInfo={car}/>
        </Box>)
      )}
    </Box>
  );
}

export default Market;