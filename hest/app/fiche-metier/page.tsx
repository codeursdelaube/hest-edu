"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Eye,
  FileText,
  Maximize2,
  X,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const fichesImages = [
  {
    id: 1,
    title: "Fiche Métiers — Volet 1 : Pôles Numérique, Gestion & Management",
    src: "/fiches-metiers-1.jpg",
    alt: "Fiches métiers HEST - Volet 1",
    subtitle: "Débouchés professionnels en Informatique, Gestion des Entreprises et Commerce",
  },
  {
    id: 2,
    title: "Fiche Métiers — Volet 2 : Pôles Sciences, Ingénierie & BTP",
    src: "/fiches-metiers-2.jpg",
    alt: "Fiches métiers HEST - Volet 2",
    subtitle: "Débouchés professionnels en Bâtiment, Génie Civil, Réseaux et Télécoms",
  },
];

const domainCareers = [
  {
    title: "Sciences & Technologies de l'Information",
    icon: "💻",
    careers: [
      "Administrateur Systèmes, Réseaux & Cloud",
      "Développeur Web & Ingénieur Logiciel",
      "Spécialiste Cybersécurité & Audit SI",
      "Analyste Big Data & Intelligence Artificielle",
      "Chef de Projet Digital & Transformation Numérique",
    ],
  },
  {
    title: "Génie Civil & Sciences de l'Ingénieur",
    icon: "🏗️",
    careers: [
      "Conducteur et Chef de Travaux BTP",
      "Technicien Supérieur Dessinateur-Projeteur",
      "Ingénieur Suivi de Chantiers & Infrastructures",
      "Expert en Énergies Renouvelables & Électrotechnique",
      "Chargé d'Études Techniques et Topographiques",
    ],
  },
  {
    title: "Sciences Économiques & de Gestion",
    icon: "📈",
    careers: [
      "Responsable Administratif & Financier (RAF)",
      "Comptable Agréé & Auditeur Interne / Externe",
      "Contrôleur de Gestion & Gestionnaire de Trésorerie",
      "Analyste Financier & Conseiller en Banque / Microfinance",
      "Gestionnaire des Marchés Publics & Privés",
    ],
  },
  {
    title: "Commerce, Marketing & Communication",
    icon: "🚀",
    careers: [
      "Responsable Marketing Stratégique & Digital",
      "Directeur Commercial & Gestionnaire Grands Comptes",
      "Responsable Transit, Logistique & Commerce International",
      "Chargé de Communication Institutionnelle & RP",
      "Community Manager & Créateur de Contenu de Marque",
    ],
  },
];

