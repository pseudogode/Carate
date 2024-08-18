/* eslint-disable @typescript-eslint/no-unused-vars */
import Box from "../../components/box/box";
import './market.css'

function Market() {
  const a: number[] = Array.from(Array(5), (_, n) => n);
  
  return (
    <div className='market-root'>
    {a.map((_, index) => <Box key={index} style={{border: '1px dashed grey', height: '32px', margin: '16px'}}>
      Offer
    </Box>)}
    <p>...</p>
    </div>
  );
}

export default Market;