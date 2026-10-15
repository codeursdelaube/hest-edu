"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-control">
          <span className="mb-1 text-sm font-medium">Nom</span>
          <input name="name" required className="input input-bordered rounded-sm" />
        </label>
        <label className="form-control">
          <span className="mb-1 text-sm font-medium">E-mail</span>
          <input
            name="email"
            type="email"
            required
            className="input input-bordered rounded-sm"
          />
        </label>
      </div>
      <label className="form-control block">
        <span className="mb-1 text-sm font-medium">Objet</span>
        <input name="subject" required className="input input-bordered w-full rounded-sm" />
      </label>
      <label className="form-control block">
        <span className="mb-1 text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="textarea textarea-bordered w-full rounded-sm"
        />
      </label>
      <button type="submit" className="btn btn-primary rounded-sm" disabled={status === "loading"}>
        {status === "loading" ? "Envoi…" : "Envoyer"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-success" role="status">
          Message reçu. L’envoi e-mail sera branché ultérieurement.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-error" role="alert">
          Impossible d’envoyer pour le moment. Écrivez-nous à admission@hest-edu.net.
        </p>
      ) : null}
    </form>
  );
}
