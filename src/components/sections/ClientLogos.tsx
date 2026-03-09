"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CLIENTS = [
    { name: "கதிர் பில்டர்ஸ் (Kadhir Builders)", url: "/clients/kadhir.png" },
    { name: "நிலா பேஷன் (Nila Fashion)", url: "/clients/nila.png" },
    { name: "Zenith Health", url: "/clients/zenith.png" },
    { name: "NexaFlow Systems", url: "/clients/nexaflow.png" },
    { name: "Oasis Hospitality", url: "/clients/oasis.png" },
    { name: "Horizon Finance", url: "/clients/horizon.png" },
    { name: "Nova Retail", url: "/clients/nova.png" },
    { name: "Vertex Logistics", url: "/clients/vertex.png" },
    { name: "Crimson Media", url: "/clients/crimson.png" },
    { name: "வேல் ஃபுட்ஸ் (Vel Foods)", url: "/clients/vel.png" },
    { name: "Echo Real Estate", url: "/clients/echo.png" },
    { name: "Aero Sports", url: "/clients/aero.png" },
    { name: "சக்தி மோட்டார்ஸ் (Shakti Motors)", url: "/clients/shakti.png" },
];

export default function ClientLogos() {
    return (
        <section className="w-full relative py-16 bg-void overflow-hidden z-10 border-t border-white/5 border-b">
            <div className="max-w-[1440px] mx-auto px-4 lg:px-12 flex flex-col items-center">
                <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.3em] mb-4 uppercase font-bold text-center">
                    &lt; 50+ Global Partnerships /&gt;
                </div>
                <h2 className="font-syne font-bold text-3xl md:text-4xl text-white mb-10 leading-tight text-center">
                    Trusted by Innovators <span className="text-text-secondary">Worldwide</span>
                </h2>

                {/* Marquee Container */}
                <div className="w-full relative flex items-center group overflow-hidden mask-image-gradient py-6">
                    <div className="flex gap-8 md:gap-12 items-center whitespace-nowrap w-max animate-trustbar-scroll">
                        {/* Duplicate lists for infinite scroll effect */}
                        {[...CLIENTS, ...CLIENTS].map((client, index) => (
                            <div
                                key={index}
                                className="flex-none flex items-center justify-center cursor-default mix-blend-screen opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <div className="relative w-[180px] h-[70px] md:w-[220px] md:h-[90px] overflow-hidden">
                                    <Image
                                        src={client.url}
                                        alt={`${client.name} logo`}
                                        fill
                                        sizes="(max-width: 768px) 180px, 220px"
                                        className="object-contain object-center scale-[1.35]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
