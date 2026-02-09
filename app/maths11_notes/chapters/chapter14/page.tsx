'use client';

import React from 'react';
import {
    Calculator,
    Truck,
    Landmark,
    ShieldCheck,
    GraduationCap,
    ChevronRight,
    Info,
    Wallet,
    Target,
    Zap,
    Shapes,
    PieChart,
    ArrowRightLeft,
    HandCoins,
    Gem
} from "lucide-react";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import GSTFlowVisual from "@/components/GSTFlowVisual";
import IncomeTaxVisual from "@/components/IncomeTaxVisual";
import { taxationData, problems, examProblems } from "./data";

export default function TaxationChapter() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] font-sans text-slate-900">
            <ChapterNavbar currentChapter={14} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Modern Hero Section */}
                <header className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-emerald-200 shadow-sm">
                        <Calculator className="w-4 h-4" />
                        Class 11 Applied Mathematics
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        Taxation & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-indigo-600 to-sky-600 italic">Financial Plan</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Mastering GST supply chains, income tax slabs, and legal deductions to understand how a nation finances its growth.
                    </p>
                </header>

                {/* 1. GST Section */}
                <section className="mb-28">
                    <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Truck className="w-64 h-64 text-emerald-900" />
                        </div>

                        <div className="flex items-center gap-6 mb-16 relative">
                            <div className="w-20 h-20 bg-emerald-900 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-2xl rotate-3">1</div>
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 italic">GST Essentials</h2>
                                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Goods and Service Tax</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-1 gap-16">
                            <div className="space-y-8">
                                <NoteCard
                                    title="What is GST?"
                                    content={taxationData.gst.definition}
                                    type="info"
                                />

                                <div className="grid md:grid-cols-3 gap-6 font-bold">
                                    {taxationData.gst.types.map((type, idx) => (
                                        <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors group">
                                            <div className="text-emerald-600 text-sm mb-2 group-hover:scale-110 transition-transform">{type.name}</div>
                                            <div className="text-xs text-slate-400 mb-2 uppercase tracking-tighter">{type.full}</div>
                                            <p className="text-[11px] text-slate-600 leading-relaxed italic">{type.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                <GSTFlowVisual />

                                <div className="p-8 bg-indigo-900 rounded-3xl text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <ArrowRightLeft className="w-32 h-32" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-6 italic underline decoration-indigo-400 decoration-4 underline-offset-8">Input Tax Credit (ITC)</h3>
                                    <p className="text-indigo-200 mb-8 max-w-2xl font-medium">
                                        The biggest advantage of GST is the removal of the cascading effect of taxes. A dealer only pays tax on the **value added** by them.
                                    </p>
                                    <div className="flex items-center gap-4  m-1 p-3 bg-indigo-300 rounded-2xl w-fit mb-8">
                                        <FormulaBlock
                                            formula={taxationData.gst.itcFormula}
                                            title="GST Payable Logic"
                                        />
                                    </div>

                                    {/* GST Solved Example */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                        <h4 className="text-xl font-black text-indigo-300 mb-4 flex items-center gap-2 italic">
                                            <Zap className="w-5 h-5" /> Detailed GST Example
                                        </h4>
                                        <div className="space-y-4 text-sm font-medium">
                                            <p className="text-indigo-100">**Problem:** A retailer buys an article from a wholesaler for ₹10,000 and sells it to a consumer at 20% profit. If GST is 12%, calculate the net CGST and SGST paid by the retailer.</p>
                                            <div className="bg-black/20 p-6 rounded-xl space-y-3">
                                                <div className="flex gap-3">
                                                    <span className="text-indigo-400 font-bold shrink-0">Step 1:</span>
                                                    <div>
                                                        <p className="text-indigo-200 text-xs mb-1">Wholesaler selling to Retailer (Input Tax)</p>
                                                        <MathText text="CP for Retailer = ₹10,000. Sub-GST = $12\% \text{ of } 10,000 = ₹1,200$" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <span className="text-indigo-400 font-bold shrink-0">Step 2:</span>
                                                    <div>
                                                        <p className="text-indigo-200 text-xs mb-1">Retailer selling to Consumer (Output Tax)</p>
                                                        <MathText text="SP = $10,000 + 20\% = ₹12,000$. Out-GST = $12\% \text{ of } 12,000 = ₹1,440$" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <span className="text-indigo-400 font-bold shrink-0">Step 3:</span>
                                                    <div>
                                                        <p className="text-indigo-200 text-xs mb-1">Net GST Calculation</p>
                                                        <MathText text="Payable = Output - ITC = $1,440 - 1,200 = ₹240$" />
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 border-t border-white/10 pt-3 mt-3">
                                                    <span className="text-emerald-400 font-bold shrink-0">Result:</span>
                                                    <span className="text-emerald-300 font-black">Net CGST = ₹120, Net SGST = ₹120</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Income Tax Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Income Tax Framework</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {taxationData.incomeTax.terms.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="text-indigo-600 font-black text-xs uppercase mb-3 tracking-widest">{item.term}</div>
                                <p className="text-sm text-slate-600 font-semibold leading-relaxed">{item.definition}</p>
                            </div>
                        ))}
                    </div>

                    <IncomeTaxVisual />

                    {/* Deductions Bento Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 mt-20">
                        <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl relative group">
                            <div className="absolute top-0 right-0 p-10 opacity-5">
                                <Gem className="w-48 h-48 text-indigo-900" />
                            </div>
                            <h3 className="text-3xl font-black mb-10 flex items-center gap-3">
                                <ShieldCheck className="w-8 h-8 text-indigo-600" />
                                Smart Deductions
                            </h3>
                            <div className="grid gap-6">
                                {taxationData.incomeTax.deductions.map((d, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-indigo-100 hover:bg-white transition-all">
                                        <div className="w-20 text-indigo-600 font-black text-xs uppercase pt-1">{d.section}</div>
                                        <div>
                                            <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Limit: {d.limit}</div>
                                            <p className="text-sm text-slate-700 font-bold italic">{d.items}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                                <div className="absolute bottom-0 right-0 p-10 opacity-10">
                                    <HandCoins className="w-64 h-64 text-emerald-400" />
                                </div>
                                <h3 className="text-3xl font-black mb-8 italic text-emerald-400 flex items-center gap-3">
                                    <Calculator className="w-6 h-6" /> Method & Example
                                </h3>
                                <div className="space-y-6 relative mb-12">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-black text-xs shrink-0">1</div>
                                        <p className="font-bold">Gross Income minus Standard Deduction (₹50,000).</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center font-black text-xs shrink-0">2</div>
                                        <p className="font-bold">Subtract legal deductions (80C, 80D, etc.).</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-black text-xs shrink-0">3</div>
                                        <p className="font-bold">Apply Slab Rates + 4% Cess on tax.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
                                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Solved Illustration</span>
                                    <div className="text-sm space-y-4">
                                        <p className="text-slate-300 leading-relaxed font-semibold">Mr. Aryan has Gross Income of ₹8,00,000. He invests ₹1,50,000 in 80C. Calculate Net Tax.</p>
                                        <div className="space-y-3 font-bold">
                                            <div className="flex justify-between text-slate-400"><span>1. Gross Total:</span> <span>₹8,00,000</span></div>
                                            <div className="flex justify-between text-rose-400"><span>2. Std. Deduction:</span> <span>- ₹50,000</span></div>
                                            <div className="flex justify-between text-rose-400"><span>3. 80C Ded:</span> <span>- ₹1,50,000</span></div>
                                            <div className="flex justify-between text-emerald-400 border-t border-white/10 pt-2"><span>4. Net Taxable:</span> <span>₹6,00,000</span></div>

                                            <div className="bg-black/30 p-4 rounded-xl space-y-2 mt-4 text-xs">
                                                <div className="flex justify-between"><span>0 - 2.5L:</span> <span>Nil</span></div>
                                                <div className="flex justify-between"><span>2.5 - 5L (5%):</span> <span>₹12,500</span></div>
                                                <div className="flex justify-between"><span>5 - 6L (20%):</span> <span>₹20,000</span></div>
                                                <div className="flex justify-between border-t border-white/10 pt-2"><span>Base Tax:</span> <span>₹32,500</span></div>
                                                <div className="flex justify-between text-amber-400"><span>4% Cess:</span> <span>₹1,300</span></div>
                                                <div className="flex justify-between text-emerald-400 font-black text-sm pt-2"><span>Total Tax:</span> <span>₹33,800</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Practice Zone */}
                <section className="mb-28">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                        <div>
                            <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] block mb-2">Finance Laboratory</span>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic">Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-indigo-500">Calculus</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block" />
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">8 Important Problems</div>
                            <div className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">CBSE Exam Type</div>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter14" title="Accounting Zone" />

                    <div className="mt-24 space-y-12">
                        <header className="text-center">
                            <h3 className="text-3xl font-black text-slate-900 mb-2 italic">Competitive Corner</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest underline decoration-emerald-200 underline-offset-4">Board & Previous Year Questions</p>
                        </header>
                        <div className="grid md:grid-cols-2 gap-8">
                            {examProblems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-emerald-200 transition-all hover:shadow-2xl relative group">
                                    <div className="absolute top-0 right-0 p-6">
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-[10px] font-black uppercase tracking-tighter ring-1 ring-emerald-200">
                                            {prob.examTag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-8 pr-20 leading-snug">{prob.question}</h4>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600">
                                        <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest block mb-4">Master Solution</span>
                                        <MathText text={prob.solution} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
