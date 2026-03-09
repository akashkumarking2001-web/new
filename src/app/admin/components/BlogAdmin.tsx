"use client";

import { useState, useEffect } from "react";

export default function BlogAdmin() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [isAdding, setIsAdding] = useState(false);

    // New block form state
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("Engineering");
    const [read, setRead] = useState("5 min read");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("#00C8FF");

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error("Failed to fetch blogs", error);
        }
    };

    const handleSave = async (data: any[]) => {
        try {
            await fetch("/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            fetchBlogs();
        } catch (error) {
            console.error("Failed to save blogs", error);
        }
    };

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const newBlog = { title, cat, read, desc, color };
        const newBlogs = [newBlog, ...blogs];
        setBlogs(newBlogs);
        handleSave(newBlogs);
        setIsAdding(false);
        // Reset
        setTitle("");
        setDesc("");
    };

    const handleDelete = (index: number) => {
        const newBlogs = [...blogs];
        newBlogs.splice(index, 1);
        setBlogs(newBlogs);
        handleSave(newBlogs);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">Blog & Insights</h2>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="glass-1 px-4 py-2 rounded-lg text-sm border border-white/10 hover:border-pulse-cyan hover:text-pulse-cyan transition-colors"
                >
                    {isAdding ? 'Cancel' : '+ New Blog Post'}
                </button>
            </div>

            {isAdding && (
                <form onSubmit={handleAdd} className="glass-2 p-6 rounded-2xl border border-white/10 mb-8 max-w-2xl mx-auto space-y-4">
                    <h3 className="font-bold mb-4">Create New Post</h3>
                    <input
                        required placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pulse-cyan text-sm"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            required placeholder="Category" value={cat} onChange={e => setCat(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pulse-cyan text-sm"
                        />
                        <input
                            required placeholder="Read Time" value={read} onChange={e => setRead(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pulse-cyan text-sm"
                        />
                        <select
                            value={color} onChange={e => setColor(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pulse-cyan text-sm cursor-pointer"
                        >
                            <option value="#00C8FF" className="bg-[#111]">Cyan</option>
                            <option value="#FF6B35" className="bg-[#111]">Orange</option>
                            <option value="#7B2FE8" className="bg-[#111]">Purple</option>
                            <option value="#52B788" className="bg-[#111]">Green</option>
                        </select>
                    </div>
                    <textarea
                        required placeholder="Short Description..." value={desc} onChange={e => setDesc(e.target.value)}
                        className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-pulse-cyan text-sm resize-none"
                    />
                    <button type="submit" className="w-full bg-axo-gradient p-3 rounded-lg font-bold text-white shadow-lg shadow-pulse-cyan/20">Publish Post</button>
                </form>
            )}

            <div className="space-y-4">
                {blogs.map((blog, index) => (
                    <div key={index} className="glass-1 p-5 rounded-2xl flex items-center justify-between border-l-4 group" style={{ borderLeftColor: blog.color }}>
                        <div className="flex-1">
                            <div className="flex gap-3 mb-2 font-mono text-[10px] uppercase text-text-secondary tracking-wider">
                                <span style={{ color: blog.color }}>{blog.cat}</span>
                                <span>{blog.read}</span>
                            </div>
                            <h3 className="font-bold text-lg text-white group-hover:text-pulse-cyan transition-colors mb-1">{blog.title}</h3>
                            <p className="text-sm text-text-secondary truncate">{blog.desc}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(index)}
                            className="px-4 py-2 ml-4 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider border border-red-500/20 shrink-0"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
