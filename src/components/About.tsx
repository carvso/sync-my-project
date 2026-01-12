import profileImage from '@/assets/vincenzo-profile.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-[7%]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full max-w-md animate-fade-in-up">
          <img
            src={profileImage}
            alt="Vincenzo Caruso"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:max-w-xl animate-fade-in-up animation-delay-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            {t.about.subtitle}
          </h3>
          <p 
            className="text-base md:text-lg leading-relaxed mb-5 text-foreground/90"
            dangerouslySetInnerHTML={{ __html: t.about.paragraph1 }}
          />
          <p 
            className="text-base md:text-lg leading-relaxed mb-8 text-foreground/90"
            dangerouslySetInnerHTML={{ __html: t.about.paragraph2 }}
          />
          <a href="#skills" className="btn-primary">
            {t.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
