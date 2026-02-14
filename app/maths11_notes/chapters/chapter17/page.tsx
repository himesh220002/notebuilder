'use client';

import React from 'react';
import {
    Binary,
    Users,
    Shapes,
    Zap,
    ArrowRight,
    Search,
    Brain,
    Activity,
    Compass,
    Sparkles,
    ShieldCheck
} from "lucide-react";
import MathText from "@/components/MathText";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import ReasoningVisuals from "@/components/ReasoningVisuals";
import { reasoningData, problems, examProblems } from "./data";

export default function LogicalReasoningChapter() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <ChapterNavbar currentChapter={17} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Hero Section */}
                <header className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full font-black text-[10px] uppercase tracking-widest mb-6 border border-indigo-100 shadow-sm">
                        <Brain className="w-4 h-4" /> Unit: Logical Reasoning
                    </div>
                    <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-tight tracking-tighter italic mb-8">
                        Logical <span className="text-indigo-600">Reasoning</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed border-l-4 border-indigo-200 pl-6 italic">
                        Master the art of decoding patterns, building relationship maps, and visualizing set-based logic for competitive math.
                    </p>
                </header>

                {/* 1. Coding-Decoding Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50">1</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Coding & Decoding</h2>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
                        <div className="lg:col-span-2 space-y-8">
                            <NoteCard
                                title="Understanding the Rule"
                                content={reasoningData.codingDecoding.intro}
                                type="info"
                            />

                            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                                    <Zap className="w-24 h-24 text-indigo-400" />
                                </div>
                                <h4 className="text-xl font-black mb-6 italic text-indigo-300">Strategy Guide</h4>
                                <ul className="space-y-4">
                                    {reasoningData.codingDecoding.types.map((type, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="w-6 h-6 bg-indigo-500 text-white rounded-lg flex items-center justify-center shrink-0 text-[10px] font-black">{idx + 1}</div>
                                            <div>
                                                <h5 className="font-black text-sm">{type.name}</h5>
                                                <p className="text-slate-400 text-xs font-bold italic mt-1">{type.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            {/* Component will be rendered within ReasoningVisuals wrapper but I can manually place them if I want more control. 
                                 However, to keep it clean, I'll use the specific labs if I exported them, otherwise the whole wrapper. 
                                 I'll use the ReasoningVisuals component which contains all 3 as planned. 
                             */}
                            <ReasoningVisuals />
                        </div>
                    </div>
                </section>

                <div className="h-px bg-slate-100 mb-28" />

                {/* Problems Section */}
                <section id="problems" className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-emerald-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Practice Problems</h2>
                    </div>
                    <ProblemList
                        problems={problems}
                        title="Chapter Exercises"
                        chapterId="chapter17"
                    />
                </section>

                {/* Exam Section */}
                <section className="mb-28">
                    <div className="bg-rose-600 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl shadow-rose-200">
                        <div className="absolute top-0 right-0 p-20 opacity-10">
                            <ShieldCheck className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <Sparkles className="w-8 h-8 text-rose-300" />
                                <h2 className="text-4xl lg:text-5xl font-black italic">CBSE Exam Focus</h2>
                            </div>
                            <p className="text-xl text-rose-100 font-bold max-w-2xl mb-16 leading-relaxed border-l-4 border-rose-400 pl-8">
                                These questions are curated from previous years' Applied Mathematics papers. Focus on speed and pattern recognition.
                            </p>

                            <ProblemList
                                problems={examProblems}
                                title="Exam Patterns"
                                chapterId="chapter17"
                                showTestButton={true}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
