'use client';

import { ArrowLeft, GitGraph, TrendingUp, Zap, Layers, AlertCircle, Move } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import DerivativeSlopeVisual from "@/components/DerivativeSlopeVisual";
import ChapterNavbar from "@/components/ChapterNavbar";
import { formulaText, problems, examProblems, importantExamples } from "./data";

export default function DifferentiationChapter() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <ChapterNavbar currentChapter={8} totalChapters={10} />
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white p-6 shadow-lg">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight">Differentiation</h1>
                    <p className="mt-2 text-blue-100/90 text-lg">Applied Mathematics Class 11 - Chapter 8</p>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto p-6 space-y-16">

                {/* 1. Introduction & Concept */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        1. Concept of Derivative
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Differentiation is the study of <strong>rates of change</strong>. Geometrically, the derivative of a function at a point is the <strong>slope of the tangent line</strong> to the curve at that point.
                            </p>
                            <NoteCard title="Definition (First Principle)" content={formulaText.derivativeIdx} type="info" />
                            <div className="mt-4 bg-blue-50 p-4 rounded-lg flex items-center gap-3 text-blue-800 border-l-4 border-blue-400">
                                <TrendingUp className="w-6 h-6" />
                                <p className="font-medium">
                                    <MathText text={formulaText.slopeTangent} />
                                </p>
                            </div>
                        </div>
                        {/* Visual Component */}
                        <DerivativeSlopeVisual />
                    </div>
                </section>

                {/* 2. Standard Results & Algebra */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        2. Standard Rules & Results
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-700 mb-4 border-b pb-2">Algebraic Functions</h4>
                            <div className="space-y-4">
                                {formulaText.standardDerivatives.algebraic.map((item, idx) => (
                                    <div key={idx} className="bg-gray-50 p-3 rounded bg-purple-50 hover:bg-white transition-colors">
                                        <div className="flex justify-between items-center mb-1">
                                            <MathText text={item.func} />
                                            <span className="text-gray-400">→</span>
                                            <MathText text={item.res} />
                                        </div>
                                        <div className="text-xs text-gray-500 border-t border-gray-200 pt-1 mt-1 flex gap-2">
                                            <span className="font-bold">Ex:</span>
                                            <MathText text={item.example} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-700 mb-4 border-b pb-2">Exponential</h4>
                                <div className="space-y-4">
                                    {formulaText.standardDerivatives.exponential.map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 p-3 rounded bg-yellow-50 hover:bg-white transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <MathText text={item.func} />
                                                <span className="text-gray-400">→</span>
                                                <MathText text={item.res} />
                                            </div>
                                            <div className="text-xs text-gray-500 border-t border-gray-200 pt-1 mt-1 flex gap-2">
                                                <span className="font-bold">Ex:</span>
                                                <MathText text={item.example} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-gray-700 mb-4 border-b pb-2">Logarithmic</h4>
                                <div className="space-y-4">
                                    {formulaText.standardDerivatives.logarithmic.map((item, idx) => (
                                        <div key={idx} className="bg-gray-50 p-3 rounded bg-indigo-50 hover:bg-green-50 transition-colors">
                                            <div className="flex justify-between items-center mb-1">
                                                <MathText text={item.func} />
                                                <span className="text-gray-400">→</span>
                                                <MathText text={item.res} />
                                            </div>
                                            <div className="text-xs text-gray-500 border-t border-gray-200 pt-1 mt-1 flex gap-2">
                                                <span className="font-bold">Ex:</span>
                                                <MathText text={item.example} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-indigo-500" />
                            Algebra of Derivatives
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            {formulaText.algebraOfDerivatives.map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-3 rounded border border-gray-200 group bg-green-50 hover:bg-indigo-50 transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-lg text-gray-600 group-hover:text-indigo-700">{item.name}</span>
                                        <span className="font-mono text-lg text-gray-800"><MathText text={item.rule} /></span>
                                    </div>
                                    <div className="text-xs text-gray-500 border-t border-gray-200 pt-1 flex gap-2">
                                        <span className="font-bold">Ex:</span> <MathText text={item.example} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Advanced Techniques */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        3. Advanced Differentiation Techniques
                    </h2>

                    <div className="grid md:grid-cols-2  gap-6">
                        {/* Chain Rule */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-emerald-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Layers className="w-5 h-5 text-emerald-500" />
                                <h4 className="font-bold text-gray-900">Chain Rule</h4>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded mb-3 text-center h-16 flex items-center justify-center">
                                <MathText text={formulaText.compositeFunc.formula} />
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Used for composite functions. "Differentiate outside, then inside".</p>
                            <div className="bg-gray-50 p-2 rounded text-sm border border-gray-200">
                                <span className="font-bold text-emerald-700 block mb-1">Example:</span>
                                <MathText text={formulaText.compositeFunc.example} />
                            </div>
                        </div>

                        {/* Implicit & Parametric */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-amber-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Move className="w-5 h-5 text-amber-500" />
                                <h4 className="font-bold text-gray-900">Parametric Forms</h4>
                            </div>
                            <div className="bg-amber-50 p-3 rounded mb-3 text-center h-16 flex items-center justify-center text-md">
                                <MathText text={formulaText.parametric.formula} />
                            </div>
                            <p className="text-sm text-gray-600 mb-2">When x and y are both functions of a parameter 't'.</p>
                            <div className="bg-gray-50 p-2 rounded text-xs border border-gray-200">
                                <span className="font-bold text-amber-700 block mb-1">Example:</span>
                                <MathText text={formulaText.parametric.example} />
                            </div>
                        </div>

                        {/* Logarithmic Diff */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-rose-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-rose-500" />
                                <h4 className="font-bold text-gray-900">Logarithmic Diff</h4>
                            </div>
                            <div className="bg-rose-50 p-3 rounded mb-3 text-md h-16 flex items-center justify-center overflow-auto">
                                <MathText text={formulaText.logDiff.formula} />
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Essential for functions of type <MathText text="y = [f(x)]^{g(x)}" />.</p>
                            <div className="bg-gray-50 p-2 rounded text-xs border border-gray-200">
                                <span className="font-bold text-rose-700 block mb-1">Example:</span>
                                <MathText text={formulaText.logDiff.example} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Applications */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        4. Applications & Rate Measure
                    </h2>
                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 flex items-start gap-4">
                        <AlertCircle className="w-8 h-8 text-indigo-600 shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-indigo-900 text-lg mb-2">Rate Measure</h4>
                            <p className="text-indigo-800 mb-2">
                                Derivative represents instantaneous rate of change.
                            </p>
                            <div className="bg-white px-4 py-2 rounded inline-block shadow-sm">
                                <MathText text={formulaText.rateMeasure} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Useful Important Examples */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        <span className="mr-2">💡</span> Useful Important Examples
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {importantExamples.map((ex, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
                                <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-100">
                                    <h4 className="font-bold text-indigo-900 text-md">{ex.title}</h4>
                                </div>
                                <div className="p-4">
                                    <p className="text-md font-semibold text-gray-700 mb-2 border-b border-gray-100 pb-2">
                                        <MathText text={ex.content} />
                                    </p>
                                    <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded mt-2">
                                        <MathText text={ex.solution} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">📝</span> Practice Zone
                    </h2>

                    <ProblemList problems={problems} title="Concept Check Problems" chapterId="chapter8_concept" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Important Questions (Applied Maths)" chapterId="chapter8_exam" />
                    </div>
                </section>
            </main>
        </div>
    );
}
