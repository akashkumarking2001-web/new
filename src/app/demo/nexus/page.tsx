"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, GradientTexture, Html } from "@react-three/drei";
import Link from "next/link";
import {
    Plus,
    ArrowRight,
    Shield,
    Zap,
    Cpu,
    BarChart2,
    Globe,
    Wallet,
    Layers,
    Unlock,
    RefreshCcw,
    TrendingUp,
    LayoutGrid
} from "lucide-react";

// --- 3D COMPONENTS ---

function NexusCore() {
    const meshRef = useRef<any>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
                <MeshDistortMaterial
                    distort={0.4}
                    speed={3}
                    metalness={0.9}
                    roughness={0.1}
                    emissive="#7B2FE8"
                    emissiveIntensity={0.5}
                >
                    <GradientTexture
                        stops={[0, 1]}
                        colors={['#7B2FE8', '#00F2FF']}
                    />
                </MeshDistortMaterial>
            </Sphere>
        </Float>
    );
}

// --- UI COMPONENTS ---

function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="glass-2 p-8 border border-white/5 hover:border-[#7B2FE8]/40 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-[#7B2FE8]/10 flex items-center justify-center mb-8 border border-[#7B2FE8]/20 group-hover:scale-110 transition-transform">
                <Icon className="w-7 h-7 text-[#7B2FE8]" />
            </div>
            <h3 className="text-xl font-syne font-bold text-white mb-4 uppercase tracking-tighter">{title}</h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">{desc}</p>
            <div className="h-[1px] w-12 bg-white/10 group-hover:w-full group-hover:bg-[#7B2FE8] transition-all duration-700" />
        </div>
    );
}

function StatBox({ label, val, sub }: any) {
    return (
        <div className="flex flex-col gap-2 p-8 border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#7B2FE8] font-mono font-bold">{label}</span>
            <div className="text-4xl font-syne font-extrabold text-white tracking-tightest">{val}</div>
            <span className="text-xs text-white/30 font-mono italic">{sub}</span>
        </div>
    );
}

// --- MAIN PAGE ---

