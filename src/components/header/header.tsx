import classes from  './header.module.scss'
import NavButton from "../nav-button/nav-button";
import { useTranslate } from '../../hooks/use-translate';
import { LanguageButton } from '../language-button/language-button';

export default function Header() {
  const { t } = useTranslate('navBarButtons');
    
  return (
    <div className={classes.root}>
      <div></div>
      <div className={classes.tabs}>
        <NavButton link='/' text={t('home')}/>
        <NavButton link='/market' text={t('offers')}/>
        <NavButton link='/order' text={t('order')}/>
        <NavButton link='/contacts' text={t('contacts')}/>
      </div>
      <div className={classes.translate}>
        <LanguageButton/>
      </div>
    </div>    
  )
}
