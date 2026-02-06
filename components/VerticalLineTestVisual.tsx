'use client';

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine, ScatterChart, Scatter } from 'recharts';

export default function VerticalLineTestVisual() {
    const [lineX, setLineX] = useState(-4);
    const [type, setType] = useState<'function' | 'notFunction'>('function');

    useEffect(() => {
        const interval = setInterval(() => {
            setLineX(prev => (prev >= 4 ? -4 : prev + 0.05));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    const functionData = Array.from({ length: 81 }, (_, i) => {
        const x = (i - 40) / 10;
        return { x, y: x * x / 2 - 2 }; // Parabola
    });

    const notFunctionData = Array.from({ length: 81 }, (_, i) => {
        const angle = (i / 80) * 2 * Math.PI;
        return { x: 3 * Math.cos(angle), y: 3 * Math.sin(angle) }; // Circle
    });

    const intersections = () => {
        if (type === 'function') {
            const x = Math.round(lineX * 10) / 10;
            return [{ x, y: x * x / 2 - 2 }];
        } else {
            const x = lineX;
            if (Math.abs(x) > 3) return [];
            const y = Math.sqrt(9 - x * x);
            return [{ x, y }, { x, y: -y }];
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-gray-800 text-lg">Vertical Line Test</h4>
                <div className="flex gap-2">
                    <button
                        onClick={() => setType('function')}
                        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${type === 'function' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        Function
                    </button>
                    <button
                        onClick={() => setType('notFunction')}
                        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${type === 'notFunction' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        Not a Function
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-[300px] relative border rounded-lg bg-slate-50 overflow-hidden">
                    <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" dataKey="x" domain={[-5, 5]} hide />
                            <YAxis type="number" dataKey="y" domain={[-5, 5]} hide />
                            <ReferenceLine x={0} stroke="#94a3b8" />
                            <ReferenceLine y={0} stroke="#94a3b8" />

                            {/* The Curve */}
                            <Scatter
                                data={type === 'function' ? functionData : notFunctionData}
                                fill={type === 'function' ? '#3b82f6' : '#ef4444'}
                                line
                                shape={() => null}
                            />

                            {/* The Vertical Line */}
                            <ReferenceLine x={lineX} stroke={intersections().length > 1 ? "#ef4444" : "#10b981"} strokeWidth={3} strokeDasharray="5 5" />

                            {/* Intersection Points */}
                            <Scatter data={intersections()} fill={intersections().length > 1 ? "#ef4444" : "#10b981"} />
                        </ScatterChart>
                    </ResponsiveContainer>

                    <div className="absolute top-2 left-2 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        Scanning x = {lineX.toFixed(1)}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className={`p-4 rounded-xl border-l-4 ${intersections().length > 1 ? 'bg-red-50 border-red-500' : 'bg-green-50 border-green-500'}`}>
                        <h5 className={`font-bold ${intersections().length > 1 ? 'text-red-900' : 'text-green-900'}`}>
                            {intersections().length > 1 ? 'Failed!' : 'Passed!'}
                        </h5>
                        <p className="text-sm text-gray-700">
                            {type === 'function'
                                ? "For every x, there is exactly one y. This is a function."
                                : "At this x, there are multiple y values! This breaks the rule of a function."}
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl text-sm italic text-blue-800 border border-blue-100">
                        "One input must have exactly one output."
                    </div>
                </div>
            </div>
        </div>
    );
}
