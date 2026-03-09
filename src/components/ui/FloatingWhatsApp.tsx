"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
    const [whatsappLink, setWhatsappLink] = useState("https://wa.me/918610381533");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await fetch("/api/settings");
                const data = await res.json();
                if (data.whatsappLink) {
                    setWhatsappLink(data.whatsappLink);
                }
            } catch (error) {
                console.error("Failed to fetch WhatsApp settings", error);
            }
        };

        fetchSettings();

        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0, opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-[9999]"
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] relative group"
                        aria-label="Chat on WhatsApp"
                    >
                        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
                        <WhatsappLogo size={36} weight="fill" />

                        <div className="absolute right-full mr-4 bg-void/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-sm font-sans font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                            Chat with us on WhatsApp
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
