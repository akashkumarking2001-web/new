"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { WebGLContextCleaner } from "../3d/WebGLCleanup";
import ChromaKeyVideo from "../3d/ChromaKeyVideo";

function OrbitRings() {
    const ringsRef = useRef<THREE.Group>(null);

    useFrame(() => {
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

function LightNeonBox() {
    const boxRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (boxRef.current) {
            const time = state.clock.getElapsedTime();
            // Extremely subtle neon pulse - dimmed as requested
            const pulse = 0.04 + Math.sin(time * 8.0) * 0.02;
            (boxRef.current.material as THREE.MeshBasicMaterial).opacity = pulse;
            // Very slight physical pulse
            const sizePulse = 1.0 + Math.pow(0.5 + 0.5 * Math.sin(time * 8.0), 6.0) * 0.01;
            boxRef.current.scale.setScalar(sizePulse);
        }
    });

    return (
        <mesh ref={boxRef} position={[0, 0, -2]}>
            {/* Large square covering the entire background area */}
            <planeGeometry args={[25, 25]} />
            <meshBasicMaterial
                color="#00C8FF" // Light Cyan Neon
                transparent
                opacity={0.04}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}

export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "200px" });

    return (
        <div ref={containerRef} className="w-full relative h-[350px] sm:h-[450px] lg:h-[600px]" style={{ background: "transparent" }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{
                    antialias: true,
                    powerPreference: "high-performance",
                    alpha: true,
                    premultipliedAlpha: false,
                }}
                style={{ background: "transparent" }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
            >
                {isInView && (
                    <>
                        <WebGLContextCleaner />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />

                        <group>
                            <LightNeonBox />
                            <ChromaKeyVideo
                                url="/videos/heart.mp4"
                                scale={1.35}
                                similarity={0.02}
                                smoothness={0.06}
                            />
                        </group>

                        <OrbitRings />

                        <EffectComposer multisampling={0}>
                            <Bloom luminanceThreshold={0.2} intensity={1.8} />
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
