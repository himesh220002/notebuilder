'use client';

import React from 'react';
import {
    Circle as CircleIcon,
    Maximize2,
    Calculator,
    Hash,
    Compass,
    ChevronRight,
    Info,
    Grid,
    Binary,
    Activity,
    Target,
    Zap,
    Shapes,
    Ruler
} from "lucide-react";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import CirclesVisual from "@/components/CirclesVisual";
import ParabolaVisual from "@/components/ParabolaVisual";
import { conicsData, problems, examProblems } from "./data";

export default function CirclesParabolaChapter() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] font-sans text-slate-900">
            <ChapterNavbar currentChapter={13} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Modern Hero Section */}
                <header className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-sky-100 text-sky-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-sky-200 shadow-sm">
                        <Zap className="w-4 h-4" />
                        Class 11 Applied Mathematics
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        Circles & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-violet-600 italic">Parabola</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Exploring the beauty of conic sections. From the perfect symmetry of circles to the directional focus of parabolas.
                    </p>
                </header>

                {/* 1. Circles Section */}
                <section className="mb-28">
                    <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <CircleIcon className="w-64 h-64 text-sky-900" />
                        </div>

                        <div className="flex items-center gap-6 mb-16 relative">
                            <div className="w-20 h-20 bg-sky-900 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-2xl rotate-3">1</div>
                            <div>
                                <h2 className="text-4xl font-black text-slate-900">The Circle</h2>
                                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">Symmetry in Motion</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-1 gap-16">
                            <div className="space-y-8">
                                <NoteCard
                                    title="Standard Equation"
                                    content="A circle is the locus of a point which moves such that its distance from a fixed point (center) is constant (radius).\n\n$(x-h)^2 + (y-k)^2 = r^2$\n\nAt origin $(0,0)$: $x^2 + y^2 = r^2$"
                                    type="info"
                                />

                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                                    <h3 className="text-xl font-black mb-6 flex items-center gap-2 text-slate-900">
                                        <Shapes className="w-5 h-5 text-indigo-600" />
                                        Diameter & General Form
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 italic">
                                            <span className="block text-[10px] font-black text-slate-400 mb-2 uppercase">Diameter Form</span>
                                            <MathText text={conicsData.circles.diameterForm} />
                                        </div>
                                        <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                            <span className="block text-[10px] font-black text-indigo-400 mb-2 uppercase tracking-widest leading-none">Center Calculation</span>
                                            <p className="text-xs font-bold text-slate-600 mb-2">For $x^2 + y^2 + 2gx + 2fy + c = 0$:</p>
                                            <MathText text={conicsData.circles.centerRadius} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <CirclesVisual />

                                <div className="mt-8 bg-slate-900 rounded-[2.5rem] p-10 text-white border-b-8 border-sky-500 shadow-2xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Binary className="w-6 h-6 text-sky-400" />
                                        <h4 className="text-xl font-black italic tracking-tight underline decoration-sky-500/30 underline-offset-8">Wait! Radius Check</h4>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        The quantity $g^2 + f^2 - c$ determines the nature of the circle:
                                    </p>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                            <span className="block text-[10px] font-black text-emerald-400 mb-1">&gt; 0</span>
                                            <p className="text-[10px] font-bold">Real Circle</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                            <span className="block text-[10px] font-black text-amber-400 mb-1">= 0</span>
                                            <p className="text-[10px] font-bold">Point Circle</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                                            <span className="block text-[10px] font-black text-rose-400 mb-1">&lt; 0</span>
                                            <p className="text-[10px] font-bold">Imaginary</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 bg-sky-500/10 rounded-xl border border-sky-500/20 text-[10px] text-sky-300 font-bold italic text-center uppercase tracking-widest">
                                        Tip: g = half of coeff of x, f = half of coeff of y
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Parabola Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">The Parabola</h2>
                    </div>

                    <ParabolaVisual />

                    <div className="mt-16 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                        <div className="p-10 bg-indigo-900 text-white">
                            <h3 className="text-3xl font-black mb-4 flex items-center gap-3">
                                <Grid className="w-8 h-8 text-indigo-400" />
                                Standard Forms Comparison
                            </h3>
                            <p className="text-indigo-200 font-medium">Four orientations of the standard parabola with vertex at $(0,0)$.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Equation</th>
                                        <th className="p-6 text-xs font-black text-indigo-600 uppercase tracking-widest">Focus</th>
                                        <th className="p-6 text-xs font-black text-rose-600 uppercase tracking-widest">Directrix</th>
                                        <th className="p-6 text-xs font-black text-emerald-600 uppercase tracking-widest">Latus Rectum</th>
                                        <th className="p-6 text-xs font-black text-slate-600 uppercase tracking-widest">Axis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {conicsData.parabola.forms.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 font-black text-slate-900"><MathText text={`$${row.type}$`} /></td>
                                            <td className="p-6 text-sm font-bold text-slate-600">{row.focus}</td>
                                            <td className="p-6 text-sm font-bold text-rose-600 italic">{row.directrix}</td>
                                            <td className="p-6 text-sm font-black text-emerald-600">{row.lr}</td>
                                            <td className="p-6 text-xs font-black text-slate-400 uppercase tracking-tighter">{row.axis}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 3. Practice Zone */}
                <section className="mb-28">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                        <div>
                            <span className="text-xs font-black text-sky-600 uppercase tracking-[0.3em] block mb-2">Practice Laboratory</span>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter">Conics <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 italic">Workouts</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block" />
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">8 Important Problems</div>
                            <div className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">CBSE Exam Type</div>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter13" title="Concept Master" />

                    <div className="mt-24 space-y-12">
                        <header className="text-center">
                            <h3 className="text-3xl font-black text-slate-900 mb-2 italic">Competitive Corner</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest underline decoration-sky-200 underline-offset-4">Board & Previous Year Questions</p>
                        </header>
                        <div className="grid md:grid-cols-2 gap-8">
                            {examProblems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-sky-200 transition-all hover:shadow-2xl relative group">
                                    <div className="absolute top-0 right-0 p-6">
                                        <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-lg text-[10px] font-black uppercase tracking-tighter ring-1 ring-sky-200">
                                            {prob.examTag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-8 pr-20 leading-snug">{prob.question}</h4>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-600">
                                        <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest block mb-4">Detailed Solution</span>
                                        <MathText text={prob.solution} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
