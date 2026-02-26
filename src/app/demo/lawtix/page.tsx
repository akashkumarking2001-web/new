"use client";

import { Playfair_Display, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import { Scales, Phone, ArrowUpRight, CaretLeft, CaretRight, X, ArrowRight, Tree, House, Heartbeat, ShieldCheck } from "@phosphor-icons/react";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Mock Data
const SERVICES = [
    { title: "Environmental Law", icon: Tree, desc: "Amet quis id velit dolor, Et egestas ut turpis ultricies vitae. Purus eu egestas viverra." },
    { title: "Estate Planning", icon: House, desc: "Risus amet nulla gravida et ornare mattis id. Non sed ut et habitant et id pharetra." },
    { title: "Medical Malpractice", icon: Heartbeat, desc: "Morbi odio faucibus massa dui. Quam elementum pretium in diam semper. At." },
    { title: "Intellectual Property", icon: ShieldCheck, desc: "Tellus sapien ut magna ac in libero massa. Ut mattis amet diam rhoncus." }
];

const CASES = [
    { title: "Workers' Compensation Case", amount: "$600,000", image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?auto=format&fit=crop&q=80&w=800" },
    { title: "Real Estate Lawsuit", amount: "$400,000", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
    { title: "Wrongful Termination Case", amount: "$500,000", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
    { title: "Divorce Settlement Agreement", amount: "$300,000", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" }
];

const TESTIMONIALS = [
    { text: "Lawtix handled my dispute professionally and with expertise. Their commitment allowed me to proceed with confidence.", name: "Eleanor Rigby", role: "CEO, TechFlow", img: "https://i.pravatar.cc/150?u=1" },
    { text: "I was in a tough situation after an accident, and Lawtix made everything so much easier. They delivered impressive results.", name: "Jonas Harrison", role: "Entrepreneur", img: "https://i.pravatar.cc/150?u=2" },
    { text: "From the initial consultation to the verdict, Lawtix exceeded my expectations. Their team is truly dedicated.", name: "Rebecca Taylor", role: "Marketing Director", img: "https://i.pravatar.cc/150?u=3" }
];

const TEAM = [
    { name: "Karen Brouks", role: "Elder Law Attorney", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
    { name: "Sophia Miller", role: "Environmental Attorney", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { name: "Lisa Parker", role: "Tax Attorney", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" }
];

export default function LawtixTemplate() {
    const [testiIndex, setTestiIndex] = useState(0);

    const nextTesti = () => setTestiIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prevTesti = () => setTestiIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <main className={`min-h-screen bg-[#FFFFF7] ${dmsans.className} overflow-x-hidden text-[#1a1a1a]`}>
            {/* 1. Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#1B4332] text-white py-5 px-8 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#1B4332]">
                        <Scales size={18} weight="fill" />
                    </div>
                    <span className={`${playfair.className} text-xl tracking-wide uppercase`}>Lawtix</span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-widest font-medium opacity-90">
                    <Link href="#" className="hover:text-[#C9A84C] transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-[#C9A84C] transition-colors">About</Link>
                    <Link href="#services" className="hover:text-[#C9A84C] transition-colors">Service</Link>
                    <Link href="#testimonials" className="hover:text-[#C9A84C] transition-colors">Blog</Link>
                    <Link href="#cases" className="hover:text-[#C9A84C] transition-colors">Case Result</Link>
                </div>
                <button className="bg-[#C9A84C] text-[#1B4332] px-6 py-2.5 rounded text-[11px] uppercase tracking-widest font-bold hover:bg-white transition-colors">
                    Free Consultation
                </button>
            </nav>

            {/* 2. Hero Section */}
            <section className="relative pt-[120px] bg-[#1B4332] min-h-[90vh] flex items-center">
                <div className="max-w-[1440px] mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white py-20 z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[1px] bg-[#C9A84C]" />
                            <span className="text-[#C9A84C] uppercase tracking-widest text-xs font-bold">Our Story</span>
                        </div>
                        <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold leading-[1.1] mb-8`}>
                            Safeguarding justice,<br />solving issues
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 mb-12">
                            <button className="bg-[#C9A84C] text-[#1B4332] px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-colors">
                                Hire Expert
                            </button>
                            <div className="flex items-center gap-3 text-white/90">
                                <Phone size={24} color="#C9A84C" />
                                <span className="text-sm font-medium tracking-wide">+340 460-0868203</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/150?u=lawyer" alt="Lawyer" className="w-12 h-12 rounded-full border-2 border-[#C9A84C] object-cover" />
                                <div>
                                    <div className="text-[#C9A84C] font-bold text-lg">20+</div>
                                    <div className="text-xs uppercase tracking-widest opacity-70">Lawyers</div>
                                </div>
                            </div>
                            <p className="text-sm opacity-80 leading-relaxed max-w-[300px] border-l border-white/10 pl-8">
                                Learn about our firm&apos;s inspiring journey, from its foundation to becoming a trusted leader in legal services, committed to delivering exceptional results for our clients.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Fake Lady Justice Image - Using an architectural/legal aesthetic unslapsh image */}
                        <img
                            src="https://images.unsplash.com/photo-1542468249-fa0812739ea8?auto=format&fit=crop&q=80&w=1000"
                            alt="Lady Justice"
                            className="absolute right-0 top-1/2 -translate-y-1/2 h-[120%] object-cover object-left max-w-none mix-blend-luminosity opacity-40 shadow-2xl rounded-l-full"
                        />
                    </div>
                </div>
                {/* 3. Logo/Client Strip */}
                <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-[#173A2B] overflow-hidden py-6">
                    <div className="flex gap-16 items-center flex-nowrap animate-[marquee_20s_linear_infinite] opacity-50 text-white min-w-max px-8">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="flex items-center gap-2 font-bold text-lg tracking-wider">
                                <Scales size={24} /> LOGOIPSUM
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Services Section */}
            <section id="services" className="py-32 px-8 max-w-[1440px] mx-auto bg-white">
                <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-center mb-20 max-w-[600px] mx-auto leading-tight text-[#111]`}>
                    Navigating complexities with legal precision
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((s, i) => (
                        <div key={i} className="bg-white p-10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 rounded-lg group border border-gray-100">
                            <s.icon size={40} weight="light" className="text-[#1B4332] mb-8 group-hover:text-[#C9A84C] transition-colors" />
                            <h3 className={`${playfair.className} font-bold text-xl mb-4 text-[#111]`}>{s.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. About / Story Section */}
            <section id="about" className="py-32 bg-[#1B4332] text-white">
                <div className="max-w-[1440px] mx-auto px-8">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-center mb-20 text-white`}>
                        Pioneering justice with<br />personalized care
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600" alt="Law" className="w-full h-64 object-cover rounded-sm opacity-80" />
                        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600" alt="Meeting" className="w-full h-80 object-cover rounded-sm mt-[-30px] z-10 shadow-2xl relative" />
                        <img src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?auto=format&fit=crop&q=80&w=600" alt="Gavel" className="w-full h-64 object-cover rounded-sm opacity-80" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="opacity-80 leading-relaxed text-sm">
                            Hendrerit et diam mattis aenean quam diam. Sed cursus eget id amet. Eget sapien in pellentesque sed blandit mattis nisl interdum. Senectus nulla arcu eu odio. Nulla et quisque malesuada faucibus bibendum nullam felis.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {[
                            { num: "20+", label: "Years Experience" },
                            { num: "98%", label: "Success Rate" },
                            { num: "500+", label: "Cases Won" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full border border-white/20 flex flex-col items-center justify-center mb-4 text-[#C9A84C]">
                                    <span className={`${playfair.className} text-4xl font-bold`}>{stat.num}</span>
                                </div>
                                <span className="text-xs uppercase tracking-widest opacity-80">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Case Results */}
            <section id="cases" className="py-32 px-8 max-w-[1440px] mx-auto bg-white">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold max-w-[400px] leading-tight text-[#111]`}>
                        Successful outcomes proven client results
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {CASES.map((c, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-6 bg-gray-100 rounded">
                                <img src={c.image} alt={c.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 w-12 h-12 bg-[#1B4332] rounded-full flex items-center justify-center text-white p-3 z-10 transition-transform group-hover:bg-[#C9A84C] group-hover:-rotate-45">
                                    <ArrowUpRight size={20} weight="bold" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                                <h4 className={`${playfair.className} font-bold text-xl text-[#111]`}>{c.title}</h4>
                                <span className="text-sm font-bold text-[#C9A84C]">{c.amount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Testimonials */}
            <section id="testimonials" className="py-32 bg-[#FAFAF8]">
                <div className="max-w-[1440px] mx-auto px-8">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-center mb-20 text-[#111]`}>
                        Testimonials from satisfied clients
                    </h2>

                    <div className="relative max-w-6xl mx-auto">
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: `-${testiIndex * 33.33}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                {TESTIMONIALS.concat(TESTIMONIALS).map((t, i) => (
                                    <div key={i} className="min-w-[400px] w-1/3 bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 shrink-0">
                                        <div className={`${playfair.className} text-[#C9A84C] text-6xl leading-[0] mb-6`}>&quot;</div>
                                        <p className="text-gray-600 italic mb-8 min-h-[100px] text-[15px] leading-relaxed">
                                            {t.text}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <div className="font-bold text-sm text-[#111]">{t.name}</div>
                                                <div className="text-xs text-gray-400">{t.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <div className="flex justify-center gap-4 mt-12">
                            <button onClick={prevTesti} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#1B4332] text-gray-500 hover:text-[#1B4332] transition-colors">
                                <CaretLeft size={20} />
                            </button>
                            <button onClick={nextTesti} className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center text-white hover:bg-[#C9A84C] transition-colors">
                                <CaretRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Team */}
            <section className="py-32 px-8 max-w-[1440px] mx-auto bg-white">
                <div className="flex justify-between items-end mb-16">
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold max-w-[400px] leading-tight text-[#111]`}>
                        Meet the legal experts behind success
                    </h2>
                    <button className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-[#C9A84C] hover:text-white transition-colors">
                        View details
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TEAM.map((member, i) => (
                        <div key={i} className="group relative">
                            <div className="overflow-hidden mb-6 bg-gray-100 h-[500px]">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="bg-white">
                                <h4 className={`${playfair.className} font-bold text-2xl text-[#111] mb-1`}>{member.name}</h4>
                                <span className="text-sm font-medium text-[#1B4332]">{member.role}</span>
                            </div>

                            <div className="absolute bottom-24 right-6 bg-[#1B4332] text-white p-1 rounded-full flex gap-1 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <button className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center"><X size={14} /></button>
                                <button className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center"><ArrowRight size={14} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. Process/CTA */}
            <section className="py-32 bg-[#1B4332] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-[#173A2B] z-0 hidden lg:block" />
                <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight mb-8`}>
                            Focused on process driven by results
                        </h2>
                        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800" alt="Process" className="w-full h-80 object-cover mt-12 opacity-80" />
                    </div>
                    <div className="bg-[#173A2B] lg:bg-transparent p-10 lg:p-0">
                        <div className="bg-[#1B4332] p-10 border-l-4 border-[#C9A84C] shadow-2xl">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 text-[#C9A84C]">
                                <Phone size={28} weight="fill" />
                            </div>
                            <h3 className={`${playfair.className} text-3xl font-bold mb-4`}>Initial Consultation</h3>
                            <p className="text-sm opacity-80 leading-relaxed mb-8">
                                Vel nunc aliquam urna sagittis semper tortor pellentesque. Fusce sit morbi tortor molestie sed habitant. Facilisis velit id pretium.
                            </p>
                            <button className="text-[#C9A84C] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-white transition-colors">
                                Book Now <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Footer */}
            <footer className="bg-[#0D241A] text-white pt-24 pb-8">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
                        <div className="pr-12">
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-[#1B4332]">
                                    <Scales size={18} weight="fill" />
                                </div>
                                <span className={`${playfair.className} text-xl tracking-wide uppercase`}>Lawtix</span>
                            </div>
                            <p className="text-sm opacity-60 leading-relaxed">
                                A premier law firm committed to protecting your rights and delivering exceptional legal outcomes across the globe.
                            </p>
                        </div>

                        <div>
                            <h4 className={`${playfair.className} font-bold text-xl mb-8 text-[#C9A84C]`}>Practice Areas</h4>
                            <ul className="space-y-4 text-sm opacity-80">
                                <li><Link href="#services" className="hover:text-[#C9A84C] transition-colors">Environmental Law</Link></li>
                                <li><Link href="#services" className="hover:text-[#C9A84C] transition-colors">Estate Planning</Link></li>
                                <li><Link href="#services" className="hover:text-[#C9A84C] transition-colors">Medical Malpractice</Link></li>
                                <li><Link href="#services" className="hover:text-[#C9A84C] transition-colors">Intellectual Property</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className={`${playfair.className} font-bold text-xl mb-8 text-[#C9A84C]`}>Firm Links</h4>
                            <ul className="space-y-4 text-sm opacity-80">
                                <li><Link href="#about" className="hover:text-[#C9A84C] transition-colors">About Story</Link></li>
                                <li><Link href="#cases" className="hover:text-[#C9A84C] transition-colors">Case Results</Link></li>
                                <li><Link href="#testimonials" className="hover:text-[#C9A84C] transition-colors">Client Testimonials</Link></li>
                                <li><Link href="#team" className="hover:text-[#C9A84C] transition-colors">Our Team</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className={`${playfair.className} font-bold text-xl mb-8 text-[#C9A84C]`}>Contact</h4>
                            <p className="text-sm opacity-80 mb-4 tracking-wide">+340 460-0868203</p>
                            <p className="text-sm opacity-80 mb-8 tracking-wide">consultation@lawtix.demo</p>
                            <button className="bg-[#1B4332] border border-white/20 hover:border-[#C9A84C] px-6 py-3 text-xs uppercase tracking-widest font-bold w-full transition-colors">
                                Location & Map
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between text-xs opacity-60 uppercase tracking-widest gap-4">
                        <p>© {new Date().getFullYear()} Lawtix Demo. All rights reserved.</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-[#C9A84C]">Privacy Policy</Link>
                            <Link href="#" className="hover:text-[#C9A84C]">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
