'use client';

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, ScatterChart, Scatter, ReferenceArea } from 'recharts';

type VisualType = 'linear' | 'parabola' | 'semicircle' | 'rational';

export default function DomainRangeVisual() {
    const [type, setType] = useState<VisualType>('parabola');

    const generateData = () => {
        const data = [];
        const range = 5;
        const step = 0.2;

        for (let x = -range; x <= range; x += step) {
            const cleanX = Math.round(x * 10) / 10;
            let y = 0;

            switch (type) {
                case 'linear': y = cleanX / 2 + 1; break;
                case 'parabola': y = cleanX * cleanX / 2 - 2; break;
                case 'semicircle':
                    if (Math.abs(cleanX) <= 3) y = Math.sqrt(9 - cleanX * cleanX);
                    else continue;
                    break;
                case 'rational':
                    if (Math.abs(cleanX - 1) < 0.2) continue;
                    y = 1 / (cleanX - 1);
                    break;
            }
            data.push({ x: cleanX, y });
        }
        return data;
    };

    const data = generateData();

    const getHighlights = () => {
        switch (type) {
            case 'linear': return { xDomain: [-5, 5], yRange: [-1.5, 3.5] };
            case 'parabola': return { xDomain: [-5, 5], yRange: [-2, 10.5] };
            case 'semicircle': return { xDomain: [-3, 3], yRange: [0, 3] };
            case 'rational': return { xDomain: [-5, 5], yRange: [-10, 10], excludeX: 1 };
        }
    };

    const highlights = getHighlights();

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex flex-wrap gap-2 mb-6">
                {(['linear', 'parabola', 'semicircle', 'rational'] as VisualType[]).map((t) => (
                    <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${type === t ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 h-[350px] relative border rounded-xl bg-slate-50 overflow-hidden">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 30, bottom: 40, left: 30 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis
                                type="number"
                                dataKey="x"
                                domain={[-5, 5]}
                                stroke="#94a3b8"
                                fontSize={10}
                                tickCount={11}
                                label={{ value: 'x (Domain)', position: 'insideBottom', offset: -25, fontSize: 12, fill: '#64748b', fontWeight: 'bold' }}
                            />
                            <YAxis
                                type="number"
                                dataKey="y"
                                domain={[-5, 5]}
                                stroke="#94a3b8"
                                fontSize={10}
                                tickCount={11}
                                label={{ value: 'f(x) (Range)', angle: -90, position: 'insideLeft', offset: 0, fontSize: 12, fill: '#64748b', fontWeight: 'bold' }}
                            />

                            {/* Horizontal Axes */}
                            <ReferenceLine y={0} stroke="#94a3b8" />
                            <ReferenceLine x={0} stroke="#94a3b8" />

                            {/* Domain Highlight (Shadow on X) */}
                            <ReferenceArea
                                x1={highlights.xDomain[0]}
                                x2={highlights.xDomain[1]}
                                y1={-0.2}
                                y2={0.2}
                                fill="#818cf8"
                                fillOpacity={0.4}
                            />

                            {/* Range Highlight (Shadow on Y) */}
                            <ReferenceArea
                                x1={-0.2}
                                x2={0.2}
                                y1={highlights.yRange[0]}
                                y2={highlights.yRange[1]}
                                fill="#fbbf24"
                                fillOpacity={0.4}
                            />

                            <Scatter data={data} fill="#4f46e5" line shape={() => null} />
                        </ScatterChart>
                    </ResponsiveContainer>

                    {/* Legend Overlay */}
                    <div className="absolute bottom-4 right-4 flex flex-col gap-2 scale-75 md:scale-100">
                        <div className="flex items-center gap-2 bg-white/80 p-2 rounded border border-indigo-100">
                            <div className="w-4 h-1 bg-indigo-400 opacity-60"></div>
                            <span className="text-[10px] font-bold text-indigo-800 uppercase">Domain (X)</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 p-2 rounded border border-amber-100">
                            <div className="w-1 h-4 bg-amber-400 opacity-60"></div>
                            <span className="text-[10px] font-bold text-amber-800 uppercase">Range (Y)</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h5 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-1">Visual Study</h5>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Think of <strong>Domain</strong> as the "footprint" of the curve on the horizontal floor (x-axis), and <strong>Range</strong> as its "shadow" on the vertical wall (y-axis).
                        </p>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-400">
                        <div className="mb-4 text-center">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Equation</span>
                            <div className="text-xl font-bold text-slate-800 italic bg-white py-2 rounded border border-slate-200 shadow-sm">
                                {type === 'linear' && 'f(x) = x/2 + 1'}
                                {type === 'parabola' && 'f(x) = x²/2 - 2'}
                                {type === 'semicircle' && 'f(x) = √(9 - x²)'}
                                {type === 'rational' && 'f(x) = 1/(x-1)'}
                            </div>
                        </div>
                        <div className="mb-3">
                            <span className="text-xs font-bold text-gray-500 block mb-1 uppercase">Domain</span>
                            <span className="text-lg font-mono font-bold text-indigo-700">
                                {type === 'semicircle' ? '[-3, 3]' : type === 'rational' ? 'R - {1}' : '(-∞, ∞)'}
                            </span>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-gray-500 block mb-1 uppercase">Range</span>
                            <span className="text-lg font-mono font-bold text-amber-600">
                                {type === 'parabola' ? '[-2, ∞)' : type === 'semicircle' ? '[0, 3]' : type === 'rational' ? 'R - {0}' : '(-∞, ∞)'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
