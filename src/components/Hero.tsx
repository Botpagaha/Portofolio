"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { profile } from "@/lib/data";
import Crystal from "./Crystal";
import Avatar from "./Avatar";

const chips = ["Laravel", "Next.js", "Flutter", "Unity"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  // Judul: kata-kata peran, lalu nama sebagai kata beraksen.
  const words = [
    ...profile.role.split(" ").map((t) => ({ t, accent: false })),
    { t: profile.name + ".", accent: true },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(".hero-panel", { y: 50, opacity: 0, duration: 1 })
          .from(".hero-word", { yPercent: 115, duration: 1, stagger: 0.07 }, "-=0.6")
          .from(
            ".hero-fade",
            { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
            "-=0.6"
          )
          .from(
            ".hero-visual",
            { y: 60, opacity: 0, scale: 0.95, duration: 1.1 },
            "-=1"
          )
          .from(
            ".hero-float",
            { y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out" },
            "-=0.7"
          )
          .from(
            ".hero-crystal",
            {
              scale: 0,
              opacity: 0,
              rotate: -30,
              duration: 1,
              stagger: 0.12,
              ease: "back.out(1.6)",
            },
            "-=1"
          );

        // Konten hero memudar pelan saat di-scroll keluar.
        gsap.to(".hero-inner", {
          yPercent: -8,
          opacity: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Parallax mengikuti mouse (hanya perangkat dengan mouse).
      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const items = gsap.utils.toArray<HTMLElement>(".parallax").map((el) => ({
            x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3" }),
            y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3" }),
            d: Number(el.dataset.depth ?? 0.03),
          }));
          const move = (e: MouseEvent) => {
            const nx = e.clientX / window.innerWidth - 0.5;
            const ny = e.clientY / window.innerHeight - 0.5;
            items.forEach((it) => {
              it.x(-nx * it.d * 1000);
              it.y(-ny * it.d * 1000);
            });
          };
          window.addEventListener("mousemove", move);
          return () => window.removeEventListener("mousemove", move);
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center px-6 pb-16 pt-32 md:px-12"
    >
      <div className="hero-inner mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Panel teks */}
        <div className="hero-panel glass glass-glow relative rounded-[2rem] p-8 md:p-12">
          <p className="hero-fade glass-pill mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(45,226,230,0.8)]" />
            Portofolio
          </p>

          <h1 className="font-display text-[clamp(2.1rem,4.6vw,4.2rem)] font-bold uppercase leading-[1.05] tracking-tight">
            {words.map((w, i) => (
              <span
                key={i}
                className="mr-[0.25em] inline-block overflow-hidden pb-[0.12em] align-bottom"
              >
                <span
                  className={`hero-word inline-block ${w.accent ? "text-gradient" : ""}`}
                >
                  {w.t}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {profile.intro}
          </p>

          <div className="hero-fade mt-9 flex flex-wrap gap-4">
            <a
              href="#proyek"
              className="btn-glow rounded-xl px-7 py-3.5 text-sm font-semibold uppercase tracking-wider"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="glass-pill rounded-xl px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Visual: foto, kartu mengambang, kristal */}
        <div className="relative mx-auto h-[520px] w-full max-w-[560px] lg:mx-0 lg:max-w-none">
          <div className="hero-visual absolute inset-x-0 top-0 mx-auto h-[470px] w-[300px] overflow-hidden rounded-[2rem] glass glass-glow sm:w-[340px] lg:left-[4%] lg:right-auto lg:mx-0">
            <Avatar name={profile.name} />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#04101a]/90 to-transparent"
            />
          </div>

          {/* Kartu profil */}
          <div className="parallax absolute right-0 top-8 hidden w-[230px] sm:block" data-depth="0.05">
            <div className="hero-float">
              <div className="bob-slow glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-accent/60">
                    <Avatar name={profile.name} letterClass="text-xl" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{profile.name}</p>
                    <p className="text-xs text-muted">Terbuka untuk proyek</p>
                  </div>
                </div>
                <a
                  href="#proyek"
                  className="btn-glow mt-4 block rounded-lg py-2 text-center text-xs font-semibold uppercase tracking-wider"
                >
                  Lihat proyek →
                </a>
              </div>
            </div>
          </div>

          {/* Kartu statistik */}
          <div className="parallax absolute bottom-6 right-0 hidden w-[260px] sm:block" data-depth="0.035">
            <div className="hero-float">
              <div className="bob-rev glass rounded-2xl p-4">
                <p className="text-xs uppercase tracking-widest text-muted">
                  Teknologi utama
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {chips.map((c) => (
                    <li
                      key={c}
                      className="glass-pill rounded-full px-2.5 py-1 text-xs"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {profile.stats.slice(0, 2).map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-white/[0.06] p-3 ring-1 ring-inset ring-white/10"
                    >
                      <p className="font-display text-xl font-semibold text-gradient">
                        {s.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kristal */}
          <div className="parallax absolute -left-2 top-16 lg:-left-8" data-depth="0.07">
            <div className="hero-crystal">
              <div className="bob">
                <Crystal kind="cube" rotate={-10} className="h-20 w-20 md:h-24 md:w-24" />
              </div>
            </div>
          </div>
          <div className="parallax absolute right-[14%] -top-6" data-depth="0.06">
            <div className="hero-crystal">
              <div className="bob-rev">
                <Crystal kind="gem" rotate={12} className="h-14 w-14 md:h-16 md:w-16" />
              </div>
            </div>
          </div>
          <div className="parallax absolute bottom-0 left-[22%]" data-depth="0.08">
            <div className="hero-crystal">
              <div className="bob-slow">
                <Crystal kind="pyramid" rotate={6} className="h-16 w-16 md:h-20 md:w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
