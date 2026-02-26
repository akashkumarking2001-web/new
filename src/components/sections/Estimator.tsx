"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copyleft, MonitorPlay, DeviceMobile, HardDrives, HandCoins } from "@phosphor-icons/react";

const STEPS = ["Platform", "Complexity", "Timeline"];
const OPTIONS = {
    platform: [
        { id: "web", label: "Web App", icon: MonitorPlay, base: 15000 },
        { id: "mobile", label: "Mobile App", icon: DeviceMobile, base: 25000 },
        { id: "both", label: "Both (Flutter/Web)", icon: HardDrives, base: 45000 },
    ],
    complexity: [
        { id: "basic", label: "Basic (UI + DB)", multiplier: 1, desc: "Standard CRUD, Auth, Dashboard" },
        { id: "advanced", label: "Advanced (Payments, Realtime)", multiplier: 1.5, desc: "Stripe, WebSockets, Maps" },
        { id: "enterprise", label: "Enterprise (AI, Hardware)", multiplier: 2.5, desc: "LLM integrations, IoT, complex logic" },
    ],
    timeline: [
        { id: "standard", label: "Small Scale (3-5 days)", multiplier: 1, desc: "Landing pages & simple apps" },
        { id: "fast", label: "Large/Complex (1-2 weeks)", multiplier: 1.5, desc: "Full-stack apps & custom enterprise" },
    ]
};

