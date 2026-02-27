"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Reusable Auto-Scrolling Component
function ScrollRow({ items, speed = 1, reverse = false }: { items: any[], speed?: number, reverse?: boolean }) {
    if (!items || items.length === 0) {
        return null;
    }

    const displayItems = [...items, ...items];
    const duration = 40 / speed;
    const animClass = reverse ? "animate-portfolio-scroll-reverse" : "animate-portfolio-scroll";

    const CardContent = ({ demo, isMobile = false }: { demo: any, isMobile?: boolean }) => (
        <>
            <div className={`w-full ${isMobile ? 'aspect-[4/5] sm:aspect-[4/3] mb-4' : 'aspect-[4/3] mb-6'} bg-surface-raised rounded-[20px] sm:rounded-3xl relative overflow-hidden flex flex-col group/screen shadow-2xl border border-white/5`}>
                {!isMobile && (
                    <div className="h-8 bg-[#1A1A1A] w-full flex items-center px-4 gap-2 shrink-0 border-b border-white/5 z-20">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                        </div>
                        <div className="bg-white/5 mx-auto px-4 py-1 rounded-full text-[9px] font-mono text-white/40 hidden sm:block border border-white/5">
                            https://axosoul.io{demo.link}
                        </div>
                    </div>
                )}
                <div className="relative flex-1 w-full bg-[#050505] overflow-hidden">
                    <Image
                        src={demo.image}
                        alt={demo.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover object-top opacity-70 group-hover/screen:opacity-100 group-hover/screen:scale-[1.05] transition-all duration-[1.5s] ease-out-expo z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-20 opacity-60 pointer-events-none" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-all duration-500 z-30 bg-black/60 backdrop-blur-[4px]">
                        <Link href={demo.link} target="_blank">
                            <button className={`${isMobile ? 'px-4 py-2 text-[11px]' : 'px-8 py-4 text-[13px]'} bg-white text-black font-sans font-bold rounded-full shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 uppercase tracking-widest`}>
                                View Demo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="px-1">
                <div className={`${isMobile ? 'mb-1 text-[9px]' : 'mb-2 text-[11px]'} font-mono uppercase tracking-[0.2em] font-bold`} style={{ color: demo.accent }}>{demo.type}</div>
                <h3 className={`font-syne font-bold ${isMobile ? 'text-[15px] sm:text-lg mb-1' : 'text-2xl mb-3'} text-white tracking-tight group-hover:text-pulse-cyan transition-colors`}>{demo.name}</h3>
                <p className={`font-sans ${isMobile ? 'text-[11px] sm:text-[12px] mb-4' : 'text-[14px] mb-6'} text-text-secondary leading-relaxed line-clamp-2 font-medium`}>
                    {demo.desc}
                </p>

                <div className={`flex flex-wrap gap-2 ${isMobile ? 'pt-3 mt-auto' : 'pt-5 border-t border-white/5 mt-auto'}`}>
                    {(demo.features || []).slice(0, isMobile ? 2 : undefined).map((f: string, index: number) => (
                        <span key={`${f}-${index}`} className={`px-3 py-1 bg-white/5 rounded-full ${isMobile ? 'text-[9px]' : 'text-[11px]'} font-mono text-text-primary border border-white/10`}>
                            {f}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <div className="relative z-30 w-full mb-12 sm:mb-16">
            {/* Unified Scrolling Row for Desktop & Mobile */}
            <div className="flex overflow-hidden pb-4 sm:pb-8 px-[max(16px,4vw)] cursor-grab active:cursor-grabbing w-full">
                <div
                    className={`flex gap-4 sm:gap-8 w-max ${animClass}`}
                    style={{ '--duration': `${duration}s` } as any}
                >
                    {displayItems.map((demo, i) => (
                        <div
                            key={i}
                            className="glass-1 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] relative group overflow-hidden border border-white/10 shrink-0 w-[75vw] sm:w-[45vw] lg:w-[28vw] max-w-[400px] flex flex-col"
                        >
                            <CardContent demo={demo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [demos, setDemos] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(data => setDemos(data.sort((a: any, b: any) => (a.order || 0) - (b.order || 0))))
            .catch(console.error);
    }, []);

    // Split demos by category (new design logic)
    const dynamicDemos = demos.filter(d => d.category === "dynamic");
    const staticDemos = demos.filter(d => d.category === "static");
    const softwareDemos = demos.filter(d => d.category === "software");

    return (
        <section className="py-14 relative z-10 overflow-hidden" id="portfolio">
            <div className="max-w-[1440px] mx-auto relative">

                {/* Header */}
                <div className="mb-20 px-[max(24px,4vw)] text-center lg:text-left">
                    <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.2em] mb-4 uppercase">&lt; Our_Projects_Catalog /&gt;</div>
                    <h2 className="font-syne font-bold text-h2 text-white mb-6">
                        Work That Speaks
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                        Explore our diverse portfolio of custom engineered digital products.
                        Swipe freely or let them auto-scroll through our high-performance architecture.
                    </p>
                </div>

                {/* ROW 1: ANIMATED & DYNAMIC */}
                <div className="mb-24">
                    <div className="mb-10 px-[max(24px,4vw)]">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-cyan/10 border border-pulse-cyan/20 rounded-full mb-4">
                            <span className="w-2 h-2 rounded-full bg-pulse-cyan animate-pulse" />
                            <h3 className="font-mono text-[11px] text-pulse-cyan uppercase tracking-[0.2em] font-bold">Animated & Immersive</h3>
                        </div>
                        <p className="font-syne font-bold text-3xl text-white ml-2">High-End Dynamic Experiences</p>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={dynamicDemos} speed={0.4} />
                    </div>
                </div>

                {/* ROW 2: STATIC & BLUEPRINTS */}
                <div className="mb-24">
                    <div className="mb-10 px-[max(24px,4vw)] lg:text-right">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-orange/10 border border-pulse-orange/20 rounded-full mb-4">
                            <h3 className="font-mono text-[11px] text-pulse-orange uppercase tracking-[0.2em] font-bold">Static & Scaleable</h3>
                            <span className="w-2 h-2 rounded-full bg-pulse-orange animate-pulse" />
                        </div>
                        <p className="font-syne font-bold text-3xl text-white mr-2">Precision Digital Structures</p>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={staticDemos} speed={0.4} reverse={true} />
                    </div>
                </div>

                {/* ROW 3: SOFTWARE DEMOS */}
                <div>
                    <div className="mb-10 px-[max(24px,4vw)] text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-cyan/10 border border-pulse-cyan/20 rounded-full mb-4">
                            <span className="w-2 h-2 rounded-full bg-pulse-cyan animate-pulse" />
                            <h3 className="font-mono text-[11px] text-pulse-cyan uppercase tracking-[0.2em] font-bold">Custom Software Demo</h3>
                        </div>
                        <p className="font-syne font-bold text-3xl text-white ml-2">High-End Solutions</p>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={softwareDemos} speed={0.4} />
                    </div>
                </div>

            </div>

            <style jsx>{`
                .animate-portfolio-scroll {
                    animation: portfolioScroll var(--duration, 40s) linear infinite;
                }
                .animate-portfolio-scroll-reverse {
                    animation: portfolioScrollReverse var(--duration, 40s) linear infinite;
                }
                @keyframes portfolioScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 1rem)); } 
                }
                @keyframes portfolioScrollReverse {
                    0% { transform: translateX(calc(-50% - 1rem)); }
                    100% { transform: translateX(0); }
                }
            `}</style>
        </section>
    );
}
