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
      <div className="mx-auto mb-12 flex w-full max-w-7xl items-end justify-between px-6 md:px-12">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Proyek pilihan
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Karya terbaru
          </h2>
        </div>
        <span className="hidden text-sm text-muted md:block">
          Scroll untuk menggeser →
        </span>
      </div>

      <div
        ref={track}
        className="flex w-full flex-col gap-8 px-6 md:w-max md:flex-row md:px-12"
      >
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-cursor
            className="proj-card group flex shrink-0 flex-col overflow-hidden rounded-3xl border border-line bg-white/[0.02] md:w-[min(62vw,760px)]"
          >
            <div
              className="relative h-52 overflow-hidden md:h-72"
              style={{ background: p.gradient }}
            >
              <span className="absolute left-6 top-5 font-display text-7xl font-bold text-black/25 md:text-8xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">
                  {p.title}
                </h3>
                <span className="shrink-0 text-xs uppercase tracking-widest text-muted">
                  {p.role}
                </span>
              </div>
              <p className="leading-relaxed text-muted">{p.desc}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex gap-5 pt-2 text-sm font-medium">
                {p.demo && (
                  <a
                    href={p.demo}
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    Demo ↗
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    className="underline-offset-4 hover:underline"
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
        className="mx-auto mt-12 hidden h-px w-full max-w-7xl bg-line px-12 md:block"
      >
        <div className="proj-progress h-px origin-left bg-accent" />
      </div>
    </section>
  );
}
