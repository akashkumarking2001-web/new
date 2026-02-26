"use client";

import { motion } from "framer-motion";

const TECH_LOGOS = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Flutter", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Swift", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    { name: "Kotlin", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
    { name: "Supabase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Android", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
    { name: "iOS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
    { name: "GraphQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" }
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
                <div className="w-full relative flex items-center group overflow-hidden mask-image-gradient py-2">
                    <div className="flex gap-16 items-center whitespace-nowrap w-max animate-trustbar-scroll">
                        {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, index) => (
                            <div
                                key={index}
                                className="flex-none flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-none"
                            >
                                <img
                                    src={tech.url}
                                    alt={`${tech.name} logo icon`}
                                    className={`h-10 w-auto object-contain ${['Next.js', 'iOS', 'AWS'].includes(tech.name) ? 'invert opacity-80' : ''}`}
                                />
                                <span className="font-syne font-bold text-xl tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
