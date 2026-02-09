'use client';

import React, { useState } from 'react';
import {
    Binary,
    Link2,
    Users,
    Shapes,
    ArrowRight,
    HelpCircle,
    CheckCircle2,
    Plus,
    Minus,
    X,
    Divide
} from 'lucide-react';

// --- Coding & Decoding Component ---
const CodingLab = () => {
    const [input, setInput] = useState('HELLO');
    const [shift, setShift] = useState(1);

    const encode = (str: string, s: number) => {
        return str.toUpperCase().split('').map(char => {
            if (char.match(/[A-Z]/)) {
                let code = char.charCodeAt(0) + s;
                if (code > 90) code = 65 + (code - 91);
                return String.fromCharCode(code);
            }
            return char;
        }).join('');
    };

    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-indigo-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Binary className="w-8 h-8" />
                    <h3 className="text-2xl font-black italic tracking-tight">Coding-Decoding Lab</h3>
                </div>
                <p className="text-indigo-100 font-bold opacity-80">Shift alphabets or map symbols to logic.</p>
            </div>

            <div className="p-8 lg:p-10 space-y-10">
                {/* Alphabet Shift */}
                <div className="space-y-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                        <Link2 className="w-4 h-4" /> Alphabet Mapping (Shift {shift})
                    </h4>

                    <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 p-6 rounded-3xl border border-slate-200">
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Original</label>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value.slice(0, 10))}
                                className="w-full bg-white border-2 border-slate-200 rounded-2xl px-6 py-4 font-black text-xl text-indigo-600 focus:border-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <ArrowRight className="w-8 h-8 text-slate-300 hidden md:block" />
                        <div className="flex-1 w-full space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Encoded</label>
                            <div className="w-full bg-indigo-50 border-2 border-indigo-100 rounded-2xl px-6 py-4 font-black text-xl text-indigo-700">
                                {encode(input, shift)}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {[1, 2, 3, -1].map(v => (
                            <button
                                key={v}
                                onClick={() => setShift(v)}
                                className={`px-6 py-3 rounded-2xl font-black text-xs transition-all ${shift === v ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                            >
                                {v > 0 ? `+${v}` : v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Symbol Logic */}
                <div className="space-y-6 bg-slate-900 rounded-[2.5rem] p-8 text-white">
                    <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        Logic Overrides
                    </h4>
                    <p className="text-slate-400 font-bold text-sm italic">"If '+' means 'x' and '-' means '/'"</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-2">
                            <Plus className="w-5 h-5 text-indigo-400" />
                            <ArrowRight className="w-4 h-4 text-slate-600" />
                            <X className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center gap-2">
                            <Minus className="w-5 h-5 text-indigo-400" />
                            <ArrowRight className="w-4 h-4 text-slate-600" />
                            <Divide className="w-5 h-5 text-emerald-400" />
                        </div>
                    </div>

                    <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                        <p className="font-black text-indigo-200 text-xs">Example: 10 + 5 becomes 10 x 5 = 50</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Family Relation Component ---
const FamilyRelationDiagram = () => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-rose-500 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8" />
                    <h3 className="text-2xl font-black italic tracking-tight">Family Relation Mapper</h3>
                </div>
                <p className="text-rose-100 font-bold opacity-80">Building connections using standard symbols.</p>
            </div>

            <div className="p-8 lg:p-10 space-y-12">
                {/* Symbols Legend */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="w-12 h-12 border-4 border-slate-800 flex items-center justify-center font-black">☐</div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Male<br />(Square)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="w-12 h-12 border-4 border-slate-800 rounded-full flex items-center justify-center font-black">○</div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Female<br />(Circle)</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="text-3xl font-black text-slate-800">+</div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Marriage<br />( Husband + Wife )</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="text-2xl font-black text-slate-800">⇔</div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Sibling<br />( Brother ⇔ Sister )</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="w-0.5 h-10 bg-slate-800"></div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Vertical<br />( Parent | Child )</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                        <div className="w-12 h-0.5 bg-slate-800"></div>
                        <span className="text-[10px] font-black uppercase text-slate-400 text-center leading-tight">Horizontal<br />( Sibling Link )</span>
                    </div>
                </div>

                {/* Complex Family Tree Example */}
                <div className="p-8 lg:p-12 bg-rose-50/20 rounded-[3rem] border-2 border-dashed border-rose-100 flex flex-col items-center space-y-8 overflow-x-auto min-w-full no-scrollbar">

                    {/* Gen 1: Grandparents */}
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 border-4 border-slate-900 flex items-center justify-center font-black bg-white shadow-lg">GP(M)</div>
                                <span className="text-[10px] uppercase font-black mt-2 text-slate-400">Grandpa</span>
                            </div>
                            <div className="text-2xl font-black text-rose-500">+</div>
                            <div className="flex flex-col items-center">
                                <div className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center font-black bg-white shadow-lg">GP(F)</div>
                                <span className="text-[10px] uppercase font-black mt-2 text-slate-400">Grandma</span>
                            </div>
                        </div>
                        <div className="w-0.5 h-8 bg-slate-800"></div>
                        <div className="w-[300px] md:w-[450px] h-0.5 bg-slate-800"></div>
                        <div className="flex justify-between w-[300px] md:w-[450px]">
                            <div className="w-0.5 h-8 bg-slate-800"></div>
                            <div className="w-0.5 h-8 bg-slate-800"></div>
                        </div>
                    </div>

                    {/* Gen 2: Parents and Uncle/Aunt */}
                    <div className="flex justify-between w-full max-w-4xl gap-20">
                        {/* Family A */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 border-4 border-slate-900 flex items-center justify-center font-black bg-indigo-50 shadow-md">A(M)</div>
                                    <span className="text-[10px] uppercase font-black mt-1 text-indigo-600 italic">Father</span>
                                </div>
                                <div className="text-xl font-black text-rose-500">+</div>
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center font-black bg-indigo-50 shadow-md">A(F)</div>
                                    <span className="text-[10px] uppercase font-black mt-1 text-indigo-600 italic">Mother</span>
                                </div>
                            </div>
                            <div className="w-0.5 h-8 bg-slate-800"></div>
                            <div className="w-24 h-0.5 bg-slate-800"></div>
                            <div className="flex justify-between w-24">
                                <div className="w-0.5 h-6 bg-slate-800"></div>
                                <div className="w-0.5 h-6 bg-slate-800"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 border-2 border-slate-800 flex items-center justify-center font-black bg-white text-[10px]">C1(M)</div>
                                </div>
                                <div className="text-sm font-black text-slate-400 mt-2">⇔</div>
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 border-2 border-slate-800 rounded-full flex items-center justify-center font-black bg-white text-[10px]">C2(F)</div>
                                </div>
                            </div>
                        </div>

                        {/* Brother Link */}
                        <div className="hidden md:flex items-center">
                            <div className="text-2xl font-black text-slate-300">⇔</div>
                        </div>

                        {/* Family B */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 border-4 border-slate-900 flex items-center justify-center font-black bg-emerald-50 shadow-md">B(M)</div>
                                    <span className="text-[10px] uppercase font-black mt-1 text-emerald-600 italic">Uncle</span>
                                </div>
                                <div className="text-xl font-black text-rose-500">+</div>
                                <div className="flex flex-col items-center">
                                    <div className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center font-black bg-emerald-50 shadow-md">B(F)</div>
                                    <span className="text-[10px] uppercase font-black mt-1 text-emerald-600 italic">Aunt</span>
                                </div>
                            </div>
                            <div className="w-0.5 h-8 bg-slate-800"></div>
                            <div className="w-40 h-0.5 bg-slate-800"></div>
                            <div className="flex justify-between w-40 px-2">
                                <div className="w-0.5 h-6 bg-slate-800"></div>
                                <div className="w-0.5 h-6 bg-slate-800"></div>
                                <div className="w-0.5 h-6 bg-slate-800"></div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-10 h-10 border-2 border-slate-800 flex items-center justify-center font-black bg-white text-[10px]">C1(M)</div>
                                <div className="text-xs font-black text-slate-400 mt-2 tracking-tighter">⇔</div>
                                <div className="w-10 h-10 border-2 border-slate-800 flex items-center justify-center font-black bg-white text-[10px]">C2(M)</div>
                                <div className="text-xs font-black text-slate-400 mt-2 tracking-tighter">⇔</div>
                                <div className="w-10 h-10 border-2 border-slate-800 rounded-full flex items-center justify-center font-black bg-white text-[10px]">C3(F)</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-[2rem] shadow-xl border border-white/10 italic text-sm font-bold text-center">
                        <span className="text-indigo-400">Total:</span> 3 Generations | <span className="text-rose-400">Mixed Relations</span> | Standard Notation Visualized
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Venn Diagram Reasoning ---
const VennLogicVisual = () => {
    const [mode, setMode] = useState<'all' | 'some' | 'no'>('all');

    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-emerald-600 p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Shapes className="w-8 h-8" />
                    <h3 className="text-2xl font-black italic tracking-tight">Syllogism Visualizer</h3>
                </div>
                <p className="text-emerald-100 font-bold opacity-80">Understanding set relationships in logic.</p>
            </div>

            <div className="p-8 lg:p-10">
                <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
                    {(['all', 'some', 'no'] as const).map(m => (
                        <button
                            key={m}
                            onClick={() => setMode(m)}
                            className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${mode === m ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-100 text-slate-400'}`}
                        >
                            {m} A are B
                        </button>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center py-6">
                    <div className="relative w-64 h-64 flex items-center justify-center bg-slate-50 rounded-[3rem] border border-slate-100">
                        {mode === 'all' && (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-40 h-40 border-4 border-emerald-500 bg-emerald-500/10 rounded-full flex items-end justify-center pb-4 font-black text-emerald-700">Set B</div>
                                <div className="absolute w-20 h-20 border-4 border-emerald-600 bg-emerald-500 rounded-full flex items-center justify-center font-black text-white shadow-lg">Set A</div>
                            </div>
                        )}
                        {mode === 'some' && (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="absolute w-36 h-36 border-4 border-emerald-500 bg-emerald-500/10 rounded-full flex items-center justify-start pl-4 font-black text-emerald-700" style={{ transform: 'translateX(-25%)' }}>Set A</div>
                                <div className="absolute w-36 h-36 border-4 border-emerald-500 bg-emerald-500/10 rounded-full flex items-center justify-end pr-4 font-black text-emerald-700" style={{ transform: 'translateX(25%)' }}>Set B</div>
                                <div className="absolute w-12 h-20 bg-emerald-500/40 rounded-full" style={{ zIndex: 5 }}></div>
                            </div>
                        )}
                        {mode === 'no' && (
                            <div className="relative w-full h-full flex items-center justify-center gap-8">
                                <div className="w-24 h-24 border-4 border-rose-500 bg-rose-100 rounded-full flex items-center justify-center font-black text-rose-700">Set A</div>
                                <div className="w-24 h-24 border-4 border-slate-400 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-600">Set B</div>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4 max-w-sm">
                        <h4 className="font-black text-xl italic text-slate-900">Logic Breakdown</h4>
                        <NoteCard
                            title={mode.toUpperCase()}
                            content={
                                mode === 'all' ? "Every member of A is inside B. If A, then B. (Subset relation)" :
                                    mode === 'some' ? "There is an intersection. Some A are B and Some B are A." :
                                        "Mutually exclusive sets. No element is common between A and B."
                            }
                            type={mode === 'no' ? 'danger' : 'info'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NoteCard = ({ title, content, type = 'info' }: { title: string, content: string, type?: string }) => {
    const colors = {
        info: 'bg-emerald-50 border-emerald-100 text-emerald-900',
        danger: 'bg-rose-50 border-rose-100 text-rose-900'
    };
    return (
        <div className={`p-6 rounded-3xl border-2 ${colors[type as keyof typeof colors]} shadow-sm`}>
            <h5 className="font-black text-xs uppercase tracking-widest mb-2 opacity-50">{title}</h5>
            <p className="font-bold text-sm leading-relaxed italic">{content}</p>
        </div>
    );
};

const ReasoningVisuals = () => {
    return (
        <div className="space-y-16 py-8">
            <CodingLab />
            <FamilyRelationDiagram />
            <VennLogicVisual />
        </div>
    );
};

export default ReasoningVisuals;
