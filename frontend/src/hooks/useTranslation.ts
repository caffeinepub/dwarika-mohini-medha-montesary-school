import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';
import type { Translations } from '../i18n/translations';

export function useTranslation(): { t: Translations; lang: string } {
  const { language } = useLanguage();
  return { t: translations[language], lang: language };
}
