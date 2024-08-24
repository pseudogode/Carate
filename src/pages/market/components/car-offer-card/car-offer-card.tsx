import { Avatar, Box, Card, CardHeader, CardMedia, Fade, Modal, Typography } from "@mui/material";
import classes from  './car-offer-card.module.scss'

import ToyotaLogo from '../../../../assets/toyota.png'
import SkodaLogo from '../../../../assets/skoda.png'
import { CarBrand, CarInfo } from "./models";
import { useState } from "react";
import { RxQuestionMark } from "react-icons/rx";

const toyotaPlaceholder = 'https://mobistatic1.focus.bg/mobile/photosorg/987/1/big1/11724242143502987_4Q.webp';
const skodaPlaceholder = 'https://mobistatic2.focus.bg/mobile/photosorg/893/2/big1/21724063711954893_yJ.webp';
const transparent = 'https://st.depositphotos.com/17601448/60722/v/450/depositphotos_607226348-stock-illustration-one-continuous-single-line-car.jpg';

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = useState(false);

  return (
    <div className ={classes.rooted} onClick={() => setOpen(true)}>
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
          component="image"
          
          image={getPhotoByBrand(brand)}
          className={classes.mainImage}
        />
      </Card>
      <Modal sx={style} open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CarOfferCard;