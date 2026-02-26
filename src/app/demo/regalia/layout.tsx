import { Cormorant_Garamond, Montserrat } from "next/font/google";
import React from "react";

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["100", "300", "400", "600", "800"],
});

export default function RegaliaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${cormorantGaramond.variable} ${montserrat.variable} selection:bg-[#D4AF37] selection:text-white`}>
            {children}
        </div>
    );
}
