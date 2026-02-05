'use client';

import { ArrowRight } from 'lucide-react';

export default function CompositeFunctionVisual() {
    return (
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h5 className="font-bold text-gray-700 mb-6">Composite Function Machine ($g \circ f$)</h5>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                {/* Step 1: Input x */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-300 font-bold text-blue-800">
                        x
                    </div>
                    <span className="text-sm text-gray-500 mt-2">Input</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-gray-400 w-6 h-6" />

                {/* Step 2: Function f */}
                <div className="flex flex-col items-center relative group">
                    <div className="w-24 h-24 bg-indigo-50 rounded-lg border-2 border-indigo-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-center p-1">
                            Process f
                        </div>
                        <span className="font-bold text-xl text-indigo-700">f</span>
                    </div>
                    <span className="text-sm font-bold text-indigo-900 mt-2">Function f</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-gray-400 w-6 h-6" />

                {/* Step 3: f(x) */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-12 rounded-lg bg-purple-100 flex items-center justify-center border-2 border-purple-300 font-bold text-purple-800 px-3">
                        f(x)
                    </div>
                    <span className="text-sm text-gray-500 mt-2">Output of f</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-gray-400 w-6 h-6" />

                {/* Step 4: Function g */}
                <div className="flex flex-col items-center relative group">
                    <div className="w-24 h-24 bg-pink-50 rounded-lg border-2 border-pink-200 flex items-center justify-center shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-pink-100 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-center p-1">
                            Process g
                        </div>
                        <span className="font-bold text-xl text-pink-700">g</span>
                    </div>
                    <span className="text-sm font-bold text-pink-900 mt-2">Function g</span>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-gray-400 w-6 h-6" />

                {/* Step 5: g(f(x)) */}
                <div className="flex flex-col items-center">
                    <div className="w-auto min-w-[60px] h-12 rounded-lg bg-green-100 flex items-center justify-center border-2 border-green-300 font-bold text-green-800 px-4">
                        g(f(x))
                    </div>
                    <span className="text-sm text-gray-500 mt-2">Final Output</span>
                </div>
            </div>

            <p className="text-center text-gray-600 mt-8 max-w-lg">
                The input <strong>x</strong> is processed by <strong>f</strong> first, and then the result <strong>f(x)</strong> becomes the input for <strong>g</strong>.
            </p>
        </div>
    );
}
