"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Database,
  Filter,
  Newspaper,
  Search,
  User,
  X,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import { initialPublications, Publication } from "@/data/publications";

const categories = [
  "Toutes",
  "Bourses & Concours",
  "Vie Académique",
  "Partenariats",
  "Recherche & Innovation",
] as const;

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Toutes");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Publication | null>(null);

  const filteredPublications = initialPublications.filter((pub) => {
    const matchesCategory =
      selectedCategory === "Toutes" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Publications & Actualités"
        breadcrumb="Accueil / Publications"
      />

      {/* MODAL ARTICLE COMPLET */}
      {activeArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-base-100 p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-base-200 text-secondary hover:bg-base-300 transition-colors"
              aria-label="Fermer"
            >
              <X className="size-5" />
            </button>

            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              {activeArticle.category}
            </span>

            <h3 className="mt-4 font-serif text-2xl font-bold text-secondary md:text-3xl">
              {activeArticle.title}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-neutral/70 border-b border-base-200 pb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-primary" />
                {activeArticle.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary" />
                {activeArticle.readTime} de lecture
              </span>
              <span className="flex items-center gap-1.5">
                <User className="size-3.5 text-primary" />
                {activeArticle.author}
              </span>
            </div>

            <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 text-sm leading-relaxed text-neutral/85 space-y-4">
              <p className="font-semibold text-secondary text-base">
                {activeArticle.excerpt}
              </p>
              <p>{activeArticle.content}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-base-200">
              {activeArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-base-200 px-3 py-1 text-xs text-neutral/70 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION PRINCIPALE */}
      <section className="section bg-base-100">
        <div className="wrap">
          {/* Entête avec filtres et recherche */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-base-300 pb-8">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Newspaper className="size-3.5" />
                Actualités & Recherches HEST
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-secondary md:text-4xl">
                Publications officielles
              </h2>
              <p className="mt-1 text-sm text-neutral/70">
                Suivez la vie académique, les appels à candidature et les innovations de notre établissement.
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral/40" />
              <input
                type="text"
                placeholder="Rechercher un article…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-sm w-full rounded-full border-base-300 bg-base-200/50 pl-10 text-xs focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          {/* Onglets Catégories */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Filter className="size-4 text-neutral/50 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-secondary text-white shadow-sm"
                    : "border border-base-300 bg-base-100 text-neutral/70 hover:bg-base-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille des publications */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPublications.map((pub) => (
              <article
                key={pub.id}
                onClick={() => setActiveArticle(pub)}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xs transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-base-200">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-secondary shadow-sm backdrop-blur-xs">
                        {pub.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-neutral/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3 text-primary" />
                        {pub.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3 text-primary" />
                        {pub.readTime}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral/70 line-clamp-3">
                      {pub.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between border-t border-base-200 pt-4 text-xs">
                    <span className="font-semibold text-primary">Lire l&apos;article →</span>
                    <span className="text-neutral/50 font-medium">{pub.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-base-300 p-12 text-center">
              <p className="text-sm text-neutral/60">
                Aucune publication ne correspond à votre recherche.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Toutes");
                  setSearchQuery("");
                }}
                className="mt-3 text-xs font-bold text-primary hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* BANDEAU INFORMATIF : PRÊT POUR LA BASE DE DONNÉES */}
          <div className="mt-16 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-xs text-neutral/75 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Database className="size-4" />
              </div>
              <div>
                <p className="font-bold text-secondary">
                  Module Publications prêt pour connexion Base de Données
                </p>
                <p className="mt-0.5 text-neutral/60">
                  Structure de données typée dans <code className="font-mono text-primary">data/publications.ts</code> prête à être raccordée à votre API ou base de données.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-base-100 px-4 py-2 font-semibold text-secondary border border-base-300 hover:bg-base-200 transition-all shrink-0"
            >
              Proposer un article
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
