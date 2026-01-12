import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const sections = ['home', 'about', 'languages', 'skills', 'work-experience', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#languages', label: t.nav.languages, id: 'languages' },
    { href: '#skills', label: t.nav.skills, id: 'skills' },
    { href: '#work-experience', label: t.nav.experience, id: 'work-experience' },
    { href: '#experience', label: t.nav.approach, id: 'experience' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-[7%] py-5 flex items-center ${
        isScrolled 
          ? 'bg-background shadow-md' 
          : 'bg-background/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <a href="#home" className="text-4xl font-cursive font-semibold mr-auto text-foreground">
        Vincenzo <span className="text-gradient font-cursive">Caruso</span>
      </a>

      <nav className={`md:flex items-center ${isMenuOpen ? 'absolute top-full left-0 w-full bg-background flex flex-col py-4 shadow-lg md:relative md:top-0 md:shadow-none md:flex-row md:w-auto md:bg-transparent' : 'hidden md:flex'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`relative text-lg font-medium mx-4 my-2 md:my-0 transition-colors duration-300 ${
              activeSection === link.id
                ? 'text-primary after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary'
                : 'text-foreground hover:text-primary'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <LanguageSelector />
        
        <button
          onClick={toggleDarkMode}
          className="text-2xl text-foreground hover:text-primary transition-colors cursor-pointer p-1.5"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-foreground hover:text-primary transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
