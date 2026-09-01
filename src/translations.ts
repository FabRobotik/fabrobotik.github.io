export type Language = 'fr' | 'en';

export interface NewsArticle {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CourseAudience = 'adults' | 'teens';

export interface CourseItem {
  title: string;
  desc: string;
  dur: string;
  level: CourseLevel;
  prereq?: string;
  img: string;
  audience: CourseAudience;
  ageRange: string;
}

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Notre Histoire',
      news: 'Actus',
      courses: 'Apprendre',
      workshop: "L'Atelier",
      reserve: 'Réserver une machine',
      join: 'Nous rejoindre',
      membership: 'Devenir membre',
    },
    home: {
      badge: "Une communauté de créateurs",
      title: "VOTRE CLUB {span}.",
      desc: "Découvrez l'informatique, maîtrisez l'IA et construisez vos propres robots au sein d'une communauté ouverte à tous, des débutants aux passionnés.",
      btnCourses: "Nos Ateliers d'Apprentissage",
      btnWorkshop: "Découvrir l'Atelier",
    },
    about: {
      title: "L'AVENTURE {span}.",
      titleSpan: "COMMUNE",
      desc: "FabRobotik est né de l'idée que la technologie doit être un outil de partage et d'émancipation. Fondée en Mai 2026, notre association ouvre les portes de la robotique et de l'IA à chacun, sans distinction de niveau.",
      history: [
        { year: 'Mai 2026', title: 'Le Premier Pas', desc: 'Rencontre des passionnés et naissance de l\'association à Oullins.' },
      ],
      philosophy: {
        title: "Nos Valeurs",
        desc: "Nous cultivons l'esprit de partage. Ici, on apprend en faisant, on s'entraide et on transforme ensemble des lignes de code en mouvements réels.",
        perks: ["Savoir libre et partagé", "Le droit à l'erreur", "Entraide intergénérationnelle"],
      },
      team: {
        title: "CEUX QUI {span}.",
        titleSpan: "ANIMENT"
      }
    },
    news: {
      title: "LA VIE DE {span}.",
      titleSpan: "L'ASSOCIATION",
      readMore: "Lire la suite",
      backToList: "Retour aux actus",
      noNews: "Le club se prépare...",
      noNewsDesc: "Revenez bientôt pour découvrir nos derniers projets et moments de partage !",
      list: [
        {
          id: 1,
          date: "5 septembre 2026",
          title: "Retrouvez-nous au Forum des Associations d'Oullins !",
          excerpt: "FabRobotik sera présent au Forum des Associations d'Oullins-Pierre-Bénite, stand n°21, le samedi 5 septembre 2026. Venez discuter avec nous de nos ateliers robotique et IA !",
          content: "FabRobotik sera présent au Forum des Associations d'Oullins-Pierre-Bénite, stand n°21 ! Rendez-vous le samedi 5 septembre 2026, de 10h à 16h, au Pôle sportif La Canopée (33 rue Charles-de-Gaulle, 69310 Oullins-Pierre-Bénite). Organisé chaque année par la ville en ouverture de la rentrée, ce forum rassemble une centaine d'associations du territoire autour du sport, des loisirs, de la culture, de la solidarité et du patrimoine. L'entrée est libre, sans inscription. Venez nous rencontrer sur notre stand pour découvrir l'association, poser toutes vos questions sur nos ateliers de robotique et d'intelligence artificielle, rencontrer les membres du bureau et discuter ensemble de vos envies et de vos idées pour la suite. On espère vous y retrouver nombreux !",
          image: "https://www.oullinspierrebenite.fr/app/uploads/2025/04/forum_assos-20240831_111122_vue_generale_2024-scaled.jpg"
        }
      ] as NewsArticle[]
    },
    courses: {
      title: "APPRENDRE {span}.",
      titleSpan: "ENSEMBLE",
      upcoming: "Prochainement",
      duration: "{d}h",
      day: "Une journée",
      levels: { beginner: "Débutant", intermediate: "Intermédiaire", advanced: "Avancé" } as Record<CourseLevel, string>,
      audiences: { all: "Tous les publics", adults: "Adultes", teens: "Ados" } as Record<'all' | CourseAudience, string>,
      sections: {
        adults: { title: "Ateliers Adultes", desc: "Ouverts à partir de 18 ans." },
        teens: { title: "Ateliers Ados", desc: "Ouverts aux 13-17 ans." }
      } as Record<CourseAudience, { title: string; desc: string }>,
      prereqLabel: "Prérequis",
      noPrereq: "Aucun prérequis",
      list: [
        {
          title: "S'initier à l'IA",
          desc: "Comprendre simplement les grands principes de l'intelligence artificielle et du machine learning, sans écrire une ligne de code.",
          dur: "3",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Découverte de la Robotique",
          desc: "Premiers pas avec nos robots : manipulation du bras SO-100 et bases de la robotique en toute simplicité.",
          dur: "3",
          level: "beginner",
          img: "so100.jfif",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Bien utiliser les IA génératives",
          desc: "Prompt engineering et bonnes pratiques pour tirer le meilleur des IA génératives au quotidien.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Machine Learning : les bases",
          desc: "Entraîner et évaluer ses premiers modèles de classification avec Python.",
          dur: "4",
          level: "intermediate",
          prereq: "S'initier à l'IA",
          img: "https://images.unsplash.com/photo-1763568258492-7c006595375a?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Programmer un robot avec Python",
          desc: "Piloter et programmer le bras SO-100 du club pour réaliser des tâches simples.",
          dur: "4",
          level: "intermediate",
          prereq: "Découverte de la Robotique",
          img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Vision par ordinateur & robotique intelligente",
          desc: "Coupler intelligence artificielle et robotique pour permettre à un robot de percevoir et réagir à son environnement.",
          dur: "1 day",
          level: "advanced",
          prereq: "Machine Learning : les bases",
          img: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 ans et +"
        },
        {
          title: "Découverte de l'IA pour ados",
          desc: "Une introduction ludique à l'intelligence artificielle, pensée pour les collégiens et lycéens curieux de comprendre comment ça marche.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 ans"
        },
        {
          title: "Premiers pas en robotique (ados)",
          desc: "Apprendre à utiliser et programmer un robot déjà prêt à l'emploi, pour découvrir la robotique de façon concrète et amusante.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1676764589917-e1e659bd9774?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 ans"
        },
        {
          title: "Créer son mini-projet IA (ados)",
          desc: "En petits groupes, concevoir un mini-projet utilisant l'intelligence artificielle, de l'idée à la démonstration.",
          dur: "3",
          level: "intermediate",
          prereq: "Découverte de l'IA pour ados",
          img: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 ans"
        },
      ] as CourseItem[]
    },
    services: {
      title: "L'ESPACE {span}.",
      titleSpan: "PARTAGÉ",
      download: "Guide de l'Atelier (PDF)",
      equipment: {
        title: "Nos outils communs",
        desc: "Tout ce qu'il faut pour donner vie à vos idées, de l'impression 3D à l'intelligence artificielle.",
        items: [
          "Espace Impression 3D - Pour créer toutes les formes",
          "Poste Laser - Pour découper et graver avec précision",
          "Espace Robotique - Bras SO-100 et stations IA pour explorer le futur"
        ]
      }
    },
    reservation: {
      title: "VENIR À L'ATELIER.",
      desc: "Choisissez un moment pour venir utiliser les outils ou simplement échanger sur vos projets.",
      calendarDays: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
      finalize: "Confirmer ma venue",
      identity: "Mieux vous connaître",
      resource: "Espace souhaité",
      date: "Quand souhaitez-vous venir ?",
      namePlaceholder: "Votre prénom et nom",
      datePlaceholder: "Cliquez sur un jour du calendrier",
      resources: ["Imprimante 3D", "Découpeuse Laser", "Coin Robotique & IA"],
      confirm: "C'est noté !",
      alert: "Super ! L'équipe a bien reçu votre demande, on vous attend !",
      month: "Mars 2026"
    },
    membership: {
      title: "FAIRE PARTIE DU CLUB.",
      desc: "Rejoindre FabRobotik, c'est soutenir un projet local et accéder à un univers de création sans limites.",
      plans: [
        { title: 'Membre Passionné', perks: ['Participation gratuite aux cours'] },
        { title: 'Membre Curieux (Étudiant)', perks: ['Participation gratuite aux cours', 'Tarif réduit'] }
      ],
      priceTBD: "Tarif à définir",
      priceNote: "Les tarifs d'adhésion seront communiqués prochainement.",
      btnJoin: "Manifester mon intérêt",
    },
    interest: {
      title: "MANIFESTER SON INTÉRÊT.",
      desc: "Les tarifs d'adhésion sont encore en cours de définition. En attendant, dites-nous ce que vous recherchez : nous reviendrons vers vous dès que possible !",
      name: "Nom et prénom",
      namePlaceholder: "Votre prénom et nom",
      email: "Email",
      emailPlaceholder: "votre@email.com",
      emailInvalid: "Merci d'indiquer une adresse email valide.",
      requiredLegend: "Champ obligatoire",
      profile: "Vous souhaitez",
      profileOptions: ["Apprendre", "Enseigner / Transmettre", "Les deux"],
      lookingFor: "Ce que vous recherchez",
      lookingForPlaceholder: "Ex : apprendre l'IA, rejoindre des projets robotiques, découvrir le club...",
      help: "Aide que vous pourriez apporter (facultatif)",
      helpPlaceholder: "Ex : animer un atelier, partager du matériel, aider à l'organisation...",
      submit: "Envoyer ma demande",
      sending: "Envoi en cours...",
      success: "Merci ! Votre message a bien été envoyé, nous reviendrons vers vous rapidement.",
      error: "Oups ! Une erreur est survenue lors de l'envoi. Vous pouvez nous contacter directement à fabrobotik@proton.me"
    },
    footer: {
      desc: "Une association pour explorer, créer et partager autour de la robotique et de l'intelligence artificielle.",
      explorer: "Découvrir",
      contact: "Nous trouver",
      madeWith: "Créé avec {heart} par la communauté FabRobotik."
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Our Story',
      news: 'News',
      courses: 'Learn',
      workshop: 'Workshop',
      reserve: 'Book a machine',
      join: 'Join Us',
      membership: 'Become a member',
    },
    home: {
      badge: "A community of creators",
      title: "YOUR {span} CLUB.",
      desc: "Discover computer science, master AI, and build your own robots within a community open to everyone, from beginners to enthusiasts.",
      btnCourses: "Our Learning Workshops",
      btnWorkshop: "Explore the Workshop",
    },
    about: {
      title: "A SHARED {span}.",
      titleSpan: "ADVENTURE",
      desc: "FabRobotik was born from the idea that technology should be a tool for sharing and empowerment. Founded in May 2026, our association opens the doors of robotics and AI to everyone, regardless of their level.",
      history: [
        { year: 'May 2026', title: 'The First Step', desc: 'Enthusiasts meet and the association is born in Oullins.' },
      ],
      philosophy: {
        title: "Our Values",
        desc: "We cultivate the spirit of sharing. Here, we learn by doing, we help each other, and together we transform lines of code into real movements.",
        perks: ["Free and shared knowledge", "The right to make mistakes", "Intergenerational support"],
      },
      team: {
        title: "THOSE WHO {span}.",
        titleSpan: "ANIMATE",
        role: "Host & Robotics Enthusiast",
      }
    },
    news: {
      title: "LIFE AT THE {span}.",
      titleSpan: "ASSOCIATION",
      readMore: "Read more",
      backToList: "Back to news",
      noNews: "The club is getting ready...",
      noNewsDesc: "Check back soon to discover our latest projects and shared moments!",
      list: [
        {
          id: 1,
          date: "September 5, 2026",
          title: "Join us at the Oullins Associations Forum!",
          excerpt: "FabRobotik will be at the Oullins-Pierre-Bénite Associations Forum, booth #21, on Saturday, September 5, 2026. Come chat with us about our robotics and AI workshops!",
          content: "FabRobotik will be at the Oullins-Pierre-Bénite Associations Forum, booth #21! Join us on Saturday, September 5, 2026, from 10am to 4pm, at Pôle sportif La Canopée (33 rue Charles-de-Gaulle, 69310 Oullins-Pierre-Bénite). Held every year by the city to kick off the new school year, this forum brings together around 110 local associations covering sports, leisure, culture, community support, and heritage. Entry is free, no registration needed. Come say hello at our booth to discover the association, ask us anything about our robotics and AI workshops, meet the board members, and chat with us about your ideas for what's next. We'd love to see you there!",
          image: "https://www.oullinspierrebenite.fr/app/uploads/2025/04/forum_assos-20240831_111122_vue_generale_2024-scaled.jpg"
        }
      ] as NewsArticle[]
    },
    courses: {
      title: "LEARNING {span}.",
      titleSpan: "TOGETHER",
      upcoming: "Coming soon",
      duration: "{d}h",
      day: "One day",
      levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" } as Record<CourseLevel, string>,
      audiences: { all: "All audiences", adults: "Adults", teens: "Teens" } as Record<'all' | CourseAudience, string>,
      sections: {
        adults: { title: "Adult Workshops", desc: "Open from age 18." },
        teens: { title: "Teen Workshops", desc: "Open to ages 13-17." }
      } as Record<CourseAudience, { title: string; desc: string }>,
      prereqLabel: "Prerequisite",
      noPrereq: "No prerequisite",
      list: [
        {
          title: "Introduction to AI",
          desc: "Understand the core principles of artificial intelligence and machine learning, no coding required.",
          dur: "3",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Robotics Discovery",
          desc: "First steps with our robots: hands-on with the SO-100 arm and the basics of robotics made simple.",
          dur: "3",
          level: "beginner",
          img: "so100.jfif",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Using Generative AI Well",
          desc: "Prompt engineering and best practices to get the most out of generative AI tools in daily life.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Machine Learning Basics",
          desc: "Train and evaluate your first classification models with Python.",
          dur: "4",
          level: "intermediate",
          prereq: "Introduction to AI",
          img: "https://images.unsplash.com/photo-1763568258492-7c006595375a?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Programming a Robot with Python",
          desc: "Control and program the club's SO-100 arm to carry out simple tasks.",
          dur: "4",
          level: "intermediate",
          prereq: "Robotics Discovery",
          img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Computer Vision & Smart Robotics",
          desc: "Combine AI and robotics so a robot can perceive and react to its environment.",
          dur: "1 day",
          level: "advanced",
          prereq: "Machine Learning Basics",
          img: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?auto=format&fit=crop&q=80&w=800",
          audience: "adults",
          ageRange: "18 years old and up"
        },
        {
          title: "Discovering AI for Teens",
          desc: "A playful introduction to artificial intelligence, designed for middle and high schoolers curious about how it works.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 years old"
        },
        {
          title: "First Steps in Robotics (Teens)",
          desc: "Learn to operate and program a ready-to-use robot, discovering robotics in a hands-on and fun way.",
          dur: "2",
          level: "beginner",
          img: "https://images.unsplash.com/photo-1676764589917-e1e659bd9774?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 years old"
        },
        {
          title: "Build Your Mini AI Project (Teens)",
          desc: "In small groups, design a mini project using artificial intelligence, from idea to demo.",
          dur: "3",
          level: "intermediate",
          prereq: "Discovering AI for Teens",
          img: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?auto=format&fit=crop&q=80&w=800",
          audience: "teens",
          ageRange: "13-17 years old"
        },
      ] as CourseItem[]
    },
    services: {
      title: "THE SHARED {span}.",
      titleSpan: "SPACE",
      download: "Workshop Guide (PDF)",
      equipment: {
        title: "Our shared tools",
        desc: "Everything you need to bring your ideas to life, from 3D printing to artificial intelligence.",
        items: [
          "3D Printing Space - To create any shape",
          "Laser Station - To cut and engrave with precision",
          "Robotics Space - SO-100 arms and AI stations to explore the future"
        ]
      }
    },
    reservation: {
      title: "VISIT THE WORKSHOP.",
      desc: "Choose a time to use the tools or simply chat about your projects.",
      calendarDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      finalize: "Confirm my visit",
      identity: "Get to know you",
      resource: "Desired space",
      date: "When would you like to come?",
      namePlaceholder: "Your first and last name",
      datePlaceholder: "Click on a day on the calendar",
      resources: ["3D Printer", "Laser Cutter", "Robotics & AI Corner"],
      confirm: "Got it!",
      alert: "Great! The team has received your request, we are waiting for you!",
      month: "March 2026"
    },
    membership: {
      title: "BE PART OF THE CLUB.",
      desc: "Joining FabRobotik means supporting a local project and accessing a world of limitless creation.",
      plans: [
        { title: 'Passionate Member', perks: ['Free participation in courses', 'Voting rights'] },
        { title: 'Curious Member (Student)', perks: ['Free participation in courses', 'Reduced rate'] }
      ],
      priceTBD: "Price to be defined",
      priceNote: "Membership fees will be announced soon.",
      btnJoin: "Express my interest",
    },
    interest: {
      title: "EXPRESS YOUR INTEREST.",
      desc: "Membership fees are still being finalized. In the meantime, tell us what you're looking for — we'll get back to you as soon as possible!",
      name: "Full name",
      namePlaceholder: "Your first and last name",
      email: "Email",
      emailPlaceholder: "your@email.com",
      emailInvalid: "Please enter a valid email address.",
      requiredLegend: "Required field",
      profile: "You'd like to",
      profileOptions: ["Learn", "Teach / Share knowledge", "Both"],
      lookingFor: "What you're looking for",
      lookingForPlaceholder: "E.g. learning AI, joining robotics projects, discovering the club...",
      help: "Help you could offer (optional)",
      helpPlaceholder: "E.g. running a workshop, sharing equipment, helping with organization...",
      submit: "Send my request",
      sending: "Sending...",
      success: "Thank you! Your message has been sent, we'll get back to you shortly.",
      error: "Oops! Something went wrong while sending. You can reach us directly at fabrobotik@proton.me"
    },
    footer: {
      desc: "An association to explore, create, and share around robotics and artificial intelligence.",
      explorer: "Discover",
      contact: "Find us",
      madeWith: "Created with {heart} by the FabRobotik community."
    }
  }
};
