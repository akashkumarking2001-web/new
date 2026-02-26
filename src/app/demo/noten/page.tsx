"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Twitter,
    Mail,
    Wallet,
    ArrowRight,
    ChevronDown,
    Plus,
    Minus,
    ExternalLink,
    Cpu,
    Zap,
    Repeat,
    Layers,
    Play
} from "lucide-react";

// --- CUSTOM COMPONENTS ---

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-[100] px-8 py-4 flex items-center justify-between transition-all duration-500 rounded-full border border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-2xl py-3 border-white/20' : 'bg-transparent'}`}>
            <Link href="/demo/noten" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#39ff14] rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                    <Zap className="w-4 h-4 text-black" />
                </div>
                <span className="font-archivo text-xl text-white tracking-tighter uppercase">Noten</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
                {['Home', 'Discover', 'Squad', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        href={item === 'Home' ? '/demo/noten' : `/demo/noten/${item.toLowerCase()}`}
                        className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 hover:text-[#39ff14] transition-all relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#39ff14] group-hover:w-full transition-all duration-300" />
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-white/40 hover:text-[#39ff14] cursor-pointer transition-colors" />
                    <Mail className="w-4 h-4 text-white/40 hover:text-[#39ff14] cursor-pointer transition-colors" />
                </div>
                <button className="px-6 py-2.5 bg-gradient-to-r from-[#7B2FFF] to-[#00E5FF] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(123,47,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                    <Wallet className="w-3.5 h-3.5" />
                    Connect
                </button>
            </div>
        </nav>
    );
};

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0D0F] pt-20">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2FFF]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1440px] px-8 flex flex-col items-center">
                {/* Top Text Content */}
                <div className="text-center mb-[-40px] md:mb-[-100px] relative z-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-white/40 font-bold mb-4"
                    >
                        Streetwear Vibes Into Web3 Culture
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="font-archivo text-5xl md:text-[10rem] text-white/20 uppercase leading-none select-none"
                    >
                        Born On
                    </motion.h2>
                </div>

                {/* Character & Floating Elements */}
                <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">
                    <motion.div
                        style={{ x: mousePos.x, y: mousePos.y }}
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 w-[80%] md:w-full h-full"
                    >
                        <img
                            src="/noten_robot_hero_1772076986171.png"
                            alt="Noten Hero"
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(123,47,255,0.4)]"
                        />
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 left-10 md:left-[-40px] w-32 h-32 md:w-44 md:h-44 border border-white/10 rounded-full flex items-center justify-center overflow-hidden hidden sm:flex"
                    >
                        <div className="text-white/20 text-[8px] md:text-[10px] font-bold uppercase tracking-[1em] whitespace-nowrap animate-spin-slow">
                            Join Now • Join Now • Join Now •
                        </div>
                    </motion.div>

                    <div className="absolute top-20 right-[-20px] glass-2 p-4 rounded-3xl border border-white/10 hidden lg:block backdrop-blur-xl">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
                            <span className="text-[10px] uppercase font-bold text-white tracking-widest">Live Minting</span>
                        </div>
                        <p className="text-[14px] text-white/60 font-medium">Streetwear Drops</p>
                    </div>
                </div>

                {/* Bottom Main Headline */}
                <div className="text-center mt-[-40px] md:mt-[-120px] relative z-20">
                    <motion.h1
                        initial={{ opacity: 0, skewX: 10 }}
                        animate={{ opacity: 1, skewX: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative font-archivo text-7xl md:text-[14rem] text-white uppercase leading-none tracking-tighter"
                    >
                        <span className="relative z-10">Minted</span>
                        {/* Chrome Texture Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent bg-clip-text text-transparent opacity-80 pointer-events-none">Minted</div>
                    </motion.h1>
                </div>
            </div>

            {/* Scroll Button */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
            >
                <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Scroll</span>
                <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#39ff14] animate-scroll-line" />
                </div>
            </motion.div>
        </section>
    );
};

const Manifesto = () => (
    <section className="py-40 bg-[#0D0D0F] px-8 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto text-center border-y border-white/5 py-40 relative">
            {/* Geometric Overlays */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#39ff14]/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#39ff14]/30" />

            <div className="mb-20">
                <span className="text-[#39ff14] font-bold text-[10px] tracking-[0.5em] uppercase flex items-center justify-center gap-4">
                    •••••••• WHAT IS NOTEN
                </span>
            </div>

            <h2 className="font-archivo text-3xl md:text-6xl text-white leading-tight max-w-5xl mx-auto uppercase">
                Beyond <Cpu className="inline w-10 h-10 text-[#7B2FFF] mx-2" /> Possession <br />
                Into Identity <Layers className="inline w-10 h-10 text-[#00E5FF] mx-2" /> Mint the <br />
                Future <Zap className="inline w-10 h-10 text-[#39ff14] mx-2" /> of Digital <br />
                Fashion with Noten.
            </h2>
        </div>
    </section>
);

const Features = () => (
    <section className="py-40 bg-[#0D0D0F] px-8 md:px-16 lg:px-32 relative font-space-grotesk">
        {/* Deep Aura Background */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-[#7B2FFF]/5 via-[#00E5FF]/5 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                <div>
                    <span className="text-[#39ff14] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block">Engineered Legacy</span>
                    <h3 className="font-archivo text-5xl md:text-7xl text-white uppercase leading-tight">
                        The Web3 <br /> <span className="text-white/20">Brand Engine</span>
                    </h3>
                </div>
                <div className="w-[1px] h-20 bg-white/10 hidden md:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { title: "Collaborate", icon: Cpu, desc: "Building bridges between heritage craftsmanship and digital identity.", color: "#7B2FFF" },
                    { title: "Tokenize", icon: Repeat, desc: "Asset-backed streetwear drops secured by high-fidelity blockchain protocols.", color: "#00E5FF" },
                    { title: "Evolve", icon: Zap, desc: "Your avatar becomes a canvas. Wear the future of cultural expression.", color: "#39ff14" }
                ].map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="group relative h-[450px] bg-white/5 backdrop-blur-3xl rounded-[40px] p-12 border border-white/5 overflow-hidden transition-all duration-500"
                    >
                        {/* Hover Spotlight */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-20 h-20 bg-black/40 rounded-[28px] border border-white/10 flex items-center justify-center p-5">
                                <f.icon className="w-full h-full text-white group-hover:scale-110 transition-transform duration-500" style={{ color: f.color }} />
                            </div>

                            <div>
                                <h4 className="font-archivo text-3xl text-white uppercase mb-6">{f.title}</h4>
                                <p className="text-white/40 text-sm leading-relaxed tracking-wide">{f.desc}</p>
                            </div>
                        </div>

                        {/* Animated Background Mesh (Only on hover) */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-f.color opacity-0 group-hover:opacity-10 blur-[80px] transition-all duration-700" style={{ backgroundColor: f.color }} />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Squad = () => (
    <section className="py-40 bg-[#0D0D0F] px-8 md:px-16 lg:px-32 relative overflow-hidden font-space-grotesk">
        <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-32">
                <h3 className="font-archivo text-2xl text-white/40 uppercase mb-4">Meet The</h3>
                <h2 className="font-archivo text-7xl md:text-[10rem] text-white leading-none uppercase">Squad.</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { name: "Suho", title: "Lead Architect", img: "/noten_squad_1_1772077164730.png", color: "#7B2FFF" },
                    { name: "Yubico", title: "Digital Weaver", img: "/noten_squad_2_1772077261916.png", color: "#00E5FF" },
                    { name: "Bazos", title: "Strategy Node", img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80", color: "#FFB300" },
                    { name: "Andre", title: "Culture Core", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80", color: "#39ff14" }
                ].map((m, i) => (
                    <motion.div
                        key={i}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ delay: i * 0.15 }}
                        className="group relative cursor-pointer"
                    >
                        <div className="aspect-[3/4] rounded-[40px] overflow-hidden bg-black border border-white/5 relative z-10 shadow-2xl">
                            <img
                                src={m.img}
                                alt={m.name}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            {/* Individual Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                            <div className="absolute inset-0 bg-m.color opacity-0 group-hover:opacity-40 transition-opacity blur-3xl -z-10" style={{ backgroundColor: m.color }} />
                        </div>

                        <div className="mt-8 px-4">
                            <h4 className="font-archivo text-2xl text-white mb-2 uppercase group-hover:text-[#39ff14] transition-colors">{m.name}</h4>
                            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold italic">{m.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState(0);

    const questions = [
        { q: "What are NFTs and how do they work?", a: "NFTs on Noten are digital certificates of ownership for physical streetwear assets, secured by the Ethereum blockchain." },
        { q: "How can I purchase one of your drops?", a: "Drops happen seasonally. You need a connected Web3 wallet and sufficient ETH for gas and the asset purchase." },
        { q: "What is the utility behind your collection?", a: "Every Noten asset grants access to our VR lookbooks, physical 1:1 redeems, and future brand governance." },
        { q: "What are the benefits of being a holder?", a: "Holders receive early access to collaborative drops and private cultural events globally." }
    ];

    return (
        <section className="py-40 bg-[#0D0D0F] px-8 md:px-16 lg:px-32 relative font-space-grotesk">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <div>
                    <span className="text-[#39ff14] text-[10px] tracking-[0.4em] font-bold uppercase mb-4 block">Common Questions</span>
                    <h2 className="font-archivo text-6xl md:text-8xl text-white uppercase mb-20 leading-[0.9]">The <br /> <span className="italic text-white/20">Facts.</span></h2>
                </div>

                <div className="flex flex-col">
                    {questions.map((q, i) => (
                        <div key={i} className="group border-b border-white/5 last:border-0">
                            <button
                                onClick={() => setOpen(open === i ? -1 : i)}
                                className="w-full py-10 flex items-center justify-between text-left group"
                            >
                                <span className="text-xl md:text-2xl text-white group-hover:text-[#39ff14] transition-colors font-medium">
                                    {q.q}
                                </span>
                                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${open === i ? 'bg-[#39ff14] border-[#39ff14]' : ''}`}>
                                    {open === i ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-white group-hover:text-[#39ff14]" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 text-white/40 text-lg font-light leading-relaxed max-w-lg">
                                            {q.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-[#0D0D0F] text-white pt-40 pb-12 px-8 md:px-16 font-space-grotesk border-t border-white/5">
        <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32">
                <div className="lg:col-span-1">
                    <h2 className="text-4xl font-archivo italic mb-10 text-white">Noten</h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-10 font-light italic max-w-xs">
                        Refining the intersection of physical streetwear and the immutable ledger of human cultural expression.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#7B2FFF] transition-all"><Twitter className="w-4 h-4" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#39ff14] transition-all"><ExternalLink className="w-4 h-4" /></Link>
                    </div>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#39ff14] mb-10">Network</h6>
                    <ul className="flex flex-col gap-6 text-[11px] text-white/50 tracking-widest font-bold uppercase">
                        <li><Link href="/demo/noten/collections" className="hover:text-white transition-colors">The Ticker</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Marketplace</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Governance</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Whitepaper</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#39ff14] mb-10">Protocols</h6>
                    <ul className="flex flex-col gap-6 text-[11px] text-white/50 tracking-widest font-bold uppercase">
                        <li><Link href="/demo/noten/about" className="hover:text-white transition-colors">Identity</Link></li>
                        <li><Link href="/demo/noten/contact" className="hover:text-white transition-colors">Node Support</Link></li>
                        <li><Link href="/demo/noten/privacy" className="hover:text-white transition-colors">Privacy Directive</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Security Audit</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#39ff14] mb-10">Signal</h6>
                    <p className="text-white/40 text-xs mb-8 leading-relaxed font-light italic">Join the broadcast for seasonal encrypted drops.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Wallet@Noten.ETH"
                            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#39ff14] transition-all text-xs font-light"
                        />
                        <button className="absolute right-0 top-4 text-[#39ff14] hover:scale-125 transition-all"><ArrowRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] font-black text-white/10 border-t border-white/5 pt-12">
                <p>© 2026 Noten Protocol. Decrypted & Verified.</p>
                <div className="flex gap-10">
                    <Link href="/demo/noten/privacy" className="hover:text-white transition-colors">Terms of Use</Link>
                    <Link href="/demo/noten/privacy" className="hover:text-white transition-colors">Data Sovereignity</Link>
                </div>
            </div>
        </div>
    </footer>
);

export default function NotenHomePage() {
    return (
        <main className="bg-[#0D0D0F] min-h-screen selection:bg-[#39ff14] selection:text-black">
            <Navbar />
            <Hero />
            <Manifesto />
            <Features />
            <Squad />
            <FAQ />

            {/* CTA Interstitial */}
            <section className="py-40 bg-gradient-to-b from-[#0D0D0F] to-[#7B2FFF]/20 px-8 text-center font-space-grotesk overflow-hidden">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="font-archivo text-5xl md:text-[12rem] text-white leading-none uppercase mb-12">Enter <br /> The Void.</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
                        <button className="w-full sm:w-auto px-16 py-6 bg-white text-black font-archivo text-xs uppercase tracking-[0.3em] hover:bg-[#39ff14] transition-all">Connect Wallet</button>
                        <button className="w-full sm:w-auto px-16 py-6 border border-white/20 text-white font-archivo text-xs uppercase tracking-[0.3em] hover:bg-white/5 transition-all">Explore Marketplace</button>
                    </div>
                </motion.div>
            </section>

            <Footer />

            <style jsx global>{`
                @keyframes scroll-line {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
                .animate-scroll-line {
                    animation: scroll-line 2s infinite linear;
                }
                .font-space-grotesk { font-family: var(--font-space-grotesk); }
                .font-archivo { font-family: var(--font-archivo); }
                .glass-2 {
                    background: rgba(13, 11, 26, 0.65);
                    backdrop-filter: blur(24px) saturate(160%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .glass-3 {
                    background: rgba(7, 6, 15, 0.4);
                    backdrop-filter: blur(40px) saturate(180%);
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s infinite linear;
                }
            `}</style>
        </main>
    );
}
