"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AbstractSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <mesh ref={meshRef} scale={2}>
            <icosahedronGeometry args={[1, 2]} />
            <meshBasicMaterial color="#7B2FE8" wireframe transparent opacity={0.15} />
        </mesh>
    );
}

const AnimatedCounter = ({ value, label }: { value: number, label: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    // Create a spring that goes from 0 to value when inView becomes true
    const spring = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, spring, value]);

    // Use a state to hold the formatted number
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        return spring.on("change", (latest) => {
            setDisplayValue(Math.floor(latest).toString());
        });
    }, [spring]);

    return (
        <div ref={ref} className="glass-1 p-6 flex flex-col items-center justify-center rounded-2xl border border-white/5">
            <div className="font-mono text-4xl text-gradient font-bold mb-2">
                {displayValue}{(label.includes('Satisfaction') || label.includes('Rate')) ? '%' : '+'}
            </div>
            <div className="font-sans text-sm text-text-secondary uppercase tracking-wider">{label}</div>
        </div>
    );
}

import { useState } from "react";

export default function AboutVision() {
    const containerRef = useRef<HTMLElement>(null);
    const text = "AxoSoul exists because the world deserves digital products that actually work — for the people who use them and for the businesses that build them. We are engineers, designers, and strategists who believe that premium quality should never come with an impossible price tag. We call this the pulse: the energy in every line of code, every design decision, every deadline we honour.";

    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 relative z-10 min-h-screen flex flex-col justify-center overflow-hidden">

            {/* 3D Background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <AbstractSphere />
                </Canvas>
            </div>

            <div className="max-w-[1200px] mx-auto px-[max(24px,4vw)] relative z-20">

                {/* Large Statement */}
                <div className="max-w-[1000px] mx-auto text-center mb-24">
                    <h2 className="font-syne font-bold text-[clamp(1.5rem,4vw,3.5rem)] leading-snug flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {words.map((word, i) => {
                            const isGradient = ["pulse:", "energy"].includes(word.toLowerCase());
                            return (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0.2, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, margin: "-10% 0px -20% 0px" }}
                                    transition={{ duration: 0.4, delay: i * 0.02 }}
                                    className={isGradient ? "text-gradient" : "text-white"}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </h2>
                </div>

                {/* Section Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-20">
                    <AnimatedCounter value={200} label="Projects" />
                    <AnimatedCounter value={15} label="Countries" />
                    <AnimatedCounter value={98} label="Satisfaction" />
                    <AnimatedCounter value={5} label="Years" />
                </div>

            </div>
        </section>
    );
}
