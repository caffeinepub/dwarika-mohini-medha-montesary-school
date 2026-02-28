import { useTranslation } from '../hooks/useTranslation';
import { MapPin, BookOpen } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero Banner Image */}
      <div className="relative h-64 sm:h-80 md:h-96 w-full">
        <img
          src="/assets/generated/hero-banner.dim_1200x400.png"
          alt="School Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/60" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 bg-saffron/90 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-body font-semibold mb-3 shadow-md">
            <MapPin size={12} />
            <span>{t.hero.established}</span>
          </div>
          <h1 className="font-heading font-bold text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight drop-shadow-lg max-w-3xl">
            Dwarika Mohini Medha Montesary School
          </h1>
          <p className="font-body text-primary-foreground/90 text-sm sm:text-base mt-2 drop-shadow">
            Shuklaganj, Unnao
          </p>
        </div>
      </div>

      {/* Tagline section */}
      <div className="bg-gradient-to-br from-saffron/10 via-background to-school-green/8 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-bold text-foreground text-xl sm:text-2xl md:text-3xl mb-4 leading-snug">
            {t.hero.tagline}
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('classes')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-saffron text-primary-foreground font-body font-semibold rounded-xl hover:bg-saffron-dark transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <BookOpen size={18} />
              {t.hero.ctaClasses}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-school-green text-secondary-foreground font-body font-semibold rounded-xl hover:bg-school-green-dark transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              {t.hero.ctaContact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
