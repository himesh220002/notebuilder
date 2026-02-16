'use client';

import React from 'react';
import {
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
    Ruler
} from "lucide-react";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import CoordinateGeometryVisual from "@/components/CoordinateGeometryVisual";
import SlopeVisual from "@/components/SlopeVisual";
import TrigVisual from "@/components/TrigVisual";
import { straightLineData, problems, examProblems } from "./data";

export default function StraightLineChapter() {
    return (
        <div className="min-h-screen bg-[#f1f5f9] font-sans text-slate-900">
            <ChapterNavbar currentChapter={12} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Modern Hero Section */}
                <header className="mb-16 md:mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6 md:mb-8 border border-indigo-200 shadow-sm">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                        Class 11 Applied Mathematics
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter">
                        Straight <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Lines</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                        The intersection of algebra and geometry. From fundamental distances to complex normal forms and coordinate transformations.
                    </p>
                </header>

                <section className="mb-20 md:mb-28">
                    <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 p-6 sm:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-5">
                            <Grid className="w-32 h-32 sm:w-64 sm:h-64 text-indigo-900" />
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16 relative">
                            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-indigo-900 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-xl sm:text-3xl font-black shadow-2xl rotate-3">1</div>
                            <div>
                                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Foundational Geometry</h2>
                                <p className="text-slate-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.2em]">Coordinates & Ratios</p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <div className="p-4 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all group">
                                    <h3 className="text-lg sm:text-xl font-black mb-4 sm:mb-6 flex items-center gap-2 text-indigo-950">
                                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                                        Distance Formula
                                    </h3>
                                    <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-slate-100 mb-4 transform group-hover:-rotate-1 transition-transform overflow-x-auto">
                                        <MathText text={straightLineData.fundamentals.distanceFormula} />
                                    </div>
                                    <p className="text-[12px] sm:text-sm text-slate-600 leading-relaxed italic">
                                        Derived from the Pythagorean theorem: $a^2 + b^2 = c^2$.
                                    </p>
                                </div>

                                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                                    <h3 className="text-xl font-black mb-6 text-indigo-950">Section & Centroid</h3>
                                    <div className="space-y-4 text-xs font-bold text-slate-500">
                                        <div className="p-4 bg-white rounded-xl shadow-sm flex items-center justify-between gap-4">
                                            <span>Centroid ($G$)</span>
                                            <MathText text={straightLineData.fundamentals.centroid} />
                                        </div>
                                        <div className="p-4 bg-white rounded-xl shadow-sm flex items-center justify-between gap-4">
                                            <span>Internal Division</span>
                                            <MathText text={straightLineData.fundamentals.sectionFormulaInternal} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <CoordinateGeometryVisual />

                                {/* Focused Coefficient Explorer */}
                                <div className="mt-8 bg-slate-900 rounded-[2.5rem] p-10 text-white border-t-8 border-indigo-500 shadow-2xl">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Binary className="w-6 h-6 text-indigo-400" />
                                        <h4 className="text-xl font-black italic tracking-tight">The General Key: $Ax + By + C = 0$</h4>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-6">
                                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                            <span className="block text-[10px] font-black text-indigo-400 uppercase mb-2 tracking-widest">Slope (m)</span>
                                            <div className="text-2xl font-black mb-1 group-hover:scale-110 transition-transform">$-A/B$</div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">Vertical Ratio</p>
                                        </div>
                                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                            <span className="block text-[10px] font-black text-emerald-400 uppercase mb-2 tracking-widest">Y-Intercept</span>
                                            <div className="text-2xl font-black mb-1 group-hover:scale-110 transition-transform">$-C/B$</div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">Intersection @ Y</p>
                                        </div>
                                        <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                            <span className="block text-[10px] font-black text-amber-400 uppercase mb-2 tracking-widest">X-Intercept</span>
                                            <div className="text-2xl font-black mb-1 group-hover:scale-110 transition-transform">$-C/A$</div>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">Intersection @ X</p>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-[11px] text-indigo-300 font-medium italic text-center">
                                        Tip: Always convert non-standard equations to General Form before extraction.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Slope and Trig Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-amber-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Slope & Trigonometric Relation</h2>
                    </div>

                    <SlopeVisual />
                    <TrigVisual />

                    {/* Trig Table Section */}
                    <div className="mt-16 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                        <div className="p-8 bg-indigo-900 text-white flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-black flex items-center gap-2">
                                    <Activity className="w-6 h-6" />
                                    The Trig Atlas
                                </h3>
                                <p className="text-indigo-300 text-sm">Essential values from 0° to 180° for slope calculations.</p>
                            </div>
                            <div className="text-right hidden md:block">
                                <span className="block text-[10px] font-black text-indigo-400 uppercase tracking-widest">ASTC Rule</span>
                                <span className="text-xs font-bold">Only Sin is +ve in Q2 (90-180)</span>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">Angle ($\theta$)</th>
                                        <th className="p-6 text-xs font-black text-indigo-600 uppercase tracking-widest">Sin $\theta$</th>
                                        <th className="p-6 text-xs font-black text-violet-600 uppercase tracking-widest">Cos $\theta$</th>
                                        <th className="p-6 text-xs font-black text-amber-600 uppercase tracking-widest bg-amber-50/30">Tan $\theta$ (Slope)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {straightLineData.trigTable.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 font-black text-slate-900">{row.angle}</td>
                                            <td className="p-6 text-sm font-bold text-slate-500">{row.sin}</td>
                                            <td className="p-6 text-sm font-bold text-slate-500">{row.cos}</td>
                                            <td className="p-6 text-sm font-black text-amber-700 bg-amber-50/10"><MathText text={`$${row.tan}$`} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 3. Line Equation Forms */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-16 relative">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-fuchsia-600 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-xl sm:text-3xl font-black shadow-2xl">3</div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter italic underline decoration-fuchsia-200 underline-offset-8 leading-tight">Forms of Equation</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(straightLineData.lineForms).map(([key, value], idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <Hash className="w-6 h-6" />
                                </div>
                                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                                <div className="mb-6">
                                    <MathText text={value} />
                                </div>
                                <div className="h-1 w-12 bg-indigo-200 rounded-full group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-slate-900 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <h4 className="text-3xl font-black mb-6 text-indigo-400">Angle Between Lines</h4>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                                The acute angle $\theta$ between two lines with slopes $m_1$ and $m_2$ is determined by the tangent formula.
                            </p>
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                                <MathText text={straightLineData.angles.betweenLines} />
                            </div>
                        </div>
                        <div className="md:w-px h-32 bg-slate-800" />
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                <span className="font-black text-xs uppercase tracking-widest">Parallel: $m_1 = m_2$</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" />
                                <span className="font-black text-xs uppercase tracking-widest">Perpendicular: $m_1 m_2 = -1$</span>
                            </div>
                            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                                <span className="block text-[10px] font-bold text-indigo-400 uppercase mb-2">Compound Trig</span>
                                <MathText text={straightLineData.reductionFormulas.tanAMinusB} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Distances & Proximity */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16 relative">
                        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-emerald-600 text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-xl sm:text-3xl font-black shadow-2xl rotate-3">4</div>
                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter italic leading-tight">Distances & Proximity</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-emerald-200 transition-all group">
                            <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 text-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Point to Line</h3>
                            </div>
                            <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed font-medium">
                                The perpendicular distance $d$ from a point $P(x_1, y_1)$ to the line $Ax + By + C = 0$.
                            </p>
                            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white transform group-hover:scale-[1.02] transition-transform shadow-2xl overflow-x-auto">
                                <MathText text={straightLineData.distances.pointToLine} />
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-200 transition-all group">
                            <div className="flex items-center gap-4 mb-6 sm:mb-8">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                    <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Parallel Lines</h3>
                            </div>
                            <p className="text-slate-500 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed font-medium">
                                The distance $d$ between two parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$.
                            </p>
                            <div className="bg-indigo-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white transform group-hover:scale-[1.02] transition-transform shadow-2xl overflow-x-auto">
                                <MathText text={straightLineData.distances.parallelLines} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Problems & Labs */}
                <section className="mb-28">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                        <div>
                            <span className="text-[10px] sm:text-xs font-black text-indigo-600 uppercase tracking-[0.3em] block mb-2">Practice Laboratory</span>
                            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Geometric <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 italic">Workouts</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block" />
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">8 Challenge Problems</div>
                            <div className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">CBSE Ready</div>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter12" title="Analysis Zone" showTestButton={true} />

                    <div className="mt-24 space-y-12">
                        <header className="text-center">
                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 italic">Competitive Corner</h3>
                            <p className="text-slate-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest underline decoration-indigo-200 underline-offset-4">Board & Previous Year Questions</p>
                        </header>
                        <div className="grid md:grid-cols-2 gap-8">
                            {examProblems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-indigo-200 transition-colors relative group">
                                    <div className="absolute top-0 right-0 p-4 sm:p-6">
                                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-tighter">
                                            {prob.examTag}
                                        </span>
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 sm:mb-8 pr-16 sm:pr-20 leading-snug">{prob.question}</h4>
                                    <div className="bg-indigo-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-indigo-600">
                                        <span className="text-indigo-600 font-black text-[9px] sm:text-[10px] uppercase tracking-widest block mb-3 sm:mb-4">Official Solution</span>
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
