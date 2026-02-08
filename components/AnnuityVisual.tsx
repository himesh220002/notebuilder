'use client';

import React, { useState } from 'react';
import { Calendar, ArrowRight, Wallet, Info } from 'lucide-react';

const AnnuityVisual = () => {
    const [type, setType] = useState<'regular' | 'due'>('regular');
    const periods = 5;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-indigo-900 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Wallet className="w-6 h-6 text-amber-400" />
                    <h3 className="text-xl font-bold">Annuity Timeline</h3>
                </div>
                <p className="text-indigo-300 text-sm">Visualize timing differences between Regular and Due annuities.</p>
            </div>

            <div className="p-8">
                <div className="flex bg-slate-100 p-1 rounded-2xl w-fit mb-12">
                    <button
                        onClick={() => setType('regular')}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${type === 'regular' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        Regular (End)
                    </button>
                    <button
                        onClick={() => setType('due')}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${type === 'due' ? 'bg-white shadow-md text-indigo-600' : 'text-slate-500 hover:text-slate-800'}`}
                    >
                        Annuity Due (Start)
                    </button>
                </div>

                <div className="relative pt-12 pb-20 overflow-x-auto">
                    {/* Main Timeline Line */}
                    <div className="absolute top-[80px] left-0 right-0 h-1 bg-slate-200 rounded-full" />

                    <div className="flex justify-between items-center min-w-[600px] px-8">
                        {[0, 1, 2, 3, 4, 5].map((p) => {
                            const isPaymentPeriod = type === 'due' ? p < 5 : p > 0;

                            return (
                                <div key={p} className="relative flex flex-col items-center">
                                    {/* Tick */}
                                    <div className="w-1 h-4 bg-slate-400 mb-2 rounded-full" />
                                    <span className="text-xs font-black text-slate-500">T{p}</span>

                                    {/* Payment Marker */}
                                    {isPaymentPeriod && (
                                        <div className="absolute bottom-12 animate-bounce-slow">
                                            <div className="bg-emerald-500 text-white p-3 rounded-2xl shadow-lg border-2 border-white ring-4 ring-emerald-50">
                                                <span className="text-xs font-bold">₹ R</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-emerald-300 mx-auto mt-1 rotate-90" />
                                        </div>
                                    )}

                                    {/* Label */}
                                    <div className="absolute top-10 whitespace-nowrap text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                                        {p === 0 ? "Start" : p === 5 ? "End (N)" : `Period ${p}`}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-inner">
                    <div className="flex gap-4 items-start">
                        <Info className="w-6 h-6 text-indigo-500 shrink-0" />
                        <div>
                            <h4 className="font-bold text-indigo-900 mb-2">
                                {type === 'regular' ? 'Annuity Regular (End of Period)' : 'Annuity Due (Beginning of Period)'}
                            </h4>
                            <p className="text-sm text-indigo-800 leading-relaxed">
                                {type === 'regular'
                                    ? "Payments are made at the end of each interval. T1 is the first payment. Value at T0 is the Present Value (P)."
                                    : "Payments are made at the very start of each interval. T0 is the first payment. There is no payment at T5 (End)."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnuityVisual;
