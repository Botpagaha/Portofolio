"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";
import { profile } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const field =
  "glass-pill w-full rounded-xl px-4 py-3 text-sm text-fg outline-none placeholder:text-muted/70 focus:border-accent focus:shadow-[0_0_18px_rgba(45,226,230,0.3)]";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  const area = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLAnchorElement>(null);
  useReveal(root);

  // Tombol CTA "magnetik": bergerak mengikuti posisi mouse di sekitarnya.
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
            xTo((e.clientX - (r.left + r.width / 2)) * 0.2);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
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

  // Form tanpa backend: membuka aplikasi email dengan isi yang sudah terisi.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Pesan dari ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="kontak"
      ref={root}
      className="px-6 pb-12 pt-28 md:px-12 md:pt-40"
    >
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="Kontak" title="Mari" accent="berkolaborasi" />

        <form
          data-reveal
          onSubmit={onSubmit}
          className="glass glass-glow space-y-4 rounded-[2rem] p-6 md:p-10"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              required
              aria-label="Nama"
              placeholder="Nama"
              className={field}
            />
            <input
              name="email"
              type="email"
              required
              aria-label="Email"
              placeholder="Email"
              className={field}
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            aria-label="Pesan"
            placeholder="Pesan"
            className={`${field} resize-none`}
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              className="btn-glow flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              Kirim Pesan
            </button>
            <a
              href={profile.cv}
              className="glass-pill flex-1 rounded-xl px-6 py-3.5 text-center text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent"
            >
              Unduh CV
            </a>
          </div>
        </form>

        {/* Ajakan bertindak */}
        <div
          ref={area}
          data-reveal
          className="glass mt-8 flex flex-col items-center gap-5 rounded-[2rem] px-6 py-10 text-center md:px-10"
        >
          <h3 className="font-display text-2xl font-semibold md:text-3xl">
            Punya ide? <span className="text-gradient">Ayo wujudkan bersama.</span>
          </h3>
          <a
            ref={btn}
            href={`mailto:${profile.email}`}
            className="btn-gradient inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold"
          >
            {profile.email}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Dibuat dengan Next.js,
            Tailwind, dan GSAP.
          </p>
          <ul className="flex flex-wrap justify-center gap-5">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </section>
  );
}