export default function Estimator() {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState({ platform: "web", complexity: "basic", timeline: "standard" });
    const [isCalculated, setIsCalculated] = useState(false);

    const currentPlatform = OPTIONS.platform.find(p => p.id === selections.platform) || OPTIONS.platform[0];
    const currentComplexity = OPTIONS.complexity.find(c => c.id === selections.complexity) || OPTIONS.complexity[0];
    const currentTimeline = OPTIONS.timeline.find(t => t.id === selections.timeline) || OPTIONS.timeline[0];

    const totalINR = currentPlatform.base * currentComplexity.multiplier * currentTimeline.multiplier;
    const totalUSD = Math.round(totalINR / 80); // Rough conversion

    const handleNext = () => {
        if (step < STEPS.length - 1) setStep(step + 1);
        else setIsCalculated(true);
    };

    const handleBack = () => {
        if (isCalculated) setIsCalculated(false);
        else if (step > 0) setStep(step - 1);
    };

    return (
        <section className="py-14 relative z-10 w-full overflow-hidden" id="estimator">
            <div className="max-w-[1000px] mx-auto px-[max(24px,4vw)] relative z-20">

                <div className="text-center mb-16">
                    <h2 className="font-syne font-bold text-[32px] md:text-[48px] text-white">Project Estimator</h2>
                    <p className="font-sans text-text-secondary mt-2">Get a rough idea before we talk.</p>
                </div>

                <div className="glass-2 p-8 md:p-12 rounded-[24px] border border-pulse-cyan/20 box-shadow min-h-[400px] flex flex-col relative">

                    {!isCalculated ? (
                        <>
                            {/* Progress Bar */}
                            <div className="flex justify-between mb-12 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0" />
                                <div className="absolute top-1/2 left-0 h-[2px] bg-pulse-cyan -translate-y-1/2 z-0 transition-all duration-500" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />

                                {STEPS.map((s, i) => (
                                    <div key={s} className={`relative z-10 flex flex-col items-center gap-2 ${i <= step ? 'text-pulse-cyan' : 'text-text-tertiary'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[12px] border-2 transition-colors ${i <= step ? 'bg-[#020205] border-pulse-cyan' : 'bg-surface border-white/20'}`}>
                                            {i + 1}
                                        </div>
                                        <span className="font-mono text-[10px] uppercase tracking-wider absolute -bottom-6 whitespace-nowrap">{s}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Step Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex-1"
                                >
                                    {step === 0 && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {OPTIONS.platform.map(p => (
                                                <button
                                                    key={p.id}
                                                    onClick={() => setSelections({ ...selections, platform: p.id })}
                                                    className={`p-6 rounded-xl border flex flex-col items-center gap-4 transition-all duration-300 ${selections.platform === p.id ? 'border-pulse-cyan bg-pulse-cyan/10' : 'border-white/10 hover:border-white/30 glass-1'}`}
                                                >
                                                    <p.icon size={32} weight="duotone" className={selections.platform === p.id ? 'text-pulse-cyan' : 'text-text-secondary'} />
                                                    <span className="font-sans font-medium text-white">{p.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {step === 1 && (
                                        <div className="flex flex-col gap-4">
                                            {OPTIONS.complexity.map(c => (
                                                <button
                                                    key={c.id}
                                                    onClick={() => setSelections({ ...selections, complexity: c.id })}
                                                    className={`p-6 rounded-xl border flex flex-col items-start text-left transition-all duration-300 ${selections.complexity === c.id ? 'border-[#7B2FE8] bg-[#7B2FE8]/10' : 'border-white/10 hover:border-white/30 glass-1'}`}
                                                >
                                                    <span className="font-syne font-bold text-[18px] text-white mb-1">{c.label}</span>
                                                    <span className="font-sans text-[13px] text-text-secondary">{c.desc}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div className="flex flex-col gap-4">
                                            {OPTIONS.timeline.map(t => (
                                                <button
                                                    key={t.id}
                                                    onClick={() => setSelections({ ...selections, timeline: t.id })}
                                                    className={`p-6 rounded-xl border flex flex-col items-start text-left transition-all duration-300 ${selections.timeline === t.id ? 'border-[#FF6B35] bg-[#FF6B35]/10' : 'border-white/10 hover:border-white/30 glass-1'}`}
                                                >
                                                    <span className="font-syne font-bold text-[18px] text-white mb-1">{t.label}</span>
                                                    <span className="font-sans text-[13px] text-text-secondary">{t.desc}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Footer Controls */}
                            <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                                <button
                                    onClick={handleBack}
                                    disabled={step === 0}
                                    className="font-sans text-[14px] text-text-secondary hover:text-white disabled:opacity-30 transition-colors"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="px-8 py-3 rounded-full bg-white text-[#0A0A0E] font-sans font-semibold text-[14px] hover:bg-gray-200 transition-colors"
                                >
                                    {step === STEPS.length - 1 ? 'Calculate' : 'Next Step'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center flex-1 text-center"
                        >
                            <div className="w-16 h-16 rounded-full glass-2 flex items-center justify-center mb-6 text-pulse-cyan">
                                <HandCoins size={32} weight="duotone" />
                            </div>
                            <h3 className="font-mono text-[13px] text-pulse-cyan uppercase tracking-widest mb-4">Estimated Investment</h3>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                                <div className="text-[48px] md:text-[64px] font-syne font-extrabold text-white leading-none">
                                    ₹{totalINR.toLocaleString('en-IN')}
                                </div>
                                <div className="h-10 w-[1px] bg-white/20 hidden md:block" />
                                <div className="text-[32px] md:text-[40px] font-mono font-bold text-text-secondary leading-none">
                                    ~${totalUSD.toLocaleString('en-US')}
                                </div>
                            </div>

                            <div className="max-w-[400px] mb-8 p-4 rounded-xl glass-1 border border-white/5 mx-auto">
                                <div className="flex justify-between text-[13px] font-sans text-text-secondary mb-2">
                                    <span>Platform</span> <span>{currentPlatform.label}</span>
                                </div>
                                <div className="flex justify-between text-[13px] font-sans text-text-secondary mb-2">
                                    <span>Complexity</span> <span>{currentComplexity.label}</span>
                                </div>
                                <div className="flex justify-between text-[13px] font-sans text-text-secondary">
                                    <span>Pace</span> <span>{currentTimeline.label}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button onClick={handleBack} className="px-6 py-3 rounded-full font-sans text-[14px] text-white border border-white/20 hover:bg-white/5 transition-colors">
                                    Recalculate
                                </button>
                                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full font-sans font-semibold text-[14px] text-white bg-axo-gradient hover:scale-105 transition-transform shadow-[0_0_20px_rgba(123,47,232,0.4)]">
                                    Start on WhatsApp
                                </a>
                            </div>

                            <p className="mt-8 text-xs text-text-tertiary">Note: For small-scale projects, we complete them within 3 to 5 days. For larger or more complex projects, we ensure full delivery within 1 to 2 weeks.</p>
                        </motion.div>
                    )}

                </div>
            </div>
        </section>
    );
}
