'use client';

import MathText from './MathText';
import { useState, useEffect } from 'react';

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
}

export default function ProblemList({ problems, title = 'Problems', chapterId }: ProblemListProps) {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

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
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        {mounted && (
          <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {Object.values(completed).filter(Boolean).length} / {problems.length} Completed
          </span>
        )}
      </div>

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
                          {parseInt(item.id)}.
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
