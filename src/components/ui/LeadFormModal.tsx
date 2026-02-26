"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        projectDetails: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } catch (error) {
            console.error('Failed to submit form', error);
        }

        // Format the message for WhatsApp
        const message = `Hello AxoSoul! I'm interested in starting a project.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*WhatsApp:* ${formData.whatsapp}%0A*Company:* ${formData.company}%0A*Project Details:* ${formData.projectDetails}`;

        // Open WhatsApp Web/App
        window.open(`https://wa.me/919999999999?text=${message}`, "_blank");

        onClose();
        setFormData({ name: "", email: "", whatsapp: "", company: "", projectDetails: "" });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] max-w-[500px] max-h-[90vh] overflow-y-auto glass-2 rounded-3xl p-6 md:p-8 z-[101] border border-white/10 box-shadow"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-text-secondary hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <h3 className="font-syne font-bold text-2xl text-white mb-2">Let&apos;s Build Something Iconic</h3>
                        <p className="font-sans text-sm text-text-secondary mb-8">Fill out the details below, and we&apos;ll connect with you instantly on WhatsApp.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Name</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Email</label>
                                <input
                                    required
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors"
                                    placeholder="Enter your email (e.g., you@company.com)"
                                />
                            </div>
                            <div>
                                <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">WhatsApp Number</label>
                                <input
                                    required
                                    type="tel"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors"
                                    placeholder="Enter your WhatsApp number"
                                />
                            </div>
                            <div>
                                <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Company (Optional)</label>
                                <input
                                    type="text"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors"
                                    placeholder="Acme Corp"
                                />
                            </div>
                            <div>
                                <label className="block font-sans text-xs uppercase tracking-wider text-text-tertiary mb-2">Project Details</label>
                                <textarea
                                    required
                                    value={formData.projectDetails}
                                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                    className="w-full h-32 py-3 bg-white/5 border border-white/10 rounded-xl px-4 text-white font-sans text-sm focus:outline-none focus:border-pulse-cyan focus:bg-white/10 transition-colors resize-none"
                                    placeholder="Tell us a bit about what you want to build..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full h-12 mt-4 rounded-xl bg-axo-gradient font-sans font-medium text-white hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(123,47,232,0.3)]"
                            >
                                Submit & Chat on WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
