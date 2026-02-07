'use client';

import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ReferenceLine } from 'recharts';

const ContinuityVisual = () => {
    const [type, setType] = useState<'continuous' | 'hole' | 'jump'>('continuous');

    const generateData = () => {
        const data = [];
        for (let x = -3; x <= 3; x += 0.1) {
            const val = parseFloat(x.toFixed(1));

            let y = 0;
            if (type === 'continuous') {
                y = Math.sin(val) * 2;
            } else if (type === 'hole') {
                if (Math.abs(val) < 0.05) continue; // Hole at x=0
                y = val * val; // Parabola
            } else if (type === 'jump') {
                if (Math.abs(val) < 0.05) continue; // Gap at x=0
                y = val >= 0 ? 2 : -1; // Jump at x=0
            }

            data.push({ x: val, y });
        }
        return data;
    };

    const data = generateData();

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Continuity vs Discontinuity</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => setType('continuous')}
                        className={`px-3 py-1 text-sm rounded-full border ${type === 'continuous' ? 'bg-green-100 text-green-700 border-green-300 font-bold' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                    >
                        Continuous
                    </button>
                    <button
                        onClick={() => setType('hole')}
                        className={`px-3 py-1 text-sm rounded-full border ${type === 'hole' ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                    >
                        Hole (Removable)
                    </button>
                    <button
                        onClick={() => setType('jump')}
                        className={`px-3 py-1 text-sm rounded-full border ${type === 'jump' ? 'bg-red-100 text-red-900 border-red-300 font-bold' : 'text-gray-600 border-gray-300 hover:bg-gray-50'}`}
                    >
                        Jump Discontinuity
                    </button>
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="x" type="number" domain={[-3, 3]} />
                        <YAxis domain={['auto', 'auto']} />
                        <Tooltip
                            formatter={(value: any) => [typeof value === 'number' ? value.toFixed(2) : value, 'f(x)']}
                            labelFormatter={(label) => `x = ${label}`}
                        />
                        <Line
                            type={type === 'jump' ? "stepAfter" : "monotone"}
                            dataKey="y"
                            stroke={type === 'continuous' ? '#10b981' : type === 'hole' ? '#f59e0b' : '#ef4444'}
                            strokeWidth={3}
                            dot={false}
                        />
                        {type === 'hole' && (
                            <ReferenceDot x={0} y={0} r={5} fill="white" stroke="#f59e0b" strokeWidth={2} />
                        )}
                        {type === 'jump' && (
                            <>
                                <ReferenceDot x={0} y={2} r={5} fill="#ef4444" stroke="#ef4444" />
                                <ReferenceDot x={0} y={-1} r={5} fill="white" stroke="#ef4444" strokeWidth={2} />
                            </>
                        )}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700">
                {type === 'continuous' && (
                    <p><strong>Status: Continuous.</strong> You can draw this graph without lifting your pen. LHL = RHL = f(c).</p>
                )}
                {type === 'hole' && (
                    <p><strong>Status: Removable (Hole) Discontinuity.</strong> The limit exists (LHL = RHL), but f(c) is undefined or different. It's like a pothole in the road.</p>
                )}
                {type === 'jump' && (
                    <p><strong>Status: Jump Discontinuity.</strong> The path breaks completely. LHL ≠ RHL. You must lift your pen to continue drawing.</p>
                )}
            </div>
        </div>
    );
};

export default ContinuityVisual;
