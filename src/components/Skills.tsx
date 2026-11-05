"use client";

import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";
import { techs } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section id="skill" ref={root} className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-5xl">
        <SectionTitle kicker="Keahlian" title="Skill" accent="teknis" />

        <div
          data-reveal
          className="glass rounded-[2rem] px-6 py-12 md:px-12 md:py-16"
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10">
            {techs.map((t) => (
              <li
                key={t.name}
                className="group flex w-[88px] flex-col items-center gap-3"
              >
                {/* Heksagon: lapisan luar = garis tepi, lapisan dalam = kaca */}
                <div className="hex h-[92px] w-[80px] bg-gradient-to-br from-cyan-200/70 via-teal-300/25 to-sky-500/20 p-[1.5px] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
                  <div className="hex grid h-full w-full place-items-center bg-[#08202c]/90 transition-colors duration-300 group-hover:bg-[#0c3a46]/90">
                    <span className="font-display text-xl font-bold text-gradient">
                      {t.glyph}
                    </span>
                  </div>
                </div>
                <span className="text-center text-xs text-muted transition-colors group-hover:text-fg">
                  {t.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
