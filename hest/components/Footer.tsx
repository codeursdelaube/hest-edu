import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact, nav, site } from "@/data/site";

function SocialGlyph({
  kind,
  className,
}: {
  kind: (typeof contact.socials)[number]["kind"];
  className?: string;
}) {
  const paths = {
    linkedin:
      "M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7 1.5 1.5 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.9-.7-2.6-1.7-2.6-1.2 0-1.8.8-2.1 1.6-.1.3-.1.6-.1.9V20H11V9h2.4v1.5c.5-.8 1.6-1.9 3.4-1.9 2.3 0 3.2 1.5 3.2 4.4V20Z",
    instagram:
      "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.4-2.9a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z",
    facebook:
      "M13.5 20v-7h2.4l.4-2.6h-2.8V8.8c0-.8.2-1.3 1.4-1.3H16.5V5.1A19 19 0 0 0 14.2 5c-2.3 0-3.8 1.4-3.8 3.9v1.5H8v2.6h2.4V20h3.1Z",
    tiktok:
      "M14.5 3c.4 2.6 1.9 4.4 4.5 4.7v2.4c-1.5 0-2.9-.5-4.1-1.3v6.6c0 3.4-2.7 6.1-6.2 6.1S2.6 18.8 2.6 15.4c0-3.3 2.6-6 5.9-6.1v2.5c-1.9.1-3.4 1.7-3.4 3.6 0 2 1.6 3.6 3.6 3.6s3.6-1.6 3.6-3.6V3h2.2Z",
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d={paths[kind]} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-content">
      <div className="wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={site.logo}
            alt=""
            width={160}
            height={54}
            className="mb-4 h-12 w-auto rounded-sm bg-white p-1"
          />
          <p className="font-serif text-lg">{site.name}</p>
          <p className="mt-1 text-sm opacity-80">{site.legalName}</p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Navigation
          </p>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Contact
          </p>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {contact.addressLine}
                <br />
                {contact.postal}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                WhatsApp {contact.phones[0].display} /{" "}
                {contact.phones[1].display.replace("+228 ", "")}
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`mailto:${contact.emails.general}`} className="hover:text-accent">
                {contact.emails.general}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Réseaux
          </p>
          <div className="flex flex-wrap gap-2">
            {contact.socials.map((social) => {
              const href = social.href || "/contact";
              return (
                <a
                  key={social.label}
                  href={href}
                  className="grid size-10 place-items-center rounded-sm border border-white/15 hover:border-accent hover:text-accent"
                  aria-label={
                    social.href
                      ? social.label
                      : `${social.label} — lien à confirmer, voir Contact`
                  }
                  {...(social.href
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <SocialGlyph kind={social.kind} className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-4 text-center text-xs opacity-70" suppressHydrationWarning>
          © {new Date().getFullYear()} {site.name} — {site.legalName}. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
