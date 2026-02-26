"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Plus,
    Minus,
    MapPin,
    Calendar,
    MoveUpRight,
    Maximize2
} from "lucide-react";

// --- COMPONENTS ---

function ProjectSection({ num, title, year, location, img, reverse }: any) {
    return (
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch border-b border-white`}>
            <div className="flex-1 p-12 md:p-24 flex flex-col justify-between border-r border-white last:border-r-0">
                <div>
                    <div className="text-[10px] font-mono mb-12 flex items-center gap-4">
                        <span className="px-2 py-1 bg-white text-black font-bold tracking-tighter">{num}</span>
                        <span className="uppercase tracking-[0.3em] opacity-40">Architectural Volume</span>
                    </div>
                    <h3 className="text-6xl md:text-8xl font-syne font-bold leading-[0.9] tracking-tighter mb-12 uppercase">{title}</h3>
                    <div className="flex flex-col gap-4 text-sm uppercase tracking-widest font-mono">
                        <div className="flex items-center gap-4">
                            <Calendar className="w-4 h-4 opacity-40" />
                            <span>Completion: {year}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <MapPin className="w-4 h-4 opacity-40" />
                            <span>Location: {location}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.4em] font-bold">
                        View Project
                        <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex-1 h-[600px] md:h-auto relative overflow-hidden group">
                <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-8 right-8 w-14 h-14 bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}

// --- MAIN PAGE ---

export default function ZenithArchitecture() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    return (
        <div className="bg-[#111111] text-white font-sans selection:bg-white selection:text-black" ref={containerRef}>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full h-20 border-b border-white z-50 flex items-stretch bg-[#111111]">
                <div className="w-20 md:w-32 border-r border-white flex items-center justify-center">
                    <div className="w-8 h-8 bg-white" />
                </div>
                <div className="flex-1 flex items-center justify-between px-8 md:px-12">
                    <span className="text-2xl font-syne font-black tracking-tighter uppercase italic">Zenith_</span>
                    <div className="hidden md:flex items-center gap-12 text-[10px] uppercase font-bold tracking-[0.4em]">
                        <Link href="#" className="border-b-2 border-white pb-1">Index</Link>
                        <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity">Studio</Link>
                        <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity">Practice</Link>
                        <Link href="#" className="opacity-40 hover:opacity-100 transition-opacity">Journal</Link>
                    </div>
                    <button className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 group">
                        <div className="w-6 h-0.5 bg-white scale-x-100 group-hover:scale-x-110 transition-transform" />
                        <div className="w-6 h-0.5 bg-white scale-x-75 group-hover:scale-x-110 transition-transform" />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="min-h-screen pt-20 flex flex-col items-stretch">
                <div className="flex-1 flex flex-col md:flex-row items-stretch border-b border-white">
                    <div className="flex-1 p-12 md:p-24 flex flex-col justify-center border-r border-white">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <h1 className="text-[clamp(4rem,12vw,14rem)] font-syne font-black leading-[0.8] tracking-tightest uppercase mb-12 italic">
                                FORM <br /> FOLLOWS <br /> <span className="opacity-20">VISION.</span>
                            </h1>
                            <p className="max-w-[440px] text-lg leading-relaxed font-light opacity-60">
                                Zenith is an international architecture firm focused on the intersection of brutalist honesty and contemporary spatial intelligence.
                            </p>
                        </motion.div>
                    </div>
                    <div className="w-full md:w-[400px] border-r border-white relative overflow-hidden bg-white/5">
                        <div className="absolute inset-0 flex flex-col">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="flex-1 border-b border-white/10 flex items-center justify-between px-6">
                                    <span className="text-[8px] font-mono opacity-20">GRID_COORD_{i + 102}</span>
                                    <Plus className="w-2 h-2 opacity-10" />
                                </div>
                            ))}
                        </div>
                        <motion.div
                            animate={{ y: [0, -100, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="p-12 relative z-10"
                        >
                            <div className="text-[10px] font-mono uppercase tracking-[0.2em] mb-4">Latest Achievement</div>
                            <div className="text-4xl font-syne font-bold mb-8">Pritzker Prize 2025 Nominee</div>
                            <div className="h-[1px] w-full bg-white mb-8" />
                            <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.5em] font-black">
                                Read Announcement <MoveUpRight className="w-3 h-3" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="flex-1 bg-white flex flex-col items-center justify-center p-12 group cursor-pointer transition-colors hover:bg-black overflow-hidden relative">
                        <motion.div
                            className="text-black text-[clamp(2rem,6vw,5rem)] font-syne font-black uppercase tracking-tighter group-hover:text-white transition-colors relative z-10"
                            animate={{ rotate: 90 }}
                        >
                            START_TOUR
                        </motion.div>
                        <div className="absolute inset-0 bg-white group-hover:scale-0 transition-transform duration-700 origin-center" />
                    </div>
                </div>
            </header>

            {/* Filter / Stat Bar */}
            <div className="flex items-stretch border-b border-white h-24 bg-white text-black overflow-hidden">
                <div className="w-20 md:w-32 border-r border-black flex items-center justify-center">
                    <Minus className="w-6 h-6 rotate-90" />
                </div>
                <div className="flex-1 flex items-center justify-around px-8 overflow-x-auto whitespace-nowrap scroll-hide">
                    {['All Works', 'Residential', 'Public Space', 'Mixed Use', 'Masterplan'].map((filter, i) => (
                        <button key={i} className="text-[10px] uppercase font-black tracking-[0.4em] px-8 py-2 border-r border-black last:border-r-0 hover:italic transition-all">
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects List */}
            <section>
                <ProjectSection
                    num="01"
                    title="CONCRETE SILENCE"
                    year="2024"
                    location="OSLO, NORWAY"
                    img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                    reverse={false}
                />
                <ProjectSection
                    num="02"
                    title="GLASS MONOLITH"
                    year="2023"
                    location="TOKYO, JAPAN"
                    img="https://images.unsplash.com/photo-1541888946425-d81bb19480c5"
                    reverse={true}
                />
                <ProjectSection
                    num="03"
                    title="THE VOID HOUSE"
                    year="2025"
                    location="ZURICH, SWITZERLAND"
                    img="https://images.unsplash.com/photo-1518005020252-ebfd161ef9cf"
                    reverse={false}
                />
            </section>

            {/* Practice Philosophy */}
            <section className="p-12 md:p-32 border-b border-white bg-white text-black">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div>
                        <h2 className="text-7xl font-syne font-black uppercase tracking-tighter mb-12 italic">THE PRACTICE.</h2>
                        <p className="text-3xl leading-snug font-light mb-16">
                            Architecture is not about building walls. It is about defining the relationship between the human spirit and the natural void. We work with light as our primary material.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-5xl font-syne font-black mb-2">120+</div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">Projects Built</div>
                            </div>
                            <div>
                                <div className="text-5xl font-syne font-black mb-2">14</div>
                                <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40">Design Awards</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="aspect-[4/5] bg-black relative overflow-hidden mb-12">
                            <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <button className="w-full h-24 border border-black text-black font-black uppercase tracking-[0.5em] text-xs hover:bg-black hover:text-white transition-all">
                            Contact the Studio
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-12 md:p-24 bg-[#111111] text-white">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                    <div className="text-8xl font-syne font-black uppercase italic tracking-tighter opacity-10">ZENITH</div>
                    <div className="grid grid-cols-2 gap-20">
                        <div>
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-8">Social</h4>
                            <div className="flex flex-col gap-4 text-sm opacity-40">
                                <Link href="#" className="hover:opacity-100 transition-opacity">Instagram</Link>
                                <Link href="#" className="hover:opacity-100 transition-opacity">LinkedIn</Link>
                                <Link href="#" className="hover:opacity-100 transition-opacity">Vimeo</Link>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-8">Navigation</h4>
                            <div className="flex flex-col gap-4 text-sm opacity-40">
                                <Link href="#" className="hover:opacity-100 transition-opacity">Legal</Link>
                                <Link href="#" className="hover:opacity-100 transition-opacity">Privacy</Link>
                                <Link href="#" className="hover:opacity-100 transition-opacity">Careers</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-[10px] font-mono opacity-20 uppercase tracking-widest gap-8">
                    <span>© Zenith Architecture Group 2026. All Rights Reserved.</span>
                    <span>EST: 2012 / UNIT_ID: 9823-XA</span>
                </div>
            </footer>

            <style jsx global>{`
        .scroll-hide::-webkit-scrollbar { display: none; }
        .tracking-tightest { letter-spacing: -0.05em; }
      `}</style>
        </div>
    );
}
