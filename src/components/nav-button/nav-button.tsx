import classes from './nav-button.module.scss'
import { Link, useLocation } from "react-router-dom";

interface Props {
  link: string;
  text: string;
}

function NavButton({ link, text }: Props) {
  const { pathname } = useLocation();
  const active = pathname === link;

  return ( 
    <Link className={`${classes.root} ${active ? classes.active : ''}`} to={link}>
      {text}
    </Link>
   );
}

export default NavButton;