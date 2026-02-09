'use client';

import React from 'react';
import { ArrowLeft, Dices, Layers, Network, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import VennProbabilityVisual from "@/components/VennProbabilityVisual";
import BayesTreeVisual from "@/components/BayesTreeVisual";
import ChapterNavbar from "@/components/ChapterNavbar";
import { probabilityData, problems, examProblems } from "./data";

export default function ProbabilityChapter() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
            <ChapterNavbar currentChapter={9} totalChapters={15} />

            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">

                {/* Hero Section */}
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-3xl mb-8 shadow-inner transform rotate-3">
                        <Dices className="w-10 h-10 text-indigo-600" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
                        Probability <span className="text-indigo-600">.</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        The mathematics of uncertainty. From coin tosses to Bayes' prediction models.
                    </p>
                </header>

                {/* 1. Basics: Random Experiment & Events */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">1</div>
                        <h2 className="text-3xl font-bold text-gray-800">Random Experiments & Events</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Definitions */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-indigo-900 border-b border-indigo-50 pb-2">Key Terms</h3>
                            <div className="space-y-4">
                                {probabilityData.definitions.map((def, idx) => (
                                    <div key={idx}>
                                        <span className="font-bold text-gray-800">{def.term}:</span>
                                        <div className="text-gray-600 mt-1 pl-2 border-l-2 border-indigo-200 text-sm leading-relaxed">
                                            <MathText text={def.def} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Types of Events */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-lg mb-4 text-emerald-900 border-b border-emerald-50 pb-2">Types of Events</h3>
                            <div className="space-y-3">
                                {probabilityData.typesOfEvents.map((evt, idx) => (
                                    <div key={idx} className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-emerald-800 text-sm">{evt.type}</span>
                                            {evt.formula && <span className="text-xs bg-white px-2 py-0.5 rounded border border-emerald-200"><MathText text={evt.formula} /></span>}
                                        </div>
                                        <p className="text-xs text-gray-600 leading-snug"><MathText text={evt.desc} /></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Algebra of Events & Probability Laws */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-violet-200">2</div>
                        <h2 className="text-3xl font-bold text-gray-800">Algebra of Probability</h2>
                    </div>

                    <div className="prose max-w-none text-gray-600 mb-8">
                        <p>Understanding relationships between events using Set Theory (Union, Intersection, Complement).</p>
                    </div>

                    {/* Interactive Venn Visual */}
                    <VennProbabilityVisual />

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-amber-500" fill="currentColor" /> Addition Theorem
                            </h4>
                            <div className="text-lg bg-gray-50 p-4 rounded-lg text-center mb-3">
                                <MathText text={probabilityData.formulas.additionThm} />
                            </div>
                            <div className="text-sm border-t pt-3">
                                <span className="font-semibold text-gray-700">Example:</span>
                                <div className="mt-1 text-gray-600">
                                    <MathText text={probabilityData.examples.addition.q} />
                                    <div className="mt-1 font-mono text-xs bg-slate-100 p-1 rounded">
                                        <MathText text={probabilityData.examples.addition.sol} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-3">Axiomatic Definition</h4>
                            <div className="space-y-2 text-sm">
                                <p className="font-semibold text-gray-700">{probabilityData.axiomatic.def}</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    {probabilityData.axiomatic.axioms.map((ax, i) => (
                                        <li key={i}><MathText text={ax} /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Conditional Probability & Bayes */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-rose-200">3</div>
                        <h2 className="text-3xl font-bold text-gray-800">Conditional Probability & Bayes</h2>
                    </div>

                    <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl mb-8">
                        <h3 className="font-bold text-rose-900 text-lg mb-2">Conditional Probability</h3>
                        <p className="text-rose-800 mb-4">Probability of event A happening given that event B has already happened.</p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="bg-white px-4 py-2 rounded shadow-sm">
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Formula</span>
                                <div className="text-lg font-bold text-gray-800"><MathText text={probabilityData.formulas.conditional} /></div>
                            </div>
                            <div className="bg-white px-4 py-2 rounded shadow-sm">
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Multiplication Thm</span>
                                <div className="text-lg font-bold text-gray-800"><MathText text={probabilityData.formulas.multiplication} /></div>
                            </div>
                        </div>

                        <div className="bg-white/50 p-4 rounded-lg border border-rose-200">
                            <h4 className="font-bold text-rose-900 text-sm mb-2">Properties</h4>
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                {probabilityData.conditionalProperties.map((prop, i) => (
                                    <li key={i}><MathText text={prop} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bayes Tree Visual */}
                    <BayesTreeVisual />

                    {/* Total Probability Example */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 mt-8 mb-8">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-indigo-500" />
                            Example: Total Probability
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-700 font-medium mb-2">{probabilityData.examples.totalProb.q}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-md whitespace-pre-wrap leading-relaxed font-medium text-gray-700">
                                <MathText text={probabilityData.examples.totalProb.sol} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 mt-8">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-indigo-500" />
                            Example: Bayes Theorem
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-700 font-medium mb-2">{probabilityData.examples.bayes.q}</p>
                                <div className="text-sm text-gray-500">
                                    <p>Identify the reverse probability question: "Given Outcome (Red), find Source (Bag II)". This is a classic Bayes signature.</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-md whitespace-pre-wrap leading-relaxed font-medium text-gray-700">
                                <MathText text={probabilityData.examples.bayes.sol} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Practice Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-emerald-500">✏️</span> Practice Zone
                    </h2>
                    <ProblemList problems={problems} chapterId="chapter9" />
                </section>

                {/* Exam Corner */}
                <section className="mb-24">
                    <div className="bg-gradient-to-r from-indigo-900 to-violet-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <CheckCircle className="w-8 h-8 text-emerald-400" />
                                CBSE Exam Corner
                            </h2>
                            <p className="text-indigo-200 mb-8 text-lg">
                                Master these questions to ace your board exams.
                            </p>
                            <div className="grid gap-6">
                                {examProblems.map((prob, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/30 uppercase tracking-wide">
                                                {prob.examTag}
                                            </span>
                                            <span className="text-xs text-indigo-200 font-mono">ID: {prob.id}</span>
                                        </div>
                                        <h4 className="font-bold text-xl mb-3 leading-snug">{prob.question}</h4>
                                        <div className="bg-black/30 p-4 rounded-lg mt-4 text-indigo-50 text-sm leading-relaxed font-light">
                                            <span className="text-emerald-400 font-bold block mb-2 uppercase text-xs tracking-wider">Solution Strategy</span>
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
