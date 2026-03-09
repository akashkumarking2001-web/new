"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[10000] bg-void flex flex-col items-center justify-center">
            {/* Pulsing Logo or Icon */}
            <div className="relative w-24 h-24 mb-8">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-pulse-cyan/20 blur-2xl rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-0 border-t-2 border-pulse-cyan rounded-full border-opacity-40"
                />
                <Image
                    src="/AxoSoul.png"
                    alt="Loading..."
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-contain relative z-10 opacity-80"
                />
            </div>

            {/* Loading Bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-axo-gradient"
                />
            </div>

            {/* Status Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 font-mono text-[10px] text-pulse-cyan uppercase tracking-[0.2em]"
            >
                Retrieving_Digital_Pulse...
            </motion.div>
        </div>
    );
}
