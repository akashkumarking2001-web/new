"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function NotenPrivacyPage() {
    return (
        <main className="bg-[#0D0D0F] min-h-screen text-white font-space-grotesk">
            <Navbar />

            <section className="pt-60 pb-40 px-8 md:px-16 lg:px-32 max-w-4xl mx-auto">
                <span className="text-[#39ff14] text-[10px] tracking-[0.5em] font-bold uppercase mb-4 block">Security Protocol</span>
                <h1 className="font-archivo text-5xl md:text-8xl uppercase leading-none mb-24 italic text-white/20">Privacy Directive.</h1>

                <div className="prose prose-invert max-w-none text-white/40 font-light leading-relaxed">
                    <h3 className="font-archivo text-white text-xl uppercase tracking-widest mb-6">01. Cryptographic Anonymity</h3>
                    <p className="mb-10 lg:text-lg">
                        Noten operates on a 'Zero-Knowledge' basis where possible. Your identity is linked to your wallet address, not your biological signature. We do not store off-chain data that could bridge your digital presence to your local existence without explicit encryption keys.
                    </p>

                    <h3 className="font-archivo text-white text-xl uppercase tracking-widest mb-6">02. Asset-Linked Metadata</h3>
                    <p className="mb-10 lg:text-lg">
                        Metadata associated with your Noten assets (sizing, tailoring preferences, wear-history) is stored on decentralized storage layers (IPFS/Arweave). You retain the rights to the 'Burn' protocol, which permanently excises your historical data from our public exhibits.
                    </p>

                    <h3 className="font-archivo text-white text-xl uppercase tracking-widest mb-6">03. Node Communcations</h3>
                    <p className="mb-10 lg:text-lg">
                        Communications between your node and our central hub are end-to-end encrypted. We utilize ephemeral sessions that expire after every 'Mint' or 'Redeem' event to prevent long-term tracking.
                    </p>

                    <div className="mt-40 p-12 bg-white/5 rounded-3xl border border-white/5">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#39ff14]">Manifesto Updated: 26.02.2026</p>
                        <p className="text-xs text-white/20 mt-4 italic">Queries concerning your digital sovereignty may be directed to security@noten-protocol.eth</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
