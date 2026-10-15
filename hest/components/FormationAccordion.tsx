import { Mail } from "lucide-react";
import { contact } from "@/data/site";
import { specialtyCount, type Mention } from "@/data/formations";

export default function FormationAccordion({ mentions }: { mentions: Mention[] }) {
  return (
    <div className="space-y-3">
      {mentions.map((mention) => (
        <details
          key={mention.name}
          className="group border border-base-300 bg-base-100 open:border-primary/30"
        >
          <summary className="cursor-pointer list-none px-5 py-4 font-medium marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-4">
              <span className="font-serif text-lg text-secondary">{mention.name}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {`${specialtyCount([mention])} spécialité${specialtyCount([mention]) > 1 ? "s" : ""}`}
              </span>
            </span>
          </summary>
          <ul className="grid gap-2 border-t border-base-200 px-5 py-4 sm:grid-cols-2">
            {mention.specialties.map((item) => (
              <li key={item} className="text-sm text-neutral/80 before:mr-2 before:text-accent before:content-['–']">
                {item}
              </li>
            ))}
          </ul>
          <div className="border-t border-base-200 px-5 py-4">
            <a
              href={`mailto:${contact.emails.admission}`}
              className="btn btn-primary btn-sm rounded-sm"
            >
              <Mail className="size-4" aria-hidden />
              S&apos;inscrire
            </a>
          </div>
        </details>
      ))}
    </div>
  );
}
