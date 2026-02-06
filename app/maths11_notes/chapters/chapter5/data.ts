
export const formulaText = {
    // 1. Fundamental Principles
    additionPrinciple: "If an event can occur in $m$ ways and another independent event can occur in $n$ ways (mutually exclusive), then either of the two events can occur in $(m + n)$ ways.",
    multiplicationPrinciple: "If an event can occur in $m$ different ways, following which another event can occur in $n$ different ways, then the total number of occurrences of the events in the given order is $(m \\times n)$.",

    // 2. Factorials
    factorialDef: "$n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 3 \\times 2 \\times 1$",
    factorialZero: "$0! = 1$",
    factorialRelation: "$n! = n \\times (n-1)!$",

    // 3. Permutations
    permutationDef: "A permutation is an arrangement in a definite order of a number of objects taken some or all at a time.",
    nPrFormula: "$^nP_r = \\dfrac{n!}{(n-r)!}$",
    permutationRepetition: "The number of permutations of $n$ objects, where $r$ objects can be repeated, is $n^r$.",
    permutationAlike: "Permutations of $n$ objects where $p$ are of one kind, $q$ of another kind, etc.: $\\dfrac{n!}{p! \\times q! \\dots}$",
    circularPermutation: "Number of ways to arrange $n$ distinct objects in a circle is $(n-1)!$.",

    // 4. Combinations
    combinationDef: "A combination is a selection of objects where the order of selection does not matter.",
    nCrFormula: "$^nC_r = \\dfrac{n!}{r!(n-r)!}$",
    nCrProperty1: "$^nC_r = ^nC_{n-r}$",
    nCrProperty2: "If $^nC_x = ^nC_y$, then either $x = y$ or $x + y = n$.",
    pascalsRule: "$^nC_r + ^nC_{r-1} = ^{n+1}C_r$",

    // 5. Binomial Theorem
    binomialStatement: "$(a + b)^n = ^nC_0 a^n b^0 + ^nC_1 a^{n-1} b^1 + \\dots + ^nC_n a^0 b^n$",
    generalTerm: "$T_{r+1} = ^nC_r \\cdot a^{n-r} \\cdot b^r$",
    // 6. Relations & Classic Counting
    relationPnC: "$^nP_r = ^nC_r \\times r!$",
    coinOutcome: "Total outcomes for tossing $n$ coins = $2^n$ (Head/Tail)",
    diceOutcome: "Total outcomes for rolling $n$ dice = $6^n$ (1 to 6)",
    cardOutcome: "Total outcomes for drawing cards from deck = 52 options (4 Suits, 13 Ranks)",
};

export const problems = [
    {
        id: "p1",
        question: "Evaluate $7! \\div 5!$",
        solution: "$\\dfrac{7!}{5!} = \\dfrac{7 \\times 6 \\times 5!}{5!} = 7 \\times 6 = 42$",
        difficulty: "easy" as const
    },
    {
        id: "p2",
        question: "Find $n$ if $^nP_2 = 20$",
        solution: "$\\dfrac{n!}{(n-2)!} = 20 \\Rightarrow n(n-1) = 20$. Since $5 \\times 4 = 20$, $n=5$.",
        difficulty: "medium" as const
    },
    {
        id: "p3",
        question: "Evaluate $^5C_2$",
        solution: "$^5C_2 = \\dfrac{5!}{2!(5-2)!} = \\dfrac{5 \\times 4}{2 \\times 1} = 10$",
        difficulty: "easy" as const
    },
    {
        id: "p4",
        question: "In how many ways can 5 people sit in a row?",
        solution: "$^5P_5 = 5! = 120$ ways.",
        difficulty: "easy" as const
    },
    {
        id: "p5",
        question: "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 (no repetition)?",
        solution: "$^5P_3 = 5 \\times 4 \\times 3 = 60$ numbers.",
        difficulty: "medium" as const
    },
    {
        id: "p6",
        question: "Find the number of ways to arrange the letters of 'APPLE'.",
        solution: "Total letters $n=5$. 'P' repeats 2 times. Ways = $\\dfrac{5!}{2!} = \\dfrac{120}{2} = 60$.",
        difficulty: "medium" as const
    },
    {
        id: "p7",
        question: "If $^nC_8 = ^nC_2$, find $^nC_2$.",
        solution: "Since $^nC_x = ^nC_y$, $x+y=n \\Rightarrow 8+2=n \\Rightarrow n=10$. Then $^10C_2 = \\dfrac{10 \\times 9}{2} = 45$.",
        difficulty: "medium" as const
    },
    {
        id: "p8",
        question: "In how many ways can 3 men be selected from 10 men?",
        solution: "$^{10}C_3 = \\dfrac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120$.",
        difficulty: "easy" as const
    },
    {
        id: "p9",
        question: "Find the 4th term in the expansion of $(x + 2y)^5$.",
        solution: "$T_{3+1} = ^5C_3 (x)^{5-3} (2y)^3 = 10 \\cdot x^2 \\cdot 8y^3 = 80x^2y^3$.",
        difficulty: "hard" as const
    },
    {
        id: "p10",
        question: "How many diagonals does a pentagon have?",
        solution: "Diagonals = $^5C_2 - 5 = 10 - 5 = 5$.",
        difficulty: "medium" as const
    },
    {
        id: "rel1",
        question: "If $^nP_r = 720$ and $^nC_r = 120$, find $r$.",
        solution: "We know $^nP_r = ^nC_r \\times r!$. So $720 = 120 \\times r! \\Rightarrow r! = 6$. Since $3! = 6$, $r=3$.",
        difficulty: "medium" as const
    }
];

