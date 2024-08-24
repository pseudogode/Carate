import classes from  './header.module.scss'
import NavButton from "../nav-button/nav-button";

export default function Header() {
    
  return (
    <div className={classes.navbar}>
      <NavButton link='/' text='Начало'/>
      <NavButton link='/market' text='Оферти'/>
      <NavButton link='/verify' text='Поръчай'/>
      <NavButton link='/contacts' text='Контакти'/>
    </div>    
  )
}
