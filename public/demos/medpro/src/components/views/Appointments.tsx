import { useToast } from '../Toast';
import { Calendar as CalendarIcon, Clock, MoreVertical, Plus } from 'lucide-react';

export function Appointments() {
    const { showToast } = useToast();

    const appointments = [
        { id: '1', name: 'Alisha Singh', time: '10:00 AM', type: 'Consultation', status: 'Confirmed' },
        { id: '2', name: 'Vikram Patel', time: '11:30 AM', type: 'Follow up', status: 'Pending' },
        { id: '3', name: 'Rahul Sharma', time: '02:00 PM', type: 'Root Canal', status: 'Engaged' },
        { id: '4', name: 'Priya Verma', time: '04:15 PM', type: 'Checkup', status: 'Booked' },
    ];

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Appointments</h2>
                    <p className="text-text-muted font-medium">Manage your daily schedule and upcoming bookings.</p>
                </div>
                <button
                    onClick={() => showToast('Slot booking modal opened!')}
                    className="bg-primary hover:bg-primary-hover text-white shadow-premium px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-transform active:scale-95"
                >
                    <Plus size={16} /> Book Slot
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[60vh]">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-4">
                            <button className="font-bold text-text-dark pb-2 border-b-2 border-primary">Today</button>
                            <button className="font-medium text-slate-400 pb-2 hover:text-slate-600 transition-colors">Weekly</button>
                            <button className="font-medium text-slate-400 pb-2 hover:text-slate-600 transition-colors">Monthly</button>
                        </div>
                        <p className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full"><CalendarIcon size={14} className="inline mr-1" /> Feb 27, 2026</p>
                    </div>

                    <div className="space-y-4">
                        {appointments.map((apt) => (
                            <div key={apt.id} className={`flex items-center justify-between p-4 rounded-xl border transition-colors hover:border-slate-300 ${apt.status === 'Engaged' ? 'bg-primary/5 border-primary/20' : 'bg-slate-50 border-slate-100'}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-600">{apt.name.charAt(0)}</div>
                                    <div>
                                        <p className="font-bold text-text-dark">{apt.name}</p>
                                        <p className="text-xs text-slate-500 font-medium">{apt.type}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                                        <Clock size={14} /> {apt.time}
                                    </div>
                                    <div className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md ${apt.status === 'Confirmed' ? 'bg-success/10 text-success' :
                                            apt.status === 'Pending' ? 'bg-alert/10 text-alert' :
                                                apt.status === 'Engaged' ? 'bg-primary text-white animate-pulse' :
                                                    'bg-slate-200 text-slate-600'
                                        }`}>
                                        {apt.status}
                                    </div>
                                    <button onClick={() => showToast(`Options for ${apt.name}`)} className="text-slate-400 hover:text-slate-600 p-2"><MoreVertical size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-display font-bold text-lg text-text-dark mb-4">Pending Confirmations</h3>
                        <div className="p-4 bg-alert/5 border border-alert/20 rounded-xl">
                            <p className="font-bold text-text-dark">Arjun Nair</p>
                            <p className="text-xs text-slate-500 font-medium mb-3">Today, 05:30 PM • Root Canal</p>
                            <div className="flex gap-2">
                                <button onClick={() => showToast('Appointment Confirmed!', 'success')} className="flex-1 py-2 bg-text-dark text-white rounded-lg text-xs font-bold hover:bg-black transition-colors">Confirm</button>
                                <button onClick={() => showToast('Appointment Rejected.', 'error')} className="flex-1 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
