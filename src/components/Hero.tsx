import { Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import profileImage from '@/assets/vincenzo-profile.jpg';
import { useLanguage } from '@/i18n/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center w-full max-w-7xl mx-auto px-[7%]">
        {/* Content */}
        <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{t.hero.greeting}</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Vinc<span className="text-primary">enzo</span> Caruso
          </h1>
          <p 
            className="text-base md:text-lg leading-relaxed mb-6 text-foreground/90"
            dangerouslySetInnerHTML={{ __html: t.hero.description }}
          />

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <a 
              href="https://github.com/carvso" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon animate-pulse-ring"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vincenzo-carvso/" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon animate-pulse-ring"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/carvsoo" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon animate-pulse-ring"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={`${import.meta.env.BASE_URL}vincenzoCaruso_cv.pdf`} download className="btn-primary">
              {t.hero.downloadCv}
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              {t.hero.contactMe}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Profile Image - Blob Shape */}
        <div className="flex justify-center items-center order-1 lg:order-2 animate-fade-in-up animation-delay-200">
          <div className="relative">
            <img
              src={profileImage}
              alt="Vincenzo Caruso - Customer Support Specialist"
              className="w-full max-w-[280px] lg:max-w-[360px] object-cover transition-all duration-300 hover:-translate-y-1"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                filter: 'drop-shadow(0 20px 40px hsl(var(--primary) / 0.3))'
              }}
            />
            {/* Decorative border */}
            <div 
              className="absolute inset-0 border-2 border-primary/30 pointer-events-none"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
