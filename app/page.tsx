import { ArrowRight, BookOpen, Calculator, Calendar, ChevronRight, GraduationCap, Layout, PieChart, Star, Users, Brain, Activity, TrendingUp, Binary, Layers, ListOrdered, Dices } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 w-full">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16 py-16">
        {/* Header */}
        <header className="text-center py-20 mb-20 border-b-2 border-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">
          <h1 className="text-7xl text-center md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6">
            Mathematics Notes
          </h1>
          <p className="text-2xl text-gray-700 mb-4 font-bold">Class 11 Applied Mathematics</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive study material with visual mindmaps, detailed topics, and practice problems
          </p>
        </header>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {/* Chapter 1 Card */}
          <Link href="/maths11_notes/chapters/chapter1" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-blue-100 hover:border-blue-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-blue-900 mb-2">Chapter 1</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Numbers - Binary & Decimal Systems</h3>
                </div>
                <Binary className="w-20 h-20 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Master number system conversions and binary arithmetic operations with comprehensive examples and practice problems.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-bold border border-blue-300">Conversions</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full text-sm font-bold border border-indigo-300">Arithmetic</span>
                <span className="px-4 py-2 bg-cyan-100 text-cyan-900 rounded-full text-sm font-bold border border-cyan-300">18 Problems</span>
              </div>
              <div className="mt-10 text-blue-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 2 Card */}
          <Link href="/maths11_notes/chapters/chapter2" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-indigo-100 hover:border-indigo-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-indigo-900 mb-2">Chapter 2</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Indices & Logarithms</h3>
                </div>
                <TrendingUp className="w-20 h-20 text-indigo-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Understand the power of exponents, indices rules, and the fundamentals of logarithms.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-bold border border-purple-300">Exponents</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-900 rounded-full text-sm font-bold border border-pink-300">Logarithms</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full text-sm font-bold border border-indigo-300">Practice</span>
              </div>
              <div className="mt-10 text-indigo-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 3 Card */}
          <Link href="/maths11_notes/chapters/chapter3" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 3</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Sets, Relations & Functions</h3>
                </div>
                <Layers className="w-20 h-20 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Master the language of mathematics through set theory, logical relations, and functional mappings.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Sets</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Functions</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Graphs</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 4 Card */}
          <Link href="/maths11_notes/chapters/chapter4" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 4</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Sequences & Series</h3>
                </div>
                <ListOrdered className="w-20 h-20 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Master the language of mathematics through sequences and series.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Sequences</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Series</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Graphs</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 5 Card */}
          <Link href="/maths11_notes/chapters/chapter5" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 5</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Counting & Permutations</h3>
                </div>
                <Dices className="w-20 h-20 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Explore the principles of counting, factorials, and the art of arrangements and selections.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Factorials</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Permutations</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Combinations</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 6 Card */}
          <Link href="/maths11_notes/chapters/chapter6" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 6</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Functions</h3>
                </div>
                <Activity className="w-20 h-20 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Understand functional mappings, specialized types, and real-world applications.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Domain/Range</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Standard Graphs</span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Applied Math</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>
          {/* Chapter 7 Card */}
          <Link href="/maths11_notes/chapters/chapter7" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-violet-100 hover:border-violet-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-violet-900 mb-2">Chapter 7</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Limits & Continuity</h3>
                </div>
                <Activity className="w-20 h-20 text-violet-500 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Understand behavior of functions near specific points. Foundation for Calculus.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-violet-100 text-violet-900 rounded-full text-sm font-bold border border-violet-300">Limits</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-900 rounded-full text-sm font-bold border border-purple-300">Continuity</span>
              </div>
              <div className="mt-10 text-violet-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 8 Card */}
          <Link href="/maths11_notes/chapters/chapter8" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-blue-100 hover:border-blue-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-blue-900 mb-2">Chapter 8</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Differentiation</h3>
                </div>
                <div className="bg-blue-100 p-4 rounded-xl mb-6 inline-block group-hover:bg-blue-200 transition-colors">
                  <TrendingUp className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Master the rate of change. Chain rule, implicit differentiation, and tangents.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-900 rounded-full text-sm font-bold border border-blue-300">Derivatives</span>
                <span className="px-4 py-2 bg-sky-100 text-sky-900 rounded-full text-sm font-bold border border-sky-300">Chain Rule</span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-900 rounded-full text-sm font-bold border border-indigo-300">Tangents</span>
              </div>
              <div className="mt-10 text-blue-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 9 Card */}
          <Link href="/maths11_notes/chapters/chapter9" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 9</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Probability</h3>
                </div>
                <div className="bg-emerald-100 p-4 rounded-xl mb-6 inline-block group-hover:bg-emerald-200 transition-colors">
                  <Dices className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Quantify uncertainty. From basic events to Bayes' Theorem and Conditional Probability.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Events</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Conditional</span>
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Bayes</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>

          {/* Chapter 10 Card */}
          <Link href="/maths11_notes/chapters/chapter10" className="group">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-10 cursor-pointer h-full hover:scale-105 transform border-2 border-emerald-100 hover:border-emerald-500">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-5xl font-black text-emerald-900 mb-2">Chapter 10</h2>
                  <h3 className="text-2xl font-bold text-gray-800">Binomial Distribution</h3>
                </div>
                <div className="bg-emerald-100 p-4 rounded-xl mb-6 inline-block group-hover:bg-emerald-200 transition-colors">
                  <Dices className="w-10 h-10 text-emerald-600" />
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed font-semibold">
                Understand the binomial distribution, its parameters, and its applications in real-world scenarios.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold border border-emerald-300">Events</span>
                <span className="px-4 py-2 bg-teal-100 text-teal-900 rounded-full text-sm font-bold border border-teal-300">Conditional</span>
                <span className="px-4 py-2 bg-green-100 text-green-900 rounded-full text-sm font-bold border border-green-300">Bayes</span>
              </div>
              <div className="mt-10 text-emerald-600 font-bold flex items-center gap-3 text-lg group-hover:gap-4 transition-all">
                Start Learning
                <span className="group-hover:translate-x-2 transition-transform text-2xl">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-black text-center text-gray-900 mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📚',
                title: 'Comprehensive Topics',
                description: 'Well-organized topics with clear explanations and visual mindmaps for better understanding'
              },
              {
                icon: '✓',
                title: 'Practice Problems',
                description: '18+ problems per chapter with detailed step-by-step solutions and difficulty levels'
              },
              {
                icon: '🎯',
                title: 'Exam Ready',
                description: 'Focused content designed for Class 11 examinations with all important concepts covered'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-10 border-l-4 border-blue-500 hover:scale-105 transform">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed font-semibold">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-16 text-center mb-20 border-2 border-blue-400">
          <h2 className="text-5xl font-black text-white mb-6">Ready to Learn?</h2>
          <p className="text-blue-100 text-xl mb-8 font-semibold">Start with Chapter 1 and master number systems today</p>
          <Link href="/maths11_notes/chapters/chapter1">
            <button className="bg-white text-blue-600 font-black py-5 px-15 rounded-lg hover:bg-blue-50 transition-all duration-300 text-xl shadow-lg hover:shadow-xl hover:scale-105 transform">
              Begin Chapter 1 →
            </button>
          </Link>
        </section>

        {/* Footer */}
        <footer className="text-center py-16 border-t-2 border-gray-400 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-t-2xl">
          <p className="text-gray-700 text-xl font-bold mb-2">© 2026 Notebuilder App made for quick visual and revision of notes</p>
          <p className="text-gray-600 text-lg font-semibold">Class 11 Applied Mathematics</p>
          <p className="text-gray-500 text-base mt-4">Comprehensive learning platform for mathematics excellence</p>
        </footer>
      </div>
    </div>
  );
}
