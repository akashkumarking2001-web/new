"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Wallet, Zap, Twitter, Mail, Menu, X } from "lucide-react";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/demo/noten" },
        { name: "Discover", href: "/demo/noten/collections" },
        { name: "Squad", href: "/demo/noten/about" },
        { name: "Contact", href: "/demo/noten/contact" },
    ];

    return (
        <>
            <nav className={`fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-[100] px-8 py-4 flex items-center justify-between transition-all duration-500 rounded-full border border-white/10 ${scrolled ? 'bg-black/60 backdrop-blur-2xl py-3 border-white/20' : 'bg-transparent'}`}>
                <Link href="/demo/noten" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-[#39ff14] rounded-full flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                        <Zap className="w-4 h-4 text-black" />
                    </div>
                    <span className="font-archivo text-xl text-white tracking-tighter uppercase">Noten</span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 hover:text-[#39ff14] transition-all relative group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#39ff14] group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                    <button className="px-6 py-2.5 bg-gradient-to-r from-[#7B2FFF] to-[#00E5FF] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(123,47,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                        <Wallet className="w-3.5 h-3.5" />
                        Connect
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[110] bg-[#0D0D0F] p-12 flex flex-col justify-between font-space-grotesk"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="font-archivo text-2xl text-white">Noten</h2>
                            <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8 text-white" /></button>
                        </div>
                        <div className="flex flex-col gap-10">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-5xl font-archivo text-white uppercase hover:text-[#39ff14] transition-colors">{link.name}</Link>
                            ))}
                        </div>
                        <div className="flex gap-6">
                            <Twitter className="w-8 h-8 text-white/40" />
                            <Mail className="w-8 h-8 text-white/40" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
