import { IconButton } from "@mui/material";
import Box from "../../components/box/box";
import classes from './contacts.module.scss'
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { SiViber } from "react-icons/si";
import MobileBg from '../../assets/mobile.bg.png'
import { ReactNode } from "react";
import { LuClock, LuPhoneCall } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import ToyotaWallpaper from '../../assets/toyota-wallpaper.jpg'

function Contacts() {
  const ContactsInfoLabel = ({icon, text, children}: {icon: ReactNode, text: string, children?: ReactNode}) => 
  (<Box>
    <Box className={classes.infoLabel}>
      {icon}
      <p style={{fontSize: '24px'}}> {text} </p>
    </Box>
    <Box className={classes.infoText}>
      {children}
    </Box>
  </Box>);

  return (
    <Box 
      className={`${classes.root} ${classes.padding}`}
      style={{ backgroundSize: '100% auto',backgroundImage: `url(${ToyotaWallpaper})`, backgroundRepeat: 'no-repeat'}}
    >
      <Box className={`${classes.info} ${classes.padding}`}>
        <Box className={`${classes.fade} ${classes.padding}`} >
          <ContactsInfoLabel icon = {<MdOutlineLocationOn/>} text='Местоположение'>
            <p>гр. София, ул. Кукуш 1</p>
          </ContactsInfoLabel>
          <ContactsInfoLabel icon = {<LuClock/>} text='Работно време'>
            <p>Понеделник - Петък</p>
            <p>08:00 – 17:00</p>
          </ContactsInfoLabel>
          <ContactsInfoLabel icon = {<LuPhoneCall/>} text='Обади се'>
            <p>+359 89 9239925</p>
          </ContactsInfoLabel>     
          <ContactsInfoLabel icon = {<AiOutlineMail/>} text='Изпрати имейл'>
          <p>bayhuy1979@gmail.com</p>
          </ContactsInfoLabel>
        </Box>
        <Box className={`${classes.fade} ${classes.padding}`} style={{justifyContent: 'center', display: 'flex' }}>
          <IconButton><FaFacebookSquare className={classes.icon}/></IconButton>
          <IconButton><SiViber className={classes.icon}/></IconButton>
          <IconButton><img src={MobileBg} className={classes.icon}></img></IconButton>
        </Box>
      </Box>
      {/* <Box ><Map/></Box> */} {/* Toggle for leaflet map */}
      <Box className={`${classes.map} ${classes.padding}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.4551264473475!2d23.29123607648173!3d42.71525677116216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9aaa1c2e1fcb%3A0x2d4f0486b8f426cd!2sg.k.%20Zaharna%20fabrika%2C%20ul.%20%22Kukush%22%201%2C%201345%20Sofia!5e0!3m2!1sen!2sbg!4v1723976753593!5m2!1sen!2sbg" width="100%" height="100%" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </Box>
    </Box>
  );
}

export default Contacts;