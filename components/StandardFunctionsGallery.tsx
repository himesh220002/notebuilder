'use client';

import React, { useState } from 'react';
import FunctionGraph from './FunctionGraph';

const groups = [
    {
        name: "Basic Functions",
        types: ["identity", "constant", "quadratic", "cube"] as const
    },
    {
        name: "Specialized",
        types: ["modulus", "signum", "step", "reciprocal"] as const
    }
];

export default function StandardFunctionsGallery() {
    const [activeGroup, setActiveGroup] = useState(0);

    return (
        <div className="space-y-6">
            <div className="flex gap-4 border-b pb-2">
                {groups.map((group, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveGroup(idx)}
                        className={`pb-2 px-4 font-bold transition-all ${activeGroup === idx
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        {group.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups[activeGroup].types.map((type) => (
                    <FunctionGraph key={type} type={type as any} />
                ))}
            </div>

            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-sm text-amber-800 italic text-center">
                Check the "Step" and "Signum" functions - notice their distinctive jumps!
            </div>
        </div>
    );
}
