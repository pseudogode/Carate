import { Avatar, Box, Card, CardHeader, CardMedia, Fade, Modal, Typography } from "@mui/material";
import classes from  './car-offer-card.module.scss'

import Toyota from '../../../../assets/toyota.png'
import Skoda from '../../../../assets/skoda.png'
import { CarBrand, CarInfo } from "./models";
import { useState } from "react";

const carPhotoPlaceholderUrl = 'https://www.ultimatecarpage.com/images/car/1057/Williams-FW19-Renault-162364.jpg';

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
      return Skoda;
    default:
      return Toyota;
  }
}

function CarOfferCard({ carInfo }: Props) {
  const { brand, model, year: date } = carInfo;
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(true)}>
      <Card raised className={classes.root} style={{backgroundColor: 'transparent'}} >
        <CardHeader 
          className={classes.header}
          avatar={
            <Avatar aria-label="recipe">
              <img style={{height: '100%', width: '100%'}}src={getLogoByBrand(brand)}></img>
            </Avatar>
          }      
          title={`${brand} ${model}`}
          subheader={date}
        />
        <CardMedia
          component="image"
          
          image={carPhotoPlaceholderUrl}
          className={classes.logo}
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