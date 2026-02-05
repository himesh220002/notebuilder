'use client';

import MathText from './MathText';

interface Problem {
  id: string;
  question: string;
  solution?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

interface ProblemListProps {
  problems: Problem[] | string[];
  title?: string;
}

export default function ProblemList({ problems, title = 'Problems' }: ProblemListProps) {
  return (
    <div className="my-8 w-full">
      <h4 className="text-2xl font-bold mb-6 text-gray-900">{title}</h4>
      <div className="space-y-5">
        {problems.map((problem, idx) => {
          const isString = typeof problem === 'string';
          const item = isString ? { id: idx.toString(), question: problem, solution: '' } : problem;
          const solutionLines = item.solution ? item.solution.split('\n') : [];

          return (
            <div key={item.id} className="p-5 border-l-4 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 font-bold text-lg mt-0.5">{parseInt(item.id) + 1}.</span>
                    <div className="font-semibold text-gray-800 text-base leading-relaxed">
                      <MathText text={item.question} />
                    </div>
                  </div>
                  {item.solution && (
                    <details className="mt-4 ml-8">
                      <summary className="cursor-pointer text-green-700 font-semibold hover:text-green-800 py-2 px-3 bg-white rounded border border-green-200 inline-block transition-colors">✓ Show Solution</summary>
                      <div className="mt-3 p-4 bg-white rounded border border-green-200 space-y-2">
                        {solutionLines.map((line, lineIdx) => (
                          <div key={lineIdx} className="text-gray-900 font-semibold leading-relaxed text-sm font-mono">
                            <MathText text={line} />
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
                {item.difficulty && (
                  <span className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${item.difficulty === 'easy' ? 'bg-green-200 text-green-800' :
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

