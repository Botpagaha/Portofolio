"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(bar.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.2,
      },
    });
  });

  return (
    <div
      ref={bar}
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-accent"
    />
  );
}
