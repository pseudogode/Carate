import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../providers/language-provider/use-language-context";

export function useTranslate(prefix: string) {
  const { language } = useLanguageContext();
  const { t } = useTranslation('', { lng: language, keyPrefix: prefix ?? ''});

  return { t };
}