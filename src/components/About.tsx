"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { profile } from "@/lib/data";

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section
      id="tentang"
      ref={root}
      className="px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.4fr]">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Tentang saya
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Kode yang rapi,
            <br />
            <span className="text-gradient">hasil yang terasa.</span>
          </h2>
        </div>

        <div className="space-y-6">
          <div
            data-reveal
            className="glass space-y-5 rounded-3xl p-8 text-lg leading-relaxed text-muted md:p-10"
          >
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-4">
            {profile.stats.map((s, i) => (
              <div
                key={s.label}
                data-reveal
                data-delay={0.1 * i}
                className="glass glass-hover rounded-3xl p-5 md:p-7"
              >
                <dt className="font-display text-3xl font-semibold text-gradient md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs text-muted md:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
