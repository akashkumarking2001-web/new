"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const POSTS = [
    {
        title: "How We Optimized a Next.js App to Handle 50K Concurrent Users",
        cat: "Engineering",
        read: "5 min read",
        desc: "A deep dive into Edge caching, React Server Components, and connection pooling.",
        color: "#00C8FF"
    },
    {
        title: "Why Your Figma Design Isn't Translating to Code (And How to Fix It)",
        cat: "Design System",
        read: "4 min read",
        desc: "Bridging the gap between UI design tokens and Tailwind configuration architectures.",
        color: "#FF6B35"
    },
    {
        title: "Flutter vs React Native in 2025: An Objective Agency Perspective",
        cat: "Mobile Dev",
        read: "7 min read",
        desc: "We build in both. Here is exactly when we recommend one over the other for our clients.",
        color: "#7B2FE8"
    }
];

export default function BlogHub() {
    return (
        <section className="py-24 relative z-10 w-full overflow-hidden" id="insights">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative z-20">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-syne font-bold text-h2 text-white mb-4">
                            The Engineering Log
                        </h2>
                        <p className="font-sans text-body-lg text-text-secondary max-w-[600px]">
                            We don&apos;t just build products; we build knowledge. Insights straight from our development floor to your screen.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 group font-mono text-[11px] text-white uppercase tracking-widest border-b border-white/20 hover:border-white transition-colors pb-1">
                        Read All Logs
                        <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {POSTS.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="group cursor-none border-b border-white/10 pb-8 flex flex-col h-full"
                        >
                            <div className="w-full aspect-[16/9] glass-1 rounded-2xl mb-6 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1]" style={{ backgroundColor: post.color }} />
                                <div className="absolute inset-0 flex items-center justify-center font-syne font-bold text-[3rem] text-white/5 uppercase select-none pointer-events-none">AxOSoul</div>
                            </div>

                            <div className="flex items-center justify-between mb-4 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                                <div className="px-2 py-1 rounded bg-white/5" style={{ color: post.color }}>{post.cat}</div>
                                <div>{post.read}</div>
                            </div>

                            <h3 className="font-syne font-bold text-[22px] text-white mb-3 group-hover:text-pulse-cyan transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            <p className="font-sans text-[14px] text-text-secondary line-clamp-2 leading-relaxed mb-6">
                                {post.desc}
                            </p>

                            <div className="mt-auto font-sans text-[13px] text-white group-hover:translate-x-2 transition-transform flex items-center gap-2">
                                Read Full Log →
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
