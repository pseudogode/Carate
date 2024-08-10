import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

export default function Header() {
  const container = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });
    
  return (
  <>
  {container}
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/market'>Offers</NavLink>
    <NavLink to='/verify'>Verify</NavLink>
    <NavLink to='/contacts'>Contacts</NavLink>
  </>
  )
}
