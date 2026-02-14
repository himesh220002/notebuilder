"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { ChapterTest } from '@/data/testsData';

interface MCQTestProps {
    test: ChapterTest;
    onClose: () => void;
}

const MCQTest: React.FC<MCQTestProps> = ({ test, onClose }) => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = test.questions[currentQuestionIdx];
    const progress = ((currentQuestionIdx) / test.questions.length) * 100;

    const handleSelect = (optionId: number) => {
        if (isAnswered) return;
        setSelectedOptionId(optionId);
    };

    const handleCheck = () => {
        if (selectedOptionId === null) return;

        const isCorrect = selectedOptionId === currentQuestion.correctAnswer;
        if (isCorrect) setScore(score + 1);
        setIsAnswered(true);
    };

    const handleNext = () => {
        if (currentQuestionIdx < test.questions.length - 1) {
            setCurrentQuestionIdx(currentQuestionIdx + 1);
            setSelectedOptionId(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    };

    const resetTest = () => {
        setCurrentQuestionIdx(0);
        setSelectedOptionId(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
    };

    React.useEffect(() => {
        if (showResults) {
            localStorage.setItem(`mcq_score_ch_${test.chapterId}`, JSON.stringify({
                score: score,
                total: test.questions.length,
                timestamp: new Date().getTime()
            }));
        }
    }, [showResults, score, test.chapterId, test.questions.length]);

    if (showResults) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full mx-auto text-center border-2 border-indigo-100"
            >
                <div className="bg-indigo-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-indigo-600" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-2">Test Completed!</h2>
                <p className="text-xl text-gray-600 mb-8">{test.chapterTitle}</p>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 mb-8 border border-indigo-100">
                    <p className="text-gray-500 uppercase tracking-widest font-bold text-sm mb-2">Your Score</p>
                    <div className="text-6xl font-black text-indigo-600">
                        {score} <span className="text-3xl text-indigo-300">/ {test.questions.length}</span>
                    </div>
                    <p className="mt-4 text-indigo-900 font-bold">
                        {score === test.questions.length ? "Perfect Score! 🎉" : score >= test.questions.length / 2 ? "Great job! Keep practicing. 👍" : "Needs more revision. You can do it! 💪"}
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={resetTest}
                        className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all"
                    >
                        <RotateCcw className="w-5 h-5" /> Retake Test
                    </button>
                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="max-w-3xl w-full mx-auto">
            {/* Header & Progress */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-black text-slate-800">{test.chapterTitle}</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Question {currentQuestionIdx + 1} of {test.questions.length}</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 font-bold">✕</button>
            </div>

            <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-12 border border-slate-200">
                <motion.div
                    className="h-full bg-indigo-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl shadow-xl border-2 border-indigo-50 p-8 md:p-12"
                >
                    <h4 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
                        {currentQuestion.text}
                    </h4>

                    <div className="space-y-4 mb-12">
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedOptionId === option.id;
                            const isCorrect = isAnswered && option.id === currentQuestion.correctAnswer;
                            const isWrong = isAnswered && isSelected && option.id !== currentQuestion.correctAnswer;

                            let borderClass = "border-slate-200 hover:border-indigo-300";
                            let bgClass = "bg-white";
                            let textClass = "text-slate-700";

                            if (isSelected && !isAnswered) {
                                borderClass = "border-indigo-500 ring-2 ring-indigo-200";
                                bgClass = "bg-indigo-50";
                                textClass = "text-indigo-900";
                            }

                            if (isCorrect) {
                                borderClass = "border-emerald-500 ring-2 ring-emerald-200";
                                bgClass = "bg-emerald-50";
                                textClass = "text-emerald-900 font-bold";
                            }

                            if (isWrong) {
                                borderClass = "border-rose-500 ring-2 ring-rose-200";
                                bgClass = "bg-rose-50";
                                textClass = "text-rose-900 font-bold";
                            }

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(option.id)}
                                    disabled={isAnswered}
                                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${borderClass} ${bgClass}`}
                                >
                                    <span className={`text-lg ${textClass}`}>{option.text}</span>
                                    {isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                                    {isWrong && <XCircle className="w-6 h-6 text-rose-600" />}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex justify-end">
                        {!isAnswered ? (
                            <button
                                onClick={handleCheck}
                                disabled={selectedOptionId === null}
                                className={`flex items-center gap-2 px-10 py-5 font-black rounded-xl transition-all text-lg shadow-lg ${selectedOptionId === null
                                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200"
                                    }`}
                            >
                                Check Answer
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 px-10 py-5 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all text-lg"
                            >
                                {currentQuestionIdx < test.questions.length - 1 ? "Next Question" : "See Results"}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MCQTest;
