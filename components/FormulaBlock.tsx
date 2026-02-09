'use client';

import MathText from './MathText';

interface FormulaBlockProps {
  formula: string;
  block?: boolean;
  title?: string;
}

export default function FormulaBlock({ formula, block, title }: FormulaBlockProps) {
  const lines = formula.split('\n');

  return (
    <div className={block ? "my-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 shadow-sm" : "inline"}>
      {title && <h5 className="font-bold text-sm mb-3 text-blue-900">{title}</h5>}
      <div className={block ? "space-y-2 text-center text-base font-mono text-gray-800 bg-white p-4 rounded border border-blue-100" : "inline font-mono text-sm text-gray-700"}>
        {block ? (
          lines.map((line, idx) => <div key={idx} className="leading-relaxed"><MathText text={line} block={true} /></div>)
        ) : (
          <MathText text={formula} />
        )}
      </div>
    </div>
  );
}

