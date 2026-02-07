'use client';

import { ArrowLeft, Brain, Calculator, Activity, CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import LimitIntroVisual from "@/components/LimitIntroVisual";
import ContinuityVisual from "@/components/ContinuityVisual";
import ContinuityExamplesGallery from "@/components/ContinuityExamplesGallery";
import { formulaText, problems, examProblems, evaluationMethods } from "./data";

export default function LimitsContinuityChapter() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-violet-600 to-purple-800 text-white p-6 shadow-lg">
                <div className="max-w-[1200px] mx-auto">
                    <Link href="/" className="inline-flex items-center text-violet-100 hover:text-white mb-4 transition-colors font-semibold">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Chapters
                    </Link>
                    <h1 className="text-4xl font-extrabold tracking-tight">Limits & Continuity</h1>
                    <p className="mt-2 text-violet-100/90 text-lg">Applied Mathematics Class 11 - Chapter 7</p>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto p-6 space-y-12">

                {/* 1. Introduction to Limits */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        1. Introduction to Limits
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-violet-700 underline decoration-2 underline-offset-4">Concept of Limit</h4>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <MathText text={formulaText.limitDef} />
                            </p>
                            <div className="bg-violet-50 p-4 rounded-lg border-l-4 border-violet-400 mb-4">
                                <p className="text-sm font-bold text-violet-800">
                                    "We care about what happens NEAR $x=a$, not AT $x=a$."
                                </p>
                            </div>
                            <h5 className="font-bold text-gray-800 mt-4 mb-2">Left & Right Hand Limits</h5>
                            <p className="text-sm text-gray-600 mb-2">
                                <MathText text={formulaText.leftRightLimit} />
                            </p>
                        </div>

                        {/* Interactive Visual */}
                        <div className="flex flex-col gap-4">
                            <LimitIntroVisual />
                        </div>
                    </div>
                </section>

                {/* 2. Algebra & Standard Limits */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        2. Algebra & Standard Results
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-blue-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Calculator className="w-5 h-5 text-blue-500" />
                                <h4 className="font-bold text-gray-900">Algebra of Limits</h4>
                            </div>
                            <ul className="space-y-3 text-sm">
                                <li className="bg-gray-50 p-2 rounded"><MathText text={formulaText.algebraSum} /></li>
                                <li className="bg-gray-50 p-2 rounded"><MathText text={formulaText.algebraProd} /></li>
                                <li className="bg-gray-50 p-2 rounded"><MathText text={formulaText.algebraQuo} /></li>
                            </ul>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-emerald-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap className="w-5 h-5 text-emerald-500" />
                                <h4 className="font-bold text-gray-900">Standard Algebraic Limit</h4>
                            </div>
                            <div className="bg-emerald-50 p-3 rounded mb-2">
                                <MathText text={formulaText.standardAlg} />
                            </div>
                            <p className="text-xs text-gray-500 italic">Very useful for polynomial fractions.</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-amber-500">
                            <div className="flex items-center gap-2 mb-3">
                                <Brain className="w-5 h-5 text-amber-500" />
                                <h4 className="font-bold text-gray-900">Exp & Log Limits</h4>
                            </div>
                            <ul className="space-y-3 text-md">
                                <li className="bg-amber-50 p-2 rounded"><MathText text={formulaText.limitExp} /></li>
                                <li className="bg-amber-50 p-2 rounded"><MathText text={formulaText.limitLog} /></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. Evaluation Methods */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        3. Methods of Evaluation
                    </h2>
                    <div className="mb-6">
                        <NoteCard title="Indeterminate Forms" content={`Watch out for: ${formulaText.indeterminateForms}`} type="warning" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {evaluationMethods.map((method, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-lg text-violet-800 mb-2">{method.title}</h4>
                                <p className="text-sm text-gray-600 mb-4 h-12"><MathText text={method.concept} /></p>

                                <div className="space-y-3">
                                    <div className="p-2 bg-violet-50 rounded border border-violet-100 font-mono text-violet-900 text-lg text-center">
                                        Ex: <MathText text={method.example} />
                                    </div>
                                    <ol className="space-y-2">
                                        {method.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex gap-2 text-sm text-gray-700">
                                                <span className="font-bold text-violet-500">{sIdx + 1}.</span>
                                                <MathText text={step} />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Continuity */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        4. Continuity
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                <h4 className="font-bold text-lg mb-3 text-indigo-700">Definition</h4>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    <MathText text={formulaText.continuityDef} />
                                </p>
                                <div className="flex gap-2 items-center text-sm text-gray-600 bg-gray-50 p-3 rounded">
                                    <Activity className="w-4 h-4 text-indigo-500" />
                                    <span>Intuitively: A graph you can draw without lifting your pen.</span>
                                </div>
                            </div>

                            <NoteCard title="Discontinuity Types" content={formulaText.discontinuityTypes} type="info" />
                        </div>

                        {/* Continuity Visual */}
                        <ContinuityVisual />
                    </div>
                    <div className="mt-12">
                        <h5 className="font-bold text-gray-800 text-xl border-b pb-2 mb-6">Important Concept Graphs</h5>
                        <ContinuityExamplesGallery />
                    </div>
                </section>

                {/* Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">📝</span> Practice Zone
                    </h2>

                    <ProblemList problems={problems} title="Concept Check Problems" chapterId="chapter7_concept" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-violet-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Important Questions (Applied Maths)" chapterId="chapter7_exam" />
                    </div>
                </section >
            </main >
        </div >
    );
}
