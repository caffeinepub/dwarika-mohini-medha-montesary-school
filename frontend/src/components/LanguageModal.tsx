import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n/translations';

export function LanguageModal() {
  const { isSelected, setLanguage } = useLanguage();

  if (isSelected) return null;

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card rounded-2xl shadow-2xl p-8 sm:p-12 max-w-md w-full mx-4 animate-scale-in border border-border">
        {/* Decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-saffron to-school-green" />

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/school-logo.dim_256x256.png"
            alt="School Logo"
            className="w-20 h-20 object-contain rounded-full border-2 border-saffron/30 shadow-md"
          />
        </div>

        {/* School name */}
        <h1 className="font-heading text-center text-foreground text-lg font-bold leading-tight mb-1">
          Dwarika Mohini Medha Montesary School
        </h1>
        <p className="text-center text-muted-foreground text-sm mb-6">Shuklaganj, Unnao</p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
            Choose Language / भाषा चुनें
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Language buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSelect('en')}
            className="group flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-border hover:border-saffron bg-background hover:bg-saffron/5 transition-all duration-200 cursor-pointer"
          >
            <span className="text-3xl">🇬🇧</span>
            <span className="font-heading font-semibold text-foreground text-base group-hover:text-saffron transition-colors">
              English
            </span>
            <span className="text-muted-foreground text-xs">Continue in English</span>
          </button>

          <button
            onClick={() => handleSelect('hi')}
            className="group flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-border hover:border-school-green bg-background hover:bg-school-green/5 transition-all duration-200 cursor-pointer"
          >
            <span className="text-3xl">🇮🇳</span>
            <span className="font-heading font-semibold text-foreground text-base group-hover:text-school-green transition-colors">
              हिंदी
            </span>
            <span className="text-muted-foreground text-xs">हिंदी में जारी रखें</span>
          </button>
        </div>
      </div>
    </div>
  );
}
