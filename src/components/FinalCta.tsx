import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const FinalCta = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-[7%]">
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {t.finalCta.title}
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          {t.finalCta.description}
        </p>
        <a href="#contact" className="btn-primary inline-flex items-center gap-2">
          {t.contact.viewCalendar}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default FinalCta;
