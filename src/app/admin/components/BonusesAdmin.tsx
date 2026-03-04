"use client";

import { useState, useEffect } from "react";
import { InstagramLogo, CalendarBlank, User, Envelope, Phone, Globe, ChatText } from "@phosphor-icons/react";

export default function BonusesAdmin() {
    const [bonuses, setBonuses] = useState<any[]>([]);

    useEffect(() => {
        fetchBonuses();
    }, []);

    const fetchBonuses = async () => {
        try {
            const res = await fetch("/api/bonuses");
            const data = await res.json();
            setBonuses(data);
        } catch (error) {
            console.error("Failed to fetch bonuses", error);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Free Bonus Submissions</h2>
                <span className="px-3 py-1 bg-pulse-orange/10 text-pulse-orange border border-pulse-orange/20 rounded-full text-xs font-mono">
                    {bonuses.length} Submissions
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {bonuses.map((bonus, index) => (
                    <div key={index} className="glass-1 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pulse-orange/10 flex items-center justify-center text-pulse-orange border border-pulse-orange/20">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">{bonus.fullName}</h3>
                                    <div className="flex items-center gap-2 text-text-tertiary text-xs">
                                        <CalendarBlank size={14} />
                                        {new Date(bonus.createdAt).toLocaleDateString()} at {new Date(bonus.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-sm text-text-secondary border border-white/5">
                                    <Envelope size={16} className="text-pulse-cyan" />
                                    {bonus.email}
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg text-sm text-text-secondary border border-white/5">
                                    <Phone size={16} className="text-pulse-cyan" />
                                    {bonus.contactNumber}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-2">
                                        <Globe size={14} />
                                        Website Requirement
                                    </div>
                                    <p className="text-sm text-text-primary leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 italic">
                                        "{bonus.websiteRequirement}"
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-gradient-to-tr from-[#f09433]/5 via-[#dc2743]/5 to-[#bc1888]/5 border border-white/5">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-widest">
                                            <InstagramLogo size={14} />
                                            Instagram Verification
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${bonus.followsInstagram === 'Yes' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                                            Follows: {bonus.followsInstagram}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm font-bold text-white">ID: @{bonus.instagramId || 'N/A'}</div>
                                        <a
                                            href={`https://instagram.com/${bonus.instagramId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[11px] text-pulse-orange hover:underline flex items-center gap-1"
                                        >
                                            View Profile →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {bonuses.length === 0 && (
                    <div className="py-20 text-center glass-1 rounded-2xl border border-white/5">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-text-tertiary">
                            <ChatText size={32} />
                        </div>
                        <p className="text-text-secondary">No bonus submissions yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
