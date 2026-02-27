import { FileText, Download, Share2, Plus, Search } from 'lucide-react';
import { useToast } from '../Toast';
import { mockPatients } from '../../data/mockData';

export function Prescriptions() {
    const { showToast } = useToast();
    // Get latest visits from mock data
    const latestPrescriptions = mockPatients.map(p => ({
        patient: p.name,
        date: p.history[0]?.date || 'N/A',
        treatment: p.history[0]?.treatment || 'Consultation',
        status: p.history[0] ? 'Sent via WhatsApp' : 'Draft',
        id: `Rx-${p.history[0]?.id.split('-')[1] || '000'}`,
        meds: p.history[0] ? Math.floor(Math.random() * 3) + 1 : 0
    })).slice(0, 8); // Just show top 8 for UI

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">e-Prescriptions</h2>
                    <p className="text-text-muted font-medium">Draft, send, and track digital prescriptions.</p>
                </div>
                <button
                    onClick={() => showToast('Prescription editor opened')}
                    className="bg-primary hover:bg-primary-hover text-white shadow-premium px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 w-full md:w-auto"
                >
                    <Plus size={16} /> New Prescription
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Rx List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="relative w-full">
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search prescriptions by patient name or ID..."
                            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm transition-all text-text-dark font-medium placeholder-slate-400"
                        />
                    </div>

                    {latestPrescriptions.map((rx, idx) => (
                        <div key={idx} className="bg-surface border border-slate-200 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-premium transition-shadow cursor-pointer group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-text-dark group-hover:text-primary transition-colors text-lg">{rx.patient}</p>
                                    <p className="text-sm font-medium text-slate-500">{rx.treatment} • {rx.meds} Medications prescribing</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
                                <p className="text-xs font-bold text-slate-400 font-mono tracking-widest">{rx.id} • {rx.date}</p>
                                <div className="flex items-center gap-2 text-xs font-bold">
                                    <span className="bg-success/10 text-success px-2 py-1 rounded-md border border-success/20">{rx.status}</span>
                                    <button onClick={(e) => { e.stopPropagation(); showToast('Downloading PDF...'); }} className="p-1.5 border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500"><Download size={14} /></button>
                                    <button onClick={(e) => { e.stopPropagation(); showToast('Link copied / WhatsApp prompt opened'); }} className="p-1.5 border border-slate-200 rounded-md hover:bg-slate-50 text-slate-500"><Share2 size={14} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rx Widget */}
                <div className="space-y-6">
                    <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-display font-bold text-lg text-text-dark mb-4">Quick Draft Patterns</h3>
                        <div className="space-y-3">
                            <button className="w-full p-4 border border-slate-200 rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-sm text-text-dark group-hover:text-primary">Post-Extraction Regimen</span>
                                    <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">3 Meds</span>
                                </div>
                                <p className="text-xs text-slate-400 font-medium">Amoxicillin + Clavulanic Acid, Ketorolac, Pantoprazole</p>
                            </button>
                            <button className="w-full p-4 border border-slate-200 rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all group">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-bold text-sm text-text-dark group-hover:text-primary">Acute Pulpitis Pain</span>
                                    <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full">2 Meds</span>
                                </div>
                                <p className="text-xs text-slate-400 font-medium">Aceclofenac + Paracetamol, Chlorhexidine Mouthwash</p>
                            </button>
                        </div>
                    </div>

                    <div className="bg-alert/5 border border-alert/20 rounded-2xl p-6 shadow-sm">
                        <div className="flex gap-3 mb-2">
                            <div className="mt-1 w-2 h-2 rounded-full bg-alert animate-pulse" />
                            <h3 className="font-bold text-alert">Pending Signatures</h3>
                        </div>
                        <p className="text-sm font-medium text-slate-600 mb-4 pl-5">You have 2 drafted prescriptions waiting for digital signature review.</p>
                        <button onClick={() => showToast('Opening bulk sign window...')} className="w-full py-2 bg-white border border-alert text-alert hover:bg-alert hover:text-white transition-colors text-sm font-bold rounded-lg shadow-sm">Review & Sign</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
