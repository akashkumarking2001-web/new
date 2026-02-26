"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ShoppingBag,
    Search,
    Heart,
    Menu,
    X
} from "lucide-react";

export const Navbar = ({ scrolled: forceScrolled = false }) => {
    const [scrolled, setScrolled] = useState(forceScrolled);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50 || forceScrolled);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [forceScrolled]);

    const navLinks = [
        { name: "Home", href: "/demo/regalia" },
        { name: "Collections", href: "/demo/regalia/collections" },
        { name: "About", href: "/demo/regalia/about" },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-700">
                <nav className={`w-full py-6 px-8 md:px-16 flex items-center justify-between transition-all duration-700 font-montserrat ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-[#0A0A0A]/5 py-4 shadow-sm text-[#0A0A0A]' : 'bg-transparent text-white'}`}>
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-[#D4AF37] transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>
                    <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link href="/demo/regalia" className="absolute left-1/2 -translate-x-1/2">
                        <h1 className="text-3xl md:text-4xl font-cormorant font-normal italic lowercase tracking-tight">Regalia</h1>
                    </Link>
                    <div className="flex items-center gap-6">
                        <button className="hover:scale-110 transition-transform hidden sm:block"><Search className="w-4 h-4" /></button>
                        <button className="hover:scale-110 transition-transform hidden sm:block"><Heart className="w-4 h-4" /></button>
                        <button className="relative group hover:scale-110 transition-transform">
                            <ShoppingBag className="w-4 h-4" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] text-white text-[7px] flex items-center justify-center rounded-full font-bold">0</span>
                        </button>
                    </div>
                </nav>
            </div>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                        className="fixed inset-0 z-[110] bg-[#0A0A0A] text-white p-12 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-24">
                                <h2 className="text-3xl font-cormorant italic">Regalia</h2>
                                <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
                            </div>
                            <div className="flex flex-col gap-10">
                                {navLinks.map((link) => (
                                    <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-cormorant font-light hover:italic transition-all">{link.name}</Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
