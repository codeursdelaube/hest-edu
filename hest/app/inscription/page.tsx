import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import {
  licencePieces,
  masterPieces,
  residenceText,
  vaeText,
} from "@/data/inscription";
import { contact, inscriptionOnlineUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Dossiers Licence et Master, VAE et résidence universitaire à la HEST.",
};

export default function InscriptionPage() {
  const ctaHref = inscriptionOnlineUrl || `mailto:${contact.emails.admission}`;

  return (
    <>
      <PageHero title="Inscription" breadcrumb="Accueil / Inscription" />
      <section className="section">
        <div className="wrap space-y-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="border border-base-300 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Licence
              </p>
              <h2 className="mt-2 font-serif text-3xl text-secondary">Pièces à fournir</h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                {licencePieces.map((item) => (
                  <li key={item} className="border-b border-base-200 pb-3 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="border border-base-300 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Master
              </p>
              <h2 className="mt-2 font-serif text-3xl text-secondary">
                Composition des dossiers
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed">
                {masterPieces.map((item) => (
                  <li key={item} className="border-b border-base-200 pb-3 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article>
            <h2 className="font-serif text-3xl text-secondary">
              Validation des études ou des acquis
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-neutral/80">{vaeText}</p>
          </article>

          <article>
            <h2 className="font-serif text-3xl text-secondary">Résidence universitaire</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-neutral/80">{residenceText}</p>
          </article>

          <div>
            <CTAButton href={ctaHref}>S&apos;inscrire en ligne</CTAButton>
            {!inscriptionOnlineUrl ? (
              <p className="mt-3 text-sm text-neutral/60">
                Lien du formulaire en ligne à fournir. En attendant, le bouton ouvre un
                e-mail vers {contact.emails.admission}.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
