"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";

import { Html } from "@react-three/drei";
import { WebGLContextCleaner } from "../3d/WebGLCleanup";

function DigitalHeart() {
    const heartRef = useRef<THREE.Mesh>(null);

    // Generate a basic heart shape geometry
    const geometry = new THREE.ShapeGeometry(
        (function () {
            const x = 0, y = 0;
            const heartShape = new THREE.Shape();
            heartShape.moveTo(x + 25, y + 25);
            heartShape.bezierCurveTo(x + 25, y + 25, x + 20, y, x, y);
            heartShape.bezierCurveTo(x - 30, y, x - 30, y + 35, x - 30, y + 35);
            heartShape.bezierCurveTo(x - 30, y + 55, x - 10, y + 77, x + 25, y + 95);
            heartShape.bezierCurveTo(x + 60, y + 77, x + 80, y + 55, x + 80, y + 35);
            heartShape.bezierCurveTo(x + 80, y + 35, x + 80, y, x + 50, y);
            heartShape.bezierCurveTo(x + 35, y, x + 25, y + 25, x + 25, y + 25);
            return heartShape;
        })()
    );

    geometry.center();

    useFrame((state) => {
        if (heartRef.current) {
            heartRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            heartRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;

            // Pulse effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.03;
            heartRef.current.scale.set(scale * 0.03, -scale * 0.03, scale * 0.03); // inverted Y because shape is upside down
        }
    });

    return (
        <group>
            <mesh ref={heartRef}>
                <primitive object={geometry} />
                <meshPhysicalMaterial
                    color="#7B2FE8"
                    emissive="#3B6EFF"
                    emissiveIntensity={0.3}
                    roughness={0.1}
                    metalness={0.4}
                    transmission={0.3}
                    transparent
                    opacity={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

function OrbitRings() {
    const ringsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (ringsRef.current) {
            ringsRef.current.children[0].rotation.x += 0.01;
            ringsRef.current.children[1].rotation.y += 0.015;
            ringsRef.current.children[2].rotation.z += 0.005;
        }
    });

    return (
        <group ref={ringsRef}>
            <mesh rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[3, 0.02, 16, 100]} />
                <meshBasicMaterial color="#00C8FF" />
            </mesh>
            <mesh rotation={[0, Math.PI / 3, 0]}>
                <torusGeometry args={[4, 0.015, 16, 100]} />
                <meshBasicMaterial color="#7B2FE8" />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 6]}>
                <torusGeometry args={[5, 0.01, 16, 100]} />
                <meshBasicMaterial color="#FF6B35" />
            </mesh>
        </group>
    );
}

export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "200px" });

    return (
        <div ref={containerRef} className="w-full h-full relative" style={{ height: '600px' }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, powerPreference: "high-performance", failIfMajorPerformanceCaveat: false, alpha: true }}
            >
                {isInView && (
                    <>
                        <WebGLContextCleaner />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />

                        <DigitalHeart />
                        <OrbitRings />

                        <EffectComposer multisampling={0} frameBufferType={THREE.HalfFloatType}>
                            <Bloom luminanceThreshold={0.2} intensity={2.5} />
                            <ChromaticAberration
                                radialModulation={false}
                                modulationOffset={0}
                                offset={[0.002, 0.002] as any}
                            />
                        </EffectComposer>
                    </>
                )}
            </Canvas>
        </div>
    );
}
