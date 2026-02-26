import { Space_Grotesk, Archivo_Black } from "next/font/google";
import React from "react";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    weight: ["300", "400", "500", "600", "700"],
});

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    variable: "--font-archivo",
    weight: ["400"],
});

export default function NotenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${spaceGrotesk.variable} ${archivoBlack.variable} selection:bg-[#39ff14] selection:text-black`}>
            {children}
        </div>
    );
}
