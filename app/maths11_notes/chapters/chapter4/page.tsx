'use client';

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ApGpVisual from "@/components/ApGpVisual";
import ChapterNavbar from "@/components/ChapterNavbar";
import { formulaText, problems, examProblems } from "./data";

export default function SequenceAndSeries() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <ChapterNavbar currentChapter={4} totalChapters={15} />
            {/* Header */}
            <header className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 shadow-sm border-b border-emerald-200">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900">Sequence & Series</h1>
                    <p className="mt-2 text-emerald-800 text-lg">Arithmetic & Geometric Progressions, Special Series (Applied Math)</p>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto p-6 space-y-12">

                {/* 1. Intro */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        1. Introduction
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-amber-700">Sequence</h4>
                            <MathText text={formulaText.sequenceDef} />
                            <div className="mt-4 p-3 bg-amber-50 rounded border border-amber-100 text-sm">
                                <strong>Fibonacci:</strong> <MathText text={formulaText.fibonacci} />
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-amber-700">Series</h4>
                            <MathText text={formulaText.seriesDef} />
                            <div className="mt-2 text-sm text-gray-600">
                                Represented by <MathText text="$\sum$ (Sigma)- '∑' notation." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Arithmetic Progression */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        2. Arithmetic Progression (A.P.)
                    </h2>
                    <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-6">
                        <MathText text={formulaText.apDef} />
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <FormulaBlock title="General Term" formula={formulaText.apGeneral} />
                            <FormulaBlock title="Sum of n Terms" formula={formulaText.apSum} />
                        </div>
                        <div className="mt-4 grid md:grid-cols-2 gap-6">
                            <NoteCard title="Arithmetic Mean" content={formulaText.apMean} type="info" />
                            <NoteCard title="Key Property" content={formulaText.apNthEnd} type="warning" />
                        </div>
                    </article>
                </section>

                {/* 3. Geometric Progression */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        3. Geometric Progression (G.P.)
                    </h2>
                    <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-rose-500 mb-6">
                        <MathText text={formulaText.gpDef} />
                        <div className="grid md:grid-cols-3 gap-6 mt-6">
                            <FormulaBlock title="General Term" formula={formulaText.gpGeneral} />
                            <FormulaBlock title="Sum (Finite)" formula={formulaText.gpSum} />
                            <div className="bg-rose-50 p-4 rounded border border-rose-200">
                                <h5 className="font-bold text-rose-800 mb-2 text-sm">Infinite GP Sum</h5>
                                <MathText text={formulaText.gpInfinite} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <NoteCard title="Geometric Mean" content={formulaText.gpMean} type="info" />
                        </div>
                    </article>
                </section>

                {/* 4. Applied Math & Comparison */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        4. Relationships & Applications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-700 mb-4">AM vs GM Inequality</h3>
                            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                                <MathText text={formulaText.amGmRelation} />
                                <p className="mt-2 text-sm text-purple-800 font-medium">Used for finding Min/Max values.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-700 mb-4">Real World Applications</h3>
                            <div className="space-y-4">
                                <NoteCard title="Compound Interest" content={formulaText.compoundInterest} type="tip" />
                                <NoteCard title="Depreciation" content={formulaText.depreciation} type="warning" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <ApGpVisual />
                    </div>
                </section>

                {/* 5. Special Series */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        5. Sum of Special Series
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FormulaBlock title="Sum of Natural Numbers" formula={formulaText.sumN} block />
                        <FormulaBlock title="Sum of Squares" formula={formulaText.sumN2} block />
                        <FormulaBlock title="Sum of Cubes" formula={formulaText.sumN3} block />
                    </div>
                </section>

                {/* Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">📝</span> Practice
                    </h2>
                    <ProblemList problems={problems} title="Concept Checks" chapterId="chapter4_concept" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Most Likely Questions" chapterId="chapter4_exam" />
                    </div>
                </section>

            </main>
        </div>
    );
}
