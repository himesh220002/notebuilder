'use client';

import React, { useState } from 'react';
import { Activity, ScatterChart, Layers, Info } from 'lucide-react';
import MathText from './MathText';

const AdvancedStatsVisual = () => {
    const [activeTab, setActiveTab] = useState<'distribution' | 'correlation'>('distribution');
    const [skew, setSkew] = useState(0); // -1 to 1
    const [kurtosis, setKurtosis] = useState(1); // 0.5 (Platy) to 2 (Lepto)
    const [correlation, setCorrelation] = useState(0.8);

    // Distribution Path Generator (Bell Curve)
    const getBellCurvePath = (skewVal: number, kurtVal: number) => {
        const points = [];
        const width = 400;
        const height = 200;
        const centerX = width / 2 + (skewVal * 80); // Move center for skew

        for (let x = 0; x <= width; x++) {
            const relX = (x - centerX) / (60 / kurtVal);
            const y = height - (Math.exp(-0.5 * Math.pow(relX, 2)) * 150 * kurtVal);
            points.push(`${x},${y}`);
        }
        return `M ${points.join(' L ')}`;
    };

    // Correlation Dots Generator
    const getScatterPoints = (r: number) => {
        const points = [];
        const count = 40;
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 300 + 50;
            // Linear relation + noise
            const noise = (Math.random() - 0.5) * 100 * (1 - Math.abs(r));
            const y = r > 0
                ? (300 - (x * Math.abs(r) + noise + (300 * (1 - Math.abs(r)) / 2)))
                : (x * Math.abs(r) + noise + (300 * (1 - Math.abs(r)) / 2));

            points.push({ x, y: Math.min(Math.max(y, 50), 350) });
        }
        return points;
    };

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 my-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">Advanced Stats Lab</h3>
                        <p className="text-gray-500 text-sm">Visualize Distribution Shapes & Relational Patterns</p>
                    </div>
                </div>

                <div className="flex bg-slate-100 p-1 rounded-xl">
                    <button
                        onClick={() => setActiveTab('distribution')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'distribution' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Distribution
                    </button>
                    <button
                        onClick={() => setActiveTab('correlation')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'correlation' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Correlation
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Controls Area */}
                <div className="space-y-8">
                    {activeTab === 'distribution' ? (
                        <>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700">
                                    Skewness: <span className="text-indigo-600 font-mono">{skew > 0 ? 'Positive' : skew < 0 ? 'Negative' : 'Zero'}</span>
                                </label>
                                <input
                                    type="range" min="-1" max="1" step="0.1" value={skew}
                                    onChange={(e) => setSkew(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                    <span>Left Skew</span>
                                    <span>Symmetric</span>
                                    <span>Right Skew</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700">
                                    Kurtosis Peakedness: <span className="text-rose-500 font-mono">{kurtosis > 1.3 ? 'Lepto' : kurtosis < 0.7 ? 'Platy' : 'Meso'}</span>
                                </label>
                                <input
                                    type="range" min="0.4" max="2" step="0.1" value={kurtosis}
                                    onChange={(e) => setKurtosis(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                    <span>Flat (Platy)</span>
                                    <span>Normal (Meso)</span>
                                    <span>Peaked (Lepto)</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700">
                                    Correlation Coefficient (r): <span className="text-emerald-600 font-mono">{correlation.toFixed(2)}</span>
                                </label>
                                <input
                                    type="range" min="-1" max="1" step="0.05" value={correlation}
                                    onChange={(e) => setCorrelation(parseFloat(e.target.value))}
                                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                                <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                                    <span>Negative</span>
                                    <span>No Correlation</span>
                                    <span>Positive</span>
                                </div>
                            </div>
                            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 italic text-sm text-emerald-800">
                                "As $r$ approaches 1 or -1, the points cluster tighter around a straight line. When $r=0$, the points appear randomly scattered."
                            </div>
                        </div>
                    )}
                </div>

                {/* Visual Area */}
                <div className="bg-slate-50 rounded-3xl p-4 border border-slate-100 flex items-center justify-center min-h-[300px]">
                    {activeTab === 'distribution' ? (
                        <svg viewBox="0 0 400 250" className="w-full h-full drop-shadow-sm">
                            {/* X and Y Axis */}
                            <line x1="20" y1="230" x2="380" y2="230" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
                            <line x1="20" y1="230" x2="20" y2="20" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />

                            {/* Distribution Curve */}
                            <path
                                d={getBellCurvePath(skew, kurtosis)}
                                fill="none"
                                stroke={kurtosis > 1.3 ? '#f43f5e' : kurtosis < 0.7 ? '#10b981' : '#6366f1'}
                                strokeWidth="4"
                                strokeLinejoin="round"
                                className="transition-all duration-300"
                            />

                            {/* Center Line for Reference */}
                            <line x1="200" y1="230" x2="200" y2="30" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
                            <text x="200" y="245" textAnchor="middle" className="text-[10px] fill-slate-400 font-bold">MODE/MEAN REFERENCE</text>
                        </svg>
                    ) : (
                        <svg viewBox="0 0 400 400" className="w-full h-full">
                            <rect x="50" y="50" width="300" height="300" fill="white" stroke="#e2e8f0" strokeWidth="2" rx="16" />
                            {getScatterPoints(correlation).map((p, i) => (
                                <circle
                                    key={i}
                                    cx={p.x}
                                    cy={p.y}
                                    r="4"
                                    className="fill-indigo-500/60 transition-all duration-500"
                                />
                            ))}
                            {/* Trend Line */}
                            <line
                                x1="70"
                                y1={correlation > 0 ? 330 : 70}
                                x2="330"
                                y2={correlation > 0 ? 70 : 330}
                                stroke="#10b981"
                                strokeWidth="2"
                                strokeDasharray="8,4"
                                style={{ opacity: Math.abs(correlation) * 0.8 }}
                            />
                        </svg>
                    )}
                </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-50/50 rounded-xl flex items-start gap-3 border border-indigo-100">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <div className="text-sm text-slate-600 leading-relaxed">
                    {activeTab === 'distribution' ? (
                        <p>
                            <strong>Skewness</strong> describes the asymmetry of the curve. <strong>Kurtosis</strong> describes how "peaky" it is. A Normal distribution has $S_k = 0$ and $\beta_2 = 3$.
                        </p>
                    ) : (
                        <p>
                            <strong>Karl Pearson's Coefficient (r)</strong> ranges from -1 to 1. $r=1$ means perfect positive linear relationship, $r=-1$ means perfect negative, and $r=0$ means no linear relationship.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdvancedStatsVisual;
