import { TrendingUp, TrendingDown, DollarSign, Download } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useToast } from '../Toast';

const treatmentRevenueData = [
    { name: 'Root Canal', revenue: 154000 },
    { name: 'Implants', revenue: 240000 },
    { name: 'Scaling', revenue: 45000 },
    { name: 'Extractions', revenue: 62000 },
    { name: 'Crowns', revenue: 180000 },
    { name: 'Consultations', revenue: 32000 },
];

export function Earnings() {
    const { showToast } = useToast();

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-text-dark tracking-tight">Earnings & Analytics</h2>
                    <p className="text-text-muted font-medium">Detailed breakdown of clinic revenue and treatment performance.</p>
                </div>
                <button
                    onClick={() => showToast('Financial Report Downloaded', 'success')}
                    className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors flex-1 md:flex-none"
                >
                    <Download size={16} /> Export Detailed Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4"><TrendingUp size={20} /></div>
                    <p className="text-sm font-bold text-slate-500 mb-1">Total Revenue (MTD)</p>
                    <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-display font-bold text-text-dark">₹7,13,000</h3>
                        <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded-full flex items-center gap-1">+14.5%</span>
                    </div>
                </div>
                <div className="bg-surface border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"><DollarSign size={20} /></div>
                    <p className="text-sm font-bold text-slate-500 mb-1">Average Ticket Size</p>
                    <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-display font-bold text-text-dark">₹4,250</h3>
                        <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded-full flex items-center gap-1">+2.1%</span>
                    </div>
                </div>
                <div className="bg-surface border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-alert/10 text-alert rounded-xl flex items-center justify-center mb-4"><TrendingDown size={20} /></div>
                    <p className="text-sm font-bold text-slate-500 mb-1">Outstanding Payments</p>
                    <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-display font-bold text-text-dark">₹42,000</h3>
                        <span className="text-xs font-bold bg-alert/10 text-alert px-2 py-0.5 rounded-full flex items-center gap-1">-5.4%</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-surface border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <h3 className="font-display font-bold text-lg text-text-dark mb-6">Revenue by Treatment</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={treatmentRevenueData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E2E8F0" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 12, fontWeight: 500 }} width={80} />
                                <Tooltip
                                    cursor={{ fill: '#F1F5F9' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`₹${(value || 0).toLocaleString()}`, 'Revenue']}
                                />
                                <Bar dataKey="revenue" fill="#3B82F6" radius={[0, 4, 4, 0]} barSize={24} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-surface border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <h3 className="font-display font-bold text-lg text-text-dark mb-4">Top Performing Services</h3>
                    <div className="space-y-4">
                        {treatmentRevenueData.sort((a, b) => b.revenue - a.revenue).slice(0, 4).map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-slate-600 shadow-sm border border-slate-200">{idx + 1}</div>
                                    <p className="font-bold text-slate-700">{item.name}</p>
                                </div>
                                <p className="font-bold text-text-dark">₹{item.revenue.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
