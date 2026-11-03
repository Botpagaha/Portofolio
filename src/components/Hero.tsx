"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { profile } from "@/lib/data";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(".hero-word", { yPercent: 115, duration: 1.1, stagger: 0.08 })
          .from(
            ".hero-fade",
            {
              y: 24,
              opacity: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: "power3.out",
            },
            "-=0.6"
          );

        // Parallax: blob dekoratif bergerak lebih lambat dari konten.
        gsap.to(".hero-blob", {
          yPercent: 45,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(".hero-content", {
          yPercent: -12,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12"
    >
      <div
        aria-hidden
        className="hero-blob pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(var(--fg)_1px,transparent_1px),linear-gradient(90deg,var(--fg)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <div className="hero-content relative mx-auto w-full max-w-7xl pt-24">
        <p className="hero-fade mb-6 text-sm uppercase tracking-[0.25em] text-muted">
          {profile.role}
        </p>

        <h1 className="font-display text-[clamp(2.75rem,9vw,8.5rem)] font-semibold leading-[0.95] tracking-tight">
          {profile.headline.map((w, i) => (
            <span
              key={i}
              className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom"
            >
              <span
                className={`hero-word inline-block ${
                  w.accent ? "text-accent" : ""
                }`}
              >
                {w.t}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero-fade mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {profile.intro}
        </p>

        <div className="hero-fade mt-10 flex flex-wrap gap-4">
          <a
            href="#proyek"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Lihat proyek
          </a>
          <a
            href="#kontak"
            className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Hubungi saya
          </a>
        </div>
      </div>

      <div className="hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted md:flex">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
