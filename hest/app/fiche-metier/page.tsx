import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fiche métier",
  description: "Galerie des fiches métiers HEST.",
};

export default function FicheMetierPage() {
  return (
    <>
      <PageHero title="Fiches métiers" breadcrumb="Accueil / Fiche métier" />
      <section className="section">
        <div className="wrap">
          <p className="max-w-2xl text-neutral/75">
            Le site actuel présente uniquement des visuels, sans texte
            descriptif des métiers. Les fiches seront affichées ici dès
            réception des fichiers.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <figure
                key={n}
                className="flex aspect-[3/4] items-center justify-center border border-dashed border-base-300 bg-base-200 p-6 text-center"
              >
                {/* TODO: image à fournir */}
                <figcaption className="text-sm text-neutral/60">
                  Fiche métier {n}
                  <br />
                  Image à fournir par Eric
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
