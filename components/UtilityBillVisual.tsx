'use client';

import React, { useState } from 'react';
import { Zap, Activity, Calculator, Info, Landmark, Receipt, ArrowRight } from 'lucide-react';
import MathText from "@/components/MathText";

const UtilityBillVisual = () => {
    const [units, setUnits] = useState(250);
    const fixedCharge = 150;
    const taxRate = 0.05; // 5% Energy Tax
    const surchargeRate = 0.08; // 8% Surcharge on energy charge

    // Delhi-style Slab structure (example)
    const slab1 = { limit: 200, rate: 3.00 }; // 0-200 units
    const slab2 = { limit: 400, rate: 4.50 }; // 201-400 units
    const slab3 = { limit: Infinity, rate: 6.50 }; // 400+ units

    const calculateEnergyCharge = (u: number) => {
        let charge = 0;
        let remaining = u;

        // Slab 1
        const u1 = Math.min(remaining, slab1.limit);
        charge += u1 * slab1.rate;
        remaining -= u1;

        // Slab 2
        if (remaining > 0) {
            const u2 = Math.min(remaining, slab2.limit - slab1.limit);
            charge += u2 * slab2.rate;
            remaining -= u2;
        }

        // Slab 3
        if (remaining > 0) {
            charge += remaining * slab3.rate;
        }

        return charge;
    };

    const energyCharge = calculateEnergyCharge(units);
    const surcharge = energyCharge * surchargeRate;
    const tax = energyCharge * taxRate;
    const totalBill = energyCharge + fixedCharge + surcharge + tax;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-amber-500 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Zap className="w-6 h-6 text-white" />
                        <h3 className="text-xl font-bold">Electricity Bill Visualizer</h3>
                    </div>
                    <p className="text-amber-100 text-xs">Simulate slab-based billing with taxes and surcharges.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between mb-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Units Consumed: {units} kWh</label>
                            </div>
                            <input
                                type="range" min="0" max="1000" step="10"
                                value={units} onChange={(e) => setUnits(Number(e.target.value))}
                                className="w-full accent-amber-500"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                                <span>0 units</span>
                                <span>1000 units</span>
                            </div>
                        </div>

                        {/* Slab Visualization */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                            <h4 className="text-xs font-black text-slate-900 uppercase mb-6 flex items-center gap-2">
                                <Activity className="w-4 h-4 text-amber-500" />
                                Consumption Slab Impact
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 text-right text-[10px] font-black text-slate-400">0-200</div>
                                    <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-emerald-400 transition-all duration-500" style={{ width: `${Math.min(100, (units / 200) * 100)}%` }} />
                                    </div>
                                    <div className="w-16 text-[10px] font-bold text-slate-500">₹{slab1.rate}/u</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 text-right text-[10px] font-black text-slate-400">201-400</div>
                                    <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-400 transition-all duration-500" style={{ width: units > 200 ? `${Math.min(100, ((Math.min(units, 400) - 200) / 200) * 100)}%` : '0%' }} />
                                    </div>
                                    <div className="w-16 text-[10px] font-bold text-slate-500">₹{slab2.rate}/u</div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 text-right text-[10px] font-black text-slate-400">400+</div>
                                    <div className="flex-1 h-3 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-rose-500 transition-all duration-500" style={{ width: units > 400 ? `${Math.min(100, ((units - 400) / 600) * 100)}%` : '0%' }} />
                                    </div>
                                    <div className="w-16 text-[10px] font-bold text-slate-500">₹{slab3.rate}/u</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Landmark className="w-32 h-32" />
                            </div>
                            <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest block mb-1">Total Bill Estimate</span>
                            <div className="text-4xl font-black mb-8">₹{totalBill.toFixed(2)}</div>

                            <div className="space-y-4 text-xs font-bold relative">
                                <div className="flex justify-between opacity-80">
                                    <span>Energy Charges:</span>
                                    <span>₹{energyCharge.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between opacity-80">
                                    <span>Fixed Charge:</span>
                                    <span>₹{fixedCharge.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-amber-400">
                                    <span>Surcharge (8%):</span>
                                    <span>₹{surcharge.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-amber-400 border-b border-white/10 pb-4">
                                    <span>Energy Tax (5%):</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between pt-4 text-sm font-black text-emerald-400">
                                    <span>Final Payable:</span>
                                    <span>₹{totalBill.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                            <Info className="w-8 h-8 text-amber-600 shrink-0" />
                            <div className="text-[11px] text-amber-900 leading-relaxed font-semibold">
                                <span className="block font-black uppercase mb-1">Calculation Logic</span>
                                The bill is calculated in stages. First, the energy charge is found using progressive slabs. Then, surcharges and taxes are applied to either the base charge or the total energy consumption.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UtilityBillVisual;
