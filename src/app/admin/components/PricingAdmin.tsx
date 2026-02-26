"use client";

import { useState, useEffect } from "react";
import { Check } from "@phosphor-icons/react";

export default function PricingAdmin() {
    const [tiers, setTiers] = useState<any[]>([]);

    useEffect(() => {
        fetchTiers();
    }, []);

    const fetchTiers = async () => {
        try {
            const res = await fetch("/api/pricing");
            const data = await res.json();
            setTiers(data);
        } catch (error) {
            console.error("Failed to fetch pricing", error);
        }
    };

    const handlePriceChange = (index: number, value: string) => {
        const newTiers = [...tiers];
        newTiers[index].price = value;
        setTiers(newTiers);
    };

    const handleSave = async () => {
        try {
            await fetch("/api/pricing", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(tiers)
            });
            alert("Pricing updated successfully!");
        } catch (error) {
            console.error("Failed to save pricing", error);
            alert("Failed to save pricing.");
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Pricing Management</h2>
                <button onClick={handleSave} className="bg-axo-gradient px-6 py-2 rounded-xl text-sm font-bold shadow-[0_0_15px_rgba(123,47,232,0.3)] hover:scale-105 transition-transform">
                    Save Changes
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map((tier, index) => (
                    <div key={index} className="glass-2 p-6 rounded-2xl border border-white/10 flex flex-col h-full relative">
                        {tier.popular && (
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pulse-orange px-3 py-1 text-[10px] rounded-full uppercase tracking-widest px-2">Popular</span>
                        )}
                        <h3 className="text-center font-bold text-lg mb-4">{tier.name}</h3>

                        <div className="mb-6">
                            <label className="block text-xs uppercase tracking-wider text-text-tertiary mb-2">Price Label (e.g. ₹4,000)</label>
                            <input
                                type="text"
                                value={tier.price}
                                onChange={(e) => handlePriceChange(index, e.target.value)}
                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 font-bold text-xl text-center text-white focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors"
                            />
                        </div>

                        <div className="text-xs text-text-secondary text-center mb-6">{tier.us} USD</div>

                        <ul className="space-y-3 mb-6 flex-1 text-sm text-text-primary/90">
                            {tier.features.slice(0, 3).map((f: string, i: number) => (
                                <li key={i} className="flex gap-2">
                                    <Check size={16} className="text-pulse-violet shrink-0 mt-0.5" />
                                    <span className="truncate">{f}</span>
                                </li>
                            ))}
                            <li className="text-center text-text-tertiary text-xs opacity-50 italic">... + more features</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
