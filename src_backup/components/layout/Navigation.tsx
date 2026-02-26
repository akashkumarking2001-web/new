"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScroll, motion, useTransform } from "framer-motion";
import { Globe, DeviceMobile, Stack, TrendUp, List } from "@phosphor-icons/react";

function Logo() {
    return (
        <div className="relative flex items-center group cursor-none">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                {/* Simplified heartbeat line */}
                <path
                    d="M0 20 H30 L40 5 L50 35 L60 20 H80"
                    stroke="url(#axo-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-pulse-violet transition-colors duration-500"
                />
                {/* AxoSoul text */}
                <text
                    x="85"
                    y="26"
                    fill="#F0EEFF"
                    className="font-syne font-bold text-2xl tracking-wide group-hover:fill-[url(#axo-grad-text)] transition-all duration-300"
                >
                    AxoSoul
                </text>
                <defs>
                    <linearGradient id="axo-grad" x1="0" y1="20" x2="80" y2="20" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C8FF" />
                        <stop offset="0.5" stopColor="#7B2FE8" />
                        <stop offset="1" stopColor="#FF6B35" />
                    </linearGradient>
                    <linearGradient id="axo-grad-text" x1="85" y1="26" x2="180" y2="26" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C8FF" />
                        <stop offset="0.5" stopColor="#7B2FE8" />
                        <stop offset="1" stopColor="#FF6B35" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default function Navigation() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex items-center ${scrolled ? "h-[72px] glass-1" : "h-[90px] bg-transparent"
                } px-[max(24px,4vw)]`}
            onMouseLeave={() => setServicesOpen(false)}
        >
            <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between">
                {/* Left: Logo */}
                <Link href="/">
                    <Logo />
                </Link>

                {/* Center: Links */}
                <nav className="hidden lg:flex items-center gap-8 font-sans font-medium text-[15px] text-text-secondary">
                    <Link href="/" className="hover:text-white transition-colors relative group">
                        Home
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-axo-gradient transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <div
                        className="flex items-center gap-1 hover:text-white transition-colors cursor-none relative group h-full py-6"
                        onMouseEnter={() => setServicesOpen(true)}
                    >
                        Services
                        <span className="text-[10px] opacity-70">▼</span>
                        <span className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-axo-gradient transition-all duration-300 group-hover:w-full" />
                    </div>
                    <Link href="/about" className="hover:text-white transition-colors relative group">
                        About Us
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-axo-gradient transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <Link href="/portfolio" className="hover:text-white transition-colors relative group">
                        Portfolio
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-axo-gradient transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <Link href="/contact" className="hover:text-white transition-colors relative group">
                        Contact
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-axo-gradient transition-all duration-300 group-hover:w-full" />
                    </Link>
                </nav>

                {/* Right: CTA */}
                <div className="hidden lg:block relative group">
                    <Link href="/contact" className="gradient-border px-6 py-[10px] text-[14px] font-sans font-medium relative block overflow-hidden rounded-[20px]">
                        <span className="relative z-10 text-white">Get a Free Quote</span>
                        <div className="absolute inset-0 bg-axo-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-15 z-0" />
                    </Link>
                </div>

                {/* Mobile Menu */}
                <button className="lg:hidden text-white" aria-label="Menu">
                    <List size={28} />
                </button>
            </div>

            {/* Services Mega Dropdown */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: servicesOpen ? "auto" : 0,
                    opacity: servicesOpen ? 1 : 0,
                }}
                className="absolute top-full left-0 w-full glass-3 overflow-hidden border-t-0"
            >
                <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-8 p-10 pt-8 pb-12">
                    {/* Col 1 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Globe size={24} color="#00C8FF" weight="duotone" />
                            <h4 className="font-sans font-medium text-white">Web Development</h4>
                        </div>
                        <ul className="space-y-3 pl-9">
                            <li className="text-text-secondary hover:text-pulse-cyan transition-colors text-sm cursor-none">Custom Web Apps</li>
                            <li className="text-text-secondary hover:text-pulse-cyan transition-colors text-sm cursor-none">E-commerce Platforms</li>
                            <li className="text-text-secondary hover:text-pulse-cyan transition-colors text-sm cursor-none">Headless CMS</li>
                        </ul>
                    </div>
                    {/* Col 2 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <DeviceMobile size={24} color="#7B2FE8" weight="duotone" />
                            <h4 className="font-sans font-medium text-white">Mobile Apps</h4>
                        </div>
                        <ul className="space-y-3 pl-9">
                            <li className="text-text-secondary hover:text-pulse-violet transition-colors text-sm cursor-none">iOS Native (Swift)</li>
                            <li className="text-text-secondary hover:text-pulse-violet transition-colors text-sm cursor-none">Android (Kotlin)</li>
                            <li className="text-text-secondary hover:text-pulse-violet transition-colors text-sm cursor-none">Cross-Platform (Flutter)</li>
                        </ul>
                    </div>
                    {/* Col 3 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Stack size={24} color="#FF6B35" weight="duotone" />
                            <h4 className="font-sans font-medium text-white">UI/UX Design</h4>
                        </div>
                        <ul className="space-y-3 pl-9">
                            <li className="text-text-secondary hover:text-pulse-orange transition-colors text-sm cursor-none">Prototyping & Wireframes</li>
                            <li className="text-text-secondary hover:text-pulse-orange transition-colors text-sm cursor-none">User Research</li>
                            <li className="text-text-secondary hover:text-pulse-orange transition-colors text-sm cursor-none">Design Systems</li>
                        </ul>
                    </div>
                    {/* Col 4 */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <TrendUp size={24} color="#3B6EFF" weight="duotone" />
                            <h4 className="font-sans font-medium text-white">Digital Marketing</h4>
                        </div>
                        <ul className="space-y-3 pl-9">
                            <li className="text-text-secondary hover:text-pulse-blue transition-colors text-sm cursor-none">Technical SEO</li>
                            <li className="text-text-secondary hover:text-pulse-blue transition-colors text-sm cursor-none">Performance Marketing</li>
                            <li className="text-text-secondary hover:text-pulse-blue transition-colors text-sm cursor-none">Conversion Opt.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}
