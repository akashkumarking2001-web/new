"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CloudCheck, LockKey, Browser } from "@phosphor-icons/react";

const PILLARS = [
    {
        icon: ShieldCheck,
        title: "SOC2 & HIPAA Ready",
        desc: "We build systems capable of passing stringent security audits from day one. Data encryption at rest and in transit.",
        color: "#00C8FF"
    },
    {
        icon: CloudCheck,
        title: "AWS / Vercel Edge",
        desc: "Zero-downtime deployments via global edge networks. 99.99% uptime guarantee for all enterprise tiers.",
        color: "#7B2FE8"
    },
    {
        icon: LockKey,
        title: "Row-Level Security",
        desc: "Database architecture implementing rigorous RLS via Supabase/PostgreSQL, ensuring data isolation.",
        color: "#FF6B35"
    },
    {
        icon: Browser,
        title: "WCAG 2.1 AA",
        desc: "Strict adherence to accessibility standards. Because great software works for everyone.",
        color: "#3B6EFF"
    }
];

export default function TrustSecurity() {
    return (
        <section className="py-24 relative z-10 w-full overflow-hidden" id="security">
            {/* Background Graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] opacity-[0.03] pointer-events-none flex items-center justify-center">
                <ShieldCheck size={800} weight="fill" />
            </div>

            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative z-20 flex flex-col md:flex-row gap-16 items-center">

                {/* Left Content */}
                <div className="md:w-1/2">
                    <div className="inline-flex px-3 py-1 mb-6 rounded-full glass-1 border border-pulse-cyan/30 text-pulse-cyan font-mono text-[11px] items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pulse-cyan animate-pulse" />
                        Enterprise Grade
                    </div>

                    <h2 className="font-syne font-bold text-h2 text-white mb-6">
                        Hardened Architecture
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-8">
                        Your product is only as good as the infrastructure it runs on. We don&apos;t build fragile MVPs. We engineer production-ready systems designed to scale from 100 to 1,000,000 users without breaking a sweat.
                    </p>

                    <div className="flex gap-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A0A0E] glass-2 flex items-center justify-center relative overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?u=dev${i}`} alt="Dev" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0E] bg-pulse-violet flex items-center justify-center text-[11px] font-mono text-white relative z-10">
                                +12
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-syne font-bold text-white text-[14px]">Certified Engineers</div>
                            <div className="font-sans text-[12px] text-text-secondary">AWS, GCP & Azure</div>
                        </div>
                    </div>
                </div>

                {/* Right Grid */}
                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PILLARS.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="glass-2 p-6 rounded-[20px] relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <p.icon size={100} weight="fill" color={p.color} />
                            </div>

                            <div className="w-10 h-10 rounded-full glass-1 flex items-center justify-center mb-4 border border-white/10" style={{ color: p.color }}>
                                <p.icon size={20} weight="duotone" />
                            </div>

                            <h3 className="font-syne font-bold text-[16px] text-white mb-2">{p.title}</h3>
                            <p className="font-sans text-[13px] text-text-secondary leading-relaxed">
                                {p.desc}
                            </p>

                            {/* Hover line */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--pulse-cyan)] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300" style={{ backgroundImage: `linear-gradient(to right, transparent, ${p.color}, transparent)` }} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
