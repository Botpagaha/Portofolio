"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const area = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLAnchorElement>(null);
  useReveal(root);

  // Tombol "magnetik": bergerak mengikuti posisi mouse di sekitarnya.
  useGSAP(
    () => {
      const wrap = area.current;
      const el = btn.current;
      if (!wrap || !el) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(hover: hover) and (prefers-reduced-motion: no-preference)",
        () => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

          const move = (e: MouseEvent) => {
            const r = wrap.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
          };
          const leave = () => {
            xTo(0);
            yTo(0);
          };

          wrap.addEventListener("mousemove", move);
          wrap.addEventListener("mouseleave", leave);
          return () => {
            wrap.removeEventListener("mousemove", move);
            wrap.removeEventListener("mouseleave", leave);
          };
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      id="kontak"
      ref={root}
      className="px-6 pb-12 pt-32 md:px-12 md:pt-44"
    >
      <div className="mx-auto max-w-7xl">
        <p data-reveal className="text-sm uppercase tracking-[0.25em] text-accent">
          Kontak
        </p>
        <h2
          data-reveal
          className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.98] tracking-tight"
        >
          Punya ide?
          <br />
          Mari <span className="text-gradient">berkolaborasi.</span>
        </h2>

        <div ref={area} data-reveal className="-m-10 mt-6 p-10">
          <a
            ref={btn}
            href={`mailto:${profile.email}`}
            className="btn-gradient inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold"
          >
            {profile.email}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="glass mt-24 flex flex-col items-start justify-between gap-6 rounded-3xl px-8 py-6 text-sm text-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. Dibuat dengan Next.js,
            Tailwind, dan GSAP.
          </p>
          <ul className="flex flex-wrap gap-6">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.cv} className="transition-colors hover:text-accent">
                Unduh CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
