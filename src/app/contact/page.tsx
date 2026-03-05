"use client";

import React from 'react';
import LegalLayout from "@/components/ui/LegalLayout";

export default function ContactPage() {
    return (
        <LegalLayout title="Contact Us" lastUpdated="March 2026">
            <section>
                <h2>Get in Touch</h2>
                <p>
                    We’re here to help you build the future of your digital products. Reach out to us through any of the channels below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="glass-2 p-8 rounded-3xl border border-white/5">
                        <h3 className="text-pulse-cyan mb-4">Direct Communication</h3>
                        <p className="mb-2"><strong>Email:</strong> hello@axosoul.in</p>
                        <p className="mb-2"><strong>WhatsApp:</strong> +91 8610381533</p>
                        <p className="mb-6"><strong>Phone:</strong> +91 8610381533</p>
                        <a
                            href="https://wa.me/918610381533"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-[#25D366] text-white rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                    <div className="glass-2 p-8 rounded-3xl border border-white/5">
                        <h3 className="text-pulse-purple mb-4">Global Reach</h3>
                        <p className="mb-2"><strong>Office:</strong> Tenkasi, Tamil Nadu, India</p>
                        <p className="mb-2"><strong>Availability:</strong> Mon - Sat (9AM - 6PM IST)</p>
                        <p className="mb-6">Serving clients worldwide with high-performance digital solutions.</p>
                        <Link href="/#portfolio" className="text-pulse-cyan hover:underline">
                            View our work &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </LegalLayout>
    );
}

import Link from 'next/link';
