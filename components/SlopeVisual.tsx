'use client';

import React, { useState } from 'react';
import { Compass, RotateCcw, Info, Hash } from 'lucide-react';
import MathText from "@/components/MathText";

const SlopeVisual = () => {
    const [angle, setAngle] = useState(45);

    const getSlope = (deg: number) => {
        if (deg === 90) return '∞';
        return Math.tan((deg * Math.PI) / 180).toFixed(3);
    };

    return (
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden my-8 sm:my-12">
            <div className="bg-indigo-900 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Compass className="w-6 h-6 text-amber-400" />
                    <h3 className="text-xl font-bold">Slope & Inclination</h3>
                </div>
                <p className="text-indigo-300 text-sm">Observe how the angle of inclination $\theta$ affects the slope $m = \tan \theta$.</p>
            </div>

            <div className="p-6 sm:p-10">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative aspect-square bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                        {/* Quadrant Lines */}
                        <div className="absolute w-full h-px bg-slate-300 shadow-sm" />
                        <div className="absolute h-full w-px bg-slate-300 shadow-sm" />

                        {/* Circular Reference */}
                        <div className="absolute w-4/5 h-4/5 border-2 border-dashed border-indigo-100 rounded-full" />

                        {/* Line */}
                        <div
                            className="absolute w-4/5 h-2 bg-gradient-to-r from-transparent to-indigo-600 rounded-full origin-left -translate-y-1/2 left-1/2 transition-transform duration-500"
                            style={{ transform: `rotate(${-angle}deg)` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white ring-4 ring-indigo-400 rounded-full shadow-lg" />
                        </div>

                        {/* Angle Arc */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <path
                                d={`M ${150 + 40} 150 A 40 40 0 0 0 ${150 + 40 * Math.cos(-angle * Math.PI / 180)} ${150 + 40 * Math.sin(-angle * Math.PI / 180)}`}
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="4"
                                className="transition-all duration-500"
                            />
                        </svg>

                        <div className="absolute bottom-6 left-6 flex gap-2 z-10 pointer-events-none">
                            <span className={`p-2 shadow rounded-lg text-[10px] font-black transition-colors ${angle > 90 ? 'bg-indigo-600 text-white' : 'bg-white/80 text-slate-500'}`}>Q2 ($90-180^\circ$)</span>
                            <span className={`p-2 shadow rounded-lg text-[10px] font-black transition-colors ${angle <= 90 ? 'bg-indigo-600 text-white' : 'bg-white/80 text-slate-500'}`}>Q1 ($0-90^\circ$)</span>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200">
                            <label className="text-xs font-black text-slate-400 uppercase mb-4 block underline decoration-indigo-200 underline-offset-4">Angle of Inclination: {angle}°</label>
                            <input
                                type="range"
                                min="0" max="180" step="1"
                                value={angle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="w-full accent-indigo-600 mb-6 cursor-pointer"
                            />

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                    <span className="block text-[10px] font-bold text-amber-500 mb-1">Calculation</span>
                                    <div className="text-lg font-black text-slate-900">
                                        <MathText text={`$\\tan(${angle}^\\circ)$`} />
                                    </div>
                                </div>
                                <div className="p-4 bg-indigo-600 rounded-xl shadow-lg border border-indigo-500">
                                    <span className="block text-[10px] font-bold text-indigo-200 mb-1">Result (m)</span>
                                    <div className="text-lg font-black text-white">{getSlope(angle)}</div>
                                </div>
                            </div>

                            {/* Reduction Formulas UI */}
                            <div className="space-y-3">
                                <div className="bg-white/50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Q2 Reduction</span>
                                    <MathText text={`$\\tan(180^\\circ-${180 - angle}^\\circ) = -\\tan(${180 - angle}^\\circ)$`} />
                                </div>
                                <div className="bg-white/50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-slate-400 uppercase">Cot Relation</span>
                                    <MathText text={`$\\tan(90^\\circ+${angle > 90 ? angle - 90 : 0}^\\circ) = -\\cot(${angle > 90 ? angle - 90 : 0}^\\circ)$`} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                            <Info className="w-6 h-6 text-amber-500 shrink-0" />
                            <div className="text-xs text-amber-800 leading-relaxed font-medium">
                                <MathText text={`For $\\theta$ between $90^\\circ$ and $180^\\circ$, the slope is **negative** because $\\tan \\theta < 0$ in the second quadrant.`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlopeVisual;
