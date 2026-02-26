"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Heart,
    Wind,
    Sun,
    Sparkles,
    ArrowRight,
    MapPin,
    Clock,
    Instagram,
    Facebook
} from "lucide-react";

// --- COMPONENTS ---

function Nav() {
    return (
        <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-16 z-50 bg-[#FDFBF7]/40 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-[#EBD9D1]" />
                <span className="font-syne font-bold text-2xl tracking-[0.2em] text-[#7A6E65] uppercase">Aura</span>
            </div>
            <div className="hidden md:flex items-center gap-12">
                {['Sanctuary', 'Rituals', 'Journal', 'Experience'].map(item => (
                    <Link key={item} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#7A6E65]/40 hover:text-[#7A6E65] transition-colors font-mono">
                        {item}
                    </Link>
                ))}
            </div>
            <button className="px-8 py-3 rounded-full border border-[#EBD9D1] text-[#7A6E65] text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#EBD9D1] hover:text-[#FDFBF7] transition-all duration-500">
                Book Session
            </button>
        </nav>
    );
}

function SanctuaryCard({ title, desc, img, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 group"
        >
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden relative">
                <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-[#EBD9D1]/10 opacity-40 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="px-4">
                <h3 className="text-3xl font-syne font-bold text-[#7A6E65] mb-4">{title}</h3>
                <p className="text-sm text-[#A89F95] leading-relaxed font-light mb-6 max-w-[320px]">{desc}</p>
                <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-[#EBD9D1] group-hover:text-[#7A6E65] transition-colors">
                    Explore <ArrowRight className="w-3 h-3" />
                </button>
            </div>
        </motion.div>
    );
}

// --- MAIN PAGE ---

export default function AuraWellness() {
    return (
        <div className="bg-[#FDFBF7] text-[#7A6E65] font-sans selection:bg-[#EBD9D1] selection:text-white overflow-hidden">

            {/* Organic Background Shapes */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div
                    animate={{
                        translateY: [0, -40, 0],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#EBD9D1]/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        translateX: [0, 40, 0],
                        rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#CED4AF]/15 blur-[100px] rounded-full"
                />
            </div>

            <Nav />

            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-8 relative">
                <div className="text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="mb-12 inline-block p-4 rounded-full border border-[#EBD9D1]/40"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#EBD9D1]/20 flex items-center justify-center animate-pulse">
                            <Wind className="w-6 h-6 text-[#EBD9D1]" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="text-[clamp(3rem,10vw,8rem)] font-syne font-extrabold leading-[1.1] text-[#7A6E65] tracking-tight mb-8"
                    >
                        FIND YOUR <br /> <span className="italic font-light text-[#EBD9D1]">INNER LIGHT.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="max-w-[500px] mx-auto text-lg font-light text-[#A89F95] leading-relaxed mb-12"
                    >
                        Aury Sanctuary is a holisitic wellness collective dedicated to the art of presence, healing, and mindful replenishment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <button className="px-12 py-5 rounded-full bg-[#7A6E65] text-[#FDFBF7] text-xs font-black uppercase tracking-[0.3em] hover:bg-[#EBD9D1] hover:scale-105 transition-all shadow-[0_20px_60px_rgba(122,110,101,0.2)]">
                            Reserve Your Retreat
                        </button>
                    </motion.div>
                </div>

                {/* Floating Icons Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-[30%] left-[15%] opacity-20"><Heart className="w-8 h-8" /></motion.div>
                    <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-[40%] right-[10%] opacity-20"><Sparkles className="w-8 h-8" /></motion.div>
                    <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-[20%] left-[20%] opacity-20"><Sun className="w-8 h-8" /></motion.div>
                </div>
            </section>

            {/* RITUALS SECTION */}
            <section className="py-40 px-16 lg:px-32 max-w-[1440px] mx-auto bg-white/40 backdrop-blur-3xl rounded-[100px] mb-40 relative z-10 border border-white/40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#EBD9D1]">Ritual 01</span>
                        <h2 className="text-4xl font-syne font-bold text-[#7A6E65]">Mindful Morning Meditation</h2>
                        <p className="text-[#A89F95] leading-relaxed font-light">Awaken your senses with guided breathwork and the soft resonance of singing bowls.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#EBD9D1]">Ritual 02</span>
                        <h2 className="text-4xl font-syne font-bold text-[#7A6E65]">Organic Skin Restoration</h2>
                        <p className="text-[#A89F95] leading-relaxed font-light">Botanical-led treatments designed to nourish your cells and revive Your natural glow.</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#EBD9D1]">Ritual 03</span>
                        <h2 className="text-4xl font-syne font-bold text-[#7A6E65]">Evening Wind-Down Session</h2>
                        <p className="text-[#A89F95] leading-relaxed font-light">Release the day&apos;s tension with restorative yoga and somatic movement practices.</p>
                    </div>
                </div>
            </section>

            {/* GALLERY SECTION */}
            <section className="px-8 pb-40">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <SanctuaryCard
                        title="THE GARDEN ROOM"
                        desc="Sunlit spaces filled with native flora and the soft trickle of moving water."
                        img="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
                        delay={0}
                    />
                    <div className="md:pt-40">
                        <SanctuaryCard
                            title="THERMAL WATERS"
                            desc="Deep mineral baths kept at the perfect temperature to soothe muscular fatigue."
                            img="https://images.unsplash.com/photo-1540555700478-4be289fbecef"
                            delay={0.2}
                        />
                    </div>
                    <SanctuaryCard
                        title="SOMATIC STUDIO"
                        desc="A dedicated space for movement, expression, and the practice of pure presence."
                        img="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0"
                        delay={0.4}
                    />
                </div>
            </section>

            {/* NEWSLETTER */}
            <section className="py-40 bg-[#EBD9D1]/20 flex flex-col items-center text-center px-8">
                <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-syne font-black text-[#7A6E65] mb-8">JOIN THE CIRCLE.</h2>
                <p className="max-w-[480px] text-[#A89F95] leading-relaxed mb-12">Receive weekly rituals, mindful insights, and exclusive invitations to our private retreats.</p>
                <div className="w-full max-w-[500px] relative">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full h-16 px-8 rounded-full bg-white/60 border border-[#EBD9D1]/40 outline-none focus:border-[#7A6E65] transition-all font-light"
                    />
                    <button className="absolute right-2 top-2 h-12 px-8 rounded-full bg-[#7A6E65] text-white text-[10px] uppercase tracking-widest font-black">
                        Subscribe
                    </button>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 px-16 bg-[#FDFBF7]">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20 border-t border-[#7A6E65]/5 pt-20">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2">
                            <Sun className="w-6 h-6 text-[#EBD9D1]" />
                            <span className="font-syne font-bold text-2xl tracking-[0.2em] text-[#7A6E65] uppercase">Aura</span>
                        </div>
                        <p className="max-w-[280px] text-sm text-[#A89F95] leading-relaxed font-light">Aural Sanctuary is a mindful wellness center based in the heart of Sedona, Arizona.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full border border-[#EBD9D1] flex items-center justify-center hover:bg-[#EBD9D1] transition-all"><Instagram className="w-4 h-4" /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full border border-[#EBD9D1] flex items-center justify-center hover:bg-[#EBD9D1] transition-all"><Facebook className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-[10px] uppercase tracking-widest font-black">EXPLORE</h4>
                            <ul className="flex flex-col gap-4 text-sm text-[#A89F95] font-light">
                                <li>The Sanctuary</li>
                                <li>Member Rituals</li>
                                <li>Experience Spa</li>
                                <li>Retreat Journal</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-[10px] uppercase tracking-widest font-black">SUPPORT</h4>
                            <ul className="flex flex-col gap-4 text-sm text-[#A89F95] font-light">
                                <li>Find Us</li>
                                <li>Contact Team</li>
                                <li>Member Login</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] uppercase tracking-widest font-black">VISIT US</h4>
                        <div className="flex flex-col gap-4 text-sm text-[#A89F95] font-light">
                            <div className="flex items-center gap-4">
                                <MapPin className="w-4 h-4 text-[#EBD9D1]" />
                                <span>821 Healing Creek, Sedona, AZ</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Clock className="w-4 h-4 text-[#EBD9D1]" />
                                <span>Open Daily: 06:00 — 22:00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 text-center text-[10px] uppercase tracking-[0.4em] font-black text-[#A89F95]/50">
                    © 2026 Aura Wellness. Breathe in. Let go.
                </div>
            </footer>
        </div>
    );
}
