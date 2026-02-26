"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
    Activity,
    Cpu,
    Globe,
    Server,
    ShieldCheck,
    Zap,
    BarChart3,
    Bell,
    Search,
    Settings,
    Menu,
    ChevronRight,
    ArrowUpRight,
    Terminal
} from "lucide-react";

// --- COMPONENTS ---

function StatCard({ label, value, unit, trend, icon: Icon, color }: any) {
    return (
        <div className="glass-2 p-6 flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 -mr-8 -mt-8 rounded-full blur-2xl" />
            <div className="flex items-center justify-between relative z-10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-mono ${trend >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {trend >= 0 ? '▲' : '▼'} {Math.abs(trend)}%
                </div>
            </div>
            <div className="relative z-10">
                <div className="text-text-secondary text-[11px] uppercase tracking-wider font-mono mb-1">{label}</div>
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-syne tracking-tight text-white">{value}</span>
                    <span className="text-[11px] text-text-tertiary font-mono">{unit}</span>
                </div>
            </div>
        </div>
    );
}

function Sparkline({ color, points }: { color: string, points: number[] }) {
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min;
    const height = 40;
    const width = 120;
    const step = width / (points.length - 1);

    const path = points.map((p, i) => {
        const x = i * step;
        const y = height - ((p - min) / range) * height || 0;
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');

    return (
        <svg width={width} height={height} className="overflow-visible">
            <motion.path
                d={path}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <circle cx={width} cy={height - ((points[points.length - 1] - min) / range) * height || 0} r="3" fill={color} />
        </svg>
    );
}

function NodeItem({ name, status, load, region }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/5">
            <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-rose-400 shadow-[0_0_8px_#fb7185]'} animate-pulse`} />
                <div>
                    <div className="text-sm font-medium text-white">{name}</div>
                    <div className="text-[10px] text-text-tertiary uppercase tracking-widest">{region}</div>
                </div>
            </div>
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                    <div className="text-[10px] text-text-tertiary uppercase mb-1">Load</div>
                    <div className="flex items-center gap-2">
                        <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${load}%` }}
                                className={`h-full ${load > 80 ? 'bg-rose-400' : load > 50 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                            />
                        </div>
                        <span className="text-[10px] font-mono text-text-secondary">{load}%</span>
                    </div>
                </div>
                <button className="p-2 text-text-tertiary hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

// --- MAIN PAGE ---

export default function VelocityDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [requests, setRequests] = useState<number[]>(Array(50).fill(0).map(() => Math.floor(Math.random() * 100) + 200));

    useEffect(() => {
        const interval = setInterval(() => {
            setRequests(prev => [...prev.slice(1), Math.floor(Math.random() * 150) + 200]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const chartData = useMemo(() => {
        const width = 800;
        const height = 200;
        const step = width / (requests.length - 1);
        const max = Math.max(...requests, 400);
        const min = Math.min(...requests, 100);
        const range = max - min;

        const points = requests.map((r, i) => {
            const x = i * step;
            const y = height - ((r - min) / range) * height;
            return `${x},${y}`;
        });

        return {
            path: `M ${points.join(' L ')}`,
            area: `M 0,${height} L ${points.join(' L ')} L ${width},${height} Z`
        };
    }, [requests]);

    return (
        <div className="min-h-screen bg-[#050505] text-text-primary font-sans">
            {/* Background Decor */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00F2FF]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7B2FE8]/5 blur-[120px] rounded-full" />
            </div>

            <div className="flex h-screen relative z-10">

                {/* SIDEBAR */}
                <aside className="w-64 border-r border-white/5 flex flex-col bg-black/40 backdrop-blur-xl">
                    <div className="p-8">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-8 h-8 bg-[#00F2FF] rounded-lg flex items-center justify-center">
                                <Zap className="w-5 h-5 text-black fill-current" />
                            </div>
                            <span className="font-syne font-bold text-xl tracking-tighter text-white">VELOCITY</span>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {[
                                { id: 'overview', label: 'Overview', icon: Activity },
                                { id: 'nodes', label: 'Nodes & Clusters', icon: Server },
                                { id: 'security', label: 'Security Firewall', icon: ShieldCheck },
                                { id: 'analytics', label: 'Detailed Analytics', icon: BarChart3 },
                                { id: 'terminal', label: 'Command Center', icon: Terminal },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${activeTab === item.id
                                            ? 'bg-white/10 text-white border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]'
                                            : 'text-text-secondary hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'text-[#00F2FF]' : ''}`} />
                                    <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
                                    {activeTab === item.id && (
                                        <motion.div layoutId="nav-glow" className="ml-auto w-1 h-4 bg-[#00F2FF] rounded-full shadow-[0_0_10px_#00F2FF]" />
                                    )}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="mt-auto p-8 flex flex-col gap-6">
                        <div className="glass-1 p-4 bg-white/[0.03]">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] text-text-tertiary uppercase tracking-widest font-mono">System Load</span>
                                <span className="text-[10px] text-emerald-400 font-mono">Optimal</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-1">
                                <motion.div
                                    animate={{ width: "42%" }}
                                    className="h-full bg-gradient-to-r from-[#00F2FF] to-[#3B6EFF]"
                                />
                            </div>
                            <span className="text-[9px] text-text-tertiary font-mono">42% CPU Utilization</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center overflow-hidden">
                                <img src="https://i.pravatar.cc/100?u=admin" alt="avatar" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-semibold text-white">Admin Unit 01</div>
                                <div className="text-[10px] text-text-tertiary uppercase font-mono">Operator</div>
                            </div>
                            <button className="text-text-tertiary hover:text-white transition-colors">
                                <Settings className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <main className="flex-1 flex flex-col overflow-hidden">

                    {/* TOP HEADER */}
                    <header className="h-20 border-b border-white/5 flex items-center justify-between px-10 bg-black/20 backdrop-blur-md">
                        <div className="flex items-center gap-6 flex-1">
                            <div className="flex items-center gap-2 text-text-secondary">
                                <span className="text-xs uppercase tracking-[0.2em] font-mono">Network Status:</span>
                                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest">Active</span>
                                </div>
                            </div>
                            <div className="h-4 w-[1px] bg-white/10" />
                            <div className="relative flex-1 max-w-md group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary group-focus-within:text-[#00F2FF] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Global event search..."
                                    className="w-full h-10 bg-white/5 rounded-xl pl-10 pr-4 text-[13px] border border-transparent focus:border-white/10 focus:bg-white/[0.08] transition-all outline-none text-white font-sans"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <Bell className="w-4 h-4 text-white" />
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#FF6B35] shadow-[0_0_8px_#FF6B35]" />
                            </button>
                            <Link href="/">
                                <button className="px-5 py-2.5 rounded-xl bg-[#00F2FF] text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2">
                                    Deploy Node <ArrowUpRight className="w-3 h-3" />
                                </button>
                            </Link>
                        </div>
                    </header>

                    {/* DASHBOARD GRID */}
                    <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">

                        <div className="mb-10">
                            <h1 className="text-[32px] font-syne font-bold text-white mb-2">Network Architecture Overview</h1>
                            <p className="text-text-secondary text-sm">Real-time visualization of global data distribution and edge processing units.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            <StatCard
                                label="Throughput"
                                value="1.24"
                                unit="GB/s"
                                trend={12.4}
                                icon={Zap}
                                color="#00F2FF"
                            />
                            <StatCard
                                label="Avg. Latency"
                                value="14.2"
                                unit="ms"
                                trend={-8.1}
                                icon={Activity}
                                color="#7B2FE8"
                            />
                            <StatCard
                                label="Active Nodes"
                                value="254"
                                unit="UNITS"
                                trend={2.4}
                                icon={Server}
                                color="#3B6EFF"
                            />
                            <StatCard
                                label="Uptime"
                                value="99.998"
                                unit="%"
                                trend={0.001}
                                icon={ShieldCheck}
                                color="#10b981"
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* MAIN CHART */}
                            <div className="lg:col-span-2 glass-2 bg-white/[0.02] p-8 border border-white/5 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Global Request Flow</h3>
                                        <div className="text-[10px] text-text-tertiary uppercase tracking-widest font-mono">Last 60 Minutes • Updated 2s ago</div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-sm bg-[#00F2FF] shadow-[0_0_8px_rgba(0,242,255,0.4)]" />
                                            <span className="text-[10px] text-text-secondary font-mono">Requests</span>
                                        </div>
                                        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] text-white outline-none font-mono">
                                            <option>Hourly</option>
                                            <option>Daily</option>
                                            <option>Monthly</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="relative w-full h-[240px] mt-4">
                                    {/* SVG Grid */}
                                    <svg className="absolute inset-0 w-full h-full opacity-20">
                                        {[0, 1, 2, 3].map(i => (
                                            <line key={i} x1="0" y1={i * 80} x2="100%" y2={i * 80} stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                                        ))}
                                    </svg>

                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.4" />
                                                <stop offset="100%" stopColor="#00F2FF" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d={chartData.area}
                                            fill="url(#chartGradient)"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 1 }}
                                        />
                                        <motion.path
                                            d={chartData.path}
                                            fill="none"
                                            stroke="#00F2FF"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex gap-12">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-text-tertiary uppercase tracking-widest font-mono">Peak Flow</span>
                                            <span className="text-xl font-bold font-syne text-white">412 req/s</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-text-tertiary uppercase tracking-widest font-mono">Dropped</span>
                                            <span className="text-xl font-bold font-syne text-white">0.002%</span>
                                        </div>
                                    </div>
                                    <button className="text-[11px] text-[#00F2FF] hover:translate-x-1 transition-transform flex items-center gap-2 uppercase tracking-widest font-bold">
                                        View Logs <ChevronRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* RECENT INCIDENTS / ALERTS */}
                            <div className="flex flex-col gap-6">
                                <div className="glass-2 bg-rose-500/5 p-6 border-rose-500/20">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
                                            <Bell className="w-4 h-4 text-rose-400" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white">System Alerts</h3>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/5 border-l-rose-500 border-l-2">
                                            <div className="text-[11px] text-rose-400 font-bold mb-1 uppercase tracking-tighter">High Latency Detected</div>
                                            <div className="text-[10px] text-text-secondary leading-normal">Node-US-East-01 reported 240ms delay in packet processing.</div>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                                            <div className="text-[11px] text-text-secondary font-bold mb-1 uppercase tracking-tighter">Backup Completed</div>
                                            <div className="text-[10px] text-text-tertiary leading-normal">Global snapshot v2.4.1 synced.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="glass-2 p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-sm font-bold text-white">Resource Allocation</h3>
                                        <Activity className="w-4 h-4 text-text-tertiary" />
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        {[
                                            { label: 'Cloud Computing', val: 78, color: '#00F2FF' },
                                            { label: 'Edge Bandwidth', val: 42, color: '#7B2FE8' },
                                            { label: 'SQL Database', val: 91, color: '#FF6B35' },
                                            { label: 'In-Memory Cache', val: 15, color: '#10b981' },
                                        ].map((r, i) => (
                                            <div key={i} className="flex flex-col gap-2">
                                                <div className="flex items-center justify-between text-[11px]">
                                                    <span className="text-text-secondary font-medium">{r.label}</span>
                                                    <span className="text-white font-mono">{r.val}%</span>
                                                </div>
                                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${r.val}%` }}
                                                        className="h-full"
                                                        style={{ backgroundColor: r.color }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* NODES SECTION */}
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className="glass-2 p-8">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-lg font-bold text-white">Active Nodes</h3>
                                    <button className="text-xs text-text-tertiary hover:text-white transition-colors">See all 254 nodes</button>
                                </div>
                                <div className="flex flex-col">
                                    <NodeItem name="Edge-West-SanFrancisco" status="online" load={42} region="North America" />
                                    <NodeItem name="Cluster-Europe-Frankfurt" status="online" load={85} region="Europe" />
                                    <NodeItem name="Node-Asia-Singapore-01" status="online" load={12} region="Asia-Pacific" />
                                    <NodeItem name="Backup-Sydney-AU" status="offline" load={0} region="Australia" />
                                </div>
                            </div>

                            <div className="glass-2 p-8 relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute inset-0 bg-blue-500/[0.02] pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                                        <Globe className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Global Content Delivery</h3>
                                    <p className="text-sm text-text-secondary max-w-[340px] mb-8">Scale your application globally with our decentralized edge network. Zero latency, infinite scale.</p>
                                    <div className="flex items-center gap-4">
                                        <button className="px-6 py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform">
                                            Setup New CDN
                                        </button>
                                        <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                                            View Map
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </main>
            </div>

            <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>
    );
}
