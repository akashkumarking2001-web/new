"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/sections/Footer";
import dynamic from "next/dynamic";

const VoidField = dynamic(() => import("@/components/3d/VoidField"), { ssr: false });

export default function CategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;
    const [demos, setDemos] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/portfolio')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter((d: any) => d.category === category && (d.status === "ON" || !d.status));
                setDemos(filtered.sort((a: any, b: any) => (a.order || 0) - (b.order || 0)));
            });
    }, [category]);

    const getCategoryTitle = () => {
        switch (category) {
            case "dynamic": return "High-End Dynamic Experiences";
            case "static": return "Precision Digital Structures";
            case "software": return "High-End Solutions";
            default: return category;
        }
    };

    return (
        <main className="bg-void min-h-screen relative w-full">
            <VoidField />
            <Navigation />

            <div className="relative z-10 w-full overflow-hidden">
                <div className="pt-32 pb-20 px-[max(24px,4vw)] max-w-[1440px] mx-auto">
                    <Link href="/#portfolio">
                        <button className="mb-8 font-mono text-[11px] text-pulse-cyan uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            ← Back to Catalog
                        </button>
                    </Link>

                    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <div className="text-left">
                            <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.2em] mb-4 uppercase">&lt; Full_Gallery /&gt;</div>
                            <h1 className="font-syne font-bold text-5xl text-white mb-6 capitalize px-2 border-l-4 border-pulse-cyan">
                                {getCategoryTitle()}
                            </h1>
                        </div>

                        <div className="glass-2 p-6 rounded-2xl border-l-[4px] border-pulse-cyan bg-pulse-cyan/5">
                            <p className="font-mono text-[10px] text-pulse-cyan uppercase tracking-widest mb-3 font-bold">● Customization Note</p>
                            <p className="font-sans text-sm text-text-primary leading-relaxed italic">
                                "These are demo projects intended to show our capabilities. Unlike other agencies that reuse the same templates, <span className="text-white font-bold">we do not use pre-made templates for our clients</span>. Every project we deliver is 100% customized and built from scratch based specifically on your business requirements and unique needs."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {demos.map((demo, i) => (
                            <div key={i} className="glass-2 p-6 rounded-[32px] border border-white/10 flex flex-col group">
                                <div className="aspect-[4/3] bg-surface-raised rounded-2xl relative overflow-hidden mb-6 border border-white/5">
                                    <Image
                                        src={demo.image}
                                        alt={demo.name}
                                        fill
                                        className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                        <Link href={demo.link} target="_blank">
                                            <button className="px-8 py-4 bg-white text-black font-bold rounded-full uppercase tracking-widest text-[12px] hover:scale-105 active:scale-95 transition-all">
                                                Preview Demo
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="px-1">
                                    <div className="text-[10px] font-mono uppercase tracking-widest font-bold mb-2" style={{ color: demo.accent }}>{demo.type}</div>
                                    <h3 className="text-2xl font-syne font-bold text-white mb-4">{demo.name}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                                        {demo.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                                        {demo.features.map((f: string, j: number) => (
                                            <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-mono text-text-primary border border-white/10 uppercase">
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {demos.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-text-secondary font-mono">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
