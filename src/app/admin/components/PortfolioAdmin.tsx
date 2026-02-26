"use client";

import { useState, useEffect } from "react";

export default function PortfolioAdmin() {
    const [demos, setDemos] = useState<any[]>([]);

    useEffect(() => {
        fetchDemos();
    }, []);

    const fetchDemos = async () => {
        try {
            const res = await fetch("/api/portfolio");
            const data = await res.json();
            setDemos(data);
        } catch (error) {
            console.error("Failed to fetch portfolio", error);
        }
    };

    const updateCategory = async (index: number, newCategory: string) => {
        const newDemos = [...demos];
        newDemos[index] = { ...newDemos[index], category: newCategory };
        setDemos(newDemos);
        saveDemos(newDemos);
    };

    const saveDemos = async (data: any[]) => {
        try {
            await fetch("/api/portfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error("Failed to save portfolio", error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-white">Portfolio Management</h2>
            <p className="text-sm text-text-secondary mb-6">Categorize items as 'dynamic' (Top Row) or 'static' (Bottom Row)</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demos.map((demo, index) => (
                    <div key={index} className="glass-2 p-4 rounded-xl border border-white/10 flex flex-col">
                        <img src={demo.image} alt={demo.name} className="w-full h-32 object-cover rounded-lg mb-4 opacity-80" />
                        <h3 className="font-bold text-lg mb-1">{demo.name}</h3>
                        <p className="text-xs text-text-tertiary mb-4">{demo.type}</p>

                        <div className="mt-auto">
                            <label className="block text-xs uppercase tracking-wider text-text-secondary mb-2">Category / Row</label>
                            <select
                                value={demo.category}
                                onChange={(e) => updateCategory(index, e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-pulse-cyan cursor-pointer"
                            >
                                <option value="dynamic" className="bg-[#111]">Dynamic (Top Row)</option>
                                <option value="static" className="bg-[#111]">Static (Bottom Row)</option>
                            </select>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
