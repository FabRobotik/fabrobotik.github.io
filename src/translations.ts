export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      courses: 'Cours',
      workshop: "L'Atelier",
      reserve: 'Réserver',
      join: 'Rejoindre',
      membership: 'Adhérer',
    },
    home: {
      badge: "Forger l'intelligence de demain",
      title: "VOTRE ESPACE {span}.",
      desc: "Apprenez l'informatique, maîtrisez l'IA et construisez vos propres systèmes robotiques au sein de notre communauté de passionnés.",
      btnCourses: "Découvrir les Cours",
      btnWorkshop: "Accéder à l'Atelier",
    },
    about: {
      title: "NOTRE {span}.",
      titleSpan: "HISTOIRE",
      desc: "FabRobotik est né de la conviction que la technologie ne doit pas être une boîte noire. Fondée en 2026, l'association s'est donné pour mission de rendre la robotique de pointe et l'IA accessibles à tous.",
      history: [
        { year: '2026', title: 'La Fondation', desc: 'Création de l\'association et mise en place des premiers cours.' },
      ],
      philosophy: {
        title: "Notre Philosophie",
        desc: "Nous croyons en la \"Forge Cognitive\" : l'idée que l'on comprend mieux une technologie en la construisant soi-même. Pas de théorie abstraite sans pratique concrète.",
        perks: ["Open Source par défaut", "Apprentissage par l'échec", "Collaboration active"],
      },
      team: {
        title: "L'ÉQUIPE {span}.",
        titleSpan: "FONDRATRICE",
        role: "Fondateur & Expert Robotique/IA",
      }
    },
    courses: {
      title: "FORGEZ VOS {span}.",
      titleSpan: "COMPÉTENCES",
      upcoming: "À venir",
      duration: "{d}h",
      day: "1 jour",
      signUp: "S'inscrire",
      list: [
        { title: "Initiation Robotique", dur: "3" },
        { title: "IA & Machine Learning", dur: "4" },
        { title: "Maîtrise LeRobot", dur: "1 day" }
      ]
    },
    services: {
      title: "LA FORGE {span}.",
      titleSpan: "TECHNIQUE",
      download: "Catalogue FabRobotik (PDF)",
      equipment: {
        title: "Équipements FabRobotik",
        desc: "Un arsenal complet pour transformer vos idées en réalité physique et numérique.",
        items: [
          "Parc Impression 3D - FDM & Résine haute définition",
          "Station Laser - Découpe et gravure 100W",
          "Unités Robotiques - Bras SO-100 & Plateformes IA"
        ]
      }
    },
    reservation: {
      title: "RÉSERVER.",
      desc: "Sélectionnez un créneau pour accéder aux machines de la Forge.",
      calendarDays: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      finalize: "Finaliser la réservation",
      identity: "Identité",
      resource: "Ressource",
      date: "Date",
      namePlaceholder: "Votre nom",
      datePlaceholder: "Sélectionner un jour sur le calendrier",
      resources: ["Imprimante 3D", "Découpeuse Laser", "Poste Robotique IA"],
      confirm: "Confirmer la réservation",
      alert: "Réservation envoyée à l'équipe FabRobotik !",
      month: "Mars 2026"
    },
    membership: {
      title: "REJOINDRE LA FORGE.",
      desc: "Devenez membre de FabRobotik et accédez au futur.",
      plans: [
        { title: 'Membre Actif', perks: ['Accès illimité à l\'atelier', 'Accès gratuit à tous les cours'] },
        { title: 'Étudiant Forge', perks: ['Accès illimité à l\'atelier', 'Accès gratuit à tous les cours'] }
      ],
      perYear: "/an",
      btnJoin: "Adhérer",
      donor: {
        title: "Propulser FabRobotik",
        desc: "Vos dons nous permettent d'acquérir les technologies les plus avancées pour la communauté.",
        btn: "Soutenir par un don"
      }
    },
    footer: {
      desc: "L'alliance de l'intelligence et de la création. Nous formons les architectes du monde numérique de demain.",
      explorer: "Explorer",
      contact: "Contact",
      madeWith: "Fait avec {heart} pour l'innovation."
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      courses: 'Courses',
      workshop: 'Workshop',
      reserve: 'Reserve',
      join: 'Join Us',
      membership: 'Join',
    },
    home: {
      badge: "Forging tomorrow's intelligence",
      title: "YOUR {span} SPACE.",
      desc: "Learn computer science, master AI, and build your own robotic systems within our community of enthusiasts.",
      btnCourses: "Discover Courses",
      btnWorkshop: "Access Workshop",
    },
    about: {
      title: "OUR {span}.",
      titleSpan: "STORY",
      desc: "FabRobotik was born from the conviction that technology should not be a black box. Founded in 2026, the association's mission is to make advanced robotics and AI accessible to all.",
      history: [
        { year: '2026', title: 'The Foundation', desc: 'Creation of the association and launch of the first courses.' },
      ],
      philosophy: {
        title: "Our Philosophy",
        desc: "We believe in the \"Cognitive Forge\": the idea that technology is best understood by building it yourself. No abstract theory without concrete practice.",
        perks: ["Open Source by default", "Learning through failure", "Active collaboration"],
      },
      team: {
        title: "THE {span} TEAM.",
        titleSpan: "FOUNDING",
        role: "Founder & Robotics/AI Expert",
      }
    },
    courses: {
      title: "FORGE YOUR {span}.",
      titleSpan: "SKILLS",
      upcoming: "Coming soon",
      duration: "{d}h",
      day: "1 day",
      signUp: "Sign Up",
      list: [
        { title: "Robotics Initiation", dur: "3" },
        { title: "AI & Machine Learning", dur: "4" },
        { title: "Mastering LeRobot", dur: "1 day" }
      ]
    },
    services: {
      title: "THE TECHNICAL {span}.",
      titleSpan: "FORGE",
      download: "FabRobotik Catalog (PDF)",
      equipment: {
        title: "FabRobotik Equipment",
        desc: "A full arsenal to transform your ideas into physical and digital reality.",
        items: [
          "3D Printing Lab - FDM & High-definition Resin",
          "Laser Station - 100W Cutting and Engraving",
          "Robotic Units - SO-100 Arms & AI Platforms"
        ]
      }
    },
    reservation: {
      title: "RESERVE.",
      desc: "Select a slot to access the Forge's machines.",
      calendarDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      finalize: "Finalize reservation",
      identity: "Identity",
      resource: "Resource",
      date: "Date",
      namePlaceholder: "Your name",
      datePlaceholder: "Select a day on the calendar",
      resources: ["3D Printer", "Laser Cutter", "AI Robotics Station"],
      confirm: "Confirm reservation",
      alert: "Reservation sent to the FabRobotik team!",
      month: "March 2026"
    },
    membership: {
      title: "JOIN THE FORGE.",
      desc: "Become a member of FabRobotik and access the future.",
      plans: [
        { title: 'Active Member', perks: ['Unlimited workshop access', 'Free access to all courses'] },
        { title: 'Forge Student', perks: ['Unlimited workshop access', 'Free access to all courses'] }
      ],
      perYear: "/year",
      btnJoin: "Join",
      donor: {
        title: "Power FabRobotik",
        desc: "Your donations allow us to acquire the most advanced technologies for the community.",
        btn: "Support with a donation"
      }
    },
    footer: {
      desc: "The alliance of intelligence and creation. We train the architects of tomorrow's digital world.",
      explorer: "Explore",
      contact: "Contact",
      madeWith: "Made with {heart} for innovation."
    }
  }
};
