'use client';

import React, { useState, useEffect } from 'react';
import { Clock, RefreshCw, Calculator, Info, Zap } from 'lucide-react';
import MathText from "@/components/MathText";

const ClockVisual = () => {
    const [hour, setHour] = useState(3);
    const [minute, setMinute] = useState(0);

    // Speed of hands:
    // Minute hand: 6 deg/min
    // Hour hand: 0.5 deg/min (30 deg/hour)

    const minAngle = minute * 6;
    const hourAngle = (hour % 12) * 30 + minute * 0.5;

    // Angle between hands
    let diff = Math.abs(hourAngle - minAngle);
    const angleBetween = diff > 180 ? 360 - diff : diff;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Clock className="w-6 h-6 text-indigo-300" />
                        <h3 className="text-xl font-bold">Interactive Clock Lab</h3>
                    </div>
                    <p className="text-indigo-200 text-xs">Visualize angles between Minute and Hour hands.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Clock Face SVG */}
                    <div className="flex justify-center">
                        <div className="relative w-64 h-64 rounded-full border-[6px] border-slate-800 shadow-2xl bg-slate-50 flex items-center justify-center">
                            {/* Hour Markers */}
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-3 bg-slate-400"
                                    style={{
                                        transform: `rotate(${i * 30}deg) translateY(-118px)`
                                    }}
                                />
                            ))}

                            {/* Hands */}
                            {/* Hour Hand */}
                            <div
                                className="absolute w-2 h-16 bg-slate-800 rounded-full origin-bottom bottom-1/2 transition-transform duration-500 ease-out"
                                style={{ transform: `rotate(${hourAngle}deg)` }}
                            />
                            {/* Minute Hand */}
                            <div
                                className="absolute w-1.5 h-24 bg-indigo-500 rounded-full origin-bottom bottom-1/2 transition-transform duration-500 ease-out"
                                style={{ transform: `rotate(${minAngle}deg)` }}
                            />
                            {/* Center Dot */}
                            <div className="absolute w-4 h-4 bg-slate-800 rounded-full shadow-md z-10" />
                        </div>
                    </div>

                    {/* Controls & Math */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Hour: {hour}</label>
                                <input
                                    type="range" min="0" max="11" step="1"
                                    value={hour} onChange={(e) => setHour(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Minute: {minute}</label>
                                <input
                                    type="range" min="0" max="59" step="1"
                                    value={minute} onChange={(e) => setMinute(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                                <Calculator className="w-4 h-4 text-indigo-500" />
                                Angle Calculation
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-slate-500">Hour Hand Pos:</span>
                                    <span className="text-slate-900">{hourAngle.toFixed(1)}°</span>
                                </div>
                                <div className="flex justify-between text-sm font-bold">
                                    <span className="text-slate-500">Minute Hand Pos:</span>
                                    <span className="text-slate-900">{minAngle}°</span>
                                </div>
                                <div className="pt-4 border-t border-slate-200">
                                    <div className="flex justify-between items-center text-indigo-700">
                                        <span className="text-xs font-black uppercase">Net Angle (θ)</span>
                                        <span className="text-3xl font-black">{angleBetween.toFixed(1)}°</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex gap-4">
                            <Info className="w-5 h-5 text-indigo-500 shrink-0" />
                            <p className="text-[11px] text-indigo-700 font-bold italic leading-relaxed">
                                Applied Formula: $\theta = |30H - 5.5M|$ <br />
                                Here $H$ is the hour ({hour}) and $M$ is the minute ({minute}).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClockVisual;
