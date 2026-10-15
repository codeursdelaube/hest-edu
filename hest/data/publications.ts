export interface Publication {
  id: string;
  title: string;
  slug: string;
  category: "Bourses & Concours" | "Vie Académique" | "Recherche & Innovation" | "Partenariats";
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

/**
 * Publications initiales HEST.
 * Cette structure est prête à être connectée directement à une base de données (Supabase, Prisma, MongoDB, etc.).
 */
export const initialPublications: Publication[] = [
  {
    id: "pub-1",
    title: "Lancement officiel de la campagne de Bourses d'Études 2026-2027",
    slug: "lancement-bourses-etudes-2026-2027",
    category: "Bourses & Concours",
    excerpt:
      "La direction de la HEST annonce l'ouverture des candidatures pour les bourses d'excellence : jusqu'à 50% de prise en charge pour les premiers inscrits.",
    content:
      "Dans le cadre de son engagement pour la promotion de l'excellence académique et l'égalité des chances, l'École des Hautes Études de Sciences et Technologies (HEST) met à disposition pour l'année académique 2026-2027 un programme de bourses exceptionnel. Les 10 premiers inscrits bénéficient d'une demi-bourse (50%), les 10 suivants d'un quart de bourse (25%), et une réduction de 15% est accordée à tout dossier validé avant le 31 octobre.",
    author: "Direction Académique",
    date: "12 Octobre 2026",
    readTime: "3 min",
    image: "/Hero.jpg",
    tags: ["Bourses", "Admission", "Excellence"],
  },
  {
    id: "pub-2",
    title: "Partenariat HEST & FIGS Éducation : De nouvelles perspectives d'études en France",
    slug: "partenariat-hest-figs-education-france",
    category: "Partenariats",
    excerpt:
      "Grâce à notre accord avec FIGS Éducation, les étudiants de la HEST peuvent désormais poursuivre leurs études dans 13 campus français d'excellence.",
    content:
      "Le partenariat stratégique signé entre la HEST et FIGS Éducation permet aux diplômés de BTS et de Licence de poursuivre leur cursus en France au sein de grandes écoles réputées (IDRAC, ICD, ESAM, EPSI, WIS). Les programmes offrent des titres certifiés par l'État français et un accompagnement complet pour la mobilité étudiante.",
    author: "Relations Internationales",
    date: "28 Septembre 2026",
    readTime: "4 min",
    image: "/domaines/diplome.jpg",
    tags: ["International", "France", "Mobilité", "FIGS"],
  },
  {
    id: "pub-3",
    title: "Organisation des Journées Portes Ouvertes & Ateliers d'Orientation",
    slug: "journees-portes-ouvertes-orientation",
    category: "Vie Académique",
    excerpt:
      "Venez visiter les laboratoires, échanger avec les professeurs et découvrir les filières technologiques et managériales de la HEST.",
    content:
      "La HEST ouvre ses portes aux futurs bacheliers, étudiants et parents pour des sessions d'immersion et de découverte de ses infrastructures modernes : salles informatiques équipées, bibliothèque numérique, résidence universitaire et présentation des fiches métiers.",
    author: "Service Communication",
    date: "15 Septembre 2026",
    readTime: "2 min",
    image: "/biblio.avif",
    tags: ["Campus", "Orientation", "Événement"],
  },
  {
    id: "pub-4",
    title: "Modernisation des plateformes de travaux pratiques en Informatique & Réseaux",
    slug: "modernisation-plateformes-informatique-reseaux",
    category: "Recherche & Innovation",
    excerpt:
      "Acquisition de nouveaux équipements réseau et serveurs de virtualisation pour préparer les étudiants aux exigences réelles de l'industrie.",
    content:
      "Afin de renforcer la pédagogie par la pratique, la HEST a équipé ses laboratoires de nouveaux commutateurs, routeurs professionnels et stations de travail dédiées au développement logiciel, à la cybersécurité et aux systèmes distribués.",
    author: "Département Informatique",
    date: "02 Septembre 2026",
    readTime: "3 min",
    image: "/domaines/reseaux.jpg",
    tags: ["Informatique", "Innovation", "Laboratoire"],
  },
];
