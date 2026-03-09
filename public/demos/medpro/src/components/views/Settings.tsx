import { Settings as SettingsIcon, Users, ShieldCheck, CreditCard, ChevronRight, Save } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '../Toast';

export function Settings() {
    const { showToast } = useToast();
    const [activeTab, setActiveTab] = useState('general');

    const handleSave = () => showToast('Settings successfully saved!', 'success');

    const tabs = [
        { id: 'general', label: 'General Setup', icon: SettingsIcon },
        { id: 'admin', label: 'Administration', icon: ShieldCheck },
        { id: 'staff', label: 'Manage Staff Roles', icon: Users, badge: 'PRO' },
        { id: 'billing', label: 'Billing & Plans', icon: CreditCard }
    ];

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
                <div className="md:w-64 bg-surface border border-slate-200 rounded-2xl shadow-sm p-4 h-fit flex flex-col gap-2">
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center justify-between w-full p-3 rounded-xl transition-colors font-medium ${activeTab === tab.id ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-slate-50 text-slate-600'}`}>
                            <span className="flex items-center gap-3"><tab.icon size={18} /> {tab.label}</span>
                            {tab.badge && <span className="bg-alert text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{tab.badge}</span>}
                            {!tab.badge && activeTab !== tab.id && <ChevronRight size={14} className="text-slate-400 opacity-0 group-hover:opacity-100" />}
                        </button>
                    ))}
                </div>

                <div className="flex-1 space-y-6">
                    {activeTab === 'general' && (
                        <>
                            <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6 overflow-hidden relative">
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
                        </>
                    )}

                    {activeTab === 'admin' && (
                        <div className="space-y-6">
                            <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6 relative overflow-hidden">
                                <h3 className="font-display text-lg font-bold text-text-dark border-b border-slate-100 pb-4 mb-6 flex items-center gap-2">
                                    <ShieldCheck size={20} className="text-primary" /> System Administration
                                </h3>
                                <div className="space-y-6 max-w-2xl relative z-10">
                                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                        <h4 className="font-bold text-sm text-text-dark mb-1">Automated Data Backup</h4>
                                        <p className="text-xs text-slate-500 mb-3 font-medium">Daily backups at 2:00 AM. Data is encrypted and stored in AWS S3.</p>
                                        <div className="flex gap-3 items-center">
                                            <button onClick={() => showToast('Full database backup triggered.', 'success')} className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-lg transition-transform active:scale-95 shadow-premium">Force Backup Now</button>
                                            <span className="text-xs font-bold text-slate-400">Last backup: Today, 2:00 AM</span>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-slate-200 rounded-xl">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm text-text-dark">Two-Factor Authentication (2FA)</h4>
                                                <p className="text-xs text-slate-500 font-medium">Enforce 2FA for all staff accounts accessing MedPro.</p>
                                            </div>
                                            <button onClick={() => showToast('2FA Settings updated')} className="w-12 h-6 rounded-full bg-slate-200 flex items-center p-1 relative shadow-inner">
                                                <div className="w-4 h-4 rounded-full bg-white absolute left-1 shadow-sm" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4 border border-slate-200 rounded-xl">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm text-text-dark">API Webhook Integrations</h4>
                                                <p className="text-xs text-slate-500 font-medium">Connect external tools like Razorpay or lab partner software.</p>
                                            </div>
                                            <button className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg hover:bg-primary/20">Manage API Keys</button>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-alert/5 border border-alert/20 rounded-xl">
                                        <h4 className="font-bold text-sm text-alert mb-1">Danger Zone</h4>
                                        <p className="text-xs text-slate-600 mb-3 font-medium">Permanently delete all patient records or reset the application.</p>
                                        <button onClick={() => showToast('Action restricted to Super Admin', 'error')} className="border border-alert text-alert hover:bg-alert hover:text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">Factory Reset Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'staff' && (
                        <div className="space-y-6">
                            <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6">
                                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                    <h3 className="font-display text-lg font-bold text-text-dark flex items-center gap-2">
                                        <Users size={20} className="text-primary" /> Manage Staff & Roles
                                    </h3>
                                    <button onClick={() => showToast('Invite link generated')} className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-lg transition-transform active:scale-95 shadow-premium">
                                        + Invite User
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                                <th className="p-3 rounded-tl-lg">Staff Member</th>
                                                <th className="p-3">Role</th>
                                                <th className="p-3">Status</th>
                                                <th className="p-3 rounded-tr-lg text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr>
                                                <td className="p-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">DJ</div>
                                                        <div>
                                                            <p className="font-bold text-text-dark text-sm">Dr. Jenkins</p>
                                                            <p className="text-xs text-slate-500">jenkins@medpro.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3"><span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded">Admin / Provider</span></td>
                                                <td className="p-3"><span className="text-xs font-bold text-success">Active</span></td>
                                                <td className="p-3 text-right"><button className="text-slate-400 hover:text-slate-600 text-xs font-bold">Edit</button></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">SS</div>
                                                        <div>
                                                            <p className="font-bold text-text-dark text-sm">Sarah Smith</p>
                                                            <p className="text-xs text-slate-500">sarah@medpro.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3"><span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">Receptionist</span></td>
                                                <td className="p-3"><span className="text-xs font-bold text-success">Active</span></td>
                                                <td className="p-3 text-right"><button className="text-slate-400 hover:text-alert font-bold text-xs" onClick={() => showToast('Access Revoked', 'error')}>Revoke</button></td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-sm">MT</div>
                                                        <div>
                                                            <p className="font-bold text-text-dark text-sm">Mark Taylor</p>
                                                            <p className="text-xs text-slate-500">mark@medpro.com</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-3"><span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">Dental Assistant</span></td>
                                                <td className="p-3"><span className="text-xs font-bold text-alert">Pending Acc.</span></td>
                                                <td className="p-3 text-right"><button className="text-primary font-bold text-xs">Resend</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'billing' && (
                        <div className="space-y-6">
                            <div className="bg-surface border border-slate-200 rounded-2xl shadow-sm p-6">
                                <h3 className="font-display text-lg font-bold text-text-dark mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                                    <CreditCard size={20} className="text-primary" /> Active Plan & Billing
                                </h3>

                                <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-primary text-lg">MedPro Unlimited</h4>
                                            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">PRO</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-600">₹14,999 / year</p>
                                        <p className="text-xs text-slate-400 font-medium mt-1">Your next billing date is <span className="text-text-dark font-bold">Oct 12, 2026</span></p>
                                    </div>
                                    <button onClick={() => showToast('Opening Stripe Customer Portal...')} className="bg-white text-primary border border-primary px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary/5 transition-colors">Manage Subscription</button>
                                </div>

                                <div>
                                    <h4 className="font-bold text-sm text-text-dark mb-3">Recent Invoices</h4>
                                    <div className="space-y-2">
                                        {[
                                            { id: 'INV-2025-010', date: 'Oct 12, 2025', amount: '₹14,999', status: 'Paid' },
                                            { id: 'INV-2024-008', date: 'Oct 12, 2024', amount: '₹12,999', status: 'Paid' },
                                        ].map(inv => (
                                            <div key={inv.id} className="flex justify-between items-center p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-success/10 text-success flex items-center justify-center">
                                                        <CreditCard size={14} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-sm text-text-dark group-hover:text-primary transition-colors">{inv.id}</p>
                                                        <p className="text-xs text-slate-500">{inv.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-right">
                                                    <p className="text-sm font-bold text-text-dark">{inv.amount}</p>
                                                    <button className="text-primary text-xs font-bold hover:underline">Download file</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
