"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

const assets = [
    { name: "Void Shell 01", type: "Outerwear", price: "0.45 ETH", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80" },
    { name: "Neon Node Vest", type: "Tactical", price: "0.22 ETH", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80" },
    { name: "Liquid Cyan Suit", type: "Full Body", price: "0.80 ETH", img: "https://images.unsplash.com/photo-1548126032-276a60fc61c0?auto=format&fit=crop&q=80" },
    { name: "Encryption Mask", type: "Accessory", price: "0.08 ETH", img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cf4?auto=format&fit=crop&q=80" },
];

export default function NotenCollectionsPage() {
    return (
        <main className="bg-[#0D0D0F] min-h-screen text-white font-space-grotesk">
            <Navbar />

            <section className="pt-60 pb-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
                        <div>
                            <span className="text-[#39ff14] text-[10px] tracking-[0.5em] font-bold uppercase mb-4 block">Archive Exhibit</span>
                            <h1 className="font-archivo text-6xl md:text-8xl uppercase leading-none">The Ticker.</h1>
                        </div>
                        <div className="flex gap-4">
                            {['Active', 'Pending', 'Burned'].map(f => (
                                <button key={f} className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-widest hover:border-[#39ff14] hover:text-[#39ff14] transition-all">{f}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {assets.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[3/4] bg-white/5 rounded-3xl overflow-hidden mb-6 border border-white/10 relative">
                                    <img src={a.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="px-8 py-3 bg-[#39ff14] text-black font-archivo text-[10px] uppercase">Bid Now</button>
                                    </div>
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[8px] uppercase font-bold tracking-widest">ERC-721</div>
                                </div>
                                <div className="px-2">
                                    <h3 className="font-archivo text-xl uppercase text-white group-hover:text-[#39ff14] transition-colors">{a.name}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-[10px] text-white/20 uppercase tracking-widest">{a.type}</span>
                                        <span className="text-[10px] text-[#00E5FF] font-bold">{a.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
