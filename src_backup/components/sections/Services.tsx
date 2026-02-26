"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Monitor, DeviceMobile, Palette, TrendUp, CheckCircle } from "@phosphor-icons/react";
// We use phosphor-react for icons, wait, we installed lucide-react and @phosphor-icons/react. Let's use @phosphor-icons/react.

import * as THREE from "three";

// 3D Components
function Web3D({ active }: { active: boolean }) {
    const meshRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * (active ? 0.8 : 0.2);
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
        }
    });

    return (
        <group ref={meshRef}>
            <mesh>
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial color="#00C8FF" transparent opacity={0.2} depthWrite={false} wireframe />
            </mesh>
            <mesh position={[0, 0, 0.1]}>
                <planeGeometry args={[2.8, 1.8]} />
                <meshStandardMaterial color="#00C8FF" emissive="#00C8FF" emissiveIntensity={active ? 0.5 : 0.1} transparent opacity={0.1} />
            </mesh>
        </group>
    );
}

function Mobile3D({ active }: { active: boolean }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y -= delta * (active ? 1 : 0.4);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Phone 1 */}
            <mesh position={[-0.8, 0, 0]} rotation={[0, Math.PI / 6, 0]}>
                <boxGeometry args={[1.2, 2.4, 0.1]} />
                <meshStandardMaterial color="#7B2FE8" wireframe />
            </mesh>
            {/* Phone 2 */}
            <mesh position={[0.8, 0.4, -0.5]} rotation={[0, -Math.PI / 6, 0]}>
                <boxGeometry args={[1.2, 2.4, 0.1]} />
                <meshStandardMaterial color="#A020C8" transparent opacity={0.4} wireframe />
            </mesh>
        </group>
    );
}

function Design3D({ active }: { active: boolean }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.2;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
        }
    });

    return (
        <group ref={groupRef} rotation={[0.4, 0.4, 0]}>
            <mesh position={[0, 0, 0.5]}>
                <planeGeometry args={[2, 1.5]} />
                <meshStandardMaterial color="#FF6B35" wireframe />
            </mesh>
            <mesh position={[0.5, -0.5, 0]}>
                <planeGeometry args={[2, 1.5]} />
                <meshStandardMaterial color="#FF8C6B" transparent opacity={0.5} wireframe />
            </mesh>
            <mesh position={[-0.5, 0.5, -0.5]}>
                <planeGeometry args={[2, 1.5]} />
                <meshStandardMaterial color="#FF6B35" transparent opacity={0.2} wireframe />
            </mesh>
        </group>
    );
}

function Marketing3D({ active }: { active: boolean }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * (active ? 0.6 : 0.2);
        }
    });

    return (
        <group ref={groupRef}>
            <mesh position={[-1, -0.5, 0]}>
                <boxGeometry args={[0.5, 1, 0.5]} />
                <meshStandardMaterial color="#3B6EFF" transparent opacity={0.4} wireframe />
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.5, 2, 0.5]} />
                <meshStandardMaterial color="#3B6EFF" transparent opacity={0.6} wireframe />
            </mesh>
            <mesh position={[1, 0.5, 0]}>
                <boxGeometry args={[0.5, 3, 0.5]} />
                <meshStandardMaterial color="#3B6EFF" wireframe />
            </mesh>
        </group>
    );
}

