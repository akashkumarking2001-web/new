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
                        <div className="font-syne font-bold text-2xl text-white flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                                <path d="M0 20 H10 L15 5 L20 35 L25 20 H40" stroke="#00C8FF" strokeWidth="3" />
                            </svg>
                            AxoSoul
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
                                <Link key={m} href="/services" className="font-sans text-[14px] text-text-secondary hover:text-pulse-cyan transition-colors">{m}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Company</h4>
                        <ul className="space-y-4 flex flex-col">
                            {["About AxoSoul", "Our Portfolio", "Case Studies", "Blog & Insights", "Careers", "Privacy Policy", "Terms of Service", "Refund Policy"].map(m => (
                                <Link key={m} href="#" className="font-sans text-[14px] text-text-secondary hover:text-pulse-violet transition-colors">{m}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h4 className="font-sans font-semibold text-white mb-6 uppercase tracking-wider text-[13px]">Contact</h4>
                        <div className="space-y-5 font-sans text-[14px] text-text-secondary">
                            <a href="mailto:hello@axosoul.in" className="block hover:text-pulse-orange transition-colors">hello@axosoul.in</a>

                            <a href="#" className="flex items-center gap-2 text-pulse-cyan hover:text-white transition-colors">
                                <span className="w-8 h-8 rounded-full bg-pulse-cyan/10 flex items-center justify-center text-pulse-cyan text-[16px]">📱</span>
                                WhatsApp Us
                            </a>

                            <div className="pt-2 text-[13px]">
                                <p className="mb-1 text-white/50">Available: Mon–Sat, 9AM–8PM IST</p>
                                <p className="text-white/50">International clients: Flexible timezone availability</p>
                            </div>

                            <p className="pt-2 text-white/60">
                                New Delhi, India<br />
                                Operating Globally
                            </p>

                            <button className="pt-4 text-pulse-cyan hover:text-white transition-colors font-medium text-[14px] border-b border-pulse-cyan/30 hover:border-white">
                                Book a Free Call →
                            </button>
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
