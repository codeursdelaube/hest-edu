import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ContactFAQ from "@/components/ContactFAQ";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & FAQ",
  description:
    "Adresse, téléphones, WhatsApp, courriels, foire aux questions (FAQ) et formulaire de contact HEST à Lomé.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & FAQ"
        breadcrumb="Accueil / Contact"
      />

      {/* SECTION CONTACT ET FORMULAIRE */}
      <section className="section bg-base-100">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Colonne Coordonnées */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Restons en Contact
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-secondary md:text-4xl">
                Nous sommes à votre écoute
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral/75">
                Une question sur nos formations, les bourses 2026-2027 ou les démarches d&apos;inscription ? Passez au campus ou échangez directement avec notre équipe.
              </p>

              <div className="mt-8 space-y-6">
                {/* Téléphone / WhatsApp */}
                <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xs">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral/60">
                      Téléphone & WhatsApp
                    </p>
                    <div className="mt-1 space-y-1 text-sm font-semibold text-secondary">
                      <p>
                        <a href={`tel:${contact.phones[0].tel}`} className="hover:text-primary">
                          {contact.phones[0].display}
                        </a>
                      </p>
                      <p>
                        <a href={`tel:${contact.phones[1].tel}`} className="hover:text-primary">
                          {contact.phones[1].display}
                        </a>
                      </p>
                      <p>
                        <a href={`tel:${contact.phones[2].tel}`} className="hover:text-primary">
                          {contact.phones[2].display} (Fixe)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* E-mails */}
                <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xs">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral/60">
                      Adresses Électroniques
                    </p>
                    <div className="mt-1 space-y-1 text-sm font-semibold text-secondary">
                      <p>
                        <a href={`mailto:${contact.emails.admission}`} className="hover:text-primary">
                          {contact.emails.admission}
                        </a>
                      </p>
                      <p>
                        <a href={`mailto:${contact.emails.general}`} className="hover:text-primary">
                          {contact.emails.general}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-xs">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral/60">
                      Campus Universitaire
                    </p>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      {contact.addressLine}
                    </p>
                    <p className="text-xs text-neutral/70">{contact.postal}</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                  <div className="grid size-11 place-items-center rounded-xl bg-accent/20 text-secondary shrink-0">
                    <Clock className="size-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                      Horaires d&apos;Ouverture
                    </p>
                    <p className="mt-1 text-xs text-secondary font-medium">
                      Lundi – Vendredi : 08h00 à 18h00
                    </p>
                    <p className="text-xs text-secondary font-medium">
                      Samedi : 08h00 à 13h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton WhatsApp direct */}
              <div className="mt-6">
                <a
                  href={`https://wa.me/22891245050?text=${encodeURIComponent("Bonjour HEST, j'aimerais avoir plus de renseignements.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:brightness-105 transition-all"
                >
                  <MessageCircle className="size-4" />
                  Discuter avec un conseiller sur WhatsApp
                </a>
              </div>
            </div>

            {/* Colonne Formulaire */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
                <div className="border-b border-base-200 pb-5">
                  <h3 className="font-serif text-2xl font-bold text-secondary">
                    Envoyer un message
                  </h3>
                  <p className="mt-1 text-xs text-neutral/70">
                    Remplissez ce formulaire et notre secrétariat vous répondra dans les 24h ouvrées.
                  </p>
                </div>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ (FOIRE AUX QUESTIONS) */}
      <section className="section border-t border-base-300 bg-base-200/50">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Foire Aux Questions (FAQ)
            </span>
            <h2 className="mt-2 font-serif text-3xl text-secondary md:text-4xl">
              Les réponses à vos questions
            </h2>
            <p className="mt-3 text-sm text-neutral/75 md:text-base">
              Retrouvez ici les réponses aux interrogations les plus fréquentes concernant les admissions, les bourses et la vie de campus.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <ContactFAQ />
          </div>
        </div>
      </section>

      {/* SECTION LOCALISATION */}
      <section className="section bg-base-100">
        <div className="wrap">
          <div className="rounded-3xl border border-base-300 bg-base-200/40 p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Accès au campus
                </span>
                <h3 className="font-serif text-2xl font-bold text-secondary">
                  Comment nous trouver à Lomé ?
                </h3>
                <p className="mt-1 text-xs md:text-sm text-neutral/70">
                  Situé sur l&apos;Avenue Jean-Paul II à Tokoin Wuiti, le campus est facilement accessible en transport ou taxi, juste avant la Polyclinique le Cœur.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Tokoin+Wuiti+Lome+Togo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start md:self-auto rounded-full bg-secondary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-secondary/90 transition-all"
              >
                <MapPin className="size-4 text-accent" />
                Ouvrir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
