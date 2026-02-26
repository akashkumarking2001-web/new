"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-[90]"
            aria-label="Chat on WhatsApp"
        >
            <WhatsappLogo size={32} weight="fill" />
        </a>
    );
}
