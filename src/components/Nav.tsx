"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Skill" },
  { href: "#layanan", label: "Layanan" },
  { href: "#proses", label: "Proses" },
  { href: "#kontak", label: "Kontak" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  // Menandai tautan sesuai section yang sedang terlihat.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    const top = document.getElementById("top");
    if (top) obs.observe(top);
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <nav className="glass glass-glow mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 md:px-7">
        <a
          href="#top"
          className="font-display text-lg font-bold uppercase tracking-wide text-gradient"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 text-xs font-medium uppercase tracking-widest text-muted lg:flex">
          {links.map((l) => {
            const on = active === l.href.slice(1);
            return (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={`transition-colors hover:text-fg ${on ? "text-fg" : ""}`}
                >
                  {l.label}
                </a>
                <span
                  aria-hidden
                  className={`absolute -bottom-2 left-0 h-px w-full bg-accent shadow-[0_0_8px_2px_rgba(45,226,230,0.7)] transition-opacity duration-300 ${
                    on ? "opacity-100" : "opacity-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-2 sm:flex">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass-pill grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold text-muted transition-colors hover:text-accent"
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontak"
            className="btn-gradient rounded-full px-4 py-1.5 text-sm font-semibold lg:hidden"
          >
            Kontak
          </a>
        </div>
      </nav>
    </header>
  );
}
