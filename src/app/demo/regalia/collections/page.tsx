"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChevronRight } from "lucide-react";

const products = [
    { id: 1, name: "The Midnight Peacoat", price: "1,450", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80", cat: "Outerwear" },
    { id: 2, name: "Silk Obscura Dress", price: "2,200", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80", cat: "Dresses" },
    { id: 3, name: "Architectural Blazer", price: "1,100", img: "https://images.unsplash.com/photo-1548126032-276a60fc61c0?auto=format&fit=crop&q=80", cat: "Tailoring" },
    { id: 4, name: "Gold Foil Accessories", price: "450", img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cf4?auto=format&fit=crop&q=80", cat: "Jewelry" },
    { id: 5, name: "Vanguard Trousers", price: "850", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80", cat: "Tailoring" },
    { id: 6, name: "Obsidian Shell", price: "1,800", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80", cat: "Outerwear" }
];

export default function CollectionsPage() {
    return (
        <main className="bg-white min-h-screen font-montserrat">
            <Navbar scrolled={true} />

            <section className="pt-48 pb-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold block mb-4">Winter 2026</span>
                            <h1 className="text-6xl font-cormorant font-light text-[#0A0A0A]">The Archive.</h1>
                        </div>
                        <div className="flex gap-10 border-b border-[#0A0A0A]/10 pb-4">
                            {['All', 'Outerwear', 'Tailoring', 'Dresses'].map(f => (
                                <button key={f} className="text-[10px] uppercase tracking-widest font-bold hover:text-[#D4AF37] transition-all">{f}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
                        {products.map((p, i) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden mb-8 rounded-2xl border border-black/5 shadow-2xl shadow-black/5 bg-[#F5F5F0]">
                                    <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                                    <button className="absolute bottom-8 left-1/2 -translate-x-1/2 px-10 py-4 bg-white text-black text-[9px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">Quick View</button>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-2">{p.cat}</p>
                                    <h3 className="text-2xl font-cormorant font-normal text-[#0A0A0A] mb-2">{p.name}</h3>
                                    <p className="text-sm font-light text-[#0A0A0A]/40">${p.price}</p>
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
