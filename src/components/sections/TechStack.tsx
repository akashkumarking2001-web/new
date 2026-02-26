"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { Html, Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from "@react-three/postprocessing";
import { WebGLContextCleaner } from "../3d/WebGLCleanup";

// Master Tech Data
const TECHS = [
    // Web Core (Inner)
    { name: "React", use: "Dynamic UI", projects: 120, orbit: 1, angle: 0, speed: 0.015, color: "#00C8FF" },
    { name: "Next.js", use: "App Router / SEO", projects: 85, orbit: 1, angle: Math.PI * 0.4, speed: 0.015, color: "#00C8FF" },
    { name: "Node.js", use: "Edge Computing", projects: 90, orbit: 1, angle: Math.PI * 0.8, speed: 0.015, color: "#00C8FF" },
    { name: "TypeScript", use: "Zero-Bugs Reliability", projects: 150, orbit: 1, angle: Math.PI * 1.2, speed: 0.015, color: "#00C8FF" },
    { name: "Tailwind", use: "Responsive Design", projects: 110, orbit: 1, angle: Math.PI * 1.6, speed: 0.015, color: "#00C8FF" },

    // Mobile Systems (Middle)
    { name: "Flutter", use: "Universal Codebase", projects: 65, orbit: 2, angle: 0.2, speed: 0.012, color: "#7B2FE8" },
    { name: "Swift", use: "iOS Excellence", projects: 40, orbit: 2, angle: Math.PI * 0.4 + 0.2, speed: 0.012, color: "#7B2FE8" },
    { name: "Kotlin", use: "Android Native", projects: 45, orbit: 2, angle: Math.PI * 0.8 + 0.2, speed: 0.012, color: "#7B2FE8" },
    { name: "Firebase", use: "Realtime Systems", projects: 70, orbit: 2, angle: Math.PI * 1.2 + 0.2, speed: 0.012, color: "#7B2FE8" },
    { name: "Expo", use: "Rapid Prototyping", projects: 25, orbit: 2, angle: Math.PI * 1.6 + 0.2, speed: 0.012, color: "#7B2FE8" },

    // Cloud & Infra (Outer)
    { name: "AWS", use: "Infinite Scalability", projects: 55, orbit: 3, angle: 0.4, speed: 0.008, color: "#FF6B35" },
    { name: "Supabase", use: "Modern Data Layer", projects: 40, orbit: 3, angle: Math.PI * 0.4 + 0.4, speed: 0.008, color: "#FF6B35" },
    { name: "Vercel", use: "Zero-Downtime Deploy", projects: 100, orbit: 3, angle: Math.PI * 0.8 + 0.4, speed: 0.008, color: "#FF6B35" },
    { name: "PostgreSQL", use: "Relational Power", projects: 80, orbit: 3, angle: Math.PI * 1.2 + 0.4, speed: 0.008, color: "#FF6B35" },
    { name: "Docker", use: "Consistent Runtime", projects: 60, orbit: 3, angle: Math.PI * 1.6 + 0.4, speed: 0.008, color: "#FF6B35" },
];

function Node({ tech, setHovered }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);
    const radius = tech.orbit * 4;
    const initialAngle = tech.angle;

    // Each orbit has a specific tilt for a "planetary system" look
    const orbitTiltX = (tech.orbit - 1) * 0.3;
    const orbitTiltZ = (tech.orbit - 1) * 0.15;

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Progress angle
        meshRef.current.userData.angle += tech.speed * (delta * 60) * 0.5;
        const currentA = meshRef.current.userData.angle;

        // Position on 3D orbit
        const x = Math.cos(currentA) * radius;
        const z = Math.sin(currentA) * radius;

        // Apply tilt transformation
        const pos = new THREE.Vector3(x, 0, z);
        pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), orbitTiltX);
        pos.applyAxisAngle(new THREE.Vector3(0, 0, 1), orbitTiltZ);

        meshRef.current.position.copy(pos);
        if (lightRef.current) lightRef.current.position.copy(pos);

        // Sub-rotation for the crystal shape
        meshRef.current.rotation.y += delta * 0.5;
        meshRef.current.rotation.x += delta * 0.3;

        // Dynamic scaling on hover logic would go here if needed
    });

    return (
        <group>
            {/* Soft Glow Light */}
            <pointLight ref={lightRef} intensity={2} distance={5} color={tech.color} />

            <mesh
                ref={meshRef}
                userData={{ angle: initialAngle }}
                onPointerOver={(e) => { e.stopPropagation(); setHovered(tech); document.body.style.cursor = "pointer"; }}
                onPointerOut={() => { setHovered(null); document.body.style.cursor = "auto"; }}
            >
                {/* Crystal Geometry */}
                <icosahedronGeometry args={[0.35 + (tech.orbit * 0.05), 0]} />
                <meshPhysicalMaterial
                    color={tech.color}
                    emissive={tech.color}
                    emissiveIntensity={0.6}
                    roughness={0.1}
                    metalness={0.9}
                    clearcoat={1}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </group>
    );
}

