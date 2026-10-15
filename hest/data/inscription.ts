export const licencePieces = [
  "1 Copie légalisée du diplôme ou de l’attestation de réussite au baccalauréat",
  "1 Copie légalisée du relevé de notes du baccalauréat",
  "1 Copie légalisée de chacun des bulletins de la classe de Terminale",
  "1 extrait de naissance",
  "1 certificat médical du groupe sanguin ou une copie de la carte nationale d’identité",
  "2 photos d’identité récentes du même tirage",
  "Le reçu du premier versement des frais de scolarité à la banque",
  "1 ordinateur portable en bon état de fonctionnement (ou 300 000 Fcfa contre un ordinateur neuf à retirer dans l’établissement)",
  "Frais d’inscription : 25 000 F (non remboursable)",
];

export const masterPieces = [
  "Copies légalisées des relevés de Licence (LMD) ou de Maîtrise (Système classique)",
  "1 copie légalisée de l’attestation ou du diplôme de Licence (LMD) ou de Maîtrise (Système classique) ou de tout diplôme équivalent",
  "1 copie non légalisée de la pièce d’identité (Carte Nationale d’Identité, Passeport)",
  "Un curriculum vitae",
  "1 lettre de motivation, précisant le master et adressée au Directeur de l’Académie, de la Pédagogie et de la Scolarité",
  "Frais d’étude de dossier et d’inscription : 50 000 F (non remboursable)",
  "2 photos d’identité récentes du même tirage",
  "1 ordinateur portable en bon état de fonctionnement (ou 300 000 Fcfa contre un ordinateur neuf à retirer dans l’établissement)",
];

export const vaeText =
  "Les études effectuées antérieurement, les expériences professionnelles et les acquis personnels peuvent être validés en vue de l’accès aux différents niveaux de formation en Licence et Master. La demande de validation doit être adressée au Directeur de l’Académie, de la Pédagogie et de la Scolarité.";

export const residenceText =
  "Des chambres individuelles ou doubles sont disponibles pour les étudiants qui désirent résider à proximité du campus. Le loyer mensuel est de 35 000 FCFA, eau et wifi compris.";

/** Bourses et réductions pour la rentrée 2026-2027 */
export const scholarshipOffers = [
  { label: "½ bourse", detail: "50 % des frais de scolarité offerts aux 10 premiers inscrits" },
  { label: "¼ de bourse", detail: "25 % des frais de scolarité offerts aux 10 inscrits suivants" },
  { label: "15 % de réduction", detail: "Accordés à tous les étudiants inscrits avant le 31 octobre 2026" },
  { label: "10 % nouveaux bacheliers", detail: "Réduction accordée à tous les nouveaux bacheliers inscrits" },
];

/** Grille tarifaire 2026-2027 */
export const tuitionCycles = [
  {
    cycle: "BTS (BAC + 2)",
    inscription: "25 000 FCFA",
    tenues: "60 000 FCFA",
    scolarite: "325 000 FCFA / an",
    tranches: [
      { label: "À l’admission", montant: "160 000 F (inscription + tenues + 1re tranche)" },
      { label: "5 décembre au plus tard", montant: "75 000 F" },
      { label: "5 février au plus tard", montant: "75 000 F" },
      { label: "5 mars au plus tard", montant: "50 000 F" },
      { label: "5 avril au plus tard", montant: "50 000 F (dernière tranche)" },
    ],
  },
  {
    cycle: "Licence (BAC + 3)",
    inscription: "25 000 FCFA",
    tenues: "60 000 FCFA",
    scolarite: "575 000 FCFA / an",
    tranches: [
      { label: "À l’admission", montant: "185 000 F (inscription + tenues + 1re tranche)" },
      { label: "5 décembre au plus tard", montant: "100 000 F" },
      { label: "5 février au plus tard", montant: "100 000 F" },
      { label: "5 mars au plus tard", montant: "100 000 F" },
      { label: "5 avril au plus tard", montant: "100 000 F" },
      { label: "5 mai au plus tard", montant: "75 000 F (dernière tranche)" },
    ],
  },
  {
    cycle: "Master (BAC + 5)",
    inscription: "50 000 FCFA",
    tenues: "—",
    scolarite: "950 000 FCFA / an",
    tranches: [
      { label: "À l’admission", montant: "250 000 F" },
      { label: "5 février au plus tard", montant: "150 000 F" },
      { label: "5 mars au plus tard", montant: "150 000 F" },
      { label: "5 avril au plus tard", montant: "150 000 F" },
      { label: "5 mai au plus tard", montant: "150 000 F" },
      { label: "5 juin au plus tard", montant: "150 000 F (dernière tranche)" },
    ],
  },
];

