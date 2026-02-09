'use client';

import React, { useState } from 'react';
import { Droplets, Flame, Receipt, Calculator, Waves, Wind, ShieldAlert } from 'lucide-react';
import MathText from "@/components/MathText";

const PNGWaterVisual = () => {
    const [waterUsage, setWaterUsage] = useState(25); // in kilolitres
    const [gasUsage, setGasUsage] = useState(30); // in SCM

    // Water Rates
    const waterRate = 12; // per kl
    const sewerageChargeRate = 0.60; // 60% of water charge
    const waterTaxRate = 0.20; // 20% of water charge

    // Gas Rates
    const gasTariff = 45; // per SCM
    const gasFixed = 100;

    const waterBase = waterUsage * waterRate;
    const waterTotal = waterBase + (waterBase * sewerageChargeRate) + (waterBase * waterTaxRate);

    const gasBase = gasUsage * gasTariff;
    const gasTotal = gasBase + gasFixed;

    return (
        <div className="my-16 space-y-12">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Water Bill Visual */}
                <div className="bg-white rounded-[3rem] shadow-2xl border border-sky-100 overflow-hidden group">
                    <div className="bg-sky-500 p-8 text-white relative">
                        <Waves className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 opacity-20 group-hover:rotate-12 transition-transform" />
                        <div className="flex items-center gap-4 mb-2">
                            <Droplets className="w-8 h-8" />
                            <h3 className="text-2xl font-black italic">Water Meter</h3>
                        </div>
                        <p className="text-sky-100 font-bold text-sm tracking-tight uppercase">kl (Kilolitre) Consumption</p>
                    </div>

                    <div className="p-10 space-y-10">
                        <div>
                            <div className="flex justify-between mb-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Usage: {waterUsage} kl</span>
                            </div>
                            <input
                                type="range" min="0" max="100" step="1"
                                value={waterUsage} onChange={(e) => setWaterUsage(Number(e.target.value))}
                                className="w-full accent-sky-500"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-sky-50 rounded-2xl">
                                <span className="text-xs font-bold text-slate-600">Base Charge (₹{waterRate}/kl):</span>
                                <span className="text-sm font-black text-sky-700">₹{waterBase.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center px-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase">Sewerage (60%):</span>
                                <span className="text-[10px] font-black text-slate-400">₹{(waterBase * sewerageChargeRate).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 border-b border-sky-100 pb-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase">Water Tax (20%):</span>
                                <span className="text-[10px] font-black text-slate-400">₹{(waterBase * waterTaxRate).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-sm font-black text-slate-900 italic underline decoration-sky-300">Total Payable:</span>
                                <span className="text-xl font-black text-sky-600 underline decoration-sky-300">₹{waterTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PNG Gas Bill Visual */}
                <div className="bg-white rounded-[3rem] shadow-2xl border border-orange-100 overflow-hidden group">
                    <div className="bg-orange-500 p-8 text-white relative">
                        <Flame className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 opacity-20 group-hover:scale-110 transition-transform" />
                        <div className="flex items-center gap-4 mb-2">
                            <Wind className="w-8 h-8" />
                            <h3 className="text-2xl font-black italic">PNG Terminal</h3>
                        </div>
                        <p className="text-orange-100 font-bold text-sm tracking-tight uppercase">SCM Consumption</p>
                    </div>

                    <div className="p-10 space-y-10">
                        <div>
                            <div className="flex justify-between mb-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Usage: {gasUsage} SCM</span>
                            </div>
                            <input
                                type="range" min="0" max="200" step="1"
                                value={gasUsage} onChange={(e) => setGasUsage(Number(e.target.value))}
                                className="w-full accent-orange-500"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-2xl">
                                <span className="text-xs font-bold text-slate-600">Energy (₹{gasTariff}/SCM):</span>
                                <span className="text-sm font-black text-orange-700">₹{gasBase.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center px-4 border-b border-orange-100 pb-4">
                                <span className="text-[10px] font-black text-slate-400 uppercase">Fixed Service Charge:</span>
                                <span className="text-[10px] font-black text-slate-500">₹{gasFixed.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-4">
                                <span className="text-sm font-black text-slate-900 italic underline decoration-orange-300">Estimate Total:</span>
                                <span className="text-xl font-black text-orange-600 underline decoration-orange-300">₹{gasTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <ShieldAlert className="w-48 h-48" />
                </div>
                <h4 className="text-2xl font-black mb-8 italic flex items-center gap-3">
                    <Receipt className="w-8 h-8 text-emerald-400" />
                    Technical Glossary
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-emerald-400 uppercase mb-2 block tracking-[0.2em]">Connection Fee</span>
                        <p className="text-xs font-bold text-slate-400 leading-relaxed italic">The initial one-time deposit or registration fee required to establish a utility account.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="text-[10px] font-black text-sky-400 uppercase mb-2 block tracking-[0.2em]">Security Deposit</span>
                        <p className="text-xs font-bold text-slate-400 leading-relaxed">A refundable amount held against potential defaults, often based on estimated monthly usage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PNGWaterVisual;
