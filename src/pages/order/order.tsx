import Box from '../../components/box/box';
import classes from './order.module.scss';
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'
import { Controller, useForm } from 'react-hook-form';
import { useTranslate } from '../../hooks/use-translate';
import { Autocomplete, Button, TextField } from '@mui/material';
import { carService } from '../../services/car-service/car-service';
import { useState } from 'react';
import _ from 'lodash';

import ReCAPTCHA from 'react-google-recaptcha';

const phoneNumberRegex = /^(?=.{1,13}$)(0[0-9]*|\+359[0-9]*|\+|\+3|\+35)$/;

const parse = (input:string, reg: RegExp) => reg.test(input) ? input : input.substring(0, input.length - 1);

const parsePhoneNumber = (input: string) => parse(input, phoneNumberRegex);

function Order() {
  const { handleSubmit, control } = useForm();
  const { t } = useTranslate('order');
  const onSubmit = (d) => alert(JSON.stringify(d));

  const [phoneNumber, setPhoneNumber] = useState('');
  const [captchaPassed, setCaptchaPassed] = useState(true);
  const [brands] = useState(() => carService.getAllCarBrands());
  const [carData] = useState(() => carService.getCarData());
  const [models, setModels] = useState<string[]>([]);

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
                  size='small'
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
                  value={phoneNumber}
                  onChange={(e) => {
                    const parsed = parsePhoneNumber(e.target.value);
                    setPhoneNumber(parsed);
                    onChange(parsed);
                  }}
                  label={t('phone')}
                  size='small'
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
                  size='small'
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
                  onChange={(_, newValue: string | null) => {
                    onChange(newValue);
                    setModels(carData.find(({ brand }) => brand === newValue)?.models ?? []);
                  }}
                  ref={ref}
                  options={brands}
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
                  options={models}
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
                  options={_.range(1990, new Date().getFullYear() + 1).map(y => y.toString())}
                  renderInput={(params) => <TextField {...params} label={t('year')}/>}
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
              <Button className={classes.submitButton} type='submit'>
                Submit
              </Button>
            </Box> }
        </form>
      </Box>
    </Box>
  );
}

export default Order;