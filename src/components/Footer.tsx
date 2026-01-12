import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex justify-between items-center flex-wrap gap-4 py-6 px-[7%] bg-primary">
      <p className="text-base text-primary-foreground">
        Copyright © 2026 by Vincenzo Caruso | All Rights Reserved.
      </p>
      
      <button
        onClick={scrollToTop}
        className="inline-flex justify-center items-center p-2 bg-primary-foreground rounded-lg border-2 border-primary outline-2 outline-transparent transition-all duration-300 hover:outline-primary-foreground cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-foreground" />
      </button>
    </footer>
  );
};

export default Footer;
