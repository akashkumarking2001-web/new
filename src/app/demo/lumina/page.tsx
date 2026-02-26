"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
    Eye,
    Heart,
    Share2,
    ArrowUpRight,
    Play,
    Layers,
    CloudLightning,
    Instagram,
    Twitter,
    Linkedin
} from "lucide-react";

// --- COMPONENTS ---

function Nav() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [0, 1]);
    const y = useTransform(scrollY, [0, 100], [-20, 0]);

    return (
        <motion.nav
            style={{ opacity, y }}
            className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50 bg-[#0A0010]/30 backdrop-blur-2xl border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF00E5] to-[#7B2FE8] flex items-center justify-center shadow-[0_0_20px_rgba(255,0,229,0.4)]">
                    <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="font-syne font-extrabold text-2xl tracking-tighter text-white">LUMINA</span>
            </div>

            <div className="hidden md:flex items-center gap-10">
                {['Studio', 'Artworks', 'Process', 'Contact'].map(item => (
                    <Link key={item} href="#" className="text-white/60 hover:text-[#FF00E5] transition-colors text-xs uppercase tracking-[0.2em] font-medium font-mono">
                        {item}
                    </Link>
                ))}
            </div>

            <button className="px-6 py-2.5 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#FF00E5] hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Start a Project
            </button>
        </motion.nav>
    );
}

