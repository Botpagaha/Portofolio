"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { testimonials } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="testimoni" ref={root} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Testimoni" title="Kata" accent="mereka" />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              data-reveal
              data-delay={i * 0.12}
              className="glass glass-hover flex flex-col rounded-3xl p-8"
            >
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-gradient"
              >
                “
              </span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-muted">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal-300/40 to-sky-500/40 font-display font-semibold ring-1 ring-accent/50">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
