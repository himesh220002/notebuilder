'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type MappingType = 'function' | 'manyToOne' | 'oneToMany' | 'incomplete';

export default function MappingDiagramVisual() {
    const [type, setType] = useState<MappingType>('function');

    const setA = [1, 2, 3];
    const setB = ['a', 'b', 'c'];

    const getArrows = () => {
        switch (type) {
            case 'function':
                return [
                    { from: 1, to: 'a' },
                    { from: 2, to: 'b' },
                    { from: 3, to: 'c' }
                ];
            case 'manyToOne':
                return [
                    { from: 1, to: 'a' },
                    { from: 2, to: 'a' },
                    { from: 3, to: 'b' }
                ];
            case 'oneToMany':
                return [
                    { from: 1, to: 'a' },
                    { from: 1, to: 'b' },
                    { from: 2, to: 'c' },
                    { from: 3, to: 'c' }
                ];
            case 'incomplete':
                return [
                    { from: 1, to: 'a' },
                    { from: 2, to: 'b' }
                ];
            default: return [];
        }
    };

    const arrows = getArrows();

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 w-full max-w-lg mx-auto">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-8 bg-slate-50 p-2 rounded-lg border border-slate-200">
                <button
                    onClick={() => setType('function')}
                    className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter transition-all ${type === 'function' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    1-to-1
                </button>
                <button
                    onClick={() => setType('manyToOne')}
                    className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter transition-all ${type === 'manyToOne' ? 'bg-indigo-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Many-to-1
                </button>
                <button
                    onClick={() => setType('oneToMany')}
                    className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter transition-all ${type === 'oneToMany' ? 'bg-rose-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    1-to-Many
                </button>
                <button
                    onClick={() => setType('incomplete')}
                    className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-tighter transition-all ${type === 'incomplete' ? 'bg-amber-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    No Image
                </button>
            </div>

            <div className="relative h-64 flex justify-between items-center px-12 pt-10">
                {/* Domain - Set A */}
                <div className="space-y-8 z-10">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-2">Set A</div>
                    {setA.map(val => (
                        <div key={val} className="w-12 h-12 rounded-full bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shadow-sm relative">
                            {val}
                            {type === 'incomplete' && val === 3 && (
                                <motion.div
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-0.5 text-[8px] animate-pulse"
                                >
                                    ⚠️
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                {/* SVG Arrows Container */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill={type === 'function' || type === 'manyToOne' ? "#10b981" : type === 'oneToMany' ? "#f43f5e" : "#f59e0b"} />
                        </marker>
                    </defs>
                    {arrows.map((arrow, idx) => {
                        const fromIdx = setA.indexOf(arrow.from);
                        const toIdx = setB.indexOf(arrow.to);
                        const y1 = 76 + fromIdx * 80;
                        const y2 = 76 + toIdx * 80;
                        return (
                            <motion.line
                                key={`${arrow.from}-${arrow.to}-${type}`}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                x1="25%"
                                y1={y1}
                                x2="75%"
                                y2={y2}
                                stroke={(type === 'function' || type === 'manyToOne') ? "#10b981" : type === 'oneToMany' && arrow.from === 1 ? "#f43f5e" : "#94a3b8"}
                                strokeWidth="3"
                                markerEnd="url(#arrowhead)"
                            />
                        );
                    })}
                </svg>

                {/* Co-Domain - Set B */}
                <div className="space-y-8 z-10">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center mb-2">Set B</div>
                    {setB.map(val => (
                        <div key={val} className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center font-bold text-emerald-700 shadow-sm relative overflow-hidden">
                            {val}
                            {type === 'manyToOne' && val === 'a' && (
                                <div className="absolute inset-0 bg-emerald-200/30 animate-pulse"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className={`mt-12 p-4 rounded-xl border-l-4 transition-colors duration-500 ${type === 'function' || type === 'manyToOne' ? 'bg-emerald-50 border-emerald-500' : type === 'oneToMany' ? 'bg-rose-50 border-rose-500' : 'bg-amber-50 border-amber-500'}`}>
                <h5 className={`font-bold mb-1 transition-colors duration-500 ${type === 'function' || type === 'manyToOne' ? 'text-emerald-900' : type === 'oneToMany' ? 'text-rose-900' : 'text-amber-900'}`}>
                    {type === 'function' || type === 'manyToOne' ? '✅ Is a Function' : '❌ Not a Function'}
                </h5>
                <p className="text-xs text-slate-600">
                    {type === 'function' && 'One-to-One mapping: Every input has a unique output. Perfect!'}
                    {type === 'manyToOne' && 'Many-to-One: Both 1 and 2 point to "a". This is ALLOWED! As long as each input has only ONE arrow leaving it, it is a function.'}
                    {type === 'oneToMany' && 'One-to-Many: Input (1) has two arrows leaving it! Violation of functions rule.'}
                    {type === 'incomplete' && 'Wait! Input (3) has no arrow. A function must assign an output to EVERY input in Domain.'}
                </p>
            </div>
        </div>
    );
}
