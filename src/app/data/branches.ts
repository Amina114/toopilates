// src/data/branches.ts
export type BranchQA = {
  question: string;
  answer?: string;         // si réponse affichée
  nextQuestion?: string;   // question suivante (affichée après la réponse)
  ctaHref?: string;        // lien final vers la page d'achat existante
  ctaLabel?: string;       // texte du bouton
};

export type Branch = {
  slug: string;
  title: string;
  subtitle?: string;
  image: string; // url ou /images/...
  definition: string;
  benefits: string[];
  forWho: string[];
  qaFlow: BranchQA[]; // suite Q -> R -> Q...
};

export const BRANCHES: Branch[] = [
  {
    slug: "pilates-en-suspension",
    title: "Pilates en Suspension",
    subtitle: "La légèreté au service du contrôle",
    image: "https://via.placeholder.com/600x400?text=Pilates+en+Suspension",
    definition:
      "L’utilisation de sangles de suspension permet de travailler en décharge partielle du poids du corps, tout en sollicitant fortement la stabilité et le gainage.",
    benefits: [
      "Renforcement profond du centre",
      "Amélioration de l’équilibre et des appuis",
      "Mobilisation douce des articulations",
      "Sensibilisation à la proprioception (perception du corps dans l’espace)",
    ],
    forWho: [
      "Pratiquants recherchant un travail profond sans surcharge",
      "Personnes en reprise progressive",
      "Sportifs souhaitant améliorer stabilité et coordination",
    ],
    qaFlow: [
      {
        question: "C’est quoi Pilates en Suspension ?",
        answer:
          "Une pratique avec sangles qui allège une partie du poids du corps tout en augmentant le travail de stabilité et de gainage.",
        nextQuestion: "Quels bénéfices spécifiques ?",
      },
      {
        question: "Quels bénéfices spécifiques ?",
        answer:
          "Renforcement profond du centre, équilibre/appuis, mobilité articulaire douce et meilleure proprioception.",
        nextQuestion: "Je veux aller plus loin, où trouver le livret ?",
      },
      {
        question: "Je veux aller plus loin, où trouver le livret ?",
        ctaHref: "/acheter-livret", // ⚠️ remplace par TA page existante
        ctaLabel: "Acheter le livret",
      },
    ],
  },

  {
    slug: "bands-pilates",
    title: "Bands Pilates",
    subtitle: "Résistance ciblée et mobilité renforcée",
    image: "https://via.placeholder.com/600x400?text=Bands+Pilates",
    definition:
      "Les bandes élastiques introduisent une résistance progressive qui permet de contrôler l’amplitude et d’intensifier le travail musculaire sans brutalité.",
    benefits: [
      "Meilleure activation musculaire",
      "Travail précis des stabilisateurs",
      "Renforcement sans impact articulaire",
      "Accent sur les transitions et la fluidité",
    ],
    forWho: [
      "Tous niveaux, du débutant au confirmé",
      "Ceux qui recherchent un travail tonique et contrôlé",
      "Sportifs ayant besoin de renforcer la stabilité articulaire",
    ],
    qaFlow: [
      { question: "Qu’est-ce que Bands Pilates ?", answer: "Une branche qui utilise des bandes élastiques pour ajouter une résistance progressive et contrôlée.", nextQuestion: "Pourquoi c’est efficace ?" },
      { question: "Pourquoi c’est efficace ?", answer: "Parce que tu peux intensifier sans brutalité, tout en améliorant l’activation et la stabilité.", nextQuestion: "Où acheter le livret ?" },
      { question: "Où acheter le livret ?", ctaHref: "/acheter-livret", ctaLabel: "Acheter le livret" },
    ],
  },

  {
    slug: "stick-pilates",
    title: "Stick Pilates",
    subtitle: "L’alignement et la structure révélés",
    image: "https://via.placeholder.com/600x400?text=Stick+Pilates",
    definition:
      "L’utilisation du bâton (stick) permet de guider les alignements, de sécuriser les appuis et d’offrir des variantes éducatives aux exercices classiques.",
    benefits: [
      "Travail de précision posturale",
      "Renforcement des chaînes musculaires profondes",
      "Sécurité et accompagnement du mouvement",
    ],
    forWho: [
      "Débutants en phase d’apprentissage postural",
      "Pratiquants désireux d’améliorer leur contrôle",
      "Sportifs souhaitant renforcer leur gainage et leur posture",
    ],
    qaFlow: [
      { question: "Stick Pilates, c’est quoi ?", answer: "Une branche qui utilise un bâton pour guider l’alignement et sécuriser l’exécution.", nextQuestion: "Pour qui c’est recommandé ?" },
      { question: "Pour qui c’est recommandé ?", answer: "Débutants (posture), pratiquants voulant plus de contrôle, sportifs (gainage/posture).", nextQuestion: "Je veux le livret, où ?" },
      { question: "Je veux le livret, où ?", ctaHref: "/acheter-livret", ctaLabel: "Acheter le livret" },
    ],
  },

  {
    slug: "masterclass-too-pilates",
    title: "Masterclass Too Pilates",
    subtitle: "L’exigence dans l’immersion",
    image: "https://via.placeholder.com/600x400?text=Masterclass+Too+Pilates",
    definition:
      "Les Masterclass sont des sessions longues et immersives, conçues pour explorer la méthode en profondeur et progresser sur des thématiques précises.",
    benefits: [
      "Compréhension approfondie de la méthode",
      "Travail intensif et structuré",
      "Correction personnalisée et coaching précis",
      "Développement de la conscience corporelle",
    ],
    forWho: [
      "Pratiquants motivés à progresser",
      "Coachs et professionnels souhaitant se former",
      "Élèves expérimentés cherchant un perfectionnement",
    ],
    qaFlow: [
      { question: "Une Masterclass, c’est quoi ?", answer: "Une session longue et immersive pour progresser sur des thèmes précis.", nextQuestion: "Quels avantages ?" },
      { question: "Quels avantages ?", answer: "Plus de compréhension, travail structuré, corrections précises, conscience corporelle.", nextQuestion: "Accéder au livret ?" },
      { question: "Accéder au livret ?", ctaHref: "/acheter-livret", ctaLabel: "Acheter le livret" },
    ],
  },

  {
    slug: "reformer-too-pilates",
    title: "Reformer Too Pilates",
    subtitle: "L’appareil emblématique revisité",
    image: "https://via.placeholder.com/600x400?text=Reformer+Too+Pilates",
    definition:
      "Le Reformer est un appareil qui permet un travail global en résistance, en mobilité et en contrôle grâce à des ressorts réglables.",
    benefits: [
      "Travail tridimensionnel complet",
      "Accent sur la spirale et la mobilité fonctionnelle",
      "Progressions précises et sécurisées",
      "Fluidité et élégance du mouvement",
      "Correction naturelle des déséquilibres",
    ],
    forWho: [
      "Tous niveaux avec adaptations",
      "Personnes souhaitant aller plus loin dans la maîtrise",
      "Sportifs recherchant un travail global et technique",
    ],
    qaFlow: [
      { question: "C’est quoi le Reformer ?", answer: "Un appareil à ressorts réglables pour travailler résistance, mobilité et contrôle.", nextQuestion: "Pourquoi c’est différent ?" },
      { question: "Pourquoi c’est différent ?", answer: "Parce que chaque réglage modifie l’intensité, les leviers et la stabilité, avec des progressions très précises.", nextQuestion: "Voir le livret complet ?" },
      { question: "Voir le livret complet ?", ctaHref: "/acheter-livret", ctaLabel: "Acheter le livret" },
    ],
  },
];
