import type { ClassData } from '../i18n/translations';
import { useTranslation } from '../hooks/useTranslation';
import { Users, BookOpen, Star } from 'lucide-react';

const CLASS_COLORS = [
  { bg: 'bg-saffron/10', border: 'border-saffron/30', badge: 'bg-saffron text-primary-foreground', icon: 'text-saffron' },
  { bg: 'bg-school-green/10', border: 'border-school-green/30', badge: 'bg-school-green text-secondary-foreground', icon: 'text-school-green' },
  { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-500 text-white', icon: 'text-amber-600' },
  { bg: 'bg-rose-50', border: 'border-rose-200', badge: 'bg-rose-500 text-white', icon: 'text-rose-600' },
  { bg: 'bg-violet-50', border: 'border-violet-200', badge: 'bg-violet-500 text-white', icon: 'text-violet-600' },
];

interface ClassCardProps {
  classData: ClassData;
  index: number;
}

export function ClassCard({ classData, index }: ClassCardProps) {
  const { t } = useTranslation();
  const colors = CLASS_COLORS[index % CLASS_COLORS.length];

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-body font-bold ${colors.badge} mb-2`}>
            {classData.name}
          </span>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Users size={13} className={colors.icon} />
            <span className="font-body">{t.classes.ageLabel}: {classData.ageRange}</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-xl ${colors.badge} shadow-sm`}>
          {classData.number}
        </div>
      </div>

      {/* Description */}
      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
        {classData.description}
      </p>

      {/* Focus */}
      <div className="flex items-center gap-2 mb-3">
        <Star size={13} className={colors.icon} />
        <span className="font-body text-xs font-semibold text-foreground">{t.classes.highlightLabel}:</span>
        <span className="font-body text-xs text-muted-foreground">{classData.highlight}</span>
      </div>

      {/* Subjects */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <BookOpen size={13} className={colors.icon} />
          <span className="font-body text-xs font-semibold text-foreground">{t.classes.subjectsLabel}:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {classData.subjects.map((subject) => (
            <span
              key={subject}
              className="px-2 py-0.5 bg-card border border-border rounded-full text-xs font-body text-muted-foreground"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
