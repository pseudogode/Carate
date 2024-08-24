import { Button } from "@mui/base";
import classes from './nav-button.module.scss'
import { useLocation } from "react-router-dom";

interface Props {
  link: string;
  text: string;
}

function NavButton({ link, text }: Props) {
  const { pathname } = useLocation();
  const active = pathname === link;

  return ( 
    <Button className={`${classes.root} ${active ? classes.active : ''}`} href={link}>
      {text}
    </Button>
   );
}

export default NavButton;