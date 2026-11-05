"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { profile } from "@/lib/data";

const chips = ["Laravel", "Next.js", "Flutter", "Unity"];

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
          )
          .from(
            ".hero-card",
            { y: 60, opacity: 0, scale: 0.94, duration: 1.2 },
            "-=1"
          );

        // Kartu kaca melayang pelan.
        gsap.to(".hero-card-float", {
          y: -14,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Parallax saat hero keluar dari layar.
        gsap.to(".hero-card", {
          yPercent: 30,
          rotate: 4,
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
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 pt-28 lg:grid-cols-[1.5fr_1fr]">
        <div className="hero-content">
          <p className="hero-fade glass-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
            {profile.role}
          </p>

          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.97] tracking-tight">
            {profile.headline.map((w, i) => (
              <span
                key={i}
                className="mr-[0.25em] inline-block overflow-hidden pb-[0.14em] align-bottom"
              >
                <span
                  className={`hero-word inline-block ${
                    w.accent ? "text-gradient" : ""
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
              className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-105"
            >
              Lihat proyek
            </a>
            <a
              href="#kontak"
              className="glass-pill rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/15"
            >
              Hubungi saya
            </a>
          </div>
        </div>

        {/* Kartu kaca dekoratif */}
        <div className="hero-card hidden lg:block">
          <div className="hero-card-float glass relative rounded-[2rem] p-8">
            <div
              aria-hidden
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 opacity-80 blur-sm"
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-violet-300 to-pink-300 font-display text-lg font-bold text-[#0b0b1e]">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">
                    {profile.name}
                  </p>
                  <p className="text-sm text-muted">Terbuka untuk proyek baru</p>
                </div>
              </div>

              <div className="my-6 h-px bg-white/15" />

              <ul className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <li
                    key={c}
                    className="glass-pill rounded-full px-3.5 py-1.5 text-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {profile.stats.slice(0, 2).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10"
                  >
                    <p className="font-display text-2xl font-semibold text-gradient">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted md:flex">
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
