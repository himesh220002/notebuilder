export const formulaText = {
    // Intro
    sequenceDef: "A sequence is an arrangement of numbers in a definite order according to some rule ($a_1, a_2, ..., a_n$).",
    seriesDef: "The sum of terms of a sequence is called a series ($a_1 + a_2 + ... + a_n$).",
    fibonacci: "A sequence where $a_n = a_{n-1} + a_{n-2}$ for $n > 2$, with $a_1=1, a_2=1$. (1, 1, 2, 3, 5...)",

    // AP
    apDef: "A sequence where the difference between consecutive terms is constant ($d = a_{n} - a_{n-1}$).",
    apGeneral: "$a_n = a + (n - 1)d$",
    apSum: "$S_n = \\frac{n}{2}[2a + (n-1)d]$ or $S_n = \\frac{n}{2}(a + l)$",
    apMean: "Arithmetic Mean (AM) between $a$ and $b$ is $A = \\frac{a+b}{2}$.",
    apNthEnd: "$n^{th}$ term from end = $l - (n-1)d$, where $l$ is the last term.",

    // GP
    gpDef: "A sequence where the ratio of consecutive terms is constant ($r = \\frac{a_n}{a_{n-1}}$).",
    gpGeneral: "$a_n = a \\cdot r^{n-1}$",
    gpSum: "$S_n = \\frac{a(r^n - 1)}{r - 1}$ if $r > 1$, or $S_n = \\frac{a(1 - r^n)}{1 - r}$ if $r < 1$.",
    gpInfinite: "$S_\\infty = \\frac{a}{1 - r}$, provided $|r| < 1$.",
    gpMean: "Geometric Mean (GM) between $a$ and $b$ is $G = \\sqrt{ab}$.",

    // Relations
    amGmRelation: "$AM \\ge GM$. For any distinct positive real numbers $a, b$: $\\frac{a+b}{2} > \\sqrt{ab}$.",

    // Special Series
    sumN: "$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$",
    sumN2: "$\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$",
    sumN3: "$\\sum_{k=1}^n k^3 = [\\frac{n(n+1)}{2}]^2$",

    // Applications
    compoundInterest: "Compound Interest growth is a Geometric Progression where $A = P(1 + \\frac{r}{100})^n$.",
    depreciation: "Depreciation ($V = P(1 - \\frac{r}{100})^n$) also follows a GP model with $r < 1$."
};

export const problems = [
    {
        id: "seq1",
        question: "Find the 10th term of the sequence defined by $a_n = n(n-2) / 2$.",
        solution: "$a_{10} = 10(10-2) / 2 = 10(8)/2 = 80/2 = 40$.",
        difficulty: "easy" as const
    },
    {
        id: "ap1",
        question: "How many terms are in the AP: 7, 13, 19, ..., 205?",
        solution: "$a = 7, d = 6, a_n = 205$.\n$205 = 7 + (n-1)6$\n$198 = (n-1)6$\n$33 = n-1 \\Rightarrow n = 34$.",
        difficulty: "medium" as const
    },
    {
        id: "ap2",
        question: "Find the sum of odd integers from 1 to 2001.",
        solution: "AP: 1, 3, 5, ..., 2001.\n$a=1, d=2, l=2001$.\nFind n: $2001 = 1 + (n-1)2 \\Rightarrow 2000 = 2(n-1) \\Rightarrow n=1001$.\nSum = $\\frac{n}{2}(a+l) = \\frac{1001}{2}(1 + 2001) = \\frac{1001}{2}(2002) = 1001 \\times 1001 = 1002001$.",
        difficulty: "medium" as const
    },
    {
        id: "gp1",
        question: "Find the sum of the infinite GP: $5, \\frac{20}{7}, \\frac{80}{49}, ...$",
        solution: "$a = 5$. Ratio $r = \\frac{20/7}{5} = \\frac{4}{7}$.\nIs $|r| < 1$? Yes, $4/7 < 1$.\n$S_\\infty = \\frac{a}{1-r} = \\frac{5}{1 - 4/7} = \\frac{5}{3/7} = \\frac{35}{3}$.",
        difficulty: "hard" as const
    },
    {
        id: "amgm1",
        question: "If AM and GM of two numbers are 10 and 8, find the numbers.",
        solution: "AM = $\\frac{a+b}{2} = 10 \\Rightarrow a+b = 20$. GM = $\\sqrt{ab} = 8 \\Rightarrow ab = 64$.\nQuadratic eq: $x^2 - (a+b)x + ab = 0 \\Rightarrow x^2 - 20x + 64 = 0$.\n$(x-16)(x-4) = 0$. Numbers are 4 and 16.",
        difficulty: "medium" as const
    },
    {
        id: "app1",
        question: "A machine costs ₹50,000. It depreciates by 10% each year. Find its value after 3 years.",
        solution: "Model as GP ($r = 1 - 0.10 = 0.90$).\n$V = P(1-i)^n = 50000(0.9)^3$\n$= 50000 \\times 0.729 = 36,450$.\nValue is ₹36,450.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "e1",
        question: "The sum of first 3 terms of a GP is 13/12 and their product is -1. Find the terms.",
        solution: "Let terms be $\\frac{a}{r}, a, ar$.\nProduct $\\frac{a}{r} \\cdot a \\cdot ar = a^3 = -1 \\Rightarrow a = -1$.\nSum: $-\\frac{1}{r} - 1 - r = \\frac{13}{12}$. Solve quadratic for $r$.\nResults in sequences like $-4/3, -1, -3/4$ or $-3/4, -1, -4/3$.",
        difficulty: "hard" as const
    },
    {
        id: "e2",
        question: "Find the sum to n terms: $8 + 88 + 888 + ...$",
        solution: "$S = 8(1 + 11 + 111 + ...)$\n$= \\frac{8}{9}(9 + 99 + 999 + ...)$\n$= \\frac{8}{9}((10-1) + (100-1) + ...)$\n$= \\frac{8}{9}[\\frac{10(10^n - 1)}{10-1} - n]$.",
        difficulty: "hard" as const
    },
    {
        id: "e3",
        question: "Insert 3 numbers between 1 and 256 so that the resulting sequence is a GP.",
        solution: "$1, G_1, G_2, G_3, 256$. Total 5 terms.\n$a_5 = ar^4 = 256 \\Rightarrow 1 \\cdot r^4 = 256 \\Rightarrow r = 4$.\nNumbers: $1 \\times 4 = 4$, $4 \\times 4 = 16$, $16 \\times 4 = 64$.",
        difficulty: "medium" as const
    }
];
