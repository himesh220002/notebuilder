'use client';

import MathText from './MathText';
import { useState, useEffect } from 'react';
import { Brain, Play } from 'lucide-react';
import { testsData } from '@/data/testsData';
import MCQTest from './MCQTest';
import { AnimatePresence, motion } from 'framer-motion';

interface Problem {
  id: string;
  question: string;
  solution?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface ProblemListProps {
  problems: Problem[] | string[];
  title?: string;
  chapterId: string; // Required for scoping localStorage
  showTestButton?: boolean;
}

export default function ProblemList({ problems, title = 'Problems', chapterId, showTestButton }: ProblemListProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const [showChapterTest, setShowChapterTest] = useState(false);

  // Parse chapterId (e.g., 'chapter1' -> 1)
  const numericChapterId = parseInt(chapterId.replace('chapter', ''));
  const currentChapterTest = testsData.find(t => t.chapterId === numericChapterId);

  // Load progress from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(`progress_${chapterId}`);
    if (saved) {
      try {
        setCompleted(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, [chapterId]);

  // Save progress whenever it changes
  const toggleProblem = (id: string) => {
    const newCompleted = { ...completed, [id]: !completed[id] };
    setCompleted(newCompleted);
    localStorage.setItem(`progress_${chapterId}`, JSON.stringify(newCompleted));
  };

  return (
    <div className="my-8 w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-xl text-green-600">
            <Brain className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-3xl font-black text-gray-900">{title}</h4>
            {mounted && (
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">
                {Object.values(completed).filter(Boolean).length} / {problems.length} Solutions Mastered
              </p>
            )}
          </div>
        </div>

        {showTestButton && currentChapterTest && (
          <button
            onClick={() => setShowChapterTest(true)}
            className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Play className="w-5 h-5 fill-current" />
            <span>Take Chapter {numericChapterId} MCQ Test</span>
          </button>
        )}
      </div>

      <AnimatePresence>
        {showChapterTest && currentChapterTest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-slate-50 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-y-auto p-8 md:p-12 border-2 border-white/20 custom-scrollbar"
            >
              <MCQTest test={currentChapterTest} onClose={() => setShowChapterTest(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-5">
        {problems.map((problem, idx) => {
          const isString = typeof problem === 'string';
          const item = isString ? { id: idx.toString(), question: problem, solution: '' } : problem;
          const solutionLines = item.solution ? item.solution.split('\n') : [];
          const isCompleted = completed[item.id] || false;

          return (
            <div
              key={item.id}
              className={`p-5 border-l-4 rounded-lg shadow-md transition-all duration-300 ${isCompleted
                ? 'border-gray-400 bg-gray-50 opacity-75'
                : 'border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-lg'
                }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4">
                    {/* Checkbox for tracking */}
                    <div className="pt-1">
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => toggleProblem(item.id)}
                        className="w-6 h-6 text-green-600 rounded border-gray-300 focus:ring-green-500 cursor-pointer transition-colors"
                        title="Mark as completed"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <span className={`font-bold text-lg mt-0.5 ${isCompleted ? 'text-gray-500 line-through' : 'text-green-600'}`}>
                          {idx + 1}.
                        </span>
                        <div className={`font-semibold text-base leading-relaxed ${isCompleted ? 'text-gray-500' : 'text-gray-800'}`}>
                          <MathText text={item.question} />
                        </div>
                      </div>

                      {item.solution && (
                        <details className="mt-4 ml-2">
                          <summary className={`cursor-pointer font-semibold py-2 px-3 rounded border inline-block transition-colors text-sm ${isCompleted
                            ? 'bg-gray-100 text-gray-500 border-gray-300'
                            : 'bg-white text-green-700 hover:text-green-800 border-green-200'
                            }`}>
                            ✓ Show Solution
                          </summary>
                          <div className={`mt-3 p-4 rounded border space-y-2 ${isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white border-green-200'}`}>
                            {solutionLines.map((line, lineIdx) => (
                              <div key={lineIdx} className="text-gray-900 font-semibold leading-relaxed text-sm font-mono">
                                <MathText text={line} />
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
                {item.difficulty && (
                  <span className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap self-start ${isCompleted ? 'bg-gray-200 text-gray-600' :
                    item.difficulty === 'easy' ? 'bg-green-200 text-green-800' :
                      item.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-red-200 text-red-800'
                    }`}>
                    {item.difficulty.toUpperCase()}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
