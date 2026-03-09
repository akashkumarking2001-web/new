"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { Skeleton } from "@/components/ui/Skeleton";

// Reusable Auto-Scrolling Component
// Reusable Auto-Scrolling Component
function ScrollRow({ items, speed = 1, reverse = false }: { items: any[], speed?: number, reverse?: boolean }) {
    if (!items || items.length === 0) {
        return <div className="h-[400px] flex items-center justify-center font-mono opacity-20">Loading_Experience...</div>;
    }

    const [isHovered, setIsHovered] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // For CSS animation, we only need to duplicate items once to create a seamless loop
    const displayItems = [...items, ...items];

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

    const animationClass = reverse ? "animate-portfolio-scroll-reverse" : "animate-portfolio-scroll";
    const duration = `${Math.max(20, items.length * 8 / speed)}s`;

    return (
        <div className="relative z-30 w-full mb-12 sm:mb-16 overflow-hidden">
            <div
                className="mask-image-gradient"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`flex w-max py-4 sm:pb-8 ${animationClass}`}
                    style={{
                        animationDuration: duration,
                        animationPlayState: isHovered ? 'paused' : 'running'
                    } as React.CSSProperties}
                >
                    {displayItems.map((demo, i) => (
                        <div
                            key={i}
                            className="pr-4 sm:pr-8 shrink-0 w-[80vw] sm:w-[50vw] lg:w-[30vw] max-w-[450px]"
                        >
                            <div className="glass-1 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] relative group overflow-hidden border border-white/10 flex flex-col h-full">
                                <CardContent demo={demo} />
                            </div>
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
            .then(data => {
                const activeDemos = data.filter((d: any) => d.status === "ON" || !d.status);
                setDemos(activeDemos.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
            })
            .catch(console.error);
    }, []);

    if (demos.length === 0) {
        return (
            <section className="py-14 relative z-10 overflow-hidden" id="portfolio">
                <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative">
                    <div className="mb-20">
                        <Skeleton className="h-6 w-48 mb-4" />
                        <Skeleton className="h-12 w-96 mb-6" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="glass-1 p-6 rounded-[32px] border border-white/10 h-full">
                                <Skeleton className="w-full aspect-[4/3] rounded-2xl mb-6" />
                                <Skeleton className="h-4 w-24 mb-3" />
                                <Skeleton className="h-8 w-48 mb-4" />
                                <Skeleton className="h-16 w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    const dynamicDemos = demos.filter(d => d.category === "dynamic");
    const staticDemos = demos.filter(d => d.category === "static");
    const softwareDemos = demos.filter(d => d.category === "software");

    return (
        <section className="py-14 relative z-10 overflow-hidden" id="portfolio">
            <div className="max-w-[1440px] mx-auto relative">

                <div className="mb-20 px-[max(24px,4vw)]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                        <div className="text-center lg:text-left">
                            <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.2em] mb-4 uppercase">&lt; Our_Projects_Catalog /&gt;</div>
                            <h2 className="font-syne font-bold text-h2 text-white mb-6">
                                Work That Speaks
                            </h2>
                            <p className="font-sans text-body-lg text-text-secondary max-w-2xl mx-auto lg:mx-0">
                                Explore our diverse portfolio of custom engineered digital products.
                                Swipe freely or let them auto-scroll through our high-performance architecture.
                            </p>
                        </div>

                        <div className="glass-2 p-6 rounded-2xl border-l-[4px] border-pulse-cyan bg-pulse-cyan/5">
                            <p className="font-mono text-[10px] text-pulse-cyan uppercase tracking-widest mb-3 font-bold">● Customization Note</p>
                            <p className="font-sans text-sm text-text-primary leading-relaxed italic">
                                "These are demo projects intended to show our capabilities. Unlike other agencies that reuse the same templates, <span className="text-white font-bold">we do not use pre-made templates for our clients</span>. Every project we deliver is 100% customized and built from scratch based specifically on your business requirements and unique needs."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <div className="mb-10 px-[max(24px,4vw)] flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-cyan/10 border border-pulse-cyan/20 rounded-full mb-4">
                                <span className="w-2 h-2 rounded-full bg-pulse-cyan animate-pulse" />
                                <h3 className="font-mono text-[11px] text-pulse-cyan uppercase tracking-[0.2em] font-bold">Animated & Immersive</h3>
                            </div>
                            <p className="font-syne font-bold text-3xl text-white ml-2">High-End Dynamic Experiences</p>
                        </div>
                        <Link href="/portfolio/dynamic">
                            <button className="px-6 py-3 rounded-full border border-white/10 hover:border-pulse-cyan/50 text-white font-mono text-[12px] uppercase tracking-widest transition-all glass-1">
                                View Full Gallery →
                            </button>
                        </Link>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={dynamicDemos} speed={1.5} />
                    </div>
                </div>

                <div className="mb-24">
                    <div className="mb-10 px-[max(24px,4vw)] flex flex-wrap items-end justify-between gap-6 lg:flex-row-reverse">
                        <div className="lg:text-right">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-orange/10 border border-pulse-orange/20 rounded-full mb-4">
                                <h3 className="font-mono text-[11px] text-pulse-orange uppercase tracking-[0.2em] font-bold">Static & Scaleable</h3>
                                <span className="w-2 h-2 rounded-full bg-pulse-orange animate-pulse" />
                            </div>
                            <p className="font-syne font-bold text-3xl text-white mr-2">Precision Digital Structures</p>
                        </div>
                        <Link href="/portfolio/static">
                            <button className="px-6 py-3 rounded-full border border-white/10 hover:border-pulse-orange/50 text-white font-mono text-[12px] uppercase tracking-widest transition-all glass-1">
                                View Full Gallery →
                            </button>
                        </Link>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={staticDemos} speed={1.5} reverse={true} />
                    </div>
                </div>

                <div>
                    <div className="mb-10 px-[max(24px,4vw)] flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-pulse-cyan/10 border border-pulse-cyan/20 rounded-full mb-4">
                                <span className="w-2 h-2 rounded-full bg-pulse-cyan animate-pulse" />
                                <h3 className="font-mono text-[11px] text-pulse-cyan uppercase tracking-[0.2em] font-bold">Custom Software Demo</h3>
                            </div>
                            <p className="font-syne font-bold text-3xl text-white ml-2">High-End Solutions</p>
                        </div>
                        <Link href="/portfolio/software">
                            <button className="px-6 py-3 rounded-full border border-white/10 hover:border-pulse-cyan/50 text-white font-mono text-[12px] uppercase tracking-widest transition-all glass-1">
                                View Full Gallery →
                            </button>
                        </Link>
                    </div>
                    <div className="w-full h-full">
                        <ScrollRow items={softwareDemos} speed={1.5} />
                    </div>
                </div>

            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