function ProjectCard({ title, category, img, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group relative h-[600px] overflow-hidden rounded-[40px] border border-white/5 hover:border-[#FF00E5]/30 transition-colors bg-[#11001A]"
        >
            <img
                src={img}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out-expo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0010] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

            <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#FF00E5] font-mono font-bold">{category}</span>
                <h3 className="text-4xl font-syne font-bold text-white tracking-tight">{title}</h3>
                <p className="text-white/40 text-sm max-w-[300px] line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    Pushing the boundaries of digital aesthetics with cutting-edge technology and artistic vision.
                </p>
                <div className="mt-4 flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300">
                    <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white font-bold hover:text-[#FF00E5] transition-colors">
                        View Case Study <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <div className="flex items-center gap-4 text-white/30">
                        <Heart className="w-4 h-4 hover:text-[#FF00E5] cursor-pointer transition-colors" />
                        <Share2 className="w-4 h-4 hover:text-[#FF00E5] cursor-pointer transition-colors" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// --- MAIN PAGE ---

export default function LuminaStudio() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div className="bg-[#0A0010] min-h-screen text-white overflow-hidden selection:bg-[#FF00E5] selection:text-white" ref={containerRef}>

            {/* Dynamic Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div
                    style={{ rotate: bgRotate }}
                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-gradient-to-tr from-[#FF00E5]/20 to-transparent blur-[160px] opacity-40"
                />
                <motion.div
                    style={{ rotate: bgRotate }}
                    className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-bl from-[#7B2FE8]/20 to-transparent blur-[160px] opacity-40"
                />
                <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#00F2FF]/10 blur-[120px] rounded-full animate-pulse-slow" />
            </div>

            <Nav />

            {/* HERO SECTION */}
            <section className="h-[120vh] flex flex-col items-center justify-center relative px-8">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="text-center z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#FF00E5]" />
                        <span className="text-xs uppercase tracking-[0.5em] text-[#FF00E5] font-mono font-bold">Creative Digital Studio</span>
                        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#FF00E5]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-[clamp(3.5rem,10vw,11rem)] font-syne font-extrabold leading-[0.85] tracking-tighter mb-12 drop-shadow-[0_0_50px_rgba(255,0,229,0.3)]"
                    >
                        WE CREATE <br /> <span className="text-transparent border-t-pulse-cyan-glow bg-clip-text bg-gradient-to-r from-[#FF00E5] via-[#7B2FE8] to-[#00F2FF]">DIGITAL LIGHT</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="max-w-[600px] mx-auto text-lg text-white/50 leading-relaxed font-light mb-12"
                    >
                        A London-based design collective exploring the intersection of art, technology, and human emotion. We craft experiences that resonate across the digital spectrum.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex items-center justify-center gap-8"
                    >
                        <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[#FF00E5] to-[#7B2FE8] text-white text-xs uppercase tracking-[0.2em] font-bold hover:scale-110 transition-transform shadow-[0_10px_40px_rgba(255,0,229,0.4)]">
                            View Work
                        </button>
                        <button className="flex items-center gap-4 group">
                            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF00E5] transition-colors relative">
                                <Play className="w-4 h-4 fill-white translate-x-0.5" />
                                <div className="absolute inset-0 rounded-full border border-[#FF00E5] opacity-0 group-hover:animate-ping opacity-20" />
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Watch Reel</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-mono">Scroll</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#FF00E5] to-transparent" />
                </div>
            </section>

            {/* WORKS GRID */}
            <section className="px-8 pb-32">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="NEON SYNDROME"
                        category="Immersive Storytelling"
                        img="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
                        delay={0}
                    />
                    <div className="flex flex-col gap-8 md:pt-40">
                        <ProjectCard
                            title="VIRTUAL ETHOS"
                            category="Web3 Platform"
                            img="https://images.unsplash.com/photo-1635339001026-6114ad115ee4"
                            delay={0.2}
                        />
                    </div>
                    <ProjectCard
                        title="AETHER DRIFT"
                        category="3D Motion Graphic"
                        img="https://images.unsplash.com/photo-1614850523296-d8c1af93d400"
                        delay={0}
                    />
                    <div className="flex flex-col gap-8 md:pt-40">
                        <ProjectCard
                            title="KINETIC SOUL"
                            category="Brand Identity"
                            img="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e"
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* STUDIO PHILOSOPHY */}
            <section className="py-40 bg-[#050008] relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF00E5]/5 mask-image-gradient opacity-30" />
                <div className="max-w-[1440px] mx-auto px-8 relative z-10 flex flex-col items-center text-center">
                    <CloudLightning className="w-12 h-12 text-[#FF00E5] mb-12 animate-bounce" />
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-syne font-bold leading-tight mb-12 max-w-[900px]">
                        We don&apos;t just build interfaces. We build <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 underline decoration-[#FF00E5]/50">emotional resonance.</span>
                    </h2>
                    <p className="max-w-[700px] text-lg text-white/40 leading-relaxed font-light mb-16">
                        In a world of templated experiences, we choose the difficult path. Every pixel is intentional, every animation serves a purpose, and every interaction is designed to make the user feel something extraordinary.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-[1000px]">
                        {[
                            { label: 'Awards Winning', val: '24+' },
                            { label: 'Happy Clients', val: '150' },
                            { label: 'Creative Minds', val: '12' },
                            { label: 'Cups of Coffee', val: '∞' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <span className="text-4xl font-syne font-bold text-white">{stat.val}</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF00E5] font-mono font-bold">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-12 border-t border-white/5 bg-[#0A0010]">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF00E5] to-[#7B2FE8] flex items-center justify-center">
                                <Layers className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-syne font-extrabold text-2xl tracking-tighter text-white">LUMINA</span>
                        </div>
                        <p className="text-white/40 text-sm max-w-[400px] leading-relaxed mb-10">
                            Lumina is a boutique digital agency dedicated to high-fidelity design and technical excellence. Together, let&apos;s illuminate your brand&apos;s digital potential.
                        </p>
                        <div className="flex items-center gap-6">
                            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#FF00E5] hover:text-[#FF00E5] transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#FF00E5] font-mono font-bold mb-8">Navigation</h4>
                        <ul className="flex flex-col gap-4 text-sm text-white/50">
                            {['Home', 'Portfolio', 'Our Studio', 'Process', 'Careers', 'Contact'].map(link => (
                                <li key={link} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] text-[#FF00E5] font-mono font-bold mb-8">Contact</h4>
                        <div className="text-sm text-white/50 flex flex-col gap-6">
                            <p>128 Ethereal Way, Shoreditch<br />London, EC2A 4BB<br />United Kingdom</p>
                            <p>hello@luminastudio.com<br />+44 (0) 20 7946 0120</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20 font-mono">
                    <span>© 2026 Lumina Studio. Created with Soul.</span>
                    <div className="flex items-center gap-8">
                        <span className="cursor-pointer hover:text-[#FF00E5]">Privacy Policy</span>
                        <span className="cursor-pointer hover:text-[#FF00E5]">Terms of Service</span>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
        </div>
    );
}
