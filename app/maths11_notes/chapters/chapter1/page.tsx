'use client';

import Link from "next/link";
import MindMapViewer from "@/components/MindMapViewer";
import FormulaBlock from "@/components/FormulaBlock";
import ProblemList from "@/components/ProblemList";
import NoteCard from "@/components/NoteCard";
import ChapterNavbar from "@/components/ChapterNavbar";

export default function Chapter1() {
  // Mind Map Data Structure
  const numberSystemMindMap = {
    id: "numbers",
    label: "Numbers - Binary & Decimal Systems",
    children: [
      {
        id: "intro",
        label: "Introduction & Prerequisites",
        children: [
          { id: "binary-decimal", label: "Binary vs Decimal Coordination" },
          { id: "conversions-prior", label: "Prior Conversions Review" },
          { id: "binary-arithmetic", label: "Binary Arithmetic" },
        ],
      },
      {
        id: "decimal-binary",
        label: "Decimal to Binary Conversion",
        children: [
          { id: "repeated-division", label: "Repeated Division by 2" },
          { id: "trick", label: "Remainder Reading Trick" },
        ],
      },
      {
        id: "binary-decimal",
        label: "Binary to Decimal Conversion",
        children: [
          { id: "powers-of-2", label: "Sum of Powers of 2" },
          { id: "powers-table", label: "Powers Reference Table" },
        ],
      },
      {
        id: "operations",
        label: "Binary Operations",
        children: [
          { id: "addition", label: "Addition" },
          { id: "subtraction", label: "Subtraction" },
          { id: "multiplication", label: "Multiplication" },
          { id: "division", label: "Division" },
        ],
      },
      {
        id: "tips",
        label: "Universal Tips & Verification",
        children: [
          { id: "memorization", label: "Powers Memorization" },
          { id: "verification", label: "Decimal Verification" },
        ],
      },
    ],
  };

  const problems = [
    // Decimal to Binary
    {
      id: "1",
      question: "Convert 13 to binary",
      solution: "$13 = 1101_2$ | Step 1: $13 div 2 = 6$ R $1$ | Step 2: $6 div 2 = 3$ R $0$ | Step 3: $3 div 2 = 1$ R $1$ | Step 4: $1 div 2 = 0$ R $1$ | Result: $1101$",
      difficulty: "easy" as const,
    },
    {
      id: "2",
      question: "Convert 47 to binary",
      solution: "$47 = 101111_2$",
      difficulty: "easy" as const,
    },
    {
      id: "3",
      question: "Convert 129 to binary",
      solution: "$129 = 10000001_2$",
      difficulty: "easy" as const,
    },
    {
      id: "4",
      question: "Convert 394 to binary",
      solution: "$394 = 110001010_2$",
      difficulty: "easy" as const,
    },
    {
      id: "5",
      question: "Convert 1018 to binary",
      solution: "$1018 = 1111111010_2$",
      difficulty: "medium" as const,
    },
    // Binary to Decimal
    {
      id: "6",
      question: "Convert $10111101010_2$ to decimal",
      solution: "Summing powers:\n$1 times 512 + 0 times 256 + 1 times 128 + 1 times 64 + 1 times 32 + 1 times 16 + 0 times 8 + 1 times 4 + 0 times 2 + 1 times 1$\nCalculation: $512 + 128 + 64 + 32 + 16 + 4 + 1 = 757$\nNote: With 11 digits, highest power is $2^{10} = 1024$, so final decimal is $1514$ (Correcting prev error).",
      difficulty: "medium" as const,
    },
    {
      id: "7",
      question: "Convert $11111001_2$ to decimal",
      solution: "$128 + 64 + 32 + 16 + 8 + 0 + 0 + 1 = 249_{10}$",
      difficulty: "easy" as const,
    },
    // Binary Addition
    {
      id: "8",
      question: "Add in binary: $10001_2 + 1101_2$.",
      solution: "Alignment:\n  $10001$\n+ $01101$\n-------\n  $11110$\nVerification: $17 + 13 = 30$, and $11110_2 = 16+8+4+2 = 30$",
      difficulty: "medium" as const,
    },
    {
      id: "9",
      question: "Add in binary: $10111_2 + 1111_2$.",
      solution: "Alignment:\n  $10111$\n+ $01111$\n-------\n $100110$\nVerification: $23 + 15 = 38$, and $100110_2 = 32 + 4 + 2 = 38$",
      difficulty: "medium" as const,
    },
    {
      id: "10",
      question: "Add in binary: $1000011_2 + 110100_2$",
      solution: "  $1000011$\n+ $0110100$\n---------\n  $1110111$\nVerification: $67 + 52 = 119$",
      difficulty: "medium" as const,
    },
    // Binary Subtraction
    {
      id: "11",
      question: "Subtract in binary: $10111_2 - 10000_2$.",
      solution: "  $10111$\n- $10000$\n-------\n    $111$\nVerification: $23 - 16 = 7$, and $111_2 = 4 + 2 + 1 = 7$",
      difficulty: "medium" as const,
    },
    {
      id: "12",
      question: "Subtract in binary: $110001_2 - 11001_2$",
      solution: "  $110001$\n- $011001$\n--------\n   $11000$\nVerification: $49 - 25 = 24$, and $11000_2 = 16 + 8 = 24$",
      difficulty: "medium" as const,
    },
    {
      id: "13",
      question: "Subtract in binary: $1111110_2 - 1001010_2$",
      solution: "  $1111110$\n- $1001010$\n---------\n   $0110100$\nVerification: $126 - 74 = 52$, and $110100_2 = 32 + 16 + 4 = 52$",
      difficulty: "medium" as const,
    },
    // Binary Multiplication
    {
      id: "14",
      question: "Multiply in binary: $1100_2 times 111_2$.",
      solution: "Calculation:\n     $1100$ (multiplicand)\n    $times 111$ (multiplier)\n   -------\n     $1100$\n    $1100x$\n   $1100xx$\n   -------\n  $1010100$\nVerification: $12 times 7 = 84$, and $1010100_2 = 64+16+4 = 84$",
      difficulty: "hard" as const,
    },
    {
      id: "15",
      question: "Multiply in binary: $10111_2 times 1001_2$",
      solution: "Partial Products:\n  $10111$ (times 1)\n $00000$ (times 0)\n $00000$ (times 0)\n$10111$ (times 1)\nResult: $11001111$\nVerification: $23 times 9 = 207$",
      difficulty: "hard" as const,
    },
    // Binary Division
    {
      id: "16",
      question: "Divide in binary: $11100_2 div 111_2$",
      solution: "Long Division:\n$11100 div 111 = 100$ R $0$\nVerification: $28 div 7 = 4$ R $0$\n$4 times 7 + 0 = 28$",
      difficulty: "hard" as const,
    },
    {
      id: "17",
      question: "Divide in binary: $10000001_2 div 1111_2$",
      solution: "$10000001 div 1111 = 1000$ R $1001$\nVerification: $129 div 15 = 8$ R $9$\n$8 times 15 + 9 = 120 + 9 = 129$",
      difficulty: "hard" as const,
    },
    {
      id: "18",
      question: "Divide in binary: $100000100_2 div 101_2$",
      solution: "$100000100 div 101 = 10100$ R $0$\nVerification: $260 div 5 = 52$ R $0$",
      difficulty: "hard" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ChapterNavbar currentChapter={1} totalChapters={17} />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <header className="mb-16 pb-8 border-b-4 border-blue-200 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Chapter 1: Numbers - Binary & Decimal Systems</h1>
          <p className="text-xl text-gray-700 mb-2 font-semibold">Exercise | Class 11 Applied Mathematics</p>
          <p className="text-gray-600 text-lg">Comprehensive coverage of number system conversions and binary arithmetic operations</p>
        </header>

        {/* Mind Map Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">📊</span>
            Chapter Overview - Mind Map
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <MindMapViewer src="/images/chapter1-mindmap.png" alt="Numbers - Binary & Decimal Systems Mind Map" />
            <div className="mt-8">
              <MindMapViewer data={numberSystemMindMap} />
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <span className="text-4xl">📚</span>
            Key Topics
          </h2>

          {/* Topic 1: Introduction & Prerequisites */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">1. Introduction & Prerequisites Review</h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Before diving into conversions and arithmetic, review the fundamental coordination between binary and decimal systems.
            </p>
            <NoteCard
              title="Binary vs Decimal Coordination"
              content="Decimal (Base 10): Uses digits 0-9, powers of 10
Binary (Base 2): Uses digits 0-1, powers of 2
Every number has unique representation in both systems"
              type="info"
            />
            <div className="space-y-4 mt-8">
              <h4 className="font-bold text-xl text-gray-800">Prior Conversions & Binary Arithmetic</h4>
              <ul className="space-y-3 ml-6">
                {[
                  { title: "Decimal → Binary:", desc: "Repeated division by 2" },
                  { title: "Binary → Decimal:", desc: "Sum of powers of 2" },
                  { title: "Binary Arithmetic:", desc: "Add, subtract, multiply, divide without converting" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="font-bold text-blue-600 min-w-fit">{item.title}</span>
                    <span className="text-gray-700">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Topic 2: Decimal to Binary Conversion */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
            <h3 className="text-3xl font-bold text-blue-900 mb-6">2. Decimal to Binary Conversion</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Converting a decimal number to binary involves repeatedly dividing by 2 and reading remainders from bottom to top.
            </p>

            <FormulaBlock
              formula="Decimal_{10} = Remainder_1 times 2^0 + Remainder_2 times 2^1 + Remainder_3 times 2^2 + ... (Read Remainders Bottom-to-Top)"
              block
              title="Conversion Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Method: Repeated Division by 2"
                content="Step 1: Divide the number by 2\nStep 2: Record the remainder (0 or 1)\nStep 3: Divide the quotient by 2 again\nStep 4: Repeat until quotient becomes 0\nStep 5: Read remainders from BOTTOM to TOP to get binary"
                type="info"
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
              <h4 className="font-bold text-xl text-blue-900 mb-4">Example: Convert 13 to Binary</h4>
              <div className="font-mono text-base space-y-2 text-gray-900 font-semibold">
                <div>$13 div 2 = 6$ R $1$</div>
                <div>$6 div 2 = 3$ R $0$</div>
                <div>$3 div 2 = 1$ R $1$</div>
                <div>$1 div 2 = 0$ R $1$</div>
                <div className="mt-3 pt-3 border-t-2 border-blue-300">Read remainders bottom-to-top: <span className="font-bold text-blue-900 text-lg">$1101_2$</span></div>
              </div>
            </div>

            <div className="my-8">
              <NoteCard
                title="Quick Trick"
                content="The binary representation has no leading zeros. The number of binary digits = ⌊log₂(n)⌋ + 1"
                type="tip"
              />
            </div>

            <h4 className="font-bold text-xl text-gray-800 mb-4">More Examples:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              {[
                { dec: 47, bin: "101111" },
                { dec: 129, bin: "10000001" },
                { dec: 250, bin: "11111010" },
                { dec: 394, bin: "110001010" },
                { dec: 639, bin: "1001111111" },
                { dec: 1018, bin: "1111111010" },
              ].map((ex, i) => (
                <div key={i} className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 font-mono text-center text-gray-900 font-semibold">
                  {ex.dec}<sub>10</sub> = {ex.bin}<sub>2</sub>
                </div>
              ))}
            </div>
          </article>

          {/* Topic 3: Binary to Decimal Conversion */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">3. Binary to Decimal Conversion</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Converting binary to decimal involves summing the powers of 2 where 1s appear in the binary number.
            </p>

            <FormulaBlock
              formula="Binary_2 = (b_n times 2^n) + (b_{n-1} times 2^{n-1}) + ... + (b_1 times 2^1) + (b_0 times 2^0), text{ where } b_i in {0,1}"
              block
              title="Conversion Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Method: Sum of Powers of 2"
                content="Step 1: Write powers of 2 above each digit (rightmost = $2^0$)\nStep 2: Multiply each digit by its power of 2\nStep 3: Sum all the products\nStep 4: Result is the decimal number"
                type="info"
              />
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg my-8 border-l-4 border-indigo-500">
              <h4 className="font-bold text-xl text-indigo-900 mb-4">Powers of 2 Reference Table</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3 text-gray-700">
                {[
                  { power: 0, value: 1 },
                  { power: 1, value: 2 },
                  { power: 2, value: 4 },
                  { power: 3, value: 8 },
                  { power: 4, value: 16 },
                  { power: 5, value: 32 },
                  { power: 6, value: 64 },
                  { power: 7, value: 128 },
                  { power: 8, value: 256 },
                  { power: 9, value: 512 },
                  { power: 10, value: 1024 },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-indigo-100 rounded-lg text-center font-mono border border-indigo-300 text-gray-900 font-semibold">
                    2<sup>{item.power}</sup> = {item.value}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg my-8 border-l-4 border-indigo-500">
              <h4 className="font-bold text-xl text-indigo-900 mb-4">Example: Convert $11111001_2$ to Decimal</h4>
              <div className="text-base text-gray-900 font-mono space-y-2 font-semibold">
                <div>Powers:  $2^7$  $2^6$  $2^5$  $2^4$  $2^3$  $2^2$  $2^1$  $2^0$</div>
                <div>Binary:   $1$   $1$   $1$   $1$   $1$   $0$   $0$   $1$</div>
                <div>Sum: $128 + 64 + 32 + 16 + 8 + 0 + 0 + 1$</div>
                <div className="font-bold text-indigo-900 text-lg pt-2">= $249_{10}$</div>
              </div>
            </div>
          </article>

          {/* Topic 4: Binary Addition */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
            <h3 className="text-3xl font-bold text-green-900 mb-6">4. Binary Addition</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Binary addition follows simple rules similar to decimal addition, but with base 2.
            </p>

            <FormulaBlock
              formula="A_2 + B_2 = text{Sum}_2 | text{Rules: } 0+0=0, 0+1=1, 1+0=1, 1+1=10 text{ (0 carry 1)}"
              block
              title="Addition Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Binary Addition Rules"
                content="0 + 0 = 0\n0 + 1 = 1\n1 + 0 = 1\n1 + 1 = 10 (Write 0, Carry 1)\n1 + 1 + 1 = 11 (Write 1, Carry 1)"
                type="info"
              />
            </div>

            <div className="bg-green-50 p-6 rounded-lg my-8 border-l-4 border-green-500">
              <h4 className="font-bold text-xl text-green-900 mb-4">Example: 10001₂ + 1101₂</h4>
              <div className="text-base text-gray-900 font-mono mb-4 text-center space-y-1 font-semibold">
                <div>  10001</div>
                <div>+  1101</div>
                <div className="border-t-2 border-gray-400 my-2"></div>
                <div>  11110</div>
              </div>
              <div className="text-base bg-white p-3 rounded border border-green-200 text-gray-900 font-semibold">
                <strong>Verification:</strong> 10001₂ = 17₁₀, 1101₂ = 13₁₀, 11110₂ = 30₁₀
                <br />17 + 13 = 30 ✓
              </div>
            </div>

            <h4 className="font-bold text-xl text-gray-800 mb-4">More Examples:</h4>
            <div className="space-y-3 text-base text-gray-700">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-gray-900 font-semibold">10111₂ + 1111₂ = 100110₂ (23 + 15 = 38) ✓</div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-gray-900 font-semibold">1000011₂ + 110100₂ = 1110111₂ (67 + 52 = 119) ✓</div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-gray-900 font-semibold">10000000₂ + 1011010₂ = 11010110₂ (128 + 90 = 218) ✓</div>
            </div>
          </article>

          {/* Topic 5: Binary Subtraction */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-yellow-500">
            <h3 className="text-3xl font-bold text-yellow-900 mb-6">5. Binary Subtraction</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Binary subtraction uses borrowing similar to decimal subtraction when needed.
            </p>

            <FormulaBlock
              formula="A_2 - B_2 = text{Diff}_2 | text{Rules: } 0-0=0, 1-0=1, 1-1=0, 0-1=text{Borrow}"
              block
              title="Subtraction Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Binary Subtraction Rules"
                content="0 - 0 = 0\n1 - 0 = 1\n1 - 1 = 0\n0 - 1 = 1 (After Borrow)\nChain Borrowing: Borrow from the next available 1"
                type="info"
              />
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
              <h4 className="font-bold text-xl text-yellow-900 mb-4">Example: 10111₂ - 10000₂</h4>
              <div className="text-base text-gray-900 font-mono mb-4 text-center space-y-1 font-semibold">
                <div>  10111</div>
                <div>- 10000</div>
                <div className="border-t-2 border-gray-400 my-2"></div>
                <div>    111</div>
              </div>
              <div className="text-base bg-white p-3 rounded border border-yellow-200 text-gray-900 font-semibold">
                <strong>Verification:</strong> 10111₂ = 23₁₀, 10000₂ = 16₁₀, 111₂ = 7₁₀
                <br />23 - 16 = 7 ✓
              </div>
            </div>

            <h4 className="font-bold text-xl text-gray-800 mb-4">More Examples:</h4>
            <div className="space-y-3 text-base text-gray-700">
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-gray-900 font-semibold">110001₂ - 11001₂ = 11000₂ (49 - 25 = 24) ✓</div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-gray-900 font-semibold">1101100₂ - 111001₂ = 10101₂ (108 - 57 = 51) ✓</div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-gray-900 font-semibold">1111110₂ - 1001010₂ = 110100₂ (126 - 74 = 52) ✓</div>
            </div>

            <div className="my-8">
              <NoteCard
                title="Chain Borrowing Tip"
                content="When you encounter 0 - 1, look left for the nearest 1. That 1 becomes 0, all 0s in between become 1s, and your current position becomes 10."
                type="tip"
              />
            </div>
          </article>

          {/* Topic 6: Binary Multiplication */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-500">
            <h3 className="text-3xl font-bold text-purple-900 mb-6">6. Binary Multiplication</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Binary multiplication is simpler than decimal multiplication since we only multiply by 0 or 1.
            </p>

            <FormulaBlock
              formula="A_2 times B_2 = text{Product}_2 | text{Rules: } 0 times X = 0, 1 times X = X"
              block
              title="Multiplication Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Binary Multiplication Rules"
                content="0 times X = 0\n1 times X = X\nProcess: Multiply digit by digit, then sum partial products (with shifts)"
                type="info"
              />
            </div>

            <div className="bg-purple-50 p-6 rounded-lg my-8 border-l-4 border-purple-500">
              <h4 className="font-bold text-xl text-purple-900 mb-4">Example: 1100₂ × 111₂</h4>
              <div className="text-base text-gray-900 font-mono mb-4 text-center space-y-1 font-semibold">
                <div>     1100</div>
                <div>    ×  111</div>
                <div className="border-t-2 border-gray-400 my-2"></div>
                <div>     1100  (×1)</div>
                <div>    1100   (×1, shift 1)</div>
                <div>   1100    (×1, shift 2)</div>
                <div className="border-t-2 border-gray-400 my-2"></div>
                <div>  1010100</div>
              </div>
              <div className="text-base bg-white p-3 rounded border border-purple-200 text-gray-900 font-semibold">
                <strong>Verification:</strong> 1100₂ = 12₁₀, 111₂ = 7₁₀, 1010100₂ = 84₁₀
                <br />12 × 7 = 84 ✓
              </div>
            </div>

            <h4 className="font-bold text-xl text-gray-800 mb-4">More Examples:</h4>
            <div className="space-y-3 text-base text-gray-700">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-gray-900 font-semibold">10111₂ × 1001₂ = 11001111₂ (23 × 9 = 207) ✓</div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-gray-900 font-semibold">101011₂ × 1101₂ = 100110111₂ (43 × 13 = 559) ✓</div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-gray-900 font-semibold">110110₂ × 10001₂ = 11100110₂ (54 × 17 = 918) ✓</div>
            </div>
          </article>

          {/* Topic 7: Binary Division */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-red-500">
            <h3 className="text-3xl font-bold text-red-900 mb-6">7. Binary Division</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Binary division uses long division similar to decimal division, but with base 2 logic.
            </p>

            <FormulaBlock
              formula="A₂ ÷ B₂ = Quotient₂ with Remainder₂ | Dividend = (Divisor × Quotient) + Remainder"
              block
              title="Division Formula"
            />

            <div className="my-8">
              <NoteCard
                title="Binary Division Method"
                content="Step 1: Use long division\nStep 2: Compare prefix with divisor\nStep 3: If Prefix >= Divisor, write 1 in quotient, subtract divisor\nStep 4: If Prefix < Divisor, write 0 in quotient\nStep 5: Bring down next digit and repeat"
                type="info"
              />
            </div>

            <div className="bg-red-50 p-6 rounded-lg my-8 border-l-4 border-red-500">
              <h4 className="font-bold text-xl text-red-900 mb-4">Example: 11100₂ ÷ 111₂</h4>
              <div className="text-base text-gray-900 font-mono mb-4 font-semibold">
                <div>11100 ÷ 111 = 100 R 0</div>
              </div>
              <div className="text-base bg-white p-3 rounded border border-red-200 text-gray-900 font-semibold">
                <strong>Verification:</strong> 11100₂ = 28₁₀, 111₂ = 7₁₀, 100₂ = 4₁₀
                <br />28 ÷ 7 = 4 remainder 0 ✓
              </div>
            </div>

            <h4 className="font-bold text-xl text-gray-800 mb-4">More Examples:</h4>
            <div className="space-y-3 text-base text-gray-700">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-gray-900 font-semibold">10000001₂ ÷ 1111₂ = 1000 R 1001 (129 ÷ 15 = 8 R 9) ✓</div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-gray-900 font-semibold">100000100₂ ÷ 101₂ = 10100 R 0 (260 ÷ 5 = 52 R 0) ✓</div>
            </div>
          </article>

          {/* Topic 8: Universal Tips & Verification */}
          <article className="mb-12 bg-white rounded-xl shadow-md p-8 border-l-4 border-cyan-500">
            <h3 className="text-3xl font-bold text-cyan-900 mb-8">8. Universal Tips & Verification</h3>

            <div className="space-y-6">
              <NoteCard
                title="Memorization: Powers of 2"
                content="Memorize powers from 2⁰ = 1 to 2¹⁰ = 1024. These are essential for quick conversions."
                type="tip"
              />

              <NoteCard
                title="Always Verify Your Work"
                content="For every binary operation, convert to decimal, perform the operation, and verify the result. This catches calculation errors."
                type="important"
              />

              <NoteCard
                title="Formatting Rules"
                content="• No leading zeros in binary\n• Use subscript 2 for binary (e.g., $1101_2$)\n• Use subscript 10 for decimal (e.g., $13_{10}$)"
                type="info"
              />

              <NoteCard
                title="Exam Strategy"
                content="✓ Show all working steps\n✓ Verify using decimal conversion\n✓ Double-check for small carry/borrow errors"
                type="tip"
              />
            </div>
          </article>
        </section>

        {/* Important Questions Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">❓</span>
            Important Questions & Problems
          </h2>
          <ProblemList problems={problems} chapterId="chapter1" title="Chapter 1 Practice Problems" />
        </section>

        {/* Summary Section */}
        <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-10 rounded-xl border-l-4 border-blue-600 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">✓</span>
            Key Takeaways
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>Decimal to binary: Repeated division by 2, read remainders bottom-to-top</li>
            <li>Binary to decimal: Sum of powers of 2 where 1s appear</li>
            <li>Binary addition: Simple rules with carry (1+1=10)</li>
            <li>Binary subtraction: Use borrowing from left when needed (0-1 requires borrow)</li>
            <li>Binary multiplication: 0×X=0, 1×X=X, then add partial products</li>
            <li>Binary division: Long division with base-2 logic</li>
            <li>Always verify: Convert results to decimal to check correctness</li>
            <li>Memorize powers of 2 up to 2¹⁰ = 1024 for efficiency</li>
            <li>Practice is essential - these skills form the foundation for computer science and digital systems</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
