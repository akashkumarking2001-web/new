"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, InstagramLogo, CheckCircle } from "@phosphor-icons/react";
import { createPortal } from "react-dom";

interface FreeBonusModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FreeBonusModal({ isOpen, onClose }: FreeBonusModalProps) {
    const [mounted, setMounted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => setMounted(true), []);

    const [formData, setFormData] = useState({
        fullName: "",
        contactNumber: "",
        email: "",
        websiteRequirement: "",
        followsInstagram: "No",
        instagramId: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/bonuses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    setIsSubmitted(false);
                    onClose();
                    setFormData({
                        fullName: "",
                        contactNumber: "",
                        email: "",
                        websiteRequirement: "",
                        followsInstagram: "No",
                        instagramId: ""
                    });
                }, 4000);
            }
        } catch (error) {
            console.error('Failed to submit form', error);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-[550px] max-h-[90vh] overflow-y-auto glass-2 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-text-secondary hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-pulse-orange/10 border border-pulse-orange/20 rounded-full mb-4">
                                        <span className="w-2 h-2 rounded-full bg-pulse-orange animate-pulse" />
                                        <span className="font-mono text-[10px] text-pulse-orange uppercase tracking-wider font-bold">Limited Time Offer</span>
                                    </div>
                                    <h3 className="font-syne font-bold text-3xl text-white mb-2 text-gradient">Claim Your Free Bonus</h3>
                                    <p className="font-sans text-sm text-text-secondary">Fill out the details below to unlock exclusive benefits for your next project.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-orange focus:bg-white/10 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Contact Number</label>
                                            <input
                                                required
                                                type="tel"
                                                value={formData.contactNumber}
                                                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                                                className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-orange focus:bg-white/10 transition-colors"
                                                placeholder="+91..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-orange focus:bg-white/10 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Website Requirement</label>
                                        <textarea
                                            required
                                            value={formData.websiteRequirement}
                                            onChange={(e) => setFormData({ ...formData, websiteRequirement: e.target.value })}
                                            className="w-full h-24 py-3 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-orange focus:bg-white/10 transition-colors resize-none"
                                            placeholder="Describe the type of website you need..."
                                        />
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="font-sans text-sm text-white">Do you follow our Instagram?</span>
                                            <select
                                                value={formData.followsInstagram}
                                                onChange={(e) => setFormData({ ...formData, followsInstagram: e.target.value })}
                                                className="bg-void border border-white/10 rounded-lg px-2 py-1 text-xs text-white focus:outline-none focus:border-pulse-orange"
                                            >
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <a
                                                href="https://www.instagram.com/axosoul.in/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl text-white font-sans text-xs font-bold hover:scale-105 transition-transform"
                                            >
                                                <InstagramLogo size={20} weight="bold" />
                                                Follow @axosoul.in
                                            </a>
                                            <div className="flex-1">
                                                <input
                                                    type="text"
                                                    value={formData.instagramId}
                                                    onChange={(e) => setFormData({ ...formData, instagramId: e.target.value })}
                                                    className="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-xs focus:outline-none focus:border-pulse-orange"
                                                    placeholder="Enter your Instagram ID"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full h-14 rounded-2xl bg-axo-gradient font-syne font-bold text-lg text-white hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,107,53,0.3)] relative overflow-hidden group"
                                    >
                                        <span className="relative z-10">Submit & Get Free Bonus</span>
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="py-12 flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-500/20"
                                >
                                    <CheckCircle size={48} weight="fill" />
                                </motion.div>
                                <h3 className="font-syne font-bold text-3xl text-white mb-4">Success!</h3>
                                <p className="font-sans text-text-secondary text-lg max-w-[400px]">
                                    Your form has been submitted. We will verify your details and contact you shortly regarding your free bonus.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
