'use client';

import React, { useState } from 'react';
import { ArrowRight, User, ShoppingCart, Truck, Wallet, Info } from 'lucide-react';
import MathText from "@/components/MathText";

const GSTFlowVisual = () => {
    const [costPrice, setCostPrice] = useState(1000);
    const [markupB, setMarkupB] = useState(500);
    const [markupC, setMarkupC] = useState(300);
    const [gstRate, setGstRate] = useState(18);

    const calculateGST = (amount: number) => (amount * gstRate) / 100;

    // Seller A to Dealer B
    const priceA = costPrice;
    const gstA = calculateGST(priceA);
    const totalA = priceA + gstA;

    // Dealer B to Dealer C
    const priceB = priceA + markupB;
    const gstB = calculateGST(priceB);
    const itcB = gstA; // Input Tax Credit for B
    const netGstB = gstB - itcB;
    const totalB = priceB + gstB;

    // Dealer C to Customer
    const priceC = priceB + markupC;
    const gstC = calculateGST(priceC);
    const itcC = gstB; // Input Tax Credit for C
    const netGstC = gstC - itcC;
    const totalC = priceC + gstC;

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden my-12">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <Truck className="w-6 h-6 text-emerald-400" />
                        <h3 className="text-xl font-bold">GST Supply Chain</h3>
                    </div>
                    <p className="text-slate-400 text-xs">Visualize Input Tax Credit (ITC) from Seller to Consumer.</p>
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    {/* Node A */}
                    <div className="flex-1 w-full p-6 bg-slate-50 rounded-2xl border-2 border-slate-200 text-center relative">
                        <User className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                        <h4 className="font-black text-slate-900 mb-1">Seller A</h4>
                        <div className="text-xs font-bold text-slate-500 mb-4 uppercase">Manufacturer</div>
                        <div className="space-y-1 text-[11px] font-bold">
                            <div className="flex justify-between border-b border-slate-200 pb-1 mb-1"><span>Base:</span> <span>₹{priceA}</span></div>
                            <div className="flex justify-between text-emerald-600"><span>CGST:</span> <span>₹{(gstA / 2).toFixed(0)}</span></div>
                            <div className="flex justify-between text-emerald-600"><span>SGST:</span> <span>₹{(gstA / 2).toFixed(0)}</span></div>
                        </div>
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block">
                            <ArrowRight className="text-slate-300 w-8 h-8" />
                        </div>
                    </div>

                    {/* Node B */}
                    <div className="flex-1 w-full p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-200 text-center relative group">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black rounded-full shadow-lg">ITC: ₹{itcB}</div>
                        <ShoppingCart className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                        <h4 className="font-black text-indigo-900 mb-1">Dealer B</h4>
                        <div className="text-xs font-bold text-indigo-400 mb-4 uppercase">Wholesaler</div>
                        <div className="space-y-1 text-[11px] font-bold">
                            <div className="flex justify-between border-b border-indigo-200 pb-1 mb-1"><span>Base:</span> <span>₹{priceB}</span></div>
                            <div className="flex justify-between text-rose-500"><span>Out CGST:</span> <span>₹{(gstB / 2).toFixed(0)}</span></div>
                            <div className="flex justify-between text-rose-500"><span>Out SGST:</span> <span>₹{(gstB / 2).toFixed(0)}</span></div>
                            <div className="pt-2 border-t border-indigo-200 flex justify-between text-indigo-600 font-black">
                                <span>Net Payable:</span> <span>₹{netGstB.toFixed(0)}</span>
                            </div>
                        </div>
                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block">
                            <ArrowRight className="text-slate-300 w-8 h-8" />
                        </div>
                    </div>

                    {/* Node C */}
                    <div className="flex-1 w-full p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-200 text-center relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-600 text-white text-[10px] font-black rounded-full shadow-lg">Final: ₹{totalC}</div>
                        <Wallet className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                        <h4 className="font-black text-emerald-900 mb-1">Customer</h4>
                        <div className="text-xs font-bold text-emerald-400 mb-4 uppercase">End User</div>
                        <div className="space-y-1 text-[11px] font-bold">
                            <div className="flex justify-between border-b border-emerald-200 pb-1 mb-1"><span>Price:</span> <span>₹{priceC}</span></div>
                            <div className="flex justify-between text-emerald-700"><span>CGST:</span> <span>₹{(gstC / 2).toFixed(0)}</span></div>
                            <div className="flex justify-between text-emerald-700"><span>SGST:</span> <span>₹{(gstC / 2).toFixed(0)}</span></div>
                            <div className="pt-2 border-t border-emerald-200 flex justify-between text-slate-900 font-black">
                                <span>Total Paid:</span> <span>₹{totalC}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-6 bg-indigo-600 rounded-full" />
                            <h4 className="font-black text-slate-900 text-sm uppercase">Adjust Supply Chain</h4>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase">Cost Price (A): ₹{costPrice}</label>
                                </div>
                                <input type="range" min="500" max="5000" step="100" value={costPrice} onChange={(e) => setCostPrice(Number(e.target.value))} className="w-full accent-slate-900" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase">Dealer B Margin: ₹{markupB}</label>
                                </div>
                                <input type="range" min="100" max="2000" step="50" value={markupB} onChange={(e) => setMarkupB(Number(e.target.value))} className="w-full accent-indigo-600" />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase">GST Rate: {gstRate}%</label>
                                </div>
                                <div className="flex gap-2">
                                    {[5, 12, 18, 28].map(r => (
                                        <button key={r} onClick={() => setGstRate(r)} className={`flex-1 py-1 rounded-lg text-[10px] font-black border transition-all ${gstRate === r ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-300'}`}>
                                            {r}%
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="p-6 bg-slate-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Wallet className="w-32 h-32" />
                            </div>
                            <h4 className="text-xl font-black mb-6 flex items-center gap-2 italic">
                                The Logic of ITC
                            </h4>
                            <div className="space-y-4 relative">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <span className="block text-[10px] font-black text-indigo-400 uppercase mb-2">Dealer B Calculation (Intra-state)</span>
                                    <div className="text-sm font-bold">
                                        <MathText text="$\text{Net CGST} = \text{Out CGST} - \text{In CGST}$" />
                                        <div className="mt-2 pt-2 border-t border-white/10">
                                            <MathText text={`$\\text{Payable} = ₹${(gstB / 2).toFixed(0)} - ₹${(gstA / 2).toFixed(0)} = ₹${(netGstB / 2).toFixed(0)}$ (per head)`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <span className="block text-[10px] font-black text-emerald-400 uppercase mb-1">Final Result</span>
                                    <div className="text-sm font-bold leading-relaxed">
                                        <MathText text={`Total CGST to Centre: $₹${(gstC / 2).toFixed(0)}$`} />
                                        <MathText text={`Total SGST to State: $₹${(gstC / 2).toFixed(0)}$`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GSTFlowVisual;
