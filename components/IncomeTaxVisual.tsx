'use client';

import React, { useState } from 'react';
import { Calculator, Wallet, ShieldCheck, Heart, GraduationCap, Gift, Landmark, Activity, Info } from 'lucide-react';
import MathText from "@/components/MathText";

const IncomeTaxVisual = () => {
    const [income, setIncome] = useState(1200000); // 12 Lakh
    const [section80C, setSection80C] = useState(150000);
    const [section80D, setSection80D] = useState(25000);
    const [standardDeduction] = useState(50000);
    const [homeLoanInt, setHomeLoanInt] = useState(0);

    // Calculate Taxable Income
    const totalDeductions = Math.min(section80C, 150000) + section80D + standardDeduction + Math.min(homeLoanInt, 200000);
    const taxableIncome = Math.max(0, income - totalDeductions);

    // Simplified Tax Slab (Old Regime Style for educational purpose)
    const calculateTax = (amt: number) => {
        let tax = 0;
        if (amt <= 250000) return 0;

        // 2.5L to 5L @ 5%
        if (amt > 250000) {
            const chunk = Math.min(amt, 500000) - 250000;
            tax += chunk * 0.05;
        }

        // 5L to 10L @ 20%
        if (amt > 500000) {
            const chunk = Math.min(amt, 1000000) - 500000;
            tax += chunk * 0.20;
        }

        // Above 10L @ 30%
        if (amt > 1000000) {
            const chunk = amt - 1000000;
            tax += chunk * 0.30;
        }

        return tax;
    };

    const baseTax = calculateTax(taxableIncome);
    const cess = baseTax * 0.04;
    const totalTax = baseTax + cess;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-indigo-900 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Landmark className="w-6 h-6 text-indigo-400" />
                        <h3 className="text-xl font-bold">Tax Impact visualizer</h3>
                    </div>
                    <p className="text-indigo-300 text-sm">See how deductions reduce your taxable income and final tax liability.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <div className="mb-6">
                                <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Annual Gross Income: ₹{(income / 100000).toFixed(1)} Lakh</label>
                                <input
                                    type="range" min="300000" max="2500000" step="50000"
                                    value={income} onChange={(e) => setIncome(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase">Section 80C (PPF, LIC, ELSS)</label>
                                        <span className="text-[10px] font-bold text-indigo-600">Max 1.5L</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="150000" step="5000"
                                        value={section80C} onChange={(e) => setSection80C(Number(e.target.value))}
                                        className="w-full accent-indigo-400"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase">Section 80D (Health Insurance)</label>
                                        <span className="text-[10px] font-bold text-emerald-600">Standard 25k</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="50000" step="5000"
                                        value={section80D} onChange={(e) => setSection80D(Number(e.target.value))}
                                        className="w-full accent-emerald-500"
                                    />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-[10px] font-black text-slate-400 uppercase">Home Loan Interest (Sec 24)</label>
                                        <span className="text-[10px] font-bold text-amber-600">Max 2L</span>
                                    </div>
                                    <input
                                        type="range" min="0" max="200000" step="5000"
                                        value={homeLoanInt} onChange={(e) => setHomeLoanInt(Number(e.target.value))}
                                        className="w-full accent-amber-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
                            <Info className="w-6 h-6 text-blue-500 shrink-0" />
                            <div className="text-xs text-blue-800 leading-relaxed font-medium">
                                <span className="font-black uppercase text-[10px] block mb-1">Standard Deduction</span>
                                A flat deduction of ₹50,000 is available to all salaried employees, regardless of any actual investment.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-slate-900 rounded-[2rem] text-white">
                                <span className="block text-[10px] font-black text-indigo-400 uppercase mb-2">Taxable Income</span>
                                <div className="text-2xl font-black">₹{taxableIncome.toLocaleString()}</div>
                                <div className="text-[10px] text-slate-500 font-bold mt-2 italic underline decoration-indigo-500/30 underline-offset-4">After Deductions</div>
                            </div>
                            <div className="p-6 bg-indigo-600 rounded-[2rem] text-white shadow-xl shadow-indigo-100">
                                <span className="block text-[10px] font-black text-indigo-200 uppercase mb-2">Total Tax Payable</span>
                                <div className="text-2xl font-black">₹{totalTax.toLocaleString()}</div>
                                <div className="text-[10px] text-indigo-300 font-bold mt-2 italic">Incl. 4% Cess</div>
                            </div>
                        </div>

                        <div className="flex-1 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                            <h4 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-emerald-500" />
                                Tax Liability Breakdown
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 text-right text-[10px] font-bold text-slate-400">0-2.5L</div>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-400" style={{ width: '100%' }} />
                                    </div>
                                    <div className="w-12 text-[10px] font-black text-emerald-600">Exempt</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 text-right text-[10px] font-bold text-slate-400">2.5-5L</div>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-400 transition-all duration-500" style={{ width: taxableIncome > 250000 ? `${Math.min(100, ((Math.min(taxableIncome, 500000) - 250000) / 250000) * 100)}%` : '0%' }} />
                                    </div>
                                    <div className="w-12 text-[10px] font-black text-slate-600">5%</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 text-right text-[10px] font-bold text-slate-400">5-10L</div>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-violet-500 transition-all duration-500" style={{ width: taxableIncome > 500000 ? `${Math.min(100, ((Math.min(taxableIncome, 1000000) - 500000) / 500000) * 100)}%` : '0%' }} />
                                    </div>
                                    <div className="w-12 text-[10px] font-black text-slate-600">20%</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 text-right text-[10px] font-bold text-slate-400">10L+</div>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: taxableIncome > 1000000 ? `${Math.min(100, ((taxableIncome - 1000000) / 1500000) * 100)}%` : '0%' }} />
                                    </div>
                                    <div className="w-12 text-[10px] font-black text-slate-600">30%</div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-slate-50 rounded-2xl text-[10px] font-medium text-slate-500 leading-relaxed italic border border-slate-100">
                                Note: This visualization uses the **Old Tax Regime** slabs for better pedagogical understanding of deductions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeTaxVisual;
