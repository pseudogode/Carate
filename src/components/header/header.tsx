import { NavLink } from "react-router-dom";
import './header.css'

export default function Header() {
    
  return (
    <>
      <div className='navbar'>
        <div className="logo">Logo</div>
        <div className="menu-container">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/market'>Offers</NavLink>
          <NavLink to='/verify'>Verify</NavLink>
          <NavLink to='/contacts'>Contacts</NavLink>
        </div>
        
      </div>
    </>
    
  )
}
