'use client';

import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import MathText from './MathText';

export default function VennProbabilityVisual() {
    const [activeSet, setActiveSet] = useState<string>('union');

    // Definition of regions
    // A: Circle 1
    // B: Circle 2
    // intersection: Overlap
    // union: Both circles

    const getOpacity = (region: string) => {
        if (activeSet === 'A' && (region === 'A' || region === 'both')) return 0.8;
        if (activeSet === 'B' && (region === 'B' || region === 'both')) return 0.8;
        if (activeSet === 'intersection' && region === 'both') return 0.8;
        if (activeSet === 'union' && (region === 'A' || region === 'B' || region === 'both')) return 0.8;
        if (activeSet === 'onlyA' && region === 'A') return 0.8;
        if (activeSet === 'onlyB' && region === 'B') return 0.8;
        return 0.1;
    };

    const getColor = (region: string) => {
        return region === 'both' ? '#7c3aed' : (region === 'A' ? '#3b82f6' : '#ef4444');
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 my-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-indigo-600" />
                Visualizing Probability Laws
            </h3>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {[
                    { id: 'union', label: 'A ∪ B', formula: 'P(A) + P(B) - P(A ∩ B)' },
                    { id: 'intersection', label: 'A ∩ B', formula: 'Overlap' },
                    { id: 'A', label: 'Set A', formula: 'P(A)' },
                    { id: 'B', label: 'Set B', formula: 'P(B)' },
                    { id: 'onlyA', label: 'A - B', formula: 'P(A) - P(A ∩ B)' },
                    { id: 'onlyB', label: 'B - A', formula: 'P(B) - P(A ∩ B)' },
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
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="relative w-64 h-48">
                    <svg viewBox="0 0 200 150" className="w-full h-full drop-shadow-md">
                        <defs>
                            <mask id="mask-intersection">
                                <rect x="0" y="0" width="200" height="150" fill="black" />
                                <circle cx="70" cy="75" r="50" fill="white" />
                                <circle cx="130" cy="75" r="50" fill="gray" /> {/* gray intersection? No, better logic below */}
                            </mask>
                            {/* Better Mask Logic */}
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
                            fillOpacity={activeSet === 'onlyA' || activeSet === 'A' || activeSet === 'union' ? 1 : 0.1}
                            stroke={activeSet === 'onlyA' ? "#1d4ed8" : "none"} // Highlight stroke
                            strokeWidth="2"
                        />

                        {/* B Only: Draw B masked by A's inverse */}
                        <circle cx="130" cy="75" r="50"
                            fill="#ef4444"
                            mask="url(#cut-a-from-b)"
                            fillOpacity={activeSet === 'onlyB' || activeSet === 'B' || activeSet === 'union' ? 1 : 0.1}
                            stroke={activeSet === 'onlyB' ? "#b91c1c" : "none"}
                            strokeWidth="2"
                        />

                        {/* Intersection: Draw A clipped by B */}
                        <circle cx="70" cy="75" r="50"
                            fill="#7c3aed"
                            clipPath="url(#clip-b)"
                            fillOpacity={activeSet === 'intersection' || activeSet === 'A' || activeSet === 'B' || activeSet === 'union' ? 1 : 0.1}
                        // Note: Intersection is part of A and B, so it lights up for them too, or maybe blended?
                        // User wants clear distinction. Let's make it distinct purple.
                        />

                        {/* Overlay strokes for full sets A and B when selected */}
                        {activeSet === 'A' && <circle cx="70" cy="75" r="50" fill="none" stroke="#1d4ed8" strokeWidth="3" />}
                        {activeSet === 'B' && <circle cx="130" cy="75" r="50" fill="none" stroke="#b91c1c" strokeWidth="3" />}

                        {/* Labels */}
                        <text x="50" y="75" className="text-xs font-bold fill-white pointer-events-none" textAnchor="middle">A</text>
                        <text x="150" y="75" className="text-xs font-bold fill-white pointer-events-none" textAnchor="middle">B</text>
                        {/* Intersection Label only visible if relevant */}
                        <text x="100" y="75" className="text-[10px] font-bold fill-white pointer-events-none" textAnchor="middle">∩</text>
                    </svg>
                </div>


                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 w-full md:w-64">
                    <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">Formula & Concept</h4>
                    <div className="text-sm space-y-2">
                        {activeSet === 'union' && <MathText text="$P(A \cup B) = P(A) + P(B) - P(A \cap B)$" />}
                        {activeSet === 'intersection' && <MathText text="$P(A \cap B)$" />}
                        {activeSet === 'onlyA' && <MathText text="$P(A - B) = P(A) - P(A \cap B)$" />}
                        {activeSet === 'onlyB' && <MathText text="$P(B - A) = P(B) - P(A \cap B)$" />}
                        {activeSet === 'A' && <MathText text="$P(A)$" />}
                        {activeSet === 'B' && <MathText text="$P(B)$" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
