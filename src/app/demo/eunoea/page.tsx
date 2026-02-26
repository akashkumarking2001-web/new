"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import { motion, useScroll, useTransform, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"] });
const jost = Jost({ subsets: ["latin"], weight: ["200", "300", "400", "500"] });

const MARQUEE_TEXT = "THE RESIDENCES · WELLNESS & AMENITIES · FLOOR PLANS · THE SURROUNDINGS · BRAND STORY · GALLERY · ";
const AMENITIES = [
    { title: "Residents' Lounge", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" },
    { title: "Outdoor Garden Terrace", img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=2000" },
    { title: "Infinity Pool", img: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=2000" },
    { title: "Yoga & Meditation Studio", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" },
    { title: "Fitness Studio / Gym", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" },
    { title: "Library & Reading Corner", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000" },
];

const SURROUNDINGS = [
    { time: "Quiet Renewal", desc: "Mornings begin softly, painted with coastal fog and ocean horizons.", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000" },
    { time: "Golden Hours", desc: "Afternoons flow with ease. Walk the charming streets or relax on sunlit terraces.", img: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=1000" },
    { time: "Gentle Beginnings", desc: "Evenings fall like a soft exhale, settling into quiet luxury as the stars appear.", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000" }
];

const IMAGES = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2500", // Warm sunlit interior
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2500", // Architectural exterior
    "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?auto=format&fit=crop&q=80&w=2500"  // Bedroom interior detail
];

export default function EunoeaTemplate() {
    // ---------------- ANIMATION & STATE ----------------
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);

    // Ken Burns Hero Slideshow
    const [heroIndex, setHeroIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    // Fade Up Variant
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
    };
    const staggerSlow: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    // Parallax logic for Residences
    const resRef = useRef(null);
    const { scrollYProgress: resScroll } = useScroll({ target: resRef, offset: ["start end", "end start"] });
    const xParallax1 = useTransform(resScroll, [0, 1], ["0%", "-30%"]);
    const xParallax2 = useTransform(resScroll, [0, 1], ["0%", "20%"]);

    // Horizontal Strip Logic
    const stripRef = useRef(null);
    const { scrollYProgress: stripScroll } = useScroll({ target: stripRef, offset: ["start end", "end end"] });
    const xStrip = useTransform(stripScroll, [0, 1], ["10%", "-100%"]);

    return (
        <main className={`min-h-screen bg-[#FAF8F4] ${jost.className} text-[#7A6E65] font-[300] selection:bg-[#B4A899] selection:text-white`}>

            {/* 1. NAVIGATION BAR */}
            <motion.nav
                className="fixed w-full top-0 z-50 h-[72px] flex items-center justify-between px-8 border-b border-[#E8E0D0]/0 transition-colors"
                style={{
                    backgroundColor: useTransform(navOpacity, v => `rgba(250, 248, 244, ${v * 0.92})`),
                    backdropFilter: useTransform(navOpacity, v => `blur(${v * 20}px)`),
                    borderBottomColor: useTransform(navOpacity, v => `rgba(232, 224, 208, ${v})`)
                }}
            >
                <div className="flex items-center gap-2">
                    {/* SVG abstract mark */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#1C1C1A" strokeWidth="1" />
                        <circle cx="12" cy="12" r="3" fill="#1C1C1A" />
                    </svg>
                    <span className="text-[11px] uppercase tracking-[0.3em] font-[200] text-[#1C1C1A]">Eunoea</span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.15em] text-[#B4A899]">
                    {["Home", "The Residences", "Wellness & Amenities", "Floor Plans", "The Surroundings", "Brand Story", "Gallery"].map(link => (
                        <Link key={link} href="#" className="hover:text-[#1C1C1A] transition-colors duration-500">{link}</Link>
                    ))}
                </div>

                <div className="flex items-center gap-6 text-[11px]">
                    <div className="hidden md:block text-[#B4A899]">
                        +1 (831) 555-1820
                    </div>
                    <Link href="#inquire" className="border border-[#1C1C1A]/20 px-6 py-2.5 uppercase tracking-[0.2em] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all duration-700">
                        Inquire
                    </Link>
                </div>
            </motion.nav>

            {/* 2. HERO (Full-Screen Slideshow) */}
            <section className="relative w-full h-screen overflow-hidden bg-[#1C1C1A]">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={heroIndex}
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1.06 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.2, ease: "easeInOut" },
                            scale: { duration: 8, ease: "linear" }
                        }}
                        className="absolute inset-0"
                    >
                        <img src={IMAGES[heroIndex]} className="w-full h-full object-cover" alt="Luxury Real Estate" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
                    </motion.div>
                </AnimatePresence>

                {/* Watermark Logo Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-30 pointer-events-none">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                        <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                        <circle cx="12" cy="12" r="3" fill="white" />
                    </svg>
                    <span className="text-[9px] uppercase tracking-[0.6em] text-white mt-4 font-[200]">Eunoea</span>
                </div>

                {/* Main Hero Text */}
                <div className="absolute bottom-24 left-0 w-full flex flex-col items-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
                        className={`${cormorant.className} italic text-white text-[48px] md:text-[68px] leading-none mb-6 font-[300]`}
                    >
                        Live Beautifully in Every Light
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.8 }}
                        className="max-w-[480px] text-white/70 text-[13px] leading-[1.8] font-[300]"
                    >
                        Sunlit spaces designed for clarity and calm — where every detail inspires presence and a sense of ease throughout.
                    </motion.p>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {IMAGES.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${i === heroIndex ? "w-4 bg-white" : "w-1.5 bg-white/35"}`} />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-0 right-10 flex flex-col items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 writing-vertical-rl rotate-180">Scroll</span>
                    <motion.div
                        className="w-[1px] h-12 bg-white/20 relative overflow-hidden"
                    >
                        <motion.div
                            className="w-full h-full bg-white absolute top-0 left-0 origin-top"
                            animate={{ scaleY: [0, 1, 0], translateY: ["-100%", "0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* 3. HORIZONTAL MARQUEE */}
            <section className="bg-[#1C1C1A] h-[60px] flex items-center overflow-hidden border-b border-white/5">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    className="whitespace-nowrap flex text-[10px] uppercase tracking-[0.35em] text-white/40"
                >
                    {Array(4).fill(MARQUEE_TEXT).map((text, i) => <span key={i}>{text}</span>)}
                </motion.div>
            </section>

            {/* 4. BRAND INTRODUCTION */}
            <section className="py-[160px] px-8 md:px-[80px] max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerSlow} className="flex flex-col">
                        <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4A899]">Eunoea Living</span>
                            <div className="w-12 h-[1px] bg-[#E8E0D0]" />
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className={`${cormorant.className} italic text-[#1C1C1A] text-[40px] md:text-[50px] leading-[1.15] font-[300]`}
                        >
                            EUNOEA Living is a sanctuary of calm and light — where mindful design, natural balance, and quiet luxury shape every moment of life.
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true, margin: "-10%" }}
                        className="flex flex-col gap-4"
                    >
                        <div className="aspect-[4/3] bg-[#E8E0D0] w-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover mix-blend-multiply opacity-90" alt="Interior Details" />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4A899] text-right">Eunoea Living Spaces</span>
                    </motion.div>
                </div>
            </section>

            {/* 5. MINDFUL DESIGN */}
            <section className="bg-[#F5F0E8] py-[160px] px-8 md:px-[80px]">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeUp}
                        className="md:col-span-5 aspect-[3/4] overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" alt="Mindful Design" />
                    </motion.div>

                    <div className="md:col-span-7 flex flex-col gap-12 md:mt-24">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeUp}
                            className="aspect-[16/9] w-full overflow-hidden"
                        >
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" alt="Modern Living" />
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerSlow} className="max-w-[480px]">
                            <motion.p variants={fadeUp} className="text-[14px] leading-[1.9] text-[#7A6E65] font-[300] mb-8">
                                EUNOEA Living was created with one purpose — to bring intentional design and well-being into everyday life. By harmonizing soft natural lines with warm light, we have built spaces that inspire true quietude. This is an invitation to slow down.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <Link href="#" className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#1C1C1A] border-b border-[#1C1C1A]/20 pb-1 hover:border-[#1C1C1A] transition-colors">
                                    Discover Eunoea Living
                                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* 6. THE RESIDENCES (Parallax Grid) */}
            <section className="py-[160px] relative" ref={resRef}>
                <div className="px-8 md:px-[80px] max-w-[1440px] mx-auto flex flex-col items-center text-center mb-24">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4A899] mb-8">The Residences</span>
                    <h2 className={`${cormorant.className} italic text-[#1C1C1A] text-[48px] md:text-[56px] leading-[1.1] font-[300] max-w-[600px] mb-8`}>
                        A Home Shaped by Light, Balance, and Intention.
                    </h2>
                    <p className="text-[14px] leading-[1.8] text-[#7A6E65] max-w-[500px] font-[300]">
                        Every residence at EUNOEA Living is designed as a quiet retreat — where natural light, soft materials, and flowing space create a sense of effortless harmony.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-0 md:max-w-[85%] mx-auto mb-32">
                    <div className="flex flex-col gap-8">
                        <motion.div style={{ y: xParallax1 }} className="aspect-square overflow-hidden bg-gray-200">
                            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div style={{ y: xParallax2 }} className="aspect-[16/10] overflow-hidden bg-gray-200 mt-8 md:mr-12">
                            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    <div className="md:mt-[-100px]">
                        <motion.div style={{ y: xParallax1 }} className="aspect-[1/1.6] overflow-hidden bg-gray-200 md:w-[85%] ml-auto">
                            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                {/* Horizontal Scrolling Photo Strip */}
                <div className="h-[300px] md:h-[500px] overflow-hidden sticky top-32" ref={stripRef}>
                    <motion.div style={{ x: xStrip }} className="flex gap-4 md:gap-8 h-full min-w-max px-8">
                        {IMAGES.map((img, i) => (
                            <div key={i} className="h-full aspect-[16/9] overflow-hidden">
                                <img src={img} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 7. AMENITIES (Dark Mode Tab Component) */}
            <section className="bg-[#1C1C1A] py-[140px] px-8 md:px-[80px]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="max-w-[540px] mb-20">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4A899] mb-8 block">The Amenities</span>
                        <h2 className={`${cormorant.className} italic text-[#FAF8F4] text-[40px] md:text-[48px] leading-[1.1] font-[300] mb-8`}>
                            Wellness, Connection, and Everyday Ease.
                        </h2>
                        <p className="text-[14px] leading-[1.8] text-white/55 font-[300] mb-10">
                            Immerse yourself in carefully curated spaces designed for physical wellness, quiet reflection, and effortless social connection.
                        </p>
                        <Link href="#" className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[#FAF8F4] border-b border-[#FAF8F4]/30 pb-1 hover:border-[#FAF8F4] transition-colors">
                            Discover the Amenities
                            <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-500" />
                        </Link>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex overflow-x-auto hide-scrollbar gap-8 border-b border-white/10 pb-6 mb-8">
                            {AMENITIES.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    className={`text-[10px] uppercase tracking-[0.15em] whitespace-nowrap transition-colors duration-500 relative pb-6 -mb-6 ${activeTab === i ? 'text-white' : 'text-[#B4A899] hover:text-white/70'}`}
                                >
                                    {item.title}
                                    {activeTab === i && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-[1px] bg-white" />}
                                </button>
                            ))}
                        </div>

                        <div className="aspect-[16/7] w-full overflow-hidden bg-black relative">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    src={AMENITIES[activeTab].img}
                                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. SURROUNDINGS (Cards + Grid) */}
            <section className="py-[160px] px-8 md:px-[80px] bg-[#FAF8F4]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4A899] mb-8 block">The Location & Surroundings</span>
                        <h2 className={`${cormorant.className} italic text-[#1C1C1A] text-[40px] md:text-[48px] leading-[1.1] font-[300]`}>
                            Where Every Hour Holds Its Own Quiet Beauty.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-[160px]">
                        {SURROUNDINGS.map((item, i) => (
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} key={i} className="flex flex-col">
                                <div className="aspect-[4/3] overflow-hidden mb-8">
                                    <img src={item.img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                                </div>
                                <h3 className={`${cormorant.className} text-[28px] text-[#1C1C1A] mb-4`}>{item.time}</h3>
                                <p className="text-[13px] text-[#7A6E65] leading-[1.7] font-[300] mb-8 pr-4">
                                    {item.desc}
                                </p>
                                <Link href="#" className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-[#1C1C1A] mt-auto">
                                    Discover What&apos;s Around <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {[
                            { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b", h: "aspect-[3/4]", title: "Carmel Beach" },
                            { src: "https://images.unsplash.com/photo-1562241604-db8a2098b733", h: "aspect-[4/3]", title: "The Stationaery Café" },
                            { src: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24", h: "aspect-square", title: "Mission Trail Park" },
                            { src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", h: "aspect-[4/5]", title: "Ocean Avenue Boutiques" },
                            { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", h: "aspect-video", title: "Casanova Restaurant" },
                            { src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f", h: "aspect-[3/4]", title: "Folktale Winery" },
                        ].map((photo, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: (i % 3) * 0.15 }} viewport={{ once: true }}
                                key={i} className="break-inside-avoid flex flex-col group cursor-pointer"
                            >
                                <div className={`${photo.h} w-full overflow-hidden mb-3 bg-[#E8E0D0]`}>
                                    <img src={`${photo.src}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out opacity-90 group-hover:opacity-100" />
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#B4A899] group-hover:-translate-y-1 transition-transform duration-500">{photo.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. SCHEDULE A TOUR (Form) */}
            <section id="inquire" className="py-[160px] px-8 md:px-[80px] bg-[#F5F0E8]">
                <div className="max-w-[800px] mx-auto">
                    <div className="text-center mb-20 flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#B4A899] mb-8 block">Schedule a Private Tour</span>
                        <h2 className={`${cormorant.className} italic text-[#1C1C1A] text-[40px] md:text-[50px] leading-[1.1] font-[300] mb-6 max-w-[600px]`}>
                            Experience the Art of Living Well Together.
                        </h2>
                        <p className="text-[14px] leading-[1.8] text-[#7A6E65] font-[300] max-w-[500px]">
                            Step inside EUNOEA Living — where modern design meets mindful living. Reserve a private appointment with our team.
                        </p>
                    </div>

                    <form className="flex flex-col gap-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { label: "First Name", type: "text" },
                                { label: "Last Name", type: "text" },
                                { label: "Email", type: "email" },
                                { label: "Phone Number", type: "tel" },
                                { label: "Country", type: "select", opts: ["United States", "Austria", "Canada", "Germany", "India"] },
                                { label: "Zip Code", type: "text" },
                                { label: "Desired Residence Type", type: "select", opts: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4 Bedrooms"] },
                                { label: "Contact Preference", type: "select", opts: ["Email", "Phone Call", "Text Message", "Any"] },
                                { label: "How did you hear about us?", type: "select", opts: ["Online Search", "Social Media", "Friend/Referral", "Press", "Other"] },
                                { label: "Are you an agent/broker?", type: "select", opts: ["No, I'm a buyer", "Yes, I am an agent/broker"] },
                            ].map((field, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <label className="text-[9px] uppercase tracking-[0.2em] text-[#B4A899]">{field.label}</label>
                                    {field.type === "select" ? (
                                        <div className="relative">
                                            <select className="w-full bg-transparent border-b border-[#1C1C1A]/20 py-3 text-[14px] text-[#1C1C1A] font-[300] focus:outline-none focus:border-[#1C1C1A] transition-colors appearance-none cursor-pointer">
                                                <option value="" disabled selected>Select an option</option>
                                                {field.opts?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                            </select>
                                            <CaretDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1C1C1A]/40 pointer-events-none" />
                                        </div>
                                    ) : (
                                        <input type={field.type} className="w-full bg-transparent border-b border-[#1C1C1A]/20 py-3 text-[14px] text-[#1C1C1A] font-[300] focus:outline-none focus:border-[#1C1C1A] transition-colors" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button type="button" className="w-full bg-[#1C1C1A] text-[#FAF8F4] py-6 uppercase text-[11px] tracking-[0.2em] mt-10 hover:bg-[#2C2C2A] transition-colors duration-500">
                            Book Your Visit
                        </button>
                    </form>
                </div>
            </section>

            {/* 10. FOOTER */}
            <footer className="bg-[#0D0D0B] pt-[120px] pb-10 px-8 md:px-[80px]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-[120px]">

                        <div className="md:col-span-6 flex flex-col gap-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                                <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="white" strokeWidth="1" />
                                <circle cx="12" cy="12" r="3" fill="white" />
                            </svg>
                            <p className="text-[13px] text-white/45 max-w-[280px] leading-[1.8] font-[300]">
                                Ocean Avenue & San Antonio Street,<br />
                                Carmel-by-the-Sea, California 93921, USA
                            </p>
                            <div className="flex flex-col gap-2 text-[13px] text-white/45 font-[300] mt-4">
                                <span>+1 (831) 555-1820</span>
                                <span>info@eunoialiving.com</span>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-[0.15em] text-white/45">
                                {["Home", "The Residences", "Wellness & Amenities", "The Surrounding Area", "Brand Story"].map(link => (
                                    <li key={link}><Link href="#" className="hover:text-white transition-colors duration-500">{link}</Link></li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:col-span-3">
                            <ul className="flex flex-col gap-5 text-[11px] uppercase tracking-[0.15em] text-white/45">
                                {["Floor Plans", "Gallery", "Stories in the Press", "Inquire"].map(link => (
                                    <li key={link}><Link href="#" className="hover:text-white transition-colors duration-500">{link}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/30 uppercase tracking-[0.15em]">
                        <span>© Copyright {new Date().getFullYear()}. All Rights Reserved by Eunoea.</span>
                        <div className="flex items-center gap-3">
                            Created by Duncan Shen
                            <img src="https://i.pravatar.cc/100?u=duncan" className="w-5 h-5 rounded-full grayscale" alt="Author" />
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