export const classicProblems = [
    {
        id: "cp1",
        question: "A coin is tossed 5 times. Determine the total number of possible outcomes.",
        solution: "Outcomes for 1 coin = 2 (H, T). For 5 coins: $2^5 = 32$ outcomes.",
        difficulty: "easy" as const
    },
    {
        id: "cp2",
        question: "Two dice are rolled. How many outcomes are there?",
        solution: "One die has 6 faces. Two dice = $6 \\times 6 = 36$ outcomes.",
        difficulty: "easy" as const
    },
    {
        id: "cp3",
        question: "From a pack of 52 cards, in how many ways can 4 cards be selected?",
        solution: "Selection means Combination. $n=52, r=4$. $Ways = ^{52}C_4 = \\dfrac{52!}{4!48!} = 270,725$.",
        difficulty: "medium" as const
    },
    {
        id: "cp4",
        question: "In how many ways can 4 cards be chosen such that there is one card from each suit?",
        solution: "Select 1 Diamond ($^{13}C_1$) AND 1 Heart ($^{13}C_1$) AND 1 Spade ($^{13}C_1$) AND 1 Club ($^{13}C_1$). Total = $13 \\times 13 \\times 13 \\times 13 = 13^4 = 28,561$.",
        difficulty: "hard" as const
    },
    {
        id: "cp5",
        question: "A die is rolled 3 times. How many outcomes have at least one 6?",
        solution: "Total outcomes = $6^3 = 216$. Outcomes with NO 6 (only 1-5 allowed) = $5^3 = 125$. Outcomes with at least one 6 = Total - None = $216 - 125 = 91$.",
        difficulty: "medium" as const
    },
    {
        id: "cp6",
        question: "How many 5-card hands consist of exactly 3 Kings and 2 Queens?",
        solution: "Select 3 Kings from 4: $^4C_3 = 4$. Select 2 Queens from 4: $^4C_2 = 6$. Total = $4 \\times 6 = 24$ hands.",
        difficulty: "hard" as const
    }
];

export const examProblems = [
    {
        id: "ep1",
        question: "How many words can be formed from the letters of the word 'DAUGHTER' so that the vowels always come together?",
        solution: "Vowels (A, U, E) = 3. Consonants (D, G, H, T, R) = 5. Treat (AUE) as 1 unit. Total units = $5 + 1 = 6$. Arrange 6 units: $6!$. Arrange 3 vowels internally: $3!$. Total = $6! \\times 3! = 720 \\times 6 = 4320$.",
        difficulty: "hard" as const
    },
    {
        id: "ep2",
        question: "A committee of 5 is to be formed from 6 men and 4 women. In how many ways can this be done if at least 2 women are included?",
        solution: "Cases: (2W, 3M) or (3W, 2M) or (4W, 1M). \n1. $^4C_2 \\times ^6C_3 = 6 \\times 20 = 120$\n2. $^4C_3 \\times ^6C_2 = 4 \\times 15 = 60$\n3. $^4C_4 \\times ^6C_1 = 1 \\times 6 = 6$\nTotal = $120 + 60 + 6 = 186$.",
        difficulty: "hard" as const
    },
    {
        id: "ep3",
        question: "How many 4-digit numbers greater than 5000 can be formed using the digits 2, 3, 5, 7, 8 without repetition?",
        solution: "The thousands place can only be 5, 7, or 8 (3 choices). The remaining 3 places can be filled by any of the remaining 4 digits: $^4P_3$. Total = $3 \times (4 \times 3 \times 2) = 3 \times 24 = 72$.",
        difficulty: "medium" as const
    },
    {
        id: "ep4",
        question: "In how many ways can 5 distinct books be distributed among 3 students such that each student gets at least one book?",
        solution: "Total ways to distribute 5 books to 3 students = $3^5$. Discount cases where students get 0 books. Using inclusion-exclusion or Stirling numbers ($S(5,3) \\times 3!$), ways = $150$.",
        difficulty: "hard" as const
    },
    {
        id: "ep5",
        question: "Find the middle term in the expansion of $(\\frac{x}{3} + 9y)^{10}$.",
        solution: "$n=10$ (even), so middle term is $(\\frac{n}{2} + 1) = 6$th term ($T_6$).\n$T_6 = T_{5+1} = ^{10}C_5 (\\frac{x}{3})^{5} (9y)^5 = 252 \\cdot \\frac{x^5}{243} \\cdot 59049 y^5 = 61236 x^5 y^5$.",
        difficulty: "hard" as const
    },
    {
        id: "ep6",
        question: "A bag contains 5 black and 6 red balls. Determine the number of ways in which 2 black and 3 red balls can be selected.",
        solution: "Select 2 black from 5: $^5C_2$. Select 3 red from 6: $^6C_3$. \nTotal = $^5C_2 \\times ^6C_3 = 10 \\times 20 = 200$.",
        difficulty: "medium" as const
    },
    {
        id: "ep7",
        question: "How many ways can the letters of 'MISSISSIPPI' be arranged?",
        solution: "Total = 11. M=1, I=4, S=4, P=2. \nWays = $\\dfrac{11!}{4! \\times 4! \\times 2!} = \\dfrac{39916800}{24 \\times 24 \\times 2} = 34650$.",
        difficulty: "medium" as const
    },
    {
        id: "ep8",
        question: "In how many ways can 6 people sit around a round table?",
        solution: "Circular permutation formula: $(n-1)! = (6-1)! = 5! = 120$.",
        difficulty: "easy" as const
    }
];
