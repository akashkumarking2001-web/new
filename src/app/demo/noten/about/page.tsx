"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export default function NotenAboutPage() {
    return (
        <main className="bg-[#0D0D0F] min-h-screen text-white font-space-grotesk">
            <Navbar />

            <section className="pt-60 pb-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#39ff14] text-[10px] tracking-[0.5em] font-bold uppercase mb-8 block"
                    >
                        •••••••• IDENTITY PROTOCOL
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-archivo text-6xl md:text-[10rem] uppercase leading-none mb-32"
                    >
                        Human <br /> <span className="text-white/20 italic">Encrypted.</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                        <div className="aspect-square bg-white/5 rounded-[60px] overflow-hidden border border-white/10 relative group">
                            <img src="/noten_robot_hero_1772076986171.png" className="w-full h-full object-contain scale-90 group-hover:scale-100 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#7B2FFF]/20 to-transparent" />
                        </div>
                        <div className="pt-20">
                            <h2 className="font-archivo text-4xl uppercase mb-12 leading-tight">We are building the bridge between your physical drape and your high-fidelity digital projection.</h2>
                            <p className="text-white/40 text-lg leading-relaxed mb-10 font-light italic">
                                Noten is not a brand; it is a node. In the decentralized future, how you represent yourself in virtual environments is as critical as the threads you wear in the streets.
                            </p>
                            <p className="text-white/40 text-lg leading-relaxed font-light mb-20">
                                Every piece of Noten apparel is paired with an immutable cryptographic twin. This 'Infinity Stitch' ensures that whether you are in the Shibuya crossing or a metaverse exhibit, your identity remains un-diluted and sovereign.
                            </p>
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <h4 className="font-archivo text-[#39ff14] text-xl mb-4">80k+</h4>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Encrypted Nodes</p>
                                </div>
                                <div>
                                    <h4 className="font-archivo text-[#00E5FF] text-xl mb-4">12k+</h4>
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Physical Redeems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