function CenterSystem() {
    const shieldRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (shieldRef.current) {
            shieldRef.current.rotation.y -= 0.01;
            shieldRef.current.rotation.z += 0.005;
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
            shieldRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <group>
            {/* The Logo Plane */}
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Html center transform scale={0.8} rotation={[0, 0, 0]}>
                    <div className="w-[300px] pointer-events-none select-none">
                        <img
                            src="/AxoSoul.png"
                            alt="AxoSoul"
                            className="w-full h-auto drop-shadow-[0_0_50px_rgba(123,47,232,0.6)]"
                        />
                    </div>
                </Html>
            </Float>

            {/* Shield / Core Glow */}
            <mesh ref={shieldRef}>
                <sphereGeometry args={[2.8, 32, 32]} />
                <meshStandardMaterial
                    color="#7B2FE8"
                    transparent
                    opacity={0.03}
                    wireframe
                />
            </mesh>
        </group>
    );
}

function TechContent() {
    const [hovered, setHovered] = useState<any>(null);
    const { viewport } = useThree();

    return (
        <>
            <WebGLContextCleaner />
            <PerspectiveCamera makeDefault position={[0, 6, 22]} fov={40} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00C8FF" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#FF6B35" />

            {/* Stars background inside canvas */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <CenterSystem />

            {TECHS.map((tech, i) => (
                <Node key={i} tech={tech} setHovered={setHovered} />
            ))}

            {/* HTML Tooltip following mouse or fixed position */}
            {hovered && (
                <Html
                    position={[hovered.orbit * 1.5, 2, 0]}
                    center
                    className="pointer-events-none z-50 transition-all duration-300"
                >
                    <div className="glass-3 p-6 rounded-3xl border border-white/20 text-white w-[260px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: hovered.color, boxShadow: `0 0 15px ${hovered.color}` }} />
                            <h4 className="font-syne font-black text-xl m-0 tracking-tight">{hovered.name}</h4>
                        </div>
                        <p className="font-sans text-[13px] text-white/70 mb-4 leading-relaxed italic">
                            &quot;{hovered.use}&quot;
                        </p>
                        <div className="flex items-center gap-2 py-2 px-3 bg-white/5 rounded-xl border border-white/10">
                            <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">Production Deployments:</span>
                            <span className="font-syne font-bold text-sm" style={{ color: hovered.color }}>{hovered.projects}+</span>
                        </div>
                    </div>
                </Html>
            )}

            {/* Orbit rings */}
            {[1, 2, 3].map(orbit => (
                <group key={orbit}>
                    <mesh rotation={[Math.PI / 2 + (orbit - 1) * 0.3, 0, (orbit - 1) * 0.15]}>
                        <ringGeometry args={[orbit * 4 - 0.02, orbit * 4 + 0.02, 128]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} side={THREE.DoubleSide} />
                    </mesh>
                </group>
            ))}

            <EffectComposer multisampling={0}>
                <Bloom luminanceThreshold={0.5} intensity={1.5} mipmapBlur />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
                <ChromaticAberration
                    offset={new THREE.Vector2(0.001, 0.001)}
                    radialModulation={false}
                    modulationOffset={0}
                />
            </EffectComposer>
        </>
    );
}

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "200px" });

    return (
        <section ref={containerRef} className="py-16 relative z-10 w-full overflow-hidden bg-void" id="tech">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pulse-violet/5 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] mb-16 relative z-20 text-center">
                <div className="font-mono text-[13px] text-pulse-cyan tracking-[0.3em] mb-4 uppercase font-bold">&lt; The_Engineering_Galaxy /&gt;</div>
                <h2 className="font-syne font-bold text-h1 text-white mb-6 leading-tight">
                    Powering Products Built with <br /> <span className="text-gradient">World-Class Engineering</span>
                </h2>
                <p className="font-sans text-body-lg text-text-secondary max-w-[700px] mx-auto leading-relaxed">
                    We select technologies based on scalability, speed, and future-proof reliability.
                    Explore our core stack powering premium digital heartbeats.
                </p>
            </div>

            <div className="w-full h-[750px] relative z-10 cursor-crosshair">
                {isInView && (
                    <Canvas
                        dpr={1}
                        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
                    >
                        <TechContent />
                    </Canvas>
                )}
            </div>

            <div className="max-w-[1000px] mx-auto mt-20 text-center px-4 relative z-20">
                <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-pulse-cyan/20 via-pulse-violet/20 to-pulse-orange/20">
                    <div className="bg-[#050505] rounded-2xl px-10 py-8 backdrop-blur-xl">
                        <p className="font-syne font-bold text-3xl text-white mb-2">
                            &quot;We don&apos;t just code. We <span className="text-pulse-cyan">architect</span> the future.&quot;
                        </p>
                        <p className="font-mono text-[11px] text-text-secondary uppercase tracking-[0.4em]">15+ Technologies Mastered . 200+ Projects Delivered</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
