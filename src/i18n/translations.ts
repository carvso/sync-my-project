export type Language = 'en' | 'it' | 'es';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      languages: 'Languages',
      skills: 'Skills',
      experience: 'Experience',
      approach: 'Approach',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi! I'm",
      description: `I'm a <span class="text-primary font-medium">Customer Support</span> professional with a technical IT background. 
        I specialize in providing <span class="text-primary font-medium">multilingual support</span> (Italian, English, Spanish) 
        and assisting clients on <span class="text-primary font-medium">SaaS and digital platforms</span>. 
        My technical experience allows me to <span class="text-primary font-medium">quickly understand</span> complex issues 
        and communicate solutions <span class="text-primary font-medium">clearly and effectively</span>.`,
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'Customer support with a technical and human approach.',
      paragraph1: `I have an <span class="text-primary font-medium">IT diploma</span> that gave me a solid technical foundation to understand 
        digital platforms, SaaS software, and complex systems. This technical knowledge, combined 
        with my <span class="text-primary font-medium">communication skills</span> and ability to work in <span class="text-primary font-medium">three languages</span> 
        (Italian, English, Spanish), allows me to assist clients effectively, 
        <span class="text-primary font-medium">quickly identifying</span> the root cause of problems and <span class="text-primary font-medium">communicating solutions</span> 
        in a clear and accessible way.`,
      paragraph2: `I believe that quality customer support comes from <span class="text-primary font-medium">technical understanding</span> 
        combined with <span class="text-primary font-medium">empathy</span> and patience. My goal is to help every client 
        solve their problem, even when working <span class="text-primary font-medium">under pressure</span> or 
        with complex situations.`,
      cta: 'My Skills',
    },
    languages: {
      title: 'Language',
      titleHighlight: 'Proficiency',
      english: 'English',
      englishLevel: 'Professional working proficiency',
      italian: 'Italian',
      italianLevel: 'Native',
      spanish: 'Spanish',
      spanishLevel: 'Professional / Conversational',
    },
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      multilingual: {
        title: 'Multilingual Support',
        items: [
          'Professional customer support in Italian, English, and Spanish',
          'Experience with international and multicultural users',
        ],
      },
      technical: {
        title: 'Technical Skills',
        items: [
          'IT background and SaaS support familiarity',
          'AutoCAD 2D and technical documentation',
          'Basic web development knowledge (JavaScript / React)',
        ],
      },
      communication: {
        title: 'Communication',
        items: [
          'Clear and effective communication with users',
          'Active listening in high-pressure, KPI-driven environments',
        ],
      },
      problemSolving: {
        title: 'Problem Solving',
        items: [
          'Fast root-cause analysis',
          'Effective technical troubleshooting',
        ],
      },
    },
    workExperience: {
      title: 'Work',
      titleHighlight: 'Experience',
      experiences: [
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
      ],
    },
    approach: {
      title: 'My',
      titleHighlight: 'Approach',
      items: [
        {
          title: 'Quick Understanding',
          description: "I quickly analyze the customer's problem, identifying the cause and proposing concrete solutions.",
        },
        {
          title: 'Customer Focus',
          description: 'Every interaction is an opportunity to build trust and ensure a positive experience.',
        },
        {
          title: 'Continuous Improvement',
          description: 'I constantly learn from feedback and experiences to improve the service offered.',
        },
        {
          title: 'Reliability',
          description: 'I respect SLAs, keep promises, and follow every case until resolution.',
        },
        {
          title: 'Documentation',
          description: 'I maintain clear and updated documentation to facilitate future problem resolution.',
        },
        {
          title: 'Collaboration',
          description: 'I work in synergy with technical and commercial teams to ensure complete solutions.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      titleHighlight: 'Me',
      description: "I'm available to discuss opportunities in Customer Support, Customer Service, or Tech Support. Let's connect!",
      statusAvailable: 'Available for new opportunities',
      scheduleTitle: 'Schedule a Sync',
      scheduleDescription: 'Pick a time that works best for you. No back-and-forth emails.',
      viewCalendar: 'View Calendar',
      whatsappTitle: 'Quick Message',
      whatsappDescription: 'For urgent inquiries or a casual chat.',
      linkedinTitle: 'Stay Connected',
      linkedinDescription: 'Follow my professional updates.',
    },
    footer: {
      copyright: 'Copyright © 2026 by Vincenzo Caruso | All Rights Reserved.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi sono',
      languages: 'Lingue',
      skills: 'Competenze',
      experience: 'Esperienza',
      approach: 'Approccio',
      contact: 'Contatti',
    },
    hero: {
      greeting: 'Ciao! Mi chiamo',
      description: `Sono un professionista del <span class="text-primary font-medium">Customer Support</span> con un background tecnico in IT. 
        Mi specializzo nel fornire <span class="text-primary font-medium">supporto multilingue</span> (Italiano, Inglese, Spagnolo) 
        e nell'assistere clienti di <span class="text-primary font-medium">piattaforme SaaS e digitali</span>. 
        La mia esperienza tecnica mi permette di <span class="text-primary font-medium">comprendere rapidamente</span> problemi complessi 
        e comunicare soluzioni in modo <span class="text-primary font-medium">chiaro ed efficace</span>.`,
      downloadCv: 'Scarica CV',
      contactMe: 'Contattami',
    },
    about: {
      title: 'Chi',
      titleHighlight: 'sono',
      subtitle: 'Supporto clienti con un approccio tecnico e umano.',
      paragraph1: `Ho un <span class="text-primary font-medium">diploma in IT</span> che mi ha fornito una solida base tecnica per comprendere 
        piattaforme digitali, software SaaS e sistemi complessi. Questa conoscenza tecnica, combinata 
        con le mie <span class="text-primary font-medium">competenze comunicative</span> e la capacità di lavorare in <span class="text-primary font-medium">tre lingue</span> 
        (Italiano, Inglese, Spagnolo), mi permette di assistere clienti in modo efficace, 
        <span class="text-primary font-medium">identificando rapidamente</span> la causa dei problemi e <span class="text-primary font-medium">comunicando soluzioni</span> 
        in modo chiaro e accessibile.`,
      paragraph2: `Credo che il supporto clienti di qualità nasca dalla <span class="text-primary font-medium">comprensione tecnica</span> 
        unita all'<span class="text-primary font-medium">empatia</span> e alla pazienza. Il mio obiettivo è aiutare ogni cliente 
        a risolvere il proprio problema, anche quando lavoriamo <span class="text-primary font-medium">sotto pressione</span> o 
        con situazioni complesse.`,
      cta: 'Le mie competenze',
    },
    languages: {
      title: 'Competenze',
      titleHighlight: 'Linguistiche',
      english: 'Inglese',
      englishLevel: 'Competenza professionale',
      italian: 'Italiano',
      italianLevel: 'Madrelingua',
      spanish: 'Spagnolo',
      spanishLevel: 'Professionale / Conversazionale',
    },
    skills: {
      title: 'Le mie',
      titleHighlight: 'Competenze',
      multilingual: {
        title: 'Supporto Multilingue',
        items: [
          'Supporto clienti professionale in Italiano, Inglese e Spagnolo',
          'Esperienza con utenti internazionali e multiculturali',
        ],
      },
      technical: {
        title: 'Competenze Tecniche',
        items: [
          'Background IT e familiarità con supporto SaaS',
          'AutoCAD 2D e documentazione tecnica',
          'Conoscenze base di sviluppo web (JavaScript / React)',
        ],
      },
      communication: {
        title: 'Comunicazione',
        items: [
          'Comunicazione chiara ed efficace con gli utenti',
          'Ascolto attivo in ambienti ad alta pressione orientati ai KPI',
        ],
      },
      problemSolving: {
        title: 'Problem Solving',
        items: [
          'Analisi rapida delle cause',
          'Troubleshooting tecnico efficace',
        ],
      },
    },
    workExperience: {
      title: 'Esperienza',
      titleHighlight: 'Lavorativa',
      experiences: [
        {
          title: 'Operatore Digitale a Contatto col Cliente (Game Presenter)',
          company: 'Evolution S.L',
          location: 'Madrid, Spagna',
          period: 'Lug 2024 – Dic 2025',
          points: [
            'Interazione in tempo reale con utenti internazionali su piattaforme digitali live',
            'Gestione richieste utenti e incidenti operativi seguendo procedure rigorose',
            'Lavoro in ambienti ad alta pressione orientati ai KPI',
            'Mantenimento di professionalità, precisione e focus durante operazioni live continue',
            'Adattamento rapido a strumenti, piattaforme e cambiamenti di workflow',
          ],
        },
        {
          title: 'Documentazione Tecnica & Supporto CAD',
          company: 'ITING – Italiana Ingegneria',
          location: 'Siracusa, Italia',
          period: 'Ott 2023 – Lug 2024',
          points: [
            'Creazione di disegni tecnici con AutoCAD 2D',
            'Gestione di documentazione tecnica strutturata',
            'Conformità agli standard UNI EN ISO',
            'Supporto agli ingegneri nella documentazione e risoluzione problemi tecnici',
          ],
        },
        {
          title: 'Customer Service – Ristorazione (Fine Dining)',
          company: 'Ristorante Il Ghiottone',
          location: 'Siracusa, Italia',
          period: 'Giu 2023 – Ott 2023',
          points: [
            'Servizio clienti di alta qualità in ambienti dinamici e ad alta domanda',
            'Interazione diretta con i clienti, gestione richieste e aspettative',
            'Focus sulla qualità del servizio, attenzione ai dettagli e soddisfazione del cliente',
          ],
        },
      ],
    },
    approach: {
      title: 'Il mio',
      titleHighlight: 'Approccio',
      items: [
        {
          title: 'Comprensione Rapida',
          description: 'Analizzo rapidamente il problema del cliente, identificando la causa e proponendo soluzioni concrete.',
        },
        {
          title: 'Attenzione al Cliente',
          description: "Ogni interazione è un'opportunità per costruire fiducia e garantire un'esperienza positiva.",
        },
        {
          title: 'Miglioramento Continuo',
          description: 'Apprendo costantemente dai feedback e dalle esperienze per migliorare il servizio offerto.',
        },
        {
          title: 'Affidabilità',
          description: 'Rispetto gli SLA, mantengo le promesse e seguo ogni caso fino alla sua risoluzione.',
        },
        {
          title: 'Documentazione',
          description: 'Mantengo documentazione chiara e aggiornata per facilitare la risoluzione di problemi futuri.',
        },
        {
          title: 'Collaborazione',
          description: 'Lavoro in sinergia con team tecnici e commerciali per garantire soluzioni complete.',
        },
      ],
    },
    contact: {
      title: 'Contatta',
      titleHighlight: 'mi',
      description: 'Sono disponibile per discutere opportunità in Customer Support, Customer Service o Tech Support. Connettiamoci!',
      statusAvailable: 'Disponibile per nuove opportunità',
      scheduleTitle: 'Pianifica una Call',
      scheduleDescription: 'Scegli l\'orario più comodo per te. Niente email avanti e indietro.',
      viewCalendar: 'Vedi Calendario',
      whatsappTitle: 'Messaggio Rapido',
      whatsappDescription: 'Per richieste urgenti o una chiacchierata.',
      linkedinTitle: 'Resta Connesso',
      linkedinDescription: 'Segui i miei aggiornamenti professionali.',
    },
    footer: {
      copyright: 'Copyright © 2026 by Vincenzo Caruso | Tutti i diritti riservati.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      languages: 'Idiomas',
      skills: 'Habilidades',
      experience: 'Experiencia',
      approach: 'Enfoque',
      contact: 'Contacto',
    },
    hero: {
      greeting: '¡Hola! Soy',
      description: `Soy un profesional de <span class="text-primary font-medium">Customer Support</span> con formación técnica en IT. 
        Me especializo en proporcionar <span class="text-primary font-medium">soporte multilingüe</span> (Italiano, Inglés, Español) 
        y asistir a clientes en <span class="text-primary font-medium">plataformas SaaS y digitales</span>. 
        Mi experiencia técnica me permite <span class="text-primary font-medium">comprender rápidamente</span> problemas complejos 
        y comunicar soluciones de manera <span class="text-primary font-medium">clara y efectiva</span>.`,
      downloadCv: 'Descargar CV',
      contactMe: 'Contáctame',
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'mí',
      subtitle: 'Soporte al cliente con un enfoque técnico y humano.',
      paragraph1: `Tengo un <span class="text-primary font-medium">diploma en IT</span> que me proporcionó una sólida base técnica para comprender 
        plataformas digitales, software SaaS y sistemas complejos. Este conocimiento técnico, combinado 
        con mis <span class="text-primary font-medium">habilidades comunicativas</span> y la capacidad de trabajar en <span class="text-primary font-medium">tres idiomas</span> 
        (Italiano, Inglés, Español), me permite asistir a clientes de manera efectiva, 
        <span class="text-primary font-medium">identificando rápidamente</span> la causa de los problemas y <span class="text-primary font-medium">comunicando soluciones</span> 
        de forma clara y accesible.`,
      paragraph2: `Creo que el soporte al cliente de calidad nace de la <span class="text-primary font-medium">comprensión técnica</span> 
        unida a la <span class="text-primary font-medium">empatía</span> y la paciencia. Mi objetivo es ayudar a cada cliente 
        a resolver su problema, incluso cuando trabajamos <span class="text-primary font-medium">bajo presión</span> o 
        con situaciones complejas.`,
      cta: 'Mis habilidades',
    },
    languages: {
      title: 'Competencia',
      titleHighlight: 'Lingüística',
      english: 'Inglés',
      englishLevel: 'Competencia profesional',
      italian: 'Italiano',
      italianLevel: 'Nativo',
      spanish: 'Español',
      spanishLevel: 'Profesional / Conversacional',
    },
    skills: {
      title: 'Mis',
      titleHighlight: 'Habilidades',
      multilingual: {
        title: 'Soporte Multilingüe',
        items: [
          'Soporte al cliente profesional en Italiano, Inglés y Español',
          'Experiencia con usuarios internacionales y multiculturales',
        ],
      },
      technical: {
        title: 'Habilidades Técnicas',
        items: [
          'Formación IT y familiaridad con soporte SaaS',
          'AutoCAD 2D y documentación técnica',
          'Conocimientos básicos de desarrollo web (JavaScript / React)',
        ],
      },
      communication: {
        title: 'Comunicación',
        items: [
          'Comunicación clara y efectiva con usuarios',
          'Escucha activa en entornos de alta presión orientados a KPIs',
        ],
      },
      problemSolving: {
        title: 'Resolución de Problemas',
        items: [
          'Análisis rápido de causas',
          'Troubleshooting técnico efectivo',
        ],
      },
    },
    workExperience: {
      title: 'Experiencia',
      titleHighlight: 'Laboral',
      experiences: [
        {
          title: 'Operador Digital de Atención al Cliente (Game Presenter)',
          company: 'Evolution S.L',
          location: 'Madrid, España',
          period: 'Jul 2024 – Dic 2025',
          points: [
            'Interacción en tiempo real con usuarios internacionales en plataformas digitales en vivo',
            'Gestión de solicitudes de usuarios e incidentes operativos siguiendo procedimientos estrictos',
            'Trabajo en entornos de alta presión orientados a KPIs',
            'Mantenimiento de profesionalidad, precisión y enfoque durante operaciones en vivo continuas',
            'Adaptación rápida a herramientas, plataformas y cambios de flujo de trabajo',
          ],
        },
        {
          title: 'Documentación Técnica y Soporte CAD',
          company: 'ITING – Italiana Ingegneria',
          location: 'Siracusa, Italia',
          period: 'Oct 2023 – Jul 2024',
          points: [
            'Creación de dibujos técnicos usando AutoCAD 2D',
            'Gestión de documentación técnica estructurada',
            'Cumplimiento de estándares UNI EN ISO',
            'Apoyo a ingenieros en documentación y resolución de problemas técnicos',
          ],
        },
        {
          title: 'Servicio al Cliente – Hostelería (Alta Cocina)',
          company: 'Restaurante Il Ghiottone',
          location: 'Siracusa, Italia',
          period: 'Jun 2023 – Oct 2023',
          points: [
            'Servicio al cliente de alta calidad en entornos dinámicos y de alta demanda',
            'Interacción directa con clientes, gestionando solicitudes y expectativas',
            'Enfoque en calidad del servicio, atención al detalle y satisfacción del cliente',
          ],
        },
      ],
    },
    approach: {
      title: 'Mi',
      titleHighlight: 'Enfoque',
      items: [
        {
          title: 'Comprensión Rápida',
          description: 'Analizo rápidamente el problema del cliente, identificando la causa y proponiendo soluciones concretas.',
        },
        {
          title: 'Atención al Cliente',
          description: 'Cada interacción es una oportunidad para construir confianza y garantizar una experiencia positiva.',
        },
        {
          title: 'Mejora Continua',
          description: 'Aprendo constantemente de los comentarios y experiencias para mejorar el servicio ofrecido.',
        },
        {
          title: 'Fiabilidad',
          description: 'Respeto los SLAs, mantengo las promesas y sigo cada caso hasta su resolución.',
        },
        {
          title: 'Documentación',
          description: 'Mantengo documentación clara y actualizada para facilitar la resolución de problemas futuros.',
        },
        {
          title: 'Colaboración',
          description: 'Trabajo en sinergia con equipos técnicos y comerciales para garantizar soluciones completas.',
        },
      ],
    },
    contact: {
      title: 'Contácta',
      titleHighlight: 'me',
      description: 'Estoy disponible para discutir oportunidades en Customer Support, Customer Service o Tech Support. ¡Conectemos!',
      statusAvailable: 'Disponible para nuevas oportunidades',
      scheduleTitle: 'Programa una Llamada',
      scheduleDescription: 'Elige el horario que mejor te convenga. Sin emails de ida y vuelta.',
      viewCalendar: 'Ver Calendario',
      whatsappTitle: 'Mensaje Rápido',
      whatsappDescription: 'Para consultas urgentes o una charla casual.',
      linkedinTitle: 'Mantente Conectado',
      linkedinDescription: 'Sigue mis actualizaciones profesionales.',
    },
    footer: {
      copyright: 'Copyright © 2026 by Vincenzo Caruso | Todos los derechos reservados.',
    },
  },
} as const;

export type Translations = typeof translations.en;
