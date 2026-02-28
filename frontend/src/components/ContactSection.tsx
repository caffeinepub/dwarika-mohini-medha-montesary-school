import { useTranslation } from '../hooks/useTranslation';
import { ContactForm } from './ContactForm';
import { MapPin, Phone, Clock } from 'lucide-react';

export function ContactSection() {
  const { t } = useTranslation();

  const infoItems = [
    { icon: MapPin, label: t.contact.info.address, value: t.contact.info.addressValue, color: 'text-saffron', bg: 'bg-saffron/10' },
    { icon: Phone, label: t.contact.info.phone, value: t.contact.info.phoneValue, color: 'text-school-green', bg: 'bg-school-green/10' },
    { icon: Clock, label: t.contact.info.hours, value: t.contact.info.hoursValue, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-foreground text-2xl sm:text-3xl mb-3">
            {t.contact.title}
          </h2>
          <div className="w-16 h-1 bg-saffron rounded-full mx-auto mb-5" />
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-xs"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="font-body text-muted-foreground text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Decorative card */}
            <div className="p-5 bg-gradient-to-br from-saffron/15 to-school-green/10 rounded-xl border border-saffron/20 mt-4">
              <p className="font-heading font-semibold text-foreground text-sm mb-1">
                Dwarika Mohini Medha Montesary School
              </p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">
                Shuklaganj, Unnao, Uttar Pradesh
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border shadow-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
