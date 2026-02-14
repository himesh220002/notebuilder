'use client';

import React from 'react';
import {
    Zap,
    Droplets,
    Flame,
    Calculator,
    Receipt,
    ShieldCheck,
    ArrowRight,
    Info,
    Activity,
    Layout,
    Layers,
    Wind,
    MousePointer2,
    Lightbulb,
    Landmark
} from "lucide-react";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import UtilityBillVisual from "@/components/UtilityBillVisual";
import PNGWaterVisual from "@/components/PNGWaterVisual";
import { utilityData, problems, examProblems } from "./data";

export default function UtilityBillsChapter() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] font-sans text-slate-900">
            <ChapterNavbar currentChapter={15} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Hero Section */}
                <header className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-100 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-200 shadow-sm">
                        <Zap className="w-4 h-4" />
                        Class 11 Applied Mathematics
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        Utility <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 italic">Bills & Tariffs</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Deconstructing the math behind your monthly expenses—from electricity slabs to volumetric water usage and natural gas tariffs.
                    </p>
                </header>

                {/* 1. Core Concepts Section */}
                <section className="mb-28">
                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Layout className="w-64 h-64 text-white" />
                        </div>

                        <div className="flex items-center gap-6 mb-16 relative">
                            <div className="w-20 h-20 bg-amber-500 text-slate-900 rounded-3xl flex items-center justify-center text-3xl font-black shadow-2xl rotate-3 underline decoration-slate-900 decoration-4">U</div>
                            <div>
                                <h2 className="text-4xl font-black italic">Billing Fundamentals</h2>
                                <p className="text-amber-400 font-bold uppercase text-[10px] tracking-[0.2em]">Concepts of Consumption</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {[
                                { title: "Tariff", desc: utilityData.fundamentals.tariff, icon: Receipt, color: "text-amber-400" },
                                { title: "Fixed Charge", desc: utilityData.fundamentals.fixedCharge, icon: Landmark, color: "text-sky-400" },
                                { title: "Surcharge", desc: utilityData.fundamentals.surcharge, icon: ShieldCheck, color: "text-rose-400" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group">
                                    <item.icon className={`w-8 h-8 ${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                                    <h4 className="text-xl font-black mb-4">{item.title}</h4>
                                    <p className="text-sm font-semibold text-slate-400 leading-relaxed italic pr-4">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Electricity Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-slate-900 font-black text-xl shadow-lg ring-4 ring-amber-50">1</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Electricity Billing</h2>
                    </div>

                    <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 mb-16 relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Lightbulb className="w-48 h-48 text-amber-500" />
                        </div>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <NoteCard
                                    title="Energy Charges (Slabs)"
                                    content="Electricity is usually billed using a **progressive slab system**. The rate per unit increases as your consumption crosses specific thresholds. This encourages energy conservation."
                                    type="info"
                                />

                                <div className="space-y-4">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest pl-2">Sample Tariff Structure</h4>
                                    <div className="grid gap-4">
                                        {utilityData.electricity.slabs.map((slab, i) => (
                                            <div key={i} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl font-bold border-l-4 border-amber-500">
                                                <span className="text-slate-600">{slab.range}</span>
                                                <span className="text-amber-600 font-black">{slab.rate}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 bg-cyan-100 rounded-3xl text-black relative">
                                    <h4 className="text-xl font-black mb-6 italic">The Formula</h4>
                                    <div className="flex items-center gap-4 m-1 p-3 bg-white/2 backdrop-blur-md border border-white/10 rounded-2xl">
                                        <FormulaBlock
                                            formula="Total Bill = $Energy + Fixed + Surcharge + Tax$"
                                            title="Electricity Expenditure Model"
                                        />
                                    </div>
                                </div>
                            </div>

                            <UtilityBillVisual />
                        </div>
                    </div>

                    {/* Electricity Example */}
                    <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl">
                        <h3 className="text-3xl font-black mb-10 flex items-center gap-3 italic">
                            <Calculator className="w-8 h-8 text-amber-500" />
                            Solving Electricity Bills
                        </h3>
                        <div className="space-y-8 font-semibold leading-relaxed">
                            <p className="text-slate-600">Consider a family that used **450 units** in a month. Let the fixed charge be **₹150**, energy tax be **5%**, and slabs be: ₹3 (0-200), ₹4.5 (201-400), ₹6 (400+).</p>

                            <div className="grid md:grid-cols-4 gap-4">
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-[10px] font-black text-slate-400 block mb-2">Stage 1: Slab 1</span>
                                    <MathText text="$200 times 3 = ₹600$" />
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-[10px] font-black text-slate-400 block mb-2">Stage 2: Slab 2</span>
                                    <MathText text="$200 times 4.5 = ₹900$" />
                                </div>
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-[10px] font-black text-slate-400 block mb-2">Stage 3: Slab 3</span>
                                    <MathText text="$50 times 6 = ₹300$" />
                                </div>
                                <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl flex flex-col justify-center">
                                    <span className="text-[10px] font-black text-amber-600 block mb-2 uppercase">Energy Total</span>
                                    <span className="text-xl font-black">₹1,800</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
                                <div className="flex flex-col md:flex-row gap-8 justify-between">
                                    <div className="space-y-2">
                                        <div className="text-xs text-slate-400 italic">Taxes & Charges:</div>
                                        <div className="font-bold">Fixed: ₹150</div>
                                        <MathText text="Tax: 5% of $1,800$ = $₹90$" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-emerald-400 font-black uppercase mb-2">Grand Total</div>
                                        <div className="text-5xl font-black">₹2,040</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Water & Gas Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-sky-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Water & Natural Gas</h2>
                    </div>

                    <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 mb-16">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <NoteCard
                                    title="Water Billing (kl)"
                                    content="Measured in kilolitres. Apart from usage, it often includes a **Sewerage Charge** which is a fixed percentage (60%-100%) of your water consumption charge."
                                    type="info"
                                />
                                <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100">
                                    <h4 className="text-sm font-black text-sky-700 uppercase tracking-widest mb-4">Water Charges Formula</h4>
                                    <MathText text="Bill = $(kl times Rate) + Sewerage + Tax + Rent$" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <NoteCard
                                    title="PNG (Gas) Tariffs"
                                    content="Piped Natural Gas is measured in SCM (Standard Cubic Meter). It typically has a fixed service charge plus consumption rates that may vary between domestic and commercial users."
                                    type="important"
                                />
                                <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
                                    <h4 className="text-sm font-black text-orange-700 uppercase tracking-widest mb-4">PNG Billing Formula</h4>
                                    <MathText text="Bill = $(SCM times Tariff) + Fee + VAT$" />
                                </div>
                            </div>
                        </div>

                        <PNGWaterVisual />
                    </div>

                    {/* PNG Example Solved card */}
                    <div className="bg-indigo-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
                        <div className="flex flex-col lg:flex-row gap-16 relative">
                            <div className="flex-1">
                                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] block mb-4">Master Illustration</span>
                                <h3 className="text-4xl font-black mb-8 italic">Domestic PNG Calculation</h3>
                                <p className="text-indigo-200 font-bold leading-relaxed mb-8 italic">A consumer uses 38 SCM of gas in a bi-monthly cycle. Current rate is ₹48/SCM. Fixed service charge is ₹150 and VAT is 12% on consumption charge.</p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                        <span className="font-bold">1. Consumption Charge (38 × 48)</span>
                                        <span className="font-black">₹1,824</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
                                        <span className="font-bold">2. VAT (12% of 1824)</span>
                                        <span className="font-black">₹218.88</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-emerald-500/30">
                                        <span className="font-bold text-emerald-400">3. Net Total (1824 + 150 + 218.88)</span>
                                        <span className="font-black text-emerald-400">₹2,192.88</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-80 bg-white rounded-3xl p-8 text-slate-900 shadow-2xl flex flex-col justify-center text-center">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <h4 className="font-black text-xl mb-3 pr-2">Security Deposit</h4>
                                <p className="text-xs text-slate-400 font-bold mb-6">Typically ₹5,000 for domestic connections, refundable upon termination.</p>
                                <div className="pt-6 border-t border-slate-100">
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Type: Domestic PNG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Practice Problems */}
                <section className="mb-28">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                        <div>
                            <span className="text-xs font-black text-amber-600 uppercase tracking-[0.3em] block mb-2">Audit Laboratory</span>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic">Utility <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">Analysis</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block" />
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">8 Important Problems</div>
                            <div className="px-4 py-2 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">CBSE Exam Type</div>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter15" title="Billing Analysis Zone" showTestButton={true} />

                    <div className="mt-24 space-y-12">
                        <header className="text-center">
                            <h3 className="text-3xl font-black text-slate-900 mb-2 italic underline decoration-amber-300 underline-offset-8">Exam Insights</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-6 pr-4">Board questions & Critical Applications</p>
                        </header>
                        <div className="grid md:grid-cols-2 gap-8">
                            {examProblems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-amber-200 transition-all hover:shadow-2xl relative group">
                                    <div className="absolute top-0 right-0 p-6">
                                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[10px] font-black uppercase tracking-tighter ring-1 ring-amber-200 shadow-sm">
                                            {prob.examTag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-8 pr-20 leading-relaxed italic">{prob.question}</h4>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-[6px] border-amber-500">
                                        <span className="text-amber-600 font-black text-[10px] uppercase tracking-widest block mb-4">Calculation Pathway</span>
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
