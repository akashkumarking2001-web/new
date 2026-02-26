"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    X,
    Menu,
    Plus,
    ArrowRight,
    Target,
    Hash,
    Globe,
    Zap,
    Terminal,
    Cpu,
    Monitor
} from "lucide-react";

// --- COMPONENTS ---

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full h-20 border-b border-white/10 flex items-stretch z-50 bg-black">
            <div className="w-20 border-r border-white/10 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#00FF66] animate-pulse rounded-sm" />
            </div>
            <div className="flex-1 flex items-center justify-between px-8">
                <span className="font-syne font-black text-2xl tracking-tighter text-white">QUANTUM_SYS_26</span>
                <div className="hidden md:flex items-center gap-12 text-[10px] font-mono text-white/40">
                    {['Register', 'Nodes', 'Genesis', 'Uptime'].map(item => (
                        <Link key={item} href="#" className="hover:text-[#00FF66] transition-all hover:tracking-widest uppercase">{item}</Link>
                    ))}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 flex flex-col items-center justify-center gap-1 group">
                    <div className="w-6 h-[1px] bg-[#00FF66]" />
                    <div className="w-4 h-[1px] bg-[#00FF66] group-hover:w-6 transition-all" />
                </button>
            </div>
        </nav>
    );
}

function GlitchText({ text }: { text: string }) {
    return (
        <div className="relative inline-block group cursor-none">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 text-[#00FF66] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-75">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-[#FF00E5] opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-75">
                {text}
            </span>
        </div>
    );
}

function GridBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            {/* Random scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,255,102,0.05))] h-1 bg-[size:100%_4px] opacity-20 pointer-events-none" />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] border-[1px] border-[#00FF66]/5 rounded-full"
            />
        </div>
    );
}

// --- MAIN PAGE ---

export default function QuantumEvent() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="bg-[#000000] text-white font-mono selection:bg-[#00FF66] selection:text-black overflow-hidden" ref={containerRef}>

            <GridBackground />
            <Nav />

            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-8 relative">
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 inline-flex items-center gap-4 border border-[#00FF66]/20 px-6 py-2 rounded-sm bg-[#00FF66]/5"
                    >
                        <Terminal className="w-4 h-4 text-[#00FF66]" />
                        <span className="text-[10px] uppercase tracking-widest text-[#00FF66] font-bold">SYSTEM_GENESIS_CORE.EXE</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="text-[clamp(3.5rem,12vw,14rem)] font-syne font-black leading-[0.8] tracking-tightest uppercase mb-16 italic"
                    >
                        QUANTUM <br /> <span className="text-transparent border border-[#00FF66] px-4">SYNTHESIS</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-12"
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-[8px] opacity-40 uppercase mb-2">Network_Nodes</span>
                            <span className="text-4xl font-syne font-bold outline-text">1,204</span>
                        </div>
                        <div className="w-[1px] h-12 bg-[#00FF66]/20 hidden md:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-[8px] opacity-40 uppercase mb-2">Sync_Latency</span>
                            <span className="text-4xl font-syne font-bold outline-text">0.02ms</span>
                        </div>
                        <div className="w-[1px] h-12 bg-[#00FF66]/20 hidden md:block" />
                        <div className="flex flex-col items-center">
                            <span className="text-[8px] opacity-40 uppercase mb-2">Entropy_Mode</span>
                            <span className="text-4xl font-syne font-bold outline-text">STABLE</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Global HUD Elements */}
                <div className="absolute bottom-12 left-12 flex items-center gap-8 text-[10px] font-mono font-bold tracking-widest opacity-20">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#00FF66]" />
                        <span>CORE_UPTIME: 99.9%</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#00FF66]" />
                        <span>LAT_OPTIMIZED</span>
                    </div>
                </div>
                <div className="absolute top-[50%] right-[-5%] rotate-90 text-[10px] font-mono font-black tracking-[1em] opacity-10">
                    EXPERIMENTAL_ENVIRONMENT_DO_NOT_REBOOT_SYSTEM_GENESIS_QUANTUM_SYS
                </div>
            </section>

            {/* TICKET / REGISTRATION SECTION */}
            <section className="py-40 px-8 relative z-10">
                <div className="max-w-[1200px] mx-auto border border-[#00FF66]/40 p-1 bg-black">
                    <div className="border border-[#00FF66]/40 bg-black p-12 md:p-24 flex flex-col md:flex-row gap-20">
                        <div className="flex-1">
                            <div className="text-[10px] uppercase tracking-widest text-[#00FF66] font-black mb-8 border-l-4 border-[#00FF66] pl-4">SECURE_PASS_ACCESS</div>
                            <h2 className="text-6xl font-syne font-black mb-12 leading-tight tracking-tighter uppercase italic">OBTAIN YOUR <br /> DIGITAL <br /> SIGNATURE.</h2>
                            <p className="max-w-[400px] text-sm text-white/40 leading-relaxed font-light mb-12">
                                Registration for Quantum Genesis 2026 is now open. Each pass is a unique cryptographic signature hash, granting access to the private network.
                            </p>
                            <button className="w-full h-20 bg-[#00FF66] text-black font-black uppercase text-xs tracking-[0.5em] hover:bg-white transition-colors duration-500 flex items-center justify-center gap-4">
                                Initialize Access <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex-1 bg-[#00FF66]/5 border border-[#00FF66]/20 relative overflow-hidden group">
                            <div className="p-8 flex flex-col gap-6 font-mono text-[10px]">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="flex justify-between border-b border-[#00FF66]/10 pb-4">
                                        <span className="opacity-40">PROTO_NODE_{i + 1024}</span>
                                        <span className="text-[#00FF66] font-bold">ACTIVE</span>
                                    </div>
                                ))}
                                <div className="flex-1 flex items-center justify-center py-20">
                                    <div className="relative">
                                        <Plus className="w-20 h-20 text-[#00FF66] group-hover:rotate-90 transition-transform duration-1000" />
                                        <div className="absolute inset-0 border border-[#00FF66] opacity-20 animate-ping" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE GRID */}
            <section className="py-40 px-8 border-y border-white/5 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF66] to-transparent" />
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { title: 'SYNAPTIC_GRID', icon: Target, desc: 'Real-time neural routing between global compute clusters.' },
                        { title: 'LATENCY_ZERO', icon: Zap, desc: 'Near-instant data finality across distributed ledger architectures.' },
                        { title: 'CORE_STABILITY', icon: Cpu, desc: 'Redundant failsafe mechanisms powered by autonomous AI units.' },
                        { title: 'GENESIS_DATA', icon: Monitor, desc: 'Unfiltered access to the raw data stream of the quantum network.' },
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col gap-6 group">
                            <div className="w-12 h-12 border border-[#00FF66]/20 flex items-center justify-center group-hover:bg-[#00FF66] transition-all">
                                <feature.icon className="w-5 h-5 text-[#00FF66] group-hover:text-black transition-colors" />
                            </div>
                            <h3 className="text-xl font-syne font-black text-white group-hover:translate-x-2 transition-transform">{feature.title}</h3>
                            <p className="text-xs text-white/30 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-12 bg-black border-t border-white/5">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 border-2 border-[#00FF66] rounded-sm" />
                            <span className="font-syne font-black text-2xl tracking-tighter text-white">QUANTUM_SYS_26</span>
                        </div>
                        <p className="text-white/30 text-sm max-w-[400px] leading-relaxed mb-12">
                            Quantum Synthesis is an experimental platform evaluating the future of high-frequency digital interactions. Join the evolution.
                        </p>
                        <div className="flex gap-12 text-[10px] font-mono tracking-widest text-[#00FF66]">
                            <Link href="#" className="hover:line-through">TERMINAL_I/O</Link>
                            <Link href="#" className="hover:line-through">DEBUG_CORE</Link>
                            <Link href="#" className="hover:line-through">VOID_PROTOCOL</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Genesis_Nav</span>
                        <ul className="flex flex-col gap-4 text-xs font-mono opacity-50">
                            <li className="hover:text-[#00FF66] cursor-pointer">/INDEX_A1</li>
                            <li className="hover:text-[#00FF66] cursor-pointer">/SYS_STATUS</li>
                            <li className="hover:text-[#00FF66] cursor-pointer">/NODES_EXT</li>
                            <li className="hover:text-[#00FF66] cursor-pointer">/VOID_LOGS</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-8">
                        <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Legal_Hash</span>
                        <ul className="flex flex-col gap-4 text-xs font-mono opacity-50">
                            <li className="hover:text-[#00FF66] cursor-pointer">/TERMS_CRYPT</li>
                            <li className="hover:text-[#00FF66] cursor-pointer">/PRIV_REDACTED</li>
                            <li className="hover:text-[#00FF66] cursor-pointer">/LICENSE_CC</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-24 pt-12 border-t border-white/5 text-[9px] font-mono opacity-20 uppercase tracking-[0.5em] text-center">
                    AUTH_CODE: 0x98231 • SYSTEM_STATUS: OPERATIONAL_NO_ERRORS_DETECTED • SYNC: 100%
                </div>
            </footer>

            <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(0, 255, 102, 0.4);
          color: transparent;
        }
        .tracking-tightest { letter-spacing: -0.06em; }
        .font-mono { font-family: var(--font-jetbrains-mono), monospace; }
      `}</style>
        </div>
    );
}
