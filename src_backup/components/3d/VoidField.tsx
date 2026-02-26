"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import * as THREE from "three";

function NeuralParticles() {
    const pointsRef = useRef<THREE.Points>(null);

    // Create 1500 particles for performance
    const particleCount = 1500;

    const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const col = new Float32Array(particleCount * 3);
        const colorCyan = new THREE.Color("#00C8FF");
        const colorViolet = new THREE.Color("#7B2FE8");

        for (let i = 0; i < particleCount; i++) {
            // distribute in a wide box
            pos[i * 3] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5; // keep them slightly behind

            const mixedColor = Math.random() > 0.3 ? colorCyan : colorViolet;
            col[i * 3] = mixedColor.r;
            col[i * 3 + 1] = mixedColor.g;
            col[i * 3 + 2] = mixedColor.b;
        }
        return [pos, col];
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} />
        </points>
    );
}

function AmbientGlowOrbs() {
    const orbsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (orbsRef.current) {
            orbsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <group ref={orbsRef}>
            {/* Cyan orb */}
            <mesh position={[-10, 5, -10]}>
                <sphereGeometry args={[8, 32, 32]} />
                <meshBasicMaterial color="#00C8FF" transparent opacity={0.04} />
            </mesh>
            {/* Violet orb */}
            <mesh position={[5, -5, -15]}>
                <sphereGeometry args={[10, 32, 32]} />
                <meshBasicMaterial color="#7B2FE8" transparent opacity={0.04} />
            </mesh>
            {/* Orange orb */}
            <mesh position={[12, 10, -20]}>
                <sphereGeometry args={[12, 32, 32]} />
                <meshBasicMaterial color="#FF6B35" transparent opacity={0.03} />
            </mesh>
        </group>
    );
}

export default function VoidField() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 1.5]}>
                <color attach="background" args={["#000000"]} />
                <fog attach="fog" args={["#000000", 10, 40]} />

                <NeuralParticles />
                <AmbientGlowOrbs />

                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0.15} intensity={0.6} mipmapBlur />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
