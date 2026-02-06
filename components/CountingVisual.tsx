'use client';

import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import MathText from './MathText';
import { ArrowDown, Check, X } from 'lucide-react';

export default function CountingVisual() {
    const [mode, setMode] = useState<'principles' | 'permVsComb'>('principles');

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            {/* Toggle Header */}
            <div className="flex gap-4 mb-6 border-b pb-4">
                <button
                    onClick={() => setMode('principles')}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${mode === 'principles'
                        ? 'bg-blue-100 text-blue-800 border-blue-300 border'
                        : 'text-gray-500 hover:bg-gray-50'
                        }`}
                >
                    Tree: Addition vs Multiplication
                </button>
                <button
                    onClick={() => setMode('permVsComb')}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${mode === 'permVsComb'
                        ? 'bg-purple-100 text-purple-800 border-purple-300 border'
                        : 'text-gray-500 hover:bg-gray-50'
                        }`}
                >
                    Visual: Permutation vs Combination
                </button>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px]">
                {mode === 'principles' ? <TreeVisual /> : <PermCombVisual />}
            </div>
        </div>
    );
}

// 1. Tree Diagram Visual
const TreeVisual = () => {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* Addition Principle */}
            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 mb-2">Addition Principle (OR)</h4>
                <p className="text-sm text-green-800 mb-4">Choose 1 item from Group A (2 items) <strong>OR</strong> Group B (3 items). Total = 2 + 3 = 5 choice.</p>

                <div className="flex flex-col items-center">
                    <div className="bg-gray-800 text-white px-3 py-1 rounded mb-4">You</div>
                    <div className="relative w-full h-8 mb-4">
                        <div className="absolute left-1/4 top-0 w-[2px] h-8 bg-gray-400 rotate-45 origin-top"></div>
                        <div className="absolute right-1/4 top-0 w-[2px] h-8 bg-gray-400 -rotate-45 origin-top"></div>
                    </div>
                    <div className="flex w-full justify-around mb-4">
                        <div className="text-center w-1/2 border-r border-gray-300">
                            <span className="text-xs font-bold text-gray-500 block mb-2">Group A</span>
                            <div className="flex gap-2 justify-center">
                                <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white text-xs shadow">A1</div>
                                <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white text-xs shadow">A2</div>
                            </div>
                        </div>
                        <div className="text-center w-1/2">
                            <span className="text-xs font-bold text-gray-500 block mb-2">Group B</span>
                            <div className="flex gap-2 justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs shadow">B1</div>
                                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs shadow">B2</div>
                                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs shadow">B3</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 text-center font-bold text-green-700 bg-green-100 px-4 py-2 rounded-full">
                        Total Options: 5
                    </div>
                </div>
            </div>

            {/* Multiplication Principle */}
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-900 mb-2">Multiplication Principle (AND)</h4>
                <p className="text-sm text-green-800 mb-4">Choose 1 Shirt (2 options) <strong>AND</strong> 1 Pant (3 options). Total = 2 $\times$ 3 = 6 outfits.</p>

                <div className="flex flex-col items-center">
                    <div className="bg-gray-800 text-white px-3 py-1 rounded mb-2">Choice 1: Shirt</div>

                    <div className="flex gap-12 mb-4">
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-red-100 border-2 border-red-400 rounded flex items-center justify-center text-red-500 font-bold mb-2">S1</div>
                            {/* Branch to 3 pants */}
                            <div className="text-xs text-gray-400 mb-1">↓</div>
                            <div className="flex gap-1">
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P1</span>
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P2</span>
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P3</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-red-100 border-2 border-red-400 rounded flex items-center justify-center text-red-500 font-bold mb-2">S2</div>
                            {/* Branch to 3 pants */}
                            <div className="text-xs text-gray-400 mb-1">↓</div>
                            <div className="flex gap-1">
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P1</span>
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P2</span>
                                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-[10px]">P3</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 text-center font-bold text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
                        Total Options: 6 (2 groups of 3)
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Perm vs Comb Visual
const PermCombVisual = () => {
    // Example: Select 2 letters from A, B, C
    const letters = ['A', 'B', 'C'];

    return (
        <div className="space-y-8">
            <p className="text-gray-700 text-center italic">Example: Pick 2 letters from [A, B, C]</p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Permutation */}
                <div className="bg-purple-50 p-6 rounded-xl border-t-4 border-purple-500">
                    <h4 className="font-bold text-xl text-purple-900 mb-2">Permutation ($^nP_r$)</h4>
                    <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Order Matters!</p>

                    <div className="grid grid-cols-3 gap-3">
                        {['AB', 'BA', 'AC', 'CA', 'BC', 'CB'].map((pair, idx) => (
                            <div key={idx} className="bg-white p-3 rounded shadow text-center font-mono font-bold text-purple-700 border border-purple-100">
                                {pair}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-center text-sm text-purple-800">
                        AB $\neq$ BA (Different arrangements)<br />
                        Total = $3 \times 2 = 6$
                    </p>
                </div>

                {/* Combination */}
                <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500">
                    <h4 className="font-bold text-xl text-blue-900 mb-2">Combination ($^nC_r$)</h4>
                    <p className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Order DOES NOT Matter!</p>

                    <div className="grid grid-cols-3 gap-3">
                        {['{A,B}', '{A,C}', '{B,C}'].map((pair, idx) => (
                            <div key={idx} className="bg-white p-3 rounded shadow text-center font-mono font-bold text-blue-700 border border-blue-100">
                                {pair}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-center text-sm text-blue-800">
                        AB = BA (Same selection)<br />
                        Total = 3
                    </p>
                </div>
            </div>
        </div>
    );
};

// 3. Circular Visual
export const CircularVisual = () => {
    return (
        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-900 mb-4">Circular Permutation: $(n-1)!$</h4>
            <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <div className="relative w-48 h-48 flex items-center justify-center">
                    {/* Circle */}
                    <div className="absolute inset-0 border-4 border-dashed border-indigo-300 rounded-full animate-[spin_20s_linear_infinite]"></div>

                    {/* People Seats */}
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                        <div
                            key={i}
                            className="absolute w-10 h-10 bg-indigo-600 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold"
                            style={{
                                transform: `rotate(${deg}deg) translateY(-80px) rotate(-${deg}deg)`
                            }}
                        >
                            {String.fromCharCode(65 + i)}
                        </div>
                    ))}

                    <div className="text-center z-10">
                        <span className="block text-2xl font-bold text-indigo-800">6 People</span>
                        <span className="text-[10px] text-indigo-600 uppercase font-bold">Relative Positions</span>
                    </div>
                </div>

                <div className="max-w-xs space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-indigo-100 shadow-sm">
                        <p className="text-sm text-gray-700">
                            <strong>Why $(n-1)!$?</strong><br />
                            In a circle, absolute positions don't matter. We must "fix" one person's position to avoid counting rotations as different.
                        </p>
                    </div>
                    <div className="text-indigo-700 text-sm font-bold flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Ways = $(6-1)! = 5! = 120$
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. Selection Visual
export const SelectionVisual = () => {
    return (
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-900 mb-4">The Act of Selection (Combinations)</h4>
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                    <p className="text-sm text-emerald-800 mb-4">
                        Imagine selecting 3 balls out of 5. The order they come out doesn't change the set you have in your hand.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        {/* Selected Group */}
                        <div className="p-4 bg-white rounded-2xl border-2 border-emerald-400 border-dashed relative">
                            <span className="absolute -top-3 left-4 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Selection (r=3)</span>
                            <div className="flex gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-500 shadow-inner"></div>
                                <div className="w-10 h-10 rounded-full bg-emerald-500 shadow-inner"></div>
                                <div className="w-10 h-10 rounded-full bg-emerald-500 shadow-inner"></div>
                            </div>
                        </div>

                        <div className="flex items-center text-emerald-300">
                            <ArrowDown className="w-6 h-6 -rotate-90 hidden md:block" />
                        </div>

                        {/* Remaining Pool */}
                        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 opacity-50">
                            <div className="flex gap-2">
                                <div className="w-10 h-10 rounded-full bg-emerald-200"></div>
                                <div className="w-10 h-10 rounded-full bg-emerald-200"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-emerald-100 min-w-[200px]">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">Calculation</div>
                    <div className="text-2xl font-bold text-emerald-700"><MathText text="$^5C_3 = \dfrac{5!}{3!2!}$" /></div>
                    <div className="text-emerald-600 font-bold">= 10 ways</div>
                </div>
            </div>
        </div>
    );
};
