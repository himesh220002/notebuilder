'use client';

import { ArrowLeft, Plus, Minus, X, Equal, TrendingUp, Activity, DollarSign, Package } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import VerticalLineTestVisual from "@/components/VerticalLineTestVisual";
import StandardFunctionsGallery from "@/components/StandardFunctionsGallery";
import DomainRangeVisual from "@/components/DomainRangeVisual";
import MappingDiagramVisual from "@/components/MappingDiagramVisual";
import ExponentialGraph from "@/components/ExponentialGraph";
import LogarithmicGraph from "@/components/LogarithmicGraph";
import ChapterNavbar from "@/components/ChapterNavbar";
import { formulaText, problems, examProblems, classicProblems, domainRangeLogic } from "./data";

export default function FunctionsChapter() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <ChapterNavbar currentChapter={6} totalChapters={12} />
            {/* Header */}
            <header className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-6 shadow-lg">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight">Functions</h1>
                    <p className="mt-2 text-emerald-100/90 text-lg">Applied Mathematics Class 11 - Chapter 6</p>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto p-6 space-y-12">

                {/* 1. Introduction */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        1. Introduction to Functions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-emerald-700 underline decoration-2 underline-offset-4">Function as a Special Relation</h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <MathText text={formulaText.functionDef} />
                            </p>
                            <ul className="space-y-2 mb-6">
                                {formulaText.functionKeyPoints.map((point, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                                        <span className="text-emerald-500 font-bold">•</span>
                                        <MathText text={point} />
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                                <p className="text-sm font-bold text-emerald-800 italic">
                                    "Every function is a relation, but not every relation is a function."
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-indigo-700 underline decoration-2 underline-offset-4">Mapping (Arrow) Diagrams</h4>
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                {formulaText.mappingDiagramLogic.intro}
                            </p>
                            <MappingDiagramVisual />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-blue-700 underline decoration-2 underline-offset-4">Vertical Line Test (Graphical Method)</h4>
                        <div className="grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-1 space-y-4">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    <MathText text={formulaText.verticalLineTest} />
                                </p>
                                <div className="bg-blue-50 p-3 rounded border border-blue-100 text-xs text-blue-800 italic">
                                    Imagine a scanner moving across the graph. If it hits the curve at two points simultaneously, it's not a function!
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <VerticalLineTestVisual />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Domain, Co-domain, and Range */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        2. Domain, Co-domain, and Range
                    </h2>

                    {/* Visual Study component */}
                    <div className="mb-10">
                        <DomainRangeVisual />
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 mb-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <FormulaBlock title="Basic Definitions" formula={formulaText.domainRangeDef} />
                            </div>
                            <div className="space-y-4">
                                <NoteCard title="Polynomials" content="Domain is always $\mathbb{R}$." type="info" />
                            </div>
                        </div>
                    </div>

                    {/* Step-by-Step Logic */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {domainRangeLogic.map((logic, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                                <h4 className="font-bold text-lg text-indigo-800 mb-2">{logic.title}</h4>
                                <p className="text-sm text-gray-600 mb-4 italic"><MathText text={logic.concept} /></p>

                                <div className="space-y-3">
                                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 font-bold text-indigo-900 text-center uppercase tracking-wider text-xs">
                                        Example: {logic.example}
                                    </div>
                                    <ol className="space-y-2">
                                        {logic.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex gap-2 text-sm text-gray-700">
                                                <span className="font-black text-indigo-500">{sIdx + 1}.</span>
                                                <MathText text={step} />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <FormulaBlock title="Quick Reference: Rational" formula={formulaText.rationalDomain} />
                        <FormulaBlock title="Quick Reference: Square Root" formula={formulaText.sqrtDomain} />
                    </div>
                </section>

                {/* 3. Real-Valued Functions & Algebra */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        3. Real-Valued Functions
                    </h2>
                    <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <Activity className="w-8 h-8 text-blue-400" />
                            <h4 className="text-xl font-bold">Algebra of Functions</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Addition", formula: formulaText.algebraSum, icon: <Plus className="w-4 h-4" /> },
                                { label: "Subtraction", formula: formulaText.algebraDiff, icon: <Minus className="w-4 h-4" /> },
                                { label: "Multiplication", formula: formulaText.algebraProd, icon: <X className="w-4 h-4" /> },
                                { label: "Division", formula: formulaText.algebraQuo, icon: <Equal className="w-4 h-4" /> },
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                                    <div className="flex items-center gap-2 text-[10px] text-blue-300 uppercase font-bold mb-1">
                                        {item.icon} {item.label}
                                    </div>
                                    <div className="text-sm font-mono"><MathText text={item.formula} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Standard Functions Gallery */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        4. Standard Functions & Their Graphs
                    </h2>
                    <StandardFunctionsGallery />
                </section>

                {/* 5. Exponential & Logarithmic */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        5. Specialized Applied Math Functions
                    </h2>
                    <div className="space-y-8">
                        <ExponentialGraph />
                        <LogarithmicGraph />
                    </div>
                </section>

                {/* 6. Practical Applications */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        6. Practical Applications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500">
                            <div className="flex items-center gap-3 mb-6">
                                <DollarSign className="w-8 h-8 text-amber-500" />
                                <h4 className="text-xl font-bold text-gray-900">Cost, Revenue & Profit</h4>
                            </div>
                            <div className="space-y-6">
                                <FormulaBlock title="Cost Function" formula={formulaText.costFn} />
                                <FormulaBlock title="Revenue Function" formula={formulaText.revenueFn} />
                                <FormulaBlock title="Profit Function" formula={formulaText.profitFn} />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="w-8 h-8 text-indigo-500" />
                                <h4 className="text-xl font-bold text-gray-900">Demand & Supply</h4>
                            </div>
                            <div className="space-y-4">
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    <MathText text={formulaText.demandSupply} />
                                </p>
                                <div className="mt-8">
                                    <h5 className="font-bold text-indigo-900 text-sm mb-2">Market Equilibrium</h5>
                                    <div className="bg-indigo-50 p-4 rounded border border-indigo-100 italic text-sm text-indigo-800">
                                        Occurs where Demand = Supply (Point of Intersection).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">📝</span> Practice
                    </h2>
                    <ProblemList problems={problems} title="Concept Checks" chapterId="chapter6_concept" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-200 pb-2">📂 Real-World Functions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <NoteCard title="Domain Tip" content="Denominator cannot be zero; Sqrt value cannot be negative." type="tip" />
                            <NoteCard title="Graph Tip" content="Vertical line test helps identify invalid functions quickly." type="info" />
                        </div>
                        <ProblemList problems={classicProblems} title="Practice Scenarios" chapterId="chapter6_classic" />
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-emerald-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Important Questions (Applied Maths)" chapterId="chapter6_exam" />
                    </div>
                </section>

            </main>
        </div>
    );
}
