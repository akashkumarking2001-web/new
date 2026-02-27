import { useState } from 'react';
import { useToast } from '../Toast';
import { Calendar as CalendarIcon, Clock, MoreVertical, Plus } from 'lucide-react';
import { Modal } from '../../components/Modal';

export function Appointments() {
    const { showToast } = useToast();
    const [activeView, setActiveView] = useState('Today');
    const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);

    const [appointments, setAppointments] = useState<{ id: string, name: string, time: string, type: string, status: string, date?: string }[]>([
        { id: '1', name: 'Alisha Singh', time: '10:00 AM', type: 'Consultation', status: 'Confirmed', date: 'Today' },
        { id: '2', name: 'Vikram Patel', time: '11:30 AM', type: 'Follow up', status: 'Pending', date: 'Today' },
        { id: '3', name: 'Rahul Sharma', time: '02:00 PM', type: 'Root Canal', status: 'Engaged', date: 'Today' },
        { id: '4', name: 'Priya Verma', time: '04:15 PM', type: 'Checkup', status: 'Booked', date: 'Today' },
        { id: '5', name: 'Sanjay Kumar', time: '10:00 AM', type: 'Consultation', status: 'Confirmed', date: 'Weekly' },
        { id: '6', name: 'Anita Desai', time: '11:30 AM', type: 'Follow up', status: 'Pending', date: 'Weekly' },
        { id: '7', name: 'Ravi Teja', time: '02:00 PM', type: 'Root Canal', status: 'Booked', date: 'Monthly' },
    ]);

    const [pending, setPending] = useState([
        { id: 'p1', name: 'Arjun Nair', time: 'Today, 05:30 PM', type: 'Root Canal' }
    ]);

    const handleConfirm = (id: string, name: string, time: string, type: string) => {
        setPending(pending.filter(p => p.id !== id));
        setAppointments([...appointments, { id: `conf-${id}`, name, time: time.split(', ')[1] || time, type, status: 'Confirmed' }]);
        showToast('Appointment Confirmed!', 'success');
    };

    const handleReject = (id: string) => {
        setPending(pending.filter(p => p.id !== id));
        showToast('Appointment Rejected.', 'error');
    };

    const filteredAppointments = appointments.filter(apt => {
        if (activeView === 'Today') return apt.date === 'Today' || !apt.date;
        if (activeView === 'Weekly') return apt.date === 'Today' || apt.date === 'Weekly' || !apt.date;
        return true; // Monthly
    });

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Appointments</h2>
                    <p className="text-text-muted font-medium">Manage your daily schedule and upcoming bookings.</p>
                </div>
                <button
                    onClick={() => setIsSlotModalOpen(true)}
                    className="bg-primary hover:bg-primary-hover text-white shadow-premium px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-transform active:scale-95"
                >
                    <Plus size={16} /> Book Slot
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm min-h-[60vh]">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-4">
                            {['Today', 'Weekly', 'Monthly'].map(view => (
                                <button key={view} onClick={() => setActiveView(view)} className={`pb-2 transition-colors ${activeView === view ? 'font-bold text-text-dark border-b-2 border-primary' : 'font-medium text-slate-400 hover:text-slate-600'}`}>
                                    {view}
                                </button>
                            ))}
                        </div>
                        <p className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full"><CalendarIcon size={14} className="inline mr-1" /> {activeView}</p>
                    </div>

                    <div className="space-y-4">
                        {filteredAppointments.length === 0 ? (
                            <p className="text-center text-slate-500 py-10">No appointments for {activeView}.</p>
                        ) : filteredAppointments.map((apt) => (
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
                        {pending.length === 0 ? (
                            <p className="text-sm text-slate-500">No pending requests.</p>
                        ) : pending.map(p => (
                            <div key={p.id} className="p-4 bg-alert/5 border border-alert/20 rounded-xl mb-3">
                                <p className="font-bold text-text-dark">{p.name}</p>
                                <p className="text-xs text-slate-500 font-medium mb-3">{p.time} • {p.type}</p>
                                <div className="flex gap-2">
                                    <button onClick={() => handleConfirm(p.id, p.name, p.time, p.type)} className="flex-1 py-2 bg-text-dark text-white rounded-lg text-xs font-bold hover:bg-black transition-colors">Confirm</button>
                                    <button onClick={() => handleReject(p.id)} className="flex-1 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={isSlotModalOpen} onClose={() => setIsSlotModalOpen(false)} title="Block Slot / New Booking">
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Date</label>
                            <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-slate-500 mb-1 block">Time</label>
                            <input type="time" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 mb-1 block">Patient Name & Phone</label>
                        <input type="text" placeholder="e.g. John Doe - 9876543210" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-500 mb-1 block">Doctor</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600">
                            <option>Dr. Jenkins (Available)</option>
                            <option>Dr. Smith (Busy)</option>
                        </select>
                    </div>
                    <button onClick={() => {
                        showToast('Slot booked and added to calendar.', 'success');
                        setIsSlotModalOpen(false);
                    }} className="w-full py-2 bg-primary text-white rounded-lg text-sm font-bold mt-4">Confirm Slot</button>
                </div>
            </Modal>
        </div>
    );
}
