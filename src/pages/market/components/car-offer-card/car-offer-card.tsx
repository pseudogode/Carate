import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import './car-offer-card.scss'

import Toyota from '../../../../assets/toyota.png'
import Skoda from '../../../../assets/skoda.png'

export enum CarBrand {
  Toyota, Skoda
}

export interface CarInfo {
  brand: CarBrand,
  model: string;

}

interface Props {
  carInfo: CarInfo;
}

function getLogoByBrand(brand: CarBrand) {
  switch (brand){
    case CarBrand.Skoda:
      return Skoda;
    default:
      return Toyota;
  }
}

function CarOfferCard({ carInfo }: Props) {
  const { brand, model } = carInfo;
  return (
    <Card className='car-offer-card-root'>
      <CardMedia
        image={getLogoByBrand(brand)}
        className='car-offer-card-logo'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {model}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default CarOfferCard;