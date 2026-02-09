export const formulaText = {
    // Sets
    setDef: "A set is a well-defined collection of distinct objects.",
    rosterForm: "Listing elements within curly brackets, e.g., $A = {1, 2, 3, 4}$.",
    setBuilderForm: "Using a property $P(x)$ to define elements, e.g., $A = {x : x in N, x < 5}$.",
    emptySet: "A set containing no elements, denoted by $phi$ or {}.",
    subsetDef: "Set $A$ is a subset of $B$ ($A subseteq B$) if every element of $A$ is also an element of $B$.",
    powerSetDef: "The collection of all subsets of a set $A$ is called the Power Set of $A$, denoted by $P(A)$. If $n(A) = m$, then $n(P(A)) = 2^m$.",

    // Set Operations
    unionDef: "The union of $A$ and $B$ ($A cup B$) is the set of elements which are in $A$ or in $B$ or in both.",
    intersectionDef: "The intersection of $A$ and $B$ ($A cap B$) is the set of elements which are common to both $A$ and $B$.",
    differenceDef: "The difference $A - B$ is the set of elements which belong to $A$ but not to $B$.",
    complementDef: "The complement of $A$ ($A'$ or $A^c$) relative to universal set $U$ is the set of elements in $U$ that are not in $A$.",

    // Cardinality
    cardinalityFormula2: "$n(A cup B) = n(A) + n(B) - n(A cap B)$",
    cardinalityFormula3: "$n(A cup B cup C) = n(A) + n(B) + n(C) - n(A cap B) - n(B cap C) - n(C cap A) + n(A cap B cap C)$",

    // Relations
    cartesianProduct: "$A times B = {(a, b) : a in A, b in B}$. If $n(A)=p, n(B)=q$, then $n(A times B) = pq$.",
    relationDef: "A relation $R$ from a non-empty set $A$ to a non-empty set $B$ is a subset of the Cartesian product $A times B$.",
    domainRange: "Domain: The set of all first elements of the ordered pairs in $R$. Range: The set of all second elements.",

    // Functions
    functionDef: "A relation $f$ from $A$ to $B$ is a function if every element of $A$ has one and only one image in $B$.",
    realFunction: "A function whose range is a subset of $R$ is called a real-valued function. If domain is also subset of $R$, it's a real function.",

    // Algebra of Functions
    funcAddition: "$(f + g)(x) = f(x) + g(x)$",
    funcSubtraction: "$(f - g)(x) = f(x) - g(x)$",
    funcMultiplication: "$(f cdot g)(x) = f(x) cdot g(x)$",
    funcDivision: "$(frac{f}{g})(x) = frac{f(x)}{g(x)}, text{ provided } g(x) != 0$",

    // Composite Functions
    compositeDef: "Let $f: A -> B$ and $g: B -> C$. The composition of $f$ and $g$, denoted by $g circ f$, is defined as $(g circ f)(x) = g(f(x))$ for all $x in A$.",
    compositeProperties: "1. Generally $g circ f != f circ g$ (Not Commutative).\n2. $(h circ g) circ f = h circ (g circ f)$ (Associative).",

    // 3-Set Formulas
    setUnion3: "$A cup B cup C = (A cup B) cup C$",
    setRay: ""
};

export const compositeExamples = [
    {
        id: "c1",
        f: "$f(x) = 2x$",
        g: "$g(x) = x^2$",
        calc: "$(g circ f)(x) = g(f(x)) = g(2x) = (2x)^2 = 4x^2$",
        note: "Note: $(f circ g)(x) = f(g(x)) = f(x^2) = 2x^2$. Here $g circ f != f circ g$."
    },
    {
        id: "c2",
        f: "$f(x) = sin x$",
        g: "$g(x) = x^2$",
        calc: "$(g circ f)(x) = g(sin x) = (sin x)^2 = sin^2 x$",
        note: "$(f circ g)(x) = f(x^2) = sin(x^2)$."
    }
];

export const examProblems = [
    {
        id: "e1",
        question: "If $f(x) = x^2 - 3x + 2$, find $f(f(x))$.",
        solution: "$f(f(x)) = f(x^2 - 3x + 2)$ \n$= (x^2 - 3x + 2)^2 - 3(x^2 - 3x + 2) + 2$.",
        difficulty: "hard" as const
    },
    {
        id: "e2",
        question: "In a class of 60 students, 25 play Cricket, 20 play Tennis, and 10 play both. How many play neither?",
        solution: "$n(U)=60, n(C)=25, n(T)=20, n(C cap T)=10$.\n$n(C cup T) = n(C) + n(T) - n(C cap T) = 25 + 20 - 10 = 35$.\nNeither = $n(U) - n(C cup T) = 60 - 35 = 25$.",
        difficulty: "medium" as const
    },
    {
        id: "e3",
        question: "Let $A = {1, 2, 3}, B = {3, 4}$. Find number of relations from $A$ to $B$.",
        solution: "$n(A)=3, n(B)=2$. \n$n(A times B) = 3 times 2 = 6$. \nNumber of subsets (relations) = $2^6 = 64$.",
        difficulty: "easy" as const
    },
    {
        id: "e4",
        question: "Find the domain and range of $f(x) = sqrt{9 - x^2}$.",
        solution: "Domain: $9 - x^2 ge 0 => x^2 le 9 => -3 le x le 3$. Domain = $[-3, 3]$.\nRange: Let $y = sqrt{9-x^2}$. Since square root $ge 0$, and max value is $sqrt 9=3$, Range = $[0, 3]$.",
        difficulty: "hard" as const
    }
];

