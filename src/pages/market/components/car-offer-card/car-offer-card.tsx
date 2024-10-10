import { Avatar, Card, CardHeader, CardMedia } from "@mui/material";
import classes from  './car-offer-card.module.scss'

import ToyotaLogo from '../../../../assets/toyota.png'
import SkodaLogo from '../../../../assets/skoda.png'
import { CarBrand, CarInfo } from "./models";
import { RxQuestionMark } from "react-icons/rx";

const toyotaPlaceholder = 'https://mobistatic1.focus.bg/mobile/photosorg/987/1/big1/11724242143502987_4Q.webp';
const skodaPlaceholder = 'https://mobistatic2.focus.bg/mobile/photosorg/893/2/big1/21724063711954893_yJ.webp';
const transparent = 'https://st.depositphotos.com/17601448/60722/v/450/depositphotos_607226348-stock-illustration-one-continuous-single-line-car.jpg';

interface Props {
  carInfo: CarInfo;
}

function getLogoByBrand(brand: CarBrand) {
  switch (brand){
    case CarBrand.Skoda:
      return SkodaLogo;
    default:
      return ToyotaLogo;
  }
}

function getPhotoByBrand(brand: CarBrand) {
  switch (brand){
    case CarBrand.Skoda:
      return skodaPlaceholder;
    case CarBrand.Toyota:
      return toyotaPlaceholder;
    default: 
      return transparent;
  }
}

function CarOfferCard({ carInfo }: Props) {
  const { brand, model, year: date } = carInfo;

  return (
    <div className ={classes.rooted}>
      <Card raised={brand !== CarBrand.Unkown} className={classes.root} style={{backgroundColor: 'transparent'}} >
        <CardHeader 
          className={classes.header}
          avatar={
            <Avatar aria-label="recipe">
              { 
                brand !== CarBrand.Unkown
                  ? <img style={{height: '100%', width: '100%'}}src={getLogoByBrand(brand)}></img>
                  : <RxQuestionMark/>
              } 
            </Avatar>
          }      
          title={`${brand} ${model}`}
          subheader={date}
        />
        <CardMedia
          component="div"
          image={getPhotoByBrand(brand)}
          className={classes.mainImage}
        />
      </Card>
    </div>
  );
}

export default CarOfferCard;