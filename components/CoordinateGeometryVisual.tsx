'use client';

import React, { useState } from 'react';
import { Target, Move, Ruler, Calculator } from 'lucide-react';
import MathText from "@/components/MathText";

const CoordinateGeometryVisual = () => {
    const [points, setPoints] = useState([
        { x: 100, y: 100, label: 'A (x1, y1)' },
        { x: 300, y: 200, label: 'B (x2, y2)' }
    ]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Target className="w-6 h-6 text-sky-400" />
                        <h3 className="text-xl font-bold">Coordinate Mapping</h3>
                    </div>
                    <p className="text-slate-400 text-xs">Visualize distance and section formulas on a cartesian plane.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="relative aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl overflow-hidden cursor-crosshair group">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                    {/* XY Axis */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2" />
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 -translate-y-1/2" />

                    {/* Connecting Line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line
                            x1={points[0].x} y1={points[0].y}
                            x2={points[1].x} y2={points[1].y}
                            stroke="#6366f1"
                            strokeWidth="3"
                            strokeDasharray="8 4"
                        />
                    </svg>

                    {/* Points */}
                    {points.map((p, i) => (
                        <div
                            key={i}
                            className="absolute -translate-x-1/2 -translate-y-1/2 p-2 group"
                            style={{ left: p.x, top: p.y }}
                        >
                            <div className="w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-100 shadow-lg group-hover:scale-125 transition-transform" />
                            <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] px-2 py-1 rounded-lg">
                                {p.label}
                            </div>
                        </div>
                    ))}

                    {/* Midpoint Info */}
                    <div
                        className="absolute bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-indigo-100 shadow-xl text-[10px] font-bold text-indigo-900"
                        style={{ left: (points[0].x + points[1].x) / 2, top: (points[0].y + points[1].y) / 2 }}
                    >
                        <MathText text={`$d \\approx ${Math.sqrt(Math.pow(points[1].x - points[0].x, 2) + Math.pow(points[1].y - points[0].y, 2)).toFixed(1)}$`} />
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center gap-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shrink-0">
                            <Ruler className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="block text-[10px] font-black text-indigo-400 uppercase tracking-widest">Logic</span>
                            <p className="text-xs text-indigo-900 font-bold">Points are processed as $(x, y)$ coordinates for all calculations.</p>
                        </div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shrink-0">
                            <Calculator className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="block text-[10px] font-black text-emerald-400 uppercase tracking-widest">Section Formula</span>
                            <p className="text-xs text-emerald-900 font-bold">Ratios $(m:n)$ determine position between endpoints.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoordinateGeometryVisual;
