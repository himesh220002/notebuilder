'use client';

import React from 'react';
import {
    Clock,
    Calendar,
    Zap,
    Truck,
    Table,
    Calculator,
    ShieldCheck,
    ArrowRight,
    Info,
    Activity,
    Layout,
    Layers,
    Target,
    Users,
    Rows,
    Timer,
    Compass
} from "lucide-react";
import MathText from "@/components/MathText";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import ChapterNavbar from "@/components/ChapterNavbar";
import ClockVisual from "@/components/ClockVisual";
import SeatingVisual from "@/components/SeatingVisual";
import AptitudeVisuals from "@/components/AptitudeVisuals";
import LeapYearLogic from "@/components/LeapYearLogic";
import { aptitudeData, problems, examProblems } from "./data";

export default function QuantAptitudeChapter() {
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <ChapterNavbar currentChapter={16} totalChapters={17} />

            <main className="max-w-[1300px] mx-auto px-6 py-16">
                {/* Hero Section */}
                <header className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-indigo-200 shadow-sm">
                        <Target className="w-4 h-4" />
                        Class 11 Applied Mathematics
                    </div>
                    <h1 className="text-7xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
                        Quantitative <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 italic">Aptitude Logic</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Mastering the logic of time, physical space, and calendars—transforming raw numbers into strategic reasoning.
                    </p>
                </header>

                {/* 1. Calendar Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-rose-50">1</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Calendars & Odd Days</h2>
                    </div>

                    <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Calendar className="w-48 h-48 text-rose-500" />
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-1 space-y-8">
                                <NoteCard
                                    title="Odd Days Logic"
                                    content="The core of calendar math is 'Odd Days'. It is the number of days more than a complete number of weeks.
                                    - Ordinary Year: $365 / 7 = 52$ weeks + **1 odd day**.
                                    - Leap Year: $366 / 7 = 52$ weeks + **2 odd days**."
                                    type="info"
                                />
                                <div className="p-8 bg-rose-900 rounded-3xl text-white shadow-xl">
                                    <h4 className="text-xl font-black mb-6 italic">Century Rules</h4>
                                    <div className="space-y-4 font-bold text-sm">
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>100 Years</span>
                                            <span className="text-rose-400">5 Odd Days</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>200 Years</span>
                                            <span className="text-rose-400">3 Odd Days</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/10 pb-2">
                                            <span>300 Years</span>
                                            <span className="text-rose-400">1 Odd Day</span>
                                        </div>
                                        <div className="flex justify-between text-emerald-400 font-black">
                                            <span>400 Years</span>
                                            <span>0 Odd Days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 w-full overflow-hidden">
                                <LeapYearLogic />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Clock Section */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50">2</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Clock Mechanics</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <ClockVisual />
                        </div>
                        <div className="space-y-6 flex flex-col justify-center">
                            <NoteCard
                                title="Clocks: 5 Essential Facts"
                                content="Based on a 12-hour period:
                                1. Hands coincide (0°) **11 times**.
                                2. Hands are opposite (180°) **11 times**.
                                3. Hands are in a straight line **22 times**.
                                4. Hands are at right angles (90°) **22 times**.
                                5. In 60 min, the minute hand gains **55 min spaces** over the hour hand."
                                type="tip"
                            />
                            <div className="p-8 bg-indigo-900 rounded-[2.5rem] text-white">
                                <h4 className="text-lg font-black mb-4 flex items-center gap-2">
                                    <Timer className="w-5 h-5 text-indigo-400" />
                                    Hand Speeds
                                </h4>
                                <div className="space-y-3">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                        <span className="text-[10px] uppercase font-black text-indigo-300 block mb-1">Minute Hand</span>
                                        <MathText text="$6^\circ / minute$" />
                                    </div>
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                        <span className="text-[10px] uppercase font-black text-indigo-300 block mb-1">Hour Hand</span>
                                        <MathText text="$0.5^\circ / minute$" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
                        <h3 className="text-3xl font-black mb-10 flex items-center gap-3 italic">
                            <Compass className="w-8 h-8 text-indigo-500" />
                            Angle Analysis Formula
                        </h3>
                        <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center">
                            <FormulaBlock
                                formula="$text{Angle } \theta = |30H - 5.5M|$"
                                title="The Universal Clock Formula"
                            />
                            <p className="mt-6 text-slate-400 font-bold italic text-sm">Valid for all values of $H \in [1, 12]$ and $M \in [0, 59]$.</p>
                        </div>
                    </div>
                </section>

                {/* 3. Time, Work & Distance */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-orange-50">3</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Time, Work & Movement</h2>
                    </div>

                    <AptitudeVisuals />

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                            <h4 className="text-2xl font-black mb-6 text-orange-600 italic">Distance Logic</h4>
                            <div className="space-y-6">
                                <NoteCard
                                    title="Relative Speed"
                                    content="When two objects move:
                                    - Opposite direction: Speed = $S_1 + S_2$.
                                    - Same direction: Speed = $|S_1 - S_2|$."
                                    type="important"
                                />
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-2">Average Speed (Equal Distances)</span>
                                    <MathText text="$text{Avg Speed} = frac{2xy}{x+y}$" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100">
                            <h4 className="text-2xl font-black mb-6 text-emerald-600 italic">Work Logic</h4>
                            <div className="space-y-6">
                                <NoteCard
                                    title="Capacity & Time"
                                    content="Work and Efficiency are inversely related. If A is twice as fast as B, A takes half the time of B."
                                    type="tip"
                                />
                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-[10px] font-black text-slate-400 uppercase block mb-2">Combined Work Formula</span>
                                    <MathText text="$text{together} = frac{Work_1 times Work_2}{Work_1 + Work_2}$" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Seating Arrangement */}
                <section className="mb-28">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-emerald-50">4</div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight italic">Logical Seating</h2>
                    </div>

                    <SeatingVisual />

                    <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Activity className="w-48 h-48" />
                        </div>
                        <h3 className="text-4xl font-black mb-12 italic underline decoration-emerald-500 underline-offset-8">Strategy Checklist</h3>
                        <div className="grid md:grid-cols-2 gap-8 relative">
                            {[
                                { title: "Fixed Positions", desc: "Always start with clues that give an exact location (e.g., 'A is at the extreme left').", icon: ShieldCheck },
                                { title: "Relative Clues", desc: "Connect other people to the fixed person using 'Left' and 'Right' cues.", icon: Users },
                                { title: "Facing Directions", icon: Compass, desc: "In circular tables, clarify if they face center (Left = Anti-clockwise) or outward." },
                                { title: "Possibilities", icon: Layers, desc: "If unsure, draw multiple sketches and eliminate those that contradict any clues." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 transition-all hover:bg-white/10 group">
                                    <item.icon className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-xl font-black mb-4">{item.title}</h4>
                                    <p className="text-sm font-semibold text-slate-400 leading-relaxed italic">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Practice Zone */}
                <section className="mb-28">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
                        <div>
                            <span className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] block mb-2">Aptitude Lab</span>
                            <h2 className="text-6xl font-black text-slate-900 tracking-tighter italic">Logic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-500">Practice</span></h2>
                        </div>
                        <div className="h-px flex-1 bg-slate-200 mx-8 hidden lg:block" />
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">8 Concept Problems</div>
                            <div className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">5 Exam Masterworks</div>
                        </div>
                    </div>

                    <ProblemList problems={problems} chapterId="chapter16" title="Logical Analysis Zone" showTestButton={true} />

                    <div className="mt-24 space-y-12">
                        <header className="text-center">
                            <h3 className="text-3xl font-black text-slate-900 mb-2 italic underline decoration-indigo-300 underline-offset-8">Competitive Edge</h3>
                            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-6">Board questions & Logical Extensions</p>
                        </header>
                        <div className="grid md:grid-cols-2 gap-8">
                            {examProblems.map((prob, idx) => (
                                <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-indigo-200 transition-all hover:shadow-2xl relative group">
                                    <div className="absolute top-0 right-0 p-6">
                                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-[10px] font-black uppercase tracking-tighter ring-1 ring-indigo-200 shadow-sm">
                                            {prob.examTag}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-8 pr-20 leading-relaxed italic">{prob.question}</h4>
                                    <div className="bg-slate-50 p-6 rounded-2xl border-l-[6px] border-indigo-500">
                                        <span className="text-indigo-600 font-black text-[10px] uppercase tracking-widest block mb-4">Logic Pathway</span>
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
