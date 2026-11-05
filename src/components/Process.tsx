"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";
import { process } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Process() {
  const root = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);
  useReveal(root);

  // Garis penghubung "terisi" mengikuti scroll (desktop saja).
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.fromTo(
            ".proc-line",
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: list.current,
                start: "top 70%",
                end: "bottom 55%",
                scrub: true,
              },
            }
          );
        }
      );
    },
    { scope: root }
  );

  return (
    <section id="proses" ref={root} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Proses" title="Alur" accent="kerja" />

        <div className="glass rounded-[2rem] px-6 py-12 md:px-10 md:py-16">
          <ol
            ref={list}
            className="relative grid gap-10 md:grid-cols-5 md:gap-4"
          >
            {/* Garis penghubung antar-node */}
            <div
              aria-hidden
              className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-white/15 md:block"
            >
              <div className="proc-line h-full origin-left bg-accent shadow-[0_0_10px_2px_rgba(45,226,230,0.6)]" />
            </div>

            {process.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                data-delay={i * 0.1}
                className="relative flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
              >
                <div className="glass-pill relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-accent/60 font-display text-lg font-semibold text-accent shadow-[0_0_22px_rgba(45,226,230,0.3)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
