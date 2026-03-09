"use client";

import { useRef, useMemo, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ChromaKeyVideoProps {
    url: string;
    similarity?: number;
    smoothness?: number;
    scale?: number;
    position?: [number, number, number];
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D tex;
  uniform float similarity;
  uniform float smoothness;
  uniform float uTime;

  void main() {
    vec4 fragColor = texture2D(tex, vUv);
    
    // 1. RADICAL BACKGROUND REMOVAL (Chroma Key + Luminance)
    // Most green screens carry some noise. We want to be very strict.
    float maxRB = max(fragColor.r, fragColor.b);
    float gDiff = fragColor.g - maxRB;
    
    // Sharp mask: 1.0 = Heart, 0.0 = Background
    float chromaAlpha = 1.0 - smoothstep(similarity, similarity + smoothness, gDiff);
    
    // Luminance mask: remove dark grey/teal backgrounds
    float lum = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    float lumMask = smoothstep(0.02, 0.1, lum); 
    
    float finalAlpha = chromaAlpha * lumMask;
    
    // Kill background pixels completely to remove the "grey box"
    if (finalAlpha < 0.05) {
        discard;
    }
    
    // 3. COLOR PROCESSING
    // Spill suppression: stop heart from being green-tinted
    vec3 color = fragColor.rgb;
    if (gDiff > 0.0) {
        color.g = maxRB;
    }
    
    // 4. DYNAMIC NEON HEARTBEAT PULSE
    float heartbeat = pow(0.5 + 0.5 * sin(uTime * 8.0), 6.0);
    
    // Brand Colors
    vec3 brandPurple = vec3(0.48, 0.18, 0.91); // #7B2FE8
    vec3 brandCyan = vec3(0.0, 0.78, 1.0);   // #00C8FF
    vec3 tint = mix(brandPurple, brandCyan, 0.5 + 0.5 * cos(uTime * 1.5));
    
    // The pulse should glow ON the heart's details.
    float heartLum = dot(color, vec3(0.299, 0.587, 0.114));
    
    // Final color calculation (Dimmed base: 0.65, Manual pulse: 0.4)
    vec3 outColor = (color * 0.65 + tint * heartLum * heartbeat * 0.4) * finalAlpha;
    
    gl_FragColor = vec4(outColor, finalAlpha);
  }
`;

export default function ChromaKeyVideo({
    url,
    similarity = 0.015,
    smoothness = 0.04,
    scale = 1,
    position = [0, 0, 0]
}: ChromaKeyVideoProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const texture = useVideoTexture(url, {
        loop: true,
        muted: true,
        start: true,
        crossOrigin: "Anonymous"
    });

    useEffect(() => {
        if (texture) {
            texture.colorSpace = THREE.SRGBColorSpace;
        }
    }, [texture]);

    const uniforms = useMemo(() => ({
        tex: { value: texture },
        similarity: { value: similarity },
        smoothness: { value: smoothness },
        uTime: { value: 0 }
    }), [texture, similarity, smoothness]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;
        if (meshRef.current) {
            meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;

            // Sync physical pulse with shader heartbeat
            const heartbeatSize = Math.pow(0.5 + 0.5 * Math.sin(time * 8.0), 6.0);
            const sizePulse = 1.0 + heartbeatSize * 0.04; // Subtle size pulse
            meshRef.current.scale.setScalar(scale * sizePulse);

            meshRef.current.rotation.y = 0;
            meshRef.current.rotation.x = 0;
        }
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = time;
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            {/* Plane resized to be more compact */}
            <planeGeometry args={[16 * 0.55, 9 * 0.55]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={true}
                side={THREE.DoubleSide}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}
