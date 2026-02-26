"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import Image from "next/image";

// Mock Tech Data
const TECHS = [
    // Inner Web
    { name: "React", use: "Interactive UI", projects: 120, orbit: 1, angle: 0, speed: 0.02, color: "#00C8FF" },
    { name: "Next.js", use: "Core Framework", projects: 85, orbit: 1, angle: Math.PI * 2 / 5, speed: 0.02, color: "#00C8FF" },
    { name: "Node.js", use: "Backend Services", projects: 90, orbit: 1, angle: Math.PI * 4 / 5, speed: 0.02, color: "#00C8FF" },
    { name: "TypeScript", use: "Type Safety", projects: 150, orbit: 1, angle: Math.PI * 6 / 5, speed: 0.02, color: "#00C8FF" },
    { name: "Tailwind", use: "Styling System", projects: 110, orbit: 1, angle: Math.PI * 8 / 5, speed: 0.02, color: "#00C8FF" },

    // Middle Mobile
    { name: "Flutter", use: "Cross-Platform Apps", projects: 65, orbit: 2, angle: 0, speed: 0.015, color: "#7B2FE8" },
    { name: "Swift", use: "Native iOS", projects: 40, orbit: 2, angle: Math.PI * 2 / 5, speed: 0.015, color: "#7B2FE8" },
    { name: "Kotlin", use: "Native Android", projects: 45, orbit: 2, angle: Math.PI * 4 / 5, speed: 0.015, color: "#7B2FE8" },
    { name: "Firebase", use: "Realtime Data", projects: 70, orbit: 2, angle: Math.PI * 6 / 5, speed: 0.015, color: "#7B2FE8" },
    { name: "Expo", use: "Rapid Mobile Dev", projects: 25, orbit: 2, angle: Math.PI * 8 / 5, speed: 0.015, color: "#7B2FE8" },

    // Outer Infra
    { name: "AWS", use: "Cloud Infrastructure", projects: 55, orbit: 3, angle: 0, speed: 0.01, color: "#FF6B35" },
    { name: "Supabase", use: "Postgres Backend", projects: 40, orbit: 3, angle: Math.PI * 2 / 5, speed: 0.01, color: "#FF6B35" },
    { name: "Vercel", use: "Edge Deployment", projects: 100, orbit: 3, angle: Math.PI * 4 / 5, speed: 0.01, color: "#FF6B35" },
    { name: "PostgreSQL", use: "Relational DB", projects: 80, orbit: 3, angle: Math.PI * 6 / 5, speed: 0.01, color: "#FF6B35" },
    { name: "Docker", use: "Containerization", projects: 60, orbit: 3, angle: Math.PI * 8 / 5, speed: 0.01, color: "#FF6B35" },
];

function OrbitNode({ tech, setHoveredTech, hoveredTech }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const orbitRadius = tech.orbit * 3.5; // Spread out slightly more
    const initialYOffset = Math.sin(tech.angle) * (tech.orbit * 0.8);
    const orbitTilt = Math.PI / 12 * tech.orbit; // Giving each orbit a unique tilt

    useFrame((_, delta) => {
        if (!meshRef.current) return;

        // Advance current angle based on speed
        meshRef.current.userData.currentAngle += tech.speed * (delta * 60);
        const currentA = meshRef.current.userData.currentAngle;

        // Calculate new X and Z on the flat plane
        const flatX = Math.cos(currentA) * orbitRadius;
        const flatZ = Math.sin(currentA) * orbitRadius;

        // Apply the tilt around the X-axis for the calculation of final X, Y, Z
        meshRef.current.position.x = flatX;
        meshRef.current.position.y = flatZ * Math.sin(orbitTilt);
        meshRef.current.position.z = flatZ * Math.cos(orbitTilt);
    });

    return (
        <mesh
            ref={meshRef}
            userData={{ currentAngle: tech.angle }}
            onPointerOver={(e) => { e.stopPropagation(); setHoveredTech(tech.name); document.body.style.cursor = "pointer"; }}
            onPointerOut={() => { setHoveredTech(null); document.body.style.cursor = "auto"; }}
        >
            <sphereGeometry args={[0.3 + (0.05 * tech.orbit), 32, 32]} />
            <meshStandardMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={hoveredTech === tech.name ? 0.8 : 0.4}
                transparent
                opacity={0.9}
            />
            {hoveredTech === tech.name && (
                <Html center position={[0, 1.2, 0]} className="pointer-events-none z-50">
                    <div className="glass-3 p-4 rounded-xl border border-white/10 text-white w-[220px] shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                            <h4 className="font-syne font-bold text-[16px] m-0">{tech.name}</h4>
                        </div>
                        <p className="font-sans text-[12px] text-text-secondary mb-3 leading-snug">
                            {tech.use}
                        </p>
                        <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/50 uppercase tracking-wider bg-white/5 py-1 px-2 rounded-md w-fit">
                            <span>{tech.projects} Projects</span>
                        </div>
                    </div>
                </Html>
            )}
        </mesh>
    );
}

function TechSystem() {
    const groupRef = useRef<THREE.Group>(null);
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    useFrame((_, delta) => {
        if (groupRef.current) {
            // Apply a very slow global rotation to make it feel alive
            groupRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Center Logo using Html to render static AxoSoul.png */}
            <Html center>
                <div className="w-[300px] h-[120px] relative pointer-events-none flex items-center justify-center">
                    <img
                        src="/AxoSoul.png"
                        alt="AxoSoul"
                        className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(123,47,232,0.6)]"
                    />
                </div>
            </Html>

            <ambientLight intensity={2} />
            <pointLight position={[0, 0, 0]} intensity={40} color="#ffffff" distance={20} />

            {/* Render Nodes */}
            {TECHS.map((tech, i) => (
                <OrbitNode
                    key={i}
                    tech={tech}
                    hoveredTech={hoveredTech}
                    setHoveredTech={setHoveredTech}
                />
            ))}

            {/* Orbit paths visualization */}
            {[1, 2, 3].map(orbit => {
                const radius = orbit * 3.5;
                const tilt = Math.PI / 12 * orbit;
                return (
                    <mesh key={orbit} rotation={[Math.PI / 2 + tilt, 0, 0]}>
                        <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} side={THREE.DoubleSide} />
                    </mesh>
                );
            })}
        </group>
    );
}

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { margin: "200px" });

    return (
        <section ref={sectionRef} className="py-24 relative z-10 w-full overflow-hidden" id="tech">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] mb-8 relative z-20">
                <h2 className="font-syne font-bold text-h2 text-white text-center mb-4">
                    Powering Products Built With The World&apos;s Best Tech
                </h2>
                <p className="font-sans text-body-lg text-text-secondary text-center max-w-[600px] mx-auto">
                    No outdated tools. No excuses. Every technology is selected because it&apos;s the best choice for the specific problem.
                </p>
            </div>

            <div className="w-full h-[700px] relative">
                <Canvas
                    camera={{ position: [0, 8, 18], fov: 45 }}
                    dpr={[1, 1.5]}
                    gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
                >
                    {isInView && <TechSystem />}
                </Canvas>
            </div>

            <div className="max-w-[800px] mx-auto mt-8 text-center px-4 relative z-20">
                <p className="font-syne font-semibold text-2xl text-white">
                    &quot;We don&apos;t use what&apos;s comfortable. We use what&apos;s <span className="text-gradient">optimal for you.</span>&quot;
                </p>
            </div>
        </section>
    );
}
