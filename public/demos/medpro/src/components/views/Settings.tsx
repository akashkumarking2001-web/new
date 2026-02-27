import { Settings as SettingsIcon, Users, ShieldCheck, CreditCard, ChevronRight, Save } from 'lucide-react';
import { useToast } from '../Toast';

export function Settings() {
    const { showToast } = useToast();

    const handleSave = () => showToast('Settings successfully saved!', 'success');

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Clinic Settings</h2>
                    <p className="text-text-muted font-medium">Manage clinic configuration, team access, and billing preferences.</p>
                </div>
                <button
                    onClick={handleSave}
                    className="bg-primary hover:bg-primary-hover text-white shadow-premium px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                    <Save size={16} /> Save Changes
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Navigation Menu */}
                <div className="md:w-64 bg-surface border border-slate-200 rounded-2xl shadow-sm p-4 h-fit flex flex-col gap-2">
                    <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors bg-primary/10 text-primary font-bold">
                        <SettingsIcon size={18} /> General Setup
                    </button>
                    <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors font-medium">
                        <ShieldCheck size={18} /> Administration
                    </button>
                    <button className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors font-medium">
                        <span className="flex items-center gap-3"><Users size={18} /> Manage Staff Roles</span>
                        <span className="bg-alert text-white text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</span>
                    </button>
                    <button className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors font-medium">
                        <span className="flex items-center gap-3"><CreditCard size={18} /> Billing & Plans</span>
                        <ChevronRight size={14} className="text-slate-400" />
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 space-y-6">
                    <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
                        <h3 className="font-display text-lg font-bold text-text-dark border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                            <SettingsIcon size={20} className="text-primary" /> General Configuration
                        </h3>

                        <div className="space-y-5 relative z-10 max-w-2xl">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Clinic Name</label>
                                <input type="text" defaultValue="City Cardiovascular Clinic" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-sm transition-all text-text-dark font-medium" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Working Days</label>
                                    <select className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-sm text-slate-600 font-medium cursor-pointer">
                                        <option>Mon - Sat</option>
                                        <option>Mon - Fri</option>
                                        <option>Mon - Sun</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Timing</label>
                                    <select className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:border-primary shadow-sm text-slate-600 font-medium cursor-pointer">
                                        <option>09:00 AM - 08:00 PM</option>
                                        <option>10:00 AM - 07:00 PM</option>
                                        <option>Custom Split Shifts</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Default Slot Duration (mins)</label>
                                <div className="flex gap-3">
                                    {['10', '15', '20', '30'].map(m => (
                                        <button key={m} className={`flex-1 py-2 border rounded-lg text-sm font-bold transition-all ${m === '15' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'}`}>
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Automated WhatsApp Reminders</label>
                                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
                                    <div>
                                        <p className="font-bold text-sm text-text-dark text-slate-600">Patient Appointment Alerts</p>
                                        <p className="text-xs text-slate-500 font-medium">Send confirmation and 24hr reminders automatically.</p>
                                    </div>
                                    <button onClick={() => showToast('Toggled Settings')} className="w-12 h-6 rounded-full bg-success flex items-center p-1 transition-colors relative shadow-inner">
                                        <div className="w-4 h-4 rounded-full bg-white absolute right-1 shadow-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6 max-w-full">
                        <h3 className="font-display text-lg font-bold text-text-dark mb-2">Billing & Tax Details</h3>
                        <p className="text-sm font-medium text-slate-500 mb-6 border-b border-slate-100 pb-4">Manage GST and invoicing settings for the platform.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">GST Number</label>
                                <input type="text" defaultValue="27AADCB2230M1Z2" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-mono text-text-dark shadow-inner outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Consultation Fee (₹)</label>
                                <input type="number" defaultValue="800" className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm font-bold font-mono text-text-dark shadow-sm outline-none focus:border-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
