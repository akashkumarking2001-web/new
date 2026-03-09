"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, DeviceMobile, Palette, TrendUp } from "@phosphor-icons/react";

// Pure CSS/SVG animated scenes — zero WebGL contexts needed
function WebScene({ active }: { active: boolean }) {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Animated browser wireframe */}
            <motion.div
                className="relative"
                animate={{ rotateY: active ? 15 : 0, scale: active ? 1.05 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ perspective: 600 }}
            >
                <div className="w-[200px] h-[140px] border border-[#00C8FF]/40 rounded-lg relative bg-[#00C8FF]/5">
                    {/* Top bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#00C8FF]/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD166]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#06D6A0]/80" />
                    </div>
                    {/* Screen lines */}
                    <div className="p-3 space-y-1.5">
                        {[80, 60, 90, 50].map((w, i) => (
                            <motion.div
                                key={i}
                                className="h-1.5 rounded-full bg-[#00C8FF]/25"
                                style={{ width: `${w}%` }}
                                animate={{ opacity: active ? [0.3, 0.9, 0.3] : 0.25 }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            />
                        ))}
                    </div>
                    {/* Glow */}
                    <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "radial-gradient(circle at 50% 50%, #00C8FF22, transparent 70%)" }}
                        animate={{ opacity: active ? [0.5, 1, 0.5] : 0.3 }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
                {/* Floating nodes */}
                {[[-20, -15], [25, -20], [-15, 25]].map(([x, y], i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full border border-[#00C8FF]/60"
                        style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, background: "#00C8FF33" }}
                        animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2 + i, delay: i * 0.4, repeat: Infinity }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

function MobileScene({ active }: { active: boolean }) {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <motion.div
                className="flex items-center gap-6"
                animate={{ scale: active ? 1.05 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* Phone */}
                <div className="w-[72px] h-[130px] border-2 border-[#7B2FE8]/50 rounded-xl relative bg-[#7B2FE8]/5 flex flex-col">
                    <div className="w-8 h-1 bg-[#7B2FE8]/40 rounded-full mx-auto mt-2" />
                    <div className="flex-1 m-2 rounded-lg bg-[#7B2FE8]/10 flex flex-col gap-1.5 p-2">
                        {[70, 90, 50, 80].map((w, i) => (
                            <motion.div
                                key={i}
                                className="h-1 rounded-full bg-[#7B2FE8]/40"
                                style={{ width: `${w}%` }}
                                animate={{ opacity: active ? [0.4, 1, 0.4] : 0.4 }}
                                transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity }}
                            />
                        ))}
                    </div>
                    <div className="w-6 h-6 rounded-full border border-[#7B2FE8]/40 mx-auto mb-2" />
                </div>
                {/* Orbiting pills */}
                <div className="relative w-10 h-[120px] flex flex-col items-center justify-around">
                    {[{ c: "#3DDC84", l: "AOS" }, { c: "#FFFFFF", l: "iOS" }, { c: "#7B2FE8", l: "RN" }].map(({ c, l }, i) => (
                        <motion.div
                            key={i}
                            className="px-2 py-0.5 rounded-full border text-[9px] font-mono"
                            style={{ borderColor: `${c}60`, color: c, background: `${c}10` }}
                            animate={{ x: active ? [0, 6, 0] : 0, opacity: active ? [0.6, 1, 0.6] : 0.5 }}
                            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        >
                            {l}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

function DesignScene({ active }: { active: boolean }) {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <motion.div
                className="relative w-[180px] h-[120px]"
                animate={{ rotate: active ? 3 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Stacked artboard frames */}
                {[{ z: -2, o: 0.15, x: -8, y: 8 }, { z: -1, o: 0.3, x: -4, y: 4 }, { z: 0, o: 1, x: 0, y: 0 }].map(({ o, x, y }, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 border border-[#FF6B35] rounded-lg"
                        style={{ opacity: o, transform: `translate(${x}px, ${y}px)`, background: i === 2 ? "#FF6B3508" : "transparent" }}
                    >
                        {i === 2 && (
                            <div className="p-3 space-y-2">
                                <motion.div
                                    className="h-3 w-16 rounded bg-[#FF6B35]/30"
                                    animate={{ width: active ? ["64px", "90px", "64px"] : "64px" }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded bg-[#FF6B35]/20 border border-[#FF6B35]/30" />
                                    <div className="flex-1 space-y-1">
                                        <div className="h-1.5 rounded bg-[#FF6B35]/20 w-full" />
                                        <div className="h-1.5 rounded bg-[#FF6B35]/15 w-3/4" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {/* Color swatches */}
                <div className="absolute -right-4 top-2 flex flex-col gap-1">
                    {["#FF6B35", "#7B2FE8", "#00C8FF", "#FFD166"].map((c, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full"
                            style={{ background: c }}
                            animate={{ scale: active ? [1, 1.3, 1] : 1 }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

function MarketingScene({ active }: { active: boolean }) {
    const bars = [40, 65, 50, 85, 70, 95];
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <motion.div
                className="flex items-end gap-2 h-[90px]"
                animate={{ scale: active ? 1.05 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        className="w-7 rounded-t-md relative"
                        style={{ background: `linear-gradient(to top, #3B6EFF40, #3B6EFF90)`, border: "1px solid #3B6EFF50" }}
                        animate={{ height: active ? `${h + 10}%` : `${h}%`, opacity: active ? 1 : 0.6 }}
                        initial={{ height: "10%" }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    >
                        {i === 5 && (
                            <motion.div
                                className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#3B6EFF]"
                                animate={{ opacity: active ? 1 : 0.4 }}
                            >
                                ↑95%
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

const SCENES: Record<string, React.ComponentType<{ active: boolean }>> = {
    web: WebScene,
    mobile: MobileScene,
    uiux: DesignScene,
    marketing: MarketingScene,
};

function ServiceCard({
    id, title, sub, body, services, tech, diff, accent, Icon
}: {
    id: string; title: string; sub: string; body: string;
    services: string[]; tech: string[]; diff: string;
    accent: string; Icon: React.ElementType;
}) {
    const [hovered, setHovered] = useState(false);
    const Scene = SCENES[id];

    return (
        <div
            className="gradient-border group service-card block h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="glass-2 p-8 lg:p-10 h-full flex flex-col relative overflow-hidden rounded-[20px]">
                <div className="absolute top-1/2 -translate-y-1/2 -right-[40px] w-[300px] h-[300px] bg-pulse-green/10 rounded-full blur-[80px] pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${accent} 0%, transparent 70%)` }}
                />
                <svg className="absolute bottom-0 left-0 w-full h-8 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" viewBox="0 0 400 30" preserveAspectRatio="none">
                    <path d="M0,15 L120,15 L160,5 L200,25 L240,15 L400,15" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="400" strokeDashoffset={hovered ? 0 : 400} className="transition-all duration-[1.5s]" />
                </svg>

                {/* CSS animated scene — NO WebGL */}
                <div className="w-full h-[180px] mb-8 relative rounded-xl overflow-hidden glass-1">
                    <Scene active={hovered} />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center glass-3 z-10 box-shadow">
                        <Icon size={24} color={accent} weight="duotone" />
                    </div>
                </div>

                <h3 className="font-syne font-bold text-2xl text-white mb-2">{title}</h3>
                <h4 className="font-sans font-medium text-text-secondary text-[15px] mb-6">{sub}</h4>
                <p className="font-sans text-body text-text-tertiary mb-8 leading-relaxed">{body}</p>

                <ul className="space-y-3 mb-8 flex-1">
                    {services.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-primary text-[14px]">
                            <span className="mt-1 flex-shrink-0" style={{ color: accent }}>✦</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-[11px] font-mono glass-1 text-white/70">{t}</span>
                    ))}
                </div>

                <div className="mt-auto glass-1 p-5 rounded-xl border-l-[3px]" style={{ borderLeftColor: accent }}>
                    <p className="font-sans text-[13px] text-text-primary leading-relaxed">{diff}</p>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const cards = [
        {
            id: "web",
            title: "Web Development",
            sub: "High-Performance Websites & Web Applications",
            body: "We architect web platforms that don't just look exceptional — they perform exceptionally. Built on Next.js with React Server Components, TypeScript for rock-solid reliability, and deployed to global edge networks, our websites load faster and rank higher than anything your competitors are running.",
            services: ["Custom Website Design & Development", "Progressive Web Applications (PWA)", "E-commerce Platforms (Custom / Shopify / Next.js)", "Enterprise SaaS Web Applications", "Admin Dashboards & CRM Interfaces", "Headless CMS & API-First Architecture", "SEO-Optimized, Core Web Vitals-Certified Builds", "Landing Pages & High-Conversion Funnels"],
            tech: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "AWS"],
            diff: "⚡ Every website we build targets 95+ Google PageSpeed — because performance is not a feature. It is the foundation.",
            accent: "#00C8FF",
            Icon: Monitor,
        },
        {
            id: "mobile",
            title: "Mobile App Development",
            sub: "Native Android, iOS & Cross-Platform Applications",
            body: "Your users live on their phones. We build apps that become their daily habit. From native Android (Kotlin/Jetpack Compose) and iOS (Swift/SwiftUI) to cross-platform powerhouses in Flutter and React Native — every app we ship is crafted for performance, retention, and real-world reliability.",
            services: ["Native Android Development (Kotlin, Jetpack Compose)", "Native iOS Development (Swift, SwiftUI)", "Flutter Cross-Platform Applications", "React Native Applications", "App UI/UX Design & Prototyping", "API & Backend Integration", "Push Notifications & Real-Time Features", "App Store & Google Play Submission & ASO", "Biometric Auth, Payment Gateways, GPS, AR"],
            tech: ["Flutter", "Swift", "Kotlin", "Firebase", "Realm", "Expo"],
            diff: "🛡️ Zero-crash architecture. Our apps average a 99.96% crash-free session rate across all our published applications.",
            accent: "#7B2FE8",
            Icon: DeviceMobile,
        },
        {
            id: "uiux",
            title: "UI/UX Design",
            sub: "Interfaces That Users Remember & Return To",
            body: "Design is the first conversation your product has with the world. We don't design for aesthetics alone — we design for behavior, for conversion, for loyalty. Our process is research-first: we study your users before we sketch a single frame, ensuring every decision is grounded in data & psychology.",
            services: ["User Research & Persona Development", "Information Architecture & User Flow Mapping", "Wireframing & Low-Fidelity Prototyping", "High-Fidelity UI Design in Figma", "Interactive Prototype for Stakeholder Demos", "Design System Creation & Documentation", "Brand Identity & Visual Language Development", "Motion Design & Micro-Interaction Spec"],
            tech: ["Figma", "Adobe XD", "Principle", "Lottie", "Blender", "After Effects"],
            diff: "🎨 Design that converts. We merge visual storytelling with cognitive psychology to maximize user engagement.",
            accent: "#FF6B35",
            Icon: Palette,
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            sub: "Growth Engineering Built on Real Data",
            body: "Traffic without strategy is noise. We build growth systems that compound — SEO that builds domain authority over months and years, paid campaigns that improve ROAS with every optimization cycle, and content strategies that position your brand as the authority. We report revenue, not impressions.",
            services: ["Technical SEO & On-Page Optimization", "Google Search Ads (PPC)", "Meta Advertising (Facebook & Instagram)", "Content Strategy & Blog Growth", "Email Marketing & Automation Funnels", "Conversion Rate Optimization (CRO)", "Analytics Setup & KPI Dashboard", "Social Media Management"],
            tech: ["GA4", "Semrush", "Meta Pixel", "Ahrefs", "HubSpot", "Hotjar"],
            diff: "🚀 Data-driven scaling. We don't guess — we test, measure, and scale what works to maximize your return on ad spend.",
            accent: "#3B6EFF",
            Icon: TrendUp,
        },
    ];

    return (
        <section className="py-14 relative z-10" id="services">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)]">
                <div className="mb-16">
                    <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.15em] mb-4">
                        &lt; WHAT WE BUILD /&gt;
                    </div>
                    <h2 className="font-syne font-bold text-h2 text-white mb-4">
                        Services That Power Your Vision
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary max-w-[600px]">
                        Every line of code. Every pixel. Every interaction. Built with precision, delivered with purpose.
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed mb-8">
                        We start by diving deep into your goals, your audience, and the unique challenges you face. It&apos;s not just about what to build, but why.
                    </p>
                    <p className="text-text-secondary text-base leading-relaxed mb-6">
                        Our team maps out the entire digital journey, ensuring every feature and interaction aligns perfectly with your brand&apos;s pulse.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 services-grid">
                    {cards.map((card) => (
                        <ServiceCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
