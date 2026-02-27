"use client";

import { useState, useEffect } from "react";

type Demo = {
    name: string;
    category: string;
    type: string;
    desc: string;
    features: string[];
    link: string;
    image: string;
    accent: string;
    bg: string;
    order: number;
};

export default function PortfolioAdmin() {
    const [demos, setDemos] = useState<Demo[]>([]);
    const [saving, setSaving] = useState(false);
    const [filterCategory, setFilterCategory] = useState<"all" | "dynamic" | "static" | "software">("all");
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

    const updateDemo = (index: number, field: string, value: string | number) => {
        const newDemos = [...demos];
        newDemos[index] = { ...newDemos[index], [field]: value };
        setDemos(newDemos);
        debouncedSave(newDemos);
    };

    let saveTimer: ReturnType<typeof setTimeout>;
    const debouncedSave = (data: Demo[]) => {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => saveDemos(data), 800);
    };

    const saveDemos = async (data: Demo[]) => {
        setSaving(true);
        try {
            await fetch("/api/portfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error("Failed to save portfolio", error);
        } finally {
            setTimeout(() => setSaving(false), 600);
        }
    };

    const addDemo = () => {
        const maxOrder = demos.reduce((m, d) => Math.max(m, d.order ?? 0), 0);
        const newDemo: Demo = {
            name: "New Project",
            category: "static",
            type: "Web Application",
            desc: "Description of the project",
            features: ["Feature 1", "Feature 2"],
            link: "/demo/new",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            accent: "#ffffff",
            bg: "#000000",
            order: maxOrder + 1
        };
        const newDemos = [...demos, newDemo];
        setDemos(newDemos);
        saveDemos(newDemos);
        setExpandedIndex(newDemos.length - 1);
    };

    const deleteDemo = (index: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            const newDemos = demos.filter((_, i) => i !== index);
            setDemos(newDemos);
            saveDemos(newDemos);
            setExpandedIndex(null);
        }
    };

    const moveToTop = (index: number) => {
        const newDemos = [...demos];
        const [item] = newDemos.splice(index, 1);
        newDemos.unshift(item);
        // Re-assign order values
        const reordered = newDemos.map((d, i) => ({ ...d, order: i + 1 }));
        setDemos(reordered);
        saveDemos(reordered);
        setExpandedIndex(0);
    };

    const moveToBottom = (index: number) => {
        const newDemos = [...demos];
        const [item] = newDemos.splice(index, 1);
        newDemos.push(item);
        const reordered = newDemos.map((d, i) => ({ ...d, order: i + 1 }));
        setDemos(reordered);
        saveDemos(reordered);
        setExpandedIndex(reordered.length - 1);
    };

    const reorderDemo = (index: number, direction: "up" | "down") => {
        const newDemos = [...demos];
        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newDemos.length) {
            [newDemos[index], newDemos[newIndex]] = [newDemos[newIndex], newDemos[index]];
            // Re-assign order values
            const reordered = newDemos.map((d, i) => ({ ...d, order: i + 1 }));
            setDemos(reordered);
            saveDemos(reordered);
            setExpandedIndex(newIndex);
        }
    };

    const setOrder = (index: number, newOrder: number) => {
        const clamped = Math.max(1, Math.min(demos.length, newOrder));
        const newDemos = [...demos];
        const [item] = newDemos.splice(index, 1);
        newDemos.splice(clamped - 1, 0, item);
        const reordered = newDemos.map((d, i) => ({ ...d, order: i + 1 }));
        setDemos(reordered);
        saveDemos(reordered);
    };

    const filteredDemos = filterCategory === "all"
        ? demos
        : demos.filter(d => d.category === filterCategory);

    const categoryColors: Record<string, string> = {
        dynamic: "text-pulse-cyan border-pulse-cyan/40 bg-pulse-cyan/10",
        static: "text-pulse-violet border-pulse-violet/40 bg-pulse-violet/10",
        software: "text-pulse-orange border-pulse-orange/40 bg-pulse-orange/10"
    };

    return (
        <div className="p-4 sm:p-8">
            {/* Header */}
            <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold mb-1 text-white font-syne">Portfolio Management</h2>
                    <p className="text-sm text-text-secondary">Manage demo websites, categories, order, and thumbnails.</p>
                </div>
                <div className="flex items-center gap-3">
                    {saving && (
                        <span className="text-xs text-pulse-cyan font-mono animate-pulse">● Saving…</span>
                    )}
                    <button
                        onClick={addDemo}
                        className="bg-pulse-cyan text-black px-5 py-2.5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 text-sm"
                    >
                        <span className="text-lg leading-none">+</span> Add Project
                    </button>
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex gap-2 mb-8 p-1 glass-1 rounded-full w-fit border border-white/10">
                {(["all", "dynamic", "static", "software"] as const).map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all capitalize ${filterCategory === cat
                            ? "bg-pulse-cyan text-black shadow-[0_0_12px_rgba(0,200,255,0.4)]"
                            : "text-text-secondary hover:text-white"
                            }`}
                    >
                        {cat === "all" ? `All (${demos.length})` : `${cat} (${demos.filter(d => d.category === cat).length})`}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDemos.map((demo, filteredIdx) => {
                    const actualIndex = demos.indexOf(demo);
                    const isExpanded = expandedIndex === actualIndex;

                    return (
                        <div
                            key={actualIndex}
                            className={`glass-2 rounded-2xl border flex flex-col bg-white/5 backdrop-blur-md transition-all duration-300 ${isExpanded ? "border-pulse-cyan/40 shadow-[0_0_30px_rgba(0,200,255,0.1)]" : "border-white/10"
                                }`}
                        >
                            {/* Thumbnail + Order Badge */}
                            <div className="relative group">
                                <img
                                    src={demo.image}
                                    alt={demo.name}
                                    className="w-full h-44 object-cover rounded-t-2xl transition-opacity"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
                                    }}
                                />

                                {/* Order Number Badge */}
                                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[11px] font-bold text-white font-mono">
                                    {demo.order}
                                </div>

                                {/* Category Badge */}
                                <span className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-wider ${categoryColors[demo.category] || "text-white border-white/20 bg-white/10"}`}>
                                    {demo.category}
                                </span>

                                {/* Quick Actions overlay */}
                                <div className="absolute inset-x-2 bottom-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => moveToTop(actualIndex)} className="flex-1 bg-black/70 backdrop-blur-md text-pulse-cyan py-1 rounded-lg text-[10px] font-bold hover:bg-pulse-cyan hover:text-black transition-colors" title="Move to Top">⬆ Top</button>
                                    <button onClick={() => reorderDemo(actualIndex, "up")} disabled={actualIndex === 0} className="flex-1 bg-black/70 backdrop-blur-md text-white py-1 rounded-lg text-[10px] font-bold disabled:opacity-30 hover:bg-white/20 transition-colors">↑ Up</button>
                                    <button onClick={() => reorderDemo(actualIndex, "down")} disabled={actualIndex === demos.length - 1} className="flex-1 bg-black/70 backdrop-blur-md text-white py-1 rounded-lg text-[10px] font-bold disabled:opacity-30 hover:bg-white/20 transition-colors">↓ Down</button>
                                    <button onClick={() => moveToBottom(actualIndex)} className="flex-1 bg-black/70 backdrop-blur-md text-pulse-orange py-1 rounded-lg text-[10px] font-bold hover:bg-pulse-orange hover:text-black transition-colors" title="Move to Bottom">⬇ Bottom</button>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex flex-col gap-4 flex-1">
                                {/* Title row */}
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Project Title</p>
                                        <input
                                            type="text"
                                            value={demo.name}
                                            onChange={(e) => updateDemo(actualIndex, "name", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan transition-all"
                                            placeholder="Enter project name..."
                                        />
                                    </div>
                                    {/* Delete */}
                                    <button
                                        onClick={() => deleteDemo(actualIndex)}
                                        className="mt-5 w-8 h-8 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center text-sm transition-colors flex-shrink-0"
                                        title="Delete"
                                    >×</button>
                                </div>

                                {/* Category + Order position */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Category</p>
                                        <select
                                            value={demo.category}
                                            onChange={(e) => updateDemo(actualIndex, "category", e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan cursor-pointer appearance-none"
                                        >
                                            <option value="dynamic" className="bg-[#111]">🔵 Dynamic (Animated)</option>
                                            <option value="static" className="bg-[#111]">🟣 Static</option>
                                            <option value="software" className="bg-[#111]">💽 Software</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Display Order #</p>
                                        <input
                                            type="number"
                                            min={1}
                                            max={demos.length}
                                            value={demo.order}
                                            onChange={(e) => setOrder(actualIndex, parseInt(e.target.value) || 1)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Expand toggle */}
                                <button
                                    onClick={() => setExpandedIndex(isExpanded ? null : actualIndex)}
                                    className="text-[10px] uppercase tracking-widest text-text-secondary hover:text-white transition-colors font-bold mt-1"
                                >
                                    {isExpanded ? "▲ Less Options" : "▼ More Options"}
                                </button>

                                {isExpanded && (
                                    <div className="space-y-3 border-t border-white/10 pt-3">
                                        {/* Cover Photo */}
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Cover Photo URL</p>
                                            <input
                                                type="text"
                                                value={demo.image}
                                                onChange={(e) => updateDemo(actualIndex, "image", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan transition-all"
                                                placeholder="https://..."
                                            />
                                        </div>
                                        {/* Demo Link */}
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Demo Link / URL</p>
                                            <input
                                                type="text"
                                                value={demo.link}
                                                onChange={(e) => updateDemo(actualIndex, "link", e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan transition-all"
                                                placeholder="/demos/my-project/index.html"
                                            />
                                        </div>
                                        {/* Description */}
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Description</p>
                                            <textarea
                                                value={demo.desc}
                                                onChange={(e) => updateDemo(actualIndex, "desc", e.target.value)}
                                                rows={2}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-pulse-cyan transition-all resize-none"
                                            />
                                        </div>
                                        {/* Accent Color + BG */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">Accent Color</p>
                                                <div className="flex gap-2 items-center">
                                                    <input type="color" value={demo.accent} onChange={(e) => updateDemo(actualIndex, "accent", e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
                                                    <input type="text" value={demo.accent} onChange={(e) => updateDemo(actualIndex, "accent", e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none font-mono" />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-[0.2em] text-pulse-cyan font-bold mb-1.5">BG Color</p>
                                                <div className="flex gap-2 items-center">
                                                    <input type="color" value={demo.bg} onChange={(e) => updateDemo(actualIndex, "bg", e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
                                                    <input type="text" value={demo.bg} onChange={(e) => updateDemo(actualIndex, "bg", e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none font-mono" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Test Link */}
                                        <button
                                            className="w-full bg-white/5 hover:bg-pulse-cyan/10 border border-white/10 hover:border-pulse-cyan/40 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all text-white/60 hover:text-white"
                                            onClick={() => window.open(demo.link, "_blank")}
                                        >
                                            🔗 Test Demo Link
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredDemos.length === 0 && (
                <div className="text-center py-20 text-text-secondary">
                    <p className="text-4xl mb-4">📂</p>
                    <p className="font-syne font-bold text-xl text-white mb-2">No projects found</p>
                    <p className="text-sm">No projects match the selected filter. <button onClick={() => setFilterCategory("all")} className="text-pulse-cyan underline">Show all</button></p>
                </div>
            )}
        </div>
    );
}
