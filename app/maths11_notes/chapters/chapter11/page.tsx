'use client';

import React from 'react';
import {
    TrendingUp,
    Calculator,
    PiggyBank,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Calendar,
    ShieldCheck,
    Coins,
    Gem
} from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import CompoundInterestVisual from "@/components/CompoundInterestVisual";
import AnnuityVisual from "@/components/AnnuityVisual";
import ChapterNavbar from "@/components/ChapterNavbar";
import { financeData, problems, examProblems } from "./data";

export default function CompoundInterestChapter() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800">
            <ChapterNavbar currentChapter={11} totalChapters={17} />

            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
                {/* Hero Section */}
                <header className="mb-20 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-indigo-900 text-amber-400 rounded-[2rem] mb-8 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        <Gem className="w-12 h-12" />
                    </div>
                    <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                        Compound Interest <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">& Annuity</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        The power of compounding and the mathematics of regular investments. Essential tools for financial planning.
                    </p>
                </header>

                {/* 1. Compound Interest Basics */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50">1</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Compound Interest (CI)</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold mb-6 text-indigo-900 flex items-center gap-2">
                                    <Coins className="w-6 h-6" />
                                    The Amount Formula
                                </h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Unlike Simple Interest, CI is calculated on the principal and the interest accumulated from previous periods.
                                </p>
                                <FormulaBlock
                                    title="Amount (A)"
                                    formula={financeData.formulas.compoundInterest.amount}
                                    block
                                />
                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-indigo-50 rounded-2xl">
                                        <span className="block text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Total Interest</span>
                                        <MathText text={financeData.formulas.compoundInterest.interest} />
                                    </div>
                                    <div className="p-4 bg-emerald-50 rounded-2xl">
                                        <span className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Present Value (P)</span>
                                        <MathText text={financeData.formulas.compoundInterest.presentValue} />
                                    </div>
                                </div>
                            </div>

                            <NoteCard
                                title="Frequencies of Compounding"
                                content="Interest can be compounded semi-annually (k=2), quarterly (k=4), or monthly (k=12). The formula becomes: $A = P(1 + r/100k)^{nk}$."
                                type="warning"
                            />
                        </div>

                        <div className="relative">
                            <CompoundInterestVisual />
                        </div>
                    </div>
                </section>

                {/* 2. Annuity Concepts */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-emerald-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Annuities & Cash Flows</h2>
                    </div>

                    <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden mb-12">
                        <div className="grid lg:grid-cols-5 h-full">
                            <div className="lg:col-span-2 bg-emerald-900 p-10 text-white">
                                <h3 className="text-3xl font-bold mb-8 text-emerald-400">What is an Annuity?</h3>
                                <div className="space-y-6">
                                    {financeData.definitions.slice(1, 4).map((def, idx) => (
                                        <div key={idx} className="group">
                                            <h4 className="font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{def.term}</h4>
                                            <div className="text-emerald-100/70 text-sm leading-relaxed border-l-2 border-emerald-500/30 pl-4">
                                                <MathText text={def.def} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:col-span-3 p-10 bg-slate-50/50">
                                <AnnuityVisual />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-indigo-500">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-indigo-500" />
                                Ordinary Annuity (Regular)
                            </h4>
                            <div className="space-y-6">
                                <FormulaBlock title="Amount (A)" formula={financeData.formulas.annuityRegular.amount} />
                                <FormulaBlock title="Present Value (P)" formula={financeData.formulas.annuityRegular.presentValue} />
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-emerald-500">
                            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                                Annuity Due
                            </h4>
                            <div className="space-y-6">
                                <FormulaBlock title="Amount (A)" formula={financeData.formulas.annuityDue.amount} />
                                <FormulaBlock title="Present Value (P)" formula={financeData.formulas.annuityDue.presentValue} />
                            </div>
                        </div>
                    </div>

                    {/* Deferred Annuity Case */}
                    <div className="bg-amber-50 rounded-[2.5rem] p-10 border border-amber-200">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h4 className="text-2xl font-black text-amber-900 mb-4 flex items-center gap-2">
                                    <Calculator className="w-7 h-7" />
                                    Deferred Annuity (m + n Case)
                                </h4>
                                <div className="text-amber-800 text-sm mb-6 leading-relaxed">
                                    <MathText text='When payments start after a "waiting period" of $m$ periods. This is common in student loans or project finance where interest accumulates but repayment starts later.' />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                                        <span className="block text-[10px] font-bold text-amber-600 uppercase mb-2">
                                            <MathText text="Amount at $T_{m + n}$" />
                                        </span>
                                        <MathText text={financeData.formulas.deferredAnnuity.amount} />
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                                        <span className="block text-[10px] font-bold text-amber-600 uppercase mb-2">
                                            <MathText text="Present Value at $T_0$" />
                                        </span>
                                        <MathText text={financeData.formulas.deferredAnnuity.presentValue} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-64 p-6 bg-white rounded-3xl border-2 border-amber-100 italic text-[11px] text-slate-500 text-center leading-relaxed">
                                <span className="font-bold text-amber-600 block mb-2 underline underline-offset-4 decoration-amber-200">M+N Logic</span>
                                <MathText text='The "Amount" remains the same as an $n$-period annuity at the end of the term, but the "Present Value" is discounted back for the additional $m$ periods.' />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Specialized Financial Terms */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-amber-50">3</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Specialized Concepts</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-slate-300">
                            <h5 className="font-black text-slate-400 text-xs uppercase tracking-widest mb-4">Notation ($R=₹1$)</h5>
                            <div className="space-y-4">
                                <div className="p-3 bg-slate-50 rounded-xl">
                                    <MathText text={financeData.formulas.annuityRegular.notationAmount} />
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl">
                                    <MathText text={financeData.formulas.annuityRegular.notationPV} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-900 p-6 rounded-2xl shadow-xl text-white md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <PiggyBank className="w-8 h-8 text-amber-400" />
                                <h5 className="text-xl font-bold">Perpetuity</h5>
                            </div>
                            <p className="text-indigo-200 text-sm mb-6">An annuity that never ends. Valuable for valuing dividend-paying stocks or long-term endowments.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                    <span className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase">Simple Present Value (P)</span>
                                    <MathText text={financeData.formulas.perpetuity.pv} />
                                </div>
                                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                    <span className="block text-[10px] font-bold text-indigo-400 mb-2 uppercase">Growing Present Value (P)</span>
                                    <MathText text={financeData.formulas.perpetuity.pvGrowing} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems & Exam Section */}
                <section className="mb-24 bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-5xl font-black text-slate-900 mb-2 flex items-center gap-3">
                                Case Studies <span className="text-indigo-600">&</span> Problems
                            </h2>
                            <p className="text-slate-500 font-medium tracking-tight">Real-world applications of compound interest and annuities.</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold ring-1 ring-indigo-200 uppercase">EMI Calculations</span>
                            <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold ring-1 ring-emerald-200 uppercase">Sinking Funds</span>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter11" title="Practice Laboratory" showTestButton={true} />

                    <div className="mt-20">
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Briefcase className="w-64 h-64 text-white" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8 text-amber-400" />
                                    CBSE & Competitive Corner
                                </h3>
                                <div className="grid gap-6">
                                    {examProblems.map((prob, idx) => (
                                        <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-300">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="px-3 py-1 bg-amber-500 text-amber-950 rounded-lg text-[10px] font-black uppercase tracking-widest leading-none">
                                                    {prob.examTag}
                                                </span>
                                                <span className="text-[10px] text-white/30 font-mono">FIN-Q#{prob.id}</span>
                                            </div>
                                            <div className="prose prose-invert max-w-none">
                                                <p className="text-xl font-bold text-white mb-6 leading-snug">{prob.question}</p>
                                            </div>
                                            <div className="bg-indigo-950/50 p-6 rounded-2xl border-l-4 border-indigo-500">
                                                <span className="text-indigo-400 font-black block mb-4 uppercase text-[10px] tracking-widest">Formal Solution</span>
                                                <MathText text={prob.solution} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
