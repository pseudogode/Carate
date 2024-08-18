import { Button } from "@mui/base";
import './nav-button.scss'
import { useLocation } from "react-router-dom";

interface Props {
  link: string;
  text: string;
}

function NavButton({ link, text }: Props) {
  const { pathname } = useLocation();
  const active = pathname === link;

  return ( 
    <Button className={`nav-button ${active ? 'active' : ''}`} href={link}>
      {text}
    </Button>
   );
}

export default NavButton;