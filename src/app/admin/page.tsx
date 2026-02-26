"use client";

import { useState, useEffect } from "react";
import LeadsAdmin from "./components/LeadsAdmin";
import PortfolioAdmin from "./components/PortfolioAdmin";
import PricingAdmin from "./components/PricingAdmin";
import BlogAdmin from "./components/BlogAdmin";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState("leads");

    useEffect(() => {
        const auth = sessionStorage.getItem("adminAuth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "admin123") {
            sessionStorage.setItem("adminAuth", "true");
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminAuth");
        setIsAuthenticated(false);
        setUsername("");
        setPassword("");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <form onSubmit={handleLogin} className="glass-2 p-8 rounded-3xl w-full max-w-sm border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-pulse-cyan text-white"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-pulse-cyan text-white"
                        />
                        <button type="submit" className="w-full bg-axo-gradient p-3 rounded-lg font-bold hover:scale-[1.02] transition-transform">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 max-w-6xl mx-auto pt-32">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <h1 className="text-3xl font-bold text-pulse-cyan">Admin Dashboard</h1>
                <button onClick={handleLogout} className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-colors border border-white/10">
                    Logout
                </button>
            </div>

            <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 border-b border-white/10">
                {['leads', 'portfolio', 'pricing', 'blogs'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-t-lg transition-colors capitalize whitespace-nowrap ${activeTab === tab ? 'bg-white/10 border-b-2 border-pulse-cyan text-pulse-cyan' : 'opacity-50 hover:opacity-100 hover:bg-white/5'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="glass-1 p-6 md:p-8 rounded-3xl border border-white/10 min-h-[500px]">
                {activeTab === 'leads' && <LeadsAdmin />}
                {activeTab === 'portfolio' && <PortfolioAdmin />}
                {activeTab === 'pricing' && <PricingAdmin />}
                {activeTab === 'blogs' && <BlogAdmin />}
            </div>
        </div>
    );
}
