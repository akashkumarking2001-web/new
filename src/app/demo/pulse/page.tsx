"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Activity,
    Mic2,
    Music2,
    Radio,
    Share2,
    Download,
    Flame,
    User,
    Heart,
    ArrowRight
} from "lucide-react";

// --- COMPONENTS ---

function Nav() {
    return (
        <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50 bg-[#050505]/40 backdrop-blur-xl border-b border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF3333] flex items-center justify-center skew-x-[-12deg] shadow-[0_0_30px_rgba(255,51,51,0.4)]">
                    <Music2 className="w-6 h-6 text-black fill-current skew-x-[12deg]" />
                </div>
                <span className="font-syne font-black text-3xl tracking-tighter text-white uppercase italic">PULSE_</span>
            </div>

            <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
                {['Artists', 'Sounds', 'Studio', 'Gear'].map(item => (
                    <Link key={item} href="#" className="hover:text-[#FF3333] transition-colors">{item}</Link>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <button className="text-[10px] uppercase tracking-[0.2em] font-black text-white hover:text-[#FF3333] transition-colors">SignIn</button>
                <button className="px-8 py-3 bg-[#FF3333] text-black text-[10px] uppercase tracking-[0.2em] font-black hover:scale-105 transition-transform skew-x-[-12deg]">
                    <span className="skew-x-[12deg] block">Start Free</span>
                </button>
            </div>
        </nav>
    );
}

function Waveform() {
    return (
        <div className="flex items-end gap-[3px] h-32 w-full max-w-sm">
            {[...Array(40)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ height: [`${Math.random() * 80 + 20}%`, `${Math.random() * 80 + 20}%`] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-[#FF3333] to-[#FF3333]/20"
                />
            ))}
        </div>
    );
}

function SoundPackCard({ title, artist, img, genre }: any) {
    return (
        <div className="group relative aspect-square overflow-hidden bg-[#111] border border-white/5 hover:border-[#FF3333]/40 transition-all duration-500">
            <img src={img} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale hover:grayscale-0" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

            <div className="absolute top-6 left-6 flex flex-col gap-1 translate-x-[-20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <span className="bg-[#FF3333] text-black text-[8px] font-black px-3 py-1 uppercase italic tracking-widest">{genre}</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-syne font-black text-white italic uppercase tracking-tighter mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{title}</h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                    <span className="text-[10px] uppercase font-bold text-white/40 tracking-widest">{artist}</span>
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF3333] hover:text-black transition-all flex items-center justify-center">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full border-2 border-[#FF3333] flex items-center justify-center bg-black/40 backdrop-blur-sm -scale-0 group-hover:scale-100 transition-transform duration-700">
                    <Play className="w-6 h-6 fill-[#FF3333] text-[#FF3333] translate-x-1" />
                </div>
            </div>
        </div>
    );
}

// --- MAIN PAGE ---

export default function PulseStudio() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-[#FF3333] selection:text-black overflow-hidden relative">
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#FF3333]/5 blur-[160px] rounded-full opacity-40" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />
            </div>

            <Nav />

            {/* HERO SECTION */}
            <section className="min-h-screen pt-24 flex flex-col items-stretch">
                <div className="flex-1 flex flex-col md:flex-row items-stretch">
                    <div className="flex-[1.5] flex flex-col justify-center p-12 md:p-24 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#FF3333]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-[1.5s] ease-out-expo" />

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative z-10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Flame className="w-6 h-6 text-[#FF3333]" />
                                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#FF3333]">V1.4.2 ANALOG EMULATOR</span>
                            </div>
                            <h1 className="text-[clamp(4rem,12vw,13rem)] font-syne font-black leading-[0.8] tracking-tightest uppercase mb-16 italic">
                                FUEL THE <br /> <span className="text-transparent border-t-pulse-orange outline-text">STRENGTH.</span>
                            </h1>
                            <p className="max-w-[500px] text-lg text-white/40 leading-relaxed font-light mb-16">
                                High-fidelity analog soul meets gritty digital textures. Pulse is the ultimate sound design workspace for producers who demand intensity.
                            </p>
                            <div className="flex items-center gap-12">
                                <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-[#FF3333] transition-colors skew-x-[-12deg]">
                                    <span className="skew-x-[12deg] flex items-center gap-3">Exploration <ArrowRight className="w-4 h-4" /></span>
                                </button>
                                <Waveform />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 p-12 md:p-24 border-l border-white/5 flex flex-col justify-between bg-white/[0.01]">
                        <div>
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20 mb-12">Latest Release / 2026</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-6 items-center">
                                    <div className="w-16 h-16 bg-[#111] border border-white/10 flex items-center justify-center p-2">
                                        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-syne font-black italic uppercase tracking-tighter">GRIT_TEXTURES_VOL.1</p>
                                        <p className="text-[10px] uppercase tracking-widest text-[#FF3333] font-bold">2.4k Downloads</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-16 h-16 bg-[#111] border border-white/10 flex items-center justify-center p-2">
                                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d" className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-syne font-black italic uppercase tracking-tighter">ANALOG_SOUL_DRUMS</p>
                                        <p className="text-[10px] uppercase tracking-widest text-[#FF3333] font-bold">1.8k Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-2 p-8 bg-white/[0.02] border border-white/5 relative overflow-hidden mt-12">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                            <h3 className="text-sm font-black italic uppercase mb-6 flex items-center gap-3">
                                <Activity className="w-4 h-4 text-[#FF3333]" />
                                Real-time Input
                            </h3>
                            <div className="flex flex-col gap-4">
                                <div className="h-2 w-full bg-white/5 rounded-sm overflow-hidden flex">
                                    <motion.div animate={{ width: ['20%', '80%', '40%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-[#FF3333]" />
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-sm overflow-hidden flex">
                                    <motion.div animate={{ width: ['60%', '20%', '90%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-white/20" />
                                </div>
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Master_Gain Output Tracking: -12dB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELEASES GRID */}
            <section className="py-40 px-8">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#FF3333] mb-8 block">Exclusive Drops</span>
                            <h2 className="text-6xl md:text-8xl font-syne font-black italic uppercase tracking-tightest">THE PULSE LIST_</h2>
                        </div>
                        <p className="max-w-[340px] text-white/30 text-sm leading-relaxed font-light mb-4">
                            Access the sonic blueprint used by the industry&apos;s most disruptive producers. Raw, unfiltered, and royalty-free.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <SoundPackCard title="DARK_HARMONY" artist="VOID_UNIT" img="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" genre="TECHNO" />
                        <SoundPackCard title="GLITCH_SOUL" artist="NEON_AXO" img="https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1" genre="PHONK" />
                        <SoundPackCard title="ANALOG_DRIVE" artist="PULSE_GEN" img="https://images.unsplash.com/photo-1511379938547-c1f69419868d" genre="INDUSTRIAL" />
                        <SoundPackCard title="DREAM_LOGIC" artist="LUMINA_X" img="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e" genre="AMBIENT" />
                    </div>
                </div>
            </section>

            {/* FOOTER PLAYER */}
            <div className="fixed bottom-0 left-0 w-full h-24 bg-black border-t border-white/10 z-[100] flex items-center px-12 gap-8 shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
                <div className="hidden md:flex items-center gap-4 w-64">
                    <div className="w-12 h-12 bg-[#222] border border-white/10 p-1">
                        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                        <span className="text-xs font-black uppercase italic truncate">GRIT_TEXTURES_04</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-mono">VOID_UNIT</span>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-8">
                        <SkipBack className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
                        <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                            {isPlaying ? <Pause className="w-5 h-5 text-black fill-current" /> : <Play className="w-5 h-5 text-black fill-current translate-x-0.5" />}
                        </button>
                        <SkipForward className="w-4 h-4 text-white/40 hover:text-white cursor-pointer" />
                    </div>
                    <div className="w-full max-w-xl h-1 bg-white/5 relative overflow-hidden rounded-full">
                        <motion.div animate={{ width: isPlaying ? '100%' : '35%' }} transition={{ duration: 10, ease: 'linear' }} className="h-full bg-[#FF3333]" />
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-6 w-64 justify-end">
                    <Heart className="w-4 h-4 text-white/40 hover:text-[#FF3333] transition-colors cursor-pointer" />
                    <Share2 className="w-4 h-4 text-white/40 hover:text-white transition-colors cursor-pointer" />
                    <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-white/40" />
                        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-white/40" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 51, 51, 0.4);
          color: transparent;
        }
        .tracking-tightest { letter-spacing: -0.06em; }
        .font-mono { font-family: var(--font-jetbrains-mono), monospace; }
      `}</style>
        </div>
    );
}
