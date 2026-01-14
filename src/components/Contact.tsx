import { Calendar, MessageCircle, Linkedin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-[7%]">
      {/* Live Status Indicator */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-md border border-primary/20 shadow-lg">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-foreground/90">
            {t.contact.statusAvailable}
          </span>
        </div>
      </div>

      <h2 className="section-heading">
        {t.contact.title}<span className="text-primary">{t.contact.titleHighlight}</span>
      </h2>
      
      <p className="text-center text-base md:text-lg mb-12 max-w-3xl mx-auto text-foreground/85">
        {t.contact.description}
      </p>

      <div className="max-w-4xl mx-auto">
        {/* Main Card - Schedule a Sync */}
        <a 
          href="https://calendly.com/vcarusobusiness/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group mb-6"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background/80 to-primary/5 backdrop-blur-xl border border-primary/20 p-8 md:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 hover:-translate-y-1">
            {/* Decorative gradient orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {t.contact.scheduleTitle}
                </h3>
                <p className="text-foreground/70 text-base md:text-lg">
                  {t.contact.scheduleDescription}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 group-hover:gap-3 group-hover:shadow-lg group-hover:shadow-primary/40">
                  {t.contact.viewCalendar}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Secondary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/34673166985" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-background/60 backdrop-blur-xl border border-foreground/10 p-6 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-green-500/30 hover:-translate-y-1">
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all duration-500"></div>
              
              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {t.contact.whatsappTitle}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {t.contact.whatsappDescription}
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/vincenzo-carvso" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-background/60 backdrop-blur-xl border border-foreground/10 p-6 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-1">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {t.contact.linkedinTitle}
                  </h4>
                  <p className="text-sm text-foreground/60">
                    {t.contact.linkedinDescription}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
