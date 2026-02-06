
export const formulaText = {
    // 1. Introduction
    functionDef: "A relation $f$ from a set $A$ to a set $B$ is called a function if every element of $A$ has one and only one image in $B$.",
    functionKeyPoints: [
        "Every element in set $A$ (Domain) must have an image in set $B$.",
        "Unique Image: No element in $A$ can be associated with more than one element in $B$.",
        "Many-to-One is allowed: Different $x$ values can have the same $y$ value (e.g., $f(x) = x^2$)."
    ],
    verticalLineTest: "If every vertical line intersects a curve at most once, then the curve represents a function.",

    mappingDiagramLogic: {
        intro: "Mapping diagrams use arrows to show how elements of the Domain (Set A) are paired with elements of the Co-domain (Set B).",
        rules: [
            "Exactly One Arrow from each element of $A$.",
            "No element in $A$ can be left without an arrow.",
            "Multiple arrows can point to the same element in $B$ (Many-to-One)."
        ]
    },

    // 2. Domain & Range
    domainRangeDef: "The set of all first elements of ordered pairs in $f$ is the Domain. The set of all second elements is the Range.",
    rationalDomain: "For $f(x) = \\dfrac{P(x)}{Q(x)}$, the domain is $\\mathbb{R} \\setminus \\{x : Q(x) = 0\\}$.",
    sqrtDomain: "For $f(x) = \\sqrt{g(x)}$, the domain is $\\{x : g(x) \\geq 0\\}$.",

    // 3. Real Valued Functions & Algebra
    realFunctionDef: "A function $f: A \\to B$ is a real function if $A, B \\subseteq \\mathbb{R}$.",
    algebraSum: "$(f + g)(x) = f(x) + g(x)$",
    algebraDiff: "$(f - g)(x) = f(x) - g(x)$",
    algebraProd: "$(fg)(x) = f(x) \\cdot g(x)$",
    algebraQuo: "$(f/g)(x) = \\dfrac{f(x)}{g(x)}, g(x) \\neq 0$",

    // 4. Standard Functions
    identityFn: "$f(x) = x \\quad (D_f = \\mathbb{R}, R_f = \\mathbb{R})$",
    constantFn: "$f(x) = c \\quad (D_f = \\mathbb{R}, R_f = \\{c\\})$",
    modulusFn: "$f(x) = |x| = \\begin{cases} x, & x \\geq 0 \\\\ -x, & x < 0 \\end{cases}$",
    signumFn: "$f(x) = \\begin{cases} 1, & x > 0 \\\\ 0, & x = 0 \\\\ -1, & x < 0 \\end{cases}$",
    stepFn: "$f(x) = [x]$ (Greatest integer $\\leq x$)",
    reciprocalFn: "$f(x) = 1/x \\quad (x \\neq 0)$",

    // 5. Applied Math Functions
    exponentialFn: "$f(x) = a^x, a > 0, a \\neq 1$",
    logarithmicFn: "$f(x) = \\log_a x, x > 0, a > 0, a \\neq 1$",

    // 6. Practical Applications
    costFn: "$C(x) = F + v(x)$ (Fixed + Variable Cost)",
    revenueFn: "$R(x) = p \\cdot x$ (Price $\\times$ Quantity)",
    profitFn: "$P(x) = R(x) - C(x)$",
    demandSupply: "Demand: $p = f(q)$ (Generally decreasing); Supply: $p = g(q)$ (Generally increasing).",
};

export const problems = [
    {
        id: "p1",
        question: "Find the domain of $f(x) = \\dfrac{x+2}{x-3}$.",
        solution: "The denominator $x-3 \\neq 0 \\Rightarrow x \\neq 3$. Domain = $\\mathbb{R} \\setminus \\{3\\}$.",
        difficulty: "easy" as const
    },
    {
        id: "p2",
        question: "Find the domain of $f(x) = \\sqrt{4-x^2}$.",
        solution: "$4-x^2 \\geq 0 \\Rightarrow x^2 \\leq 4 \\Rightarrow -2 \\leq x \\leq 2$. Domain = $[-2, 2]$.",
        difficulty: "medium" as const
    },
    {
        id: "p3",
        question: "Is the relation $\\{(1,2), (2,3), (1,4)\\}$ a function?",
        solution: "No, element '1' has two distinct images (2 and 4).",
        difficulty: "easy" as const
    },
    {
        id: "p4",
        question: "If $f(x) = x^2$ and $g(x) = 2x+1$, find $(f+g)(2)$.",
        solution: "$f(2) = 4, g(2) = 5$. $(f+g)(2) = 4 + 5 = 9$.",
        difficulty: "easy" as const
    },
    {
        id: "p5",
        question: "Evaluate $[2.9]$ and $[-2.1]$.",
        solution: "$[2.9] = 2$ (Greatest integer $\\leq 2.9$). $[-2.1] = -3$ (Greatest integer $\\leq -2.1$).",
        difficulty: "medium" as const
    }
];

