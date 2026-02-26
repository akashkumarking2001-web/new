"use client";

import { motion } from "framer-motion";

const PROJECTS = [
    {
        name: "NEXLINK CRM",
        cat: "Web Application",
        challenge: "Sales team tracking 400+ leads across 12 spreadsheets. 7-hour average response time to new leads.",
        solution: "Custom CRM with lead pipeline automation, AI-driven priority scoring, and mobile-first design for field reps.",
        result: "📈 83% reduction in lead response time | 2.4x conversion",
        tags: ["React", "Node.js", "PostgreSQL"],
        accent: "#00C8FF"
    },
    {
        name: "DELIVR — LOGISTICS",
        cat: "Mobile App",
        challenge: "Paper-based delivery management for 200+ drivers losing ₹18L/month in operational inefficiency.",
        solution: "Real-time GPS tracking app, automated route optimization, barcode scan delivery confirmation.",
        result: "🚀 91% operational cost reduction",
        tags: ["Flutter", "Firebase", "Maps API"],
        accent: "#7B2FE8"
    },
    {
        name: "SOLARIQ — SAAS",
        cat: "Web Application",
        challenge: "Solar farm operators had no unified view. Data lived in 5 different systems.",
        solution: "Unified SaaS dashboard: real-time energy monitoring, predictive alerts by site.",
        result: "⚡ Managing 450MW of solar capacity",
        tags: ["Next.js", "TypeScript", "Supabase"],
        accent: "#FF6B35"
    }
];

export default function Portfolio() {
    return (
        <section className="py-24 relative z-10" id="portfolio">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)]">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="font-syne font-bold text-h2 text-white mb-4">
                        Work That Speaks
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary">
                        Selected projects from our portfolio. Every number is real.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-grid relative">
                    {PROJECTS.map((p, i) => (
                        <motion.div
                            key={i}
                            className="glass-1 p-8 rounded-[24px] relative group overflow-hidden"
                            style={{ transformStyle: "preserve-3d" }}
                            whileHover={{ rotateY: -2, rotateX: 2, z: 20 }}
                        >
                            {/* Mockup Placeholder */}
                            <div className="w-full aspect-video bg-surface-raised rounded-xl mb-6 relative overflow-hidden border border-white/5 flex items-center justify-center">
                                <span className="font-syne font-bold text-2xl text-white/10">{p.name}</span>
                                {/* Decorative overlay matching accent */}
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundColor: p.accent }} />
                            </div>

                            <div className="mb-2 font-mono text-[11px] uppercase tracking-wider" style={{ color: p.accent }}>{p.cat}</div>
                            <h3 className="font-syne font-bold text-xl text-white mb-4">{p.name}</h3>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.tags.map(t => (
                                    <span key={t} className="px-3 py-1 bg-surface-raised rounded-full text-[11px] font-mono text-text-secondary border border-white/10">{t}</span>
                                ))}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 glass-3 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 p-8 flex flex-col justify-center border-t border-[var(--border-subtle)]">
                                <div className="font-mono text-[10px] text-text-secondary uppercase mb-2">The Challenge</div>
                                <p className="font-sans text-[13px] text-white/90 mb-4 leading-relaxed">{p.challenge}</p>

                                <div className="font-mono text-[10px] text-text-secondary uppercase mb-2">Our Solution</div>
                                <p className="font-sans text-[13px] text-white/90 mb-6 leading-relaxed">{p.solution}</p>

                                <div className="font-syne font-bold text-[18px] mb-4" style={{ color: p.accent }}>{p.result}</div>

                                <button className="text-[13px] font-sans font-medium text-white group/btn flex items-center gap-2 mt-auto">
                                    View Full Case Study <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
