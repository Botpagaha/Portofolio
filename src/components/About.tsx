"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { profile } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import Avatar from "./Avatar";

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="tentang" ref={root} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="Tentang saya" title="Mengenal" accent="lebih dekat" />

        <div
          data-reveal
          className="glass glass-glow grid items-center gap-8 rounded-[2rem] p-6 md:grid-cols-[240px_1fr] md:gap-12 md:p-10"
        >
          <div className="mx-auto h-64 w-52 overflow-hidden rounded-2xl ring-1 ring-accent/40 shadow-[0_0_40px_rgba(45,226,230,0.18)] md:h-72 md:w-full">
            <Avatar name={profile.name} letterClass="text-8xl" />
          </div>

          <div>
            <div className="space-y-4 text-lg leading-relaxed text-muted">
              {profile.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-3">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/[0.05] p-4 ring-1 ring-inset ring-white/10"
                >
                  <dt className="font-display text-2xl font-semibold text-gradient md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>

            <a
              href={profile.cv}
              className="btn-glow mt-8 inline-block rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-wider"
            >
              Unduh CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
