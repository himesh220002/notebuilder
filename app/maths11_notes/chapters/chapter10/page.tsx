'use client';

import React from 'react';
import { ArrowLeft, BarChart3, Calculator, TrendingUp, ScatterChart, PieChart, CheckCircle, Lightbulb, Activity, Layers, Target } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import StatisticsVisual from "@/components/StatisticsVisual";
import AdvancedStatsVisual from "@/components/AdvancedStatsVisual";
import FormulaBlock from "@/components/FormulaBlock";
import ChapterNavbar from "@/components/ChapterNavbar";
import { statisticsData, problems, examProblems } from "./data";

export default function StatisticsChapter() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
            <ChapterNavbar currentChapter={10} totalChapters={13} />

            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">

                {/* Hero Section */}
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-3xl mb-8 shadow-inner transform -rotate-3">
                        <BarChart3 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
                        Statistics <span className="text-emerald-600">.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        From basic averages to complex relational models. Discover the parameters that define data.
                    </p>
                </header>

                {/* 1. Measures of Central Tendency */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">1</div>
                        <h2 className="text-3xl font-bold text-gray-800">Measures of Central Tendency</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-emerald-900 border-b border-emerald-50 pb-2">Core Definitions</h3>
                            <div className="space-y-4">
                                {statisticsData.definitions.slice(0, 3).map((def, idx) => (
                                    <div key={idx}>
                                        <span className="font-bold text-gray-800">{def.term}:</span>
                                        <div className="text-gray-600 mt-1 pl-2 border-l-2 border-emerald-200 text-sm leading-relaxed">
                                            <MathText text={def.def} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-indigo-900 border-b border-indigo-50 pb-2">Mean Formulas</h3>
                            <div className="space-y-3">
                                <NoteCard
                                    title="Ungrouped Data"
                                    content={statisticsData.formulas.mean.ungrouped}
                                    type="info"
                                />
                                <NoteCard
                                    title="Grouped Data"
                                    content={statisticsData.formulas.mean.grouped}
                                    type="tip"
                                />
                                <NoteCard
                                    title="Shortcut Method"
                                    content={statisticsData.formulas.mean.shortcut}
                                    type="warning"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Interactive Visual 1 */}
                    <StatisticsVisual />
                </section>

                {/* 2. Measures of Dispersion */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">2</div>
                        <h2 className="text-3xl font-bold text-gray-800">Measures of Dispersion</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
                            <h4 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" /> Mean Deviation
                            </h4>
                            <div className="space-y-4">
                                <div className="p-3 bg-rose-50 rounded-lg">
                                    <span className="text-xs font-bold text-rose-600 uppercase">Frequency Dist. MD</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.meanDeviationMean} /></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
                            <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <Calculator className="w-5 h-5" /> Variance & SD
                            </h4>
                            <div className="space-y-4">
                                <div className="p-3 bg-indigo-50 rounded-lg">
                                    <span className="text-xs font-bold text-indigo-600 uppercase">Variance (Grouped)</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.varianceFreq} /></div>
                                </div>
                                <div className="p-3 bg-violet-50 rounded-lg">
                                    <span className="text-xs font-bold text-violet-600 uppercase">Standard Deviation (SD)</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.stdDevFreq} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shortcut Methods */}
                    <article className="mt-12 bg-white rounded-2xl shadow-sm border border-amber-100 p-8">
                        <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                            <Calculator className="w-7 h-7" />
                            Shortcut Method (Assumed Mean)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="text-sm text-gray-600 leading-relaxed">
                                    <MathText text="When calculations are cumbersome, we use an **Assumed Mean (A)**. Let $d_i = x_i - A$." />
                                </div>
                                <FormulaBlock
                                    title="Shortcut Mean"
                                    formula={statisticsData.formulas.mean.shortcut}
                                    block
                                />
                            </div>
                            <div className="space-y-4">
                                <FormulaBlock
                                    title="Shortcut Variance"
                                    formula={statisticsData.formulas.dispersion.shortcutVariance}
                                    block
                                />
                                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-[11px] text-amber-800 italic">
                                    <MathText text="This method is essential for larger datasets where $(x_i - \bar{x})^2$ becomes too large to compute manually." />
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* 3. Shape of Data: Moments, Skewness, Kurtosis */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">3</div>
                        <h2 className="text-3xl font-bold text-gray-800">Advanced Measures: Shape of Data</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Moments */}
                        <div className="bg-white p-5 rounded-2xl border border-violet-100 shadow-sm">
                            <h4 className="font-bold text-violet-900 mb-4 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Moments
                            </h4>
                            <div className="space-y-3 text-xs">
                                <div className="bg-slate-50 p-2 rounded">
                                    <span className="font-bold text-slate-500">Raw Moment</span>
                                    <div className="mt-1 text-lg"><MathText text={statisticsData.formulas.moments.raw} /></div>
                                </div>
                                <div className="bg-violet-50 p-2 rounded">
                                    <span className="font-bold text-violet-500">Central Moment</span>
                                    <div className="mt-1 text-lg"><MathText text={statisticsData.formulas.moments.central} /></div>
                                </div>
                            </div>
                        </div>

                        {/* Skewness */}
                        <div className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm">
                            <h4 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
                                <Target className="w-4 h-4" /> Skewness ($S_k$)
                            </h4>
                            <div className="space-y-3">
                                <div className="p-2 bg-rose-50 rounded text-[11px]">
                                    <span className="font-bold text-rose-700">Karl Pearson</span>
                                    <div className="mt-1 text-lg font-bold"><MathText text={statisticsData.formulas.skewness.karlPearson} /></div>
                                </div>
                                <div className="p-3 bg-rose-900 text-white rounded-xl">
                                    <span className="text-[10px] uppercase font-bold text-rose-300 block mb-1">Moment Coefficient ($\gamma_1$)</span>
                                    <div className="font-mono text-sm"><MathText text={statisticsData.formulas.skewness.momentCoefficient} /></div>
                                </div>
                                <div className="p-2 border-t border-rose-100">
                                    <span className="text-[10px] font-bold text-rose-400 block mb-1">MEASURE ($\beta_1$):</span>
                                    <MathText text={statisticsData.formulas.skewness.beta1} />
                                </div>
                            </div>
                        </div>

                        {/* Kurtosis */}
                        <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                            <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                                <Layers className="w-4 h-4" /> Kurtosis ($\\beta_2$)
                            </h4>
                            <div className="space-y-2">
                                {statisticsData.formulas.kurtosis.types.map((type, id) => (
                                    <div key={id} className={`p-2 bg-${type.color}-50 rounded flex justify-between items-center text-[11px]`}>
                                        <span className={`font-bold text-${type.color}-700`}>{type.name}</span>
                                        <MathText text={type.cond} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Visual 2 */}
                    <AdvancedStatsVisual />
                </section>

                {/* 4. Correlation Analysis */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">4</div>
                        <h2 className="text-3xl font-bold text-gray-800">Correlation Analysis</h2>
                    </div>

                    <div className="bg-indigo-900 rounded-3xl p-8 mb-8 text-white">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <ScatterChart className="w-6 h-6 text-indigo-400" />
                                    Karl Pearson's Coefficient ($r$)
                                </h3>
                                <p className="text-indigo-200 mb-6 leading-relaxed">
                                    A mathematical method to measure the degree of linear relationship between two variables.
                                </p>
                                <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                                    <MathText text={statisticsData.formulas.correlation.karlPearson} />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-indigo-400 uppercase text-sm tracking-wider">Key Properties</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>Ranges from **-1.0 to +1.0**</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>Independent of change of Origin and Scale</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                        <span>$r=0$ indicates **No Linear Correlation**</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Calculator className="w-5 h-5 text-indigo-600" />
                                Covariance Calculation
                            </h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Expanded Form</span>
                                    <MathText text={statisticsData.formulas.correlation.covarianceExpanded} />
                                </div>
                                <div className="text-sm text-gray-600 leading-relaxed italic">
                                    <MathText text="This form shows that $Cov(X,Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]$." />
                                </div>
                            </div>
                        </div>
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-xs text-amber-800 max-sm:w-full max-w-sm leading-relaxed shadow-inner">
                            <div className="flex items-center gap-2 mb-3">
                                <Lightbulb className="w-5 h-5 text-amber-600" />
                                <span className="font-bold uppercase tracking-wider">Formula Clarity</span>
                            </div>
                            <div className="mb-3">
                                <MathText text="In textbooks, you might see: $\frac{1}{n}\sum xy - \bar{x}\bar{y}$" />
                            </div>
                            <div className="text-sm text-gray-700 leading-relaxed">
                                <MathText text="This is algebraically derived by expanding $\sum (x_i-\bar{x})(y_i-\bar{y})$ and is the standard way to calculate correlation manually." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Zone */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-emerald-500">✏️</span> Practice Zone
                    </h2>
                    <ProblemList problems={problems} chapterId="chapter10" />
                </section>

                {/* Exam Corner */}
                <section className="mb-24">
                    <div className="bg-gradient-to-br from-indigo-900 via-emerald-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <PieChart className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <CheckCircle className="w-8 h-8 text-emerald-400" />
                                CBSE Exam Corner
                            </h2>
                            <p className="text-emerald-100 mb-8 text-lg">
                                Master these advanced statistical proofs and calculations.
                            </p>
                            <div className="grid gap-6">
                                {examProblems.map((prob, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 bg-emerald-500/30 text-emerald-300 rounded-full text-[10px] font-bold border border-emerald-500/50 uppercase tracking-widest">
                                                {prob.examTag}
                                            </span>
                                            <span className="text-[10px] text-white/40 font-mono tracking-widest">ID: {prob.id}</span>
                                        </div>
                                        <h4 className="font-bold text-xl mb-4 leading-relaxed">{prob.question}</h4>
                                        <div className="bg-black/40 p-5 rounded-xl mt-4 text-emerald-50 text-sm leading-relaxed font-light border-l-4 border-emerald-500">
                                            <span className="text-emerald-400 font-bold block mb-3 uppercase text-[10px] tracking-widest">Calculated Procedure</span>
                                            <MathText text={prob.solution} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
