import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Language } from "../../locales/languages";

export interface ITranslationContext {
  language: Language,
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export const TranslationContext = createContext<ITranslationContext | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useLanguageContext used outside of LanguageProvider");
  }

  return context;
};