import { useRef } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageModal } from './components/LanguageModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ClassesSection } from './components/ClassesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function SchoolPage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const classesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      home: homeRef,
      about: aboutRef,
      classes: classesRef,
      contact: contactRef,
    };
    const ref = refMap[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <LanguageModal />
      <Header onNavigate={scrollToSection} />
      <main className="flex-1">
        <div ref={homeRef}>
          <Hero onNavigate={scrollToSection} />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={classesRef}>
          <ClassesSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <SchoolPage />
    </LanguageProvider>
  );
}
