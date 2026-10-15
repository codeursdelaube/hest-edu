import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

export default function TopBar() {
  return (
    <div className="bg-secondary text-secondary-content text-sm">
      <div className="wrap flex flex-col gap-2 py-2.5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={`tel:${contact.phones[0].tel}`}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden />
            <span>
              {contact.phones[0].display} | {contact.phones[1].display.replace("+228 ", "")}
            </span>
          </a>
          <a
            href={`mailto:${contact.emails.general}`}
            className="inline-flex items-center gap-1.5 hover:text-accent"
          >
            <Mail className="size-3.5 shrink-0" aria-hidden />
            {contact.emails.general}
          </a>
        </div>
        <p className="inline-flex items-center gap-1.5 opacity-90">
          <MapPin className="size-3.5 shrink-0" aria-hidden />
          {contact.cityShort}
        </p>
      </div>
    </div>
  );
}
