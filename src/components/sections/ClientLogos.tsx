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
                    <div className="flex gap-16 items-center whitespace-nowrap w-max animate-trustbar-scroll">
                        {/* Duplicate lists for infinite scroll effect */}
                        {[...CLIENTS, ...CLIENTS].map((client, index) => (
                            <div
                                key={index}
                                className="flex-none flex items-center gap-4 cursor-default"
                            >
                                <div className="relative w-[280px] h-[100px] md:w-[320px] md:h-[120px] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                                    <Image
                                        src={client.url}
                                        alt={`${client.name} logo`}
                                        fill
                                        sizes="(max-width: 768px) 280px, 320px"
                                        className="object-contain object-center"
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
