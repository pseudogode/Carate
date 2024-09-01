import Box from "../../components/box/box";
import classes from './order.module.scss';
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'

function Order() {
  return (
    <Box
      className={`${classes.root} ${classes.padding}`}
      style={{ backgroundSize: '100% auto',backgroundImage: `url(${ToyotaWallpaper})`, backgroundRepeat: 'no-repeat'}} 
    >
      <Box className={classes.formContainer}>
        <a> Test </a>
      </Box>
    </Box>
  );
}

export default Order;