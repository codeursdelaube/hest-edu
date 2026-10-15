export interface Axe {
  title: string;
  text: string;
}

export interface Step {
  step: string;
  title: string;
  description: string;
}

export interface PartnerSchool {
  name: string;
  domain: string;
  logoText: string;
}

export const bourses = {
  title: "Conventions de Bourses",
  kicker: "Poursuite d'études à l'international",
  subtitle: "Focus sur le système français & FIGS Éducation",
  partner: {
    name: "FIGS Education",
    tagline: "Réseau d'écoles d'enseignement supérieur de référence en France",
    objective: "Vous proposer un parcours personnalisé et professionnalisant",
    description:
      "La HEST a établi une convention de partenariat stratégique avec FIGS Education, fédérant des grandes écoles françaises prestigieuses. Ce partenariat permet à nos étudiants de poursuivre leurs études en France dans les meilleures conditions académiques, avec des équivalences directes et un accompagnement complet.",
    axes: [
      {
        title: "Parcours Personnalisé",
        text: "Vous avez la possibilité d'intégrer les meilleurs programmes de formation (Bachelors, Mastères professionnels, MBA) dans les meilleures écoles françaises adaptées à votre projet d'avenir.",
      },
      {
        title: "Formation Professionnalisante",
        text: "Une pédagogie en prise directe avec les entreprises (stages rémunérés, alternance, projets réels) qui vous prépare efficacement au marché de l'emploi en France et à l'international.",
      },
      {
        title: "Diplômes Reconnus par l'État Français",
        text: "Accès à des titres RNCP certifiés de niveaux 6 (Bac+3) et 7 (Bac+5), garantissant une reconnaissance internationale de votre qualification.",
      },
      {
        title: "Accompagnement Dédié",
        text: "Un suivi complet depuis Lomé jusqu'à votre arrivée en France : constitution du dossier, préparation aux entretiens Campus France et recherche de logement.",
      },
    ],
    partnerSchools: [
      { name: "IDRAC Business School", domain: "Commerce, Négociation & Management" },
      { name: "ICD Business School", domain: "Commerce International, Marketing & Business Development" },
      { name: "ESAM", domain: "Management, Finance d'Entreprise & Droit" },
      { name: "EPSI", domain: "Ingénierie Informatique, Systèmes & Réseaux" },
      { name: "WIS", domain: "Web, Data, Digital Business & Intelligence Artificielle" },
      { name: "ICL", domain: "Commerce & Relations Clientèle" },
      { name: "ISCPA", domain: "Journalisme, Communication & Production Médias" },
      { name: "ILERI", domain: "Relations Internationales & Sciences Politiques" },
    ],
  },
  campuses: [
    { city: "Paris", region: "Île-de-France" },
    { city: "Lyon", region: "Auvergne-Rhône-Alpes" },
    { city: "Bordeaux", region: "Nouvelle-Aquitaine" },
    { city: "Nice", region: "Provence-Alpes-Côte d'Azur" },
    { city: "Montpellier", region: "Occitanie" },
    { city: "Toulouse", region: "Occitanie" },
    { city: "Rennes", region: "Bretagne" },
    { city: "Lille", region: "Hauts-de-France" },
    { city: "Nantes", region: "Pays de la Loire" },
    { city: "Grenoble", region: "Auvergne-Rhône-Alpes" },
    { city: "Amiens", region: "Hauts-de-France" },
    { city: "Arras", region: "Hauts-de-France" },
    { city: "Brest", region: "Bretagne" },
  ],
  procedureSteps: [
    {
      step: "01",
      title: "Orientation et choix du programme",
      description:
        "Entretien d'orientation à la HEST à Lomé pour cibler la filière, l'école partenaire FIGS et la ville de votre choix en France.",
    },
    {
      step: "02",
      title: "Dépôt et étude de candidature",
      description:
        "Constitution du dossier académique (relevés, diplômes, lettre de motivation et CV) transmis à la commission d'admission conjointe HEST / FIGS.",
    },
    {
      step: "03",
      title: "Entretien d'admission & validation",
      description:
        "Entretien individuel avec le responsable des admissions de l'école choisie. Délibération et délivrance de l'attestation de pré-inscription.",
    },
    {
      step: "04",
      title: "Formalités consulaires & départ",
      description:
        "Accompagnement personnalisé pour la procédure Campus France, le visa long séjour pour études et l'installation dans l'un des 13 campus.",
    },
  ],
  localScholarshipsTitle: "Bourses d'Excellence HEST 2026-2027",
  localScholarshipsIntro:
    "Pour encourager l'excellence académique et soutenir les étudiants méritants, la direction de la HEST met à disposition plusieurs programmes de bourses internes non-cumulables :",
  localScholarships: [
    {
      badge: "½ Bourse — 50%",
      title: "50% des frais de scolarité",
      target: "Réservé aux 10 premiers étudiants inscrits",
      desc: "Réduction immédiate de la moitié des frais annuels de scolarité pour récompenser la réactivité et l'engagement dès l'ouverture des inscriptions.",
      highlight: true,
    },
    {
      badge: "¼ Bourse — 25%",
      title: "25% des frais de scolarité",
      target: "Réservé aux 10 étudiants inscrits suivants",
      desc: "Prise en charge du quart de la scolarité annuelle dès validation complète du dossier d'inscription.",
      highlight: false,
    },
    {
      badge: "15% de Réduction",
      title: "15% sur la scolarité annuelle",
      target: "Inscrits avant le 31 octobre 2026",
      desc: "Offre d'inscription anticipée ouverte à l'ensemble des étudiants (BTS, Licence et Master) finalisant leur dossier avant l'échéance.",
      highlight: false,
    },
    {
      badge: "10% Nouveaux Bacheliers",
      title: "10% pour les bacheliers de l'année",
      target: "Tous les nouveaux bacheliers 2026",
      desc: "Facilité accordée sans condition de quota à tous les bacheliers démarrant leur première année de BTS ou de Licence à la HEST.",
      highlight: false,
    },
  ],
  procedureCta: "Démarrer mon inscription",
  guideCta: "Télécharger les conditions d'admission (PDF)",
};
