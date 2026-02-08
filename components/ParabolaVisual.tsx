'use client';

import React, { useState } from 'react';
import { Target, Move, Ruler, Calculator, Hash, Info, Maximize2 } from 'lucide-react';
import MathText from "@/components/MathText";

const ParabolaVisual = () => {
    // Standard types: y^2=4ax, y^2=-4ax, x^2=4ay, x^2=-4ay
    type ParabolaType = 'y2=4ax' | 'y2=-4ax' | 'x2=4ay' | 'x2=-4ay';
    const [type, setType] = useState<ParabolaType>('y2=4ax');
    const [a, setA] = useState(2);

    const scale = 30;

    // Generate points for the parabola curve
    const generatePoints = () => {
        const points = [];
        const limit = 8; // Coordinate limit
        const step = 0.2;

        for (let i = -limit; i <= limit; i += step) {
            let x = 0, y = 0;
            if (type === 'y2=4ax') {
                // y^2 = 4ax => x = y^2 / 4a
                y = i;
                x = (y * y) / (4 * a);
                if (x > limit) continue;
            } else if (type === 'y2=-4ax') {
                // y^2 = -4ax => x = -y^2 / 4a
                y = i;
                x = -(y * y) / (4 * a);
                if (x < -limit) continue;
            } else if (type === 'x2=4ay') {
                // x^2 = 4ay => y = x^2 / 4a
                x = i;
                y = (x * x) / (4 * a);
                if (y > limit) continue;
            } else if (type === 'x2=-4ay') {
                // x^2 = -4ay => y = -x^2 / 4a
                x = i;
                y = -(x * x) / (4 * a);
                if (y < -limit) continue;
            }
            points.push(`${200 + x * scale},${200 - y * scale}`);
        }
        return points.join(' ');
    };

    const getProperties = () => {
        switch (type) {
            case 'y2=4ax': return { focus: `(${a}, 0)`, directrix: `x = -${a}`, equation: `$y^2 = 4(${a})x$`, axis: 'X-axis' };
            case 'y2=-4ax': return { focus: `(-${a}, 0)`, directrix: `x = ${a}`, equation: `$y^2 = -4(${a})x$`, axis: 'X-axis' };
            case 'x2=4ay': return { focus: `(0, ${a})`, directrix: `y = -${a}`, equation: `$x^2 = 4(${a})y$`, axis: 'Y-axis' };
            case 'x2=-4ay': return { focus: `(0, -${a})`, directrix: `y = ${a}`, equation: `$x^2 = -4(${a})y$`, axis: 'Y-axis' };
        }
    };

    const props = getProperties();

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-indigo-900 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Maximize2 className="w-6 h-6 text-indigo-400" />
                        <h3 className="text-xl font-bold">Parabola Lab</h3>
                    </div>
                    <p className="text-indigo-300 text-sm">Explore standard forms and their geometric properties.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative aspect-square bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] overflow-hidden">
                        {/* Grid */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                        {/* Axes */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300" />
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-300" />

                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {/* Directrix */}
                            {type === 'y2=4ax' && <line x1={200 - a * scale} y1="0" x2={200 - a * scale} y2="400" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 5" />}
                            {type === 'y2=-4ax' && <line x1={200 + a * scale} y1="0" x2={200 + a * scale} y2="400" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 5" />}
                            {type === 'x2=4ay' && <line x1="0" y1={200 + a * scale} x2="400" y2={200 + a * scale} stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 5" />}
                            {type === 'x2=-4ay' && <line x1="0" y1={200 - a * scale} x2="400" y2={200 - a * scale} stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 5" />}

                            {/* Parabola Curve */}
                            <polyline
                                points={generatePoints()}
                                fill="none"
                                stroke="#4f46e5"
                                strokeWidth="3"
                                className="transition-all duration-500"
                            />

                            {/* Focus Point */}
                            {type === 'y2=4ax' && <circle cx={200 + a * scale} cy="200" r="4" fill="#1e293b" />}
                            {type === 'y2=-4ax' && <circle cx={200 - a * scale} cy="200" r="4" fill="#1e293b" />}
                            {type === 'x2=4ay' && <circle cx="200" cy={200 - a * scale} r="4" fill="#1e293b" />}
                            {type === 'x2=-4ay' && <circle cx="200" cy={200 + a * scale} r="4" fill="#1e293b" />}

                            {/* Latus Rectum Length Indicator */}
                            {type.startsWith('y2') && (
                                <line
                                    x1={200 + (type === 'y2=4ax' ? a : -a) * scale}
                                    y1={200 - 2 * a * scale}
                                    x2={200 + (type === 'y2=4ax' ? a : -a) * scale}
                                    y2={200 + 2 * a * scale}
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeDasharray="2 2"
                                />
                            )}
                            {type.startsWith('x2') && (
                                <line
                                    x1={200 - 2 * a * scale}
                                    y1={200 - (type === 'x2=4ay' ? a : -a) * scale}
                                    x2={200 + 2 * a * scale}
                                    y2={200 - (type === 'x2=4ay' ? a : -a) * scale}
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    strokeDasharray="2 2"
                                />
                            )}
                        </svg>

                        {/* Property Labels */}
                        <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur shadow-sm rounded-xl border border-slate-100 flex flex-col gap-1">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus</span>
                            <span className="text-xs font-bold text-slate-900">{props.focus}</span>
                        </div>
                        <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur shadow-sm rounded-xl border border-slate-100 flex flex-col gap-1 text-right">
                            <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Directrix</span>
                            <span className="text-xs font-bold text-rose-600">{props.directrix}</span>
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col justify-center">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {(['y2=4ax', 'y2=-4ax', 'x2=4ay', 'x2=-4ay'] as ParabolaType[]).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setType(t)}
                                        className={`px-4 py-3 rounded-xl text-xs font-black transition-all ${type === t
                                                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                                : 'bg-white text-slate-500 hover:bg-indigo-50 border border-slate-200'
                                            }`}
                                    >
                                        {t.replace('2', '²')}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-8">
                                <label className="text-[10px] font-black text-slate-400 uppercase mb-4 block underline decoration-indigo-200 underline-offset-4">Parameter (a): {a}</label>
                                <input
                                    type="range" min="0.5" max="4" step="0.5"
                                    value={a} onChange={(e) => setA(Number(e.target.value))}
                                    className="w-full accent-indigo-600 cursor-pointer"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    <span className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Axis</span>
                                    <span className="text-lg font-black text-slate-900 tracking-tight">{props.axis}</span>
                                </div>
                                <div className="p-4 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100">
                                    <span className="block text-[10px] font-black text-emerald-500 mb-2 uppercase tracking-widest">LR Length</span>
                                    <span className="text-lg font-black text-emerald-700 tracking-tight">4a = {4 * a}</span>
                                </div>
                            </div>

                            <div className="mt-6 p-6 bg-slate-900 rounded-2xl text-center">
                                <span className="block text-[10px] font-black text-indigo-400 mb-3 uppercase tracking-widest tracking-[0.2em]">Active Equation</span>
                                <div className="text-xl font-black text-white">
                                    <MathText text={props.equation} />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-4">
                            <Info className="w-6 h-6 text-indigo-500 shrink-0" />
                            <div className="text-xs text-indigo-800 leading-relaxed font-medium">
                                <span className="font-black uppercase text-[10px] block mb-1">Standard Definition</span>
                                Distance from <span className="font-bold underline">Point to Focus</span> = Distance from <span className="font-bold underline">Point to Directrix</span>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParabolaVisual;
