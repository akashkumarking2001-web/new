"use client";

import { Inter } from "next/font/google";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ShoppingCart, Star, GooglePlayLogo, AppleLogo, MapPin, Clock, CreditCard, FacebookLogo, TwitterLogo, LinkedinLogo, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const FEATURES = [
    { title: "Fast Food Delivery", p: "Vitae dapibus augue dignissim blandit etiam. Volutpat in mauris sem mauris egestas eget ridiculus non.", time: "20 min", icon: Clock },
    { title: "Real-Time Tracking", p: "Lacus adipiscing in mattis hendrerit enim. Eu sit teli olm as facilisis arcu dui sapien egestas.", time: "15 min", icon: MapPin },
    { title: "Contactless Payment", p: "Justo quis magna aliquam estus ece erinsue cons entum. Viverra dictum vul est mauris tortor.", time: "Options", icon: CreditCard }
];

export default function DelizioTemplate() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const yPhone = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Animation variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <main className={`min-h-screen bg-white ${inter.className} text-[#1A1A1A] overflow-x-hidden`}>
            {/* Nav */}
            <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm h-16 flex items-center justify-between px-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-white">
                        <ShoppingCart size={16} weight="fill" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Delizio</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <Link href="#" className="hover:text-[#F5A623] text-[#1A1A1A]">Home</Link>
                    <Link href="#" className="hover:text-[#F5A623]">About</Link>
                    <Link href="#" className="hover:text-[#F5A623]">Feature</Link>
                    <Link href="#" className="hover:text-[#F5A623]">Blog</Link>
                    <Link href="#" className="flex items-center gap-1 text-[#F5A623]">Cart (0)</Link>
                </div>
                <button className="bg-[#F5A623] text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_4px_14px_0_rgba(245,166,35,0.39)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.23)] hover:bg-[#e49413] transition-all">
                    Download Now
                </button>
            </nav>

            {/* Hero */}
            <section ref={heroRef} className="pt-28 pb-20 px-8 max-w-[1440px] mx-auto min-h-[90vh] flex items-center relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                    <motion.div style={{ opacity: opacityHero }} className="z-10">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">

                            <motion.div variants={fadeUp} className="flex items-center gap-4 bg-gray-50 w-max pr-6 rounded-full border border-gray-100 shadow-sm">
                                <div className="flex -space-x-2 p-1">
                                    {[1, 2, 3, 4, 5].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-8 h-8 rounded-full border-2 border-white" />)}
                                </div>
                                <span className="text-xs font-semibold text-gray-600">Trusted By 20,000+ People</span>
                            </motion.div>

                            <motion.h1 variants={fadeUp} className="text-[56px] md:text-[72px] font-extrabold leading-[1.05] tracking-tight">
                                Savor freshness meals <br />
                                <span className="text-gray-900 border-b-4 border-[#F5A623]">with every delivery</span>
                            </motion.h1>

                            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-md leading-relaxed">
                                Get fresh, high-quality meals delivered straight to your door. Freshness guaranteed.
                            </motion.p>

                            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-4">
                                <button className="border-2 border-[#F5A623] text-[#F5A623] px-8 py-3.5 rounded-full font-bold hover:bg-[#F5A623] hover:text-white transition-all shadow-lg hover:shadow-xl">
                                    Contact Us
                                </button>
                                <div className="flex gap-4 border-l border-gray-200 pl-6">
                                    <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                        <GooglePlayLogo size={24} className="text-gray-700 group-hover:text-[#F5A623]" weight="fill" />
                                        <div className="text-left">
                                            <div className="text-[10px] text-gray-500">Get it on</div>
                                            <div className="text-xs font-bold">Google Play</div>
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all group">
                                        <AppleLogo size={24} className="text-gray-700 group-hover:text-[#F5A623]" weight="fill" />
                                        <div className="text-left">
                                            <div className="text-[10px] text-gray-500">Download on the</div>
                                            <div className="text-xs font-bold">App Store</div>
                                        </div>
                                    </button>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex gap-4 mt-8 opacity-60">
                                <TwitterLogo size={24} className="hover:text-[#F5A623] cursor-pointer" />
                                <LinkedinLogo size={24} className="hover:text-[#F5A623] cursor-pointer" />
                                <FacebookLogo size={24} className="hover:text-[#F5A623] cursor-pointer" />
                            </motion.div>

                        </motion.div>
                    </motion.div>

                    <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
                        {/* Background lifestyle image */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] h-[110%] rounded-[40px] overflow-hidden shadow-2xl z-0"
                        >
                            <div className="absolute inset-0 bg-black/10 z-10" />
                            <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Tilted Phone Mockup */}
                        <motion.div
                            style={{ y: yPhone }}
                            className="absolute -left-10 top-10 w-[300px] h-[600px] bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-[8px] border-gray-900 z-20 overflow-hidden"
                            initial={{ rotate: -15, x: -100, opacity: 0 }}
                            animate={{ rotate: -8, x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-[#FFF4E5] w-full h-full p-6 flex flex-col items-center pt-24">
                                <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl">
                                    <ShoppingCart size={32} weight="fill" />
                                </div>
                                <h3 className="font-bold text-2xl mb-8">Delizio</h3>
                                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400" className="w-full rounded-xl shadow-lg mb-6 hover:scale-105 transition-transform" />
                                <div className="bg-white w-full p-4 rounded-xl shadow-sm border border-[#F5A623]/20">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="font-bold">Your Order</div>
                                        <div className="text-[#F5A623] font-bold">$24.00</div>
                                    </div>
                                    <button className="w-full bg-[#1A1A1A] text-white py-2 rounded-lg text-xs font-bold">Track Delivery</button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -left-16 bottom-20 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4">
                            <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full"><CheckCircle weight="fill" size={24} /></div>
                            <div>
                                <div className="text-xs text-gray-500">Delivery Status</div>
                                <div className="font-bold text-sm">On the way!</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">The impact we&apos;ve made so far</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
                        {[
                            { n: "95%", l: "On-Time Delivery Rate" },
                            { n: "10,000+", l: "Customer Reviews" },
                            { n: "15+", l: "Daily Orders Processed" },
                            { n: "100%", l: "Satisfaction Guarantee" }
                        ].map((s, i) => (
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                key={i} className="flex flex-col items-center text-center relative px-4"
                            >
                                <div className="text-4xl md:text-5xl font-black mb-2">{s.n}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{s.l}</div>
                                <div className="absolute -bottom-10 w-16 h-8 bg-[#F5A623]/20 rounded-t-full scale-y-50 origin-bottom" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusive Features */}
            <section className="py-24 bg-[#F8F8F6]">
                <div className="max-w-[1440px] mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Exclusive features for<br />seamless ordering</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FEATURES.map((f, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                key={i} className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,166,35,0.1)] transition-all group cursor-pointer"
                            >
                                <div className="h-48 bg-gray-50 rounded-2xl mb-8 flex flex-col justify-end overflow-hidden border border-gray-100 relative pt-4 px-4">
                                    <div className="bg-white p-4 shadow-lg rounded-t-2xl flex-1 flex flex-col relative z-10 group-hover:translate-y-2 transition-transform">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2">
                                                <f.icon className="text-[#F5A623]" size={20} weight="fill" />
                                                <span className="text-xs font-bold text-gray-500">{f.time} estimated</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                                <ArrowRight size={14} className="group-hover:text-[#F5A623]" />
                                            </div>
                                        </div>
                                        <div className="w-full h-2 rounded-full bg-gray-100 mt-auto"><div className="h-full bg-[#F5A623] w-2/3 rounded-full" /></div>
                                    </div>
                                    {/* Mock Map Background for map feature */}
                                    {i === 1 && <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />}
                                </div>
                                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.p}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tag Cloud & How it Works */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Interactive Cloud */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        <div className="absolute w-[400px] h-[400px] bg-[#F5A623]/5 rounded-full blur-3xl" />

                        <div className="relative z-10 w-full h-full">
                            {[
                                { text: "Secure Checkout", t: "10%", l: "10%" },
                                { text: "Order History", t: "25%", l: "40%" },
                                { text: "Quick Reorders", t: "15%", l: "65%" },
                                { text: "Payment Options", t: "45%", l: "5%" },
                                { text: "24/7 Support", t: "40%", l: "70%" },
                                { text: "Easy Navigation", t: "70%", l: "15%" },
                                { text: "Time Estimates", t: "65%", l: "50%" },
                                { text: "Instant Alerts", t: "85%", l: "30%" }
                            ].map((tag, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute bg-[#F5A623] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:scale-110 cursor-pointer whitespace-nowrap"
                                    style={{ top: tag.t, left: tag.l }}
                                    animate={{
                                        y: [0, Math.random() * 15 - 7, 0],
                                        x: [0, Math.random() * 10 - 5, 0]
                                    }}
                                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {tag.text}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="max-w-md">
                        <h2 className="text-4xl font-bold mb-6">Experience our top features today</h2>
                        <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                            Experience our smart, easy-to-use features designed to make every step smoother, from browsing to payment. Take control of your cravings effortlessly!
                        </p>
                        <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#F5A623] transition-colors shadow-xl">
                            See More About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-[#F8F8F6]">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold max-w-lg leading-tight">Happy customers delicious experiences</h2>
                        <div className="flex items-center gap-4 hidden md:flex">
                            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F5A623] hover:text-white hover:border-[#F5A623] transition-all"><ArrowRight size={20} className="rotate-180" /></button>
                            <span className="font-bold text-sm">01/04</span>
                            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F5A623] hover:text-white hover:border-[#F5A623] transition-all"><ArrowRight size={20} /></button>
                        </div>
                    </div>

                    <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x">
                        {[
                            { quote: "I've tried many food delivery apps, but this one stands out! The food is always fresh and incredibly fast. Highly recommend!", author: "Alice Hans", img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=400" },
                            { quote: "We are happy to order more food for us and make informed decisions. The UI is clean, tracking is flawless. Perfection!", author: "Emily Rodriguez", img: "https://images.unsplash.com/photo-1517855620216-01c40ea12b4e?auto=format&fit=crop&q=80&w=400" },
                            { quote: "The 20-minute delivery is no joke. Arrived piping hot and perfectly packaged. Best service I have ever used hands down.", author: "Marcus Johnson", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=400" }
                        ].map((t, i) => (
                            <div key={i} className="min-w-[400px] bg-white rounded-3xl p-6 shadow-sm flex gap-6 shrink-0 snap-center hover:shadow-xl transition-shadow cursor-grab active:cursor-grabbing">
                                <img src={t.img} className="w-28 h-28 rounded-2xl object-cover shrink-0" />
                                <div className="flex flex-col">
                                    <div className="text-[60px] font-serif text-gray-200 leading-[0] mt-6 -ml-2 mb-2">&quot;</div>
                                    <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium flex-1">
                                        {t.quote}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="font-bold text-sm">{t.author}</div>
                                        <div className="flex gap-0.5 text-[#F5A623]">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} weight="fill" />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Banner */}
            <section className="py-12 px-8 max-w-[1440px] mx-auto">
                <div className="bg-[#FFF4E5] rounded-[40px] p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/food.png')]" />
                    <div className="relative z-10 max-w-md">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Download and start ordering now</h2>
                        <p className="text-orange-900/60 font-medium">Get your favorite meals faster than ever with zero delivery fee on your first 3 orders.</p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform font-bold w-full sm:w-auto">
                            <AppleLogo size={32} weight="fill" />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] text-gray-500 font-normal">Download on the</div>
                                <div className="text-sm">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform font-bold w-full sm:w-auto">
                            <GooglePlayLogo size={32} weight="fill" />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] text-gray-500 font-normal">Get it on</div>
                                <div className="text-sm">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="pr-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-white">
                                    <ShoppingCart size={16} weight="fill" />
                                </div>
                                <span className="font-bold text-2xl tracking-tight">Delizio</span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                Delivering freshness right to your door. Experience the finest meals from top-rated restaurants near you.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors cursor-pointer text-gray-400"><TwitterLogo size={20} weight="fill" /></div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors cursor-pointer text-gray-400"><FacebookLogo size={20} weight="fill" /></div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors cursor-pointer text-gray-400"><LinkedinLogo size={20} weight="fill" /></div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6 text-gray-900">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-[#F5A623]">About Us</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Careers</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Blog</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6 text-gray-900">Support</h4>
                            <ul className="space-y-4 text-sm text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-[#F5A623]">Help Center</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Delivery Areas</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Safety Updates</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg mb-6 text-gray-900">Legal</h4>
                            <ul className="space-y-4 text-sm text-gray-500 font-medium">
                                <li><Link href="#" className="hover:text-[#F5A623]">Terms & Conditions</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-[#F5A623]">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 font-medium">
                        <p>© {new Date().getFullYear()} Delizio Technologies Inc. All rights reserved.</p>
                        <p className="mt-4 md:mt-0">Made with ❤️ for food lovers.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
