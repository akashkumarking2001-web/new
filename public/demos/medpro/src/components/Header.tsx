import { Bell, Search, UserPlus, Menu } from 'lucide-react';
import { useToast } from './Toast';

export function Header({ toggleMenu }: { toggleMenu: () => void }) {
    const { showToast } = useToast();

    return (
        <div className="h-20 border-b border-slate-200 bg-surface/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-4 md:px-8 shadow-sm">
            <div className="flex items-center gap-4 flex-1">
                <button onClick={toggleMenu} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
                    <Menu size={24} />
                </button>
                <div className="relative w-full max-w-md hidden md:block">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search patients, appointments, ICD-10 codes..."
                        className="w-full bg-slate-100/50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white transition-all text-text-dark placeholder-slate-400 font-medium"
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-6 text-slate-500">
                <div className="hidden sm:flex items-center gap-2 bg-alert/10 px-3 py-1.5 rounded-full border border-alert/20">
                    <div className="w-2 h-2 rounded-full bg-alert animate-pulse" />
                    <span className="text-sm font-bold text-alert">3 Patients Waiting</span>
                </div>
                <button onClick={() => showToast("You have 3 new notifications!")} className="relative hover:text-primary transition-colors text-slate-400 hover:bg-slate-50 p-2 rounded-full">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
                </button>
                <button onClick={() => showToast("Quick Registration form opened")} className="bg-primary hover:bg-primary-hover text-white shadow-premium shadow-primary/30 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                    <UserPlus size={16} />
                    <span className="hidden sm:inline">New Patient</span>
                </button>
            </div>
        </div>
    );
}
