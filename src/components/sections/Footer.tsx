"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkedinLogo, GithubLogo, XLogo, InstagramLogo, BehanceLogo } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="relative bg-[#020205] pt-16 z-10 w-full overflow-hidden">
            {/* Animated gradient top line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-axo-gradient opacity-80" />

            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative">

                {/* Newsletter Strip */}
                <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl glass-2 mb-20 gap-8">
                    <div>
                        <h3 className="font-syne font-bold text-2xl text-white mb-2">Stay Connected to the Pulse</h3>
                        <p className="font-sans text-body text-text-secondary">Weekly tech insights for digital builders.</p>
                    </div>

                    <div className="flex w-full md:w-auto flex-col sm:flex-row gap-4 relative">
                        <input type="email" placeholder="hello@axosoul.in" className="h-[52px] bg-white/5 border border-white/10 rounded-full px-6 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors md:w-[320px]" />
                        <button className="h-[52px] px-8 rounded-full bg-axo-gradient font-sans font-medium text-white hover:scale-105 transition-transform flex-shrink-0">
                            Subscribe →
                        </button>
                    </div>
                </div>

                {/* 4 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {/* Col 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center">
                            <img
                                src="/AxoSoul.png"
                                alt="AxoSoul Logo"
                                className="h-[80px] w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            />
                        </div>
                        <p className="font-mono text-[12px] text-text-tertiary uppercase tracking-widest mt-2 block">The Pulse of Innovation</p>
                        <p className="font-sans text-[14px] text-text-secondary leading-relaxed">
                            We build digital products that work — for users, for businesses, and for the world they operate in.
                        </p>

                        <div className="flex gap-4 mt-4">
                            {[LinkedinLogo, GithubLogo, XLogo, InstagramLogo, BehanceLogo].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full glass-1 flex items-center justify-center text-text-secondary hover:text-white hover:bg-pulse-violet/20 hover:border-pulse-violet/40 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Services</h4>
                        <ul className="space-y-4 flex flex-col">
                            {["Web Development", "Mobile App Development (Android)", "Mobile App Development (iOS)", "Flutter Cross-Platform Apps", "UI/UX Design", "E-Commerce Development", "Digital Marketing", "AI Integration"].map(m => (
                                <Link key={m} href="/#services" className="font-sans text-[14px] text-text-secondary hover:text-pulse-cyan transition-colors">{m}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Company</h4>
                        <ul className="space-y-4 flex flex-col">
                            {[
                                { name: "About AxoSoul", link: "/#about" },
                                { name: "Our Portfolio", link: "/#portfolio" },
                                { name: "Case Studies", link: "/#portfolio" },
                                { name: "Blog & Insights", link: "/blog" },
                                { name: "Careers", link: "/#contact" },
                                { name: "Privacy Policy", link: "/" },
                                { name: "Terms of Service", link: "/" },
                                { name: "Refund Policy", link: "/" }
                            ].map(m => (
                                <Link key={m.name} href={m.link} className="font-sans text-[14px] text-text-secondary hover:text-pulse-violet transition-colors">{m.name}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Contact</h4>
                        <div className="space-y-5 font-sans text-[14px] text-text-secondary">
                            <a href="mailto:hello@axosoul.in" className="block hover:text-pulse-orange transition-colors">hello@axosoul.in</a>

                            <a href="https://wa.me/918610381533" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pulse-cyan hover:text-white transition-colors group">
                                <span className="w-8 h-8 rounded-full bg-pulse-cyan/10 flex items-center justify-center text-pulse-cyan text-[16px] group-hover:bg-pulse-cyan group-hover:text-black transition-all">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .006 5.408 0 12.049c0 2.123.554 4.197 1.608 6.075L0 24l6.135-1.61a11.82 11.82 0 005.918 1.57h.005c6.637 0 12.05-5.408 12.05-12.05a11.782 11.782 0 00-3.48-8.526z" />
                                    </svg>
                                </span>
                                +91 8610381533
                            </a>

                            <div className="pt-2 text-[13px]">
                                <p className="mb-1 text-white/50">Available: Mon–Sat, 9AM–8PM IST</p>
                                <p className="text-white/50">International clients: Flexible timezone availability</p>
                            </div>

                            <p className="pt-2 text-white/60">
                                Tenkasi, Tamil Nadu, India<br />
                                Operating Globally
                            </p>

                            <a href="https://wa.me/918610381533" target="_blank" rel="noopener noreferrer" className="pt-4 block text-pulse-cyan hover:text-white transition-colors font-medium text-[14px]">
                                <span className="border-b border-pulse-cyan/30 hover:border-white">Chat on WhatsApp →</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
                    <div>© 2025 AXOSOUL. ALL RIGHTS RESERVED.</div>
                    <div>DESIGNED & BUILT WITH ❤️ AND 10,000+ HOURS OF CRAFTSMANSHIP.</div>
                </div>

            </div>
        </footer>
    );
}