export default function FicheMetierPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <>
      <PageHero
        title="Fiches Métiers & Débouchés"
        breadcrumb="Accueil / Fiches Métiers"
      />

      {/* MODAL LIGHTBOX POUR VOIR LES FICHES EN PLEIN ÉCRAN */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[95vh] max-w-5xl overflow-auto rounded-xl bg-white/5 p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-black/70 text-white hover:bg-black"
              aria-label="Fermer"
            >
              <X className="size-6" />
            </button>
            <div className="relative max-h-[88vh] overflow-auto">
              <Image
                src={selectedImage}
                alt="Aperçu fiche métier"
                width={1200}
                height={1700}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* SECTION PRÉSENTATION & DOCUMENTS TÉLÉCHARGEABLES */}
      <section className="section bg-base-100">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-base-300 pb-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Briefcase className="size-3.5" />
                Orientation & Insertion Professionnelle
              </span>
              <h2 className="mt-3 font-serif text-3xl text-secondary md:text-4xl">
                Nos fiches métiers et débouchés
              </h2>
              <p className="mt-3 text-base text-neutral/80">
                Consultez les fiches détaillées issues du livret officiel de la HEST. Chaque filière est pensée pour garantir une adéquation parfaite entre le contenu pédagogique et les exigences des recruteurs au Togo et à l&apos;international.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/HEST.pdf"
                download="HEST-Fiches-Metiers.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-primary/90 transition-all"
              >
                <Download className="size-4" />
                Catalogue HEST (PDF)
              </a>
              <a
                href="/Admission et inscription 2026-2027.pdf"
                download="Admission-HEST-2026-2027.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 px-5 py-2.5 text-xs font-semibold text-secondary hover:bg-base-200 transition-all"
              >
                <FileText className="size-4 text-primary" />
                Dossier Inscription (PDF)
              </a>
            </div>
          </div>

          {/* SÉLECTEUR DE VOLET / VISUALISATEUR HAUTE DÉFINITION */}
          <div className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {fichesImages.map((fiche) => (
                <button
                  key={fiche.id}
                  onClick={() => setActiveTab(fiche.id)}
                  className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === fiche.id
                      ? "bg-secondary text-white shadow-md"
                      : "border border-base-300 bg-base-100 text-neutral/70 hover:bg-base-200"
                  }`}
                >
                  Volet {fiche.id}
                </button>
              ))}
            </div>

            {/* AFFICHEUR DU VOLET ACTIF */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              {fichesImages
                .filter((f) => f.id === activeTab)
                .map((fiche) => (
                  <div key={fiche.id} className="lg:col-span-12">
                    <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-200/50 p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-base-300/80 pb-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-secondary">
                            {fiche.title}
                          </h3>
                          <p className="text-xs text-neutral/70">{fiche.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedImage(fiche.src)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-xs font-semibold text-secondary hover:bg-base-200 shadow-xs transition-all"
                          >
                            <Maximize2 className="size-3.5 text-primary" />
                            Agrandir / Plein écran
                          </button>
                          <a
                            href={fiche.src}
                            download={`HEST-Fiche-Metier-${fiche.id}.jpg`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary/90 transition-all"
                          >
                            <Download className="size-3.5" />
                            Télécharger
                          </a>
                        </div>
                      </div>

                      {/* Image Viewer Card */}
                      <div
                        onClick={() => setSelectedImage(fiche.src)}
                        className="group relative mt-6 cursor-pointer overflow-hidden rounded-2xl border border-base-300 bg-white shadow-md transition-all hover:shadow-xl"
                      >
                        <Image
                          src={fiche.src}
                          alt={fiche.alt}
                          width={1400}
                          height={1980}
                          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                          priority
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-secondary shadow-lg">
                            <Eye className="size-4 text-primary" />
                            Cliquer pour afficher en grand
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* VUE COMPARATIVE DES GRANDS DÉBOUCHÉS PAR DOMAINE */}
          <div className="mt-20">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Panorama des Carrières
              </span>
              <h3 className="mt-2 font-serif text-2xl text-secondary md:text-3xl">
                À quels métiers prépare la HEST ?
              </h3>
              <p className="mt-2 text-sm text-neutral/70">
                Une sélection des postes occupés par nos diplômés en entreprise et institutions.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {domainCareers.map((domain) => (
                <div
                  key={domain.title}
                  className="rounded-2xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <span className="text-3xl">{domain.icon}</span>
                  <h4 className="mt-3 font-serif text-lg font-bold text-secondary">
                    {domain.title}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {domain.careers.map((career) => (
                      <li
                        key={career}
                        className="flex items-start gap-2 text-xs leading-relaxed text-neutral/80"
                      >
                        <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA INSCRIPTION */}
          <div className="mt-16 rounded-3xl border border-primary/20 bg-gradient-to-r from-[#180927] to-[#301248] p-8 text-white text-center md:flex md:items-center md:justify-between md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Votre avenir commence ici
              </span>
              <h3 className="mt-1 font-serif text-2xl font-bold">
                Besoin d&apos;un conseil d&apos;orientation personnalisé ?
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Nos conseillers pédagogiques vous reçoivent sur le campus ou par WhatsApp pour analyser votre dossier.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:mt-0">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-secondary shadow-md hover:brightness-105 transition-all"
              >
                S&apos;inscrire à une formation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white hover:bg-white/20 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
