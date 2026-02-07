export const probabilityData = {
    definitions: [
        { term: "Random Experiment", def: "An experiment whose outcome cannot be predicted with certainty (e.g., Tossing a coin)." },
        { term: "Sample Space (S)", def: "The set of all possible outcomes of a random experiment. Ex: Coin toss $S = \\{H, T\\}$." },
        { term: "Event (E)", def: "Any subset of the sample space S. Ex: Getting a Head $E = \\{H\\}$." },
        { term: "Mutually Exclusive", def: "Events that cannot happen simultaneously. $A \\cap B = \\phi$." },
        { term: "Exhaustive Events", def: "Set of events whose union is the sample space. $E_1 \\cup E_2 \\cup ... = S$." }
    ],

    typesOfEvents: [
        { type: "Impossible Event", desc: "Probability is 0. Ex: Rolling a 7 on a die.", formula: "$P(\\phi) = 0$" },
        { type: "Sure Event", desc: "Probability is 1. Ex: Rolling number < 7 on a die.", formula: "$P(S) = 1$" },
        { type: "Simple Event", desc: "Has only one sample point.", formula: "$E = \\{w_i\\}$" },
        { type: "Compound Event", desc: "Has more than one sample point." }
    ],

    axiomatic: {
        def: "Probability $P(E)$ is a real-valued function satisfying:",
        axioms: [
            "$0 \\le P(E) \\le 1$",
            "$P(S) = 1$",
            "If $A, B$ are mutually exclusive, $P(A \\cup B) = P(A) + P(B)$"
        ]
    },

    formulas: {
        classical: "$P(E) = \\frac{\\text{No. of favourable outcomes}}{\\text{Total no. of outcomes}} = \\frac{n(E)}{n(S)}$",
        oddsInFavour: "$\\text{Odds in favour} = \\frac{P(E)}{P(E')} = \\frac{m}{n-m}$",
        oddsAgainst: "$\\text{Odds against} = \\frac{P(E')}{P(E)} = \\frac{n-m}{m}$",
        additionThm: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
        additionThm3: "$P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(B \\cap C) - P(A \\cap C) + P(A \\cap B \\cap C)$",
        mutuallyExclusiveAdd: "If A, B are disjoint: $P(A \\cup B) = P(A) + P(B)$",
        complement: "$P(A') = 1 - P(A)$",
        diff: "$P(A - B) = P(A) - P(A \\cap B)$",
        conditional: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\text{ provided } P(B) \\neq 0$",
        multiplication: "$P(A \\cap B) = P(A) \\cdot P(B|A) = P(B) \\cdot P(A|B)$",
        independent: "If A, B independent: $P(A \\cap B) = P(A) \\cdot P(B)$",
        totalProb: "$P(A) = \\sum_{i=1}^{n} P(E_i) \\cdot P(A|E_i)$",
        bayes: "$P(E_i|A) = \\frac{P(E_i) \\cdot P(A|E_i)}{\\sum_{j=1}^{n} P(E_j) \\cdot P(A|E_j)}$"
    },

    examples: {
        addition: {
            q: "If $P(A)=0.6, P(B)=0.4, P(A \\cap B)=0.2$, find $P(A \\cup B)$.",
            sol: "$P(A \\cup B) = 0.6 + 0.4 - 0.2 = 0.8$"
        },
        conditional: {
            q: "Given $P(A)=0.8, P(B)=0.5, P(B|A)=0.4$, find $P(A \\cap B)$.",
            sol: "$P(A \\cap B) = P(A) \\cdot P(B|A) = 0.8 \\times 0.4 = 0.32$"
        },
        totalProb: {
            q: "Bag I: 3 Red, 4 Black. Bag II: 5 Red, 6 Black. One bag is selected at random and a ball is drawn. Find prob it is Red.",
            sol: "$P(R) = P(E_1)P(R|E_1) + P(E_2)P(R|E_2)$\n$= \\frac{1}{2} \\times \\frac{3}{7} + \\frac{1}{2} \\times \\frac{5}{11}$\n$= \\frac{3}{14} + \\frac{5}{22} = \\frac{33+35}{154} = \\frac{68}{154} = \\frac{34}{77}$"
        },
        bayes: {
            q: "Bag I: 3 Red, 4 Black. Bag II: 5 Red, 6 Black. One ball drawn from selected bag is Red. Find prob it is from Bag II.",
            sol: "1. Events: $E_1$ (Bag I), $E_2$ (Bag II), $A$ (Red Ball)\n2. Priors: $P(E_1)=P(E_2)=1/2$\n3. Conditionals: $P(A|E_1)=3/7$ (Red from Bag I), $P(A|E_2)=5/11$ (Red from Bag II)\n4. Bayes Formula: $P(E_2|A) = \\frac{P(E_2)P(A|E_2)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)}$\n5. Calc: $\\frac{1/2 \\cdot 5/11}{1/2 \\cdot 3/7 + 1/2 \\cdot 5/11} = \\frac{5/22}{34/77} = \\frac{35}{68}$"
        }
    },
    conditionalProperties: [
        "$P(S|F) = P(F|F) = 1$",
        "$P((A \\cup B)|F) = P(A|F) + P(B|F) - P((A \\cap B)|F)$",
        "$P(E'|F) = 1 - P(E|F)$"
    ]
};

