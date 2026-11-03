"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Memunculkan setiap elemen ber-atribut [data-reveal] saat masuk viewport.
// Atribut data-delay (detik) opsional untuk efek berurutan.
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            delay: Number(el.dataset.delay ?? 0),
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });
      });
    },
    { scope }
  );
}
