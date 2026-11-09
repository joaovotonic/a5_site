"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Remove CSS scroll-behavior: smooth so Lenis controls anchor & wheel interpolation without conflict
    document.documentElement.style.scrollBehavior = "auto";

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.072,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      anchors: {
        offset: -84,
        duration: 1.45,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      },
    });

    // Parallax suave nas imagens marcadas com [data-parallax]
    const updateParallax = () => {
      const vh = Math.min(window.innerHeight, 1080);
      const nodes = document.querySelectorAll<HTMLElement>("[data-parallax]");
      nodes.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.12");
        const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
        const centerOffset = rect.top + rect.height * 0.5 - vh * 0.5;
        const maxShift = Math.max(24, rect.height * 0.04);
        const y = Math.max(-maxShift, Math.min(maxShift, -centerOffset * speed));
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.1)`;
      });
    };

    const unsub = lenis.on("scroll", updateParallax);
    updateParallax();
    window.addEventListener("resize", updateParallax, { passive: true });

    return () => {
      unsub();
      window.removeEventListener("resize", updateParallax);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}
