"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "Les candidats titulaires du bac littéraire peuvent-ils intégrer le parcours sciences informatiques ?",
    answer:
      "Oui ! Les titulaires d'un baccalauréat littéraire (Série A) peuvent intégrer le parcours en Sciences Informatiques. La HEST organise une session de mise à niveau en mathématiques et logique algorithmique dès le début de l'année pour garantir une intégration réussie.",
  },
  {
    question:
      "Quelles sont les conditions à remplir pour bénéficier d'une bourse d'étude ?",
    answer:
      "Pour la rentrée 2026-2027, la HEST attribue 50% de réduction de scolarité (½ bourse) aux 10 premiers inscrits, 25% (¼ bourse) aux 10 inscrits suivants, 15% pour toute inscription avant le 31 octobre, et 10% systématiques aux nouveaux bacheliers. Les attributions se font selon l'ordre chronologique de validation du dossier d'inscription.",
  },
  {
    question: "Le Master est-il dispensé en cours du soir ou de nuit ?",
    answer:
      "Les cours de Master à la HEST sont spécialement aménagés pour les professionnels et salariés en cours du soir (à partir de 18h30) et le samedi en journée, permettant ainsi de concilier parfaitement activité professionnelle et poursuite d'études de haut niveau.",
  },
  {
    question:
      "Les diplômes délivrés par la HEST sont-ils reconnus ?",
    answer:
      "Absolument. La HEST est un établissement d'enseignement supérieur agréé par le Ministère de l'Enseignement Supérieur et de la Recherche du Togo. Ses programmes sont conçus selon les standards du système LMD et s'inscrivent dans les référentiels académiques et professionnels reconnus au Togo et dans l'espace CAMES.",
  },
  {
    question:
      "Comment réserver une place à la résidence universitaire ?",
    answer:
      "La résidence universitaire HEST propose des chambres individuelles et doubles à 35 000 FCFA par mois (eau et connexion Wi-Fi haut débit inclus). La réservation s'effectue directement lors du dépôt du dossier d'inscription auprès du service de la scolarité, dans la limite des places disponibles.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-serif text-base font-semibold text-secondary transition-colors hover:text-primary"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="size-4 shrink-0 text-primary" />
                {faq.question}
              </span>
              <ChevronDown
                className={`size-4 shrink-0 text-neutral/50 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="border-t border-base-200 px-5 pb-5 pt-3 text-xs md:text-sm leading-relaxed text-neutral/80 animate-in fade-in-50 duration-200">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
