"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Titik kursor yang mengikuti mouse dan membesar di atas tautan/tombol.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = dot.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(el, { xPercent: -50, yPercent: -50 });
        const xTo = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3" });
        let visible = false;

        const move = (e: MouseEvent) => {
          if (!visible) {
            visible = true;
            gsap.set(el, { opacity: 1, x: e.clientX, y: e.clientY });
          }
          xTo(e.clientX);
          yTo(e.clientY);
        };

        const over = (e: MouseEvent) => {
          const hit = (e.target as Element | null)?.closest(
            "a, button, [data-cursor]"
          );
          gsap.to(el, {
            scale: hit ? 3.5 : 1,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        return () => {
          window.removeEventListener("mousemove", move);
          window.removeEventListener("mouseover", over);
        };
      }
    );
  });

  return (
    <div
      ref={dot}
      aria-hidden
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-white opacity-0 mix-blend-difference"
    />
  );
}
