'use client';

import React, { useState, useMemo } from 'react';
import { BarChart, Calculator, TrendingUp, Info } from 'lucide-react';
import MathText from './MathText';

const StatisticsVisual = () => {
    const [data, setData] = useState([10, 25, 15, 40, 30, 20, 35]);

    const stats = useMemo(() => {
        const sorted = [...data].sort((a, b) => a - b);
        const sum = data.reduce((a, b) => a + b, 0);
        const mean = sum / data.length;

        const mid = Math.floor(sorted.length / 2);
        const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

        const counts: Record<number, number> = {};
        let maxCount = 0;
        let modes: number[] = [];
        data.forEach(n => {
            counts[n] = (counts[n] || 0) + 1;
            if (counts[n] > maxCount) {
                maxCount = counts[n];
                modes = [n];
            } else if (counts[n] === maxCount) {
                modes.push(n);
            }
        });

        const variance = data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length;
        const stdDev = Math.sqrt(variance);

        return { mean, median, modes: maxCount > 1 ? modes : [], stdDev, max: Math.max(...data) };
    }, [data]);

    const updateValue = (index: number, newValue: string) => {
        const val = parseInt(newValue) || 0;
        const newData = [...data];
        newData[index] = Math.min(Math.max(val, 0), 100);
        setData(newData);
    };

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-50 my-12">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <BarChart className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Dynamic Statistics Lab</h3>
                    <p className="text-gray-500 text-sm">Adjust values to see how Mean, Median, and Dispersion change</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Interactive Controls */}
                <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <label className="block text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                            <Calculator className="w-4 h-4 text-indigo-500" />
                            Input Dataset (Max 100)
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {data.map((val, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-1">
                                    <input
                                        type="number"
                                        value={val}
                                        onChange={(e) => updateValue(idx, e.target.value)}
                                        className="w-16 h-12 text-center rounded-xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none font-bold text-slate-800 transition-all"
                                    />
                                    <span className="text-[10px] text-slate-400 font-bold">x{idx + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Arithmetic Mean</span>
                            <div className="text-2xl font-black text-indigo-900 mt-1">
                                {stats.mean.toFixed(2)}
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Median</span>
                            <div className="text-2xl font-black text-emerald-900 mt-1">
                                {stats.median}
                            </div>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Standard Deviation</span>
                            <div className="text-2xl font-black text-amber-900 mt-1">
                                {stats.stdDev.toFixed(2)}
                            </div>
                        </div>
                        <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100">
                            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Mode</span>
                            <div className="text-2xl font-black text-rose-900 mt-1 truncate">
                                {stats.modes.length > 0 ? stats.modes.join(', ') : 'N/A'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visualization */}
                <div className="relative h-64 md:h-full flex items-end justify-between gap-2 px-4 border-b-2 border-slate-200 pb-2 bg-slate-50/30 rounded-t-3xl overflow-hidden">
                    {data.map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center justify-end group h-full">
                            <div
                                className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg transition-all duration-300 relative group-hover:from-indigo-400 group-hover:to-indigo-300"
                                style={{ height: `${(val / Math.max(stats.max, 1)) * 90}%` }}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {val}
                                </div>
                            </div>
                            <div className="h-1 w-full bg-slate-200 mt-2"></div>
                        </div>
                    ))}

                    {/* Mean Line */}
                    <div
                        className="absolute left-0 right-0 border-t-2 border-rose-500 border-dashed z-10 pointer-events-none transition-all duration-300"
                        style={{ bottom: `${(stats.mean / Math.max(stats.max, 1)) * 90}%`, marginBottom: '10px' }}
                    >
                        <span className="absolute right-2 -top-6 text-[10px] font-bold text-rose-600 bg-white px-1 border border-rose-100 rounded">
                            Mean: {stats.mean.toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl flex items-start gap-3 border border-slate-100">
                <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                    Notice how outliers (extremely high or low values) significantly pull the <span className="text-rose-600 font-bold">Mean</span>, while the <span className="text-emerald-600 font-bold">Median</span> remains relatively stable. This is why Median is often preferred for skewed data like income or house prices.
                </p>
            </div>
        </div>
    );
};

export default StatisticsVisual;
