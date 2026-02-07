
export const formulaText = {
    // 1. Introduction to Limits
    limitDef: "The limit of a function $f(x)$ as $x$ approaches $a$ is the value $L$ that $f(x)$ gets closer to as $x$ gets closer to $a$ (from both sides). Written as $\\lim_{x \\to a} f(x) = L$.",
    leftRightLimit: "Left Hand Limit (LHL): $\\lim_{x \\to a^-} f(x)$ and Right Hand Limit (RHL): $\\lim_{x \\to a^+} f(x)$. Limit exists if LHL = RHL.",
    indeterminateForms: "Forms like $\\frac{0}{0}, \\frac{\\infty}{\\infty}, \\infty - \\infty, 0 \\times \\infty$ where the limit cannot be determined by direct substitution.",

    // 2. Algebra of Limits
    algebraSum: "$\\lim_{x \\to a} [f(x) + g(x)] = \\lim_{x \\to a} f(x) + \\lim_{x \\to a} g(x)$",
    algebraDiff: "$\\lim_{x \\to a} [f(x) - g(x)] = \\lim_{x \\to a} f(x) - \\lim_{x \\to a} g(x)$",
    algebraProd: "$\\lim_{x \\to a} [f(x) \\cdot g(x)] = \\lim_{x \\to a} f(x) \\cdot \\lim_{x \\to a} g(x)$",
    algebraQuo: "$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{\\lim_{x \\to a} f(x)}{\\lim_{x \\to a} g(x)}$, provided $\\lim_{x \\to a} g(x) \\neq 0$",

    // 3. Standard Limits (Algebraic)
    standardAlg: "$\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$",
    standardPoly: "If $P(x)$ is a polynomial, $\\lim_{x \\to a} P(x) = P(a)$.",

    // 4. Limits of Exponential & Log Functions
    limitExp: "$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$",
    limitExpGen: "$\\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a$ ($a>0$)",
    limitLog: "$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$",

    // 5. Continuity
    continuityDef: "A function $f(x)$ is continuous at $x=c$ if: 1. $f(c)$ is defined, 2. $\\lim_{x \\to c} f(x)$ exists, and 3. $\\lim_{x \\to c} f(x) = f(c)$.",
    discontinuityTypes: "Types: Removable (Hole), Jump, Infinite.",

    continuityExamples: "Examples: 1. Modulus Function (Continuous everywhere). 2. Greatest Integer Function (Discontinuous at integers). 3. Rational Function 1/x (Discontinuous at x=0).",
};




export const continuityExamplesData = [
    {
        title: "Modulus Function",
        func: "$f(x) = |x|$",
        type: "modulus" as const,
        domain: "$\\mathbb{R}$ (All Real Numbers)",
        continuity: "Continuous everywhere. Sharp corner at $x=0$ means not differentiable, but still continuous (no break).",
        color: "text-emerald-700",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200"
    },
    {
        title: "Greatest Integer Function",
        func: "$f(x) = [x]$",
        type: "step" as const,
        domain: "$\\mathbb{R}$",
        continuity: "Discontinuous at every integer point ($... -1, 0, 1, 2 ...$). Shows 'Jump Discontinuity'.",
        color: "text-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        title: "Reciprocal Function",
        func: "$f(x) = 1/x$",
        type: "reciprocal" as const,
        domain: "$\\mathbb{R} - \\{0\\}$ (Because division by 0 is undefined)",
        continuity: "Discontinuous at $x=0$ (Infinite Discontinuity). The graph breaks into two separate branches because $1/0$ is undefined.",
        color: "text-amber-700",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200"
    },
    {
        title: "Signum Function",
        func: "$f(x) = |x|/x$",
        type: "signum" as const,
        domain: "$\\mathbb{R} - \\{0\\}$",
        continuity: "Discontinuous at $x=0$ (Jump Discontinuity). Left Limit = -1, Right Limit = 1.",
        color: "text-pink-700",
        bgColor: "bg-pink-50",
        borderColor: "border-pink-200"
    },
    {
        title: "Slope with Jump",
        func: "$f(x) = x + ext{sgn}(x)$",
        type: "slope_jump" as const,
        domain: "$\\mathbb{R} - \\{0\\}$",
        continuity: "Discontinuous at $x=0$. As $x \to 0^-$, $y \to -1$. As $x \to 0^+$, $y \to 1$. Shows limits exist but are unequal.",
        color: "text-rose-700",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200"
    }
];

