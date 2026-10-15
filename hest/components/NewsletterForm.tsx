"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("ok");
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-lg flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Adresse e-mail
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="Votre e-mail"
        className="input input-bordered flex-1 rounded-sm bg-white"
      />
      <button type="submit" className="btn btn-primary rounded-sm px-6">
        S&apos;abonner
      </button>
      {status === "ok" ? (
        <p className="basis-full text-sm text-white/90" role="status">
          Demande enregistrée. L’envoi e-mail sera branché ultérieurement.
        </p>
      ) : null}
    </form>
  );
}
