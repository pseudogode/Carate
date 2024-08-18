import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import './car-offer-card.scss'

import Toyota from '../../../../assets/toyota.png'

function CarOfferCard() {
  return (
    <Card className='car-offer-card-root'>
      <CardMedia
        image={Toyota}
        className='car-offer-card-logo'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Corolla
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CarOfferCard;