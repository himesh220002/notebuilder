'use client';

import React, { useState } from 'react';
import { Users, Users2, ArrowLeft, ArrowRight, Table, Rows, Info } from 'lucide-react';

const SeatingVisual = () => {
    const [type, setType] = useState<'linear' | 'circular'>('linear');
    const [facing, setFacing] = useState<'center' | 'outward'>('center');
    const [selected, setSelected] = useState<number | null>(2);

    const people = ['A', 'B', 'C', 'D', 'E', 'F'];

    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-emerald-600 p-6 text-white flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-3">
                        {type === 'linear' ? <Rows className="w-6 h-6" /> : <Table className="w-6 h-6" />}
                        Seating Arrangement Visualizer
                    </h3>
                    <p className="text-emerald-100 text-xs">Explore Left/Right logic in different layouts.</p>
                </div>
                <div className="flex bg-emerald-700/50 p-1 rounded-xl">
                    <button
                        onClick={() => setType('linear')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${type === 'linear' ? 'bg-white text-emerald-700 shadow-md' : 'text-white/70'}`}
                    >
                        Linear
                    </button>
                    <button
                        onClick={() => setType('circular')}
                        className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${type === 'circular' ? 'bg-white text-emerald-700 shadow-md' : 'text-white/70'}`}
                    >
                        Circular
                    </button>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 min-h-[400px]">
                    {/* Visual Layout */}
                    <div className="bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex items-center justify-center p-4 lg:p-8 relative overflow-hidden">
                        {type === 'linear' ? (
                            <div className="flex gap-3 overflow-x-auto pb-4 max-w-full px-4 no-scrollbar">
                                {people.map((p, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelected(i)}
                                        className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center text-lg lg:text-xl font-black cursor-pointer transition-all shrink-0 ${selected === i ? 'bg-emerald-500 text-white scale-110 shadow-lg ring-4 ring-emerald-100' : 'bg-white text-slate-400 border border-slate-200 hover:border-emerald-300'}`}
                                    >
                                        {p}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative w-72 h-72">
                                <div className="absolute inset-0 rounded-full border-4 border-slate-300 bg-slate-100 flex items-center justify-center">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Table</div>
                                </div>
                                {people.map((p, i) => {
                                    const angle = (i * 360) / people.length;
                                    const rad = (angle * Math.PI) / 180;
                                    const x = Math.cos(rad) * 110;
                                    const y = Math.sin(rad) * 110;
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => setSelected(i)}
                                            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                                            className={`absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-lg font-black cursor-pointer transition-all ${selected === i ? 'bg-emerald-500 text-white scale-110 shadow-lg ring-4 ring-emerald-100' : 'bg-white text-slate-400 border border-slate-200 hover:border-emerald-300'}`}
                                        >
                                            {p}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Legend Overlay for Selected */}
                        {selected !== null && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                                <span className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                                    <ArrowLeft className="w-4 h-4 text-emerald-500" /> LEFT
                                </span>
                                <span className="flex items-center gap-2 text-[10px] font-black text-slate-400">
                                    RIGHT <ArrowRight className="w-4 h-4 text-emerald-500" />
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Rules & Logic */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest italic border-b border-slate-100 pb-2">Arrangement Parameters</h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <label className="text-[10px] font-black text-slate-400 uppercase block mb-3">Facing Direction (Circular)</label>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setFacing('center')}
                                            className={`flex-1 py-2 rounded-xl text-[10px] font-black transition-all ${facing === 'center' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-slate-400'}`}
                                        >
                                            Facing Center
                                        </button>
                                        <button
                                            onClick={() => setFacing('outward')}
                                            className={`flex-1 py-2 rounded-xl text-[10px] font-black transition-all ${facing === 'outward' ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-slate-400'}`}
                                        >
                                            Facing Outward
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                                    <h5 className="flex items-center gap-2 text-emerald-700 font-bold mb-4">
                                        <Info className="w-4 h-4" />
                                        Direction Logic
                                    </h5>
                                    <p className="text-[11px] text-emerald-800 leading-relaxed font-semibold italic">
                                        {type === 'linear' ? (
                                            "In linear row, unless specified, assume they face North. Your Left is their Left, Your Right is their Right."
                                        ) : facing === 'center' ? (
                                            "Facing Center: Clockwise means RIGHT, Anti-Clockwise means LEFT."
                                        ) : (
                                            "Facing Outward: Clockwise means LEFT, Anti-Clockwise means RIGHT."
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {selected !== null && (
                            <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl rotate-1">
                                <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4 italic">Analysis: Position of {people[selected]}</h4>
                                <div className="space-y-2 text-xs font-bold text-slate-400">
                                    <div>Left neighboring: <span className="text-white">{selected === 0 ? (type === 'circular' ? people[people.length - 1] : 'NONE') : people[selected - 1]}</span></div>
                                    <div>Right neighboring: <span className="text-white">{selected === people.length - 1 ? (type === 'circular' ? people[0] : 'NONE') : people[selected + 1]}</span></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatingVisual;
