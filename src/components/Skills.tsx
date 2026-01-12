import { Globe, Cpu, MessageSquare, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Globe,
      title: t.skills.multilingual.title,
      items: t.skills.multilingual.items,
    },
    {
      icon: Cpu,
      title: t.skills.technical.title,
      items: t.skills.technical.items,
    },
    {
      icon: MessageSquare,
      title: t.skills.communication.title,
      items: t.skills.communication.items,
    },
    {
      icon: Lightbulb,
      title: t.skills.problemSolving.title,
      items: t.skills.problemSolving.items,
    },
  ];

  return (
    <section id="skills" className="py-20 px-[7%]">
      <h2 className="section-heading">
        {t.skills.title} <span className="text-primary">{t.skills.titleHighlight}</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={skill.title} 
            className="skill-card animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-center mb-4">
              <skill.icon className="w-12 h-12 text-primary mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-foreground group-hover:text-primary transition-colors">
              {skill.title}
            </h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li 
                  key={i} 
                  className="relative pl-5 text-sm leading-relaxed text-foreground/85 before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold before:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
