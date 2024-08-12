import './header.css'
import NavButton from "../nav-button/nav-button";
import logo from '../../assets/tesla-logo.png'

export default function Header() {
    
  return (
    <div className='header-navbar'>
        <div className='logo-wrapper' style={{height: '100%', width: '8%', display: 'inline-block',overflow: 'hidden'}}>
        <img src={logo} alt='img' style={{ height: '100%', width:'100%'}}/>
      </div>
      <div className="menu-container">
        <NavButton link='/' text='Home'/>
        <NavButton link='/market' text='Offers'/>
        <NavButton link='/verify' text='Verify'/>
        <NavButton link='/contacts' text='Contacts'/>
      </div>
    </div>    
  )
}
