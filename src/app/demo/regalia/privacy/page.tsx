"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function PrivacyPage() {
    return (
        <main className="bg-white min-h-screen font-montserrat">
            <Navbar scrolled={true} />

            <section className="pt-48 pb-40 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold block mb-4">Legal Directive</span>
                <h1 className="text-5xl md:text-7xl font-cormorant italic text-[#0A0A0A] mb-24">Privacy Policy.</h1>

                <div className="prose prose-stone max-w-none text-[#0A0A0A]/70 font-light leading-relaxed">
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">1. Information We Collect</h3>
                    <p className="mb-10">
                        At Regalia, we collect information that ensures your experience in our digital gallery is seamless and personalized. This includes your name, shipping address, and the cryptographic identifiers associated with your Regalia Code assets.
                    </p>

                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">2. How We Use Data</h3>
                    <p className="mb-10">
                        Your data is never sold. It is used exclusively to facilitate bespoke tailoring requests, manage your seasonal archive access, and notify you of private exhibitions.
                    </p>

                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">3. Digital Sovereignty</h3>
                    <p className="mb-10">
                        We believe in full transparency regarding your digital footprint. You may request a full export of your interaction history at any time through our concierge services.
                    </p>

                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#0A0A0A] mb-6">4. Cookies & Atmosphere</h3>
                    <p className="mb-10">
                        Our site uses minimal cookies to preserve your session state and layout preferences. We do not use third-party tracking pixels that compromise the integrity of our design.
                    </p>

                    <div className="mt-40 p-12 bg-[#F5F5F0] rounded-3xl">
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#0A0A0A]">Last Updated: February 26, 2026</p>
                        <p className="text-xs text-[#0A0A0A]/40 mt-4">Questions? Contact our legal concierge at legal@regalia-archive.com</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
