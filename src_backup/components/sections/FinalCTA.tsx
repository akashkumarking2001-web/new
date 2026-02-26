"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

function HeartbeatTube() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Create a spline mimicking an ECG path
    const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(-1, 3, 0),
        new THREE.Vector3(0, -4, 0),
        new THREE.Vector3(1, 1, 0),
        new THREE.Vector3(2, 0, 0),
        new THREE.Vector3(10, 0, 0)
    ]);
    curve.curveType = "catmullrom";
    curve.tension = 0.5;

    useFrame((state) => {
        if (meshRef.current) {
            const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
            meshRef.current.scale.setScalar(scale);
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <tubeGeometry args={[curve, 100, 0.1, 8, false]} />
            <meshBasicMaterial color="#00C8FF" transparent opacity={0.6} />
        </mesh>
    );
}

export default function FinalCTA() {
    return (
        <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden z-10">
            {/* 3D Background */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <HeartbeatTube />
                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={0.1} intensity={2} mipmapBlur />
                    </EffectComposer>
                </Canvas>
            </div>

            <div className="max-w-[800px] w-full mx-auto px-6 text-center relative z-20">

                {/* Pre-label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-mono text-[13px] text-pulse-cyan tracking-[0.15em] mb-8"
                >
                    &lt; READY TO BUILD? /&gt;
                </motion.div>

                {/* Headline */}
                <h2 className="font-syne font-extrabold text-display text-white mb-8 leading-[1]">
                    Let&apos;s build something <br />
                    <span className="text-gradient">that pulses.</span>
                </h2>

                {/* Body */}
                <p className="font-sans text-body-lg text-text-secondary max-w-[600px] mx-auto mb-12">
                    You have the vision. We have the engineers, designers, and strategists to make it real — faster and more affordably than you expect possible.
                </p>

                {/* Trust Trio */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {["🔒 NDA Signed First", "💳 Milestone Payments", "✅ Free Consultation"].map((t, i) => (
                        <div key={i} className="font-mono text-[11px] text-text-tertiary uppercase tracking-wider">{t}</div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="h-[64px] px-10 rounded-full bg-axo-gradient font-sans font-semibold text-[16px] text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(123,47,232,0.6)] relative overflow-hidden group">
                        <span className="relative z-10 w-full inline-block">Start Your Project →</span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button className="h-[64px] px-10 rounded-full border border-pulse-cyan/30 font-sans font-medium text-[16px] text-white hover:border-pulse-cyan transition-colors duration-300 relative overflow-hidden group">
                        Book a Free 30-Min Call
                        <div className="absolute inset-0 bg-pulse-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>

                <p className="font-sans text-[12px] text-pulse-orange mt-8 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pulse-orange animate-pulse" />
                    Currently available for new project intake.
                </p>
            </div>
        </section>
    );
}
