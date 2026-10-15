"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import FormationAccordion from "@/components/FormationAccordion";
import {
  cycles,
  domains,
  type CycleId,
  type Mention,
} from "@/data/formations";
import { contact } from "@/data/site";
import { domainVisuals } from "@/data/visuels";

export default function FormationsExplorer() {
  const searchParams = useSearchParams();
  const [cycle, setCycle] = useState<CycleId>("licence");
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domains.flatMap((domain) => {
      const mentions = domain.cycles[cycle];
      if (!mentions) return [];
      if (!q) return [{ domain, mentions }];
      const domainHit = domain.name.toLowerCase().includes(q);
      const next = mentions
        .map((mention): Mention | null => {
          if (domainHit || mention.name.toLowerCase().includes(q)) return mention;
          const specialties = mention.specialties.filter((item) =>
            item.toLowerCase().includes(q),
          );
          return specialties.length ? { ...mention, specialties } : null;
        })
        .filter((item): item is Mention => item !== null);
      return next.length ? [{ domain, mentions: next }] : [];
    });
  }, [cycle, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 md:flex-row md:items-end md:justify-between">
        <div role="tablist" className="flex flex-wrap gap-2">
          {cycles.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={cycle === item.id}
              className={`rounded-sm px-4 py-2 text-sm font-semibold ${
                cycle === item.id
                  ? "bg-primary text-primary-content"
                  : "bg-base-200 text-secondary hover:bg-base-300"
              }`}
              onClick={() => setCycle(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <label className="w-full md:max-w-xs">
          <span className="sr-only">Filtrer</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filtrer un domaine ou une spécialité"
            className="input input-bordered w-full rounded-sm"
          />
        </label>
      </div>

      <div className="mt-10 space-y-14">
        {filtered.length === 0 ? (
          <p>Aucune formation ne correspond à cette recherche pour ce cycle.</p>
        ) : (
          filtered.map(({ domain, mentions }) => {
            const visual = domainVisuals[domain.id];
            return (
            <section key={domain.id} id={domain.id} className="scroll-mt-28">
              {visual ? (
                <div className="relative mb-6 h-48 overflow-hidden md:h-64">
                  <Image
                    src={visual.image}
                    alt={visual.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 80rem, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-secondary/10" />
                  <h2 className="absolute bottom-5 left-5 font-serif text-3xl text-white md:text-4xl">
                    {domain.name}
                  </h2>
                </div>
              ) : (
                <h2 className="font-serif text-3xl text-secondary">{domain.name}</h2>
              )}
              {visual?.teaser ? (
                <p className="text-sm font-medium text-primary">{visual.teaser}</p>
              ) : null}
              {domain.intro ? (
                <p className="mt-3 max-w-3xl text-neutral/80">{domain.intro}</p>
              ) : null}
              {domain.admission[cycle] ? (
                <p className="mt-3 text-sm">
                  <span className="font-semibold text-primary">Admission : </span>
                  {domain.admission[cycle]}
                </p>
              ) : null}
              <div className="mt-6">
                <FormationAccordion mentions={mentions} />
              </div>
            </section>
            );
          })
        )}
      </div>

      <p className="mt-12 text-sm text-neutral/70">
        Candidature :{" "}
        <a className="link link-primary" href={`mailto:${contact.emails.admission}`}>
          {contact.emails.admission}
        </a>
      </p>
    </div>
  );
}
