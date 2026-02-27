import { Activity, Mic, Share2, ShieldAlert, FileText, RotateCcw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useToast } from '../Toast';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, RoundedBox, Html } from '@react-three/drei';

function VoiceDictation({ text, setText, recording, setRecording, showToast }: any) {
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onresult = (event: any) => {
                let currentText = '';
                for (let i = 0; i < event.results.length; i++) {
                    currentText += event.results[i][0].transcript;
                }
                setText(currentText);
            };

            recognition.onend = () => {
                // If recording state is still true but it ended organically, restart
                if (recording) {
                    recognition.start();
                }
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                setRecording(false);
                showToast("Voice dictation error: " + event.error, "error");
            };

            recognitionRef.current = recognition;
        } else {
            console.warn("Speech recognition not supported in this browser.");
        }
    }, [recording, setText, showToast, setRecording]);

    const toggleRecording = () => {
        if (!recording) {
            setRecording(true);
            showToast('Listening...', 'success');
            if (recognitionRef.current) recognitionRef.current.start();
        } else {
            setRecording(false);
            if (recognitionRef.current) recognitionRef.current.stop();
        }
    };

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 relative flex-shrink-0 shadow-inner">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Mic size={12} /> Patient Complaint (Voice-to-EMR)
                </p>
                <button
                    onClick={toggleRecording}
                    className={`p-2 rounded-full transition-all flex items-center gap-2 ${recording ? 'bg-alert text-white shadow-premium shadow-alert/30 animate-pulse' : 'bg-slate-200 text-slate-500 hover:bg-slate-300'}`}
                    title="Voice dictation"
                >
                    <Mic size={14} />
                    {recording && <span className="text-[10px] font-bold">Recording...</span>}
                </button>
            </div>
            <textarea
                className="w-full bg-transparent text-sm text-text-dark font-medium italic outline-none resize-none h-24"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Click the microphone to start hands-free voice dictation..."
            />
        </div>
    );
}

