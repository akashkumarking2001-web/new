"use client";

import React from "react";
import Link from "next/link";
import { Twitter, ExternalLink, ArrowRight } from "lucide-react";

export const Footer = () => (
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
