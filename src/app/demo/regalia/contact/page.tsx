"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen font-montserrat">
            <Navbar scrolled={true} />

            <section className="pt-48 pb-40 px-8 md:px-16 lg:px-32">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold block mb-4">Concierge</span>
                        <h1 className="text-6xl md:text-8xl font-cormorant italic text-[#0A0A0A] mb-12">Connect.</h1>
                        <p className="text-[#0A0A0A]/60 text-lg font-light leading-relaxed mb-16 max-w-sm italic">
                            Whether you seek bespoke tailoring or membership in our inner circle, our concierge is standing by.
                        </p>

                        <div className="flex flex-col gap-10">
                            {[
                                { icon: MapPin, text: "Via Montenapoleone, 27, Milan, Italy" },
                                { icon: Phone, text: "+39 02 1234 5678" },
                                { icon: Mail, text: "concierge@regalia-archive.com" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6">
                                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                                    <span className="text-xs uppercase tracking-widest font-bold">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#F5F5F0] p-12 md:p-20 rounded-[40px] shadow-inner">
                        <div className="grid grid-cols-1 gap-12">
                            <div className="relative">
                                <label className="text-[9px] uppercase tracking-[0.3em] font-black text-[#D4AF37] absolute -top-3 left-4 bg-[#F5F5F0] px-2 z-10">Subject</label>
                                <input className="w-full bg-transparent border border-black/10 p-6 rounded-2xl outline-none focus:border-[#D4AF37] transition-all text-sm font-light" placeholder="Bespoke Request" />
                            </div>
                            <div className="relative">
                                <label className="text-[9px] uppercase tracking-[0.3em] font-black text-[#D4AF37] absolute -top-3 left-4 bg-[#F5F5F0] px-2 z-10">Full Name</label>
                                <input className="w-full bg-transparent border border-black/10 p-6 rounded-2xl outline-none focus:border-[#D4AF37] transition-all text-sm font-light" placeholder="Alexander McQueen" />
                            </div>
                            <div className="relative">
                                <label className="text-[9px] uppercase tracking-[0.3em] font-black text-[#D4AF37] absolute -top-3 left-4 bg-[#F5F5F0] px-2 z-10">Your Message</label>
                                <textarea rows={4} className="w-full bg-transparent border border-black/10 p-6 rounded-2xl outline-none focus:border-[#D4AF37] transition-all text-sm font-light resize-none" placeholder="Describe your vision..." />
                            </div>
                            <button className="w-full py-6 bg-[#0A0A0A] text-white text-[10px] uppercase tracking-[0.4em] font-black rounded-2xl flex items-center justify-center gap-4 hover:bg-[#D4AF37] transition-all shadow-2xl">
                                Send Message <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
