"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, X, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import { testsData, ChapterTest } from '@/data/testsData';
import MCQTest from './MCQTest';

interface TestsGridProps {
    onClose: () => void;
}

const TestsGrid: React.FC<TestsGridProps> = ({ onClose }) => {
    const [selectedTest, setSelectedTest] = useState<ChapterTest | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTests = testsData.filter(test =>
        test.chapterTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-slate-50 w-full max-w-6xl h-full max-h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border-2 border-slate-200"
            >
                <AnimatePresence mode="wait">
                    {!selectedTest ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex-1 flex flex-col p-8 md:p-12 overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div>
                                    <h2 className="text-4xl font-black text-slate-900 mb-2">Practice Zone</h2>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Chapter-wise MCQ Tests</p>
                                </div>

                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 font-bold" />
                                    <input
                                        type="text"
                                        placeholder="Search chapters..."
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-indigo-500 transition-all outline-none font-semibold text-slate-800"
                                    />
                                </div>

                                <button
                                    onClick={onClose}
                                    className="p-4 bg-white hover:bg-slate-100 rounded-2xl border-2 border-slate-200 transition-all text-slate-400 group"
                                >
                                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredTests.map((test) => (
                                    <motion.button
                                        key={test.chapterId}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSelectedTest(test)}
                                        className="bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-50 transition-all text-left flex flex-col h-full group"
                                    >
                                        <div className="flex items-start justify-between mb-12">
                                            <div className="bg-indigo-50 p-4 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                                <Brain className="w-8 h-8" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-slate-200" />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-indigo-900 leading-tight">
                                            Chapter {test.chapterId}: {test.chapterTitle}
                                        </h3>

                                        <p className="text-slate-500 font-bold mb-2 text-sm uppercase tracking-wider">
                                            {test.questions.length} Questions
                                        </p>
                                        <LastScoreGrid chapterId={test.chapterId} />
                                        <div className="mb-8"></div>

                                        <div className="mt-auto flex items-center justify-between text-indigo-600 font-black text-lg">
                                            <span>Start Test</span>
                                            <div className="flex bg-indigo-50 p-2 rounded-lg group-hover:translate-x-1 transition-all">
                                                <Play className="w-5 h-5 fill-current" />
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="test"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex-1 flex flex-col p-8 md:p-12 overflow-y-auto custom-scrollbar"
                        >
                            <MCQTest test={selectedTest} onClose={() => setSelectedTest(null)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

interface LastScoreGridProps {
    chapterId: number;
}

const LastScoreGrid: React.FC<LastScoreGridProps> = ({ chapterId }) => {
    const [lastScore, setLastScore] = React.useState<{ score: number, total: number } | null>(null);

    React.useEffect(() => {
        const saved = localStorage.getItem(`mcq_score_ch_${chapterId}`);
        if (saved) {
            try {
                setLastScore(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse score", e);
            }
        }
    }, [chapterId]);

    if (!lastScore) return null;

    return (
        <div className="mt-2 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 w-fit">
            LAST ATTEMPT: {lastScore.score}/{lastScore.total}
        </div>
    );
};

export default TestsGrid;
