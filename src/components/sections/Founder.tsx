"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkedinLogo, IdentificationCard, Rocket, ShieldCheck, ChartLineUp, Cpu, Globe, AppWindow, Database } from "@phosphor-icons/react";
import Image from "next/image";

const TECH_STACK_GROUPS = [
    {
        title: "Software Architecture",
        icon: Globe,
        items: ["Custom CRM Development", "Enterprise ERP Solutions"],
        accent: "#00C8FF"
    },
    {
        title: "Mobile Ecosystems",
        icon: AppWindow,
        items: ["Native Android & iOS Apps", "High-Performance Mobile UI"],
        accent: "#7B2FE8"
    },
    {
        title: "AI & Automation",
        icon: Cpu,
        items: ["Neural Network Integration", "Automated Marketing Workflows"],
        accent: "#FF6B35"
    },
    {
        title: "Full-Stack Mastery",
        icon: Database,
        items: ["React.js", "Node.js", "Python", "Supabase/MySQL"],
        accent: "#3DDC84"
    }
];

const TRUST_PILLARS = [
    {
        title: "Data-First Approach",
        description: "Every line of code is written with data security and scalability in mind.",
        icon: ShieldCheck
    },
    {
        title: "5+ Years Market Insight",
        description: "I don't just build apps; I understand the digital marketing funnel required to make them successful.",
        icon: ChartLineUp
    },
    {
        title: "Transparent Lifecycle",
        description: "From wireframing to deployment, we maintain 100% transparency in our development sprint.",
        icon: IdentificationCard
    }
];

export default function Founder() {
    return (
        <section className="py-24 relative overflow-hidden bg-void" id="founder">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pulse-violet/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pulse-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side: Photo & Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[450px] sticky top-24"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-pulse-cyan/30 to-pulse-violet/30 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]" />
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 rounded-[32px]" />
                            <div className="relative glass-1 p-2 rounded-[32px] border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/founder_portrait_final_v3.png"
                                    alt="Visionary Architect"
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto rounded-[24px] object-cover transition-all duration-700 group-hover:scale-105 shadow-2xl"
                                />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="glass-3 p-4 rounded-2xl flex items-center justify-between border border-white/10">
                                        <div>
                                            <p className="font-syne font-bold text-white text-lg">The Visionary</p>
                                            <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Architect & Founder</p>
                                        </div>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] transition-colors group/link"
                                        >
                                            <LinkedinLogo size={20} weight="fill" className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* R&D Lab Callout */}
                        <div className="mt-8 glass-2 p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Rocket size={80} weight="duotone" />
                            </div>
                            <h4 className="font-syne font-bold text-gradient text-xl mb-3">Proprietary Research & Development</h4>
                            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                                Before launching AxoSoul, I dedicated years to building a &apos;Digital Lab&apos;—developing over 50+ high-logic prototypes. These are not just demos; they are the blueprints of our proven technical capability.
                            </p>
                            <Link href="/contact">
                                <button className="flex items-center gap-2 text-xs font-mono text-pulse-cyan uppercase tracking-widest hover:gap-4 transition-all group-hover:text-white">
                                    EXPLORE THE LAB <span className="text-lg">→</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.3em] mb-4 uppercase font-bold">&lt; THE_FOUNDER_PERSPECTIVE /&gt;</div>
                            <h2 className="font-syne font-bold text-h1 text-white mb-6 leading-tight">
                                Visionary Architect behind <span className="text-gradient">AI-Driven Digital Transformations.</span>
                            </h2>
                            <h3 className="font-sans font-medium text-xl text-text-primary mb-8 leading-relaxed max-w-[800px] border-l-2 border-pulse-cyan pl-6 italic">
                                &quot;Bridging the gap between complex Software Engineering and scalable Business Growth.&quot;
                            </h3>

                            <div className="space-y-6 mb-12">
                                <p className="font-sans text-lg text-text-secondary leading-relaxed">
                                    With over 5+ years of deep-rooted experience in the digital marketing ecosystem and a passion for high-performance software architecture, I have pioneered the development of complex CRM systems, AI-integrated platforms, and scalable MLM solutions.
                                </p>
                                <p className="font-sans text-lg text-text-secondary leading-relaxed">
                                    My expertise lies in transforming abstract business challenges into robust, code-driven realities. As a Full-Stack Vibe Coder, I leverage cutting-edge AI tools and Web3 protocols to deliver high-performance solutions that scale with your ambitions.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mb-10"
                            >
                                <span className="font-signature text-5xl text-white/50 select-none">Akash Kumar</span>
                                <div className="h-px w-32 bg-gradient-to-r from-pulse-cyan/50 to-transparent mt-2" />
                            </motion.div>

                            <div className="flex flex-wrap gap-4 mb-14">
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-8 py-4 bg-white text-black font-bold rounded-2xl shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:bg-pulse-cyan hover:text-white transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Connect with Founder
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </motion.button>
                                </Link>
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-8 py-4 glass-2 text-white font-bold rounded-2xl border border-white/10 hover:border-white/30 transition-all font-sans flex items-center justify-center"
                                    >
                                        Download Roadmap
                                    </motion.button>
                                </Link>
                            </div>

                            {/* Tech Stack Grid */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
                            >
                                {TECH_STACK_GROUPS.map((group, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            show: { opacity: 1, y: 0 }
                                        }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="glass-1 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all cursor-default"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 shadow-inner">
                                                <group.icon size={22} color={group.accent} weight="duotone" />
                                            </div>
                                            <h4 className="font-syne font-bold text-white tracking-wide">{group.title}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {group.items.map((item, j) => (
                                                <li key={j} className="text-sm text-text-secondary flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: group.accent }} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Trust Pillars */}
                        <div className="mb-16">
                            <h4 className="font-syne font-bold text-white text-2xl mb-8">Pillars of Excellence</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {TRUST_PILLARS.map((pillar, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <pillar.icon size={32} className="text-pulse-cyan" weight="duotone" />
                                        <div>
                                            <h5 className="font-syne font-bold text-white mb-2">{pillar.title}</h5>
                                            <p className="text-[13px] text-text-tertiary leading-relaxed">{pillar.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Signature & CTA */}
                        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <div className="font-syne font-black text-4xl text-white italic mb-2 tracking-tighter opacity-90" style={{ fontFamily: 'var(--font-dancing-script), cursive' }}>
                                    Founder&apos;s Signature
                                </div>
                                <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em]">Personal Guarantee of Quality</p>
                            </div>

                            <Link
                                href="/contact"
                                className="group relative px-8 py-5 bg-white text-black font-syne font-bold rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] transition-all transform active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Schedule a Strategic Tech Audit
                                    <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-pulse-cyan via-white to-pulse-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Strip */}
                <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: "5+", label: "Years Experience" },
                        { value: "50+", label: "Lab Projects" },
                        { value: "10+", label: "AI Models Integrated" },
                        { value: "100%", label: "Architecture Scalability" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="font-syne font-bold text-4xl text-white mb-2">{stat.value}</div>
                            <div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
