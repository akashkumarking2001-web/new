"use client";

import React, { useState, useEffect } from "react";
import { WhatsappLogo, DeviceMobile, ChatText, FloppyDisk, InstagramLogo, Rocket } from "@phosphor-icons/react";

export default function SettingsAdmin() {
    const [settings, setSettings] = useState({
        whatsappNumber: "",
        whatsappMessage: "",
        whatsappLink: "",
        instagramLink: "",
        showFounders: true
    });
    const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch("/api/settings");
            const data = await res.json();
            setSettings(data);
        } catch (error) {
            console.error("Failed to fetch settings", error);
        }
    };

    const handleSave = async () => {
        setStatus("saving");
        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings)
            });
            if (res.ok) {
                setStatus("success");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="max-w-2xl">
            <h2 className="text-xl font-bold mb-8 text-white">Global Site Settings</h2>

            <div className="space-y-8">
                {/* WhatsApp Section */}
                <div className="glass-1 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#25D366]/10 rounded-lg text-[#25D366]">
                            <WhatsappLogo size={24} weight="fill" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">WhatsApp Integration</h3>
                            <p className="text-xs text-text-tertiary">Configure the floating WhatsApp icon and direct links.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">WhatsApp Number (with country code)</label>
                            <div className="relative">
                                <DeviceMobile className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                                <input
                                    type="text"
                                    value={settings.whatsappNumber}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                                    className="w-full h-12 bg-void border border-white/10 rounded-xl pl-12 pr-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan transition-colors"
                                    placeholder="+918610381533"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Full WhatsApp Link (wa.me)</label>
                            <input
                                type="text"
                                value={settings.whatsappLink}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({ ...settings, whatsappLink: e.target.value })}
                                className="w-full h-12 bg-void border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan transition-colors"
                                placeholder="https://wa.me/918610381533"
                            />
                        </div>

                        <div>
                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Default Message</label>
                            <div className="relative">
                                <ChatText className="absolute left-4 top-4 text-text-tertiary" size={18} />
                                <textarea
                                    value={settings.whatsappMessage}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSettings({ ...settings, whatsappMessage: e.target.value })}
                                    className="w-full h-24 bg-void border border-white/10 rounded-xl pl-12 pr-4 pt-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan transition-colors resize-none"
                                    placeholder="Write the default message here..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Section */}
                <div className="glass-1 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-pulse-violet/10 rounded-lg text-pulse-violet">
                            <InstagramLogo size={24} weight="fill" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Social Media</h3>
                            <p className="text-xs text-text-tertiary">Configure Instagram and other social links.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Instagram Profile Link</label>
                            <div className="relative">
                                <InstagramLogo className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                                <input
                                    type="text"
                                    value={settings.instagramLink}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSettings({ ...settings, instagramLink: e.target.value })}
                                    className="w-full h-12 bg-void border border-white/10 rounded-xl pl-12 pr-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan transition-colors"
                                    placeholder="https://www.instagram.com/axosoul_/"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Control */}
                <div className="glass-1 p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-pulse-orange/10 rounded-lg text-pulse-orange">
                            <Rocket size={24} weight="fill" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Features Control</h3>
                            <p className="text-xs text-text-tertiary">Toggle major website sections on or off.</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <div>
                            <p className="text-white font-bold">Founders Section</p>
                            <p className="text-[10px] text-text-tertiary uppercase tracking-wider">Show or hide the Founder's profile on the home page.</p>
                        </div>
                        <button
                            onClick={() => setSettings({ ...settings, showFounders: !settings.showFounders })}
                            className={`w-14 h-7 rounded-full transition-all relative ${settings.showFounders ? 'bg-pulse-cyan' : 'bg-void border border-white/20'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${settings.showFounders ? 'left-8' : 'left-1'}`} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSave}
                        disabled={status === "saving"}
                        className="flex items-center gap-2 px-8 py-3 bg-axo-gradient rounded-xl font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                    >
                        <FloppyDisk size={20} />
                        {status === "saving" ? "Saving..." : "Save Configuration"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-500 text-sm font-medium">Settings saved successfully!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-500 text-sm font-medium">Failed to save settings.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
