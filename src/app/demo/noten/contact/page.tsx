"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, Terminal } from "lucide-react";

export default function NotenContactPage() {
    return (
        <main className="bg-[#0D0D0F] min-h-screen text-white font-space-grotesk">
            <Navbar />

            <section className="pt-60 pb-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div>
                        <span className="text-[#39ff14] text-[10px] tracking-[0.5em] font-bold uppercase mb-4 block">Node Support</span>
                        <h1 className="font-archivo text-6xl md:text-[10rem] uppercase leading-none mb-12">Connect.</h1>
                        <p className="text-white/40 text-lg font-light leading-relaxed mb-16 max-w-sm italic">
                            For collaborations, tailored drops, or node failures, transmit your signal through our encrypted portal.
                        </p>

                        <div className="flex flex-col gap-6 font-archivo text-white/60">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <Terminal className="w-5 h-5 text-[#7B2FFF] group-hover:text-[#39ff14] transition-colors" />
                                <span className="text-xs uppercase tracking-widest">Protocol-ID: 77892-XT</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <Terminal className="w-5 h-5 text-[#00E5FF] group-hover:text-[#39ff14] transition-colors" />
                                <span className="text-xs uppercase tracking-widest">Signal@Noten-Protocol.ETH</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-12 md:p-20 rounded-[60px] border border-white/5 backdrop-blur-3xl shadow-2xl relative">
                        {/* Decorative Scanner Line */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#39ff14] to-transparent animate-scanner opacity-50" />

                        <div className="flex flex-col gap-10">
                            <div className="relative">
                                <label className="text-[10px] uppercase font-black text-[#39ff14] mb-4 block tracking-[0.2em]">Signal Subject</label>
                                <input className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl outline-none focus:border-[#39ff14] transition-all text-white font-light" placeholder="Drop Collaboration" />
                            </div>
                            <div className="relative">
                                <label className="text-[10px] uppercase font-black text-[#39ff14] mb-4 block tracking-[0.2em]">Wallet Address / ENS</label>
                                <input className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl outline-none focus:border-[#39ff14] transition-all text-white font-light" placeholder="0x... or name.eth" />
                            </div>
                            <div className="relative">
                                <label className="text-[10px] uppercase font-black text-[#39ff14] mb-4 block tracking-[0.2em]">Transmission</label>
                                <textarea rows={4} className="w-full bg-black/40 border border-white/10 p-6 rounded-2xl outline-none focus:border-[#39ff14] transition-all text-white font-light resize-none" placeholder="Enter your encrypted message..." />
                            </div>
                            <button className="w-full py-6 bg-white text-black font-archivo text-[10px] uppercase tracking-[0.4em] rounded-2xl flex items-center justify-center gap-4 hover:bg-[#39ff14] transition-all shadow-2xl overflow-hidden relative group">
                                <span className="relative z-10">Transmit Signal</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @keyframes scanner {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
                .animate-scanner {
                    animation: scanner 4s infinite linear;
                }
            `}</style>
        </main>
    );
}
