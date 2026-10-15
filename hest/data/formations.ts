export type CycleId = "bts" | "licence" | "master";

export const cycles: { id: CycleId; label: string; short: string }[] = [
  { id: "bts", label: "BTS / BAC+2", short: "BTS" },
  { id: "licence", label: "Licence / BAC+3", short: "Licence" },
  { id: "master", label: "Master / BAC+5", short: "Master" },
];

export type Mention = {
  name: string;
  specialties: string[];
};

export type Domain = {
  id: string;
  name: string;
  intro: string;
  admission: Partial<Record<CycleId, string>>;
  cycles: Record<CycleId, Mention[] | null>;
};

export const domains: Domain[] = [
  {
    id: "sciences-technologies",
    name: "Sciences et Technologies",
    intro:
      "La formation supérieure à Hest prépare les étudiants pour les bonnes perspectives d’emploi dans tous les domaines liés aux sciences informatiques et de technologie numérique.",
    admission: {
      bts: "Baccalauréat toutes séries",
      licence: "Baccalauréat série scientifique ou diplômes équivalents",
      master: "Licence en sciences et technologies ou diplômes équivalents",
    },
    cycles: {
      bts: [
        {
          name: "Sciences de l’ingénieur",
          specialties: [
            "Électronique",
            "Électrotechnique",
            "Électromécanique",
            "Génie civil",
            "Génie industriel",
            "Génie mécanique",
            "Électricité",
            "Géométrie et topographie",
          ],
        },
        {
          name: "Informatique",
          specialties: [
            "Télécommunications",
            "Systèmes et réseaux informatiques",
            "Développement d’application",
            "Maintenance Informatique",
            "Informatique industrielle",
            "Informatique de gestion",
          ],
        },
      ],
      licence: [
        {
          name: "Sciences de l’ingénieur",
          specialties: [
            "Énergies renouvelables",
            "Électronique",
            "Électrotechnique",
            "Électromécanique",
            "Génie civil",
            "Génie industriel",
            "Génie mécanique",
            "Génie électrique",
            "Géométrie et topographie",
            "Mécatronique et robotique",
            "Science et génie des matériaux",
          ],
        },
        {
          name: "Informatique",
          specialties: [
            "Réseaux et Télécommunications",
            "Systèmes et réseaux informatiques",
            "Informatique industrielle",
            "Robotique et intelligence artificielle",
            "Informatique de gestion",
          ],
        },
        {
          name: "Mathématiques",
          specialties: [
            "Sciences des données (Big Data)",
            "Mathématiques et informatique",
            "Mathématiques et statistiques",
          ],
        },
      ],
      master: [
        {
          name: "Sciences de l’ingénieur",
          specialties: [
            "Ingénierie des énergies renouvelables",
            "Ingénierie environnementale",
            "Génie électrique",
            "Génie électronique",
            "Génie électrique et électronique",
            "Génie électrotechnique",
            "Génie électromécanique",
            "Électronique de puissance et électromécanique",
            "Génie civil",
            "Génie industriel",
            "Génie électrique, réseaux intelligents",
            "Génie mécanique et productique",
            "Génie mécanique numérique",
            "Ingénierie topographique et géomatique appliquée",
            "Science et génie des matériaux",
          ],
        },
        {
          name: "Informatique",
          specialties: [
            "Business intelligence et informatique décisionnelle",
            "Sécurité des systèmes, cybersécurité et protection des données",
            "Ingénierie 3D et jeux vidéo",
            "Expérience utilisateur, UX, UI Design",
            "Génie logiciel et informatique technique",
            "Ingénierie en science des matériaux computationnelle",
            "Traitement du signal et apprentissage automatique",
            "Ingénierie informatique mobile et web",
            "Management de projets Web, Web Strategy",
          ],
        },
        {
          name: "Mathématiques",
          specialties: [
            "Big Data & Data Sciences",
            "Ingénierie statistique et financière",
            "Actuariat",
            "Ingénierie en sciences computationnelles avancées",
            "Calcul haute performance",
            "Informatique quantique appliquée",
            "Calcul haute performance et informatique quantique",
          ],
        },
      ],
    },
  },
  {
    id: "economie-gestion",
    name: "Sciences Économiques et de Gestion",
    intro:
      "Les étudiants sont préparés à travailler dans les entreprises privées, telles que les banques, les assurances, les cabinets d’expertise, mais aussi les administrations publiques et internationales, ainsi que les collectivités territoriales et les institutions économiques locales.",
    admission: {
      bts: "Baccalauréat toutes séries",
      licence: "Baccalauréat séries scientifiques ou économiques",
      master: "Licence en Sciences économiques ou en Sciences de Gestion",
    },
    cycles: {
      bts: [
        {
          name: "Sciences de gestion",
          specialties: [
            "Comptabilité et gestion des entreprises",
            "Commerce international",
            "Assurances",
            "Banque et finance",
            "Finance et banque",
            "Transport, logistique et transit",
            "Gestion des collectivités locales",
            "Assistant de gestion des PME/PMI",
            "Administration et gestion",
            "Action commerciale et force de vente",
            "Microfinance et système financier décentralisé",
          ],
        },
        {
          name: "Sciences économiques",
          specialties: ["Économie sociale et familiale", "Développement local"],
        },
      ],
      licence: [
        {
          name: "Sciences de gestion",
          specialties: [
            "Comptabilité et gestion des entreprises",
            "Comptabilité, contrôle et audit",
            "Commerce international",
            "Actuariat",
            "Banque et finance",
            "Banque et assurance",
            "Banque et audit",
            "Finance, banque et assurance",
            "Finance, comptabilité, audit",
            "Transport, logistique et transit",
            "Gestion des collectivités locales",
            "Entrepreneuriat, design et innovation",
            "Entrepreneuriat et management des projets innovants",
            "Entrepreneuriat et management des petites et moyennes organisations",
            "Microfinance et système financier décentralisé",
          ],
        },
        {
          name: "Sciences économiques",
          specialties: [
            "Économie appliquée",
            "Entrepreneuriat, design et innovation",
            "Entrepreneuriat et management des projets innovants",
            "Entrepreneuriat et management des petites et moyennes organisations",
          ],
        },
      ],
      master: [
        {
          name: "Sciences de gestion",
          specialties: [
            "Comptabilité, contrôle et audit",
            "Finance et stratégie",
            "Finance, comptabilité, audit",
            "Actuariat",
            "Banque et audit",
            "Banque et finance",
            "Commerce international",
            "Transport et logistique",
            "Gestion des collectivités locales",
            "Microfinance et système financier décentralisé",
            "Métiers de l’entrepreneuriat",
            "Entrepreneuriat, design et innovation",
            "Entrepreneuriat et management des projets innovants",
            "Entrepreneuriat et management des organisations",
            "Management et gestion des organisations",
          ],
        },
        {
          name: "Sciences économiques",
          specialties: [
            "Économie appliquée",
            "Économie internationale",
            "Économie agricole, de la mer et de l’environnement",
            "Économie de l’énergie et des transports",
            "Économie du développement local",
            "Économie du développement international",
            "Entrepreneuriat, design et innovation",
            "Entrepreneuriat et management des projets innovants",
            "Entrepreneuriat et management des organisations",
            "Développement agricole et politiques économiques",
          ],
        },
      ],
    },
  },
  {
    id: "juridique",
    name: "Sciences Juridiques, Politiques et de l'Administration",
    intro:
      "Les diplômes de Licence et de Master Droit privé, Droit public ou Sciences politiques et des Relations internationales ou Diplomatie, offerts à HEST garantissent aux apprenants d’exercer, après leur formation, de nombreuses compétences dans divers secteurs d’activités : la fonction publique, la finance, le commerce, les professions libérales, la communication, les organisations internationales, le système des Nations-Unies, etc.",
    admission: {
      bts: "Baccalauréat toutes séries",
      licence: "Baccalauréat toutes séries",
      master: "Licence LMD ou Maîtrise en Sciences Juridiques et/ou Politiques",
    },
    cycles: {
      bts: [
        {
          name: "Sciences juridiques",
          specialties: [
            "Administration et gestion",
            "Assistant de gestion des PMI/PME",
            "Administration des services de santé",
            "Assistant juridique",
            "Environnement",
            "Secrétariat commercial bilingue",
            "Secrétariat de direction",
          ],
        },
      ],
      licence: [
        {
          name: "Sciences juridiques",
          specialties: ["Droit des affaires", "Professions judiciaires"],
        },
        {
          name: "Sciences administrative",
          specialties: ["Assistance juridique et administrative"],
        },
      ],
      master: [
        {
          name: "Sciences juridiques",
          specialties: [
            "Droit, sécurité informatique et cybercriminalité",
            "Droit du contentieux et arbitrage",
            "Droit de l’entreprise",
            "Droit fiscal appliqué",
            "Droit des affaires et fiscalité",
            "Droit rural et immobilier",
            "Droit des relations du travail et de la protection sociale",
            "Droit et gestion des ressources humaines",
            "Droit, justice, procès et procédure",
            "Droit, logistique et transports",
            "Droit, mer et littoral",
            "Droit et finance",
            "Droit pénal et sciences criminelles",
            "Droit pénal et carrières judiciaires",
            "Droit pénal économique et de la conformité",
            "Droit, management et contrôle des risques",
            "Droit, management et protection des données",
            "Droit, management et stratégie d’entreprise",
            "Droit et régulation des marchés",
            "Droit, systèmes financiers et bancaires",
            "Droit financier international",
            "Droit des assurances et de la responsabilité",
            "Droit, philosophie et société",
            "Droit, psychologie et santé",
            "Droit et économie de la mer",
            "Droit, transition énergétique et développement durable",
            "Droit, évaluation et expertise environnementales",
            "Droit, stratégies et politiques industrielles",
            "Droit humanitaire, libertés et droits fondamentaux",
          ],
        },
        {
          name: "Sciences politiques",
          specialties: [
            "Droit, diplomatie et gouvernance publique",
            "Droit, évaluation et gestion des politiques publiques",
            "Droit, politique et gestion de la santé",
            "Droit, sécurité publique et gestion des crises",
            "Gouvernance, relations internationales et diplomatie",
          ],
        },
      ],
    },
  },
  {
    id: "homme-societe",
    name: "Sciences de l'Homme et de la Société",
    intro: "",
    admission: {
      bts: "Baccalauréat toutes séries",
      licence: "Baccalauréat toutes séries",
      master: "Licence en sciences de l’homme et de la societe",
    },
    cycles: {
      bts: [
        {
          name: "Sciences de l’information et de la communication",
          specialties: [
            "Journalisme : presse écrite",
            "Journalisme : radiodiffusion",
            "Journalisme : télévision",
            "Journalisme : reporter d’image",
            "Communication des organisations",
            "Archives",
            "Bibliothèque",
            "Documentation",
          ],
        },
        {
          name: "Sciences du cinéma et de la communication audiovisuelle",
          specialties: [
            "Direction de production",
            "Scénarisation",
            "Réalisation",
            "Prise de vue",
            "Prise de son",
            "Montage",
            "Métier d’acteur",
            "Administrateur de plateau",
          ],
        },
        {
          name: "Sciences des loisirs, de la communication et valorisation des territoires",
          specialties: [
            "Tourisme et loisirs",
            "Hôtellerie : hébergement",
            "Hôtellerie : restauration",
          ],
        },
      ],
      licence: [
        {
          name: "Sciences de l’information et de la communication",
          specialties: [
            "Publicité, graphisme et arts",
            "Bachelor Communication numérique dans les organisations",
            "Bachelor Marketing digital",
            "Bachelor Management de l’évènementiel",
            "Bachelor Community Management",
            "Bachelor Influence, Communication & Réseaux Sociaux",
          ],
        },
        {
          name: "Sciences du cinéma et de la communication audiovisuelle",
          specialties: [
            "Bachelor Production, diffusion et distribution",
            "Bachelor Scénario et réalisation",
            "Bachelor Son et image",
          ],
        },
        {
          name: "Sciences des loisirs, de la communication et valorisation des territoires",
          specialties: [
            "Métiers du tourisme et des loisirs",
            "Tourisme, hôtellerie, alimentation",
            "Chef de projet touristique",
            "Patrimoine, langues et tourismes",
            "Hébergements et environnement touristiques",
            "Management d’unité touristique",
            "Management d’unité de pâtisserie et de la restauration collective",
          ],
        },
      ],
      master: [
        {
          name: "Sciences de l’information et de la communication",
          specialties: [
            "Journalisme et communication de masse",
            "Journalisme, Médias et Mondialisation",
            "Communication des organisations et vie politique",
            "Marketing, Design et Création",
            "Création & Stratégies Publicitaires",
            "Création, Design et Management",
            "Multimédia, Photographie et Design",
            "Communication Corporate et Institutionnelle",
            "Communication corporate, Politique et Numérique",
            "Communication et Marketing",
            "Communication digitale & Social Media",
            "Évènementiel et Relations publiques",
            "Management et ingénierie des événements",
            "Stratégie de Communication et Événementiel",
            "Community management",
            "Influence, Communication & Réseaux Sociaux",
          ],
        },
        {
          name: "Sciences du cinéma et de la communication audiovisuelle",
          specialties: [
            "Production, diffusion et distribution",
            "Scénario et réalisation",
            "Son et image",
            "Cinéma et audiovisuel",
          ],
        },
        {
          name: "Sciences des loisirs, de la communication et valorisation des territoires",
          specialties: [
            "Management des métiers du tourisme et des loisirs",
            "Management et stratégies en hôtellerie et tourisme",
            "Ingénierie hôtellière et de la restauration",
            "Management d’unité de pâtisserie et de la restauration collective",
          ],
        },
      ],
    },
  },
  {
    id: "agronomie",
    name: "Sciences Agronomiques",
    intro:
      "La formation de Licence ou de Master offerte en Sciences agronomiques à HEST fait de l’étudiant un futur agronome prêt pour le marche de l’emploi et a l’entrepreneuriat",
    admission: {
      bts: "Baccalauréat toutes séries",
      licence: "Baccalauréat toutes séries",
      master: "Licence LMD ou Maîtrise en Sciences agronomiques",
    },
    cycles: {
      bts: [
        {
          name: "Agroéconomie",
          specialties: [
            "Production animale",
            "Production végétale",
            "Industrie agro-alimentaire",
          ],
        },
      ],
      licence: [
        {
          name: "Agroéconomie",
          specialties: ["Agrobusiness"],
        },
      ],
      master: [
        {
          name: "Agroéconomie",
          specialties: ["Management du développement d’affaires en agrobusiness"],
        },
      ],
    },
  },
  {
    id: "lettres",
    name: "Lettres, Langues et Arts",
    intro: "",
    admission: {
      master:
        "Licence en sciences de l’information et de la communication, Licence en Sciences humaines et/ou sociales",
    },
    cycles: {
      bts: null,
      licence: [
        {
          name: "Traduction – Interprétation",
          specialties: [
            "Anglais-Français / Français-Anglais",
            "Allemand-Français / Français-Allemand",
            "Espagnol-Français / Français-Espagnol",
            "Portugais-Français / Français-Portugais",
            "Chinois-Français / Français-Chinois",
            "Traduction et interprétation judiciaires et de service public",
            "Préparation aux métiers de la communication entre sourds et entendants",
          ],
        },
      ],
      master: [
        {
          name: "Industrie de la langue, Interprétariat & traduction spécialisée",
          specialties: [
            "Métiers du lexique et de la traduction",
            "Traduction spécialisée multilingue",
            "Interprétation de conférence",
            "Traduction commerciale et juridique",
            "Traduction et adaptation cinématographique",
            "Traduction juridique, économique et technique",
            "Commerce international trilingue",
            "Traduction éditoriale, économique et technique",
            "Interprétation et traduction multilingue-langues des signes, LDS-multilingue",
          ],
        },
      ],
    },
  },
];

export function specialtyCount(mentions: Mention[] | null): number {
  if (!mentions) return 0;
  return mentions.reduce((n, m) => n + m.specialties.length, 0);
}

export function domainSpecialtyCount(domain: Domain): number {
  return (["bts", "licence", "master"] as CycleId[]).reduce(
    (n, cycle) => n + specialtyCount(domain.cycles[cycle]),
    0,
  );
}
