import Box from "../../components/box/box";
import classes from './order.module.scss';
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'
import { Controller, useForm } from "react-hook-form";
import { useTranslate } from "../../hooks/use-translate";
import { Autocomplete, TextField } from "@mui/material";
import { carService } from "../../services/car-service/car-service";
import { useEffect } from "react";

function Order() {
  const { handleSubmit, control } = useForm();
  const { t } = useTranslate('order');
  const onSubmit = (d) => alert(JSON.stringify(d));
  useEffect(() => {
    const makes = carService.getAllCarBrands();
    const modles= carService.getModelsByBrand('BMW');
    console.log(makes, modles);
  }, []);

  return (
    <Box
      className={`${classes.root} ${classes.padding}`}
      style={{ backgroundSize: '100% auto',backgroundImage: `url(${ToyotaWallpaper})`, backgroundRepeat: 'no-repeat'}} 
    >
      <Box className={classes.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <Box className={`${classes.padding} ${classes.section}`}>
            <span className={classes.sectionHeading}>{t('contactSectionHeading')} ?</span>
            <Controller
              control={control}
              name='name'
              render={({ field: {onChange, ref} }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  label={t('name')}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name='phoneNumber'
              render={({ field: {onChange, ref} }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  label={t('phone')}
                  required
                />
              )}
            />
            <Controller
              control={control}
              name='name'
              render={({ field: {onChange, ref} }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  label={t('name')}
                  required
                />
              )}
            />
          </Box>

          <Box className={`${classes.padding} ${classes.section}`}>
            <span className={classes.sectionHeading}>{t('carSectionHeading')}:</span>
            <Controller
              control={control}
              name='brand'
              render={({ field: {onChange, ref} }) => (
                <Autocomplete
                  onChange={onChange}
                  ref={ref}
                  options={['1','2','3','4']}
                  renderInput={(params) => <TextField {...params} label={t('brand')} required/>}
                 />
              )}
            />
            <Controller
              control={control}
              name='model'
              render={({ field: {onChange, ref} }) => (
                <Autocomplete
                  onChange={onChange}
                  ref={ref}
                  options={['1','2','3','4']}
                  renderInput={(params) => <TextField {...params} label={t('model')} required/>}
                 />
              )}
            />
            <Controller
              control={control}
              name='year'
              render={({ field: {onChange, ref} }) => (
                <Autocomplete
                  onChange={onChange}
                  ref={ref}
                  options={['1','2','3','4']}
                  renderInput={(params) => <TextField {...params} label={t('year')} required/>}
                 />
              )}
            />
            <Controller
              control={control}
              name='description'
              render={({ field: {onChange, ref} }) => (
                <TextField
                  ref={ref}
                  multiline
                  rows={4}
                  onChange={onChange}
                  onFocus={(e) => e.target.value  = e.target.value === t('description') ? '' : e.target.value }
                  onBlur={(e) => { e.target.value = e.target.value === '' ? t('description') : e.target.value }  }
                  label={t('details')}
                  defaultValue={t('description')}
                  required
                />
              )}
            />
          </Box>  
          <button type="submit">
            събмит
          </button>
        </form>
      </Box>
    </Box>
  );
}

export default Order;