import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  Download,
  Globe2,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { bourses } from "@/data/bourses";

export const metadata: Metadata = {
  title: "Bourses & Études en France",
  description:
    "Conventions de bourses d'études HEST, partenariats internationaux avec FIGS Éducation en France et réductions de scolarité pour la rentrée 2026-2027.",
};

export default function BoursesPage() {
  return (
    <>
      <PageHero
        title={bourses.title}
        breadcrumb="Accueil / Bourses"
      />

      {/* SECTION 1: BOURSES HEST RENTRÉE 2026-2027 */}
      <section className="section bg-gradient-to-b from-base-100 via-base-200/40 to-base-100">
        <div className="wrap">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              <Sparkles className="size-3.5" />
              Offre Spéciale Rentrée 2026-2027
            </span>
            <h2 className="mt-4 font-serif text-3xl text-secondary md:text-4xl">
              {bourses.localScholarshipsTitle}
            </h2>
            <p className="mt-3 text-base text-neutral/80 md:text-lg">
              {bourses.localScholarshipsIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bourses.localScholarships.map((item) => (
              <div
                key={item.badge}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  item.highlight
                    ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                    : "border-base-300 bg-base-100 shadow-sm"
                }`}
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      item.highlight
                        ? "bg-accent text-secondary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {item.badge}
                  </span>
                  <h3
                    className={`mt-4 font-serif text-xl ${
                      item.highlight ? "text-white" : "text-secondary"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs font-semibold uppercase tracking-wider ${
                      item.highlight ? "text-accent" : "text-primary"
                    }`}
                  >
                    {item.target}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      item.highlight ? "text-white/85" : "text-neutral/75"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-current/15">
                  <span className="flex items-center gap-1.5 text-xs font-medium">
                    <CheckCircle2 className="size-4 shrink-0" />
                    Offre non-cumulable
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-md hover:bg-primary/90 transition-all"
            >
              Postuler à une bourse
            </Link>
            <a
              href="/Admission et inscription 2026-2027.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-base-300 bg-base-100 px-6 py-3 text-sm font-semibold text-secondary hover:bg-base-200 transition-all"
            >
              <Download className="size-4 text-primary" />
              Conditions d&apos;attribution (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: PARTENARIAT FIGS EDUCATION (FRANCE) */}
      <section className="section border-t border-base-300 bg-base-100">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Globe2 className="size-3.5" />
                {bourses.kicker}
              </span>
              <h2 className="mt-3 font-serif text-3xl text-secondary md:text-4xl">
                {bourses.subtitle}
              </h2>
              <p className="mt-2 text-lg font-medium text-primary">
                {bourses.partner.objective}
              </p>
              <p className="mt-4 leading-relaxed text-neutral/80">
                {bourses.partner.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {bourses.partner.axes.map((axe) => (
                  <div
                    key={axe.title}
                    className="rounded-xl border border-base-300 bg-base-200/40 p-4 transition-all hover:bg-base-200/80"
                  >
                    <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-secondary">
                      <GraduationCap className="size-4 shrink-0 text-primary" />
                      {axe.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral/75">
                      {axe.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-[#180927] to-[#301248] p-8 text-white shadow-xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      Partenaire Officiel
                    </p>
                    <h3 className="font-serif text-2xl font-bold">
                      {bourses.partner.name}
                    </h3>
                  </div>
                  <Award className="size-8 text-accent" />
                </div>
                <p className="mt-4 text-xs text-white/80">
                  {bourses.partner.tagline}. Poursuivez vos études dans les plus grandes métropoles universitaires françaises avec validation de vos crédits HEST.
                </p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Grandes Écoles partenaires du réseau :
                  </p>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {bourses.partner.partnerSchools.map((sch) => (
                      <div
                        key={sch.name}
                        className="rounded-lg bg-white/10 p-3 backdrop-blur-sm"
                      >
                        <p className="text-sm font-bold text-white">{sch.name}</p>
                        <p className="text-[11px] text-white/70">{sch.domain}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 13 CAMPUS EN FRANCE */}
          <div className="mt-16 rounded-3xl border border-base-300 bg-base-200/50 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Implantation Territoriale
                </span>
                <h3 className="font-serif text-2xl text-secondary">
                  13 Campus universitaires en France
                </h3>
                <p className="mt-1 text-sm text-neutral/70">
                  Une présence nationale dans les plus grands pôles économiques et d&apos;innovation français.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start md:self-auto rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                <Building2 className="size-3.5" />
                13 Métropoles
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {bourses.campuses.map((item) => (
                <div
                  key={item.city}
                  className="group flex flex-col items-center justify-center rounded-xl border border-base-300 bg-base-100 p-3 text-center shadow-xs transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <MapPin className="size-4 text-primary transition-transform group-hover:scale-110" />
                  <p className="mt-1.5 text-sm font-bold text-secondary">{item.city}</p>
                  <p className="text-[10px] text-neutral/60">{item.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCÉDURE D'ADMISSION EN 4 ÉTAPES */}
      <section className="section bg-base-200/60">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Marche à Suivre
            </span>
            <h2 className="mt-2 font-serif text-3xl text-secondary md:text-4xl">
              Procédure d&apos;admission & Accompagnement
            </h2>
            <p className="mt-3 text-sm text-neutral/75 md:text-base">
              L&apos;équipe académique de la HEST vous accompagne à chaque étape de votre mobilité internationale.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bourses.procedureSteps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm"
              >
                <span className="font-serif text-3xl font-extrabold text-primary/30">
                  {step.step}
                </span>
                <h3 className="mt-2 font-serif text-lg font-bold text-secondary">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-primary/20 bg-primary p-8 text-center text-white shadow-lg md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-bold">
                Prêt à bâtir votre parcours international ?
              </h3>
              <p className="mt-1 max-w-xl text-sm text-white/80">
                Contactez notre cellule d&apos;orientation ou inscrivez-vous pour bénéficier des bourses disponibles pour la rentrée 2026-2027.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary shadow-md hover:brightness-105 transition-all"
              >
                S&apos;inscrire en ligne
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
