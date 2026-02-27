import { useState } from 'react';
import { Search, Filter, Download, Plus, ChevronRight, Activity, Calendar } from 'lucide-react';
import { useToast } from '../Toast';
import { mockPatients, treatmentsMaster } from '../../data/mockData';
import { Modal } from '../../components/Modal';

export function Patients() {
    const { showToast } = useToast();
    const [searchTerm, setSearchTerm] = useState('');
    const [treatmentFilter, setTreatmentFilter] = useState('');
    const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<any>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredPatients = mockPatients.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTreatment = treatmentFilter === '' ? true : p.history.some((h: any) => h.treatment === treatmentFilter);

        return matchesSearch && matchesTreatment;
    });

    const handleExportCSV = () => {
        const headers = ['Patient ID', 'Name', 'Age', 'Gender', 'Phone', 'Email', 'Total Spent', 'Visits'];
        const csvContent = [
            headers.join(','),
            ...filteredPatients.map(p =>
                `"${p.id}","${p.name}",${p.age},"${p.gender}","${p.phone}","${p.email}",${p.totalSpent},${p.history.length}`
            )
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'medpro_patients.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Patient database exported to CSV!', 'success');
    };

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Patient Directory</h2>
                    <p className="text-text-muted font-medium">Manage records, view histories, and analyze patient lifetime value.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button
                        onClick={handleExportCSV}
                        className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors flex-1 md:flex-none"
                    >
                        <Download size={16} /> Export CSV
                    </button>
                    <button
                        onClick={() => setIsAddPatientOpen(true)}
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
                    <div className="relative">
                        <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="px-4 py-2 border border-slate-200 bg-white text-slate-600 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                            <Filter size={16} /> Filters
                        </button>
                        {isFilterOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-slate-200 shadow-xl z-20 max-h-64 overflow-y-auto">
                                <div className="p-2">
                                    <p className="px-2 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Filter by Treatment</p>
                                    <button onClick={() => { setTreatmentFilter(''); setIsFilterOpen(false); }} className={`w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-50 ${treatmentFilter === '' ? 'bg-primary/5 text-primary font-bold' : 'text-slate-600'}`}>All Treatments</button>
                                    {treatmentsMaster.map(t => (
                                        <button key={t.id} onClick={() => { setTreatmentFilter(t.name); setIsFilterOpen(false); }} className={`w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-50 ${treatmentFilter === t.name ? 'bg-primary/5 text-primary font-bold' : 'text-slate-600'}`}>
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
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
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors cursor-pointer group" onClick={() => setSelectedPatient(p)}>
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

            <Modal isOpen={isAddPatientOpen} onClose={() => setIsAddPatientOpen(false)} title="Register New Patient">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">First Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Last Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Age</label>
                            <input type="number" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Gender</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Blood Grp</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 mb-1 block">Phone Number</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <button onClick={() => { setIsAddPatientOpen(false); showToast('Patient registered successfully.', 'success'); }} className="w-full mt-4 py-2 bg-primary hover:bg-primary-hover text-white flex items-center justify-center rounded-lg font-bold text-sm">Save Patient Profile</button>
                </div>
            </Modal>

            <Modal isOpen={!!selectedPatient} onClose={() => setSelectedPatient(null)} title="Patient Profile & Case History" maxWidth="max-w-2xl">
                {selectedPatient && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-start pb-4 border-b border-slate-100">
                            <div className="flex gap-4 items-center">
                                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl font-display shadow-sm">
                                    {selectedPatient.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-2xl text-text-dark">{selectedPatient.name}</h3>
                                    <p className="text-sm font-medium text-slate-500">ID: {selectedPatient.id} • {selectedPatient.gender}, {selectedPatient.age}y • Blood: {selectedPatient.bloodGroup}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <button onClick={() => showToast('Opening detailed Booking Form info...')} className="text-xs text-primary font-bold bg-primary/10 px-3 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                                    View Booking Details
                                </button>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-text-dark mb-4 border-b border-slate-100 pb-2">Treatment History ({selectedPatient.history?.length || 0} Visits)</h4>
                            <div className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {selectedPatient.history && selectedPatient.history.length > 0 ? selectedPatient.history.map((visit: any, i: number) => (
                                    <div key={i} className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full inline-block mb-1">{visit.date}</span>
                                                <h5 className="font-bold text-text-dark text-sm">{visit.treatment}</h5>
                                            </div>
                                            <span className="font-bold text-text-dark text-sm">₹{visit.cost}</span>
                                        </div>
                                        <p className="text-xs text-slate-500">{visit.notes}</p>
                                        {visit.tooth && <p className="text-xs text-slate-400 mt-1">Tooth: {visit.tooth}</p>}
                                    </div>
                                )) : (
                                    <p className="text-sm text-slate-500 italic">No previous history available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
