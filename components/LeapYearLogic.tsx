'use client';

import React from 'react';
import { HelpCircle, CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const LeapYearLogic = () => {
    return (
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden my-8">
            <div className="p-8 lg:p-10">
                <header className="text-center mb-12">
                    <h3 className="text-2xl font-black text-slate-900 italic mb-2">Leap Year Checker</h3>
                    <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">Step-by-Step Decision Logic</p>
                </header>

                <div className="flex flex-col items-center space-y-6 max-w-md mx-auto relative">
                    {/* Step 1 */}
                    <div className="w-full">
                        <div className="bg-indigo-600 text-white p-6 rounded-3xl shadow-lg border-2 border-indigo-400 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-500/50 rounded-xl flex items-center justify-center font-black text-lg shadow-inner">1</div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-1">Condition</p>
                                    <h4 className="font-black text-lg">Divisible by 4?</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-4 px-4">
                        <div className="flex-1 bg-rose-50 border border-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center gap-2">
                            <span className="text-[10px] font-black text-rose-400 uppercase">NO</span>
                            <div className="flex items-center gap-2 text-rose-700 font-black text-sm">
                                <XCircle className="w-4 h-4" /> Ordinary Year
                            </div>
                        </div>
                        <div className="flex-[2] bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex flex-col items-center justify-center gap-2">
                            <span className="text-[10px] font-black text-emerald-400 uppercase">YES</span>
                            <div className="flex items-center gap-2 text-emerald-700 font-black text-sm">
                                <CheckCircle2 className="w-4 h-4" /> Continue to Step 2
                            </div>
                        </div>
                    </div>

                    <ArrowDown className="w-6 h-6 text-slate-300" />

                    {/* Step 2 */}
                    <div className="w-full">
                        <div className="bg-amber-500 text-white p-6 rounded-3xl shadow-lg border-2 border-amber-400 relative z-10 transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-amber-400/50 rounded-xl flex items-center justify-center font-black text-lg shadow-inner">2</div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-amber-200 tracking-widest mb-1">Check Century</p>
                                    <h4 className="font-black text-lg">Ends with "00"?</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-4 px-4">
                        <div className="flex-1 bg-emerald-500 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-emerald-100">
                            <span className="text-[10px] font-black text-emerald-200 uppercase">NO</span>
                            <div className="flex items-center gap-2 font-black text-sm">
                                <CheckCircle2 className="w-4 h-4" /> Leap Year
                            </div>
                        </div>
                        <div className="flex-[2] bg-slate-100 border border-slate-200 p-4 rounded-2xl flex flex-col items-center justify-center gap-2">
                            <span className="text-[10px] font-black text-slate-400 uppercase">YES</span>
                            <div className="flex items-center gap-2 text-slate-700 font-black text-sm">
                                <CheckCircle2 className="w-4 h-4" /> Check Rule 3
                            </div>
                        </div>
                    </div>

                    <ArrowDown className="w-6 h-6 text-slate-300" />

                    {/* Step 3 */}
                    <div className="w-full">
                        <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg border-2 border-slate-700 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center font-black text-lg shadow-inner">3</div>
                                <div>
                                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Century Rule</p>
                                    <h4 className="font-black text-lg">Divisible by 400?</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-4 px-4 pb-4">
                        <div className="flex-1 bg-rose-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-rose-100">
                            <span className="text-[10px] font-black text-rose-300 uppercase">NO</span>
                            <div className="flex items-center gap-2 font-black text-sm">
                                <XCircle className="w-4 h-4" /> Ordinary
                            </div>
                        </div>
                        <div className="flex-1 bg-emerald-600 text-white p-4 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg shadow-emerald-100">
                            <span className="text-[10px] font-black text-emerald-300 uppercase">YES</span>
                            <div className="flex items-center gap-2 font-black text-sm">
                                <CheckCircle2 className="w-4 h-4" /> Leap Year
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 p-5 bg-slate-50 rounded-3xl border border-slate-100 font-bold text-[10px]">
                    <div className="flex gap-2 items-center bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">✔</div>
                        <p className="leading-tight">2024 is div. by 4 but not 100 → <span className="text-emerald-600 font-black">Leap</span></p>
                    </div>
                    <div className="flex gap-2 items-center bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-6 h-6 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center shrink-0">✘</div>
                        <p className="leading-tight">1900 is div. by 100 but not 400 → <span className="text-rose-600 font-black">Ordinary</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeapYearLogic;
