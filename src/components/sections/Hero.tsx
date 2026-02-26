"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Hero3D from "./Hero3D";
import LeadFormModal from "../ui/LeadFormModal";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ecgPathRef = useRef<SVGPathElement>(null);
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

    useEffect(() => {
        if (ecgPathRef.current) {
            const length = ecgPathRef.current.getTotalLength();
            gsap.set(ecgPathRef.current, { strokeDasharray: length, strokeDashoffset: length });

            const tl = gsap.timeline({ repeat: -1 });
            tl.to(ecgPathRef.current, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" })
                .to(ecgPathRef.current, { opacity: 0.6, duration: 0.5, yoyo: true, repeat: 1 })
                .set(ecgPathRef.current, { strokeDashoffset: length });
        }
    }, []);

    const textVariants: import("framer-motion").Variants = {
        hidden: { y: "110%" },
        visible: (custom: number) => ({
            y: "0%",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: custom }
        })
    };

    return (
        <section ref={containerRef} className="relative min-h-screen pt-32 pb-16 flex items-center overflow-hidden" id="hero">
            <div className="w-full max-w-[1440px] mx-auto px-[max(24px,4vw)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <div className="space-y-8 mt-12 lg:mt-0">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 glass-1 rounded-full border border-pulse-cyan/30"
                    >
                        <span className="w-2 h-2 rounded-full bg-pulse-orange animate-pulse" />
                        <span className="font-mono text-[12px] text-text-primary uppercase tracking-wider">Now Accepting New Projects</span>
                    </motion.div>

                    {/* Pre-line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="font-mono text-[13px] text-pulse-cyan tracking-[0.15em]"
                    >
                        &lt; THE PULSE OF INNOVATION /&gt;
                    </motion.div>

                    {/* Headline */}
                    <div className="font-syne font-extrabold text-hero uppercase flex flex-col items-start leading-[0.92]">
                        <div className="overflow-hidden pb-2">
                            <motion.div custom={0.6} variants={textVariants} initial="hidden" animate="visible">
                                We Build
                            </motion.div>
                        </div>
                        <div className="overflow-hidden pb-1">
                            <motion.div custom={0.9} variants={textVariants} initial="hidden" animate="visible" className="text-gradient">
                                Digital
                            </motion.div>
                        </div>
                        <div className="overflow-hidden pb-1">
                            <motion.div custom={1.2} variants={textVariants} initial="hidden" animate="visible">
                                Heartbeats
                            </motion.div>
                        </div>
                    </div>

                    {/* Sub-Headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="font-sans text-body-lg text-text-secondary max-w-[520px]"
                    >
                        From high-performance web platforms to native iOS & Android experiences — AxoSoul engineers digital products that pulse with purpose, perform without compromise, and scale without limits.
                    </motion.p>

                    {/* Value Propositions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.9, duration: 0.8, staggerChildren: 0.2 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4 max-w-[550px]"
                    >
                        {[
                            { title: "AI-Driven Solutions", desc: "We integrate cutting-edge AI to future-proof your business." },
                            { title: "Rapid Delivery", desc: "Get your high-quality project delivered in just 1-2 weeks." },
                            { title: "Iconic Design", desc: "Custom-built, premium UI/UX tailored to your brand identity." }
                        ].map((stat, i) => (
                            <motion.div key={i} className="glass-1 p-4 rounded-xl hover:-translate-y-1 transition-transform border border-white/5 flex-1 min-w-[200px]">
                                <div className="font-syne font-bold text-[15px] text-gradient mb-1">{stat.title}</div>
                                <div className="font-sans text-[12px] text-text-secondary leading-snug">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ECG Line */}
                    <div className="w-full max-w-[400px] h-12 relative overflow-visible mt-6">
                        <svg width="100%" height="100%" viewBox="0 0 400 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                            <path
                                ref={ecgPathRef}
                                d="M0,25 L120,25 L160,10 L200,40 L240,25 L320,25 L360,15 L400,25 L480,25"
                                stroke="url(#hero-ecg-grad)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <defs>
                                <linearGradient id="hero-ecg-grad" x1="0" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#00C8FF" />
                                    <stop offset="0.5" stopColor="#7B2FE8" />
                                    <stop offset="1" stopColor="#FF6B35" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.6 }}
                        className="flex flex-wrap items-center gap-6 pt-4"
                    >
                        <button
                            onClick={() => setIsLeadFormOpen(true)}
                            className="h-[56px] px-9 rounded-full bg-axo-gradient font-sans font-semibold text-[15px] text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(123,47,232,0.4)] relative overflow-hidden group"
                        >
                            <span className="relative z-10">Start Your Project →</span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="gradient-border flex items-center h-[56px] px-9 rounded-[28px] font-sans font-medium text-[15px] group overflow-hidden">
                            <span className="relative z-10 text-white group-hover:text-pulse-cyan transition-colors flex items-center gap-2">
                                <img src="https://img.icons8.com/fluency/48/whatsapp.png" alt="WhatsApp" className="w-6 h-6 object-contain drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]" />
                                Chat on WhatsApp
                            </span>
                            <div className="absolute inset-0 bg-axo-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-15 z-0" />
                        </a>
                    </motion.div>

                </div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="relative w-full aspect-square lg:aspect-auto h-[400px] lg:h-full lg:min-h-[600px] cursor-none"
                >
                    <Hero3D />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
            >
                <span className="font-mono text-[11px] text-text-secondary uppercase [writing-mode:vertical-lr] tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-[60px] bg-text-tertiary relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 60, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-[8px] bg-pulse-cyan absolute top-0"
                    />
                </div>
            </motion.div>

            {/* Modal */}
            <LeadFormModal isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />
        </section>
    );
}
