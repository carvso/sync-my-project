import profileImage from '@/assets/vincenzo-profile.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-[7%]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full max-w-md animate-fade-in-up">
          <img
            src={profileImage}
            alt="Vincenzo Caruso"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:max-w-xl animate-fade-in-up animation-delay-200">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            Chi <span className="text-primary">sono</span>
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-6">
            Supporto clienti con un approccio tecnico e umano.
          </h3>
          <p className="text-base md:text-lg leading-relaxed mb-5 text-foreground/90">
            Ho un <span className="text-primary font-medium">diploma in IT</span> che mi ha fornito una solida base tecnica per comprendere 
            piattaforme digitali, software SaaS e sistemi complessi. Questa conoscenza tecnica, combinata 
            con le mie <span className="text-primary font-medium">competenze comunicative</span> e la capacità di lavorare in <span className="text-primary font-medium">tre lingue</span> 
            (Italiano, Inglese, Spagnolo), mi permette di assistere clienti in modo efficace, 
            <span className="text-primary font-medium"> identificando rapidamente</span> la causa dei problemi e <span className="text-primary font-medium">comunicando soluzioni</span> 
            in modo chiaro e accessibile.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 text-foreground/90">
            Credo che il supporto clienti di qualità nasca dalla <span className="text-primary font-medium">comprensione tecnica</span> 
            unita all'<span className="text-primary font-medium">empatia</span> e alla pazienza. Il mio obiettivo è aiutare ogni cliente 
            a risolvere il proprio problema, anche quando lavoriamo <span className="text-primary font-medium">sotto pressione</span> o 
            con situazioni complesse.
          </p>
          <a href="#skills" className="btn-primary">
            Le mie competenze
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
