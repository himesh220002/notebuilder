'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import MathText from './MathText';

export default function VennProbabilityVisual() {
    const [numSets, setNumSets] = useState<2 | 3>(2);
    const [activeSet, setActiveSet] = useState<string>('union');

    // Definition of regions
    // 2 Sets: A, B, intersection, union, onlyA, onlyB
    // 3 Sets: A, B, C, AB, BC, AC, ABC, union

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 my-8">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Layers className="w-6 h-6 text-indigo-600" />
                    Visualizing Probability
                </h3>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    <button
                        onClick={() => { setNumSets(2); setActiveSet('union'); }}
                        className={`px-3 py-1 text-sm rounded-md font-bold transition-all ${numSets === 2 ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`}
                    >
                        2 Sets
                    </button>
                    <button
                        onClick={() => { setNumSets(3); setActiveSet('union'); }}
                        className={`px-3 py-1 text-sm rounded-md font-bold transition-all ${numSets === 3 ? 'bg-white shadow text-indigo-600' : 'text-gray-500'}`}
                    >
                        3 Sets
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {numSets === 2 ? (
                    // 2 Sets Controls
                    [
                        { id: 'union', label: 'A ∪ B' },
                        { id: 'intersection', label: 'A ∩ B' },
                        { id: 'A', label: 'Set A' },
                        { id: 'B', label: 'Set B' },
                        { id: 'onlyA', label: 'A - B' },
                        { id: 'onlyB', label: 'B - A' },
                    ].map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setActiveSet(btn.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeSet === btn.id
                                ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))
                ) : (
                    // 3 Sets Controls
                    [
                        { id: 'union', label: 'A ∪ B ∪ C' },
                        { id: 'A', label: 'A' }, { id: 'B', label: 'B' }, { id: 'C', label: 'C' },
                        { id: 'AB', label: 'A ∩ B' }, { id: 'BC', label: 'B ∩ C' }, { id: 'AC', label: 'A ∩ C' },
                        { id: 'ABC', label: 'A ∩ B ∩ C' }
                    ].map((btn) => (
                        <button
                            key={btn.id}
                            onClick={() => setActiveSet(btn.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeSet === btn.id
                                ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {btn.label}
                        </button>
                    ))
                )}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-64 h-64">
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                        {numSets === 2 ? (
                            // 2 Sets Implementation (Original Mask Logic)
                            <g transform="translate(0, 25)">
                                <defs>
                                    <mask id="cut-b-from-a">
                                        <rect x="0" y="0" width="200" height="150" fill="white" />
                                        <circle cx="130" cy="75" r="50" fill="black" />
                                    </mask>
                                    <mask id="cut-a-from-b">
                                        <rect x="0" y="0" width="200" height="150" fill="white" />
                                        <circle cx="70" cy="75" r="50" fill="black" />
                                    </mask>
                                    <clipPath id="clip-b">
                                        <circle cx="130" cy="75" r="50" />
                                    </clipPath>
                                </defs>

                                {/* Base Circles (Outlines) */}
                                <circle cx="70" cy="75" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <circle cx="130" cy="75" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" />

                                {/* A Only: Draw A masked by B's inverse */}
                                <circle cx="70" cy="75" r="50"
                                    fill="#3b82f6"
                                    mask="url(#cut-b-from-a)"
                                    fillOpacity={activeSet === 'onlyA' || activeSet === 'A' || activeSet === 'union' ? 1 : 0.05}
                                    stroke={activeSet === 'onlyA' ? "#1d4ed8" : "none"} // Highlight stroke
                                    strokeWidth="2"
                                />

                                {/* B Only: Draw B masked by A's inverse */}
                                <circle cx="130" cy="75" r="50"
                                    fill="#ef4444"
                                    mask="url(#cut-a-from-b)"
                                    fillOpacity={activeSet === 'onlyB' || activeSet === 'B' || activeSet === 'union' ? 1 : 0.05}
                                    stroke={activeSet === 'onlyB' ? "#b91c1c" : "none"}
                                    strokeWidth="2"
                                />

                                {/* Intersection: Draw A clipped by B */}
                                <circle cx="70" cy="75" r="50"
                                    fill="#7c3aed"
                                    clipPath="url(#clip-b)"
                                    fillOpacity={activeSet === 'intersection' || activeSet === 'A' || activeSet === 'B' || activeSet === 'union' ? 1 : 0.05}
                                />

                                {/* Overlay strokes for full sets A and B when selected */}
                                {activeSet === 'A' && <circle cx="70" cy="75" r="50" fill="none" stroke="#1d4ed8" strokeWidth="3" />}
                                {activeSet === 'B' && <circle cx="130" cy="75" r="50" fill="none" stroke="#b91c1c" strokeWidth="3" />}

                                {/* Labels */}
                                <text x="50" y="75" className="text-xs font-bold fill-white pointer-events-none" textAnchor="middle">A</text>
                                <text x="150" y="75" className="text-xs font-bold fill-white pointer-events-none" textAnchor="middle">B</text>
                                {/* Intersection Label only visible if relevant */}
                                {activeSet === 'intersection' && <text x="100" y="75" className="text-[10px] font-bold fill-white pointer-events-none" textAnchor="middle">∩</text>}
                            </g>
                        ) : (
                            // 3 Sets Implementation
                            <g transform="translate(0, -10)">
                                <defs>
                                    <circle id="cA" cx="100" cy="70" r="45" />
                                    <circle id="cB" cx="70" cy="130" r="45" />
                                    <circle id="cC" cx="130" cy="130" r="45" />

                                    <clipPath id="clipA"><use href="#cA" /></clipPath>
                                    <clipPath id="clipB"><use href="#cB" /></clipPath>
                                    <clipPath id="clipC"><use href="#cC" /></clipPath>
                                </defs>

                                {/* Base Outlines */}
                                <use href="#cA" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <use href="#cB" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                                <use href="#cC" fill="none" stroke="#e5e7eb" strokeWidth="1" />

                                {/* A (Top) */}
                                <use href="#cA" fill="#3b82f6" fillOpacity={['A', 'union', 'AB', 'AC', 'ABC'].includes(activeSet) ? 0.6 : 0.05} />
                                {/* B (Left) */}
                                <use href="#cB" fill="#ef4444" fillOpacity={['B', 'union', 'AB', 'BC', 'ABC'].includes(activeSet) ? 0.6 : 0.05} />
                                {/* C (Right) */}
                                <use href="#cC" fill="#10b981" fillOpacity={['C', 'union', 'BC', 'AC', 'ABC'].includes(activeSet) ? 0.6 : 0.05} />

                                {/* Intersections Visuals (Overlays for clarity) */}
                                {['AB', 'union', 'ABC', 'A', 'B'].includes(activeSet) && <use href="#cA" clipPath="url(#clipB)" fill="#7c3aed" fillOpacity={activeSet === 'AB' || activeSet === 'ABC' ? 0.9 : 0} />}
                                {['BC', 'union', 'ABC', 'B', 'C'].includes(activeSet) && <use href="#cB" clipPath="url(#clipC)" fill="#f59e0b" fillOpacity={activeSet === 'BC' || activeSet === 'ABC' ? 0.9 : 0} />}
                                {['AC', 'union', 'ABC', 'A', 'C'].includes(activeSet) && <use href="#cA" clipPath="url(#clipC)" fill="#06b6d4" fillOpacity={activeSet === 'AC' || activeSet === 'ABC' ? 0.9 : 0} />}

                                {/* Center Intersection ABC (Triple Clip) */}
                                {['ABC', 'union', 'A', 'B', 'C', 'AB', 'BC', 'AC'].includes(activeSet) && (
                                    <g clipPath="url(#clipA)">
                                        <use href="#cB" clipPath="url(#clipC)"
                                            fill={activeSet === 'ABC' ? "#ffffff" : "#1f2937"}
                                            fillOpacity={activeSet === 'ABC' || activeSet === 'union' ? 1 : 0}
                                            stroke="#000"
                                            strokeWidth={activeSet === 'ABC' ? 1 : 0}
                                        />
                                    </g>
                                )}

                                {/* Selected Outlines */}
                                {activeSet === 'A' && <use href="#cA" fill="none" stroke="#1d4ed8" strokeWidth="3" />}
                                {activeSet === 'B' && <use href="#cB" fill="none" stroke="#b91c1c" strokeWidth="3" />}
                                {activeSet === 'C' && <use href="#cC" fill="none" stroke="#047857" strokeWidth="3" />}

                                <text x="100" y="60" className="text-xs font-bold fill-gray-500" textAnchor="middle">A</text>
                                <text x="50" y="140" className="text-xs font-bold fill-gray-500" textAnchor="middle">B</text>
                                <text x="150" y="140" className="text-xs font-bold fill-gray-500" textAnchor="middle">C</text>
                            </g>
                        )}
                    </svg>
                </div>


                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full md:w-80">
                    <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">Formula & Concept</h4>
                    <div className="text-sm space-y-2">
                        {numSets === 2 ? (
                            <>
                                {activeSet === 'union' && <MathText text="$P(A \cup B) = P(A) + P(B) - P(A \cap B)$" />}
                                {activeSet === 'intersection' && <MathText text="$P(A \cap B)$" />}
                                {activeSet === 'onlyA' && <MathText text="$P(A - B) = P(A) - P(A \cap B)$" />}
                                {activeSet === 'onlyB' && <MathText text="$P(B - A) = P(B) - P(A \cap B)$" />}
                                {activeSet === 'A' && <MathText text="$P(A)$" />}
                                {activeSet === 'B' && <MathText text="$P(B)$" />}
                            </>
                        ) : (
                            <>
                                {activeSet === 'union' && <div className="text-xs"><MathText text="$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)$" /></div>}
                                {activeSet === 'ABC' && <MathText text="$P(A \cap B \cap C)$" />}
                                {activeSet === 'AB' && <MathText text="$P(A \cap B)$" />}
                                {activeSet === 'BC' && <MathText text="$P(B \cap C)$" />}
                                {activeSet === 'AC' && <MathText text="$P(A \cap C)$" />}
                                {['A', 'B', 'C'].includes(activeSet) && <MathText text={`$P(${activeSet})$`} />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
