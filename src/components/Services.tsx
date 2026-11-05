"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { services, type ServiceIcon } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const icons: Record<ServiceIcon, React.ReactNode> = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </>
  ),
  design: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <path d="M2 8c1.2-1.2 1.2-3.8 0-5M22 8c-1.2-1.2-1.2-3.8 0-5" />
    </>
  ),
};

export default function Services() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="layanan" ref={root} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionTitle kicker="Layanan" title="Apa yang bisa" accent="saya bantu" />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              data-delay={i * 0.12}
              className="glass glass-hover rounded-3xl p-8"
            >
              <div className="glass-pill grid h-16 w-16 place-items-center rounded-2xl text-accent shadow-[0_0_24px_rgba(45,226,230,0.25)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                  aria-hidden
                >
                  {icons[s.icon]}
                </svg>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
