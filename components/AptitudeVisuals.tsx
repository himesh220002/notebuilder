'use client';

import React, { useState } from 'react';
import { Truck, Users, Activity, ChevronsRight, Info, Zap, Play, RotateCcw } from 'lucide-react';

const AptitudeVisuals = () => {
    const [speed1, setSpeed1] = useState(60);
    const [speed2, setSpeed2] = useState(40);
    const [direction, setDirection] = useState<'opposite' | 'same'>('opposite');

    const relativeSpeed = direction === 'opposite' ? speed1 + speed2 : Math.abs(speed1 - speed2);

    return (
        <div className="space-y-12 my-12">
            {/* 1. Relative Speed Visualizer */}
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="bg-orange-500 p-6 text-white">
                    <div className="flex items-center gap-3 mb-1">
                        <Truck className="w-6 h-6" />
                        <h3 className="text-xl font-bold italic">Relative Speed Terminal</h3>
                    </div>
                    <p className="text-orange-100 text-xs">Analyze closing or opening speeds between two objects.</p>
                </div>

                <div className="p-6 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Simulation Area */}
                        <div className="space-y-12">
                            <div className="relative h-40 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center">
                                {/* Track */}
                                <div className="absolute w-full h-1 bg-slate-300 top-1/2 -translate-y-1/2" />

                                {/* Car 1 */}
                                <div
                                    className="absolute left-10"
                                    style={{ top: '35%' }}
                                >
                                    <div className="bg-orange-500 text-white p-3 rounded-xl shadow-lg relative flex items-center gap-2">
                                        <Truck className="w-5 h-5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{speed1} km/h</span>
                                        <ChevronsRight className="w-4 h-4 text-orange-200" />
                                    </div>
                                </div>

                                {/* Car 2 */}
                                <div
                                    className="absolute right-10"
                                    style={{ top: '35%' }}
                                >
                                    <div className={`bg-slate-800 text-white p-3 rounded-xl shadow-lg relative flex items-center gap-2 ${direction === 'opposite' ? 'flex-row-reverse' : ''}`}>
                                        <Truck className={`w-5 h-5 ${direction === 'opposite' ? 'scale-x-[-1]' : ''}`} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{speed2} km/h</span>
                                        <ChevronsRight className={`w-4 h-4 text-slate-400 ${direction === 'opposite' ? 'scale-x-[-1]' : ''}`} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Controls & Math */}
                        <div className="space-y-8">
                            <div className="flex bg-slate-100 p-1 rounded-xl">
                                <button
                                    onClick={() => setDirection('opposite')}
                                    className={`flex-1 py-3 rounded-lg text-[10px] font-black transition-all ${direction === 'opposite' ? 'bg-white text-orange-600 shadow-md' : 'text-slate-400'}`}
                                >
                                    OPPOSITE (Towards each other)
                                </button>
                                <button
                                    onClick={() => setDirection('same')}
                                    className={`flex-1 py-3 rounded-lg text-[10px] font-black transition-all ${direction === 'same' ? 'bg-white text-orange-600 shadow-md' : 'text-slate-400'}`}
                                >
                                    SAME (Overtaking)
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Vehicle 1 Speed: {speed1} km/h</label>
                                    <input type="range" min="10" max="150" value={speed1} onChange={(e) => setSpeed1(Number(e.target.value))} className="w-full accent-orange-500" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Vehicle 2 Speed: {speed2} km/h</label>
                                    <input type="range" min="10" max="150" value={speed2} onChange={(e) => setSpeed2(Number(e.target.value))} className="w-full accent-orange-500" />
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-3xl p-8 text-white relative">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Activity className="w-16 h-16" />
                                </div>
                                <h4 className="text-xs font-black text-orange-400 uppercase mb-4 tracking-[0.2em]">Resulting Relative Speed</h4>
                                <div className="text-5xl font-black mb-4 tracking-tighter">{relativeSpeed} <span className="text-base text-slate-400">km/h</span></div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase flex items-center gap-2">
                                    Logic: {direction === 'opposite' ? '$S_1 + S_2$' : '$|S_1 - S_2|$'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Time & Work Logic Visual */}
            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/30">
                            <Zap className="w-3 h-3" />
                            Work Logic 101
                        </div>
                        <h3 className="text-4xl font-black italic tracking-tight">The Inverse Rule</h3>
                        <p className="text-slate-400 font-medium leading-relaxed italic">
                            If a person completes a job in <span className="text-white">5 days</span>, they don't do 1/5 of the total job every day in your head—they do it literally.
                            Work and Time are <span className="text-emerald-400 underline decoration-2">Inversely Proportional</span>.
                        </p>
                        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                            <span className="text-[10px] font-black text-slate-500 uppercase block mb-2">Fundamental Identity</span>
                            <div className="text-2xl font-black tracking-tight tracking-widest">Efficiency = 1 / Time</div>
                        </div>
                    </div>

                    <div className="flex-1 grid grid-cols-5 gap-3 w-full max-w-sm">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-24 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full bg-emerald-500 transition-all duration-1000" style={{ height: '100%' }} />
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-900 rotate-90">1/5</div>
                                </div>
                                <div className="text-[8px] font-black text-center text-slate-500 uppercase">Day {i + 1}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AptitudeVisuals;
