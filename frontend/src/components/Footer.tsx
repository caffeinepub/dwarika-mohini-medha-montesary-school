import { useTranslation } from '../hooks/useTranslation';
import { Heart, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'dwarika-mohini-school');

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'classes', label: t.nav.classes },
    { key: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/generated/school-logo.dim_256x256.png"
                alt="School Logo"
                className="w-10 h-10 object-contain rounded-full border border-saffron/40"
              />
              <div>
                <p className="font-heading font-bold text-sm leading-tight">Dwarika Mohini Medha</p>
                <p className="font-heading text-saffron-light text-xs">Montesary School</p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-primary-foreground/60 text-xs font-body">
              <MapPin size={12} />
              <span>Shuklaganj, Unnao, UP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-saffron-light">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="font-body text-primary-foreground/70 hover:text-saffron-light text-sm transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-saffron-light">
              {t.footer.contactUs}
            </h4>
            <div className="space-y-2 font-body text-primary-foreground/70 text-sm">
              <p>{t.contact.info.addressValue}</p>
              <p>{t.contact.info.hoursValue}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-primary-foreground/50 text-xs">
            © {year} Dwarika Mohini Medha Montesary School. {t.footer.rights}
          </p>
          <p className="font-body text-primary-foreground/50 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-saffron fill-saffron" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron-light hover:text-saffron transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
