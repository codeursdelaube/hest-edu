import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Adresse, téléphones, e-mails et formulaire de contact HEST à Lomé.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" breadcrumb="Accueil / Contact" />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-secondary">Nous écrire</h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 text-primary" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-neutral/60">
                    Téléphone / WhatsApp
                  </p>
                  <p>
                    <a href={`tel:${contact.phones[0].tel}`}>{contact.phones[0].display}</a>
                    <br />
                    <a href={`tel:${contact.phones[1].tel}`}>{contact.phones[1].display}</a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 text-primary" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-neutral/60">
                    Courriel
                  </p>
                  <p>
                    <a href={`mailto:${contact.emails.admission}`}>
                      {contact.emails.admission}
                    </a>
                    <br />
                    <a href={`mailto:${contact.emails.info}`}>{contact.emails.info}</a>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 text-primary" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-neutral/60">
                    Adresse
                  </p>
                  <p>
                    {contact.addressLine}
                    <br />
                    {contact.postal}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="border border-base-300 bg-base-100 p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
