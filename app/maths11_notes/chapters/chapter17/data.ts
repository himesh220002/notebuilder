export const reasoningData = {
    codingDecoding: {
        intro: "Coding is a method of transmitting messages between sender and receiver which others cannot understand. Decoding is the process of Converting the code back to original form.",
        types: [
            { name: "Letter Coding", desc: "Letters of a word are replaced by other letters according to a specific rule (e.g. +1, -2, reverse)." },
            { name: "Number Coding", desc: "Words are coded as digits, or digits are coded as letters/symbols." },
            { name: "Symbol Mapping", desc: "Mathematical operators like +, -, x, / are swapped with other symbols/letters." }
        ],
        symbols: [
            { original: "+", meaning: "times (x)" },
            { original: "-", meaning: "divided by (/)" },
            { original: "x", meaning: "plus (+)" },
            { original: "/", meaning: "minus (-)" }
        ]
    },
    familyRelations: {
        symbols: [
            { sym: "☐ (Square)", for: "Male members" },
            { sym: "○ (Circle)", for: "Female members" },
            { sym: "Plus (+)", for: "Husband-Wife relationship" },
            { sym: "Double Arrow (⇔)", for: "Brother-Sister relation" },
            { sym: "Vertical Line (|)", for: "Parent-Child (Generation gap)" },
            { sym: "Horizontal Line (-)", for: "Sibling connection" }
        ],
        notations: [
            "Paternal: Relations from Father's side (e.g., Uncle, Grandfather).",
            "Maternal: Relations from Mother's side (e.g., Maternal Uncle, Nani)."
        ]
    },
    vennLogics: {
        cases: [
            { type: "All", logic: "Set A is a subset of Set B.", example: "All Apples are Fruits." },
            { type: "Some", logic: "Sets A and B intersect.", example: "Some Doctors are Authors." },
            { type: "No", logic: "Sets A and B are disjoint.", example: "No Cat is a Dog." }
        ]
    }
};

