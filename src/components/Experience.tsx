import { CheckCircle, Heart, TrendingUp, Shield, BookOpen, Network } from 'lucide-react';

const approaches = [
  {
    icon: CheckCircle,
    title: 'Comprensione Rapida',
    description: 'Analizzo rapidamente il problema del cliente, identificando la causa e proponendo soluzioni concrete.',
  },
  {
    icon: Heart,
    title: 'Attenzione al Cliente',
    description: "Ogni interazione è un'opportunità per costruire fiducia e garantire un'esperienza positiva.",
  },
  {
    icon: TrendingUp,
    title: 'Miglioramento Continuo',
    description: 'Apprendo costantemente dai feedback e dalle esperienze per migliorare il servizio offerto.',
  },
  {
    icon: Shield,
    title: 'Affidabilità',
    description: 'Rispetto gli SLA, mantengo le promesse e seguo ogni caso fino alla sua risoluzione.',
  },
  {
    icon: BookOpen,
    title: 'Documentazione',
    description: 'Mantengo documentazione chiara e aggiornata per facilitare la risoluzione di problemi futuri.',
  },
  {
    icon: Network,
    title: 'Collaborazione',
    description: 'Lavoro in sinergia con team tecnici e commerciali per garantire soluzioni complete.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-[7%]">
      <h2 className="section-heading">
        Il mio <span className="text-primary">Approccio</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {approaches.map((approach, index) => (
          <div 
            key={approach.title} 
            className="approach-card animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="approach-icon">
              <approach.icon className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-foreground">
              {approach.title}
            </h4>
            <p className="text-base text-foreground/85 leading-relaxed">
              {approach.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
