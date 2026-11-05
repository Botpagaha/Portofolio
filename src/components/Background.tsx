"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Orb berwarna di belakang semua konten. Kartu kaca (backdrop-filter)
// membuat orb ini terlihat buram dan berkilau di balik panel.
export default function Background() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Parallax halus: tiap orb bergerak dengan kecepatan berbeda saat scroll.
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
      <div data-speed="0.1" className="absolute left-[4%] top-[4%]">
        <div className="orb orb-a h-[420px] w-[420px] bg-violet-600 md:h-[560px] md:w-[560px]" />
      </div>
      <div data-speed="-0.06" className="absolute right-[0%] top-[26%]">
        <div className="orb orb-b h-[380px] w-[380px] bg-cyan-500 md:h-[520px] md:w-[520px]" />
      </div>
      <div data-speed="0.06" className="absolute bottom-[0%] left-[14%]">
        <div className="orb orb-c h-[400px] w-[400px] bg-pink-500 md:h-[540px] md:w-[540px]" />
      </div>
      <div data-speed="-0.04" className="absolute bottom-[22%] right-[18%]">
        <div className="orb orb-a h-[300px] w-[300px] bg-blue-500 md:h-[400px] md:w-[400px]" />
      </div>
    </div>
  );
}
