'use client';

import Link from "next/link";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import VennDiagram from "@/components/VennDiagram";
import FunctionGraph from "@/components/FunctionGraph";
import CompositeFunctionVisual from "@/components/CompositeFunctionVisual";
import { formulaText, setLaws, functionTypes, problems, compositeExamples, examProblems } from "./data";

export default function Chapter3() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 py-16">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 shadow-md hover:shadow-lg">
                        <span className="text-xl">←</span>Back to Home
                    </Link>
                </div>

                <header className="mb-16 pb-8 border-b-4 border-indigo-200 text-center">
                    <h1 className="text-5xl md:text-6xl font-black text-indigo-900 mb-4">
                        Chapter 3: Sets, Relations & Functions
                    </h1>
                    <p className="text-xl text-gray-700 mb-2 font-semibold">Class 11 Applied Mathematics</p>
                    <p className="text-gray-600 text-lg">Master the language of mathematics through logic, collections, and mappings</p>
                </header>

                {/* Section 1: Sets */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                        <span className="text-4xl">📚</span>1. Sets and Their Representations
                    </h2>

                    <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
                        <h3 className="text-3xl font-bold text-indigo-900 mb-6">Introduction to Sets</h3>
                        <p className="text-gray-700 mb-6 text-lg">
                            Sets are the fundamental building blocks of modern mathematics. They allow us to group objects together and apply logic to them.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-xl text-gray-800 mb-4">Definitions</h4>
                                <div className="space-y-4">
                                    <FormulaBlock formula={formulaText.setDef} block={false} title="Definition" />
                                    <div className="bg-indigo-50 p-4 rounded-lg">
                                        <h5 className="font-bold text-indigo-900 mb-2">Representation Methods</h5>
                                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                                            <li>
                                                <strong>Roster Form:</strong> <MathText text={formulaText.rosterForm} />
                                            </li>
                                            <li>
                                                <strong>Set-Builder Form:</strong> <MathText text={formulaText.setBuilderForm} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-gray-800 mb-4">Types of Sets</h4>
                                <div className="space-y-4">
                                    <NoteCard title="Empty Set (Null/Void)" content={formulaText.emptySet} type="warning" />
                                    <NoteCard title="Subsets" content={formulaText.subsetDef} type="info" />
                                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                        <h5 className="font-bold text-purple-900 mb-2">Power Set</h5>
                                        <MathText text={formulaText.powerSetDef} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Section 2: Visual Set Operations */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                        <span className="text-4xl">🎨</span>2. Set Operations & Venn Diagrams
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <article className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                                <h4 className="text-2xl font-bold text-blue-900 mb-4">Union ($A \cup B$)</h4>
                                <MathText text={formulaText.unionDef} />
                                <div className="mt-4 flex justify-center">
                                    <VennDiagram mode="union" />
                                </div>
                            </article>
                            <article className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                                <h4 className="text-2xl font-bold text-green-900 mb-4">Difference ($A - B$)</h4>
                                <MathText text={formulaText.differenceDef} />
                                <div className="mt-4 flex justify-center">
                                    <VennDiagram mode="differenceA" />
                                </div>
                            </article>
                        </div>

                        <div className="space-y-6">
                            <article className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                                <h4 className="text-2xl font-bold text-purple-900 mb-4">Intersection ($A \cap B$)</h4>
                                <MathText text={formulaText.intersectionDef} />
                                <div className="mt-4 flex justify-center">
                                    <VennDiagram mode="intersection" />
                                </div>
                            </article>
                            <article className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                                <h4 className="text-2xl font-bold text-red-900 mb-4">Complement ($A'$)</h4>
                                <MathText text={formulaText.complementDef} />
                                {/* Note: VennDiagram component doesn't explicitly support complementA mode perfectly with the current mask logic, but we can assume difference from U for now or skip visual if tricky. 
                        Actually let's re-use differenceB logic as a proxy or stick to text definition if visual is complex.
                        Wait, I implemented 'differenceB' but not 'complementA' in the final `VennDiagram.tsx`. I should fix this or just use text.
                        The previous step shows I removed 'complementA' from the types. I will omit the diagram for now to avoid errors.
                    */}
                            </article>
                        </div>
                    </div>

                    {/* 3-Set Operations */}
                    <article className="bg-white p-8 rounded-xl shadow-md border-l-4 border-teal-500 mb-12">
                        <h3 className="text-3xl font-bold text-teal-900 mb-6">Operations on 3 Sets ($A, B, C$)</h3>
                        <p className="text-gray-700 mb-6">Using Venn diagrams for three sets allows us to visualize more complex relationships.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <h5 className="font-bold text-lg mb-2 text-teal-800">Union of 3 Sets</h5>
                                <VennDiagram mode="union3" />
                                <p className="mt-2 text-sm text-gray-500">$A \cup B \cup C$</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h5 className="font-bold text-lg mb-2 text-teal-800">Intersection of 3 Sets</h5>
                                <VennDiagram mode="intersection3" />
                                <p className="mt-2 text-sm text-gray-500">$A \cap B \cap C$</p>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white rounded-xl shadow-md p-8 border-l-4 border-orange-500">
                        <h3 className="text-3xl font-bold text-orange-900 mb-6">Laws of Algebra of Sets</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {setLaws.map((law, idx) => (
                                <div key={idx} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                    <h4 className="font-bold text-orange-800 mb-2">{law.name}</h4>
                                    <MathText text={law.formula} />
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <h4 className="font-bold text-xl text-gray-800 mb-4">Cardinality Formulas</h4>
                            <div className="space-y-2">
                                <FormulaBlock formula={formulaText.cardinalityFormula2} block={false} title="" />
                                <FormulaBlock formula={formulaText.cardinalityFormula3} block={false} title="" />
                            </div>
                        </div>
                    </article>
                </section>

                {/* Section 3: Relations */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                        <span className="text-4xl">🔗</span>3. Relations
                    </h2>

                    <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-pink-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-3xl font-bold text-pink-900 mb-6">Cartesian Product</h3>
                                <p className="text-gray-700 mb-4">Before defining relations, we need to understand the product of two sets.</p>
                                <FormulaBlock formula={formulaText.cartesianProduct} block title="Definition" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-pink-900 mb-6">Relation Definition</h3>
                                <p className="text-gray-700 mb-4">A relation is simply a subset of the Cartesian product.</p>
                                <NoteCard title="Relation R" content={formulaText.relationDef} type="tip" />
                                <div className="mt-4 bg-pink-50 p-4 rounded border border-pink-200">
                                    <MathText text={formulaText.domainRange} />
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Section 4: Functions */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
                        <span className="text-4xl">📈</span>4. Functions
                    </h2>

                    <div className="mb-12">
                        <NoteCard title="Definition" content={formulaText.functionDef} type="info" />
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Standard Real Functions</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {functionTypes.map((func, idx) => (
                            <div key={idx} className="flex flex-col h-full">
                                <FunctionGraph type={func.graphType as any} title={func.name} />
                                <div className="mt-4 bg-white p-4 rounded shadow-sm border border-gray-100 flex-grow">
                                    <p className="font-mono text-blue-600 mb-2 font-bold"><MathText text={func.formula} /></p>
                                    <p className="text-sm text-gray-600"><MathText text={func.desc} /></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <article className="bg-white rounded-xl shadow-md p-8 border-l-4 border-cyan-500 mb-12">
                        <h3 className="text-3xl font-bold text-cyan-900 mb-6">Algebra of Functions</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-cyan-50 p-4 rounded">
                                <strong className="text-cyan-900 block mb-2">Addition</strong>
                                <MathText text={formulaText.funcAddition} />
                            </div>
                            <div className="bg-cyan-50 p-4 rounded">
                                <strong className="text-cyan-900 block mb-2">Subtraction</strong>
                                <MathText text={formulaText.funcSubtraction} />
                            </div>
                            <div className="bg-cyan-50 p-4 rounded">
                                <strong className="text-cyan-900 block mb-2">Multiplication</strong>
                                <MathText text={formulaText.funcMultiplication} />
                            </div>
                            <div className="bg-cyan-50 p-4 rounded">
                                <strong className="text-cyan-900 block mb-2">Division</strong>
                                <MathText text={formulaText.funcDivision} />
                            </div>
                        </div>
                    </article>

                    {/* Composite Functions Section */}
                    <article className="bg-white rounded-xl shadow-md p-8 border-l-4 border-rose-500">
                        <h3 className="text-3xl font-bold text-rose-900 mb-6">Composite Functions ($g \circ f$)</h3>
                        <div className="mb-8">
                            <NoteCard title="Definition" content={formulaText.compositeDef} type="tip" />
                            <div className="mt-4 p-4 bg-rose-50 rounded border border-rose-100">
                                <MathText text={formulaText.compositeProperties} />
                            </div>
                        </div>

                        <div className="mb-8 flex justify-center">
                            <CompositeFunctionVisual />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-bold text-gray-800">Examples</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {compositeExamples.map((ex, idx) => (
                                    <div key={idx} className="bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                                        <div className="mb-2 text-sm text-gray-500">Example {idx + 1}</div>
                                        <div className="font-mono text-sm text-blue-800 mb-2"><MathText text={ex.f} /> , <MathText text={ex.g} /></div>
                                        <div className="font-bold text-gray-800 mb-2">Find $g \circ f$:</div>
                                        <div className="bg-white p-2 rounded border border-gray-200">
                                            <MathText text={ex.calc} />
                                        </div>
                                        <div className="mt-2 text-xs text-rose-600 font-semibold">
                                            <MathText text={ex.note} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </section>

                {/* Section 5: Problems */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="text-4xl">❓</span>Practice Problems
                    </h2>
                    <ProblemList problems={problems} title="Topic-wise Exercises" chapterId="chapter3_topic" />

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-indigo-200 pb-2">🔥 CBSE Exam Priority Questions</h3>
                        <ProblemList problems={examProblems} title="Most Likely Questions" chapterId="chapter3_exam" />
                    </div>
                </section>

            </div>
        </div>
    );
}
