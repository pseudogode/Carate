import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from './locales/en/translation.json'
import BG from './locales/bg/translation.json'

i18n 
  .use(initReactI18next)
  .init({
    resources: {
      en: EN,
      bg: BG
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

  export default i18n;