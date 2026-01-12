import { MapPin, Calendar, Briefcase } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'Customer-Facing Digital Operator (Game Presenter)',
    company: 'Evolution S.L',
    location: 'Madrid, Spain',
    period: 'Jul 2024 – Dec 2025',
    points: [
      'Real-time interaction with international users on live digital platforms',
      'Handling user requests and operational incidents following strict procedures',
      'Working in KPI-driven and high-pressure environments',
      'Maintaining professionalism, accuracy, and focus during continuous live operations',
      'Fast adaptation to tools, platforms, and workflow changes',
    ],
  },
  {
    title: 'Technical Documentation & CAD Support',
    company: 'ITING – Italiana Ingegneria',
    location: 'Siracusa, Italy',
    period: 'Oct 2023 – Jul 2024',
    points: [
      'Creation of technical drawings using AutoCAD 2D',
      'Management of structured technical documentation',
      'Compliance with UNI EN ISO standards',
      'Supporting engineers in documentation and technical issue resolution',
    ],
  },
  {
    title: 'Customer Service – Hospitality (Fine Dining)',
    company: 'Il Ghiottone Restaurant',
    location: 'Siracusa, Italy',
    period: 'Jun 2023 – Oct 2023',
    points: [
      'High-quality customer service in fast-paced, high-demand environments',
      'Direct interaction with customers, managing requests and expectations',
      'Focus on service quality, attention to detail, and customer satisfaction',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 px-[7%]">
      <h2 className="section-heading">
        Work <span className="text-primary">Experience</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md z-10" />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Period badge */}
                  <div className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mb-3 bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                    {exp.title}
                  </h3>

                  {/* Company & Location */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Key points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-sm text-foreground/85 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
