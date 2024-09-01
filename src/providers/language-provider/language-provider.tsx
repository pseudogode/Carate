import {  ReactNode, useState } from "react";
import { Language } from "../../locales/languages";
import { ITranslationContext, TranslationContext } from "./use-language-context";

const defaultLanguage = Language.BG;

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState(defaultLanguage);

  const value: ITranslationContext = {
    setLanguage, language
  }
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}