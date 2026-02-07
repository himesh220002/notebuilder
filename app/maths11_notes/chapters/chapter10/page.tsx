'use client';

import React from 'react';
import { ArrowLeft, BarChart3, Calculator, TrendingUp, ScatterChart, PieChart, CheckCircle, Lightbulb, Activity, Layers, Target } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import StatisticsVisual from "@/components/StatisticsVisual";
import AdvancedStatsVisual from "@/components/AdvancedStatsVisual";
import { statisticsData, problems, examProblems } from "./data";

export default function StatisticsChapter() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
            {/* Navigation Header */}
            <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-indigo-100 backdrop-blur-md bg-opacity-90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Chapters
                    </Link>
                    <span className="text-gray-500 text-sm font-medium">Class 11 Applied Maths</span>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

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
                                    <span className="text-xs font-bold text-rose-600 uppercase">About Mean</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.meanDeviationMean} /></div>
                                </div>
                                <div className="p-3 bg-orange-50 rounded-lg">
                                    <span className="text-xs font-bold text-orange-600 uppercase">About Median</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.meanDeviationMedian} /></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
                            <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <Calculator className="w-5 h-5" /> Variance & SD
                            </h4>
                            <div className="space-y-4">
                                <div className="p-3 bg-indigo-50 rounded-lg">
                                    <span className="text-xs font-bold text-indigo-600 uppercase">Variance</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.variance} /></div>
                                </div>
                                <div className="p-3 bg-violet-50 rounded-lg">
                                    <span className="text-xs font-bold text-violet-600 uppercase">Standard Deviation (SD)</span>
                                    <div className="mt-1 font-bold"><MathText text={statisticsData.formulas.dispersion.stdDev} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <div className="space-y-2">
                                <div className="p-2 bg-rose-50 rounded text-[11px]">
                                    <span className="font-bold text-rose-700">Karl Pearson</span>
                                    <div className="mt-1 text-lg font-bold"><MathText text={statisticsData.formulas.skewness.karlPearson} /></div>
                                </div>
                                <div className="p-2 bg-orange-50 rounded text-[11px]">
                                    <span className="font-bold text-orange-700">Bowley's</span>
                                    <div className="mt-1 text-lg font-bold"><MathText text={statisticsData.formulas.skewness.bowley} /></div>
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
                            <h4 className="font-bold text-gray-800 mb-2">Spearman Rank Correlation</h4>
                            <p className="text-sm text-gray-600 mb-4">Used when data is qualitative (ranks) or has significant outliers.</p>
                            <div className="text-xl font-bold py-3 px-4 bg-slate-50 rounded-xl inline-block border border-slate-100">
                                <MathText text={statisticsData.formulas.correlation.spearman} />
                            </div>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 text-xs text-amber-800 max-w-xs leading-relaxed">
                            <span className="font-bold block mb-1">PRO-TIP:</span>
                            <MathText text="If ranks are equal/tied, we use a correction factor: $\frac{m(m^2-1)}{12}$ for each tie." />
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
