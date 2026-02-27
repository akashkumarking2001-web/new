import { useState } from 'react';
import { Search, Filter, Download, Plus, ChevronRight, Activity, Calendar } from 'lucide-react';
import { useToast } from '../Toast';
import { mockPatients } from '../../data/mockData';

export function Patients() {
    const { showToast } = useToast();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = mockPatients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Patient Directory</h2>
                    <p className="text-text-muted font-medium">Manage records, view histories, and analyze patient lifetime value.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={() => showToast('Patient Export started')}
                        className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors flex-1 md:flex-none"
                    >
                        <Download size={16} /> Export CSV
                    </button>
                    <button
                        onClick={() => showToast('New Patient flow initiated!')}
                        className="bg-primary hover:bg-primary-hover text-white shadow-premium px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 flex-1 md:flex-none"
                    >
                        <Plus size={16} /> Add Patient
                    </button>
                </div>
            </div>

            <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                {/* Controls */}
                <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between bg-slate-50/50">
                    <div className="relative w-full max-w-sm">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name, ID, or phone..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm transition-all"
                        />
                    </div>
                    <button className="px-4 py-2 border border-slate-200 bg-white text-slate-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                        <Filter size={16} /> Filters
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                                <th className="p-4 rounded-tl-xl w-64">Patient Details</th>
                                <th className="p-4">Contact Info</th>
                                <th className="p-4 text-center">Last Visit</th>
                                <th className="p-4 text-right">Total Spent</th>
                                <th className="p-4 rounded-tr-xl"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredPatients.map((p, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors cursor-pointer group" onClick={() => showToast(`Opening EMR for ${p.name}`)}>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-display shadow-sm">
                                                {p.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-bold text-text-dark group-hover:text-primary transition-colors">{p.name}</p>
                                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                                    <span>{p.id}</span> • <span>{p.gender}, {p.age}y</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm font-bold text-slate-600">{p.phone}</p>
                                        <p className="text-xs font-medium text-slate-400">{p.email}</p>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                            <Calendar size={12} /> {p.lastVisit}
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <p className="text-sm font-bold text-text-dark">₹{p.totalSpent.toLocaleString('en-IN')}</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-success mt-0.5">{p.history.length} Visits</p>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all ml-auto">
                                            <ChevronRight size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredPatients.length === 0 && (
                        <div className="p-12 text-center flex flex-col items-center justify-center">
                            <Activity size={48} className="text-slate-200 mb-4" />
                            <p className="text-slate-500 font-bold">No patients found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
