'use client';

import React, { useState } from 'react';
import MathText from './MathText';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ReferenceLine } from 'recharts';

const LimitIntroVisual = () => {
    const [hoverX, setHoverX] = useState<number | null>(null);

    // Generate data for f(x) = (x^2 - 1) / (x - 1) which simplifies to x + 1, hole at x = 1
    const generateData = () => {
        const data = [];
        for (let x = 0; x <= 2; x += 0.1) {
            const val = parseFloat(x.toFixed(1));
            if (val === 1) continue; // Skip x=1 to represent the hole logically, though we will plot around it
            data.push({ x: val, y: val + 1 });
        }
        return data;
    };

    const data = generateData();

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
                    <p className="font-bold text-gray-700">x = {label}</p>
                    <p className="text-indigo-600">f(x) ≈ {payload[0].value.toFixed(2)}</p>
                    <p className="text-xs text-gray-500 mt-1">Approaching 2...</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">Visualizing the Limit</h3>
                <div className="text-sm text-gray-600">
                    <MathText text="Consider $f(x) = \frac{x^2 - 1}{x - 1}$. At $x=1$, it is undefined ($0/0$)." />
                    <br />
                    <MathText text="Use the mouse to approach $x=1$ from both sides." />
                </div>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                        onMouseMove={(e) => {
                            if (e.activeLabel) {
                                setHoverX(Number(e.activeLabel));
                            }
                        }}
                        onMouseLeave={() => setHoverX(null)}
                    >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis
                            dataKey="x"
                            type="number"
                            domain={[0, 2]}
                            tickCount={5}
                            label={{ value: 'x', position: 'bottom', offset: 0 }}
                        />
                        <YAxis
                            domain={[0, 4]}
                            label={{ value: 'f(x)', angle: -90, position: 'insideLeft' }}
                        />
                        <Tooltip content={<CustomTooltip />} />

                        {/* The function line */}
                        <Line
                            type="monotone"
                            dataKey="y"
                            stroke="#6366f1"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6, fill: '#4f46e5' }}
                        />

                        {/* Visualizing the Limit L = 2 at x = 1 */}
                        <ReferenceDot x={1} y={2} r={6} fill="white" stroke="#ef4444" strokeWidth={2} />
                        <ReferenceLine x={1} stroke="#9ca3af" strokeDasharray="3 3" label="x -> 1" />
                        <ReferenceLine y={2} stroke="#9ca3af" strokeDasharray="3 3" label="L = 2" />

                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-4 bg-indigo-50 p-3 rounded-lg border border-indigo-100 flex justify-between items-center text-sm">
                <div>
                    <span className="font-bold text-indigo-900">Left Hand Limit:</span>
                    <span className="ml-2 text-indigo-700">{hoverX !== null && hoverX < 1 ? hoverX.toFixed(2) : '1.99...'}</span>
                </div>
                <div className="font-bold text-2xl text-indigo-500">→ 2 ←</div>
                <div>
                    <span className="font-bold text-indigo-900">Right Hand Limit:</span>
                    <span className="ml-2 text-indigo-700">{hoverX !== null && hoverX > 1 ? hoverX.toFixed(2) : '2.01...'}</span>
                </div>
            </div>
        </div>
    );
};

export default LimitIntroVisual;