function AIDiagnosis() {
    const { showToast } = useToast();
    const [recording, setRecording] = useState(false);
    const [text, setText] = useState("Tooth 18: Deep caries, recommend RCT. Patient has a history of high blood pressure and is allergic to Penicillin.");
    const [analyzing, setAnalyzing] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const handleAnalyze = () => {
        setAnalyzing(true);
        setTimeout(() => {
            setAnalyzing(false);
            setShowResults(true);
            showToast("AI Differential Diagnosis Complete", "success");
        }, 2000);
    };

    return (
        <div className="bg-surface border border-slate-200 rounded-2xl p-6 relative overflow-hidden shadow-sm flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Activity size={24} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-lg text-text-dark">AI Clinical Assistant</h3>
                        <p className="text-xs text-text-muted font-medium">Powered by LLaMA-3 (MedTuned)</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-success border border-success/20 bg-success/5 px-2 py-1 rounded-full font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span>
                        ONLINE
                    </span>
                </div>
            </div>

            <div className="relative z-10 flex flex-col flex-1 gap-5">
                <VoiceDictation text={text} setText={setText} recording={recording} setRecording={setRecording} showToast={showToast} />

                {!showResults ? (
                    <div className="flex-1 flex flex-col items-center justify-center py-6">
                        <button
                            onClick={handleAnalyze}
                            disabled={analyzing}
                            className={`px-6 py-3 rounded-full font-bold text-white shadow-premium transition-all flex items-center gap-2 ${analyzing ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover hover:scale-105 active:scale-95 shadow-primary/30'}`}
                        >
                            <Activity size={18} className={analyzing ? 'animate-spin' : ''} />
                            {analyzing ? 'Analyzing Clinical Text...' : 'Run Smart Diagnosis'}
                        </button>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col gap-4 animate-slide-up">
                        <div className="p-4 bg-white border border-alert/30 rounded-xl shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-alert/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                            <h4 className="flex items-center gap-2 text-sm font-bold text-alert mb-2">
                                <ShieldAlert size={16} /> Critical Risk Alert
                            </h4>
                            <p className="text-sm font-medium text-text-dark">Patient has documented <span className="font-bold text-alert">Penicillin Allergy</span>. Amoxicillin prescription flagged and blocked.</p>
                            <p className="text-xs text-slate-500 mt-2">Recommended alternative: Clindamycin 300mg QID.</p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">AI Diagnosis Suggestions</p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-white text-primary font-mono text-sm px-2 py-1 border border-primary/20 rounded-md font-bold shadow-sm">96%</span>
                                        <div>
                                            <span className="text-sm text-text-dark font-bold block">Irreversible Pulpitis (Tooth 18)</span>
                                            <span className="text-xs text-slate-500 font-medium">Req: Endodontic Therapy (RCT)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">Financial Intelligence</p>
                            <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                <div>
                                    <p className="text-sm font-bold text-text-dark">Est. Treatment Plan: ₹4,500</p>
                                    <p className="text-xs text-slate-500 font-medium">Includes RCT + Consult.</p>
                                </div>
                                <button onClick={() => showToast('Quote sent to patient via WhatsApp!', 'success')} className="px-3 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded flex items-center gap-1.5 transition-colors shadow-sm">
                                    <Share2 size={12} /> Send Quote
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// Interactive 3D Tooth Component
function Tooth3D({ position, active, hovered, setHovered, onClick, number }: any) {
    const scale = active ? 1.2 : (hovered ? 1.1 : 1);

    return (
        <group position={position} scale={scale} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick}>
            <RoundedBox args={[0.8, 1.2, 0.8]} radius={0.2} smoothness={4}>
                <meshStandardMaterial color={active ? '#3B82F6' : (hovered ? '#cbd5e1' : '#f8fafc')} roughness={0.3} />
            </RoundedBox>
            {active && (
                <Html position={[0, 1, 0]} center>
                    <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-premium animate-bounce">
                        #{number}
                    </div>
                </Html>
            )}
        </group>
    );
}

function InteractiveOdontogram() {
    const { showToast } = useToast();
    const [selectedTooth, setSelectedTooth] = useState<number | null>(null);
    const [hoveredTooth, setHoveredTooth] = useState<number | null>(null);
    const [showXray, setShowXray] = useState(false);

    // Create a simplified arch consisting of 14 teeth
    const teethNodes = Array.from({ length: 14 }).map((_, i) => {
        const x = (i - 6.5) * 1.0;
        const z = Math.abs(i - 6.5) * 0.4 - 2; // Curve
        return { id: i + 1, position: [x, 0, z] as [number, number, number] };
    });

    return (
        <div className="bg-[#1a1c23] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
                <h3 className="font-display font-bold text-lg text-white tracking-widest uppercase">3D Odontogram</h3>
                <div className="pointer-events-auto flex gap-2">
                    <button onClick={() => { setShowXray(!showXray); showToast(showXray ? 'X-Ray Overlay hidden' : 'AI X-Ray Vision active', 'success'); }} className={`px-3 py-1.5 rounded text-xs font-bold transition-colors shadow-sm border ${showXray ? 'bg-alert/20 text-alert border-alert/50' : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white'}`}>
                        {showXray ? 'HIDE X-RAY' : 'AI X-RAY VISUAL'}
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full relative min-h-[300px]">
                {showXray && (
                    <div className="absolute inset-0 z-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen animate-fade-in" />
                )}
                <Canvas camera={{ position: [0, 4, 8], fov: 45 }} className="w-full h-full relative z-10">
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <Environment preset="city" />

                    <group position={[0, -0.5, 0]}>
                        {teethNodes.map((t) => (
                            <Tooth3D
                                key={t.id}
                                number={t.id}
                                position={t.position}
                                active={selectedTooth === t.id}
                                hovered={hoveredTooth === t.id}
                                setHovered={(val: boolean) => setHoveredTooth(val ? t.id : null)}
                                onClick={() => { setSelectedTooth(t.id); showToast(`Selected Tooth #${t.id}`); }}
                            />
                        ))}
                    </group>
                    <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                </Canvas>
            </div>

            <div className="bg-[#242831] p-4 flex gap-4 items-center border-t border-slate-700/50">
                {selectedTooth ? (
                    <div className="flex-1 animate-slide-up">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-bold text-sm">Tooth #{selectedTooth} Data</span>
                            <button className="text-xs bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded font-bold transition-colors">Mark Decay</button>
                        </div>
                        <p className="text-xs text-slate-400">Interact with the 3D model to rotate, zoom, and select individual teeth. AI highlights will map to the geometry directly.</p>
                    </div>
                ) : (
                    <p className="text-sm text-slate-400 font-medium italic w-full text-center py-2">Select a tooth to view details and mark conditions.</p>
                )}
            </div>
        </div>
    );
}

function TreatmentProgress() {
    const [progress, setProgress] = useState(50);

    return (
        <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-display font-bold text-lg text-text-dark mb-4">Treatment Progress Demo</h3>
            <p className="text-sm text-text-muted mb-6">Compare before and after visually for Invisalign / Ortho tracking.</p>

            <div className="relative w-full h-[200px] border border-slate-200 rounded-xl overflow-hidden cursor-crosshair group shadow-sm">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="After" className="absolute inset-0 w-full h-full object-cover grayscale-[50%]" />

                <div className="absolute inset-0 w-full h-full object-cover overflow-hidden" style={{ width: `${progress}%` }}>
                    <img src="https://images.unsplash.com/photo-1598256989668-232ea67041ca?auto=format&fit=crop&q=80&w=800" alt="Before" className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[200px] max-w-none object-cover brightness-110 saturate-[80%]" />
                </div>

                <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 flex items-center justify-center -ml-0.5" style={{ left: `${progress}%` }}>
                    <div className="w-6 h-6 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center">
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-3 bg-slate-300 rounded"></div>
                            <div className="w-0.5 h-3 bg-slate-300 rounded"></div>
                        </div>
                    </div>
                </div>

                <input
                    type="range" min="0" max="100" value={progress} onChange={(e) => setProgress(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />

                <span className="absolute bottom-2 left-2 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">Before</span>
                <span className="absolute bottom-2 right-2 bg-primary/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded shadow-premium shadow-primary/30">After (Predicted)</span>
            </div>
        </div>
    );
}

export function EMR() {
    const { showToast } = useToast();
    const [timelineEvents, setTimelineEvents] = useState([
        { id: 1, date: "Dec 12, 2024", text: "Patient reports mild sensitivity in upper right quadrant during cold drinks. Conducted visual inspection. Scheduled X-ray for next visit. Prescribed Sensodyne.", active: true },
        { id: 2, date: "Jun 05, 2024", text: "Routine scaling and polishing completed. Oral hygiene is good. No active caries detected in visual exam.", active: false }
    ]);
    const [newNote, setNewNote] = useState("");

    const addNote = () => {
        if (!newNote.trim()) return;
        setTimelineEvents([
            { id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }), text: newNote, active: true },
            ...timelineEvents.map(e => ({ ...e, active: false }))
        ]);
        setNewNote("");
        showToast("Clinical note added to timeline.", "success");
    };

    return (
        <div className="animate-slide-up space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4">
                <div className="flex items-center gap-6">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Patient" className="w-16 h-16 rounded-full object-cover shadow-sm bg-slate-100" />
                    <div>
                        <h2 className="text-2xl font-display font-bold text-text-dark tracking-tight">Evelyn Harper</h2>
                        <div className="text-sm font-medium text-slate-500 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                            <span>Female, 34 yrs</span>
                            <span>Blood Group: O+</span>
                            <span className="bg-alert/10 text-alert px-2 rounded-full font-bold text-[10px] flex items-center shadow-sm uppercase">Penicillin Allergy</span>
                        </div>
                    </div>
                </div>
                <div className="flex w-full md:w-auto gap-3">
                    <button onClick={() => showToast('Opening share dialog')} className="p-2.5 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors shadow-sm flex-shrink-0"><Share2 size={18} /></button>
                    <button onClick={() => showToast('Connecting to secure Teledentistry room...')} className="w-full md:w-auto px-5 py-2.5 bg-primary hover:bg-primary-hover transition-colors text-white text-sm font-bold rounded-lg shadow-premium">Start Teledentistry</button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch min-h-[500px]">
                <AIDiagnosis />
                <InteractiveOdontogram />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <h3 className="font-display font-bold text-lg text-text-dark">Predictive Health Timeline</h3>
                        <div className="flex w-full sm:w-auto gap-2">
                            <input
                                type="text"
                                placeholder="Quick dictation or note..."
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addNote()}
                                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-primary flex-1 min-w-[200px]"
                            />
                            <button onClick={addNote} className="bg-slate-100 hover:bg-slate-200 border-slate-200 border text-slate-700 font-bold px-4 py-2 rounded-lg text-sm transition-colors shadow-sm">Add</button>
                        </div>
                    </div>
                    <div className="border-l-2 border-slate-200 ml-4 space-y-6 pb-2">
                        {timelineEvents.map((ev, i) => (
                            <div key={ev.id} className={`relative pl-8 transition-opacity ${i > 0 && ev.active === false ? 'opacity-70 group hover:opacity-100' : ''}`}>
                                <div className={`absolute w-4 h-4 rounded-full border-4 border-white left-[-9px] shadow-sm ${ev.active ? 'bg-primary' : 'bg-slate-300 group-hover:bg-slate-400 transition-colors'}`}></div>
                                <p className="text-xs text-slate-400 font-bold mb-1.5">{ev.date}</p>
                                <div className={`p-4 rounded-xl border ${ev.active ? 'bg-primary/5 border-primary/20 shadow-sm' : 'bg-white border-slate-100 shadow-sm transition-colors group-hover:border-slate-300'}`}>
                                    <p className={`text-sm leading-relaxed ${ev.active ? 'text-text-dark font-medium' : 'text-slate-600 font-medium'}`}>{ev.text}</p>

                                    {ev.active && (
                                        <div className="mt-4 pt-3 border-t border-primary/10 flex items-center gap-2">
                                            <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-primary bg-white px-2 py-1 rounded shadow-sm border border-primary/10">
                                                <RotateCcw size={10} /> Prediction
                                            </span>
                                            <span className="text-xs text-slate-500 font-medium italic">High risk of adjacent decay (Tooth 17) within 6 months.</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <TreatmentProgress />
                    <div className="mt-6 bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="font-display font-bold text-lg text-text-dark mb-4">Smart Actions</h3>
                        <div className="space-y-3">
                            <button onClick={() => showToast('Generated valid e-Prescription PDF', 'success')} className="w-full flex justify-between items-center p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group text-sm font-bold text-slate-700">
                                <span className="flex items-center gap-2"><FileText size={16} className="text-blue-500" /> Generate E-Prescription</span>
                                <ChevronRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                            </button>
                            <button onClick={() => showToast('Automated Recall Added for 6 months', 'success')} className="w-full flex justify-between items-center p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group text-sm font-bold text-slate-700">
                                <span className="flex items-center gap-2"><Activity size={16} className="text-green-500" /> Set Automated Recall</span>
                                <ChevronRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Minimal missing icon
function ChevronRight(props: any) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg>
}
