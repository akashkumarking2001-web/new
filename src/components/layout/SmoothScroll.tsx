"use client";

import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
        });

        lenis.on("scroll", ScrollTrigger.update);

        // Global scroll to hash helper
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const target = document.querySelector(hash);
                if (target) {
                    lenis.scrollTo(target as HTMLElement, { offset: -80 });
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        // Initial check
        setTimeout(handleHashChange, 500);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            window.removeEventListener('hashchange', handleHashChange);
            gsap.ticker.remove(lenis.raf);
        };

    }, []);

    return <div style={{ position: 'relative' }}>{children}</div>;
}
