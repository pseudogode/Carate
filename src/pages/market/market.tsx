/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "../../components/box/box";
import CarOfferCard from "./components/car-offer-card/car-offer-card";
import './market.scss'

function Market() {
  const a: number[] = Array.from(Array(16), (_, n) => n);
  
  return (
    <Box className='market-root'>
    {a.map((_, index) => 
      (<Box key={index} style={{padding: '16px'}}>
        <CarOfferCard/>
      </Box>)
    )}

    </Box>
  );
}

export default Market;