export const problems = [
    {
        id: "logic_1",
        question: "In a certain code, 'TEACHER' is written as 'VGCEJGT'. How is 'STUDENT' written in that code?",
        solution: "1. Compare TEACHER and VGCEJGT:\nT+2=V, E+2=G, A+2=C, C+2=E, H+2=J, E+2=G, R+2=T\n2. Rule: Each letter is shifted +2.\n3. Apply to STUDENT:\nS+2=U, T+2=V, U+2=W, D+2=F, E+2=G, N+2=P, T+2=V\nResult: UVWFGPV.",
        difficulty: "easy" as const
    },
    {
        id: "logic_2",
        question: "If '+' means 'x', '-' means '/', 'x' means '+' and '/' means '-', then find the value of: 20 + 5 - 2 x 10 / 5.",
        solution: "1. Replace symbols:\n'+' -> 'x' | '-' -> '/' | 'x' -> '+' | '/' -> '-'\n2. New equation: $20 times 5 / 2 + 10 - 5$\n3. BODMAS:\n$20 times 2.5 + 10 - 5 = 50 + 10 - 5 = 55$.",
        difficulty: "medium" as const
    },
    {
        id: "logic_3",
        question: "A is the brother of B. B is the daughter of C. D is the father of C. How is A related to D?",
        solution: "1. Diagram:\nD (☐) is father of C.\nC is parent of B (○).\nB is sister of A (☐).\n2. Generation: D is 2 generations above A.\n3. Relation: A is the grandson of D.",
        difficulty: "medium" as const
    },
    {
        id: "logic_4",
        question: "In the code '123' means 'Cold Weather Ahead', '345' means 'Weather Is Good'. What digit represents 'Weather'?",
        solution: "1. Look for common words: 'Weather' appears in both.\n2. Look for common digits: '3' appears in both.\n3. Result: Weather = 3.",
        difficulty: "easy" as const
    },
    {
        id: "logic_5",
        question: "Statements: All Poets are Thinkers. All Thinkers are Artists. Conclusion: Are all Poets Artists?",
        solution: "1. Venn Diagram: Draw a small circle (Poets) inside a medium circle (Thinkers).\n2. Draw the medium circle inside a large circle (Artists).\n3. Since Poets are inside Thinkers and Thinkers are inside Artists, Poets are automatically inside Artists.\nResult: Yes, All Poets are Artists.",
        difficulty: "hard" as const
    },
    {
        id: "logic_6",
        question: "Introducing a lady, a man said, 'The son of her only brother is the brother of my wife.' How is the lady related to the man?",
        solution: "1. Lady's brother's son = Brother of man's wife.\n2. Man's wife's brother = Lady's brother's son.\n3. This means the man's father-in-law is the Lady's brother.\n4. Relation: Lady is the sister of man's father-in-law.",
        difficulty: "hard" as const
    },
    {
        id: "logic_7",
        question: "If 'GOD' is coded as 7-15-4, how is 'ACT' coded?",
        solution: "1. Check A=1, B=2 sequence:\nG=7th letter, O=15th, D=4th.\n2. Apply to ACT: A=1, C=3, T=20.\nResult: 1-3-20.",
        difficulty: "easy" as const
    },
    {
        id: "logic_8",
        question: "Choose the Venn diagram that best represents: 'Mammal, Cow, Crow'.",
        solution: "1. Relation: Cow is a Mammal. Crow is a Bird (not a mammal).\n2. Diagram: A circle (Cow) inside a circle (Mammal), and a separate circle (Crow) outside both.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "logic_exam_1",
        question: "In a code, 'FIRE' is written as '#*%@' and 'FREE' is written as '#&@@'. How is 'RIFF' written?",
        solution: "1. Map letters to symbols:\nF=#, I=*, R=%, E=@, R=% , E=@, E=@\nNote: 'FREE' uses '&' for R? Let's re-map.\nF=#, I=*, R=%, E=@ from FIRE.\nF=#, R=&, E=@, E=@ from FREE.\nWait, R is mapped to % in FIRE and & in FREE? This usually means position-based or unique mapping.\nAssuming RIFF from FIRE mapping: % * # #.",
        difficulty: "medium" as const,
        examTag: "Reasoning Unit"
    },
    {
        id: "logic_exam_2",
        question: "Relation Problem: Pointing to a photograph, Shikha said 'He is the only son of the mother of my sister's brother.' How is the man related to Shikha?",
        solution: "1. 'Shikha's sister's brother' = Shikha's brother.\n2. 'Mother of Shikha's brother' = Shikha's mother.\n3. 'Only son of Shikha's mother' = Shikha's brother.\nResult: Brother.",
        difficulty: "easy" as const,
        examTag: "Blood Relations"
    },
    {
        id: "logic_exam_3",
        question: "Coding Logic: If BLUE is coded as 42, find code for READ.",
        solution: "1. Position sum: B(2)+L(12)+U(21)+E(5) = 40 (Not 42). Try +2?\n2. Position sum + Number of letters: $40 + 4 = 44$? No.\n3. Try reverse positions: B(25)+L(15)+U(6)+E(22) = 68. No.\n4. Try fixed logic: Maybe sum of positions + 2? $40 + 2 = 42$.\n5. Applying to READ: R(18)+E(5)+A(1)+D(4) = 28.\n6. Ans: $28 + 2 = 30$.",
        difficulty: "hard" as const,
        examTag: "Alphanumeric Coding"
    },
    {
        id: "logic_exam_4",
        question: "Venn Type: Out of 100 students, 60 like Math, 40 like Science and 20 like both. How many like NEITHER?",
        solution: "1. Total like Math or Science = $n(M) + n(S) - n(M cap S) = 60 + 40 - 20 = 80$.\n2. Neither = Total - Either = $100 - 80 = 20$.",
        difficulty: "medium" as const,
        examTag: "Venn Diagrams"
    },
    {
        id: "logic_exam_5",
        question: "Family Tree: A and B are sisters. R and S are brothers. A's daughter is R's sister. What is B's relation to S?",
        solution: "1. A & B are Sisters.\n2. A's daughter is sister of R and S.\n3. This means R and S are A's sons.\n4. B is the sister of S's mother (A).\nResult: B is S's Maternal Aunt (Masi).",
        difficulty: "medium" as const,
        examTag: "Mixed Relations"
    }
];
