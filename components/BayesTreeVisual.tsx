'use client';

import React from 'react';
import { Network } from 'lucide-react';
import MathText from './MathText';

export default function BayesTreeVisual() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 my-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Network className="w-6 h-6 text-indigo-600" />
                Total Probability & Bayes Theorem
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Tree Diagram SVG */}
                <div className="w-full max-w-md border border-gray-100 rounded-lg bg-gray-50 relative">
                    <div className="aspect-[4/3] w-full">
                        <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                            {/* Root */}
                            <circle cx="50" cy="150" r="6" fill="#475569" />

                            {/* Path to E1 (Top) */}
                            <path d="M 50 150 C 100 150, 100 80, 150 80" fill="none" stroke="#94a3b8" strokeWidth="2" />
                            {/* Path to E2 (Bottom) */}
                            <path d="M 50 150 C 100 150, 100 220, 150 220" fill="none" stroke="#94a3b8" strokeWidth="2" />

                            {/* Event Nodes E1, E2 */}
                            <g>
                                <circle cx="150" cy="80" r="18" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
                                <text x="150" y="85" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e40af">E1</text>
                            </g>

                            <g>
                                <circle cx="150" cy="220" r="18" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                                <text x="150" y="225" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#991b1b">E2</text>
                            </g>

                            {/* Labels for P(E) */}
                            <rect x="75" y="100" width="40" height="20" rx="4" fill="white" fillOpacity="0.8" />
                            <text x="95" y="114" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="500">P(E1)</text>

                            <rect x="75" y="185" width="40" height="20" rx="4" fill="white" fillOpacity="0.8" />
                            <text x="95" y="199" textAnchor="middle" fontSize="11" fill="#475569" fontWeight="500">P(E2)</text>


                            {/* Path to A (from E1) */}
                            <path d="M 168 80 L 300 80" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6,4" />
                            {/* Path to A (from E2) */}
                            <path d="M 168 220 L 300 220" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="6,4" />

                            {/* Outcome A Nodes */}
                            <g>
                                <circle cx="300" cy="80" r="18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                                <text x="300" y="85" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5b21b6">A</text>
                            </g>

                            <g>
                                <circle cx="300" cy="220" r="18" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
                                <text x="300" y="225" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5b21b6">A</text>
                            </g>

                            {/* Labels for Conditional */}
                            <text x="234" y="70" textAnchor="middle" fontSize="11" fill="#2563eb" fontWeight="500">P(A|E1)</text>
                            <text x="234" y="210" textAnchor="middle" fontSize="11" fill="#dc2626" fontWeight="500">P(A|E2)</text>

                        </svg>
                    </div>
                </div>

                <div className="space-y-4 max-w-sm">
                    <div className="bg-indigo-50 p-3 rounded-lg border-l-4 border-indigo-500">
                        <h4 className="font-bold text-indigo-900 text-sm mb-1">Law of Total Probability</h4>
                        <div className="text-md text-indigo-800">
                            Total probability of A occurring is sum of all paths leading to A:
                            <div className="mt-1 font-mono bg-white p-1 rounded border border-indigo-100">
                                <MathText text="$P(A) = P(E_1)P(A|E_1) + P(E_2)P(A|E_2)$" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500">
                        <h4 className="font-bold text-emerald-900 text-sm mb-1">Bayes Theorem (Reverse)</h4>
                        <div className="text-md text-emerald-800">
                            Given A happened, chance it came from path E1?
                            <div className="mt-1 font-mono bg-white p-1 text-lg rounded border border-emerald-100">
                                <MathText text="$P(E_1|A) = \frac{P(E_1)P(A|E_1)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)}$" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
