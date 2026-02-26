"use client";

import { motion } from "framer-motion";
import { Code, SealCheck, Lightning, ShieldCheck, ChatCircle, GlobeHemisphereWest } from "@phosphor-icons/react";

const REASONS = [
    {
        icon: Code,
        color: "#00C8FF",
        title: "100% Code Ownership",
        body: "Every project ends with a full Git repository delivery — source code, documentation, deployment scripts, environment configs. Your product is yours. No platform dependency. No monthly code-rental. No hostage situations. Ever.",
    },
    {
        icon: SealCheck,
        color: "#7B2FE8",
        title: "Milestone-Based Payments",
        body: "Pay only for what you've approved. Our payment structure follows project milestones — no full upfront payment, no hidden fees, no surprise invoices. Your quote is your final price unless you change the scope.",
    },
    {
        icon: Lightning,
        color: "#FF6B35",
        title: "Fast Delivery, Zero Compromises",
        body: "We use AI-augmented development workflows, component libraries, and battle-tested architecture patterns to move fast — without moving sloppy. Typical web projects: 3–5 weeks. Mobile apps: 8–14 weeks. Always with daily updates on progress.",
    },
    {
        icon: ShieldCheck,
        color: "#3B6EFF",
        title: "6 Months Free Maintenance",
        body: "Every project includes 6 months of complimentary technical maintenance after launch — bug fixes, dependency updates, minor content changes, and performance monitoring. Because launch day is day one, not the finish line.",
    },
    {
        icon: ChatCircle,
        color: "#00C8FF",
        title: "Real Humans, Real Responses",
        body: "No ticket queues. No chatbots. Direct Slack/WhatsApp channel with your project team during active development. Response time commitment: < 4 hours during business hours, critical issues within 30 minutes.",
    },
    {
        icon: GlobeHemisphereWest,
        color: "#7B2FE8",
        title: "International-Grade Quality",
        body: "We build to the same performance and accessibility standards as the world's top digital agencies — WCAG 2.1 AA compliance, Core Web Vitals optimization, multi-region CDN deployment. Global quality, transparent cost.",
    }
];

export default function WhyChoose() {
    return (
        <section className="py-14 relative z-10 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)]">

                {/* Header */}
                <div className="text-center mb-16 max-w-[800px] mx-auto">
                    <h2 className="font-syne font-bold text-h2 text-white mb-6 text-center">
                        Why AxoSoul Over Anyone Else?
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary">
                        Not marketing copy. Actual, verifiable commitments backed by our process and our track record.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="glass-2 p-8 rounded-[20px] group relative overflow-hidden"
                        >
                            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full glass-1 border border-white/5" style={{ color: reason.color }}>
                                <reason.icon size={28} weight="duotone" />
                            </div>

                            <h3 className="font-syne font-bold text-xl text-white mb-4">
                                {reason.title}
                            </h3>
                            <p className="font-sans text-[15px] text-text-secondary leading-relaxed">
                                {reason.body}
                            </p>

                            {/* Hover bottom pulse */}
                            <div className="absolute bottom-0 left-0 w-full h-1 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, transparent, ${reason.color}, transparent)` }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
