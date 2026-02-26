"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Binoculars, SelectionBackground, Eyedropper, CodeBlock, RocketLaunch } from "@phosphor-icons/react";

const STEPS = [
    {
        num: "01",
        label: "DISCOVERY",
        icon: Binoculars,
        title: "Understanding Before Building",
        body: "A structured discovery session maps your business goals, target audience, technical requirements, and success metrics. Output: A Project Strategy Document that defines scope, timeline, and budget.",
        badge: "Strategy Document"
    },
    {
        num: "02",
        label: "BLUEPRINT",
        icon: SelectionBackground,
        title: "Architecture Before Code",
        body: "System architecture, database schema, API design, component hierarchy, and UX wireframes. You review and approve the full blueprint before a single line of code or design is created.",
        badge: "Technical Blueprint + Wireframes"
    },
    {
        num: "03",
        label: "DESIGN",
        icon: Eyedropper,
        title: "Pixel-Perfect Before Development",
        body: "High-fidelity Figma designs for every screen, every state. An interactive prototype delivered for your review. Three revision rounds included. We don't code until the design is perfect.",
        badge: "Figma Design + Prototype"
    },
    {
        num: "04",
        label: "BUILD & ITERATE",
        icon: CodeBlock,
        title: "Agile Development with Visibility",
        body: "Two-week sprint cycles. Every sprint ends with a live staging demo you can click through. Direct access to our project board. Weekly video sync calls. You're never left in the dark.",
        badge: "Weekly Staging Demos"
    },
    {
        num: "05",
        label: "LAUNCH & ORBIT",
        icon: RocketLaunch,
        title: "Launch Day and Beyond",
        body: "Zero-downtime deployment to your production environment. Full app store submission handled. CDN configuration, monitoring, error alerting, automated backups. Then: 6 months free maintenance.",
        badge: "Live Product + 6-Month Support"
    }
];

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section className="py-24 relative z-10" ref={containerRef} id="process">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)]">

                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="font-syne font-bold text-h2 text-white mb-4">
                        From First Conversation to Launched Product
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary">
                        A proven process refined across 200+ projects.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-[800px] mx-auto">

                    {/* Vertical Scroll Path */}
                    <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-ml-[1.5px] w-[3px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="w-full bg-axo-gradient origin-top"
                            style={{ scaleY: pathLength, height: '100%' }}
                        />
                    </div>

                    <div className="space-y-16 relative">
                        {STEPS.map((step, i) => {
                            const isEven = i % 2 !== 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`relative flex items-center md:justify-between flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Node Circle */}
                                    <div className="absolute left-0 md:left-1/2 md:-ml-[20px] w-10 h-10 rounded-full glass-2 flex items-center justify-center border-pulse-cyan/30 z-10 text-pulse-cyan box-shadow">
                                        <step.icon size={20} weight="duotone" />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] glass-2 p-8 rounded-2xl relative group`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="font-mono text-[11px] text-pulse-cyan uppercase tracking-wider block">
                                                {step.num} / {step.label}
                                            </span>
                                        </div>

                                        <h3 className="font-syne font-bold text-xl text-white mb-3">
                                            {step.title}
                                        </h3>

                                        <p className="font-sans text-body text-text-secondary mb-6 leading-relaxed">
                                            {step.body}
                                        </p>

                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-pulse-violet/10 border border-pulse-violet/20 text-[12px] font-sans text-pulse-violet">
                                            <span className="w-1.5 h-1.5 rounded-full bg-pulse-violet animate-pulse" />
                                            Output: {step.badge}
                                        </div>

                                        {/* Hover mini-pulse */}
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-axo-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
