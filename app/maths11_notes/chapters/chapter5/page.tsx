'use client';

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import CountingVisual, { CircularVisual, SelectionVisual } from "@/components/CountingVisual";
import ChapterNavbar from "@/components/ChapterNavbar";
import { formulaText, problems, examProblems, classicProblems } from "./data";

export default function PermutationsAndCombinations() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <ChapterNavbar currentChapter={5} totalChapters={13} />
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-lg">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight">Permutations & Combinations</h1>
                    <p className="mt-2 text-blue-100/90 text-lg">Applied Mathematics Class 11 - Chapter 5</p>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto p-6 space-y-12">

                {/* 1. Fundamental Principles */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        1. Fundamental Principles of Counting
                    </h2>

                    {/* Visual Component */}
                    <div className="mb-8">
                        <CountingVisual />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-green-700">Addition Principle</h4>
                            <MathText text={formulaText.additionPrinciple} />
                            <div className="mt-2 p-2 bg-green-50 text-xs text-green-800 rounded font-semibold">
                                Keywords: "OR", "EITHER"
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h4 className="font-bold text-lg mb-3 text-amber-700">Multiplication Principle</h4>
                            <MathText text={formulaText.multiplicationPrinciple} />
                            <div className="mt-2 p-2 bg-amber-50 text-xs text-green-800 rounded font-semibold text-amber-800">
                                Keywords: "AND", "THEN"
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Factorials */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        2. Factorial Notation
                    </h2>
                    <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-500 mb-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                                <FormulaBlock title="Definition" formula={formulaText.factorialDef} />
                            </div>
                            <div className="space-y-4">
                                <NoteCard title="Special Case" content={formulaText.factorialZero} type="warning" />
                                <NoteCard title="Property" content={formulaText.factorialRelation} type="info" />
                            </div>
                        </div>
                    </article>
                </section>

                {/* 3. Permutations */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        3. Permutations (Arrangements)
                    </h2>
                    <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500 mb-6">
                        <p className="text-gray-700 mb-4"><MathText text={formulaText.permutationDef} /></p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <FormulaBlock title="Linear Permutation Formula" formula={formulaText.nPrFormula} />
                            <div className="bg-purple-50 p-4 rounded border border-purple-200">
                                <h5 className="font-bold text-purple-900 mb-2">Key Scenarios</h5>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-purple-600">Repetition:</span>
                                        <span><MathText text={formulaText.permutationRepetition} /></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-purple-600">Alike Objects:</span>
                                        <span><MathText text={formulaText.permutationAlike} /></span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-purple-600">Circular:</span>
                                        <span><MathText text={formulaText.circularPermutation} /></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Extra Visual for Circular */}
                        <div className="mt-8">
                            <CircularVisual />
                        </div>
                    </article>
                </section>

                {/* 4. Combinations */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        4. Combinations (Selections)
                    </h2>
                    <article className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 mb-6">
                        <p className="text-gray-700 mb-4"><MathText text={formulaText.combinationDef} /></p>

                        {/* Intro Visual */}
                        <div className="mb-8">
                            <SelectionVisual />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <FormulaBlock title="Combination Formula" formula={formulaText.nCrFormula} />
                            <div className="space-y-4">
                                <NoteCard title="Symmetry Property" content={formulaText.nCrProperty1} type="info" />
                                <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm">
                                    <strong>Pascal's Rule:</strong> <MathText text={formulaText.pascalsRule} />
                                </div>
                            </div>
                        </div>

                        {/* Relation Section */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <h4 className="font-bold text-lg text-gray-800 mb-4">Relation between Permutations & Combinations</h4>
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                <FormulaBlock title="Relation" formula={formulaText.relationPnC} />
                                <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                                    <p className="mb-2"><strong>Understanding the Link:</strong></p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li><strong>Combinations</strong> ($^nC_r$) simply SELECT elements.</li>
                                        <li><strong>Permutations</strong> ($^nP_r$) SELECT AND ARRANGE them.</li>
                                        <li>Total Arrangements = (Ways to Select) $\times$ (Ways to Arrange Selection $r!$).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* 5. Binomial Theorem */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center border-b pb-2 border-gray-200">
                        5. Binomial Theorem
                    </h2>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <FormulaBlock title="Binomial Expansion" formula={formulaText.binomialStatement} block />
                        <div className="mt-6">
                            <FormulaBlock title="General Term" formula={formulaText.generalTerm} />
                        </div>
                    </div>
                </section>

                {/* Problems */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">📝</span> Practice
                    </h2>
                    <ProblemList problems={problems} title="Concept Checks" chapterId="chapter5_concept" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-amber-200 pb-2">🎲 Classic Counting: Coins, Dice, Cards</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <NoteCard title="Coins" content={formulaText.coinOutcome} type="info" />
                            <NoteCard title="Dice" content={formulaText.diceOutcome} type="warning" />
                            <NoteCard title="Cards" content={formulaText.cardOutcome} type="important" />
                        </div>
                        <ProblemList problems={classicProblems} title="Practice Scenarios" chapterId="chapter5_classic" />
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Important Questions (Applied Maths)" chapterId="chapter5_exam" />
                    </div>
                </section>

            </main>
        </div>
    );
}
