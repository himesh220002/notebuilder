export const formulaText = {
    derivativeIdx: `$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$`,
    slopeTangent: `$\\text{Slope of tangent at } (x_0, y_0) = f'(x_0) = \\tan \\theta$`,

    standardDerivatives: {
        algebraic: [
            { func: "$\\frac{d}{dx}(x^n)$", res: "$nx^{n-1}$", example: "$\\frac{d}{dx}(x^5) = 5x^4$" },
            { func: "$\\frac{d}{dx}(\\text{constant})$", res: "$0$", example: "$\\frac{d}{dx}(5) = 0$" },
            { func: "$\\frac{d}{dx}(\\sqrt{x})$", res: "$\\frac{1}{2\\sqrt{x}}$", example: "$\\text{Direct formula}$" },
            { func: "$\\frac{d}{dx}(\\frac{1}{x})$", res: "$-\\frac{1}{x^2}$", example: "$\\text{Direct formula}$" }
        ],
        exponential: [
            { func: "$\\frac{d}{dx}(e^x)$", res: "$e^x$", example: "$\\frac{d}{dx}(e^{2x}) = 2e^{2x}$" },
            { func: "$\\frac{d}{dx}(a^x)$", res: "$a^x \\log_e a$", example: "$\\frac{d}{dx}(2^x) = 2^x \\log 2$" }
        ],
        logarithmic: [
            { func: "$\\frac{d}{dx}(\\log_e x)$", res: "$\\frac{1}{x}$", example: "$\\text{Base must be } e$" },
            { func: "$\\frac{d}{dx}(\\log_a x)$", res: "$\\frac{1}{x \\log_e a}$", example: "$\\frac{d}{dx}(\\log_{10} x) = \\frac{1}{x \\log 10}$" }
        ]
    },

    algebraOfDerivatives: [
        { name: "Sum/Difference", rule: "$\\frac{d}{dx}[u \\pm v] = u' \\pm v'$", example: "$\\frac{d}{dx}(x^2 + \\sin x) = 2x + \\cos x$" },
        { name: "Product Rule", rule: "$\\frac{d}{dx}(uv) = u'v + uv'$", example: "$\\frac{d}{dx}(x \\sin x) = 1 \\cdot \\sin x + x \\cos x$" },
        { name: "Quotient Rule", rule: "$\\frac{d}{dx}(\\frac{u}{v}) = \\frac{u'v - uv'}{v^2}$", example: "$\\frac{d}{dx}(\\frac{\\sin x}{x}) = \\frac{x \\cos x - \\sin x}{x^2}$" },
        { name: "Chain Rule", rule: "$\\frac{dy}{dx} = \\frac{dy}{dt} \\cdot \\frac{dt}{dx}$", example: "$\\text{See below}$" }
    ],

    compositeFunc: {
        formula: "$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$",
        example: "$\\frac{d}{dx}(\\sin(x^2)) = \\cos(x^2) \\cdot 2x$"
    },
    parametric: {
        formula: "$\\text{If } x = f(t), y = g(t), \\text{ then } \\frac{dy}{dx} = \\frac{g'(t)}{f'(t)}$",
        example: "$x=at^2, y=2at \\implies \\frac{dy}{dx} = \\frac{2a}{2at} = \\frac{1}{t}$"
    },
    logDiff: {
        formula: "$\\text{If } y = u^v, \\log y = v \\log u \\implies \\frac{1}{y} y' = v' \\log u + v \\frac{u'}{u}$",
        example: "$y=x^x \\implies y' = x^x(1+\\log x)$"
    },
    rateMeasure: "$\\frac{dy}{dt} = \\text{Rate of change of } y \\text{ w.r.t } t$"
};

export const importantExamples = [
    {
        title: "Product + Chain Rule",
        content: "Find derivative of $y = e^x \\sin(x^2)$",
        solution: "$y' = \\frac{d}{dx}(e^x) \\cdot \\sin(x^2) + e^x \\cdot \\frac{d}{dx}(\\sin(x^2))$\n$= e^x \\sin(x^2) + e^x \\cos(x^2) \\cdot 2x$\n$= e^x(\\sin(x^2) + 2x \\cos(x^2))$"
    },
    {
        title: "Implicit Differentiation",
        content: "Find $dy/dx$ if $x^3 + y^3 = 3axy$",
        solution: "$3x^2 + 3y^2 y' = 3a(1 \\cdot y + x y')$\n$x^2 + y^2 y' = ay + ax y'$\n$y'(y^2 - ax) = ay - x^2$\n$y' = \\frac{ay - x^2}{y^2 - ax}$"
    },
    {
        title: "Logarithmic Differentiation",
        content: "Differentiate $y = (\\sin x)^{\\cos x}$",
        solution: "Take log: $\\log y = \\cos x \\log(\\sin x)$ \n $ \\implies\\frac{1}{y}y' = -\\sin x \\log(\\sin x) + \\cos x \\cdot \\frac{1}{\\sin x} \\cdot \\cos x$\n$y' = (\\sin x)^{\\cos x}[\\cos x \\cot x - \\sin x \\log(\\sin x)]$"
    }
];

