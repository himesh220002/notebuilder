'use client';

import React, { useState } from 'react';
import { Target, Move, Ruler, Calculator, Circle as CircleIcon, Info } from 'lucide-react';
import MathText from "@/components/MathText";

const CirclesVisual = () => {
    const [h, setH] = useState(0);
    const [k, setK] = useState(0);
    const [r, setR] = useState(5);

    // Scaling for visualization
    const scale = 20;
    const centerX = 200 + h * scale;
    const centerY = 200 - k * scale;
    const radiusPx = r * scale;

    // General Form parameters
    // x^2 + y^2 + 2gx + 2fy + c = 0
    // center = (-g, -f) = (h, k) => g = -h, f = -k
    // r = sqrt(g^2 + f^2 - c) => r^2 = g^2 + f^2 - c => c = g^2 + f^2 - r^2
    const g = -h;
    const f = -k;
    const c = g * g + f * f - r * r;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <CircleIcon className="w-6 h-6 text-sky-400" />
                        <h3 className="text-xl font-bold">Circle Explorer</h3>
                    </div>
                    <p className="text-slate-400 text-xs">Visualize standard and general forms of a circle.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] overflow-hidden cursor-crosshair group">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        {/* XY Axis */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 shadow-sm" />
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -translate-y-1/2 shadow-sm" />

                        {/* Circle SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r={radiusPx}
                                fill="rgba(99, 102, 241, 0.1)"
                                stroke="#6366f1"
                                strokeWidth="3"
                                className="transition-all duration-300"
                            />
                            {/* Radius Line */}
                            <line
                                x1={centerX}
                                y1={centerY}
                                x2={centerX + radiusPx}
                                y2={centerY}
                                stroke="#f59e0b"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                                className="transition-all duration-300"
                            />
                            {/* Center Point */}
                            <circle
                                cx={centerX}
                                cy={centerY}
                                r="4"
                                fill="#1e293b"
                                className="transition-all duration-300"
                            />
                        </svg>

                        {/* Labels */}
                        <div
                            className="absolute bg-slate-900 text-white text-[10px] px-2 py-1 rounded-lg -translate-x-1/2 -translate-y-full transition-all duration-300"
                            style={{ left: centerX, top: centerY - 8 }}
                        >
                            C({h}, {k})
                        </div>
                        <div
                            className="absolute text-amber-600 text-[10px] font-black transition-all duration-300"
                            style={{ left: centerX + radiusPx / 2, top: centerY - 15 }}
                        >
                            r = {r}
                        </div>

                        <div className="absolute bottom-6 left-6 flex gap-2">
                            <div className="p-2 bg-white/80 backdrop-blur-sm shadow rounded-lg text-[10px] font-black text-slate-500">
                                Scale: 1 unit = {scale}px
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block">Center h: {h}</label>
                                    <input
                                        type="range" min="-5" max="5" step="0.5"
                                        value={h} onChange={(e) => setH(Number(e.target.value))}
                                        className="w-full accent-indigo-600 cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block">Center k: {k}</label>
                                    <input
                                        type="range" min="-5" max="5" step="0.5"
                                        value={k} onChange={(e) => setK(Number(e.target.value))}
                                        className="w-full accent-indigo-600 cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block">Radius r: {r}</label>
                                    <input
                                        type="range" min="1" max="8" step="0.5"
                                        value={r} onChange={(e) => setR(Number(e.target.value))}
                                        className="w-full accent-amber-500 cursor-pointer"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 group hover:border-indigo-300 transition-colors">
                                    <span className="block text-[10px] font-bold text-indigo-500 mb-2 uppercase tracking-widest">Standard Form</span>
                                    <div className="text-sm font-black text-slate-900">
                                        <MathText text={`$(x - ${h})^2 + (y - ${k})^2 = ${r}^2$`} />
                                    </div>
                                </div>

                                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 group hover:border-sky-300 transition-colors">
                                    <span className="block text-[10px] font-bold text-sky-500 mb-2 uppercase tracking-widest">General Form ($2gx, 2fy$)</span>
                                    <div className="text-sm font-black text-slate-900">
                                        <MathText text={`$x^2 + y^2 ${g >= 0 ? '+' : ''}${2 * g}x ${f >= 0 ? '+' : ''}${2 * f}y ${c >= 0 ? '+' : ''}${c.toFixed(1)} = 0$`} />
                                    </div>
                                    <div className="mt-3 grid grid-cols-2 gap-2">
                                        <div className="text-[10px] font-bold text-slate-400 italic">g = {g}, f = {f}</div>
                                        <div className="text-[10px] font-bold text-slate-400 italic text-right">c = {c.toFixed(1)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-4">
                            <Info className="w-6 h-6 text-indigo-500 shrink-0" />
                            <div className="text-xs text-indigo-800 leading-relaxed font-medium">
                                <span className="font-black uppercase text-[10px] block mb-1">Existence Condition</span>
                                <MathText text={`For a real circle, $g^2 + f^2 - c > 0$. Current: $${g}^2 + ${f}^2 - (${c.toFixed(1)}) = ${r * r}$ (Valid)`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CirclesVisual;
