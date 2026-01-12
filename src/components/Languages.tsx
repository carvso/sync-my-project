import { useLanguage } from '@/i18n/LanguageContext';
import { MessageCircle } from 'lucide-react';

const Languages = () => {
  const { t } = useLanguage();

  const languageData = [
    {
      name: t.languages.english,
      level: t.languages.englishLevel,
      proficiency: 85,
    },
    {
      name: t.languages.italian,
      level: t.languages.italianLevel,
      proficiency: 100,
    },
    {
      name: t.languages.spanish,
      level: t.languages.spanishLevel,
      proficiency: 75,
    },
  ];

  return (
    <section id="languages" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.languages.title} <span className="text-primary">{t.languages.titleHighlight}</span>
      </h2>

      <div className="max-w-3xl mx-auto">
        <div className="grid gap-6">
          {languageData.map((lang, index) => (
            <div
              key={lang.name}
              className="bg-card border border-border rounded-xl p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{lang.name}</h3>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