export const setLaws = [
    { name: "Idempotent Laws", formula: "$A cup A = A$, $A cap A = A$" },
    { name: "Identity Laws", formula: "$A cup phi = A$, $A cap U = A$" },
    { name: "Commutative Laws", formula: "$A cup B = B cup A$, $A cap B = B cap A$" },
    { name: "Associative Laws", formula: "$(A cup B) cup C = A cup (B cup C)$" },
    { name: "Distributive Laws", formula: "$A cup (B cap C) = (A cup B) cap (A cup C)$" },
    { name: "De Morgan's Laws", formula: "$(A cup B)' = A' cap B'$, $(A cap B)' = A' cup B'$" }
];

export const functionTypes = [
    {
        name: "Identity Function",
        formula: "$f(x) = x$",
        desc: "Returns the input as output. Graph is a straight line passing through origin at 45°.",
        graphType: "identity"
    },
    {
        name: "Constant Function",
        formula: "$f(x) = c$",
        desc: "Output remains same regardless of input. Graph is a line parallel to x-axis.",
        graphType: "constant"
    },
    {
        name: "Modulus Function",
        formula: "$f(x) = |x|$",
        desc: "Returns absolute value. $x$ if $x ge 0$, $-x$ if $x < 0$. V-shaped graph.",
        graphType: "modulus"
    },
    {
        name: "Signum Function",
        formula: "$f(x) = frac{|x|}{x}$",
        desc: "Values: 1 if $x>0$, 0 if $x=0$, -1 if $x<0$.",
        graphType: "signum"
    },
    {
        name: "Greatest Integer",
        formula: "$f(x) = [x]$",
        desc: "Returns greatest integer less than or equal to $x$. Step graph.",
        graphType: "step"
    },
    {
        name: "Exponential Function",
        formula: "$f(x) = a^x, a > 1$",
        desc: "Curve increasing rapidly for $x>0$. Passes through (0,1).",
        graphType: "exponential"
    }
];

export const problems = [
    // Sets Problems
    {
        id: "s1",
        question: "Write $A = {x : x text{ is an integer and } -3 < x < 7}$ in roster form.",
        solution: "$A = {-2, -1, 0, 1, 2, 3, 4, 5, 6}$",
        difficulty: "easy" as const
    },
    {
        id: "s2",
        question: "If $A = {1, 2}$, find its Power Set $P(A)$.",
        solution: "$P(A) = { phi, {1}, {2}, {1, 2} }$. Number of elements = $2^2 = 4$.",
        difficulty: "easy" as const
    },
    {
        id: "s3",
        question: "If $U = {1, 2, 3, 4, 5, 6}, A = {2, 3}, B = {3, 4, 5}$, find $A' cap B'$.",
        solution: "$A' = {1, 4, 5, 6}$, $B' = {1, 2, 6}$.\n$A' cap B' = {1, 6}$.\nAlternatively using De Morgan's: $(A cup B)' = ({2,3,4,5})' = {1, 6}$.",
        difficulty: "medium" as const
    },
    {
        id: "s4",
        question: "In a group of 400 people, 250 speak Hindi and 200 speak English. How many speak both?",
        solution: "Let H = Hindi, E = English.\n$n(H cup E) = 400, n(H) = 250, n(E) = 200$.\nFormula: $n(H cup E) = n(H) + n(E) - n(H cap E)$\n$400 = 250 + 200 - n(H cap E)$\n$n(H cap E) = 450 - 400 = 50$.",
        difficulty: "medium" as const
    },

    // Relations Problems
    {
        id: "r1",
        question: "If $A = {1, 2}, B = {3, 4}$, find $A times B$.",
        solution: "$A times B = {(1, 3), (1, 4), (2, 3), (2, 4)}$.",
        difficulty: "easy" as const
    },
    {
        id: "r2",
        question: "Let $R = {(x, y) : y = x + 1, x in {1, 2, 3, 4, 5}}$. Write domain and range.",
        solution: "Pairs: $(1,2), (2,3), (3,4), (4,5), (5,6)$.\nDomain = ${1, 2, 3, 4, 5}$\nRange = ${2, 3, 4, 5, 6}$",
        difficulty: "medium" as const
    },

    // Functions Problems
    {
        id: "f1",
        question: "Find the domain of $f(x) = frac{x^2 + 3x + 5}{x^2 - 5x + 4}$.",
        solution: "Denominator $!= 0$.\n$x^2 - 5x + 4 != 0 => (x-1)(x-4) != 0$.\nDomain = $R - {1, 4}$.",
        difficulty: "hard" as const
    },
    {
        id: "f2",
        question: "If $f(x) = x^2, g(x) = 2x + 1$, find $(f + g)(3)$.",
        solution: "$(f+g)(3) = f(3) + g(3) = 3^2 + (2(3) + 1) = 9 + 7 = 16$.",
        difficulty: "easy" as const
    },
    {
        id: "f3",
        question: "Find range of $f(x) = 2 - 3 cos x$.",
        solution: "Range of $cos x$ is $[-1, 1]$.\nMultiply by -3: $[-3, 3]$ (order flips but interval same).\nAdd 2: $[2-3, 2+3] = [-1, 5]$.",
        difficulty: "hard" as const
    }
];
