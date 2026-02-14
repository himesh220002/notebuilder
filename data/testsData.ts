export interface Option {
    id: number;
    text: string;
}

export interface Question {
    id: number;
    text: string;
    options: Option[];
    correctAnswer: number;
}

export interface ChapterTest {
    chapterId: number;
    chapterTitle: string;
    questions: Question[];
}

export const testsData: ChapterTest[] = [
    {
        chapterId: 1,
        chapterTitle: "Numbers - Binary & Decimal Systems",
        questions: [
            { id: 1, text: "What is the binary representation of decimal number 10?", options: [{ id: 1, text: "1010" }, { id: 2, text: "1100" }, { id: 3, text: "1001" }, { id: 4, text: "1111" }], correctAnswer: 1 },
            { id: 2, text: "What is 1 + 1 in binary arithmetic?", options: [{ id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "10" }, { id: 4, text: "11" }], correctAnswer: 3 },
            { id: 3, text: "Convert binary 1101 to decimal.", options: [{ id: 1, text: "11" }, { id: 2, text: "13" }, { id: 3, text: "15" }, { id: 4, text: "9" }], correctAnswer: 2 },
            { id: 4, text: "What is 1011 - 101 in binary?", options: [{ id: 1, text: "110" }, { id: 2, text: "101" }, { id: 3, text: "100" }, { id: 4, text: "111" }], correctAnswer: 1 },
            { id: 5, text: "Decimal number 7 in binary is:", options: [{ id: 1, text: "110" }, { id: 2, text: "111" }, { id: 3, text: "101" }, { id: 4, text: "100" }], correctAnswer: 2 },
            { id: 6, text: "What is 101 * 11 in binary?", options: [{ id: 1, text: "1111" }, { id: 2, text: "1101" }, { id: 3, text: "1011" }, { id: 4, text: "1001" }], correctAnswer: 1 },
            { id: 7, text: "Convert binary 1000 to decimal.", options: [{ id: 1, text: "4" }, { id: 2, text: "16" }, { id: 3, text: "8" }, { id: 4, text: "10" }], correctAnswer: 3 },
            { id: 8, text: "The base of the binary number system is:", options: [{ id: 1, text: "10" }, { id: 2, text: "2" }, { id: 3, text: "8" }, { id: 4, text: "16" }], correctAnswer: 2 },
            { id: 9, text: "Which digit is NOT used in binary?", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "2" }, { id: 4, text: "Both 0 and 1 are used" }], correctAnswer: 3 },
            { id: 10, text: "A group of 8 bits is called a:", options: [{ id: 1, text: "Nibble" }, { id: 2, text: "Word" }, { id: 3, text: "Byte" }, { id: 4, text: "Kilobyte" }], correctAnswer: 3 }
        ]
    },
    {
        chapterId: 2,
        chapterTitle: "Indices & Logarithms",
        questions: [
            { id: 1, text: "What is the value of log10(100)?", options: [{ id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "3" }, { id: 4, text: "10" }], correctAnswer: 2 },
            { id: 2, text: "Evaluate: 2^3 * 2^2", options: [{ id: 1, text: "2^5" }, { id: 2, text: "2^6" }, { id: 3, text: "4^5" }, { id: 4, text: "32" }], correctAnswer: 1 },
            { id: 3, text: "What is log(1) to any base?", options: [{ id: 1, text: "1" }, { id: 2, text: "0" }, { id: 3, text: "Infinity" }, { id: 4, text: "Undefined" }], correctAnswer: 2 },
            { id: 4, text: "The value of 5^-2 is:", options: [{ id: 1, text: "-25" }, { id: 2, text: "1/25" }, { id: 3, text: "1/10" }, { id: 4, text: "-10" }], correctAnswer: 2 },
            { id: 5, text: "If log_x(81) = 4, then x is:", options: [{ id: 1, text: "3" }, { id: 2, text: "9" }, { id: 3, text: "2" }, { id: 4, text: "4" }], correctAnswer: 1 },
            { id: 6, text: "Evaluate: log(A) + log(B)", options: [{ id: 1, text: "log(A+B)" }, { id: 2, text: "log(A*B)" }, { id: 3, text: "log(A/B)" }, { id: 4, text: "log(A^B)" }], correctAnswer: 2 },
            { id: 7, text: "(a^m)^n is equal to:", options: [{ id: 1, text: "a^(m+n)" }, { id: 2, text: "a^(m-n)" }, { id: 3, text: "a^(m*n)" }, { id: 4, text: "a^(m/n)" }], correctAnswer: 3 },
            { id: 8, text: "What is the common logarithm base?", options: [{ id: 1, text: "e" }, { id: 2, text: "2" }, { id: 3, text: "10" }, { id: 4, text: "0" }], correctAnswer: 3 },
            { id: 9, text: "Evaluate: 8^(1/3)", options: [{ id: 1, text: "2" }, { id: 2, text: "4" }, { id: 3, text: "2.66" }, { id: 4, text: "3" }], correctAnswer: 1 },
            { id: 10, text: "log_b(b) is equal to:", options: [{ id: 1, text: "0" }, { id: 2, text: "b" }, { id: 3, text: "1" }, { id: 4, text: "Undefined" }], correctAnswer: 3 }
        ]
    },
    {
        chapterId: 3,
        chapterTitle: "Sets, Relations & Functions",
        questions: [
            { id: 1, text: "If A = {1, 2} and B = {2, 3}, what is A ∩ B?", options: [{ id: 1, text: "{1, 2, 3}" }, { id: 2, text: "{2}" }, { id: 3, text: "{1, 3}" }, { id: 4, text: "∅" }], correctAnswer: 2 },
            { id: 2, text: "What is the power set of {1, 2}?", options: [{ id: 1, text: "2" }, { id: 2, text: "3" }, { id: 3, text: "4" }, { id: 4, text: "8" }], correctAnswer: 3 },
            { id: 3, text: "A set with no elements is called:", options: [{ id: 1, text: "Null set" }, { id: 2, text: "Void set" }, { id: 3, text: "Empty set" }, { id: 4, text: "All of the above" }], correctAnswer: 4 },
            { id: 4, text: "If n(A) = 5 and n(B) = 3, and A ∩ B = ∅, n(A ∪ B) is:", options: [{ id: 1, text: "8" }, { id: 2, text: "2" }, { id: 3, text: "15" }, { id: 4, text: "5" }], correctAnswer: 1 },
            { id: 5, text: "The range of f(x) = x^2 is:", options: [{ id: 1, text: "R" }, { id: 2, text: "[0, ∞)" }, { id: 3, text: "(0, ∞)" }, { id: 4, text: "(-∞, 0]" }], correctAnswer: 2 },
            { id: 6, text: "A relation R is 'Reflexive' if:", options: [{ id: 1, text: "(a,b) ∈ R" }, { id: 2, text: "(a,a) ∈ R for all a" }, { id: 3, text: "(a,b) ∈ R implies (b,a) ∈ R" }, { id: 4, text: "(a,b) and (b,c) ∈ R implies (a,c) ∈ R" }], correctAnswer: 2 },
            { id: 7, text: "U \ A is called:", options: [{ id: 1, text: "A" }, { id: 2, text: "A'" }, { id: 3, text: "Universal Set" }, { id: 4, text: "Subset" }], correctAnswer: 2 },
            { id: 8, text: "Which is a function?", options: [{ id: 1, text: "One-to-many" }, { id: 2, text: "One-to-one" }, { id: 3, text: "Many-to-one" }, { id: 4, text: "Both 2 and 3" }], correctAnswer: 4 },
            { id: 9, text: "The set of all first elements in a relation is:", options: [{ id: 1, text: "Range" }, { id: 2, text: "Codomain" }, { id: 3, text: "Domain" }, { id: 4, text: "Subset" }], correctAnswer: 3 },
            { id: 10, text: "De Morgan's Law for (A ∪ B)' is:", options: [{ id: 1, text: "A' ∪ B'" }, { id: 2, text: "A' ∩ B'" }, { id: 3, text: "A ∩ B" }, { id: 4, text: "(A ∩ B)'" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 4,
        chapterTitle: "Sequences & Series",
        questions: [
            { id: 1, text: "What is the 5th term of the AP: 2, 5, 8, ...?", options: [{ id: 1, text: "11" }, { id: 2, text: "14" }, { id: 3, text: "17" }, { id: 4, text: "20" }], correctAnswer: 2 },
            { id: 2, text: "In an AP, d is common:", options: [{ id: 1, text: "Ratio" }, { id: 2, text: "Difference" }, { id: 3, text: "Denominator" }, { id: 4, text: "Degree" }], correctAnswer: 2 },
            { id: 3, text: "The sum of first n natural numbers is:", options: [{ id: 1, text: "n/2" }, { id: 2, text: "n(n+1)/2" }, { id: 3, text: "n^2" }, { id: 4, text: "(n+1)/2" }], correctAnswer: 2 },
            { id: 4, text: "Common ratio 'r' belongs to:", options: [{ id: 1, text: "AP" }, { id: 2, text: "GP" }, { id: 3, text: "HP" }, { id: 4, text: "AGP" }], correctAnswer: 2 },
            { id: 5, text: "Find GP 4th term: 1, 3, 9, ...", options: [{ id: 1, text: "18" }, { id: 2, text: "21" }, { id: 3, text: "27" }, { id: 4, text: "81" }], correctAnswer: 3 },
            { id: 6, text: "The n-th term of an AP is a + (n-1)d. If a=2, d=3, n=11, then n-th term is:", options: [{ id: 1, text: "32" }, { id: 2, text: "35" }, { id: 3, text: "30" }, { id: 4, text: "29" }], correctAnswer: 1 },
            { id: 7, text: "Arithmetic Mean of a and b is:", options: [{ id: 1, text: "(a+b)/2" }, { id: 2, text: "√(ab)" }, { id: 3, text: "2ab/(a+b)" }, { id: 4, text: "ab" }], correctAnswer: 1 },
            { id: 8, text: "Geometric Mean of 4 and 16 is:", options: [{ id: 1, text: "10" }, { id: 2, text: "8" }, { id: 3, text: "6" }, { id: 4, text: "12" }], correctAnswer: 2 },
            { id: 9, text: "If r < 1, sum of infinite GP is:", options: [{ id: 1, text: "a(1-r^n)/(1-r)" }, { id: 2, text: "a/(1-r)" }, { id: 3, text: "ar^n" }, { id: 4, text: "Infinity" }], correctAnswer: 2 },
            { id: 10, text: "Which sequence is 2, 4, 8, 16, ...?", options: [{ id: 1, text: "AP" }, { id: 2, text: "GP" }, { id: 3, text: "HP" }, { id: 4, text: "Fibonacci" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 5,
        chapterTitle: "Counting & Permutations",
        questions: [
            { id: 1, text: "The value of 5! is:", options: [{ id: 1, text: "60" }, { id: 2, text: "120" }, { id: 3, text: "24" }, { id: 4, text: "10" }], correctAnswer: 2 },
            { id: 2, text: "Formula for nPr is:", options: [{ id: 1, text: "n! / r!" }, { id: 2, text: "n! / (n-r)!" }, { id: 3, text: "n! / r!(n-r)!" }, { id: 4, text: "r! / n!" }], correctAnswer: 2 },
            { id: 3, text: "Evaluate: 5C2", options: [{ id: 1, text: "10" }, { id: 2, text: "20" }, { id: 3, text: "5" }, { id: 4, text: "60" }], correctAnswer: 1 },
            { id: 4, text: "In how many ways can letters of word 'CAT' be arranged?", options: [{ id: 1, text: "3" }, { id: 2, text: "6" }, { id: 3, text: "9" }, { id: 4, text: "1" }], correctAnswer: 2 },
            { id: 5, text: "nC0 is always equal to:", options: [{ id: 1, text: "0" }, { id: 2, text: "n" }, { id: 3, text: "1" }, { id: 4, text: "n!" }], correctAnswer: 3 },
            { id: 6, text: "The Multiplication Principle states that if one work can be done in m ways and second in n ways independently, total ways in succession are:", options: [{ id: 1, text: "m + n" }, { id: 2, text: "m * n" }, { id: 3, text: "m^n" }, { id: 4, text: "n^m" }], correctAnswer: 2 },
            { id: 7, text: "0! is equal to:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "Undefined" }, { id: 4, text: "-1" }], correctAnswer: 2 },
            { id: 8, text: "Number of ways to arrange n items in a circle is:", options: [{ id: 1, text: "n!" }, { id: 2, text: "(n-1)!" }, { id: 3, text: "n" }, { id: 4, text: "n/2" }], correctAnswer: 2 },
            { id: 9, text: "Evaluate: 4P4", options: [{ id: 1, text: "1" }, { id: 2, text: "4" }, { id: 3, text: "16" }, { id: 4, text: "24" }], correctAnswer: 4 },
            { id: 10, text: "Combination is an arrangement where order:", options: [{ id: 1, text: "Matters" }, { id: 2, text: "Does not matter" }, { id: 3, text: "Is always reverse" }, { id: 4, text: "Is alphabetical" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 6,
        chapterTitle: "Functions",
        questions: [
            { id: 1, text: "The set of all possible inputs for a function is:", options: [{ id: 1, text: "Domain" }, { id: 2, text: "Range" }, { id: 3, text: "Codomain" }, { id: 4, text: "Function Set" }], correctAnswer: 1 },
            { id: 2, text: "f(x) = |x| is called:", options: [{ id: 1, text: "Constant function" }, { id: 2, text: "Identity function" }, { id: 3, text: "Modulus function" }, { id: 4, text: "Polynomial function" }], correctAnswer: 3 },
            { id: 3, text: "What is the range of f(x) = constant C?", options: [{ id: 1, text: "R" }, { id: 2, text: "{C}" }, { id: 3, text: "[0, ∞)" }, { id: 4, text: "∅" }], correctAnswer: 2 },
            { id: 4, text: "A function where every element in domain maps to unique element in codomain is:", options: [{ id: 1, text: "Onto" }, { id: 2, text: "Into" }, { id: 3, text: "One-to-one" }, { id: 4, text: "Many-to-one" }], correctAnswer: 3 },
            { id: 5, text: "The point where a graph crosses the y-axis is the:", options: [{ id: 1, text: "x-intercept" }, { id: 2, text: "y-intercept" }, { id: 3, text: "Origin" }, { id: 4, text: "Slope" }], correctAnswer: 2 },
            { id: 6, text: "If f(x) = x + 2, then f(3) is:", options: [{ id: 1, text: "3" }, { id: 2, text: "5" }, { id: 3, text: "6" }, { id: 4, text: "1" }], correctAnswer: 2 },
            { id: 7, text: "Graph of a linear function is a:", options: [{ id: 1, text: "Parabola" }, { id: 2, text: "Straight line" }, { id: 3, text: "Circle" }, { id: 4, text: "Curve" }], correctAnswer: 2 },
            { id: 8, text: "A function is 'Even' if f(-x) equals:", options: [{ id: 1, text: "f(x)" }, { id: 2, text: "-f(x)" }, { id: 3, text: "1/f(x)" }, { id: 4, text: "0" }], correctAnswer: 1 },
            { id: 9, text: "Which test used to check if a relation is a function from its graph?", options: [{ id: 1, text: "Horizontal Line Test" }, { id: 2, text: "Vertical Line Test" }, { id: 3, text: "Diagonal Line Test" }, { id: 4, text: "Tangent Test" }], correctAnswer: 2 },
            { id: 10, text: "Logarithmic function is only defined for x:", options: [{ id: 1, text: "x < 0" }, { id: 2, text: "x = 0" }, { id: 3, text: "x > 0" }, { id: 4, text: "All x" }], correctAnswer: 3 }
        ]
    },
    {
        chapterId: 7,
        chapterTitle: "Limits & Continuity",
        questions: [
            { id: 1, text: "Evaluate: lim (x→2) (x^2 - 4)/(x - 2)", options: [{ id: 1, text: "0" }, { id: 2, text: "2" }, { id: 3, text: "4" }, { id: 4, text: "Undefined" }], correctAnswer: 3 },
            { id: 2, text: "A function is continuous at x=a if:", options: [{ id: 1, text: "LHL = RHL" }, { id: 2, text: "f(a) exists" }, { id: 3, text: "LHL = RHL = f(a)" }, { id: 4, text: "f(a) is 0" }], correctAnswer: 3 },
            { id: 3, text: "What is lim (x→0) (sin x / x)?", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "Infinity" }, { id: 4, text: "Undefined" }], correctAnswer: 2 },
            { id: 4, text: "The value of lim (x→∞) (1/x) is:", options: [{ id: 1, text: "1" }, { id: 2, text: "Infinity" }, { id: 3, text: "0" }, { id: 4, text: "-1" }], correctAnswer: 3 },
            { id: 5, text: "If LHL ≠ RHL, the limit:", options: [{ id: 1, text: "Is 0" }, { id: 2, text: "Is Infinity" }, { id: 3, text: "Does not exist" }, { id: 4, text: "Is both" }], correctAnswer: 3 },
            { id: 6, text: "Continuous functions have graphs that are:", options: [{ id: 1, text: "Broken" }, { id: 2, text: "Unbroken" }, { id: 3, text: "Dotted" }, { id: 4, text: "Vertical" }], correctAnswer: 2 },
            { id: 7, text: "Evaluate: lim (x→3) (x + 5)", options: [{ id: 1, text: "3" }, { id: 2, text: "5" }, { id: 3, text: "8" }, { id: 4, text: "15" }], correctAnswer: 3 },
            { id: 8, text: "L'Hopital's rule is used for form:", options: [{ id: 1, text: "1/0" }, { id: 2, text: "0/0 or ∞/∞" }, { id: 3, text: "0*1" }, { id: 4, text: "∞-∞" }], correctAnswer: 2 },
            { id: 9, text: "lim (x→0) cos x is:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "-1" }, { id: 4, text: "Undefined" }], correctAnswer: 2 },
            { id: 10, text: "The limit of a constant K as x→a is:", options: [{ id: 1, text: "a" }, { id: 2, text: "K" }, { id: 3, text: "0" }, { id: 4, text: "1" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 8,
        chapterTitle: "Differentiation",
        questions: [
            { id: 1, text: "Derivative of x^n with respect to x is:", options: [{ id: 1, text: "nx^n" }, { id: 2, text: "nx^(n-1)" }, { id: 3, text: "x^(n-1)" }, { id: 4, text: "n! x" }], correctAnswer: 2 },
            { id: 2, text: "The derivative of a constant is:", options: [{ id: 1, text: "1" }, { id: 2, text: "0" }, { id: 3, text: "The constant itself" }, { id: 4, text: "Infinity" }], correctAnswer: 2 },
            { id: 3, text: "d/dx (sin x) is:", options: [{ id: 1, text: "cos x" }, { id: 2, text: "-cos x" }, { id: 3, text: "sin x" }, { id: 4, text: "tan x" }], correctAnswer: 1 },
            { id: 4, text: "Which rule is used for d/dx [f(x) * g(x)]?", options: [{ id: 1, text: "Quotient Rule" }, { id: 2, text: "Chain Rule" }, { id: 3, text: "Product Rule" }, { id: 4, text: "Power Rule" }], correctAnswer: 3 },
            { id: 5, text: "The derivative represents the ____ of a curve.", options: [{ id: 1, text: "Area" }, { id: 2, text: "Slope" }, { id: 3, text: "Length" }, { id: 4, text: "Volume" }], correctAnswer: 2 },
            { id: 6, text: "d/dx (e^x) is:", options: [{ id: 1, text: "e^x" }, { id: 2, text: "xe^(x-1)" }, { id: 3, text: "log x" }, { id: 4, text: "1/x" }], correctAnswer: 1 },
            { id: 7, text: "Derivative of log x (base e) is:", options: [{ id: 1, text: "x" }, { id: 2, text: "1/x" }, { id: 3, text: "e^x" }, { id: 4, text: "log x" }], correctAnswer: 2 },
            { id: 8, text: "Second derivative of x^2 is:", options: [{ id: 1, text: "2x" }, { id: 2, text: "2" }, { id: 3, text: "1" }, { id: 4, text: "0" }], correctAnswer: 2 },
            { id: 9, text: "d/dx (tan x) is:", options: [{ id: 1, text: "sec x" }, { id: 2, text: "sec^2 x" }, { id: 3, text: "cot x" }, { id: 4, text: "-sec^2 x" }], correctAnswer: 2 },
            { id: 10, text: "Chain rule is used for ____ functions.", options: [{ id: 1, text: "Simple" }, { id: 2, text: "Composite" }, { id: 3, text: "Trigonometric only" }, { id: 4, text: "Inverse only" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 9,
        chapterTitle: "Probability",
        questions: [
            { id: 1, text: "The probability of a sure event is:", options: [{ id: 1, text: "0" }, { id: 2, text: "0.5" }, { id: 3, text: "1" }, { id: 4, text: "Unknown" }], correctAnswer: 3 },
            { id: 2, text: "Probability of an impossible event is:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "0.1" }, { id: 4, text: "-1" }], correctAnswer: 1 },
            { id: 3, text: "P(A) + P(not A) is always:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "P(A)" }, { id: 4, text: "0.5" }], correctAnswer: 2 },
            { id: 4, text: "Two events are independent if P(A ∩ B) equals:", options: [{ id: 1, text: "P(A) + P(B)" }, { id: 2, text: "P(A) * P(B)" }, { id: 3, text: "P(A|B)" }, { id: 4, text: "0" }], correctAnswer: 2 },
            { id: 5, text: "A coin is tossed twice. Probability of getting 2 heads is:", options: [{ id: 1, text: "1/2" }, { id: 2, text: "1/4" }, { id: 3, text: "3/4" }, { id: 4, text: "1" }], correctAnswer: 2 },
            { id: 6, text: "Sample space for tossing a die has ____ elements.", options: [{ id: 1, text: "2" }, { id: 2, text: "4" }, { id: 3, text: "6" }, { id: 4, text: "12" }], correctAnswer: 3 },
            { id: 7, text: "What is P(A ∪ B) if A and B are mutually exclusive?", options: [{ id: 1, text: "P(A) * P(B)" }, { id: 2, text: "P(A) + P(B)" }, { id: 3, text: "1" }, { id: 4, text: "0" }], correctAnswer: 2 },
            { id: 8, text: "The range of probability is from:", options: [{ id: 1, text: "-1 to 1" }, { id: 2, text: "0 to 1" }, { id: 3, text: "0 to Infinity" }, { id: 4, text: "Any real number" }], correctAnswer: 2 },
            { id: 9, text: "Formula for Conditional Probability P(A|B) is:", options: [{ id: 1, text: "P(A ∩ B) / P(B)" }, { id: 2, text: "P(A ∪ B) / P(B)" }, { id: 3, text: "P(B|A)" }, { id: 4, text: "P(A) / P(B)" }], correctAnswer: 1 },
            { id: 10, text: "Number of kings in a deck of 52 cards is:", options: [{ id: 1, text: "2" }, { id: 2, text: "4" }, { id: 3, text: "13" }, { id: 4, text: "26" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 10,
        chapterTitle: "Statistics",
        questions: [
            { id: 1, text: "The measure of central tendency that is most affected by extreme values is:", options: [{ id: 1, text: "Mean" }, { id: 2, text: "Median" }, { id: 3, text: "Mode" }, { id: 4, text: "Range" }], correctAnswer: 1 },
            { id: 2, text: "The positive square root of Variance is:", options: [{ id: 1, text: "Range" }, { id: 2, text: "Mean Deviation" }, { id: 3, text: "Standard Deviation" }, { id: 4, text: "Skewness" }], correctAnswer: 3 },
            { id: 3, text: "If Variance is 25, Standard Deviation is:", options: [{ id: 1, text: "5" }, { id: 2, text: "50" }, { id: 3, text: "625" }, { id: 4, text: "10" }], correctAnswer: 1 },
            { id: 4, text: "Coefficient of Variation (C.V.) formula is:", options: [{ id: 1, text: "(Mean/SD)*100" }, { id: 2, text: "(SD/Mean)*100" }, { id: 3, text: "SD/Mean" }, { id: 4, text: "Variance/Mean" }], correctAnswer: 2 },
            { id: 5, text: "The value which occurs most frequently in data is:", options: [{ id: 1, text: "Mean" }, { id: 2, text: "Median" }, { id: 3, text: "Mode" }, { id: 4, text: "Variance" }], correctAnswer: 3 },
            { id: 6, text: "Total number of observations divided by sum of observations is Mean?", options: [{ id: 1, text: "Yes" }, { id: 2, text: "No, it's vice-versa" }, { id: 3, text: "Only for even data" }, { id: 4, text: "Only for odd data" }], correctAnswer: 2 },
            { id: 7, text: "Range is defined as:", options: [{ id: 1, text: "Max + Min" }, { id: 2, text: "Max - Min" }, { id: 3, text: "Mean - Median" }, { id: 4, text: "2 * SD" }], correctAnswer: 2 },
            { id: 8, text: "In a symmetrical distribution, Mean ____ Median ____ Mode.", options: [{ id: 1, text: "=, >" }, { id: 2, text: "=, =" }, { id: 3, text: "<, <" }, { id: 4, text: "≠, ≠" }], correctAnswer: 2 },
            { id: 9, text: "Variance of a constant dataset {5, 5, 5, 5} is:", options: [{ id: 1, text: "5" }, { id: 2, text: "0" }, { id: 3, text: "1" }, { id: 4, text: "25" }], correctAnswer: 2 },
            { id: 10, text: "Median is also known as the ____ decile.", options: [{ id: 1, text: "1st" }, { id: 2, text: "5th" }, { id: 3, text: "10th" }, { id: 4, text: "Last" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 11,
        chapterTitle: "Compound Interest & Annuity",
        questions: [
            { id: 1, text: "Formula for Compound Interest (CI) is:", options: [{ id: 1, text: "P(1 + r/100)^n" }, { id: 2, text: "A - P" }, { id: 3, text: "Prt/100" }, { id: 4, text: "Both 1 and 2 are used for calculation" }], correctAnswer: 4 },
            { id: 2, text: "If interest is compounded semi-annually, rate 'r' becomes:", options: [{ id: 1, text: "r/2" }, { id: 2, text: "2r" }, { id: 3, text: "r/4" }, { id: 4, text: "No change" }], correctAnswer: 1 },
            { id: 3, text: "An annuity regular has payments at the ____ of each period.", options: [{ id: 1, text: "Beginning" }, { id: 2, text: "End" }, { id: 3, text: "Middle" }, { id: 4, text: "End of year only" }], correctAnswer: 2 },
            { id: 4, text: "Present Value (PV) of perpetuity formula is:", options: [{ id: 1, text: "A/r" }, { id: 2, text: "A * r" }, { id: 3, text: "A(1+r)" }, { id: 4, text: "A/r^2" }], correctAnswer: 1 },
            { id: 5, text: "Effective rate of interest is always ____ nominal rate (if compounding > 1/yr).", options: [{ id: 1, text: "Less than" }, { id: 2, text: "Equal to" }, { id: 3, text: "Greater than" }, { id: 4, text: "Zero" }], correctAnswer: 3 },
            { id: 6, text: "In CI, the principal ____ every period.", options: [{ id: 1, text: "Decreases" }, { id: 2, text: "Stays constant" }, { id: 3, text: "Increases" }, { id: 4, text: "Vanishes" }], correctAnswer: 3 },
            { id: 7, text: "Future Value of Annuity Due is higher than Annuity Regular?", options: [{ id: 1, text: "Yes" }, { id: 2, text: "No" }, { id: 3, text: "Both equal" }, { id: 4, text: "Depends on rate" }], correctAnswer: 1 },
            { id: 8, text: "What is 'P' in CI formula P(1+i)^n?", options: [{ id: 1, text: "Profit" }, { id: 2, text: "Principal" }, { id: 3, text: "Period" }, { id: 4, text: "Percent" }], correctAnswer: 2 },
            { id: 9, text: "Time period n for semi-annual compounding for 2 years is:", options: [{ id: 1, text: "2" }, { id: 2, text: "4" }, { id: 3, text: "1" }, { id: 4, text: "8" }], correctAnswer: 2 },
            { id: 10, text: "Annuity where payments continue forever is:", options: [{ id: 1, text: "Limited Annuity" }, { id: 2, text: "Perpetuity" }, { id: 3, text: "Annuity Due" }, { id: 4, text: "Fixed Deposit" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 12,
        chapterTitle: "Straight Lines",
        questions: [
            { id: 1, text: "What is the slope of the line passing through points (2,3) and (4,5)?", options: [{ id: 1, text: "0" }, { id: 2, text: "1/2" }, { id: 3, text: "1" }, { id: 4, text: "2" }], correctAnswer: 3 },
            { id: 2, text: "What is the equation of the straight line passing through points (-1,-2) and (2,3)?", options: [{ id: 1, text: "y = x - 1" }, { id: 2, text: "y = x + 1" }, { id: 3, text: "y = x - 2" }, { id: 4, text: "y = 5x/3 - 1/3" }], correctAnswer: 4 },
            { id: 3, text: "What is the slope of the line passing through points (0,4) and (3,-1)?", options: [{ id: 1, text: "1/3" }, { id: 2, text: "2/3" }, { id: 3, text: "1/2" }, { id: 4, text: "-5/3" }], correctAnswer: 4 },
            { id: 4, text: "Equation of a line parallel to X-axis is:", options: [{ id: 1, text: "x = a" }, { id: 2, text: "y = b" }, { id: 3, text: "y = x" }, { id: 4, text: "x + y = 0" }], correctAnswer: 2 },
            { id: 5, text: "Slope of a vertical line (parallel to Y-axis) is:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "Undefined" }, { id: 4, text: "-1" }], correctAnswer: 3 },
            { id: 6, text: "The point-slope form of a line is:", options: [{ id: 1, text: "y = mx + c" }, { id: 2, text: "y - y1 = m(x - x1)" }, { id: 3, text: "x/a + y/b = 1" }, { id: 4, text: "ax + by + c = 0" }], correctAnswer: 2 },
            { id: 7, text: "If two lines are perpendicular, the product of their slopes is:", options: [{ id: 1, text: "1" }, { id: 2, text: "0" }, { id: 3, text: "-1" }, { id: 4, text: "Undefined" }], correctAnswer: 3 },
            { id: 8, text: "Y-intercept of the line 3x + 4y = 12 is:", options: [{ id: 1, text: "3" }, { id: 2, text: "4" }, { id: 3, text: "12" }, { id: 4, text: "0" }], correctAnswer: 1 },
            { id: 9, text: "Slope-intercept form is:", options: [{ id: 1, text: "y = mx + c" }, { id: 2, text: "y - y1 = m(x - x1)" }, { id: 3, text: "ax + by + c = 0" }, { id: 4, text: "x = a" }], correctAnswer: 1 },
            { id: 10, text: "Distance between (0,0) and (3,4) is:", options: [{ id: 1, text: "7" }, { id: 2, text: "1" }, { id: 3, text: "5" }, { id: 4, text: "25" }], correctAnswer: 3 }
        ]
    },
    {
        chapterId: 13,
        chapterTitle: "Circles & Parabola",
        questions: [
            { id: 1, text: "Standard equation of a circle with center (h,k) and radius r is:", options: [{ id: 1, text: "x^2 + y^2 = r^2" }, { id: 2, text: "(x-h)^2 + (y-k)^2 = r^2" }, { id: 3, text: "(x+h)^2 + (y+k)^2 = r^2" }, { id: 4, text: "xy = r^2" }], correctAnswer: 2 },
            { id: 2, text: "Center of the circle x^2 + y^2 + 2gx + 2fy + c = 0 is:", options: [{ id: 1, text: "(g,f)" }, { id: 2, text: "(-g,-f)" }, { id: 3, text: "(0,0)" }, { id: 4, text: "(c,0)" }], correctAnswer: 2 },
            { id: 3, text: "Equation of parabola opening right with vertex at origin is:", options: [{ id: 1, text: "x^2 = 4ay" }, { id: 2, text: "y^2 = 4ax" }, { id: 3, text: "y^2 = -4ax" }, { id: 4, text: "x^2 = -4ay" }], correctAnswer: 2 },
            { id: 4, text: "Directrix of the parabola y^2 = 4ax is:", options: [{ id: 1, text: "x = a" }, { id: 2, text: "x = -a" }, { id: 3, text: "y = a" }, { id: 4, text: "y = -a" }], correctAnswer: 2 },
            { id: 5, text: "Length of Latus Rectum for y^2 = 4ax is:", options: [{ id: 1, text: "a" }, { id: 2, text: "2a" }, { id: 3, text: "4a" }, { id: 4, text: "a^2" }], correctAnswer: 3 },
            { id: 6, text: "Focus of the parabola y^2 = 8x is:", options: [{ id: 1, text: "(8,0)" }, { id: 2, text: "(2,0)" }, { id: 3, text: "(4,0)" }, { id: 4, text: "(0,2)" }], correctAnswer: 2 },
            { id: 7, text: "Radius of circle x^2 + y^2 = 16 is:", options: [{ id: 1, text: "16" }, { id: 2, text: "8" }, { id: 3, text: "4" }, { id: 4, text: "2" }], correctAnswer: 3 },
            { id: 8, text: "Any point on the circle x^2 + y^2 = r^2 can be represented as:", options: [{ id: 1, text: "(r cos θ, r sin θ)" }, { id: 2, text: "(r sin θ, r cos θ)" }, { id: 3, text: "(r tan θ, r sec θ)" }, { id: 4, text: "(h,k)" }], correctAnswer: 1 },
            { id: 9, text: "Equation x^2 + y^2 = 0 represents a:", options: [{ id: 1, text: "Circle" }, { id: 2, text: "Point" }, { id: 3, text: "Line" }, { id: 4, text: "Parabola" }], correctAnswer: 2 },
            { id: 10, text: "Eccentricity of a parabola is always:", options: [{ id: 1, text: "0" }, { id: 2, text: "1" }, { id: 3, text: "< 1" }, { id: 4, text: "> 1" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 14,
        chapterTitle: "Taxation",
        questions: [
            { id: 1, text: "GST stands for:", options: [{ id: 1, text: "Goods and Service Tax" }, { id: 2, text: "Great Service Tax" }, { id: 3, text: "Government Sales Tax" }, { id: 4, text: "General Sales Tax" }], correctAnswer: 1 },
            { id: 2, text: "GST that goes to the Central Government on Intra-state supply is:", options: [{ id: 1, text: "SGST" }, { id: 2, text: "CGST" }, { id: 3, text: "IGST" }, { id: 4, text: "UTGST" }], correctAnswer: 2 },
            { id: 3, text: "Tax on Inter-state supply is:", options: [{ id: 1, text: "SGST" }, { id: 2, text: "CGST" }, { id: 3, text: "IGST" }, { id: 4, text: "Zero" }], correctAnswer: 3 },
            { id: 4, text: "Input Tax Credit (ITC) is used to:", options: [{ id: 1, text: "Increase tax" }, { id: 2, text: "Reduce tax liability" }, { id: 3, text: "Pay salaries" }, { id: 4, text: "Import goods" }], correctAnswer: 2 },
            { id: 5, text: "Income tax Slab for 0-2.5 Lakhs (Old Regime) is:", options: [{ id: 1, text: "5%" }, { id: 2, text: "Nil" }, { id: 3, text: "10%" }, { id: 4, text: "20%" }], correctAnswer: 2 },
            { id: 6, text: "Full form of PAN is:", options: [{ id: 1, text: "Personal Account Number" }, { id: 2, text: "Permanent Account Number" }, { id: 3, text: "Private Access Network" }, { id: 4, text: "Public Account Network" }], correctAnswer: 2 },
            { id: 7, text: "Standard Deduction amount for salaried individuals currently is approx:", options: [{ id: 1, text: "25,000" }, { id: 2, text: "50,000" }, { id: 3, text: "75,000" }, { id: 4, text: "1,00,000" }], correctAnswer: 2 },
            { id: 8, text: "Section 80C allows deduction up to:", options: [{ id: 1, text: "50,000" }, { id: 2, text: "1 Lakh" }, { id: 3, text: "1.5 Lakhs" }, { id: 4, text: "2 Lakhs" }], correctAnswer: 3 },
            { id: 9, text: "GST registration is mandatory for businesses with turnover exceeding threshold?", options: [{ id: 1, text: "Yes" }, { id: 2, text: "No" }, { id: 3, text: "Optional always" }, { id: 4, text: "Depends on city" }], correctAnswer: 1 },
            { id: 10, text: "Indirect taxes include:", options: [{ id: 1, text: "Income Tax" }, { id: 2, text: "GST" }, { id: 3, text: "Corporate Tax" }, { id: 4, text: "Property Tax" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 15,
        chapterTitle: "Utility Bills",
        questions: [
            { id: 1, text: "Electricity consumption is measured in:", options: [{ id: 1, text: "Watts" }, { id: 2, text: "Units (kWh)" }, { id: 3, text: "Volts" }, { id: 4, text: "Amperes" }], correctAnswer: 2 },
            { id: 2, text: "1 Unit of electricity equals ____ Watt-hour.", options: [{ id: 1, text: "100" }, { id: 2, text: "1000" }, { id: 3, text: "10" }, { id: 4, text: "3600" }], correctAnswer: 2 },
            { id: 3, text: "Fixed charge in utility bills is paid ____ of consumption.", options: [{ id: 1, text: "Irrespective" }, { id: 2, text: "Because" }, { id: 3, text: "Only in case" }, { id: 4, text: "Proportional" }], correctAnswer: 1 },
            { id: 4, text: "PNG stands for:", options: [{ id: 1, text: "Portable Natural Gas" }, { id: 2, text: "Piped Natural Gas" }, { id: 3, text: "Pure New Gas" }, { id: 4, text: "Pressure Natural Gas" }], correctAnswer: 2 },
            { id: 5, text: "Water bill is often based on the number of ____ consumed.", options: [{ id: 1, text: "Litres" }, { id: 2, text: "Kilolitres (kL)" }, { id: 3, text: "Buckets" }, { id: 4, text: "Hours" }], correctAnswer: 2 },
            { id: 6, text: "Surcharge in utility bills is a ____ charge.", options: [{ id: 1, text: "Discounted" }, { id: 2, text: "Additional/Penalty" }, { id: 3, text: "Refundable" }, { id: 4, text: "Zero" }], correctAnswer: 2 },
            { id: 7, text: "A bill for 250 units with slabs (0-100 @ Rs 3, 101-300 @ Rs 5) is:", options: [{ id: 1, text: "1250" }, { id: 2, text: "1050" }, { id: 3, text: "750" }, { id: 4, text: "1300" }], correctAnswer: 2 },
            { id: 8, text: "Domestic electricity rates are usually ____ commercial rates.", options: [{ id: 1, text: "Higher than" }, { id: 2, text: "Lower than" }, { id: 3, text: "Equal to" }, { id: 4, text: "Variable" }], correctAnswer: 2 },
            { id: 9, text: "Gas meters in houses indicate consumption in:", options: [{ id: 1, text: "kg" }, { id: 2, text: "m^3 or SCM" }, { id: 3, text: "Litres" }, { id: 4, text: "Units" }], correctAnswer: 2 },
            { id: 10, text: "Late payment of utility bills usually attracts:", options: [{ id: 1, text: "Interest/LPSC" }, { id: 2, text: "Reward points" }, { id: 3, text: "Tax rebate" }, { id: 4, text: "Free units" }], correctAnswer: 1 }
        ]
    },
    {
        chapterId: 16,
        chapterTitle: "Quantitative Aptitude",
        questions: [
            { id: 1, text: "At what time between 3 and 4 o'clock will the hands of a clock coincide?", options: [{ id: 1, text: "15 min" }, { id: 2, text: "16 4/11 min" }, { id: 3, text: "18 min" }, { id: 4, text: "20 min" }], correctAnswer: 2 },
            { id: 2, text: "If 1st Jan 2024 was Monday, what day was 1st Jan 2025?", options: [{ id: 1, text: "Tuesday" }, { id: 2, text: "Wednesday" }, { id: 3, text: "Thursday" }, { id: 4, text: "Monday" }], correctAnswer: 2 },
            { id: 3, text: "A can do a work in 10 days, B in 15 days. Together they do it in:", options: [{ id: 1, text: "25 days" }, { id: 2, text: "5 days" }, { id: 3, text: "6 days" }, { id: 4, text: "12 days" }], correctAnswer: 3 },
            { id: 4, text: "A train 100m long passes a pole in 5s. Speed of train is:", options: [{ id: 1, text: "20 km/h" }, { id: 2, text: "72 km/h" }, { id: 3, text: "50 km/h" }, { id: 4, text: "100 km/h" }], correctAnswer: 2 },
            { id: 5, text: "Angle between hour hand and minute hand at 4:20 is:", options: [{ id: 1, text: "0°" }, { id: 2, text: "10°" }, { id: 3, text: "20°" }, { id: 4, text: "5°" }], correctAnswer: 2 },
            { id: 6, text: "A leap year has ____ odd days.", options: [{ id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "3" }, { id: 4, text: "0" }], correctAnswer: 2 },
            { id: 7, text: "Average speed formula for equal distances at speeds u and v is:", options: [{ id: 1, text: "(u+v)/2" }, { id: 2, text: "2uv/(u+v)" }, { id: 3, text: "uv" }, { id: 4, text: "√(uv)" }], correctAnswer: 2 },
            { id: 8, text: "Ratio of speeds of two trains is 7:8. If 2nd train runs 400km in 4h, speed of 1st is:", options: [{ id: 1, text: "70 km/h" }, { id: 2, text: "87.5 km/h" }, { id: 3, text: "80 km/h" }, { id: 4, text: "100 km/h" }], correctAnswer: 2 },
            { id: 9, text: "In a group of 6 people, for a circular arrangement, fixed one position, ways are:", options: [{ id: 1, text: "720" }, { id: 2, text: "120" }, { id: 3, text: "60" }, { id: 4, text: "36" }], correctAnswer: 2 },
            { id: 10, text: "Minute hand moves ____ degrees in 1 minute.", options: [{ id: 1, text: "0.5" }, { id: 2, text: "6" }, { id: 3, text: "30" }, { id: 4, text: "360" }], correctAnswer: 2 }
        ]
    },
    {
        chapterId: 17,
        chapterTitle: "Logical Reasoning",
        questions: [
            { id: 1, text: "If 'COB' is coded as '3152', then 'BOC' is coded as:", options: [{ id: 1, text: "2153" }, { id: 2, text: "3152" }, { id: 3, text: "2315" }, { id: 4, text: "5213" }], correctAnswer: 1 },
            { id: 2, text: "Pointing to a man, a woman said, 'He is the only son of my mother'. The man is her:", options: [{ id: 1, text: "Father" }, { id: 2, text: "Brother" }, { id: 3, text: "Husband" }, { id: 4, text: "Son" }], correctAnswer: 2 },
            { id: 3, text: "Find the odd one out: 2, 3, 5, 7, 9, 11", options: [{ id: 1, text: "3" }, { id: 2, text: "7" }, { id: 3, text: "9" }, { id: 4, text: "2" }], correctAnswer: 3 },
            { id: 4, text: "Venn diagram showing 'Fruits, Apples, Bananas' consists of:", options: [{ id: 1, text: "Three separate circles" }, { id: 2, text: "Two circles inside one big circle" }, { id: 3, text: "Intersecting circles" }, { id: 4, text: "One straight line" }], correctAnswer: 2 },
            { id: 5, text: "In coding, A=1, B=2, ..., Z=26. What is the sum of BOY?", options: [{ id: 1, text: "40" }, { id: 2, text: "42" }, { id: 3, text: "45" }, { id: 4, text: "38" }], correctAnswer: 2 },
            { id: 6, text: "If A is B's sister, and C is B's mother, what is C to A?", options: [{ id: 1, text: "Aunt" }, { id: 2, text: "Mother" }, { id: 3, text: "Grandmother" }, { id: 4, text: "Daughter" }], correctAnswer: 2 },
            { id: 7, text: "Complete the series: 2, 6, 12, 20, ____", options: [{ id: 1, text: "24" }, { id: 2, text: "28" }, { id: 3, text: "30" }, { id: 4, text: "32" }], correctAnswer: 3 },
            { id: 8, text: "Syllogism: All A are B. All B are C. Therefore:", options: [{ id: 1, text: "Some A are not C" }, { id: 2, text: "All A are C" }, { id: 3, text: "No A is C" }, { id: 4, text: "All C are A" }], correctAnswer: 2 },
            { id: 9, text: "A south-facing person turns left. He is now facing:", options: [{ id: 1, text: "North" }, { id: 2, text: "East" }, { id: 3, text: "West" }, { id: 4, text: "South-East" }], correctAnswer: 2 },
            { id: 10, text: "If January is 1, February is 2, ..., what is August + September?", options: [{ id: 1, text: "15" }, { id: 2, text: "17" }, { id: 3, text: "19" }, { id: 4, text: "18" }], correctAnswer: 2 }
        ]
    }
];
