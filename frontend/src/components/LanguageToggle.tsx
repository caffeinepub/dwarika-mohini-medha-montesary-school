import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    const next: Language = language === 'en' ? 'hi' : 'en';
    setLanguage(next);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-saffron/40 bg-saffron/10 hover:bg-saffron/20 text-saffron font-body font-semibold text-sm transition-all duration-200 cursor-pointer"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <span className="text-base">{language === 'en' ? '🇮🇳' : '🇬🇧'}</span>
      <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
    </button>
  );
}
