"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

export const Footer = () => (
    <footer className="bg-[#0A0A0A] text-white pt-40 pb-12 px-8 md:px-16 font-montserrat">
        <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32 border-b border-white/5 pb-32">
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-cormorant italic mb-10 lowercase tracking-tighter">Regalia</h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-10 font-light italic">
                        Building a bridge between the heritage of craftsmanship and the infinity of digital expression.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Instagram className="w-4 h-4" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Facebook className="w-4 h-4" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Twitter className="w-4 h-4" /></Link>
                    </div>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Boutique</h6>
                    <ul className="flex flex-col gap-6 text-xs text-white/50 tracking-widest font-light">
                        <li><Link href="/demo/regalia/collections" className="hover:text-white transition-colors">The Archive</Link></li>
                        <li><Link href="/demo/regalia" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Men's Editorial</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Bespoke Services</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Support</h6>
                    <ul className="flex flex-col gap-6 text-xs text-white/50 tracking-widest font-light">
                        <li><Link href="/demo/regalia/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/demo/regalia/contact" className="hover:text-white transition-colors">Concierge</Link></li>
                        <li><Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Inner Circle</h6>
                    <p className="text-white/40 text-xs mb-8 leading-relaxed font-light italic">Join for early access to our seasonal archives.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all text-xs font-light"
                        />
                        <button className="absolute right-0 top-4 text-[#D4AF37] hover:tracking-[0.2em] transition-all"><ArrowRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
                <p>© 2026 Regalia Luxury House. All Rights Reserved.</p>
                <div className="flex gap-10">
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Privacy Directive</Link>
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </div>
    </footer>
);
