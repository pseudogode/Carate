import Box from "../../components/box/box";
import classes from './order.module.scss';
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'
import { Controller, useForm } from "react-hook-form";
import { useTranslate } from "../../hooks/use-translate";
import { Autocomplete, Button, TextField } from "@mui/material";
import { carService } from "../../services/car-service/car-service";
import { useEffect, useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';


function Order() {
  const { handleSubmit, control } = useForm();
  const { t } = useTranslate('order');
  const onSubmit = (d) => alert(JSON.stringify(d));
  const [captchaPassed, setCaptchaPassed] = useState(true);
  useEffect(() => {
    const makes = carService.getAllCarBrands();
    const modles= carService.getModelsByBrand('BMW');
    console.log(makes, modles);
  }, []);

  return (
    <Box
      className={`${classes.root} ${classes.padding}`}
      style={{ backgroundImage: `url(${ToyotaWallpaper})` }} 
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
              name='email'
              render={({ field: {onChange, ref} }) => (
                <TextField
                  ref={ref}
                  onChange={onChange}
                  label={t('email')}
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
                  minRows={2}
                  maxRows={4}
                  onChange={onChange}
                  label={t('details')}
                  placeholder={t('description')}
                  required
                />
              )}
            />
          </Box>  
          { !captchaPassed && 
            <Box className={`${classes.padding} ${classes.captchaContainer}`}>
              <ReCAPTCHA
                sitekey={import.meta.env['VITE_RECAPTCHA_SITE_KEY']}
                onChange={() => setCaptchaPassed((prev) => !prev)}
                theme='dark'
              />
            </Box> }
          { captchaPassed && 
            <Box className={`${classes.padding} ${classes.captchaContainer}`}>
              <Button className={classes.submitButton} type="submit">
                Submit
              </Button>
            </Box> }
        </form>
      </Box>
    </Box>
  );
}

export default Order;