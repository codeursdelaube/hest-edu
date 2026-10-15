import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import { bourses } from "@/data/bourses";

export const metadata: Metadata = {
  title: "Bourses",
  description:
    "Conventions de bourses HEST, partenariat FIGS Education et campus partenaires en France.",
};

export default function BoursesPage() {
  return (
    <>
      <PageHero title={bourses.title} breadcrumb="Accueil / Bourses" />
      <section className="section">
        <div className="wrap">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {bourses.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-secondary">{bourses.subtitle}</h2>
          <p className="mt-6 max-w-2xl text-lg text-neutral/80">
            Partenariat {bourses.partner.name}. {bourses.partner.objective}.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {bourses.partner.axes.map((axe) => (
              <article key={axe.title} className="border border-base-300 p-6">
                <h3 className="font-serif text-2xl text-secondary">{axe.title}</h3>
                <p className="mt-3 text-neutral/75">{axe.text}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-14 font-serif text-2xl text-secondary">Nos campus</h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {bourses.campuses.map((city) => (
              <li
                key={city}
                className="border border-base-300 bg-base-200 px-4 py-2 text-sm"
              >
                {city}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CTAButton href="/inscription">{bourses.procedureCta}</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