export const problems = [
    {
        id: "d_concept_1",
        question: "Find the derivative of $f(x) = x^3 - 2x^2 + 5$ at $x=1$.",
        solution: "1. Differentiate: $f'(x) = 3x^2 - 4x$\n2. At $x=1$: $f'(1) = 3(1)^2 - 4(1) = 3 - 4 = -1$",
        difficulty: "easy" as const
    },
    {
        id: "d_chain_1",
        question: "Differentiate $y = \\log(\\sin(x^2))$.",
        solution: "Using Chain Rule:\n$y' = \\frac{1}{\\sin(x^2)} \\cdot \\frac{d}{dx}(\\sin(x^2))$\n$   = \\frac{1}{\\sin(x^2)} \\cdot \\cos(x^2) \\cdot \\frac{d}{dx}(x^2)$\n$   = \\cot(x^2) \cdot 2x$",
        difficulty: "medium" as const
    },
    {
        id: "d_implicit_1",
        question: "Find $dy/dx$ if $x^2 + y^2 = a^2$.",
        solution: "Differentiate w.r.t x:\n$2x + 2y \\frac{dy}{dx} = 0$\n$2y \\frac{dy}{dx} = -2x$\n$\\frac{dy}{dx} = -\\frac{x}{y}$",
        difficulty: "medium" as const
    },
    {
        id: "d_parametric_1",
        question: "Find $dy/dx$ if $x = a\\cos\\theta, y = b\\sin\\theta$.",
        solution: "1. $dx/d\\theta = -a\\sin\\theta$\n2. $dy/d\\theta = b\\cos\\theta$\n3. $dy/dx = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{b\\cos\\theta}{-a\\sin\\theta} = -\\frac{b}{a}\\cot\\theta$",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "d_exam_1",
        question: "If $y = x^x$, find $dy/dx$.",
        solution: "Logarithmic Differentiation:\n1. $\\log y = x \\log x$\n2. Differentiate: $\\frac{1}{y} y' = 1 \\cdot \\log x + x \\cdot \\frac{1}{x}$\n3. $\\frac{1}{y} y' = \\log x + 1$\n4. $y' = x^x(1 + \\log x)$",
        difficulty: "hard" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "d_exam_2",
        question: "Find the rate of change of area of a circle w.r.t radius when $r = 5$cm.",
        solution: "1. Area $A = \\pi r^2$\n2. Rate w.r.t $r$: $\\frac{dA}{dr} = 2\\pi r$\n3. At $r=5$: $\\frac{dA}{dr} = 10\\pi$ cm$^2$/cm",
        difficulty: "easy" as const,
        examTag: "CBSE 2022"
    },
    {
        id: "d_exam_3",
        question: "If $y = \\sqrt{\\sin x + \\sqrt{\\sin x + ... \\infty}}$, prove that $\\frac{dy}{dx} = \\frac{\\cos x}{2y-1}$.",
        solution: "1. Given $y = \\sqrt{\\sin x + y}$\n2. Square both sides: $y^2 = \\sin x + y$\n3. Differentiate: $2y y' = \\cos x + y'$\n4. $y'(2y - 1) = \\cos x \\implies y' = \\frac{\\cos x}{2y-1}$",
        difficulty: "hard" as const,
        examTag: "Common Exam Q"
    },
    {
        id: "d_exam_4",
        question: "Find the slope of tangent to the curve $y = 3x^4 - 4x$ at $x=4$.",
        solution: "1. $y' = 12x^3 - 4$\n2. At $x=4$: $m = 12(4)^3 - 4 = 12(64) - 4 = 768 - 4 = 764$",
        difficulty: "medium" as const,
        examTag: "CBSE Sample"
    },
    {
        id: "d_exam_5",
        question: "If $x = a(t + \\sin t), y = a(1 - \\cos t)$, find $d^2y/dx^2$ at $t=\\pi/2$.",
        solution: "1. $dx/dt = a(1+\\cos t), dy/dt = a\\sin t$\n2. $dy/dx = \\frac{a\\sin t}{a(1+\\cos t)} = \\tan(t/2)$\n3. $\\frac{d^2y}{dx^2} = \\sec^2(t/2) \\cdot \\frac{1}{2} \\cdot \\frac{dt}{dx}$\n4. At $t=\\pi/2$: $dy/dx = 1$. $\\frac{dt}{dx} = \\frac{1}{a(1+0)} = 1/a$. Ans: $\\frac{1}{2a}(\\sqrt{2})^2 = 1/a$",
        difficulty: "hard" as const
    }
];
