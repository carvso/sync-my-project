import { Code, PenTool, Cloud, Briefcase } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const icons = [Code, PenTool, Cloud, Briefcase];

const TechRoles = () => {
  const { t } = useLanguage();
  const roles = t.techRoles.roles;

  return (
    <section id="roles" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.techRoles.title} <span className="text-primary">{t.techRoles.titleHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {roles.map((role, index) => {
          const Icon = icons[index];
          return (
            <div
              key={role.title}
              className="skill-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-4">
                <Icon className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground">
                {role.title}
              </h3>
              <p className="text-sm text-center leading-relaxed text-foreground/85">
                {role.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechRoles;
