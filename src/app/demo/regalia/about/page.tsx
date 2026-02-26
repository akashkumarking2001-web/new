"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-white min-h-screen font-montserrat">
            <Navbar scrolled={true} />

            <section className="pt-40 pb-20 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold block mb-10"
                    >
                        Our Genesis
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-cormorant font-light text-[#0A0A0A] leading-[0.9] mb-24"
                    >
                        An Architecture of <br /> <span className="italic">Excellence.</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="aspect-[4/5] bg-[#F5F5F0] overflow-hidden rounded-[40px]"
                        >
                            <img src="https://images.unsplash.com/photo-1549497538-306228437cae?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="pt-10 lg:pt-40">
                            <h2 className="text-4xl font-cormorant italic text-[#0A0A0A] mb-12">The House of Regalia was born from a singular vision: to treat digital space as a permanent physical gallery.</h2>
                            <p className="text-[#0A0A0A]/60 text-lg leading-relaxed font-light mb-10">
                                Since our whispers began in 2026, we have dedicated ourselves to the pursuit of the "Infinity Stitch"—a design philosophy where every line of code and every seam in our fabric serves a purpose beyond the aesthetic.
                            </p>
                            <p className="text-[#0A0A0A]/60 text-lg leading-relaxed font-light">
                                We don't believe in seasons; we believe in eras. Our collections are modular experiments in tailoring, utilizing computational geometry to ensure a perfect drape on any silhouette.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-[#0A0A0A] text-white">
                <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
                    <h3 className="text-3xl md:text-5xl font-cormorant font-light mb-12 leading-relaxed italic">"True luxury is the ability to exist in silence while commanding the room."</h3>
                    <div className="w-20 h-px bg-[#D4AF37] mx-auto" />
                </div>
            </section>

            <section className="py-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
                    <div>
                        <h4 className="font-cormorant text-3xl mb-6">Craftsmanship</h4>
                        <p className="text-sm text-[#0A0A0A]/60 leading-loose uppercase tracking-[0.1em]">Every garment is hand-finished in our Milanese ateliers, blending traditional techniques with sustainable laser-cutting technology.</p>
                    </div>
                    <div>
                        <h4 className="font-cormorant text-3xl mb-6">Philosophy</h4>
                        <p className="text-sm text-[#0A0A0A]/60 leading-loose uppercase tracking-[0.1em]">We embrace the concept of 'Ma'—the space between objects. Our designs breathe, allowing the wearer to define the garment.</p>
                    </div>
                    <div>
                        <h4 className="font-cormorant text-3xl mb-6">Futurism</h4>
                        <p className="text-sm text-[#0A0A0A]/60 leading-loose uppercase tracking-[0.1em]">Each piece carries a unique NFT-based Regalia Code, certifying its origin and providing exclusive access to our VR lookbooks.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
