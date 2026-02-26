"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/**
 * Suppresses the THREE.Clock deprecation warning that originates inside
 * @react-three/fiber v8 internals. The library uses THREE.Clock which was
 * deprecated in Three.js r155. This is a known issue fixed in r3f v9.
 * Until we upgrade, we patch console.warn to swallow just that specific message.
 */
if (typeof window !== "undefined") {
    const _warn = console.warn.bind(console);
    console.warn = (...args: unknown[]) => {
        if (
            typeof args[0] === "string" &&
            args[0].includes("THREE.Clock") &&
            args[0].includes("deprecated")
        ) {
            return; // suppress only this specific deprecation
        }
        _warn(...args);
    };
}

export function WebGLContextCleaner() {
    const { gl } = useThree();

    useEffect(() => {
        // We explicitly tell WebGL to clean up when a canvas unmounts
        // Usually React-Three-Fiber handles this but it's bugged in some scenarios with fast scrolling
        return () => {
            if (gl) {
                const glContext = gl.getContext ? gl.getContext() : null;

                if (glContext && typeof glContext.getExtension === "function") {
                    // Try grabbing the extension that allows dropping contexts manually
                    const extension = glContext.getExtension("WEBGL_lose_context");
                    if (extension) {
                        // extension.loseContext(); // Commented out to prevent postprocessing cleanup crashes
                    }

                    // Clear any internal state
                    const colorBit = glContext.COLOR_BUFFER_BIT;
                    const depthBit = glContext.DEPTH_BUFFER_BIT;
                    if (colorBit !== undefined && depthBit !== undefined) {
                        glContext.clear(colorBit | depthBit);
                    }
                }

                // Also manually dispose of the renderer
                if (typeof gl.dispose === "function") {
                    gl.dispose();
                }
            }
        };
    }, [gl]);

    return null;
}
