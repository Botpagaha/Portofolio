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
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.4fr]">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Tentang saya
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Kode yang rapi,
            <br />
            hasil yang terasa.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted">
          {profile.about.map((p, i) => (
            <p key={i} data-reveal data-delay={i * 0.1}>
              {p}
            </p>
          ))}

          <dl className="grid grid-cols-3 gap-6 border-t border-line pt-10">
            {profile.stats.map((s, i) => (
              <div key={s.label} data-reveal data-delay={0.1 * i}>
                <dt className="font-display text-4xl font-semibold text-fg md:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
