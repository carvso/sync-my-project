import { Globe, Cpu, MessageSquare, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Globe,
    title: 'Supporto Multilingue',
    items: [
      'Professional customer support in Italian, English, and Spanish',
      'Experience with international and multicultural users',
    ],
  },
  {
    icon: Cpu,
    title: 'Competenze Tecniche',
    items: [
      'IT background and SaaS support familiarity',
      'AutoCAD 2D and technical documentation',
      'Basic web development knowledge (JavaScript / React)',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Comunicazione',
    items: [
      'Clear and effective communication with users',
      'Active listening in high-pressure, KPI-driven environments',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    items: [
      'Fast root-cause analysis',
      'Effective technical troubleshooting',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-[7%]">
      <h2 className="section-heading">
        Le mie <span className="text-primary">Competenze</span>
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
