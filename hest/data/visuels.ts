export const domainVisuals: Record<
  string,
  { image: string; alt: string; teaser: string }
> = {
  "sciences-technologies": {
    image: "/domaines/code.jpg",
    alt: "Étudiants noirs travaillant ensemble sur du code informatique",
    teaser: "Informatique, génie logiciel, électronique et sciences de l’ingénieur.",
  },
  "economie-gestion": {
    image: "/domaines/equipe.jpg",
    alt: "Équipe de jeunes professionnels noirs en réunion de gestion",
    teaser: "Banque, finance, entrepreneuriat et management des organisations.",
  },
  juridique: {
    image: "/domaines/ordi.jpg",
    alt: "Séminaire de formation avec des professionnels noirs",
    teaser: "Droit, sciences politiques et administration.",
  },
  "homme-societe": {
    image: "/domaines/media.jpg",
    alt: "Enregistrement d’un podcast, communication et médias",
    teaser: "Journalisme, cinéma, communication et métiers du tourisme.",
  },
  agronomie: {
    image: "/domaines/agro.jpg",
    alt: "Travailleur agricole en Afrique, production végétale",
    teaser: "Agroéconomie, productions et agrobusiness.",
  },
  lettres: {
    image: "/domaines/langues.jpg",
    alt: "Étudiante avec des dossiers, campus et langues",
    teaser: "Traduction, interprétation et industrie de la langue.",
  },
};

export const focusMetiers = [
  {
    title: "Informatique & génie logiciel",
    image: "/domaines/woc3.jpg",
    alt: "Développeuse noire travaillant sur un ordinateur portable",
    href: "/formations#sciences-technologies",
  },
  {
    title: "Électronique",
    image: "/domaines/electronique.jpg",
    alt: "Technicien noir en atelier de précision",
    href: "/formations#sciences-technologies",
  },
  {
    title: "Droit",
    image: "/domaines/ordi.jpg",
    alt: "Professionnels noirs en formation juridique et administrative",
    href: "/formations#juridique",
  },
  {
    title: "Gestion",
    image: "/domaines/equipe.jpg",
    alt: "Réunion d’équipe en sciences de gestion",
    href: "/formations#economie-gestion",
  },
];
