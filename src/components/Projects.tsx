"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { projects } from "@/lib/data";

// Desktop: section di-pin dan kartu bergeser horizontal mengikuti scroll.
// Mobile / reduced-motion: kartu ditumpuk vertikal biasa.
export default function Projects() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const el = track.current;
          if (!el) return;
          const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);

          gsap.to(el, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section.current,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.fromTo(
            ".proj-progress",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section.current,
                start: "top top",
                end: () => "+=" + distance(),
                scrub: true,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      );

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".proj-card").forEach((card) => {
          gsap.from(card, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          });
        });
      });
    },
    { scope: section }
  );

  return (
    <section
      id="proyek"
      ref={section}
      className="relative overflow-hidden py-24 md:flex md:h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="mb-10 w-full px-6 text-center md:mb-12 md:px-12">
        <p className="text-sm uppercase tracking-[0.25em] text-accent">
          Proyek pilihan
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Karya <span className="text-gradient">terbaru</span>
        </h2>
        <p className="mt-3 hidden text-sm text-muted md:block">
          Scroll untuk menggeser →
        </p>
      </div>

      <div
        ref={track}
        className="flex w-full flex-col gap-8 px-6 md:w-max md:flex-row md:pl-[max(3rem,calc((100vw_-_72rem)/2))] md:pr-12"
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-cursor
            className="proj-card glass glass-hover group flex shrink-0 flex-col gap-2 overflow-hidden rounded-[2rem] p-3 md:h-[330px] md:w-[min(80vw,860px)] md:flex-row"
          >
            {/* Pratinjau: bingkai browser mini di atas gradien */}
            <div
              className="relative h-52 overflow-hidden rounded-3xl md:h-auto md:w-[46%] md:shrink-0"
              style={{ background: p.gradient }}
            >
              <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-2xl bg-[#04121c]/85 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1.5">
                <div className="flex gap-1.5 p-3">
                  <i className="h-2 w-2 rounded-full bg-white/35" />
                  <i className="h-2 w-2 rounded-full bg-white/25" />
                  <i className="h-2 w-2 rounded-full bg-white/15" />
                </div>
                <div className="space-y-2 px-4">
                  <div className="h-3 w-2/3 rounded bg-white/30" />
                  <div className="h-2 w-full rounded bg-white/10" />
                  <div className="h-2 w-4/5 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-2 pt-3">
                    <div className="h-14 rounded-lg bg-white/10" />
                    <div className="h-14 rounded-lg bg-white/10" />
                    <div className="h-14 rounded-lg bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} · {p.role}
              </p>
              <h3 className="font-display text-2xl font-semibold md:text-3xl">
                {p.title}
              </h3>
              <p className="leading-relaxed text-muted">{p.desc}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="glass-pill rounded-full px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 pt-1">
                {p.demo && (
                  <a
                    href={p.demo}
                    className="btn-glow rounded-lg px-5 py-2 text-xs font-semibold uppercase tracking-wider"
                  >
                    Demo ↗
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="glass-pill rounded-lg px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:text-accent"
                  >
                    Kode ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        aria-hidden
        className="mx-auto mt-10 hidden h-1 w-[calc(100%-6rem)] max-w-6xl overflow-hidden rounded-full bg-white/10 md:block"
      >
        <div className="proj-progress btn-gradient h-full origin-left rounded-full" />
      </div>
    </section>
  );
}
