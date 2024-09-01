import { IconButton } from '@mui/material';
import BG from '../../assets/flags/bulgaria.png'
import EN from '../../assets/flags/united-kingdom.png'
import { Language } from '../../locales/languages';
import { useLanguageContext } from '../../providers/language-provider/use-language-context';
import classes from './language-button.module.scss'

const getFlag = (language: Language) => language === Language.BG ? BG : EN;

const toggleLang = (language: Language) => language === Language.BG ? Language.EN : Language.BG;
export function LanguageButton() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <IconButton className={classes.button} onClick={() => setLanguage(prev => toggleLang(prev))}>
      <img className={classes.icon} src={getFlag(language)}/>
    </IconButton>
  )
}