export default function NexusDefi() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => setIsClient(true), []);

    return (
        <div className="bg-[#020202] text-white font-sans selection:bg-[#7B2FE8] selection:text-white min-h-screen">

            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-[-10%] w-[60%] h-[60%] bg-[#7B2FE8]/10 blur-[140px] rounded-full opacity-60" />
                <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] bg-[#00F2FF]/10 blur-[140px] rounded-full opacity-40" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between px-12 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7B2FE8] to-[#00F2FF] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(123,47,232,0.4)]">
                        <Layers className="w-6 h-6 text-black fill-current" />
                    </div>
                    <span className="font-syne font-black text-2xl tracking-tighter text-white uppercase italic">Nexus_</span>
                </div>

                <div className="hidden lg:flex items-center gap-12 text-[10px] uppercase font-bold tracking-[0.2em] text-white/50">
                    {['Ecosystem', 'Governance', 'Staking', 'Docs'].map(item => (
                        <Link key={item} href="#" className="hover:text-white transition-colors">{item}</Link>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 hover:text-white transition-colors">
                        Whitepaper
                    </button>
                    <button className="px-8 py-3 rounded-full bg-white text-black text-[10px] uppercase tracking-[0.2em] font-black hover:bg-[#7B2FE8] hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                        Launch App
                    </button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="min-h-screen flex flex-col lg:flex-row items-center pt-24">
                <div className="flex-1 px-12 lg:px-24 relative z-10 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="px-3 py-1 rounded-full bg-[#7B2FE8]/10 border border-[#7B2FE8]/30 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FE8] animate-pulse" />
                                <span className="text-[9px] uppercase tracking-widest font-black text-[#7B2FE8]">V2.0 LIVE ON MAINNET</span>
                            </div>
                        </div>
                        <h1 className="text-[clamp(3rem,8vw,8rem)] font-syne font-black leading-[0.9] tracking-tightest uppercase mb-12">
                            THE QUANTUM <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FE8] via-[#00F2FF] to-white">LIQUIDITY HUB.</span>
                        </h1>
                        <p className="max-w-[540px] text-lg text-white/50 font-light leading-relaxed mb-12">
                            Nexus is a decentralized liquidity protocol enabling seamless value transfer across all EVM-compatible networks with near-zero slippage and institutional-grade security.
                        </p>
                        <div className="flex flex-wrap items-center gap-8">
                            <button className="group flex items-center gap-4 px-10 py-5 rounded-full bg-[#7B2FE8] text-white font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-[0_0_50px_rgba(123,47,232,0.5)]">
                                Start Trading <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="user" className="w-full h-full object-cover grayscale" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-white">4.2k+ Active Traders</span>
                                    <span className="text-[9px] uppercase tracking-widest text-[#7B2FE8] font-black">Joining the nexus</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex-1 h-[600px] lg:h-screen w-full relative">
                    {isClient && (
                        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={20} color="#7B2FE8" />
                            <pointLight position={[-10, -10, -10]} intensity={10} color="#00F2FF" />
                            <Suspense fallback={null}>
                                <NexusCore />
                            </Suspense>
                            {/* Optional: Add some particles */}
                            <mesh position={[0, 0, -2]} rotation={[0, 0, Math.PI / 4]}>
                                <planeGeometry args={[20, 20]} />
                                <meshBasicMaterial color="#7B2FE8" opacity={0.02} transparent />
                            </mesh>
                        </Canvas>
                    )}
                    {/* Holographic Stats Overlay */}
                    <div className="absolute bottom-20 right-12 z-20 flex flex-col gap-4">
                        <div className="glass-3 p-6 min-w-[240px] bg-black/60 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-1 h-full bg-[#7B2FE8]" />
                            <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-2">Total Value Locked</div>
                            <div className="text-3xl font-syne font-bold text-white mb-2">$1.42B</div>
                            <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-mono">
                                <TrendingUp className="w-3 h-3" />
                                <span>+24.1% (30D)</span>
                            </div>
                        </div>
                        <div className="glass-3 p-6 min-w-[240px] bg-black/60 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1 h-full bg-[#00F2FF]" />
                            <div className="text-[10px] text-white/40 uppercase tracking-widest font-mono mb-2">Protocol APR</div>
                            <div className="text-3xl font-syne font-bold text-white mb-2">12.4%</div>
                            <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono">
                                <RefreshCcw className="w-3 h-3 animate-spin-slow" />
                                <span>REAL-TIME YIELD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Divider */}
            <section className="border-y border-white/5 flex flex-col md:flex-row items-stretch">
                <StatBox label="Total Volume" val="$42B+" sub="Processed since genesis" />
                <StatBox label="Market Pairs" val="450+" sub="Wrapped & Native pairs" />
                <StatBox label="Avg. Fee" val="0.01%" sub="Industry leading low cost" />
                <StatBox label="Block Time" val="12ms" sub="Latency optimized routing" />
            </section>

            {/* Features Grid */}
            <section className="py-40 px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-[#7B2FE8]/5 blur-[120px] rounded-full" />
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    <FeatureCard
                        icon={Shield}
                        title="Sovereign Security"
                        desc="Multi-layer auditing and real-time threat detection powered by quantum-resistant encryption architectures."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Instant Finality"
                        desc="Experience transaction speeds that rival centralized exchanges without compromising on decentralization."
                    />
                    <FeatureCard
                        icon={LayoutGrid}
                        title="Cross-Chain Hub"
                        desc="Connect your liquidity across 50+ blockchains with our decentralized bridge architecture."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 px-12 lg:px-24 border-t border-white/5 bg-black">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#7B2FE8] to-[#00F2FF] rounded-lg" />
                            <span className="font-syne font-black text-xl tracking-tighter text-white uppercase italic">Nexus_</span>
                        </div>
                        <p className="text-white/30 text-sm max-w-[340px] leading-relaxed">
                            The foundational protocol for the future of decentralized finance. Build, trade, and scale with Nexus.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
                        <div>
                            <h4 className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-8">Protocol</h4>
                            <ul className="flex flex-col gap-4 text-sm text-white/30">
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Staking</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Governance</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Treasury</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-8">Community</h4>
                            <ul className="flex flex-col gap-4 text-sm text-white/30">
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Discord</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Twitter</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Telegram</li>
                            </ul>
                        </div>
                        <div className="hidden md:block">
                            <h4 className="text-[10px] uppercase font-black tracking-widest text-white/50 mb-8">Resources</h4>
                            <ul className="flex flex-col gap-4 text-sm text-white/30">
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Documentation</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Security Audit</li>
                                <li className="hover:text-[#7B2FE8] cursor-pointer transition-colors">Brand Assets</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/10 font-mono">
                    <span>© 2026 Nexus Protocol. No rights reserved. Built for the void.</span>
                    <div className="flex gap-10">
                        <span className="hover:text-white cursor-pointer transition-colors">Integrations</span>
                        <span className="hover:text-white cursor-pointer transition-colors">API Keys</span>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        .spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tracking-tightest { letter-spacing: -0.06em; }
      `}</style>
        </div>
    );
}
