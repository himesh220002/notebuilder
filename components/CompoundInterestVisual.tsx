'use client';

import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const CompoundInterestVisual = () => {
    const [principal, setPrincipal] = useState(10000);
    const [rate, setRate] = useState(10);
    const [years, setYears] = useState(10);

    const data = useMemo(() => {
        const plotData = [];
        for (let t = 0; t <= years; t++) {
            const siAmount = principal * (1 + (rate * t) / 100);
            const ciAmount = principal * Math.pow(1 + rate / 100, t);
            plotData.push({
                year: `Year ${t}`,
                SI: Math.round(siAmount),
                CI: Math.round(ciAmount),
                gap: Math.round(ciAmount - siAmount)
            });
        }
        return plotData;
    }, [principal, rate, years]);

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-slate-900 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-xl font-bold">Compound Interest Growth</h3>
                </div>
                <p className="text-slate-400 text-sm">Visualize how money grows exponentially compared to simple interest.</p>
            </div>

            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Present Value (P)</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">₹</span>
                            <input
                                type="number"
                                value={principal}
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                                className="w-full pl-8 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Annual Rate (%)</label>
                        <input
                            type="range"
                            min="1" max="30"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="w-full accent-indigo-600 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer mt-4"
                        />
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
                            <span>1%</span>
                            <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{rate}%</span>
                            <span>30%</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time (Years)</label>
                        <select
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {[5, 10, 15, 20, 25, 30].map(v => <option key={v} value={v}>{v} Years</option>)}
                        </select>
                    </div>
                </div>

                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorCI" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorSI" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="year"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                minTickGap={30}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                                tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                formatter={(value: any) => [`₹${Number(value).toLocaleString()}`, '']}
                            />
                            <Legend verticalAlign="top" height={36} />
                            <Area
                                name="Compound (CI)"
                                type="monotone"
                                dataKey="CI"
                                stroke="#10b981"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorCI)"
                            />
                            <Area
                                name="Simple (SI)"
                                type="monotone"
                                dataKey="SI"
                                stroke="#6366f1"
                                strokeDasharray="5 5"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorSI)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">Total Amount (A)</span>
                            <span className="text-2xl font-black text-emerald-900">₹{data[data.length - 1].CI.toLocaleString()}</span>
                        </div>
                        <TrendingUp className="w-8 h-8 text-emerald-200" />
                    </div>
                    <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 flex items-center justify-between">
                        <div>
                            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">Interest Gap</span>
                            <span className="text-2xl font-black text-indigo-900">₹{data[data.length - 1].gap.toLocaleString()}</span>
                        </div>
                        <Calculator className="w-8 h-8 text-indigo-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompoundInterestVisual;
