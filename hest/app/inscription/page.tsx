import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  Award,
  CheckCircle2,
  Download,
  FileCheck,
  GraduationCap,
  Home,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import {
  licencePieces,
  masterPieces,
  residenceText,
  scholarshipOffers,
  tuitionCycles,
  vaeText,
} from "@/data/inscription";
import { contact, inscriptionOnlineUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Inscription & Frais de Scolarité 2026-2027",
  description:
    "Conditions d'admission, grille des tarifs par cycle (BTS, Licence, Master), bourses d'études et pièces à fournir à la HEST Lomé.",
};

export default function InscriptionPage() {
  const ctaHref =
    inscriptionOnlineUrl ||
    `mailto:${contact.emails.admission}?subject=Candidature%20HEST%202026-2027`;

  return (
    <>
      <PageHero
        title="Admission & Inscription"
        breadcrumb="Accueil / Inscription"
      />

      {/* BANNIÈRE BOURSES 2026-2027 */}
      <section className="bg-gradient-to-r from-primary via-[#551d6c] to-[#180927] py-10 text-white">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary">
                <Sparkles className="size-3.5" />
                Rentrée Académique 2026-2027
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold md:text-3xl">
                Bourses & Réductions Exceptionnelles
              </h2>
              <p className="mt-1 text-sm text-white/80">
                Plusieurs formules de bourses non-cumulables sont ouvertes aux nouveaux inscrits.
              </p>
            </div>
            <a
              href="/Admission et inscription 2026-2027.pdf"
              download="Admission-HEST-2026-2027.pdf"
              className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary shadow-md hover:bg-accent transition-all"
            >
              <Download className="size-4 text-primary" />
              Télécharger le guide officiel (PDF)
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scholarshipOffers.map((offer) => (
              <div
                key={offer.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              >
                <span className="rounded-md bg-accent/20 px-2.5 py-1 text-xs font-extrabold text-accent">
                  {offer.label}
                </span>
                <p className="mt-3 text-xs font-medium leading-relaxed text-white/90">
                  {offer.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: GRILLE TARIFAIRE ET ÉCHÉANCIER */}
      <section className="section bg-base-100">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Transparence Budgétaire
            </span>
            <h2 className="mt-2 font-serif text-3xl text-secondary md:text-4xl">
              Coût de la formation par année
            </h2>
            <p className="mt-3 text-sm text-neutral/75 md:text-base">
              Tarifs officiels et échéancier des versements échelonnés pour l&apos;année académique 2026-2027.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {tuitionCycles.map((c) => (
              <div
                key={c.cycle}
                className="flex flex-col justify-between rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="border-b border-base-200 pb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Cycle de formation
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-secondary">
                      {c.cycle}
                    </h3>
                    <p className="mt-3 font-serif text-3xl font-extrabold text-primary">
                      {c.scolarite}
                    </p>
                  </div>

                  <div className="mt-5 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-base-200">
                      <span className="text-neutral/70">Frais d&apos;inscription :</span>
                      <span className="font-semibold text-secondary">{c.inscription}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-base-200">
                      <span className="text-neutral/70">Tenues officielles :</span>
                      <span className="font-semibold text-secondary">{c.tenues}</span>
                    </div>
                  </div>

                  {c.tenues !== "—" && (
                    <p className="mt-2 text-[11px] text-neutral/60 italic">
                      * Tenues incluses : 1 costume 4 pièces + 1 cravate ou 1 foulard + 2 t-shirts officiels.
                    </p>
                  )}

                  {/* Tranches de paiement */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      Échéancier des tranches :
                    </p>
                    <ul className="mt-3 space-y-2">
                      {c.tranches.map((t, idx) => (
                        <li
                          key={idx}
                          className="flex items-start justify-between gap-2 rounded-lg bg-base-200/50 p-2.5 text-xs"
                        >
                          <span className="font-medium text-neutral/80">{t.label} :</span>
                          <span className="font-bold text-secondary text-right shrink-0">
                            {t.montant}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-base-200">
                  <a
                    href={`mailto:${contact.emails.admission}?subject=Candidature%20Cycle%20${encodeURIComponent(c.cycle)}`}
                    className="flex w-full items-center justify-center rounded-full bg-primary py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary/90 transition-all"
                  >
                    Postuler en {c.cycle.split(" ")[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-neutral/80 flex items-start gap-3">
            <AlertCircle className="size-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-secondary">
                Matériel informatique obligatoire :
              </p>
              <p className="mt-1">
                Chaque étudiant inscrit doit disposer d&apos;un ordinateur portable en bon état de fonctionnement (ou prévoir 300 000 FCFA pour un ordinateur portable neuf configuré à retirer dans l&apos;établissement).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PIÈCES DU DOSSIER DE CANDIDATURE */}
      <section className="section bg-base-200/50">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Constitution du Dossier
            </span>
            <h2 className="mt-2 font-serif text-3xl text-secondary md:text-4xl">
              Pièces à fournir pour l&apos;admission
            </h2>
            <p className="mt-3 text-sm text-neutral/75 md:text-base">
              Veuillez rassembler l&apos;ensemble des documents requis avant le dépôt physique au secrétariat ou par voie numérique.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* BTS & LICENCE */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-base-300 pb-5">
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    1er Cycle Universitaire
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-secondary">
                    BTS & Licence (Bac+2 / Bac+3)
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {licencePieces.map((piece, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral/80">
                    <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{piece}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MASTER */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-base-300 pb-5">
                <div className="grid size-12 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <Award className="size-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    2nd Cycle Universitaire
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-secondary">
                    Cycle Master (Bac+5)
                  </h3>
                </div>
              </div>

              <ul className="mt-6 space-y-3.5">
                {masterPieces.map((piece, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-neutral/80">
                    <CheckCircle2 className="size-4 shrink-0 text-secondary mt-0.5" />
                    <span>{piece}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VAE ET RÉSIDENCE UNIVERSITAIRE */}
      <section className="section bg-base-100">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {/* VAE */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              <FileCheck className="size-3.5" />
              Équivalences & Passerelles
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-secondary">
              Validation des acquis et études antérieures (VAE)
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral/80">
              {vaeText}
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
              >
                Contacter la commission pédagogique →
              </Link>
            </div>
          </div>

          {/* RÉSIDENCE UNIVERSITAIRE */}
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-base-100 to-base-200/50 p-8 shadow-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-secondary">
              <Home className="size-3.5 text-primary" />
              Logement Étudiant
            </span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-secondary">
              Résidence Universitaire HEST
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral/80">
              {residenceText}
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-serif text-3xl font-extrabold text-primary">
                35.000 FCFA
              </span>
              <span className="text-xs text-neutral/70 font-medium">
                / mois (eau + Wi-Fi illimité inclus)
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral/60">
              * Nombre de places limité. Réservation recommandée dès la confirmation d&apos;inscription.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: ACTIONS & FORMULAIRE */}
      <section className="section border-t border-base-300 bg-base-200/40">
        <div className="wrap">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-[#180927] p-8 md:p-12 text-center text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Démarrer Votre Inscription
            </span>
            <h3 className="mt-2 font-serif text-3xl font-bold md:text-4xl">
              Rejoignez la promotion 2026-2027
            </h3>
            <p className="mt-3 text-sm text-white/80 md:text-base">
              Nos équipes d&apos;admission sont à votre disposition pour vous orienter, vérifier votre dossier et finaliser votre inscription dans les meilleures conditions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-secondary shadow-lg hover:brightness-105 transition-all"
              >
                <Mail className="size-4 text-secondary" />
                Déposer mon dossier par e-mail
              </a>
              <a
                href={`https://wa.me/22891245050?text=${encodeURIComponent("Bonjour HEST, je souhaite avoir des informations sur les inscriptions 2026-2027.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <Phone className="size-4 text-accent" />
                WhatsApp Admission (+228 91 24 50 50)
              </a>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60">
              Adresse physique du campus : {contact.addressLine}, Lomé — Togo
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
