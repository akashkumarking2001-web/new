"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// Mock Tech Data
const TECHS = [
    // Inner Web
    { name: "React", use: "Interactive UI", projects: 120, orbit: 1, angle: 0, speed: 0.02 },
    { name: "Next.js", use: "Core Framework", projects: 85, orbit: 1, angle: Math.PI * 2 / 5, speed: 0.02 },
    { name: "Node.js", use: "Backend Services", projects: 90, orbit: 1, angle: Math.PI * 4 / 5, speed: 0.02 },
    { name: "TypeScript", use: "Type Safety", projects: 150, orbit: 1, angle: Math.PI * 6 / 5, speed: 0.02 },
    { name: "Tailwind", use: "Styling System", projects: 110, orbit: 1, angle: Math.PI * 8 / 5, speed: 0.02 },

    // Middle Mobile
    { name: "Flutter", use: "Cross-Platform Apps", projects: 65, orbit: 2, angle: 0, speed: 0.015 },
    { name: "Swift", use: "Native iOS", projects: 40, orbit: 2, angle: Math.PI * 2 / 5, speed: 0.015 },
    { name: "Kotlin", use: "Native Android", projects: 45, orbit: 2, angle: Math.PI * 4 / 5, speed: 0.015 },
    { name: "Firebase", use: "Realtime Data", projects: 70, orbit: 2, angle: Math.PI * 6 / 5, speed: 0.015 },
    { name: "Expo", use: "Rapid Mobile Dev", projects: 25, orbit: 2, angle: Math.PI * 8 / 5, speed: 0.015 },

    // Outer Infra
    { name: "AWS", use: "Cloud Infrastructure", projects: 55, orbit: 3, angle: 0, speed: 0.01 },
    { name: "Supabase", use: "Postgres Backend", projects: 40, orbit: 3, angle: Math.PI * 2 / 5, speed: 0.01 },
    { name: "Vercel", use: "Edge Deployment", projects: 100, orbit: 3, angle: Math.PI * 4 / 5, speed: 0.01 },
    { name: "PostgreSQL", use: "Relational DB", projects: 80, orbit: 3, angle: Math.PI * 6 / 5, speed: 0.01 },
    { name: "Docker", use: "Containerization", projects: 60, orbit: 3, angle: Math.PI * 8 / 5, speed: 0.01 },
];

function CenterLogo() {
    const meshRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            const pulse = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.05;
            meshRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#7B2FE8" emissive="#FF6B35" emissiveIntensity={0.5} wireframe />
        </mesh>
    );
}

function OrbitSystem() {
    const groupRef = useRef<THREE.Group>(null);
    const [hoveredTech, setHoveredTech] = useState<any>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005; // Global slow rotation
            // Animate planets
            let childIndex = 0;
            for (const tech of TECHS) {
                // Find mesh
                const mesh = groupRef.current.children[childIndex] as THREE.Mesh;
                if (mesh && mesh.userData) {
                    mesh.userData.angle += tech.speed;
                    const radius = tech.orbit * 3;
                    mesh.position.x = Math.cos(mesh.userData.angle) * radius;
                    mesh.position.z = Math.sin(mesh.userData.angle) * radius;
                    // Sub-rotation based on orbit index to tilt planes
                    mesh.position.y = Math.sin(mesh.userData.angle) * (tech.orbit * 0.5);
                }
                childIndex++;
            }
        }
    });

    return (
        <group ref={groupRef} rotation={[0.2, 0, 0]}>
            {TECHS.map((tech, i) => {
                const radius = tech.orbit * 3;
                const x = Math.cos(tech.angle) * radius;
                const z = Math.sin(tech.angle) * radius;
                const y = Math.sin(tech.angle) * (tech.orbit * 0.5);

                const color = tech.orbit === 1 ? "#00C8FF" : tech.orbit === 2 ? "#7B2FE8" : "#FF6B35";

                return (
                    <mesh
                        key={i}
                        position={[x, y, z]}
                        userData={{ angle: tech.angle }}
                        onPointerOver={(e) => { e.stopPropagation(); setHoveredTech(tech); }}
                        onPointerOut={() => setHoveredTech(null)}
                    >
                        <sphereGeometry args={[0.3 + (0.1 * tech.orbit), 16, 16]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} transparent opacity={0.8} />

                        {hoveredTech?.name === tech.name && (
                            <Html center position={[0, 0.8, 0]} className="pointer-events-none">
                                <div className="glass-3 p-4 rounded-xl border border-pulse-cyan/30 text-white w-[200px]">
                                    <h4 className="font-syne font-bold text-[15px] mb-1">{tech.name}</h4>
                                    <p className="font-sans text-[11px] text-text-secondary mb-2 whitespace-nowrap">We use this for: {tech.use}</p>
                                    <div className="flex items-center gap-2 font-mono text-[10px] text-pulse-cyan uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 rounded-full bg-pulse-cyan" />
                                        {tech.projects} Projects
                                    </div>
                                </div>
                            </Html>
                        )}
                    </mesh>
                )
            })}
        </group>
    );
}

export default function TechStack() {
    return (
        <section className="py-24 relative z-10 w-full overflow-hidden" id="tech">
            <div className="max-w-[1440px] mx-auto px-[max(24px,4vw)] mb-16 relative z-20">
                <h2 className="font-syne font-bold text-h2 text-white text-center mb-4">
                    Technologies We&apos;ve Mastered
                </h2>
                <p className="font-sans text-body-lg text-text-secondary text-center max-w-[600px] mx-auto">
                    No outdated tools. No excuses. Every technology is selected because it&apos;s the best choice for the specific problem.
                </p>
            </div>

            <div className="w-full h-[600px] relative">
                <Canvas camera={{ position: [0, 4, 15], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[0, 0, 0]} intensity={2} color="#FF6B35" />

                    <CenterLogo />
                    <OrbitSystem />

                    {/* Orbit paths visualization */}
                    {[1, 2, 3].map(orbit => (
                        <mesh key={orbit} rotation={[Math.PI / 2, Math.PI / 12 * orbit, 0]}>
                            <ringGeometry args={[orbit * 3 - 0.02, orbit * 3 + 0.02, 64]} />
                            <meshBasicMaterial color="#ffffff" transparent opacity={0.05} side={THREE.DoubleSide} />
                        </mesh>
                    ))}

                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={0.2} intensity={1} mipmapBlur />
                    </EffectComposer>
                </Canvas>
            </div>

            <div className="max-w-[800px] mx-auto mt-16 text-center px-4 relative z-20">
                <p className="font-syne font-semibold text-2xl text-white">
                    &quot;We don&apos;t use what&apos;s comfortable. We use what&apos;s <span className="text-gradient">optimal for you.</span>&quot;
                </p>
            </div>
        </section>
    );
}
