'use client';

import React, { useState } from 'react';
import { ComposedChart, Line, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import MathText from './MathText';

const DerivativeSlopeVisual = () => {
    const [h, setH] = useState(2); // Initial distance between x and x+h

    const x0 = 1; // Point where we find derivative (tangent)
    const f = (x: number) => x * x; // Function: x^2

    // Generate graph points
    const data = [];
    for (let x = -0.5; x <= 3.5; x += 0.1) {
        data.push({ x: Number(x.toFixed(1)), y: f(x) });
    }

    // Points for Secant Line
    const x1 = x0;
    const y1 = f(x1);
    const x2 = x0 + h;
    const y2 = f(x2);

    // Secant Line Equation: y - y1 = m(x - x1) => y = m(x - x1) + y1
    const secantSlope = (y2 - y1) / (x2 - x1 || 0.0001);

    // Generate Secant Line Data points for visualization
    const secantData = [
        { x: x1 - 1, y: secantSlope * (x1 - 1 - x1) + y1 },
        { x: x2 + 1, y: secantSlope * (x2 + 1 - x1) + y1 }
    ];

    // Tangent Line (Actual derivative at x=1 is 2x -> 2(1) = 2)
    const tangentSlope = 2 * x1;
    const tangentData = [
        { x: x1 - 1, y: tangentSlope * (x1 - 1 - x1) + y1 },
        { x: x1 + 2, y: tangentSlope * (x1 + 2 - x1) + y1 }
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="font-bold text-lg text-gray-800 mb-4 border-b pb-2">Geometric Meaning of Derivative</h3>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="x" type="number" domain={[-0.5, 3.5]} allowDataOverflow={false} />
                            <YAxis domain={[-1, 10]} />
                            <Tooltip contentStyle={{ borderRadius: '8px' }} />

                            {/* Function Curve f(x) = x^2 */}
                            <Line data={data} type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={3} dot={false} name="f(x) = x²" />

                            {/* Secant Line (Dynamic) */}
                            <Line data={secantData} type="monotone" dataKey="y" stroke="#ff7300" strokeWidth={2} strokeDasharray="5 5" name="Secant Line" dot={false} isAnimationActive={false} />

                            {/* Tangent Line (Static Goal) */}
                            <Line data={tangentData} type="monotone" dataKey="y" stroke="#10b981" strokeWidth={2} name="Tangent (Goal)" dot={false} />

                            {/* Points P and Q */}
                            <Scatter data={[{ x: x1, y: y1 }]} fill="#10b981" shape="circle" name="P" />
                            <Scatter data={[{ x: x2, y: y2 }]} fill="#ff7300" shape="circle" name="Q" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

                <div className="md:w-1/3 space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Distance $h$ (Move slider to reduce $h$)</label>
                        <input
                            type="range"
                            min="0.1"
                            max="2"
                            step="0.1"
                            value={h}
                            onChange={(e) => setH(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                            <span>h = 0.1 (Tangent)</span>
                            <span>h = 2.0 (Secant)</span>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                            <span className="text-gray-600 font-bold">Current h:</span>
                            <span className="font-mono bg-white px-2 py-1 rounded shadow-sm">{h.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between items-center bg-orange-50 p-2 rounded border-l-4 border-orange-400">
                            <span className="text-orange-800 font-bold">Slope of Secant PQ:</span>
                            <span className="font-mono bg-white px-2 py-1 rounded shadow-sm text-orange-700">
                                {secantSlope.toFixed(3)}
                            </span>
                        </div>
                        <div className="flex justify-between items-center bg-emerald-50 p-2 rounded border-l-4 border-emerald-400">
                            <span className="text-emerald-800 font-bold">Slope of Tangent (Actual):</span>
                            <span className="font-mono bg-white px-2 py-1 rounded shadow-sm text-emerald-700">
                                {tangentSlope.toFixed(3)}
                            </span>
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 italic">
                        As $h \to 0$, Point Q moves closer to P, and the Secant slope approaches 2.0 (Tangent slope).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DerivativeSlopeVisual;
