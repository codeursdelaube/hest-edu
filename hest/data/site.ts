export const site = {
  name: "HEST",
  legalName: "École des Hautes Études de Sciences et Technologies",
  tagline: "Nous faisons de votre réussite notre métier",
  subtitle:
    "La garantie d'une formation respectant les normes internationales",
  welcome: "Bienvenue sur le site officiel de H.E.S.T.",
  url: "https://www.hest-edu.net",
  logo: "/logo.jpg",
  ogImage: "/logo.jpg",
} as const;

export const contact = {
  addressLine:
    "134, Avenue Jean-Paul II, Tokoin Wuiti, avant Polyclinique le Cœur",
  postal: "22 BP 278 Lomé 22 - Togo",
  cityShort: "Tokoin Wuiti, 134, Avenue Jean Paul II, Lomé",
  phones: [
    { display: "+228 91 24 50 50", tel: "+22891245050", whatsapp: true },
    { display: "+228 96 24 50 50", tel: "+22896245050", whatsapp: true },
    { display: "+228 22 61 86 34", tel: "+22822618634", whatsapp: true },
  ],
  emails: {
    general: "courriel@hest-edu.net",
    admission: "admission@hest-edu.net",
    info: "info@hest-edu.net",
  },
  socials: [
    { label: "LinkedIn", href: "", kind: "linkedin" as const },
    { label: "Instagram", href: "", kind: "instagram" as const },
    { label: "Facebook", href: "", kind: "facebook" as const },
    { label: "TikTok", href: "", kind: "tiktok" as const },
  ],
};

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/formations", label: "Formations" },
  { href: "/fiche-metier", label: "Fiche métier" },
  { href: "/bourses", label: "Bourses" },
  { href: "/inscription", label: "Inscription" },
  { href: "/contact", label: "Contact" },
] as const;

export const scholarshipBanner = {
  text: "Bourses d'études offertes aux étudiants inscrits en Licence ou Master.",
  // TODO Eric : montant et date limite (les chiffres 2021 du site actuel sont périmés).
};

export const academicYear = {
  // TODO Eric : renseigner l’année et les dates de rentrée avant publication.
  label: "Année académique",
  yearLabel: "Calendrier à confirmer",
  note: "Les dates de rentrée seront publiées dès validation par la direction.",
  entries: [
    { cycle: "Cycles BTS et Licence", date: "Date à confirmer" },
    { cycle: "Cycle Master", date: "Date à confirmer" },
  ],
};

export const inscriptionOnlineUrl = "";
// TODO Eric : coller ici l’URL du formulaire d’inscription en ligne.

export const about = {
  title: "Qui sommes-nous ?",
  paragraphs: [
    "La HEST (École des Hautes Études de Sciences et Technologies) est un établissement d'enseignement supérieur engagé dans la formation d'une nouvelle génération de professionnels compétents, innovants et responsables. Notre mission est d'offrir un enseignement de qualité, axé sur l'excellence académique, la pratique professionnelle et l'ouverture sur le monde.",
    "Depuis sa création, la HEST s'attache à développer des programmes adaptés aux réalités du marché du travail et aux enjeux du développement, en mettant l'accent sur les compétences, la créativité et l'esprit d'initiative.",
  ],
  highlights: [
    "Excellence académique",
    "Pratique professionnelle",
    "Ouverture sur le monde",
  ],
};

export const stats = [
  { value: 6, suffix: "", label: "Grands domaines de formation" },
  { value: 3, suffix: "", label: "Cycles : BTS, Licence, Master" },
  { value: 13, suffix: "", label: "Campus partenaires en France" },
  { value: 1, suffix: "", label: "Campus à Lomé, Togo" },
];

export const publications = [
  {
    title: "Concours de bourses",
    excerpt:
      "Informations relatives aux concours de bourses. Détails à actualiser avant publication.",
    href: "/bourses",
  },
  {
    title: "Journées Portes Ouvertes",
    excerpt:
      "Venez découvrir le campus, les parcours et les équipes pédagogiques.",
    href: "/contact",
  },
];
