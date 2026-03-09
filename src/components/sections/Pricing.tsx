"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

const TIERS = [
    {
        name: "FOUNDATION",
        price: "₹4,000",
        us: "$49",
        target: "Best for startups and small businesses",
        features: [
            "5-page responsive website OR basic mobile app",
            "UI design included",
            "SEO foundation setup",
            "30 days post-launch support",
            "Basic brand kit (logo + colors)",
            "2 rounds of revisions",
            "Source code delivered"
        ],
        timeline: "2–4 weeks",
        cta: "Chat on WhatsApp →",
        popular: false,
        delay: 0
    },
    {
        name: "GROWTH",
        price: "₹45,000",
        us: "$799",
        target: "Best for growing businesses ready to compete",
        features: [
            "Full-stack web app OR mobile app (Flutter)",
            "Backend API development",
            "Database design & setup",
            "3rd party integrations (payments, maps)",
            "CI/CD pipeline + staging environment",
            "3 months post-launch support",
            "5 revision rounds",
            "Performance audit certificate (95+)"
        ],
        timeline: "5–10 weeks",
        cta: "Chat on WhatsApp →",
        popular: true,
        delay: 0.1
    },
    {
        name: "ENTERPRISE",
        price: "Custom",
        us: "Custom",
        target: "For funded startups, enterprises, complex products",
        features: [
            "Dedicated project team (2 devs + designer + PM)",
            "Native Android + iOS apps",
            "Custom integrations (ERP, CRM, AI/ML)",
            "Digital marketing setup + first campaign",
            "6 months post-launch maintenance",
            "Unlimited revisions during development",
            "Weekly strategy calls with senior team",
            "SLA with guaranteed response times"
        ],
        timeline: "Flexible",
        cta: "Chat on WhatsApp",
        popular: false,
        delay: 0.2
    }
];

export default function Pricing() {
    const [isRetainer, setIsRetainer] = useState(false);
    const [tiers, setTiers] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/pricing')
            .then(res => res.json())
            .then(data => setTiers(data))
            .catch(console.error);
    }, []);

    return (
        <section className="py-14 relative z-10 w-full overflow-hidden" id="pricing">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative z-20">

                {/* Header */}
                <div className="text-center mb-16 max-w-[800px] mx-auto">
                    <h2 className="font-syne font-bold text-h2 text-white mb-6">
                        Transparent Investment. Measurable Returns.
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary leading-relaxed mb-10">
                        By combining AI-augmented development workflows with lean, specialist team structures, we&apos;ve eliminated the overhead that inflates traditional agency invoices. The savings pass directly to you. What you get is Silicon Valley-level execution without the Silicon Valley price tag.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={`font-sans text-sm ${!isRetainer ? 'text-white' : 'text-text-secondary'}`}>One-Time Project</span>
                        <button
                            className="w-[50px] h-[28px] rounded-full bg-surface border border-white/10 relative p-1"
                            onClick={() => setIsRetainer(!isRetainer)}
                        >
                            <motion.div
                                className="w-5 h-5 bg-pulse-cyan rounded-full shadow-[0_0_10px_#00C8FF]"
                                initial={false}
                                animate={{ x: isRetainer ? 20 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </button>
                        <span className={`font-sans text-sm ${isRetainer ? 'text-white' : 'text-text-secondary'}`}>Retainer / Sprint</span>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-[1200px] mx-auto">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: tier.delay, duration: 0.5 }}
                            className={`relative glass-2 p-8 rounded-[24px] flex flex-col h-full ${tier.popular ? 'gradient-border lg:-mt-8 lg:mb-8 bg-surface-raised/80 z-20 shadow-[0_0_40px_rgba(123,47,232,0.15)]' : 'z-10'}`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-axo-gradient text-[11px] font-mono font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,107,53,0.4)]">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="font-syne font-bold text-[20px] text-white tracking-widest uppercase mb-2 text-center">{tier.name}</h3>
                            <p className="font-sans text-[13px] text-text-secondary text-center mb-6 min-h-[40px]">{tier.target}</p>

                            <div className="text-center mb-8">
                                <div className="font-mono text-[12px] text-pulse-cyan tracking-wider uppercase mb-1">Starting From</div>
                                <div className="font-syne font-extrabold text-[40px] text-white">
                                    {tier.price}
                                </div>
                                <div className="font-sans text-[14px] text-text-tertiary">~ {tier.us} USD</div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((f: string, idx: number) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check size={18} weight="bold" className="text-pulse-violet mt-0.5 flex-shrink-0" />
                                        <span className="font-sans text-[14px] text-text-primary/90">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-white/10 mt-auto">
                                <div className="flex items-center justify-between font-mono text-[11px] text-text-secondary uppercase mb-6">
                                    <span>Timeline</span>
                                    <span className="text-white">{tier.timeline}</span>
                                </div>
                                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-full font-sans font-semibold text-[15px] transition-all duration-300 flex items-center justify-center ${tier.popular ? 'bg-axo-gradient text-white shadow-[0_0_20px_rgba(123,47,232,0.3)] hover:scale-[1.02]' : 'glass-1 border border-white/10 text-white hover:border-pulse-cyan hover:text-pulse-cyan'}`}>
                                    {tier.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Marketing Pitch */}
                <div className="max-w-[800px] mx-auto mt-20 text-center glass-1 p-8 rounded-3xl border border-white/10">
                    <p className="font-sans text-[18px] text-text-primary leading-relaxed">
                        <span className="text-pulse-cyan font-semibold">While other agencies charge premium rates for basic sites</span>, we provide high-end, iconic website designs at an affordable price point. Premium quality is no longer a luxury; it’s a standard for your business.
                    </p>
                </div>

            </div>
        </section>
    );
}
