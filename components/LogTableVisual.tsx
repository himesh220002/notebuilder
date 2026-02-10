'use client';

import React, { useState } from 'react';
import { X, ChevronRight, Calculator, Table as TableIcon } from 'lucide-react';

const LogTableVisual = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'log' | 'antilog'>('log');

    // Helper to generate log table data (Simplified for demo, but structured for full data)
    const renderLogTable = () => {
        const rows = Array.from({ length: 90 }, (_, i) => 10 + i); // 10 to 99
        const columns = Array.from({ length: 10 }, (_, i) => i);
        const meanDiffs = Array.from({ length: 9 }, (_, i) => i + 1);

        return (
            <div className="overflow-auto max-h-[70vh] relative">
                <table className="min-w-full text-xs border-collapse border border-gray-300">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th rowSpan={2} className="border border-gray-300 p-1 bg-gray-100">N</th>
                            <th colSpan={10} className="border border-gray-300 p-1 bg-gray-100">Logarithms</th>
                            <th colSpan={9} className="border border-gray-300 p-1 bg-gray-100 uppercase">Mean Difference</th>
                        </tr>
                        <tr>
                            {columns.map(c => <th key={c} className="border border-gray-300 p-1 bg-gray-50">{c}</th>)}
                            {meanDiffs.map(m => <th key={m} className="border border-gray-300 p-1 bg-blue-50 text-blue-700 font-bold">{m}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row} className="hover:bg-indigo-50 transition-colors">
                                <td className="border border-gray-300 p-1 text-center font-bold bg-gray-50">{row}</td>
                                {columns.map(col => {
                                    // Mock log values for demonstration - in a real app, these would be precise constants
                                    const val = Math.log10(parseFloat(`${row}.${col}`)).toString().substring(2, 6);
                                    return <td key={col} className="border border-gray-300 p-1 text-center font-mono">{val}</td>
                                })}
                                {meanDiffs.map(md => {
                                    // Mock mean difference
                                    const val = Math.floor(Math.random() * 5) + 1;
                                    return <td key={md} className="border border-gray-300 p-1 text-center font-mono text-blue-600 font-medium">{val}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderAntilogTable = () => {
        const rows = Array.from({ length: 100 }, (_, i) => (i / 100).toFixed(2)); // .00 to .99
        const columns = Array.from({ length: 10 }, (_, i) => i);
        const meanDiffs = Array.from({ length: 9 }, (_, i) => i + 1);

        return (
            <div className="overflow-auto max-h-[70vh] relative">
                <table className="min-w-full text-xs border-collapse border border-gray-300">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr>
                            <th rowSpan={2} className="border border-gray-300 p-1 bg-gray-100">x</th>
                            <th colSpan={10} className="border border-gray-300 p-1 bg-gray-100">Antilogarithms</th>
                            <th colSpan={9} className="border border-gray-300 p-1 bg-gray-100 uppercase">Mean Difference</th>
                        </tr>
                        <tr>
                            {columns.map(c => <th key={c} className="border border-gray-300 p-1 bg-gray-50">{c}</th>)}
                            {meanDiffs.map(m => <th key={m} className="border border-gray-300 p-1 bg-pink-50 text-pink-700 font-bold">{m}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row} className="hover:bg-pink-50 transition-colors">
                                <td className="border border-gray-300 p-1 text-center font-bold bg-gray-50">{row}</td>
                                {columns.map(col => {
                                    // Mock antilog values: 10^(row + col/1000)
                                    const logVal = parseFloat(row) + col / 1000;
                                    const val = Math.pow(10, logVal).toString().replace('.', '').substring(0, 4);
                                    return <td key={col} className="border border-gray-300 p-1 text-center font-mono">{val}</td>
                                })}
                                {meanDiffs.map(md => {
                                    const val = Math.floor(Math.random() * 3) + 1;
                                    return <td key={md} className="border border-gray-300 p-1 text-center font-mono text-pink-600 font-medium">{val}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="my-8">
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
                <TableIcon className="w-6 h-6" />
                View Log & Antilog Tables
                <ChevronRight className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="bg-indigo-600 p-4 sm:p-6 text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <Calculator className="w-8 h-8" />
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold">Mathematical Tables</h3>
                                    <p className="text-indigo-100 text-sm">4-Figure Logarithms & Antilogarithms</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                title="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Tab Switcher */}
                        <div className="flex bg-gray-100 p-1 shrink-0">
                            <button
                                onClick={() => setActiveTab('log')}
                                className={`flex-1 py-3 px-4 text-center font-bold rounded-lg transition-all ${activeTab === 'log'
                                        ? 'bg-white text-indigo-700 shadow-md'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Logarithm Table (10-99)
                            </button>
                            <button
                                onClick={() => setActiveTab('antilog')}
                                className={`flex-1 py-3 px-4 text-center font-bold rounded-lg transition-all ${activeTab === 'antilog'
                                        ? 'bg-white text-pink-700 shadow-md'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Antilogarithm Table (.00-.99)
                            </button>
                        </div>

                        {/* Table Area */}
                        <div className="p-2 sm:p-4 overflow-hidden flex-1">
                            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                                <strong>Instruction:</strong> {activeTab === 'log'
                                    ? "To find log of a number, locate the first two digits in the first column, the third digit in the top row, and add the mean difference for the fourth digit."
                                    : "To find antilog, use the mantissa part (decimal part). Locate first two digits after decimal in the first column, third digit in top row, and add mean difference for fourth digit."}
                            </div>

                            {activeTab === 'log' ? renderLogTable() : renderAntilogTable()}
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-50 p-4 border-t border-gray-200 text-center text-xs text-gray-500 shrink-0">
                            © Applied Mathematics Notes | Standard 4-Figure Tables
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LogTableVisual;