export const problems = [
    {
        id: "p1",
        question: "Evaluate $\\lim_{x \\to 2} (x^2 - 4)$.",
        solution: "Direct substitution: $2^2 - 4 = 4 - 4 = 0$.",
        difficulty: "easy" as const
    },
    {
        id: "p2",
        question: "Evaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.",
        solution: "$\\frac{0}{0}$ form. Factorize: $\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2) = 2+2=4$.",
        difficulty: "easy" as const
    },
    {
        id: "p3",
        question: "Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x}$.",
        solution: "Rationalize: $\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - 1}{x} \\cdot \\frac{\\sqrt{1+x} + 1}{\\sqrt{1+x} + 1} = \\lim_{x \\to 0} \\frac{1+x-1}{x(\\sqrt{1+x}+1)} = \\lim_{x \\to 0} \\frac{1}{\\sqrt{1+x}+1} = \\frac{1}{2}$.",
        difficulty: "medium" as const
    },
    {
        id: "p4",
        question: "Evaluate $\\lim_{x \\to 3} \\frac{x^3 - 27}{x - 3}$.",
        solution: "Use standard limit $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$. Here $n=3, a=3$. Result = $3(3)^{3-1} = 3(9) = 27$.",
        difficulty: "medium" as const
    },
    {
        id: "p5",
        question: "Discuss the continuity of $f(x) = |x|$ at $x=0$.",
        solution: "LHL at 0: $\\lim_{x \\to 0^-} (-x) = 0$. RHL at 0: $\\lim_{x \\to 0^+} (x) = 0$. $f(0) = 0$. Since LHL = RHL = $f(0)$, it is continuous.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "ep1",
        question: "Evaluate $\\lim_{x \\to 0} \\frac{e^{3x} - 1}{x}$.",
        solution: "$\\lim_{x \\to 0} 3 \\cdot \\frac{e^{3x} - 1}{3x}$. Let $3x = y$. As $x \\to 0, y \\to 0$. Limit = $3 \\cdot 1 = 3$.",
        difficulty: "medium" as const
    },
    {
        id: "ep2",
        question: "Find $k$ if $f(x) = \\begin{cases} kx+1, & x \\le 5 \\\\ 3x-5, & x > 5 \\end{cases}$ is continuous at $x=5$.",
        solution: "LHL (at 5) = $5k+1$. RHL (at 5) = $3(5)-5 = 10$. For continuity, LHL = RHL $\\Rightarrow 5k+1 = 10 \\Rightarrow 5k = 9 \\Rightarrow k = 9/5$.",
        difficulty: "hard" as const
    },
    {
        id: "ep3",
        question: "Evaluate $\\lim_{x \\to 0} \\frac{\\log(1+2x)}{x}$.",
        solution: "$\\lim_{x \\to 0} 2 \\cdot \\frac{\\log(1+2x)}{2x} = 2 \\cdot 1 = 2$.",
        difficulty: "medium" as const
    },
    {
        id: "ep4",
        question: "Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$.",
        solution: "Use formula $1 - \\cos x = 2\\sin^2(x/2)$. Limit = $\\lim_{x \\to 0} \\frac{2\\sin^2(x/2)}{x}$. Multiply/divide by $x/4$, result is 0.",
        difficulty: "medium" as const
    },
    {
        id: "ep5",
        question: "Find $k$ if $f(x) = \\begin{cases} \\frac{k \\cos x}{\\pi - 2x}, & x \\neq \\pi/2 \\\\ 3, & x = \\pi/2 \\end{cases}$ is continuous at $x=\\pi/2$.",
        solution: "Let $x = \\pi/2 + h$. As $x \\to \\pi/2, h \\to 0$. Limit simplifies to $k/2$. Since continuous, $k/2 = 3 \\Rightarrow k=6$.",
        difficulty: "hard" as const
    },
    {
        id: "ep6",
        question: "Evaluate $\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$.",
        solution: "$\\tan x (1 - \\cos x) / x^3 = \\frac{\\sin x}{x} \\cdot \\frac{1-\\cos x}{x^2 \\cos x} = 1 \\cdot \\frac{1}{2} \\cdot 1 = 1/2$.",
        difficulty: "hard" as const
    },
    {
        id: "ep7",
        question: "Discuss continuity of $f(x) = \\sin x + \\cos x$.",
        solution: "Sin x and Cos x are continuous everywhere. Sum of continuous functions is continuous. Domain = $\\mathbb{R}$.",
        difficulty: "easy" as const
    },
    {
        id: "ep8",
        question: "Evaluate $\\lim_{x \\to a} \\frac{\\sqrt{a+2x} - \\sqrt{3x}}{\\sqrt{3a+x} - 2\\sqrt{x}}$.",
        solution: "Rationalize both numerator and denominator. $\\dots = \\frac{2}{3\\sqrt{3}}$.",
        difficulty: "hard" as const
    }
];

export const evaluationMethods = [
    {
        title: "Direct Substitution",
        concept: "Just plug in the value of $a$ into the function.",
        example: "$\\lim_{x \\to 1} (x^2 + 3)$",
        steps: [
            "Replace $x$ with 1: $1^2 + 3$.",
            "Evaluate: $1+3 = 4$.",
            "Since we didn't get $0/0$, this is the answer."
        ]
    },
    {
        title: "Factorization",
        concept: "Used when you get $0/0$. Factor numerator and denominator to cancel common terms.",
        example: "$\\lim_{x \\to 2} \\frac{x^2-4}{x-2}$",
        steps: [
            "Plug in 2: $(4-4)/(2-2) = 0/0$ (Indeterminate).",
            "Factor numerator: $(x-2)(x+2)$.",
            "Cancel $(x-2)$: $\\lim_{x \\to 2} (x+2)$.",
            "Substitute 2: $2+2=4$."
        ]
    },
    {
        title: "Rationalization",
        concept: "Used for square roots giving $0/0$. Multiply by conjugate.",
        example: "$\\lim_{x \\to 0} \\frac{\\sqrt{1+x}-1}{x}$",
        steps: [
            "Multiply Num & Denom by $\\sqrt{1+x}+1$.",
            "Numerator becomes $(1+x)-1 = x$.",
            "Cancel $x$: $\\lim_{x \\to 0} \\frac{1}{\\sqrt{1+x}+1}$.",
            "Substitute 0: $1/(1+1) = 1/2$."
        ]
    }
];
