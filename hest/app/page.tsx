import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import DomainCard from "@/components/DomainCard";
import Hero from "@/components/Hero";
import InstitutionalVideo from "@/components/InstitutionalVideo";
import NewsletterForm from "@/components/NewsletterForm";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ValueCard from "@/components/ValueCard";
import { domains } from "@/data/formations";
import {
  about,
  academicYear,
  publications,
  scholarshipBanner,
  site,
  stats,
} from "@/data/site";
import { valeurs } from "@/data/valeurs";
import { focusMetiers } from "@/data/visuels";

export default function Home() {
  const [featured, ...rest] = domains;

  const heroSubtitlePhrases = [
    site.subtitle,
    "Des diplômes d'excellence reconnus en BTS, Licence et Master.",
    "Des partenariats de prestige pour poursuivre vos études en France.",
    "Des bourses d'études jusqu'à 50% offertes pour la rentrée 2026-2027.",
    "Une insertion professionnelle rapide et assurée sur le marché de l'emploi.",
  ];

  return (
    <>
      <Hero
        kicker="École supérieure · Lomé"
        title={site.tagline}
        typewriterSubtitleWords={heroSubtitlePhrases}
        subtitle={site.subtitle}
        imageSrc="/Hero.jpg"
        imageAlt="Vidéo institutionnelle HEST"
        videoSrc="/hest-video.mp4"
        cta={{ href: "/inscription", label: "S'inscrire" }}
        secondaryCta={{ href: "/formations", label: "Voir les formations" }}
      />

      <div className="wrap relative z-10 -mt-14 md:-mt-20">
        <div className="grid bg-base-100 shadow-[0_24px_60px_rgba(42,52,68,0.14)] md:grid-cols-3">
          {valeurs.map((valeur, index) => (
            <ValueCard key={valeur.title} {...valeur} index={index} />
          ))}
        </div>
      </div>

      <p className="wrap mt-10 border-l-[3px] border-accent bg-base-200/80 px-6 py-4 text-sm tracking-wide text-secondary md:text-base">
        {scholarshipBanner.text}
      </p>

      <section className="section">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative">
              <Image
                src="/domaines/diplome.jpg"
                alt="Étudiante noire au travail sur son ordinateur"
                width={720}
                height={860}
                className="h-[28rem] w-full object-cover md:h-[34rem]"
              />
              <Image
                src="/soutenance.jpg"
                alt="Diplômée HEST présentant son mémoire"
                width={280}
                height={340}
                className="absolute -bottom-8 -right-4 hidden w-44 border-[6px] border-base-100 object-cover shadow-xl sm:block md:w-56"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              L’établissement
            </p>
            <h2 className="mt-3 font-serif text-4xl text-secondary md:text-5xl">
              {about.title}
            </h2>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-5 leading-relaxed text-neutral/80">
                {p}
              </p>
            ))}
            <ul className="mt-8 space-y-3">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="grid size-6 place-items-center bg-primary text-primary-content">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTAButton href="/formations">Explorer les parcours</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-base-300 bg-secondary text-secondary-content">
        <div className="wrap grid md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-white/10 md:border-r md:last:border-0">
              <StatCounter {...stat} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Six grands domaines
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl text-secondary md:text-5xl">
              Une offre pensée pour le marché
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured ? <DomainCard domain={featured} featured /> : null}
            {rest.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <h2 className="font-serif text-3xl text-secondary md:text-4xl">
            Informatique, électronique, droit…
          </h2>
          <p className="mt-3 max-w-2xl text-neutral/70">
            Un aperçu visuel des univers de formation, avec les visages de celles et
            ceux qui les incarnent.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusMetiers.map((item) => (
              <Link key={item.title} href={item.href} className="group relative block h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-secondary/45 transition-colors group-hover:bg-primary/50" />
                <p className="absolute inset-x-0 bottom-0 p-5 font-serif text-xl text-white">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-20 text-primary-content">
        <div className="wrap relative grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {academicYear.label}
            </p>
            <h2 className="mt-3 font-serif text-4xl">{academicYear.yearLabel}</h2>
            <p className="mt-4 max-w-xl text-primary-content/80">{academicYear.note}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {academicYear.entries.map((entry) => (
                <li key={entry.cycle} className="flex gap-3">
                  <span className="text-accent">—</span>
                  {entry.cycle} · {entry.date}
                </li>
              ))}
            </ul>
          </div>
          <CTAButton href="/inscription" variant="accent">
            Candidater
          </CTAButton>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Campus
              </p>
              <h2 className="mt-2 font-serif text-4xl text-secondary">Découvrir HEST</h2>
            </div>
          </div>
          <InstitutionalVideo
            className="aspect-video w-full bg-secondary object-cover"
            poster="/Hero.jpg"
            controls
          />
        </div>
      </section>

      <section className="bg-secondary py-16 text-secondary-content">
        <div className="wrap flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Rester informé</h2>
            <p className="mt-2 max-w-md text-white/70">
              Rentrée, bourses, journées portes ouvertes — un e-mail suffit.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="font-serif text-4xl text-secondary">À la une</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {publications.map((item, i) => (
              <article key={item.title} className="group overflow-hidden bg-base-200">
                <div className="relative h-56">
                  <Image
                    src={i === 0 ? "/domaines/woc4.jpg" : "/sous1.jpg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Actualité
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm text-neutral/75">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Lire <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
