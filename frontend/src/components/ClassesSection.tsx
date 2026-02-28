import { useTranslation } from '../hooks/useTranslation';
import { ClassCard } from './ClassCard';

export function ClassesSection() {
  const { t } = useTranslation();

  return (
    <section id="classes" className="py-12 sm:py-16 bg-cream-dark/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-foreground text-2xl sm:text-3xl mb-3">
            {t.classes.title}
          </h2>
          <div className="w-16 h-1 bg-school-green rounded-full mx-auto mb-5" />
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.classes.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.classes.items.map((classData, index) => (
            <ClassCard key={classData.number} classData={classData} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
