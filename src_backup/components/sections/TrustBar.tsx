"use client";

import { motion } from "framer-motion";

const TECH_LOGOS = [
    "React", "Next.js", "Flutter", "Swift", "Kotlin", "Node.js", "Firebase",
    "Supabase", "AWS", "Figma", "Tailwind CSS", "TypeScript", "PostgreSQL",
    "MongoDB", "Vercel", "Android", "iOS", "GraphQL"
];

export default function TrustBar() {
    return (
        <section className="w-full relative py-12 bg-depth overflow-hidden z-10">
            {/* Top and Bottom Gradient Borders */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-pulse-cyan to-transparent opacity-30" />
            <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-pulse-cyan to-transparent opacity-30" />

            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 flex flex-col items-center">
                <p className="font-mono text-[11px] text-text-tertiary uppercase tracking-[0.15em] mb-8 text-center">
                    Powering products built with the world&apos;s best tech
                </p>

                {/* Marquee Container */}
                <div className="w-full relative flex items-center group overflow-hidden mask-image-gradient">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap"
                        animate={{ x: [0, "-50%"] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
                            <div
                                key={index}
                                className="font-syne font-semibold text-2xl text-white/30 hover:text-white/90 transition-colors duration-300 cursor-none"
                            >
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
