"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        quote: "AxoSoul didn't just build our CRM. They asked the right questions until they understood our sales DNA. We went from drowning in spreadsheets to a live pipeline view in 6 weeks.",
        name: "Rohan Sharma",
        title: "CEO, NexLink",
        country: "India",
        metrics: "Response time dropped by 83%",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
        quote: "Working across timezones, I expected delays. Instead, I found a team more responsive than local agencies. The live classroom feature now handles 12,000 monthly sessions without a single WebRTC outage in 8 months.",
        name: "James Okafor",
        title: "CMO, RiseUp EdTech",
        country: "Nigeria",
        metrics: "$3.2M in tutor payouts",
        image: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
    },
    {
        quote: "I was skeptical about a remote team. AxoSoul made that skepticism look foolish within the first week. The driver app has saved us over ₹18 lakh per month in operational waste.",
        name: "Sarah Mitchell",
        title: "Founder, Delivr",
        country: "UK",
        metrics: "91% operational cost reduction",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: "We needed a team that understood both engineering and product. The dashboard they built handles 450MW of solar data without a single performance complaint from our operators.",
        name: "Ahmed Al-Rashid",
        title: "CTO, SolarIQ",
        country: "UAE",
        metrics: "Code quality passed stringent audit",
        image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
        quote: "The iOS app AxoSoul built for us was featured by Apple in their App Store. The care they put into the UX — the small details that make a medical app feel reassuring — was evident in every screen.",
        name: "Priya Nambiar",
        title: "Product Lead, MediTrack",
        country: "Singapore",
        metrics: "4.9★ App Store Rating",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="py-24 relative z-10 w-full overflow-hidden" id="testimonials">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] relative z-20">

                {/* Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="font-syne font-bold text-h2 text-white mb-4">
                        Clients Who&apos;ve Felt the Pulse
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary">
                        Real businesses experiencing real growth.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative h-[480px] w-full max-w-[1000px] mx-auto perspective-1000 flex items-center justify-center">

                    <AnimatePresence mode="popLayout" initial={false}>
                        {TESTIMONIALS.map((t, i) => {
                            let position = i - index;
                            if (position < -2) position += TESTIMONIALS.length;
                            if (position > 2) position -= TESTIMONIALS.length;

                            const isActive = position === 0;
                            const zIndex = 10 - Math.abs(position);

                            // Hidden
                            if (Math.abs(position) > 1) return null;

                            return (
                                <motion.div
                                    key={t.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, x: position > 0 ? 200 : -200, rotateY: position > 0 ? -20 : 20 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0.4,
                                        scale: isActive ? 1 : 0.8,
                                        x: position * 300,
                                        rotateY: position * -25,
                                        zIndex
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className={`absolute w-full max-w-[600px] glass-2 p-8 md:p-12 rounded-[28px] ${isActive ? 'gradient-border box-shadow' : 'cursor-none hover:opacity-100 transition-opacity blur-[2px]'}`}
                                    onClick={() => !isActive && setIndex(i)}
                                >
                                    <div className="flex gap-1 mb-6 text-[#FFBE00]">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} weight="fill" size={20} className={isActive ? "animate-pulse" : ""} style={{ animationDelay: `${idx * 0.1}s` }} />
                                        ))}
                                    </div>

                                    <p className={`font-sans text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-8 ${!isActive && 'line-clamp-3'}`}>
                                        &quot;{t.quote}&quot;
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 glass-1 relative">
                                                <Image src={t.image} alt={t.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-syne font-bold text-white text-[16px]">{t.name}</h4>
                                                <p className="font-sans text-[13px] text-text-secondary">{t.title}</p>
                                            </div>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <div className="text-[20px] mb-1">🌍</div>
                                            <div className="font-mono text-[10px] text-text-secondary uppercase">{t.country}</div>
                                        </div>
                                    </div>

                                    {isActive && (
                                        <div className="absolute top-8 right-8 inline-flex px-3 py-1 glass-1 rounded-full border border-pulse-cyan/30 text-pulse-cyan font-mono text-[11px] items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-pulse-cyan" />
                                            {t.metrics}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                </div>

                {/* Nav Buttons */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button onClick={prev} className="w-12 h-12 rounded-full glass-2 flex items-center justify-center text-text-secondary hover:text-pulse-cyan hover:border-pulse-cyan transition-colors">
                        <CaretLeft size={24} weight="bold" />
                    </button>
                    <button onClick={next} className="w-12 h-12 rounded-full glass-2 flex items-center justify-center text-text-secondary hover:text-pulse-cyan hover:border-pulse-cyan transition-colors">
                        <CaretRight size={24} weight="bold" />
                    </button>
                </div>

                {/* Social Proof Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[800px] mx-auto mt-24">
                    {[
                        { label: "Average Client Rating", val: "4.9 / 5.0" },
                        { label: "Client Retention Rate", val: "96%" },
                        { label: "Projects Delivered", val: "200+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="font-syne font-bold text-3xl text-gradient mb-2">{stat.val}</div>
                            <div className="font-sans text-sm text-text-secondary">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
