import { CheckCircle, Heart, TrendingUp, Shield, BookOpen, Network } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [CheckCircle, Heart, TrendingUp, Shield, BookOpen, Network];

const Experience = () => {
  const { t } = useLanguage();
  const approaches = t.approach.items;

  return (
    <section id="experience" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.approach.title} <span className="text-primary">{t.approach.titleHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {approaches.map((approach, index) => {
          const Icon = icons[index];
          return (
            <div 
              key={approach.title} 
              className="approach-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="approach-icon">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">
                {approach.title}
              </h4>
              <p className="text-base text-foreground/85 leading-relaxed">
                {approach.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
