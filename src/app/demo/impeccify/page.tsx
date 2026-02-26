"use client";

import { Outfit, Caveat, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { MagnifyingGlass, ShoppingCart, Heart } from "@phosphor-icons/react";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700", "900"] });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

const MENU_STRIP = [
    { name: "Fresh Doughnut", desc: "From warm breads to delightful pastries, made with love", price: "$4.99 each", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=200" },
    { name: "Peanut Cookie", desc: "From warm breads to delightful pastries, made with love", price: "$4.99 each", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=200" },
    { name: "Choco Pastry", desc: "From warm breads to delightful pastries, made with love", price: "$4.99 each", img: "https://images.unsplash.com/photo-1558961363-c288f3435de1?auto=format&fit=crop&q=80&w=200" }
];

const PRODUCTS = [
    { name: "Cupcakes", bg: "#4ABFB4", img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400" },
    { name: "Peanut Cookies", bg: "#F4847A", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400" },
    { name: "Doughnuts", bg: "#F5E6C4", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" },
    { name: "Pastries", bg: "#EACCD0", img: "https://images.unsplash.com/photo-1558961363-c288f3435de1?auto=format&fit=crop&q=80&w=400" },
    { name: "Brownies", bg: "#F5C842", img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=400" }
];

export default function ImpeccifyTemplate() {
    return (
        <main className={`min-h-screen bg-white ${dmsans.className} text-[#2C1503] overflow-x-hidden`}>
            {/* Nav */}
            <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm h-16 flex items-center justify-between px-8">
                <div className={`${outfit.className} text-xl tracking-tight font-black uppercase text-[#1E0F05]`}>
                    impeccify.com
                </div>
                <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7A5C40]">
                    <Link href="#" className="hover:text-[#F4847A]">Home</Link>
                    <Link href="#" className="hover:text-[#F4847A]">About Us</Link>
                    <Link href="#" className="hover:text-[#F4847A]">Products</Link>
                    <Link href="#" className="hover:text-[#F4847A]">Recipes</Link>
                    <Link href="#" className="hover:text-[#F4847A]">Contact</Link>
                </div>
                <div className="flex items-center gap-6">
                    <MagnifyingGlass size={20} className="hidden md:block cursor-pointer text-[#7A5C40] hover:text-[#F4847A]" />
                    <ShoppingCart size={20} className="hidden md:block cursor-pointer text-[#7A5C40] hover:text-[#F4847A]" />
                    <button className="bg-[#F4847A] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#E37369] transition-all">
                        Book a table
                    </button>
                </div>
            </nav>

            {/* Asymmetric Hero */}
            <section className="pt-24 pb-10 px-4 md:px-8 max-w-[1440px] mx-auto min-h-[95vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-[75vh]">
                    {/* Panel A: Main Dark Hero */}
                    <div className="lg:col-span-8 bg-[#1E0F05] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group">
                        {/* Background illustration */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]" />

                        {/* Floating elements */}
                        <div className="w-16 h-16 bg-[#F5C842] absolute top-8 left-8 rounded-full border-[3px] border-dashed border-[#1E0F05] z-10 hidden md:flex items-center justify-center">
                            <span className="text-2xl">🍪</span>
                        </div>

                        {/* Giant Image overlapping text */}
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, type: "spring" }}
                            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800"
                            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 w-[80%] md:w-[60%] object-cover z-20 mix-blend-normal group-hover:scale-105 transition-transform duration-1000 rotate-12 drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                        />

                        {/* Huge Text */}
                        <div className="relative z-10 flex-col flex mt-auto mb-20 pointer-events-none">
                            <h1 className={`${caveat.className} text-[100px] md:text-[180px] leading-[0.7] text-white drop-shadow-2xl`}>Sweet</h1>
                            <h1 className={`${outfit.className} text-[80px] md:text-[140px] font-black leading-[0.8] text-[#F5C842] drop-shadow-2xl`}>DELIGHT!</h1>
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-end gap-6 border-t border-white/10 pt-8 mt-auto">
                            <p className="text-white/60 text-xs leading-relaxed max-w-[200px]">From warm breads to delightful pastries, made with love and the finest ingredients.</p>

                            <div className="flex flex-col items-center">
                                <div className={`${outfit.className} text-5xl font-bold text-white mb-1`}>( 4.9 )</div>
                                <div className="text-[10px] uppercase tracking-widest text-[#F5C842] font-black">Since 1982</div>
                            </div>

                            <button className="bg-[#F5C842] text-[#1E0F05] px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_10px_30px_rgba(245,200,66,0.2)]">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Right column: stacked panels */}
                    <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6 h-full">
                        {/* Panel B: Teal */}
                        <div className="bg-[#4ABFB4] flex-1 rounded-[32px] p-8 flex flex-col items-center justify-between text-center overflow-hidden relative group">
                            <div className="relative z-10">
                                <h2 className={`${outfit.className} text-5xl md:text-6xl font-black text-white leading-none mb-2 tracking-tight`}>SWEET</h2>
                                <p className="text-[9px] uppercase tracking-widest font-black text-[#1E0F05]/60 mb-8">123 Ocean Avenue, Seattle, USA</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?auto=format&fit=crop&q=80&w=400" className="absolute -bottom-10 w-[90%] object-cover group-hover:-translate-y-4 transition-transform duration-500 rounded-2xl shadow-xl" />
                        </div>

                        {/* Panel C: Coral */}
                        <div className="bg-[#F4847A] flex-1 rounded-[32px] p-8 flex flex-col items-center justify-between text-center overflow-hidden relative group">
                            <div className="relative z-10">
                                <h2 className={`${caveat.className} text-6xl md:text-7xl text-[#1E0F05] leading-none mb-2 pt-2`}>Everyday</h2>
                                <p className="text-[9px] uppercase tracking-widest font-black text-white/80 mb-8">123 Ocean Avenue, Seattle, USA</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=400" className="absolute -bottom-20 w-[110%] object-cover group-hover:-translate-y-4 transition-transform duration-500 drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Discount Menu Strip */}
            <section className="px-4 md:px-8 max-w-[1440px] mx-auto mb-32">
                <div className="bg-[#F5E6C4] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                    <div className={`${outfit.className} text-5xl md:text-7xl font-black text-[#2C1503] leading-[0.85] shrink-0 relative z-10`}>
                        20%<br />DISCOUNT
                    </div>

                    <div className="flex-1 w-full flex flex-col gap-6 relative z-10 border-l border-[#7A5C40]/20 pl-0 md:pl-12">
                        {MENU_STRIP.map((item, i) => (
                            <div key={i} className="flex items-center gap-6 justify-between border-b border-[#7A5C40]/10 pb-6 last:border-0 last:pb-0 hover:-translate-y-1 transition-transform cursor-pointer group">
                                <img src={item.img} className="w-16 h-16 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform" />
                                <div className="flex-1">
                                    <h4 className={`${outfit.className} font-bold text-lg text-[#2C1503]`}>{item.name}</h4>
                                    <p className="text-[11px] text-[#7A5C40] mt-1 hidden sm:block w-[80%]">{item.desc}</p>
                                </div>
                                <div className={`${outfit.className} font-bold text-sm text-[#2C1503]`}>{item.price}</div>
                                <button className="w-10 h-10 rounded-full bg-[#F5C842] flex items-center justify-center text-[#2C1503] shadow-md hover:bg-white transition-colors shrink-0">
                                    <span className="font-bold text-xl leading-none">+</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Typographic Section */}
            <section className="py-20 px-8 max-w-[800px] mx-auto text-center relative z-10">
                <h2 className={`${outfit.className} text-4xl md:text-5xl font-black text-[#2C1503] mb-12 flex items-center justify-center flex-wrap gap-x-4 gap-y-2`}>
                    Our Story,
                    <span className="border-[3px] border-[#2C1503] px-4 py-1 rounded-[12px] bg-[#F5E6C4] rotate-2 inline-block">Baked</span>
                    with Love
                </h2>
                <p className="text-lg md:text-xl text-[#7A5C40] leading-[1.8] font-medium inline-block">
                    Since our first loaf 🍞 came out of the oven, 🧑‍🍳 we&apos;ve been dedicated to bringing you fresh, wholesome, and delicious baked goods. Every recipe is made 🍪 from scratch using premium 🥛 ingredients and lots of love.
                </p>
                <div className="w-full flex justify-center mt-12 opacity-20">
                    <span className="text-4xl text-[#F4847A]">🍩</span>
                </div>
            </section>

            {/* Carousel / Explore Creations */}
            <section className="py-32 px-8 overflow-hidden">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 items-start lg:items-end">
                    <div className="max-w-[400px]">
                        <div className="inline-block border-2 border-[#2C1503] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest text-[#2C1503] mb-6 bg-[#F5C842]">
                            Explore
                        </div>
                        <h2 className={`${caveat.className} text-6xl text-[#2C1503] leading-[0.9] -rotate-2`}>Our Delicious Creations</h2>
                    </div>
                    <p className="text-sm font-medium text-[#7A5C40] leading-relaxed max-w-[300px]">
                        Since our first loaf came out of the oven, we&apos;ve been dedicated to bringing you fresh, wholesome, and delicious baked goods.
                    </p>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-12 hide-scrollbar snap-x px-8 -mx-8 pl-[max(32px,calc((100vw-1440px)/2+32px))]">
                    {PRODUCTS.map((p, i) => (
                        <div key={i} className="min-w-[280px] snap-center group cursor-pointer hover:-translate-y-4 transition-transform duration-500">
                            <div className="h-[320px] rounded-[32px] overflow-hidden relative flex flex-col p-6 items-center" style={{ backgroundColor: p.bg }}>
                                <div className="absolute top-6 left-6 w-10 h-10 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white"><Heart size={20} weight="fill" /></div>
                                <img src={p.img} className="w-[80%] h-[70%] object-cover object-bottom mt-auto rounded-xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h4 className={`${outfit.className} text-xl font-bold mt-6 text-center text-[#2C1503]`}>{p.name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* Split Menu Section */}
            <section className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {/* Dark Panel */}
                    <div className="bg-[#1E0F05] rounded-[32px] p-8 md:p-16 relative overflow-hidden flex flex-col items-start min-h-[600px] z-10 group">
                        <span className="text-4xl absolute right-12 top-12 md:right-auto md:left-12 opacity-80 group-hover:animate-bounce">🍪</span>
                        <h2 className={`${outfit.className} text-4xl md:text-5xl font-black text-white mt-16 mb-16 max-w-[300px] leading-tight`}>
                            Crafted Menus for Every
                            <span className="inline-block bg-[#F5C842] text-[#1E0F05] px-2 ml-2 -rotate-2">Moment</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full mb-16 z-10">
                            {[
                                "Appetizers", "Beverages", "Main Courses", "Kids' Menu", "Desserts", "Seasonal Specials"
                            ].map((cat, i) => (
                                <div key={i}>
                                    <h4 className="flex items-center gap-3 font-bold text-white text-lg mb-2"><div className="w-2 h-2 rounded-full bg-[#F5C842]" />{cat}</h4>
                                    <p className="text-[11px] text-white/50 leading-relaxed max-w-[180px]">From warm breads to delightful pastries, made with love.</p>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#white] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest text-[#1E0F05] hover:bg-[#F5C842] transition-colors mt-auto z-10 shadow-xl">
                            Explore the Menu
                        </button>

                        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600" className="absolute right-[-100px] bottom-[-50px] w-[60%] object-cover grayscale brightness-200 contrast-125 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                    </div>

                    {/* Image Panel */}
                    <div className="bg-[#F5E6C4] rounded-[32px] overflow-hidden min-h-[600px]">
                        <img src="https://images.unsplash.com/photo-1558961363-c288f3435de1?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-32 px-8 max-w-[1440px] mx-auto text-center">
                <h2 className={`${outfit.className} text-4xl md:text-5xl font-black text-[#2C1503] mb-20 flex items-center justify-center flex-wrap gap-x-4 gap-y-2`}>
                    Sweet Words From Our
                    <span className="border-[3px] border-[#2C1503] px-5 py-2 rounded-[12px] bg-white -rotate-1 inline-block shadow-[4px_4px_0_0_#2C1503]">Community</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
                    {[
                        { name: "Sarah Jenkins", role: "Local Foodie", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400", bg: "#4ABFB4" },
                        { name: "Michael Chang", role: "Event Planner", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", bg: "#F4847A" },
                        { name: "Olivia Rossi", role: "Coffee Addict", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400", bg: "#F5C842" },
                    ].map((user, i) => (
                        <div key={i} className="group">
                            <div className="aspect-[4/5] rounded-[32px] overflow-hidden mb-8 relative border-4 border-transparent group-hover:border-[#2C1503] transition-colors shadow-none group-hover:shadow-[8px_8px_0_0_#2C1503]" style={{ backgroundColor: user.bg }}>
                                <img src={user.img} className="w-full h-[90%] object-cover object-top mt-auto absolute bottom-0 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className={`${outfit.className} text-xl font-bold text-[#2C1503]`}>{user.name}</div>
                            <div className="text-xs uppercase tracking-widest text-[#7A5C40] mt-1 font-bold">{user.role}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1E0F05] pt-32 pb-12 px-8 rounded-t-[40px] md:rounded-t-[80px] overflow-hidden relative">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 mb-24">
                    <div className="md:col-span-5">
                        <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400" className="w-32 h-32 rounded-full object-cover mb-8 shadow-2xl grayscale border-4 border-[#F5C842]" />
                        <h2 className={`${outfit.className} text-4xl text-white font-black leading-tight max-w-[300px]`}>
                            Ready to indulge your sweet tooth? Let&apos;s talk.
                        </h2>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className={`${outfit.className} font-bold text-[#F5C842] mb-6 tracking-wide`}>Support</h4>
                        <ul className="space-y-4 text-xs font-medium text-white/50 uppercase tracking-widest">
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className={`${outfit.className} font-bold text-[#F5C842] mb-6 tracking-wide`}>Important Links</h4>
                        <ul className="space-y-4 text-xs font-medium text-white/50 uppercase tracking-widest">
                            <li><Link href="#" className="hover:text-white transition-colors">Home Base</Link></li>
                            <li><Link href="#" className="hover:text-[#F4847A] transition-colors">Our Products</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Career Opportunities</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact The Bakery</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto border-t border-white/10 pt-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                    <div className="text-[10px] uppercase tracking-widest text-[#7A5C40] font-bold text-center lg:text-left">
                        123 Ocean Avenue, Seattle, USA <br className="hidden sm:block" /> © {new Date().getFullYear()} Impeccify.com. All Rights Reserved.
                    </div>

                    <div className={`${outfit.className} text-[60px] md:text-[120px] font-black text-[#F5C842] leading-none shrink-0 drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer`}>
                        Delight !
                    </div>
                </div>
            </footer>
        </main>
    );
}
