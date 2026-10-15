import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { domainSpecialtyCount, type Domain } from "@/data/formations";
import { domainVisuals } from "@/data/visuels";

export default function DomainCard({
  domain,
  featured = false,
}: {
  domain: Domain;
  featured?: boolean;
}) {
  const visual = domainVisuals[domain.id];
  const count = domainSpecialtyCount(domain);

  return (
    <Link
      href={`/formations#${domain.id}`}
      className={`group relative block min-h-[22rem] overflow-hidden ${
        featured ? "md:min-h-[28rem] md:col-span-2" : ""
      }`}
    >
      {visual ? (
        <Image
          src={visual.image}
          alt={visual.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <span className="mb-3 block h-0.5 w-10 bg-accent" />
        <h3 className="font-serif text-2xl text-white md:text-3xl">{domain.name}</h3>
        <p className="mt-2 max-w-md text-sm text-white/80">
          {visual?.teaser} {count} spécialités.
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Découvrir
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