export const classicProblems = [
    {
        id: "cp1",
        question: "Find the range of $f(x) = |x-1|$.",
        solution: "Since absolute value is always non-negative, range = $[0, \\infty)$.",
        difficulty: "easy" as const
    },
    {
        id: "cp2",
        question: "A company has fixed costs of ₹500 and variable cost of ₹10 per unit. Find the cost function.",
        solution: "$C(x) = 10x + 500$.",
        difficulty: "easy" as const
    },
    {
        id: "cp3",
        question: "Identify the domain and range of the Signum function.",
        solution: "Domain = $\\mathbb{R}$. Range = $\\{-1, 0, 1\\}$.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "ep1",
        question: "Find the domain and range of $f(x) = \\dfrac{1}{\\sqrt{x-5}}$.",
        solution: "$x-5 > 0 \\Rightarrow x > 5$. Domain = $(5, \\infty)$. Since $\\sqrt{x-5} > 0$, Range = $(0, \\infty)$.",
        difficulty: "hard" as const
    },
    {
        id: "ep2",
        question: "If $f(x) = x^2$ is a real function, find $\\dfrac{f(1.1) - f(1)}{1.1 - 1}$.",
        solution: "$\\dfrac{(1.1)^2 - (1)^2}{0.1} = \\dfrac{1.21 - 1}{0.1} = \\dfrac{0.21}{0.1} = 2.1$.",
        difficulty: "medium" as const
    },
    {
        id: "ep3",
        question: "The demand function for a product is $p = 100 - 2q$. Find the revenue function and the revenue when 10 units are sold.",
        solution: "$R(q) = p \\cdot q = (100 - 2q)q = 100q - 2q^2$. For $q=10$, $R(10) = 1000 - 200 = 800$.",
        difficulty: "hard" as const
    }
];

export const domainRangeLogic = [
    {
        title: "The Zero-Denominator Rule (Domain)",
        concept: "The function $\\frac{P(x)}{Q(x)}$ is undefined when $Q(x) = 0$.",
        example: "$f(x) = \\dfrac{1}{x-1}$",
        steps: [
            "Set denominator to zero: $x-1 = 0 \\Rightarrow x=1$.",
            "This value makes the fraction 'divide by zero', which is undefined.",
            "Domain = $\\mathbb{R} \\setminus \\{1\\}$."
        ]
    },
    {
        title: "The Horizontal Asymptote (Range)",
        concept: "For $y = \\frac{a}{x-b}$, $y$ can take any value except the one that makes $x$ undefined.",
        example: "$f(x) = \\dfrac{1}{x-1}$",
        steps: [
            "Let $y = \\dfrac{1}{x-1}$. Solve for $x$ in terms of $y$.",
            "$x-1 = \\dfrac{1}{y} \\Rightarrow x = 1 + \\dfrac{1}{y}$.",
            "For $x$ to be a real number, the denominator $y$ cannot be $0$.",
            "Range = $\\mathbb{R} \\setminus \\{0\\}$."
        ]
    },
    {
        title: "The Non-Negative Rule (Square Roots)",
        concept: "The value inside $\\sqrt{\\dots}$ must be $\\geq 0$.",
        example: "$f(x) = \\sqrt{x-5}$",
        steps: [
            "Set expression $\\geq 0$: $x-5 \\geq 0 \\Rightarrow x \\geq 5$.",
            "The function only exists for $x$ values 5 and above.",
            "Domain = $[5, \\infty)$."
        ]
    }
];
