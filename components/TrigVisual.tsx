'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Activity, Star } from 'lucide-react';
import MathText from './MathText';

const TrigVisual = () => {
    const data = [];
    for (let x = 0; x <= 180; x += 5) {
        data.push({
            angle: x,
            sin: Math.sin((x * Math.PI) / 180).toFixed(3),
            cos: Math.cos((x * Math.PI) / 180).toFixed(3),
        });
    }

    const markers = [0, 30, 45, 60, 90, 120, 135, 150, 180];

    const getExact = (angle: number) => {
        const lookup: Record<number, { sin: string, cos: string }> = {
            0: { sin: "0", cos: "1" },
            30: { sin: "1/2", cos: "\\sqrt{3}/2" },
            45: { sin: "1/\\sqrt{2}", cos: "1/\\sqrt{2}" },
            60: { sin: "\\sqrt{3}/2", cos: "1/2" },
            90: { sin: "1", cos: "0" },
            120: { sin: "\\sqrt{3}/2", cos: "-1/2" },
            135: { sin: "1/\\sqrt{2}", cos: "-1/\\sqrt{2}" },
            150: { sin: "1/2", cos: "-\\sqrt{3}/2" },
            180: { sin: "0", cos: "-1" }
        };
        return lookup[angle] || { sin: "", cos: "" };
    };

    return (
        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden my-8 sm:my-12">
            <div className="bg-slate-900 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-2xl font-black italic">Wave Functions</h3>
                </div>
                <p className="text-slate-400 text-sm">Motion of Sin and Cos from $0^\circ \to 180^\circ$</p>
            </div>

            <div className="p-4 sm:p-8">
                <div className="h-[250px] sm:h-[350px] w-full bg-slate-50 rounded-2xl sm:rounded-3xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis
                                dataKey="angle"
                                ticks={markers}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }}
                            />
                            <YAxis
                                domain={[-1, 1]}
                                ticks={[-1, -0.5, 0, 0.5, 1]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#64748b', fontSize: 12 }}
                            />
                            <Tooltip
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                labelFormatter={(v) => `${v}°`}
                                formatter={(value: any) => [value, "Value"]}
                            />
                            <Line
                                type="monotone"
                                dataKey="sin"
                                stroke="#10b981"
                                strokeWidth={4}
                                dot={false}
                                name="Sin θ"
                                animationDuration={1000}
                            />
                            <Line
                                type="monotone"
                                dataKey="cos"
                                stroke="#6366f1"
                                strokeWidth={4}
                                dot={false}
                                name="Cos θ"
                                animationDuration={1000}
                            />
                            {markers.map(m => (
                                <ReferenceLine key={m} x={m} stroke="#94a3b8" strokeDasharray="3 3" />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-8 overflow-x-auto pb-4 custom-scrollbar snap-x">
                    <div className="flex gap-3 sm:gap-4 w-min sm:w-auto">
                        {markers.map(m => (
                            <div key={m} className="p-4 bg-slate-50 rounded-2xl text-center border border-slate-100 w-24 sm:w-28 shrink-0 hover:bg-white hover:shadow-lg transition-all snap-center">
                                <span className="block text-xs font-black text-slate-400 mb-2">{m}°</span>
                                <div className="space-y-1">
                                    <div className="text-[10px] sm:text-xs font-bold text-emerald-600 flex flex-col items-center">
                                        <span className="opacity-50 text-[8px] uppercase tracking-tighter">Sin</span>
                                        <MathText text={`$${getExact(m).sin}$`} />
                                        <span className="text-[8px] text-slate-400">({Math.sin((m * Math.PI) / 180).toFixed(2)})</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-200 my-1" />
                                    <div className="text-[10px] sm:text-xs font-bold text-indigo-600 flex flex-col items-center">
                                        <span className="opacity-50 text-[8px] uppercase tracking-tighter">Cos</span>
                                        <MathText text={`$${getExact(m).cos}$`} />
                                        <span className="text-[8px] text-slate-400">({Math.cos((m * Math.PI) / 180).toFixed(2)})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrigVisual;
