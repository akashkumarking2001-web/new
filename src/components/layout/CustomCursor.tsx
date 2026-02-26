"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isClient, setIsClient] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [cursorState, setCursorState] = useState("default");

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Exact position
    const dotX = useMotionValue(0);
    const dotY = useMotionValue(0);

    // Spring physics for ring
    const springConfig = { damping: 18, stiffness: 120, mass: 0.5 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsClient(true);
        const handleMouseMove = (e: MouseEvent) => {
            dotX.set(e.clientX - 3);
            dotY.set(e.clientY - 3);
            mouseX.set(e.clientX - 19);
            mouseY.set(e.clientY - 19);
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Add dataset listener logic here later to change cursor styles for hover

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [dotX, dotY, mouseX, mouseY]);

    if (!isClient) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[99999] hidden lg:block overflow-hidden">
            {/* Dot */}
            <motion.div
                className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-pulse-cyan z-[99999]"
                style={{ x: dotX, y: dotY }}
            />
            {/* Ring */}
            <motion.div
                className="fixed top-0 left-0 w-[38px] h-[38px] rounded-full border-[1.5px] border-pulse-cyan z-[99998]"
                style={{ x: ringX, y: ringY, scale: clicked ? 0.9 : 1 }}
                animate={{
                    borderColor: cursorState === 'hover' ? 'var(--pulse-violet)' : 'var(--pulse-cyan)',
                    scale: cursorState === 'hover' ? 1.5 : (clicked ? 0.9 : 1),
                    opacity: cursorState === 'hover' ? 0.5 : 1
                }}
                transition={{ duration: 0.2 }}
            />
            {/* Click Pulse (optional, added as framer motion animate value) */}
            <motion.div
                className="fixed top-0 left-0 w-[38px] h-[38px] rounded-full border border-pulse-violet z-[99997]"
                style={{ x: ringX, y: ringY }}
                initial={{ opacity: 0, scale: 1 }}
                animate={
                    clicked ? { opacity: [0.6, 0], scale: [1, 3] } : { opacity: 0, scale: 1 }
                }
                transition={{ duration: 0.5 }}
            />
        </div>
    );
}
