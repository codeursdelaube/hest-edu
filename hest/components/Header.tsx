"use client";

import { Menu, Phone, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { contact, nav, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/formations?q=${encodeURIComponent(q)}` : "/formations");
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-base-300/60 bg-base-100/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-[86rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-white p-1.5 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src={site.logo}
              alt="HEST — Hautes Études de Sciences et Technologies"
              width={140}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>

        </Link>

        {/* Center: Modern Dark Pill Navigation Bar (as in reference mockup) */}
        <nav
          className="hidden lg:flex items-center gap-1 rounded-full bg-[#180927] p-1.5 text-sm shadow-md"
          aria-label="Navigation principale"
        >
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs xl:text-sm font-medium transition-all ${active
                    ? "bg-white text-[#180927] shadow-sm font-semibold"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Contact Pill & Inscription Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${contact.phones[0].tel}`}
            className="hidden xl:inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/50 px-4 py-2 text-xs font-semibold text-[#180927] hover:border-primary/40 hover:bg-base-200 transition-colors"
          >
            <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-primary">
              <Phone className="size-3" />
            </span>
            <span>{contact.phones[0].display}</span>
          </a>

          <Link
            href="/inscription"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-[#5b2275] active:scale-95 transition-all"
          >
            S&apos;inscrire
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-base-300 text-[#180927] lg:hidden hover:bg-base-200"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div id="menu-mobile" className="border-t border-base-300 bg-base-100 px-5 py-6 lg:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5" aria-label="Navigation mobile">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${active ? "bg-primary text-white" : "hover:bg-base-200 text-[#180927]"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <form onSubmit={onSearch} className="mt-4 flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher une formation…"
              className="input input-sm flex-1 rounded-full border-base-300 bg-base-200/60 px-4 text-xs"
            />
            <button
              type="submit"
              className="grid size-8 place-items-center rounded-full bg-primary text-white"
              aria-label="Lancer la recherche"
            >
              <Search className="size-3.5" />
            </button>
          </form>

          <div className="mt-5 pt-4 border-t border-base-300 flex flex-col gap-2">
            <a
              href={`tel:${contact.phones[0].tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-base-300 py-2.5 text-xs font-semibold text-[#180927]"
            >
              <Phone className="size-3.5 text-primary" />
              <span>{contact.phones[0].display}</span>
            </a>
            <Link
              href="/inscription"
              className="btn btn-primary rounded-full text-xs font-semibold uppercase tracking-wider text-white"
              onClick={() => setOpen(false)}
            >
              S&apos;inscrire
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
