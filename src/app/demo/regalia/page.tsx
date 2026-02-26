"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ShoppingBag,
    Search,
    Heart,
    ArrowRight,
    Instagram,
    Facebook,
    Twitter,
    Menu,
    X,
    ChevronRight,
    Globe,
    Shield,
    Leaf,
    Clock
} from "lucide-react";

// --- CUSTOM COMPONENTS ---

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/demo/regalia" },
        { name: "Collections", href: "/demo/regalia/collections" },
        { name: "New Arrivals", href: "#new-arrivals" },
        { name: "Lookbook", href: "#lookbook" },
        { name: "About", href: "/demo/regalia/about" },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-[100] transition-all duration-700">
                {/* Announcement Bar */}
                <div className="bg-[#0A0A0A] text-white py-2 text-[10px] uppercase tracking-[0.3em] font-montserrat text-center border-b border-white/10 overflow-hidden">
                    <motion.div
                        animate={{ x: ["100%", "-100%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="whitespace-nowrap inline-block"
                    >
                        Free Shipping on Orders Over $150 | Exclusive New Collection Arrived | Complimentary Gift Wrapping for Members
                    </motion.div>
                </div>

                <nav className={`w-full py-6 px-8 md:px-16 flex items-center justify-between transition-all duration-700 font-montserrat ${scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-[#0A0A0A]/5 py-4 shadow-sm' : 'bg-transparent text-white'}`}>
                    {/* Left: Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-[#D4AF37] transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>

                    {/* Left: Mobile Toggle */}
                    <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
                        <Menu className={`w-6 h-6 ${scrolled ? 'text-[#0A0A0A]' : 'text-white'}`} />
                    </button>

                    {/* Center: Logo */}
                    <Link href="/demo/regalia" className="absolute left-1/2 -translate-x-1/2">
                        <h1 className={`text-3xl md:text-4xl font-cormorant font-normal italic lowercase tracking-tight ${scrolled ? 'text-[#0A0A0A]' : 'text-white'}`}>
                            Regalia
                        </h1>
                    </Link>

                    {/* Right: Icons */}
                    <div className={`flex items-center gap-6 ${scrolled ? 'text-[#0A0A0A]' : 'text-white'}`}>
                        <button className="hover:scale-110 transition-transform hidden sm:block"><Search className="w-4 h-4" /></button>
                        <button className="hover:scale-110 transition-transform hidden sm:block"><Heart className="w-4 h-4" /></button>
                        <button className="relative group hover:scale-110 transition-transform">
                            <ShoppingBag className="w-4 h-4" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#D4AF37] text-white text-[7px] flex items-center justify-center rounded-full font-bold">0</span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[110] bg-[#0A0A0A] text-white p-12 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-24">
                                <h2 className="text-3xl font-cormorant italic">Regalia</h2>
                                <button onClick={() => setMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
                            </div>
                            <div className="flex flex-col gap-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-4xl font-cormorant font-light hover:italic transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-6 mt-20">
                            <Instagram className="w-6 h-6 opacity-40" />
                            <Facebook className="w-6 h-6 opacity-40" />
                            <Twitter className="w-6 h-6 opacity-40" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black font-montserrat">
            <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-full scale-110">
                <img
                    src="/royal_fashion_hero_1772076527739.png"
                    alt="Luxury Fashion Model"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

            <motion.div
                style={{ opacity: opacityFade }}
                className="relative z-10 text-center px-6"
            >
                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                        className="text-[10px] md:text-sm uppercase tracking-[0.5em] text-[#D4AF37] mb-6 font-semibold"
                    >
                        The Winter Exhibition '26
                    </motion.p>
                </div>
                <div className="overflow-hidden mb-8">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-6xl md:text-[8rem] lg:text-[10rem] font-cormorant font-light text-white leading-tight"
                    >
                        Redefine Your <br />
                        <span className="italic">Elegance.</span>
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/demo/regalia/collections">
                        <button className="px-12 py-5 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl">
                            Shop The Collection
                        </button>
                    </Link>
                    <button className="px-12 py-5 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all backdrop-blur-md">
                        Explore Lookbook
                    </button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold">Scroll Down</span>
                <div className="w-[1px] h-12 bg-white/20 relative">
                    <motion.div
                        initial={{ top: 0 }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-1/3 bg-[#D4AF37]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

const Ticker = () => (
    <div className="bg-[#0A0A0A] py-6 border-y border-white/5 relative z-20">
        <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
        >
            {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex items-center gap-20 mx-10">
                    <span className="text-white text-3xl font-cormorant font-light italic tracking-widest uppercase">New Arrivals</span>
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                    <span className="text-[#D4AF37] text-3xl font-cormorant font-light tracking-widest uppercase">Exclusive Designs</span>
                    <span className="w-2 h-2 bg-white/20 rounded-full" />
                    <span className="text-white text-3xl font-cormorant font-light italic tracking-widest uppercase">Premium Quality</span>
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                </div>
            ))}
        </motion.div>
    </div>
);

const BentoGridSection = () => {
    return (
        <section className="py-40 px-8 md:px-16 lg:px-32 bg-[#F5F5F0] overflow-hidden font-montserrat">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-end mb-20">
                    <div className="max-w-xl">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-4">Curated Selections</span>
                        <h2 className="text-5xl md:text-7xl font-cormorant font-normal text-[#0A0A0A] leading-tight mb-8">
                            Crafted for the <br /> <span className="italic text-[#D4AF37]">Discerning</span> Individual.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[900px]">
                    {/* Big Item 1 */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-white shadow-xl shadow-black/5"
                    >
                        <img
                            src="/royal_fashion_women_1772076618374.png"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-700" />
                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-white text-4xl font-cormorant italic mb-6">Women's Collection</h3>
                            <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:gap-6 transition-all">
                                Discover More <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}
                        className="md:col-span-2 relative group overflow-hidden bg-white shadow-xl shadow-black/5"
                    >
                        <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-700" />
                        <div className="absolute top-12 left-12">
                            <h3 className="text-white text-3xl font-cormorant italic mb-2">Heritage Suits</h3>
                            <p className="text-white/60 text-xs tracking-widest uppercase">The Gentlemen's Archive</p>
                        </div>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}
                        className="relative group overflow-hidden bg-[#0A0A0A] p-10 flex flex-col justify-between"
                    >
                        <div className="glass-3 p-6 rounded-full w-20 h-20 flex items-center justify-center mb-10 border border-white/10">
                            <Leaf className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <div>
                            <h4 className="text-white font-cormorant text-2xl mb-4">Sustainability</h4>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">Committed to ethical sourcing and timeless quality.</p>
                        </div>
                    </motion.div>

                    {/* Item 4 */}
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }}
                        className="relative group overflow-hidden bg-[#D4AF37]"
                    >
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                            <span className="text-white text-6xl font-cormorant italic mb-4">50%</span>
                            <span className="text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold">Winter Archive Sale</span>
                            <button className="mt-8 px-6 py-3 border border-white/40 text-white text-[9px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all">Shop Outlet</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ProductCard = ({ name, price, img, category }: any) => (
    <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 30 }}
        className="group cursor-pointer font-montserrat"
    >
        <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-white shadow-2xl shadow-black/5 rounded-2xl border border-black/5">
            <img
                src={img}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

            {/* Quick Add Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="w-full py-4 bg-[#0A0A0A] text-white text-[10px] uppercase tracking-[0.2em] font-bold shadow-2xl flex items-center justify-center gap-3">
                    Add to Bag <ChevronRight className="w-3 h-3" />
                </button>
            </div>

            {/* Tags */}
            <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[#0A0A0A] text-[8px] uppercase tracking-[0.1em] font-black rounded-full shadow-sm">New</span>
            </div>
        </div>
        <div className="text-center px-4">
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-2">{category}</p>
            <h4 className="text-xl font-cormorant font-medium text-[#0A0A0A] mb-2">{name}</h4>
            <p className="text-sm font-light text-[#0A0A0A]/40">${price}</p>
        </div>
    </motion.div>
);

const Lookbook = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={sectionRef} id="lookbook" className="py-40 bg-white overflow-hidden relative font-montserrat">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-24">
                <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-2xl rounded-[40px] border border-black/5">
                        <motion.img
                            style={{ y: yParallax }}
                            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80"
                            className="w-full h-[120%] object-cover scale-110"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-48 h-64 border-[0.5px] border-[#D4AF37] opacity-20 hidden md:block" />
                    <div className="absolute -bottom-12 -left-12 w-48 h-64 bg-[#F5F5F0] -z-10 hidden md:block shadow-inner" />
                </div>
                <div className="w-full lg:w-1/2">
                    <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold block mb-10">Chapter 04: The Void</span>
                    <h2 className="text-6xl md:text-8xl font-cormorant font-light text-[#0A0A0A] leading-tight mb-12">
                        Quiet <br /> <span className="italic">Luxury.</span>
                    </h2>
                    <p className="text-[#0A0A0A]/60 text-lg leading-relaxed font-light mb-16 max-w-lg italic">
                        "Elegance is not about being noticed, it's about being remembered. Our latest collection explores the intersection of minimalism and architectural tailoring."
                    </p>
                    <button className="group flex items-center gap-8 border-b border-[#0A0A0A]/10 pb-4 text-[10px] uppercase tracking-[0.4em] font-black hover:tracking-[0.6em] transition-all">
                        View The Lookbook <ArrowRight className="w-3 h-3 group-hover:translate-x-4 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

const ValueStrip = () => (
    <section className="py-32 bg-[#F5F5F0] border-y border-[#0A0A0A]/5 font-montserrat">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-16">
            {[
                { icon: Globe, title: "Shipping", desc: "Complimentary global delivery" },
                { icon: Leaf, title: "Sustained", desc: "Crafted with organic ethics" },
                { icon: Shield, title: "Certified", desc: "100% Authentic regalia codes" },
                { icon: Clock, title: "Timeless", desc: "Lifetime warranty on craft" }
            ].map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                    <v.icon className="w-8 h-8 text-[#D4AF37] mb-6 stroke-[1px]" />
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#0A0A0A]">{v.title}</h5>
                    <p className="text-[9px] uppercase tracking-widest text-[#0A0A0A]/40 font-medium">{v.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0A0A0A] text-white pt-40 pb-12 px-8 md:px-16 font-montserrat">
        <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32 border-b border-white/5 pb-32">
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-cormorant italic mb-10 lowercase tracking-tighter">Regalia</h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-10 font-light italic">
                        Building a bridge between the heritage of craftsmanship and the infinity of digital expression.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Instagram className="w-4 h-4" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Facebook className="w-4 h-4" /></Link>
                        <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-all"><Twitter className="w-4 h-4" /></Link>
                    </div>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Boutique</h6>
                    <ul className="flex flex-col gap-6 text-xs text-white/50 tracking-widest font-light">
                        <li><Link href="/demo/regalia/collections" className="hover:text-white transition-colors">The Archive</Link></li>
                        <li><Link href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Men's Editorial</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Bespoke Services</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Support</h6>
                    <ul className="flex flex-col gap-6 text-xs text-white/50 tracking-widest font-light">
                        <li><Link href="/demo/regalia/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link href="/demo/regalia/contact" className="hover:text-white transition-colors">Concierge</Link></li>
                        <li><Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#D4AF37] mb-10">Inner Circle</h6>
                    <p className="text-white/40 text-xs mb-8 leading-relaxed font-light italic">Join for early access to our seasonal archives.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4AF37] transition-all text-xs font-light"
                        />
                        <button className="absolute right-0 top-4 text-[#D4AF37] hover:tracking-[0.2em] transition-all"><ArrowRight className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
                <p>© 2026 Regalia Luxury House. All Rights Reserved.</p>
                <div className="flex gap-10">
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Privacy Directive</Link>
                    <Link href="/demo/regalia/privacy" className="hover:text-white transition-colors">Cookies</Link>
                </div>
            </div>
        </div>
    </footer>
);

export default function RegaliaHomePage() {
    return (
        <main className="bg-white min-h-screen selection:bg-[#D4AF37] selection:text-white cursor-crosshair">
            <Nav />
            <Hero />
            <Ticker />

            <BentoGridSection />

            <section id="new-arrivals" className="py-40 px-8 md:px-16 lg:px-32 bg-white font-montserrat">
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                        <div className="max-w-xl">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold block mb-4">Latest Work</span>
                            <h2 className="text-6xl font-cormorant font-normal text-[#0A0A0A] leading-tight">Featured Selections</h2>
                        </div>
                        <button className="px-10 py-5 border-[0.5px] border-black/10 text-[10px] uppercase tracking-[0.3em] font-black hover:bg-[#0A0A0A] hover:text-white transition-all">
                            View All Items
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24">
                        <ProductCard name="The Midnight Peacoat" price="1,450" img="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80" category="Outerwear" />
                        <ProductCard name="Silk Obscura Dress" price="2,200" img="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80" category="Collections" />
                        <ProductCard name="Architectural Blazer" price="1,100" img="https://images.unsplash.com/photo-1548126032-276a60fc61c0?auto=format&fit=crop&q=80" category="Tailoring" />
                        <ProductCard name="Gold Foil Accessories" price="450" img="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cf4?auto=format&fit=crop&q=80" category="Jewelry" />
                    </div>
                </div>
            </section>

            <Lookbook />
            <ValueStrip />

            {/* Newsletter Interstitial */}
            <section className="py-40 bg-[#0A0A0A] text-center px-8 font-montserrat">
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    className="max-w-2xl mx-auto"
                >
                    <h3 className="text-4xl md:text-7xl font-cormorant italic text-white mb-10">Join the Inner Circle.</h3>
                    <p className="text-white/40 text-lg font-light leading-relaxed mb-12 italic">
                        Receive private access to our digital exhibits and seasonal openings.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="E-mail Address"
                            className="flex-1 bg-white/5 border border-white/10 px-8 py-5 text-white text-xs outline-none focus:border-[#D4AF37] transition-all font-light"
                        />
                        <button className="px-12 py-5 bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">Submit</button>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
