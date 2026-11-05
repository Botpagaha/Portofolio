"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Crystal from "./Crystal";

// Orb berwarna dan kristal kaca di belakang semua konten. Panel kaca
// (backdrop-filter) membuatnya terlihat buram dan berkilau di baliknya.
export default function Background() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Parallax halus: tiap elemen bergerak dengan kecepatan berbeda saat scroll.
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = Number(el.dataset.speed);
          gsap.to(el, {
            y: () => speed * (document.body.scrollHeight - window.innerHeight),
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Orb */}
      <div data-speed="0.1" className="absolute left-[2%] top-[4%]">
        <div className="orb orb-a h-[420px] w-[420px] bg-teal-500 md:h-[560px] md:w-[560px]" />
      </div>
      <div data-speed="-0.06" className="absolute right-[0%] top-[26%]">
        <div className="orb orb-b h-[380px] w-[380px] bg-cyan-500 md:h-[520px] md:w-[520px]" />
      </div>
      <div data-speed="0.06" className="absolute bottom-[0%] left-[14%]">
        <div className="orb orb-c h-[400px] w-[400px] bg-sky-600 md:h-[540px] md:w-[540px]" />
      </div>

      {/* Kristal kaca */}
      <div data-speed="0.22" className="absolute left-[3%] top-[48%]">
        <div className="bob-slow">
          <Crystal kind="cube" rotate={-12} className="h-16 w-16 opacity-70 md:h-24 md:w-24" />
        </div>
      </div>
      <div data-speed="-0.16" className="absolute right-[4%] top-[8%]">
        <div className="bob">
          <Crystal kind="gem" rotate={14} className="h-14 w-14 opacity-70 md:h-20 md:w-20" />
        </div>
      </div>
      <div data-speed="0.12" className="absolute bottom-[10%] right-[8%]">
        <div className="bob-rev">
          <Crystal kind="pyramid" rotate={-8} className="h-16 w-16 opacity-60 md:h-24 md:w-24" />
        </div>
      </div>
      <div data-speed="-0.1" className="absolute left-[46%] top-[70%] hidden md:block">
        <div className="bob">
          <Crystal kind="cube" rotate={20} className="h-14 w-14 opacity-50" />
        </div>
      </div>
    </div>
  );
}
