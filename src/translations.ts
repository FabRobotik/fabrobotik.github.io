export type Language = 'fr' | 'en';

export interface NewsArticle {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
}

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Notre Histoire',
      news: 'La Vie du Club',
      courses: 'Apprendre',
      workshop: "L'Atelier",
      reserve: 'Réserver une machine',
      join: 'Nous rejoindre',
      membership: 'Devenir membre',
    },
    home: {
      badge: "Une communauté de créateurs",
      title: "VOTRE ATELIER {span}.",
      desc: "Découvrez l'informatique, maîtrisez l'IA et construisez vos propres robots au sein d'une communauté ouverte à tous, des débutants aux passionnés.",
      btnCourses: "Nos Ateliers d'Apprentissage",
      btnWorkshop: "Découvrir l'Atelier",
    },
    about: {
      title: "L'AVENTURE {span}.",
      titleSpan: "COMMUNE",
      desc: "FabRobotik est né de l'idée que la technologie doit être un outil de partage et d'émancipation. Fondée en 2026, notre association ouvre les portes de la robotique et de l'IA à chacun, sans distinction de niveau.",
      history: [
        { year: '2026', title: 'Le Premier Pas', desc: 'Rencontre des passionnés et naissance de l\'association à Oullins.' },
      ],
      philosophy: {
        title: "Nos Valeurs",
        desc: "Nous cultivons l'esprit de partage. Ici, on apprend en faisant, on s'entraide et on transforme ensemble des lignes de code en mouvements réels.",
        perks: ["Savoir libre et partagé", "Le droit à l'erreur", "Entraide intergénérationnelle"],
      },
      team: {
        title: "CEUX QUI {span}.",
        titleSpan: "ANIMENT",
        role: "Animateur & Passionné de Robotique",
      }
    },
    news: {
      title: "LA VIE DE {span}.",
      titleSpan: "L'ASSOCIATION",
      readMore: "Lire la suite",
      backToList: "Retour aux actus",
      noNews: "Le club se prépare...",
      noNewsDesc: "Revenez bientôt pour découvrir nos derniers projets et moments de partage !",
      list: [] as NewsArticle[]
    },
    courses: {
      title: "APPRENDRE {span}.",
      titleSpan: "ENSEMBLE",
      upcoming: "Prochainement",
      duration: "{d}h",
      day: "Une journée",
      signUp: "Je m'inscris",
      list: [
        { title: "Découverte de la Robotique", dur: "3" },
        { title: "S'initier à l'IA", dur: "4" },
        { title: "Construire son premier robot", dur: "1 day" }
      ]
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
        { title: 'Membre Passionné', perks: ['Accès libre à l\'atelier', 'Participation gratuite aux cours'] },
        { title: 'Membre Curieux (Étudiant)', perks: ['Accès libre à l\'atelier', 'Participation gratuite aux cours', 'Tarif réduit'] }
      ],
      perYear: "/an",
      btnJoin: "Adhérer maintenant",
      donor: {
        title: "Soutenir notre projet",
        desc: "Vos dons nous aident à acheter du matériel et à organiser des événements ouverts à tous.",
        btn: "Faire un don de soutien"
      }
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
      news: 'Club Life',
      courses: 'Learn',
      workshop: 'Workshop',
      reserve: 'Book a machine',
      join: 'Join Us',
      membership: 'Become a member',
    },
    home: {
      badge: "A community of creators",
      title: "YOUR {span} WORKSHOP.",
      desc: "Discover computer science, master AI, and build your own robots within a community open to everyone, from beginners to enthusiasts.",
      btnCourses: "Our Learning Workshops",
      btnWorkshop: "Explore the Workshop",
    },
    about: {
      title: "A SHARED {span}.",
      titleSpan: "ADVENTURE",
      desc: "FabRobotik was born from the idea that technology should be a tool for sharing and empowerment. Founded in 2026, our association opens the doors of robotics and AI to everyone, regardless of their level.",
      history: [
        { year: '2026', title: 'The First Step', desc: 'Enthusiasts meet and the association is born in Oullins.' },
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
      list: [] as NewsArticle[]
    },
    courses: {
      title: "LEARNING {span}.",
      titleSpan: "TOGETHER",
      upcoming: "Coming soon",
      duration: "{d}h",
      day: "One day",
      signUp: "Sign me up",
      list: [
        { title: "Robotics Discovery", dur: "3" },
        { title: "Introduction to AI", dur: "4" },
        { title: "Build your first robot", dur: "1 day" }
      ]
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
        { title: 'Passionate Member', perks: ['Free workshop access', 'Free participation in courses', 'Voting rights'] },
        { title: 'Curious Member (Student)', perks: ['Free workshop access', 'Free participation in courses', 'Reduced rate'] }
      ],
      perYear: "/year",
      btnJoin: "Join now",
      donor: {
        title: "Support our project",
        desc: "Your donations help us buy equipment and organize events open to all.",
        btn: "Make a support donation"
      }
    },
    footer: {
      desc: "An association to explore, create, and share around robotics and artificial intelligence.",
      explorer: "Discover",
      contact: "Find us",
      madeWith: "Created with {heart} by the FabRobotik community."
    }
  }
};
