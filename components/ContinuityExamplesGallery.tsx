'use client';

import React from 'react';
import FunctionGraph from './FunctionGraph';
import MathText from './MathText';
import { continuityExamplesData } from '@/app/maths11_notes/chapters/chapter7/data';
import { Info } from 'lucide-react';

const ContinuityExamplesGallery = () => {
    return (
        <div className="space-y-8">
            {continuityExamplesData.map((item, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-sm border overflow-hidden ${item.borderColor}`}>
                    <div className={`p-4 border-b ${item.bgColor} ${item.borderColor} flex justify-between items-center`}>
                        <div>
                            <h3 className={`font-bold text-lg ${item.color}`}>{item.title}</h3>
                            <div className="text-sm font-mono text-gray-700 mt-1">
                                <MathText text={item.func} />
                            </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.bgColor} ${item.color} border border-current opacity-80`}>
                            {item.type}
                        </div>
                    </div>

                    <div className="p-6 grid md:grid-cols-2 gap-8 items-center">
                        {/* Graph */}
                        <div className="w-full">
                            <FunctionGraph type={item.type} title={`Graph of ${item.title}`} />
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-gray-700 text-sm mb-1 uppercase tracking-wide">Domain</h4>
                                <p className="text-gray-800 bg-gray-50 p-3 rounded border border-gray-100">
                                    <MathText text={item.domain} />
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700 text-sm mb-1 uppercase tracking-wide">Continuity Status</h4>
                                <div className={`p-4 rounded border-l-4 ${item.borderColor} bg-opacity-30 ${item.bgColor} text-gray-800 text-sm leading-relaxed`}>
                                    <div className="flex gap-2 items-start">
                                        <Info className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
                                        <span><MathText text={item.continuity} /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContinuityExamplesGallery;
