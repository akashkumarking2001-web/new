"use client";

import { useState, useEffect } from "react";

export default function LeadsAdmin() {
    const [leads, setLeads] = useState<any[]>([]);

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/leads");
            const data = await res.json();
            setLeads(data);
        } catch (error) {
            console.error("Failed to fetch leads", error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-6 text-white">Lead Tracking</h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="text-xs text-text-secondary uppercase bg-white/5">
                        <tr>
                            <th className="px-6 py-3 rounded-tl-lg">Date</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">WhatsApp</th>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3 rounded-tr-lg">Project Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead, index) => (
                            <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="px-6 py-4 text-text-tertiary whitespace-nowrap">
                                    {new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </td>
                                <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                                <td className="px-6 py-4 text-pulse-cyan">{lead.email}</td>
                                <td className="px-6 py-4 text-pulse-cyan">{lead.whatsapp}</td>
                                <td className="px-6 py-4">{lead.company || "-"}</td>
                                <td className="px-6 py-4 max-w-xs truncate" title={lead.projectDetails}>{lead.projectDetails}</td>
                            </tr>
                        ))}
                        {leads.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-text-tertiary">
                                    No leads generated yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