export const problems = [
    {
        id: "prob_basic_1",
        question: "A coin is tossed three times. What is the probability of getting at least two heads?",
        solution: "1. S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, n(S) = 8\n2. E (at least 2 H) = {HHH, HHT, HTH, THH}, n(E) = 4\n3. $P(E) = 4/8 = 1/2$",
        difficulty: "easy" as const
    },
    {
        id: "prob_algebra_1",
        question: "If A and B are two events such that $P(A) = 1/4, P(B) = 1/2$ and $P(A \\cap B) = 1/8$, find $P(\text{not A and not B})$.",
        solution: "1. $P(A' \\cap B') = P((A \\cup B)')$\n2. $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 1/4 + 1/2 - 1/8 = (2+4-1)/8 = 5/8$\n3. $P(A' \\cap B') = 1 - 5/8 = 3/8$",
        difficulty: "medium" as const
    },
    {
        id: "prob_cond_1",
        question: "A die is thrown twice and the sum of numbers appearing is observed to be 6. What is the conditional probability that the number 4 has appeared at least once?",
        solution: "1. E (sum 6) = {(1,5), (2,4), (3,3), (4,2), (5,1)}. n(E)=5.\n2. F (4 at least once) = {(4,1), (4,2), (4,3), (4,4), (4,5), (4,6), (1,4), (2,4), (3,4), (5,4), (6,4)}.\n3. $E \\cap F = \\{(2,4), (4,2)\\}$. $n(E \\cap F) = 2$.\n4. $P(F|E) = \\frac{P(E \\cap F)}{P(E)} = \\frac{2/36}{5/36} = 2/5$",
        difficulty: "medium" as const
    },
    {
        id: "prob_multi_1",
        question: "Two cards are drawn at random and without replacement from a pack of 52 playing cards. Find the probability that both the cards are black.",
        solution: "1. $P(B_1) = 26/52 = 1/2$\n2. $P(B_2|B_1) = 25/51$ (since one black card is gone)\n3. $P(B_1 \\cap B_2) = P(B_1)P(B_2|B_1) = \\frac{1}{2} \\times \\frac{25}{51} = \\frac{25}{102}$",
        difficulty: "easy" as const
    },
    {
        id: "prob_total_1",
        question: "In a class, 40% students study Math, 25% study Bio and 15% study both. One student is selected at random. (i) If he studies Math, what is prob he studies Bio? (ii) If he studies Bio, prob he studies Math?",
        solution: "1. $P(M)=0.4, P(B)=0.25, P(M \\cap B)=0.15$\n2. (i) $P(B|M) = \\frac{P(B \\cap M)}{P(M)} = \\frac{0.15}{0.40} = \\frac{15}{40} = 3/8$\n3. (ii) $P(M|B) = \\frac{P(M \\cap B)}{P(B)} = \\frac{0.15}{0.25} = \\frac{15}{25} = 3/5$",
        difficulty: "medium" as const
    },
    {
        id: "prob_indep_1",
        question: "A die is tossed thrice. Find the probability of getting an odd number at least once.",
        solution: "1. P(Odd) in one toss = 3/6 = 1/2. P(Even) = 1/2.\n2. P(At least one Odd) = 1 - P(None Odd) = 1 - P(All Even)\n3. Since tosses independent: P(All Even) = $P(E)P(E)P(E) = (1/2)^3 = 1/8$\n4. Ans: $1 - 1/8 = 7/8$",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "prob_exam_1",
        question: "Three cards are drawn successively, without replacement from a pack of 52 well shuffled cards. What is the probability that first two cards are kings and the third card drawn is an ace?",
        solution: "1. Let K, K, A be events.\n2. P(K1) = 4/52\n3. P(K2|K1) = 3/51\n4. P(A|K1K2) = 4/50\n5. Total Prob = $\\frac{4}{52} \\times \\frac{3}{51} \\times \\frac{4}{50} = \\frac{1}{13} \\times \\frac{1}{17} \\times \\frac{2}{25} = \\frac{2}{5525}$",
        difficulty: "medium" as const,
        examTag: "CBSE Sample"
    },
    {
        id: "prob_exam_2",
        question: "In a factory which manufactures bolts, machines A, B and C manufacture respectively 25%, 35% and 40% of the bolts. Of their outputs, 5, 4 and 2 percent are respectively defective type. A bolt is drawn at random from the product and is found to be defective. What is the probability that it is manufactured by the machine B?",
        solution: "1. Let $E_1, E_2, E_3$ be events of Machine A, B, C. $P(E_1)=0.25, P(E_2)=0.35, P(E_3)=0.40$.\n2. Let D be defective. $P(D|E_1)=0.05, P(D|E_2)=0.04, P(D|E_3)=0.02$.\n3. Bayes: $P(E_2|D) = \\frac{P(E_2)P(D|E_2)}{\\sum P(E_i)P(D|E_i)}$\n4. Numerator: $0.35 \\times 0.04 = 0.0140$\n5. Denom: $0.25(0.05) + 0.35(0.04) + 0.40(0.02) = 0.0125 + 0.0140 + 0.0080 = 0.0345$\n6. Ans: $\\frac{0.0140}{0.0345} = \\frac{140}{345} = 28/69$",
        difficulty: "hard" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "prob_exam_3",
        question: "A and B toss a coin alternately till one of them tosses a head and wins the game. If A starts the game, find their respective probabilities of winning.",
        solution: "1. P(H) = 1/2, P(T) = 1/2.\n2. A wins in 1st (H), 3rd (TTH), 5th (TTTTH)... toss.\n3. P(A wins) = $1/2 + (1/2)^3 + (1/2)^5 + ...$\n4. This is a GP with $a=1/2, r=1/4$.\n5. Sum = $\\frac{a}{1-r} = \\frac{1/2}{1-1/4} = \\frac{1/2}{3/4} = 2/3$.\n6. P(B wins) = $1 - P(A) = 1 - 2/3 = 1/3$.",
        difficulty: "medium" as const,
        examTag: "CBSE Model"
    },
    {
        id: "prob_exam_4",
        question: "Probability of solving specific problem independently by A and B are 1/2 and 1/3 respectively. If both try to solve the problem independently, find the probability that (i) the problem is solved (ii) exactly one of them solves the problem.",
        solution: "1. $P(A)=1/2, P(B)=1/3$. $P(A')=1/2, P(B')=2/3$.\n2. (i) Prob problem solved = $P(A \\cup B) = 1 - P(A' \\cap B') = 1 - P(A')P(B') = 1 - (1/2)(2/3) = 1 - 1/3 = 2/3$.\n3. (ii) Exactly one = $P(A)P(B') + P(A')P(B) = (1/2)(2/3) + (1/2)(1/3) = 2/6 + 1/6 = 3/6 = 1/2$.",
        difficulty: "medium" as const,
        examTag: "Important"
    },
    {
        id: "prob_exam_5",
        question: "Of the students in a college, it is known that 60% reside in hostel and 40% are day scholars (not residing in hostel). Previous year results report that 30% of all students who reside in hostel attain A grade and 20% of day scholars attain A grade. At the end of the year, one student is chosen at random from the college and he has an A grade, what is the probability that the student is a hostlier?",
        solution: "1. $E_1$: Hostlier, $E_2$: Day Scholar. $P(E_1)=0.6, P(E_2)=0.4$.\n2. A: Grade A. $P(A|E_1)=0.3, P(A|E_2)=0.2$.\n3. Bayes: $P(E_1|A) = \\frac{P(E_1)P(A|E_1)}{P(E_1)P(A|E_1) + P(E_2)P(A|E_2)}$\n4. Num = $0.6 \\times 0.3 = 0.18$\n5. Denom = $0.18 + (0.4 \\times 0.2) = 0.18 + 0.08 = 0.26$\n6. Ans: $0.18/0.26 = 18/26 = 9/13$.",
        difficulty: "medium" as const,
        examTag: "NCERT/CBSE"
    }
];
