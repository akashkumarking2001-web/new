"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pulse-cyan/10 blur-[150px] -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pulse-purple/10 blur-[150px] -z-10 rounded-full" />

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-[13px] text-pulse-cyan tracking-[0.2em] mb-4 uppercase"
                    >
                        &lt; Legal Documents /&gt;
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-syne font-bold text-4xl md:text-6xl text-white mb-6"
                    >
                        {title}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-4 text-text-secondary font-mono text-[12px] uppercase tracking-wider"
                    >
                        <span>Last Updated: {lastUpdated}</span>
                        <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                        <span>www.axosoul.in</span>
                    </motion.div>
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-1 p-8 md:p-12 rounded-[32px] border border-white/5 prose prose-invert prose-cyan max-w-none"
                    style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div className="legal-content space-y-8 text-text-primary/90 font-sans leading-relaxed">
                        {children}
                    </div>
                </motion.div>

                {/* Footer Link */}
                <div className="mt-12 text-center">
                    <Link href="/#contact">
                        <span className="text-pulse-cyan hover:underline font-mono text-sm cursor-pointer">
                            Questions? Contact our legal team &rarr;
                        </span>
                    </Link>
                </div>
            </div>

            <style jsx global>{`
                .legal-content h1, .legal-content h2, .legal-content h3 {
                    font-family: 'Syne', sans-serif !important;
                    font-weight: 700 !important;
                    color: #fff !important;
                    margin-top: 2rem !important;
                    margin-bottom: 1rem !important;
                }
                .legal-content h2 {
                    font-size: 1.5rem !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }
                .legal-content p {
                    margin-bottom: 1.25rem;
                }
                .legal-content ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                .legal-content li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.75rem;
                }
                .legal-content li::before {
                    content: "●";
                    position: absolute;
                    left: 0;
                    color: rgba(0, 200, 255, 0.5);
                    font-size: 0.8rem;
                    top: 0.1rem;
                }
                .legal-content strong {
                    color: #fff;
                }
            `}</style>
        </main>
    );
}
