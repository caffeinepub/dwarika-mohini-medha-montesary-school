import { useState } from 'react';
import { LanguageToggle } from './LanguageToggle';
import { useTranslation } from '../hooks/useTranslation';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'classes', label: t.nav.classes },
    { key: 'contact', label: t.nav.contact },
  ];

  const handleNav = (key: string) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + School Name */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/assets/generated/school-logo.dim_256x256.png"
              alt="Dwarika Mohini Medha Montesary School Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border border-saffron/30 shadow-xs group-hover:shadow-md transition-shadow"
            />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-foreground text-sm leading-tight">
                Dwarika Mohini Medha
              </p>
              <p className="font-heading font-semibold text-saffron text-xs leading-tight">
                Montesary School
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className="px-4 py-2 rounded-lg text-sm font-body font-medium text-foreground hover:text-saffron hover:bg-saffron/8 transition-all duration-150 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border py-3 pb-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                className="w-full text-left px-4 py-3 text-sm font-body font-medium text-foreground hover:text-saffron hover:bg-saffron/8 rounded-lg transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