// Service Card Component
function ServiceCard({
    title, sub, body, services, tech, diff, accent, Icon, Scene, id
}: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="gradient-border group service-card block h-full"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="glass-2 p-8 lg:p-10 h-full flex flex-col relative overflow-hidden rounded-[20px]">
                {/* Hover Gradient Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${accent} 0%, transparent 70%)` }}
                />

                {/* Animated ECG Line Bottom */}
                <svg className="absolute bottom-0 left-0 w-full h-8 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" viewBox="0 0 400 30" preserveAspectRatio="none">
                    <path d="M0,15 L120,15 L160,5 L200,25 L240,15 L400,15" stroke={accent} strokeWidth="2" fill="none" strokeDasharray="400" strokeDashoffset={hovered ? 0 : 400} className="transition-all duration-[1.5s]" />
                </svg>

                {/* 3D Canvas wrapper */}
                <div className="w-full h-[180px] mb-8 relative rounded-xl overflow-hidden glass-1">
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="pointer-events-none">
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Scene active={hovered} />
                    </Canvas>
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center glass-3 z-10 box-shadow">
                        <Icon size={24} color={accent} weight="duotone" />
                    </div>
                </div>

                <h3 className="font-syne font-bold text-2xl text-white mb-2">{title}</h3>
                <h4 className="font-sans font-medium text-text-secondary text-[15px] mb-6">{sub}</h4>

                <p className="font-sans text-body text-text-tertiary mb-8 leading-relaxed">
                    {body}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                    {services.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-text-primary text-[14px]">
                            <span className="mt-1 flex-shrink-0" style={{ color: accent }}>✦</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                    {tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full text-[11px] font-mono glass-1 text-white/70">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-auto glass-1 p-5 rounded-xl border-l-[3px]" style={{ borderLeftColor: accent }}>
                    <p className="font-sans text-[13px] text-text-primary leading-relaxed">
                        {diff}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const cards = [
        {
            id: "web",
            title: "Web Development",
            sub: "High-Performance Websites & Web Applications",
            body: "We architect web platforms that don't just look exceptional — they perform exceptionally. Built on Next.js with React Server Components, TypeScript for rock-solid reliability, and deployed to global edge networks, our websites load faster and rank higher than anything your competitors are running.",
            services: [
                "Custom Website Design & Development",
                "Progressive Web Applications (PWA)",
                "E-commerce Platforms (Custom / Shopify / Next.js)",
                "Enterprise SaaS Web Applications",
                "Admin Dashboards & CRM Interfaces",
                "Headless CMS & API-First Architecture",
                "SEO-Optimized, Core Web Vitals-Certified Builds",
                "Landing Pages & High-Conversion Funnels"
            ],
            tech: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "AWS"],
            diff: "⚡ Every website we build targets 95+ Google PageSpeed — because performance is not a feature. It is the foundation.",
            accent: "#00C8FF",
            Icon: Monitor,
            Scene: Web3D
        },
        {
            id: "mobile",
            title: "Mobile App Development",
            sub: "Native Android, iOS & Cross-Platform Applications",
            body: "Your users live on their phones. We build apps that become their daily habit. From native Android (Kotlin/Jetpack Compose) and iOS (Swift/SwiftUI) to cross-platform powerhouses in Flutter and React Native — every app we ship is crafted for performance, retention, and real-world reliability.",
            services: [
                "Native Android Development (Kotlin, Jetpack Compose)",
                "Native iOS Development (Swift, SwiftUI)",
                "Flutter Cross-Platform Applications",
                "React Native Applications",
                "App UI/UX Design & Prototyping",
                "API & Backend Integration",
                "Push Notifications & Real-Time Features",
                "App Store & Google Play Submission & ASO",
                "Biometric Auth, Payment Gateways, GPS, AR"
            ],
            tech: ["Flutter", "Swift", "Kotlin", "Firebase", "Realm", "Expo"],
            diff: "🛡️ Zero-crash architecture. Our apps average a 99.96% crash-free session rate across 200+ published applications.",
            accent: "#7B2FE8",
            Icon: DeviceMobile,
            Scene: Mobile3D
        },
        {
            id: "uiux",
            title: "UI/UX Design",
            sub: "Interfaces That Users Remember & Return To",
            body: "Design is the first conversation your product has with the world. We don't design for aesthetics alone — we design for behavior, for conversion, for loyalty. Our process is research-first: we study your users before we sketch a single frame, ensuring every decision is grounded in data & psychology.",
            services: [
                "User Research & Persona Development",
                "Information Architecture & User Flow Mapping",
                "Wireframing & Low-Fidelity Prototyping",
                "High-Fidelity UI Design in Figma",
                "Interactive Prototype for Stakeholder Demos",
                "Design System Creation & Documentation",
                "Brand Identity & Visual Language Development",
                "Motion Design & Micro-Interaction Spec"
            ],
            tech: ["Figma", "Adobe XD", "Principle", "Lottie", "Blender", "After Effects"],
            diff: "🎨 Design that converts. We merge visual storytelling with cognitive psychology to maximize user engagement.",
            accent: "#FF6B35",
            Icon: Palette,
            Scene: Design3D
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            sub: "Growth Engineering Built on Real Data",
            body: "Traffic without strategy is noise. We build growth systems that compound — SEO that builds domain authority over months and years, paid campaigns that improve ROAS with every optimization cycle, and content strategies that position your brand as the authority. We report revenue, not impressions.",
            services: [
                "Technical SEO & On-Page Optimization",
                "Google Search Ads (PPC)",
                "Meta Advertising (Facebook & Instagram)",
                "Content Strategy & Blog Growth",
                "Email Marketing & Automation Funnels",
                "Conversion Rate Optimization (CRO)",
                "Analytics Setup & KPI Dashboard",
                "Social Media Management"
            ],
            tech: ["GA4", "Semrush", "Meta Pixel", "Ahrefs", "HubSpot", "Hotjar"],
            diff: "🚀 Data-driven scaling. We don't guess — we test, measure, and scale what works to maximize your return on ad spend.",
            accent: "#3B6EFF",
            Icon: TrendUp,
            Scene: Marketing3D
        }
    ];

    return (
        <section className="py-24 relative z-10" id="services">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)]">

                {/* Section Header */}
                <div className="mb-16">
                    <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.15em] mb-4">
                        &lt; WHAT WE BUILD /&gt;
                    </div>
                    <h2 className="font-syne font-bold text-h2 text-white mb-4">
                        Services That Power Your Vision
                    </h2>
                    <p className="font-sans text-body-lg text-text-secondary max-w-[600px]">
                        Every line of code. Every pixel. Every interaction. Built with precision, delivered with purpose.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 services-grid">
                    {cards.map((card) => (
                        <ServiceCard key={card.id} {...card} />
                    ))}
                </div>

            </div>
        </section>
    );
}
