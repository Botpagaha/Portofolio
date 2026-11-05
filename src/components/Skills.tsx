"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { skills } from "@/lib/data";

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="skill" ref={root} className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-7xl">
        <div data-reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-accent">
            Keahlian
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Teknologi yang <span className="text-gradient">saya pakai</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skills.map((g, i) => (
            <div
              key={g.group}
              data-reveal
              data-delay={(i % 2) * 0.1}
              className="glass glass-hover rounded-3xl p-8"
            >
              <h3 className="font-display text-xl font-semibold">{g.group}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="glass-pill rounded-full px-4 py-2 text-sm text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
