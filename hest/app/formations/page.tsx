import type { Metadata } from "next";
import { Suspense } from "react";
import FormationsExplorer from "@/components/FormationsExplorer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Parcours BTS, Licence et Master à la HEST : six domaines, mentions et spécialités.",
};

export default function FormationsPage() {
  return (
    <>
      <PageHero title="Formations" breadcrumb="Accueil / Formations" />
      <section className="section">
        <div className="wrap">
          <p className="max-w-2xl text-neutral/75">
            Parcours, domaines et spécialisations. Choisissez un cycle, puis
            ouvrez les mentions pour consulter les spécialités.
          </p>
          <div className="mt-10">
            <Suspense fallback={<p>Chargement des formations…</p>}>
              <FormationsExplorer />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
