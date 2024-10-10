import { Link } from "react-router-dom";
import Box from "../../components/box/box";
import CarOfferCard from "./components/car-offer-card/car-offer-card";
import { CarBrand, CarInfo } from "./components/car-offer-card/models";
import classes from './market.module.scss';
import { MessageDialog } from "../../components/dialog/message-dialog/message-dialog";
import { useState } from "react";
import { random } from "lodash";

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
    const [car, setCar] = useState<CarInfo | undefined>(undefined);
    return (
      <>
        <Box className={classes.cardContainer}>
          <Link to='/order' style={{textDecoration: 'none'}}>
            <Box className={classes.customOffer}>
              <CarOfferCard carInfo={placeHolderCar}/>
            </Box>
          </Link>
          
          {carInfo.map((car, index) => 
            <Link to={`./${index}`} style={{textDecoration: 'none'}} onClick={() => setCar(car)}>
              <Box key={index}>
                <CarOfferCard carInfo={car}/>
              </Box>
            </Link>
          )}
        </Box>
        <MessageDialog
          className={classes.carDialog}
          closeFn={() => setCar(undefined)}
          title={`${car?.brand} ${car?.model}`}
          isOpen={Boolean(car)}
        >
          <Box style={{paddingLeft: '16px'}}>
            <p> Engine: {`${random(1, 2)}.${random(0, 9)}`} {['petrol/gasoline', 'diesel'][random(0, 1)]}</p>
            <p> Year: {car?.year} </p>
          </Box>
        </MessageDialog>
      </>
  );
}

export default Market;