'use client';

import Link from "next/link";
import ExponentialGraph from "@/components/ExponentialGraph";
import LogarithmicGraph from "@/components/LogarithmicGraph";
import FormulaBlock from "@/components/FormulaBlock";
import NoteCard from "@/components/NoteCard";
import ProblemList from "@/components/ProblemList";
import MathText from "@/components/MathText";
import ChapterNavbar from "@/components/ChapterNavbar";
import { formulaText, problems, rules, logRules, logExamples, antilogExamples } from "./data";

// Helper component for rule cards to avoid dynamic classes
const RuleCard = ({ rule, formula, note, color }: { rule: string, formula: string, note: string, color: string }) => {
  const colorMap: Record<string, { bg: string, border: string, text: string }> = {
    blue: { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-900" },
    green: { bg: "bg-green-50", border: "border-green-500", text: "text-green-900" },
    purple: { bg: "bg-purple-50", border: "border-purple-500", text: "text-purple-900" },
    yellow: { bg: "bg-yellow-50", border: "border-yellow-500", text: "text-yellow-900" },
    pink: { bg: "bg-pink-50", border: "border-pink-500", text: "text-pink-900" },
    red: { bg: "bg-red-50", border: "border-red-500", text: "text-red-900" },
    cyan: { bg: "bg-cyan-50", border: "border-cyan-500", text: "text-cyan-900" },
  };

  const styles = colorMap[color] || colorMap.blue;

  return (
    <div className={`${styles.bg} p-6 rounded-lg border-l-4 ${styles.border}`}>
      <h4 className={`font-bold text-lg ${styles.text} mb-2`}>{rule}</h4>
      <div className="bg-white p-4 rounded mb-3 border border-gray-200">
        <FormulaBlock formula={formula} block={false} title="" />
      </div>
      <p className="text-gray-700"><strong>💡 Note:</strong> {note}</p>
    </div>
  );
};

export default function Chapter2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <ChapterNavbar currentChapter={2} totalChapters={15} />
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 py-16">

        <header className="mb-16 pb-8 border-b-4 border-indigo-200 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 mb-4">
            Chapter 2: Indices &amp; Logarithms (Part 1)
          </h1>
          <p className="text-xl text-gray-700 mb-2 font-semibold">Exercise | Class 11 Applied Mathematics</p>
          <p className="text-gray-600 text-lg">Master exponential expressions and lay the foundation for understanding logarithms</p>
        </header>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="text-4xl">📚</span>Key Topics
          </h2>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">1. Introduction &amp; Purpose</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Indices (or exponents) provide a compact way to express repeated multiplication. Understanding indices is essential for working with exponential functions and their inverses—logarithms.
            </p>
            <FormulaBlock formula={formulaText.exponentialForm} block title="Exponential Form" />
            <div className="my-8">
              <NoteCard title="Why Indices Matter" content={formulaText.whyIndices} type="info" />
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-xl text-indigo-900 mb-4">Terminology:</h4>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li><strong>Base:</strong> The number being multiplied repeatedly</li>
                <li><strong>Index/Exponent:</strong> How many times the base is multiplied by itself</li>
                <li><strong>Power:</strong> The result of raising a base to an exponent</li>
              </ul>
            </div>
          </article>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">2. The Golden Rules of Indices</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              These seven fundamental laws are your toolkit for manipulating and simplifying exponential expressions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rules.map((item) => (
                <RuleCard key={item.rule} {...item} />
              ))}
            </div>
          </article>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
            <h3 className="text-3xl font-bold text-green-900 mb-6">3. Roots &amp; Fractional Powers</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Fractional exponents are another way to express roots. They combine the rules of exponents with the concept of roots.
            </p>
            <FormulaBlock formula={formulaText.fractionalPower} block title="Fractional Power Formula" />
            <div className="space-y-6 mt-8">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-lg text-green-900 mb-4">Square Roots</h4>
                <p className="text-gray-700 mb-3">A square root is a fractional exponent with denominator 2:</p>
                <FormulaBlock formula={formulaText.sqrtFormula} block title="Root as Exponent" />
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-lg text-blue-900 mb-4">Complex Fractions</h4>
                <p className="text-gray-700 mb-3">When evaluating <MathText text="$a^{m/n}$" />, you can evaluate as either:</p>
                <div className="ml-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <MathText text="$(a^m)^{1/n}$" />
                    <span>- raise first, then take root</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✓</span>
                    <MathText text="$(a^{1/n})^m$" />
                    <span>- take root first, then raise</span>
                  </div>
                  <div className="text-gray-700">💡 Both methods give the same answer!</div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-lg text-red-900 mb-4">Undefined Cases</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>❌ <MathText text="$0^0$" /> is undefined (indeterminate form)</li>
                  <li>❌ <MathText text="$a^{1/2}$" /> is not real if <MathText text="$a < 0$" /> (in real numbers)</li>
                  <li>✓ Always check domain restrictions in your work!</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-orange-500">
            <h3 className="text-3xl font-bold text-orange-900 mb-6">4. Solving &amp; Simplifying Equations</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Strategy is key when solving equations with exponents. Use these proven techniques to simplify and solve.
            </p>
            <div className="space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-lg text-orange-900 mb-4">Step 1: Grouping</h4>
                <p className="text-gray-700 mb-3">Organize like terms: collect all terms with the same base together.</p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="font-mono text-sm text-gray-900">
                    <MathText text={formulaText.grouping} />
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-lg text-yellow-900 mb-4">Step 2: Prime Factorization</h4>
                <p className="text-gray-700 mb-3">Convert different bases to a common base using prime factors.</p>
                <div className="bg-white p-4 rounded border border-gray-200">
                  <p className="font-mono text-sm text-gray-900">
                    <MathText text={formulaText.factorization} />
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-lg text-purple-900 mb-4">Step 3: Apply Equality Logic</h4>
                <p className="text-gray-700 mb-3">Use these fundamental principles:</p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li><strong>Same Base:</strong> If <MathText text="$a^x = a^y$" /> (same base), then <MathText text="$x = y$" /></li>
                  <li><strong>Same Power:</strong> If <MathText text="$x^a = y^a$" /> (same power, both positive), then <MathText text="$x = y$" /></li>
                </ul>
              </div>
            </div>
          </article>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-pink-500">
            <h3 className="text-3xl font-bold text-pink-900 mb-6">5. Typical Question Types</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Exams typically feature these three categories. Mastering each will prepare you thoroughly.
            </p>
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                <h4 className="font-bold text-lg text-pink-900 mb-4">Type 1: Simplification</h4>
                <p className="text-gray-700 mb-3">Reduce complex expressions using the index rules.</p>
                <p className="text-gray-700 font-mono bg-white p-3 rounded text-sm">
                  Example: <MathText text="$[(2^3)^2 \\times 2^{-1}] \\div 2^4 = 2$" />
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-lg text-blue-900 mb-4">Type 2: Variable Solving</h4>
                <p className="text-gray-700 mb-3">Find the value of the unknown exponent.</p>
                <p className="text-gray-700 font-mono bg-white p-3 rounded text-sm">
                  Example: <MathText text="$3^x = 81 \\Rightarrow 3^x = 3^4 \\Rightarrow x = 4$" />
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-lg text-green-900 mb-4">Type 3: Combined Operations</h4>
                <p className="text-gray-700 mb-3">Mix <MathText text="$\times$, $\div$" />, roots, and fractional exponents.</p>
                <p className="text-gray-700 font-mono bg-white p-3 rounded text-sm">
                  Example: <MathText text="$\\sqrt[3]{8} \\times \\sqrt{16} = 2 \\times 4 = 8$" />
                </p>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="text-4xl">📊</span>Visual Understanding: Exponential vs Logarithmic
          </h2>
          <ExponentialGraph />
          <LogarithmicGraph />
          <div className="mt-8 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 p-8 rounded-xl border-2 border-indigo-200 shadow-lg">
            <h4 className="text-2xl font-bold text-indigo-900 mb-4">🔄 The Inverse Relationship</h4>
            <p className="text-gray-700 text-lg mb-4">Logarithms are the <strong>inverse</strong> of exponentials:</p>
            <ul className="space-y-3 text-gray-700 text-lg">
              <li>✓ <MathText text={formulaText.inverse} /></li>
              <li>✓ They "undo" each other: <MathText text="$a^{\\log_a(x)} = x$" /> and <MathText text="$\\log_a(a^x) = x$" /></li>
              <li>✓ Exponentials grow/decay rapidly; logarithms grow slowly</li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="text-4xl">🛠️</span>Properties of Logarithms
          </h2>
          <article className="bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              These fundamental properties allow you to split, combine, and simplify logarithmic expressions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {logRules.map((item) => (
                <RuleCard key={item.rule} {...item} />
              ))}
            </div>
          </article>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="text-4xl">📐</span>Logarithms in Depth
          </h2>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-600">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">1. Breakdown of a Logarithm</h3>
            <FormulaBlock formula={formulaText.partsOfLog} block title="Structure" />

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-xl text-blue-900 mb-3">Characteristic</h4>
                <p className="text-gray-700 mb-4">{formulaText.characteristicDef}</p>
                <div className="bg-white p-4 rounded border border-blue-200 text-sm mb-4">
                  <MathText text={formulaText.charRules} block />
                </div>

                {/* New Log Examples */}
                <h5 className="font-bold text-blue-800 mb-2">Detailed Examples:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {logExamples.map((ex, idx) => (
                    <div key={idx} className="bg-white p-4 rounded shadow-sm border border-blue-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-lg text-blue-900">Num: <MathText text={ex.val} /></span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">Char: {ex.char.split('=')[0]}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1"><strong>Step:</strong> {ex.step}</p>
                      <p className="text-gray-600 text-sm"><strong>Calc:</strong> <MathText text={ex.char} /></p>
                      <p className="text-gray-500 text-xs mt-2 italic"><MathText text={ex.expl} /></p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-xl text-green-900 mb-3">Mantissa</h4>
                <p className="text-gray-700 mb-4">{formulaText.mantissaDef}</p>
                <p className="text-gray-700 italic text-sm mb-4">Note: We use log tables to find the mantissa based on the sequence of significant digits.</p>
                <div className="bg-white p-4 rounded border border-green-200">
                  <strong>Note:</strong> <MathText text="Mantissa is always positive." />
                  <br />
                  If <MathText text="$\log x = -1.25$" />, we write it as:
                  <br />
                  <MathText text="$-1 - 0.25 = -1 - 1 + 1 - 0.25 = -2 + 0.75 = \bar{2}.75$" />
                </div>
              </div>
            </div>
          </article>

          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-pink-600">
            <h3 className="text-3xl font-bold text-pink-900 mb-6">2. Antilogarithms</h3>
            <p className="text-gray-700 mb-6 text-lg">The <strong>Antilog</strong> is simply the reverse process of finding a standard logarithm.</p>
            <FormulaBlock formula={formulaText.antilogDef} block title="Definition" />

            <div className="mt-8 bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
              <h4 className="font-bold text-lg text-pink-900 mb-4">How to Calculate Antilog</h4>
              <p className="text-gray-700 mb-4">Split the number into two parts:</p>
              <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>Integral Part (Characteristic):</strong> Determines the position of the decimal point.</li>
                <li><strong>Decimal Part (Mantissa):</strong> Look this up in the antilog table.</li>
              </ul>
              <FormulaBlock formula={formulaText.antilogCalc} block title="Calculation" />

              {/* Antilog Examples Table */}
              <div className="mt-8">
                <h5 className="font-bold text-lg text-pink-900 mb-4">Detailed Examples:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {antilogExamples.map((ex, idx) => (
                    <div key={idx} className="bg-white p-4 rounded shadow-sm border border-pink-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-lg text-pink-900">Log x: <MathText text={ex.logVal} /></span>
                        <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded font-bold">{ex.type}</span>
                      </div>
                      <div className="space-y-2">
                        {ex.steps.map((step, sIdx) => {
                          const parts = step.split(':');
                          const hasLabel = parts.length > 1 && parts[0].length < 25;

                          return (
                            <div key={sIdx} className="text-sm text-gray-700">
                              {hasLabel ? (
                                <>
                                  <span className="font-semibold text-pink-700">{parts[0]}:</span>
                                  <MathText text={parts.slice(1).join(':')} />
                                </>
                              ) : (
                                <MathText text={step} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">❓</span>Important Questions &amp; Problems
          </h2>
          <ProblemList problems={problems} title="Chapter 2 Practice Problems" chapterId="chapter2" />
        </section>

        <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-10 rounded-xl border-l-4 border-indigo-600 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">✓</span>Key Takeaways
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li><strong>Zero Power:</strong> Any non-zero base to power zero equals 1</li>
            <li><strong>Negative exponents:</strong> Negative powers mean reciprocals (flip to denominator)</li>
            <li><strong>Same base multiplication:</strong> Add exponents when multiplying same bases</li>
            <li><strong>Same base division:</strong> Subtract exponents when dividing same bases</li>
            <li><strong>Power of power:</strong> Multiply exponents when raising a power to another power</li>
            <li><strong>Fractional exponents:</strong> Express roots and rational powers equivalently</li>
            <li><strong>Convert bases:</strong> Use prime factorization to work with common bases</li>
            <li><strong>Logarithms ahead:</strong> These rules form the foundation for understanding inverse exponential functions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
