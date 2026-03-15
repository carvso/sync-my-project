import { useLanguage } from '@/i18n/LanguageContext';

const RecruitmentProcess = () => {
  const { t } = useLanguage();
  const steps = t.recruitmentProcess.steps;

  return (
    <section id="process" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.recruitmentProcess.title} <span className="text-primary">{t.recruitmentProcess.titleHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="approach-card animate-fade-in-up text-center"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">{step.step}</span>
            </div>
            <h4 className="text-xl font-semibold mb-3 text-foreground">
              {step.title}
            </h4>
            <p className="text-base text-foreground/85 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecruitmentProcess;
