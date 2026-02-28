import { useTranslation } from '../hooks/useTranslation';
import { Target, Eye } from 'lucide-react';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-foreground text-2xl sm:text-3xl mb-3">
            {t.about.title}
          </h2>
          <div className="w-16 h-1 bg-saffron rounded-full mx-auto mb-5" />
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-saffron/15 flex items-center justify-center">
                <Target size={20} className="text-saffron" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{t.about.mission}</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">{t.about.missionText}</p>
          </div>

          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card hover:shadow-card-hover transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-school-green/15 flex items-center justify-center">
                <Eye size={20} className="text-school-green" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg">{t.about.vision}</h3>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">{t.about.visionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
