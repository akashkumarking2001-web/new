"use client";

import { Outfit, DM_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Leaf, Drop, TrendUp, ShieldCheck, CaretDown, ShoppingCart } from "@phosphor-icons/react";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Mock Data
const WORDS = ["Innovation", "Technology", "Farming"];

const STATS = [
    { num: "20+", label: "Years Of Experience" },
    { num: "30+", label: "Specialist Members" },
    { num: "50+", label: "Successful Project" },
    { num: "98%", label: "Client Satisfaction" }
];

const BENEFITS = [
    { title: "Boost Crop Yields", desc: "Increase productivity with precision farming tools that help you get the most from every acre.", icon: TrendUp, img: "https://images.unsplash.com/photo-1592982537447-6f2a6a0ba31b?auto=format&fit=crop&q=80&w=400" },
    { title: "Save Water Efficiently", desc: "Use just the right amount of water with smart irrigation systems that cut waste and protect the soil.", icon: Drop, img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=400" },
    { title: "Real-Time Data Insights", desc: "Monitor your crops, soil, and weather live—make faster, smarter decisions based on accurate data.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=400" },
    { title: "Eco-Friendly Farming", desc: "Reduce chemical usage and protect natural resources with sustainable practices built into every product.", icon: Leaf, img: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?auto=format&fit=crop&q=80&w=400" }
];

const TEAM = [
    { name: "John Smith", role: "Agronomist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
    { name: "Emily Johnson", role: "Soil Scientist", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { name: "Michael Lee", role: "Irrigation Specialist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" }
];

export default function FarmoraTemplate() {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % WORDS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={`min-h-screen bg-white ${dmsans.className} overflow-x-hidden text-[#444]`}>
            {/* 1. Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 px-8 flex items-center justify-between">
                <div className={`${outfit.className} text-xl font-bold text-[#111] tracking-tight flex items-center`}>
                    Arm<span className="text-[#52B788] mx-[1px]">ò</span>ra
                </div>
                <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold text-[#111]">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-[#52B788] transition-colors">Home <CaretDown size={12} weight="bold" /></div>
                    <Link href="#about" className="hover:text-[#52B788] transition-colors">About</Link>
                    <Link href="#services" className="hover:text-[#52B788] transition-colors">Service</Link>
                    <Link href="#team" className="hover:text-[#52B788] transition-colors">Team</Link>
                    <div className="flex items-center gap-2 cursor-pointer border border-gray-200 px-3 py-1.5 rounded-full hover:border-[#52B788] transition-colors">
                        <ShoppingCart size={14} weight="bold" /> Cart (0)
                    </div>
                </div>
                <button className="bg-[#111] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#52B788] transition-colors shadow-lg shadow-black/10">
                    Contact Us
                </button>
            </nav>

            {/* 2. Hero Section */}
            <section className="relative pt-[100px] bg-gradient-to-r from-white via-white to-[#F0FFF4] min-h-[90vh] overflow-hidden flex items-center">
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                    <div className="lg:col-span-7 pt-12 pb-24 relative">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className={`${outfit.className} text-xl md:text-2xl font-semibold text-[#111]`}>The Future Of</h2>
                            <div className="w-16 h-1 bg-[#D4A373]" />
                        </div>

                        <div className="h-[20px] mb-2 overflow-hidden relative">
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={wordIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs absolute"
                                >
                                    {WORDS[wordIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <h1 className={`${outfit.className} text-5xl md:text-[80px] font-black leading-[1.05] text-[#111] mb-12 tracking-tight`}>
                            <span className="bg-[#52B788] text-white px-4 py-1 inline-block -rotate-1 rounded-md shadow-lg mr-4">Farming</span>
                            <span>Starts Here</span>
                        </h1>

                        <div className="relative h-[250px] md:h-[400px] w-[90%] md:w-[80%] mb-12 flex">
                            <div className="w-[60%] h-full rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                                <img src="https://images.unsplash.com/photo-1595841696677-6479ff3fa1da?auto=format&fit=crop&q=80&w=800" alt="Farmer" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-[50%] h-[70%] rounded-2xl overflow-hidden shadow-xl absolute right-0 bottom-4 border-4 border-white z-0">
                                <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=600" alt="Wheat" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                            <div>
                                <div className="flex -space-x-3 mb-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <img key={i} src={`https://i.pravatar.cc/100?u=farm${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                                    ))}
                                </div>
                                <p className="text-xs font-semibold max-w-[280px] leading-relaxed text-[#111]">
                                    *Trusted By <span className="text-[#52B788] bg-[#E8F5E9] px-1 rounded">2,000+</span> Smart Farms Worldwide To Power Efficient, Modern Agriculture.
                                </p>
                            </div>
                            <button className="bg-[#111] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-[#52B788] transition-colors shadow-2xl shrink-0">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 h-full relative hidden lg:flex items-center justify-center">
                        <div className={`${outfit.className} absolute right-[-80px] text-[180px] font-black text-[#52B788] tracking-widest writing-vertical-rl rotate-180 opacity-5 whitespace-nowrap`}>
                            Farmora
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Stats / About */}
            <section id="about" className="py-32 max-w-[1440px] mx-auto px-8">
                <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-center mb-24 max-w-[600px] mx-auto text-[#111] leading-tight`}>
                    Growing Today, Preserving Tomorrow.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-3 flex flex-col gap-6">
                        {STATS.map((s, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col relative overflow-hidden group hover:border-[#52B788]/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity group-hover:text-[#52B788]">
                                    <Leaf size={32} weight="fill" />
                                </div>
                                <div className={`${outfit.className} text-3xl font-bold text-[#111] mb-1`}>{s.num}</div>
                                <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-4 h-[600px] rounded-3xl overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800" alt="Agri Tech" className="w-full h-full object-cover" />
                    </div>

                    <div className="md:col-span-5 flex flex-col justify-center">
                        <div className="h-[280px] w-full rounded-3xl overflow-hidden shadow-lg mb-10">
                            <img src="https://images.unsplash.com/photo-1535560636737-0cfd6eb4ec27?auto=format&fit=crop&q=80&w=800" alt="Greenhouse" className="w-full h-full object-cover" />
                        </div>
                        <h3 className={`${outfit.className} text-xl font-bold text-[#111] mb-4 leading-snug`}>
                            We&apos;re A Modern Agriculture Company Using Smart Technology To Help Farmers Grow More With Less.
                        </h3>
                        <p className="text-sm leading-relaxed mb-8 opacity-80">
                            Our Mission Is To Make Farming Efficient, Sustainable, And Ready For The Future — One Field At A Time.
                        </p>
                        <button className="bg-[#111] text-white px-8 py-3.5 rounded-full font-bold text-[13px] self-start hover:bg-[#52B788] transition-colors shadow-lg">
                            More About Us
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. Services */}
            <section id="services" className="py-32 bg-[#FAFAFA]">
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold mb-16 text-[#111] leading-tight max-w-[500px]`}>
                            Customized <span className="bg-[#52B788] text-white px-3 py-1 rounded inline-block shadow-md">Services</span> For Every Field And Farmer
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=400",
                                "https://images.unsplash.com/photo-1592982537447-6f2a6a0ba31b?auto=format&fit=crop&q=80&w=400",
                                "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=400",
                                "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?auto=format&fit=crop&q=80&w=400"
                            ].map((img, i) => (
                                <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                    <img src={img} alt={`Service ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex flex-col">
                        <div className="w-full h-[300px] rounded-2xl overflow-hidden mb-8">
                            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800" alt="Soil Health" className="w-full h-full object-cover" />
                        </div>
                        <h4 className={`${outfit.className} text-2xl font-bold text-[#111] mb-4`}>Soil Health Assessment</h4>
                        <p className="text-sm opacity-80 leading-relaxed mb-8 flex-1">
                            Comprehensive soil testing to help you improve fertility, boost crop yields, and make informed decisions for long-term farm productivity.
                        </p>
                        <button className="bg-[#111] text-white px-6 py-2.5 rounded-lg text-xs font-bold self-start mt-auto hover:bg-[#52B788] transition-colors">
                            View Details
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. Benefits */}
            <section className="py-32 max-w-[1440px] mx-auto px-8">
                <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-center mb-20 max-w-[700px] mx-auto text-[#111] leading-tight`}>
                    Top <span className="bg-[#52B788] text-white px-3 py-1 rounded inline-block shadow-md">Benefits</span> Of Our Advanced Farming Solutions.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {BENEFITS.map((b, i) => (
                        <div key={i} className="flex bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden group hover:border-[#52B788]/30 transition-colors h-[220px]">
                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <h4 className={`${outfit.className} font-bold text-xl text-[#111] mb-3`}>{b.title}</h4>
                                <p className="text-[13px] opacity-70 leading-relaxed">{b.desc}</p>
                            </div>
                            <div className="w-[40%] shrink-0 h-full p-4 pl-0">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[#52B788]/10 mix-blend-overlay z-10" />
                                    <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. Team */}
            <section id="team" className="py-32 bg-[#FAFAFA]">
                <div className="max-w-[1440px] mx-auto px-8">
                    <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-center mb-20 max-w-[600px] mx-auto text-[#111] leading-tight`}>
                        Meet <span className="bg-[#52B788] text-white px-3 py-1 rounded inline-block shadow-md">The Experts</span> Behind Our Agricultural Innovations
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TEAM.map((member, i) => (
                            <div key={i} className="bg-white p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 group">
                                <div className="w-full h-[350px] rounded-2xl overflow-hidden mb-6 relative">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                </div>
                                <div className="px-2 pb-2 flex justify-between items-end">
                                    <div>
                                        <h4 className={`${outfit.className} font-bold text-xl text-[#111] mb-1`}>{member.name}</h4>
                                        <div className="text-xs font-semibold text-gray-500">{member.role}</div>
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-[#F0FFF4] text-[#52B788] flex items-center justify-center group-hover:bg-[#52B788] group-hover:text-white transition-colors cursor-pointer">
                                        <ArrowUpRight size={16} weight="bold" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA Banner */}
            <section className="py-20 max-w-[1440px] mx-auto px-8">
                <div className="bg-[#0C120C] rounded-[40px] p-4 relative overflow-hidden">
                    {/* Inner frame */}
                    <div className="border border-white/20 rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="w-full md:w-[30%] h-[200px] md:h-[300px] rounded-3xl overflow-hidden shrink-0 hidden md:block border-4 border-[#0C120C]">
                            <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600" alt="Berries" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 text-center">
                            <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold text-white mb-6 leading-tight`}>
                                Transform Your Farm With Our Solutions
                            </h2>
                            <div className="w-12 h-1 bg-[#52B788] mx-auto mb-6" />
                            <div className={`${outfit.className} text-3xl font-bold text-white mb-10`}>
                                Start Today.
                            </div>
                            <button className="bg-[#52B788] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#111] transition-colors shadow-xl">
                                Contact Us
                            </button>
                        </div>

                        <div className="w-full md:w-[20%] h-[200px] md:h-[300px] rounded-3xl overflow-hidden shrink-0 hidden md:block border-4 border-[#0C120C]">
                            <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600" alt="Plant" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Testimonials */}
            <section className="py-32 bg-[#FAFAFA] overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8 text-center">
                    <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold mb-20 max-w-[700px] mx-auto text-[#111] leading-tight`}>
                        What <span className="bg-[#52B788] text-white px-3 py-1 rounded inline-block shadow-md">Our Clients</span> Say About Our Solutions
                    </h2>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row relative">
                        <div className="w-full md:w-1/3 h-[300px] md:h-auto">
                            <img src="https://images.unsplash.com/photo-1595841696677-6479ff3fa1da?auto=format&fit=crop&q=80&w=600" alt="Client" className="w-full h-full object-cover md:rounded-l-3xl" />
                        </div>
                        <div className="w-full md:w-2/3 p-12 text-left relative flex flex-col justify-center">
                            <div className={`${outfit.className} text-[100px] text-[#52B788]/20 leading-[0] absolute top-20 right-12`}>&quot;</div>
                            <p className="text-xl leading-relaxed text-[#111] font-medium mb-10 relative z-10 italic">
                                &quot;Farmora revolutionized the way we manage our 500-acre corn farm. The precision tools and sustainable practices have significantly boosted our yield while reducing water waste by 30%.&quot;
                            </p>
                            <div>
                                <h4 className={`${outfit.className} font-bold text-xl text-[#111]`}>Robert Dawson</h4>
                                <div className="text-xs font-semibold text-[#52B788] uppercase tracking-wider mt-1">Dawson Family Farms</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Footer */}
            <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="pr-12 col-span-1 md:col-span-1">
                            <div className={`${outfit.className} text-2xl font-bold text-[#111] tracking-tight mb-6 flex items-center`}>
                                Arm<span className="text-[#52B788] mx-[1px]">ò</span>ra
                            </div>
                            <p className="text-xs leading-relaxed text-gray-500 mb-6">
                                The future of modern farming. We build smart, sustainable solutions for a growing world.
                            </p>
                        </div>

                        <div>
                            <h4 className={`${outfit.className} font-bold text-[#111] mb-6`}>Services</h4>
                            <ul className="space-y-4 text-xs font-medium text-gray-500">
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">Precision Agriculture</Link></li>
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">Smart Irrigation</Link></li>
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">Soil Analytics</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className={`${outfit.className} font-bold text-[#111] mb-6`}>Company</h4>
                            <ul className="space-y-4 text-xs font-medium text-gray-500">
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">About Us</Link></li>
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">Our Team</Link></li>
                                <li><Link href="#" className="hover:text-[#52B788] transition-colors">Careers</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className={`${outfit.className} font-bold text-[#111] mb-6`}>Contact</h4>
                            <ul className="space-y-4 text-xs font-medium text-gray-500">
                                <li className="text-[#111] font-bold">+1 (800) 123-4567</li>
                                <li>hello@farmora.demo</li>
                                <li>123 Valley Road, Greenfield</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between text-xs font-medium text-gray-400 border-t border-gray-100 pt-8">
                        <p>© {new Date().getFullYear()} Farmora Agritech. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="#" className="hover:text-[#52B788] transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-[#52B788] transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
