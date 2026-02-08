export const financeData = {
    definitions: [
        { term: "Compound Interest (CI)", def: "The interest calculated on the principal and the accumulated interest of previous periods. $CI = A - P$." },
        { term: "Annuity", def: "A sequence of equal payments made at regular intervals of time." },
        { term: "Annuity Regular (Ordinary)", def: "An annuity where payments are made at the **end** of each period." },
        { term: "Annuity Due", def: "An annuity where payments are made at the **beginning** of each period." },
        { term: "Present Value (P)", def: "The current worth of a future sum of money or stream of cash flows given a specified rate of return." },
        { term: "Amount (A)", def: "The value of a current asset at a specified date in the future based on an assumed rate of growth (Future Value)." },
        { term: "Sinking Fund", def: "A fund formed by periodically setting aside money for the gradual repayment of a debt or replacement of an asset." },
        { term: "Perpetuity", def: "An annuity that continues forever." },
        { term: "Deferred Annuity", def: "An annuity in which the first payment is made after the lapse of some specified number of periods (m periods)." }
    ],

    formulas: {
        compoundInterest: {
            amount: "$A = P(1 + \\frac{r}{100})^n$",
            interest: "$CI = P[(1 + \\frac{r}{100})^n - 1]$",
            compoundedK: "$A = P(1 + \\frac{r}{k \\times 100})^{nk}$",
            presentValue: "$P = \\frac{A}{(1 + i)^n} \\text{ where } i = r/100$"
        },
        annuityRegular: {
            amount: "$A = R \\left[ \\frac{(1 + i)^n - 1}{i} \\right]$",
            presentValue: "$P = R \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right]$",
            notationAmount: "$S_{n|i} = \\frac{(1 + i)^n - 1}{i} \\text{ when } R=1$",
            notationPV: "$a_{n|i} = \\frac{1 - (1 + i)^{-n}}{i} \\text{ when } R=1$"
        },
        annuityDue: {
            amount: "$A(\\text{due}) = R \\left[ \\frac{(1 + i)^n - 1}{i} \\right] (1 + i)$",
            presentValue: "$P(\\text{due}) = R \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] (1 + i)$"
        },
        deferredAnnuity: {
            amount: "$A = R \\left[ \\frac{(1 + i)^n - 1}{i} \\right]$ (Value at $T_{m+n}$)",
            presentValue: "$P = R \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right] (1 + i)^{-m}$",
            note: "First payment starts at the end of period $(m+1)$"
        },
        perpetuity: {
            pv: "$P = \\frac{R}{i}$",
            pvGrowing: "$P = \\frac{R}{i - g}$"
        }
    },

    examples: [
        {
            q: "Find the compound interest on ₹10,000 for 2 years at 10% per annum compounded annually.",
            sol: "1. $P = 10000, r = 10, n = 2$\n2. $A = 10000(1 + 0.1)^2 = 10000(1.21) = 12100$\n3. $CI = 12100 - 10000 = ₹2,100$"
        },
        {
            q: "Find the amount of an ordinary annuity of ₹500 payable at the end of each year for 3 years at 8% per annum.",
            sol: "1. $R = 500, i = 0.08, n = 3$\n2. $S_n = 500 \\left[ \\frac{(1.08)^3 - 1}{0.08} \\right] = 500 \\left[ \\frac{1.259712 - 1}{0.08} \\right]$\n3. $S_n = 500 \\times 3.2464 = ₹1,623.20$"
        }
    ]
};

export const problems = [
    {
        id: "fin_1",
        question: "Calculate the effective rate of interest corresponding to a nominal rate of 6% per annum compounded semi-annually.",
        solution: "1. $r = 6, k = 2$. Rate per period $i = 6/2 = 3% = 0.03$\n2. $r_{eff} = (1 + i)^k - 1 = (1.03)^2 - 1 = 1.0609 - 1 = 0.0609$ or 6.09%",
        difficulty: "easy" as const
    },
    {
        id: "fin_2",
        question: "A man deposits ₹2000 at the end of every 3 months in a bank which pays 8% interest p.a. compounded quarterly. How much will be to his credit at the end of 5 years?",
        solution: "1. $R = 2000, i = 8/4 = 2% = 0.02, n = 5 \\times 4 = 20$\n2. $S_{20} = 2000 [ (1.02)^{20} - 1 ] / 0.02$\n3. Using $(1.02)^{20} \\approx 1.4859$\n4. $S_{20} = 2000 [ 0.4859 ] / 0.02 = 100000 \\times 0.4859 = ₹48,590$",
        difficulty: "medium" as const
    },
    {
        id: "fin_3",
        question: "What is the present value of an annuity of ₹1200 payable at the end of each 6 months for 4 years when interest is 10% per annum compounded semi-annually?",
        solution: "1. $R = 1200, i = 10/2 = 5% = 0.05, n = 4 \\times 2 = 8$\n2. $P = 1200 [ 1 - (1.05)^{-8} ] / 0.05$\n3. Using $(1.05)^{-8} \\approx 0.6768$\n4. $P = 1200 [ 1 - 0.6768 ] / 0.05 = 1200 [ 0.3232 ] / 0.05 = ₹7,756.80$",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "fin_exam_1",
        question: "A machine costs ₹5,00,000. It is estimated to have a useful life of 10 years at the end of which its scrap value is ₹50,000. How much should be set aside at the end of each year in a sinking fund earning 9% p.a. to replace the machine?",
        solution: "1. Amount needed $S = 5,00,000 - 50,000 = 4,50,000$\n2. $n = 10, i = 0.09$\n3. $S_n = R [ (1+i)^n - 1 ] / i \\implies 450000 = R [ (1.09)^{10} - 1 ] / 0.09$\n4. $(1.09)^{10} \\approx 2.367$\n5. $R = 450000 \\times 0.09 / 1.367 \\approx ₹29,627$",
        difficulty: "hard" as const,
        examTag: "CBSE PYQ"
    },
    {
        id: "fin_exam_2",
        question: "Distinguish between Annuity Regular and Annuity Due with an example.",
        solution: "1. **Annuity Regular**: Payments at the end (e.g., Monthly Salary, Rent at month end).\n2. **Annuity Due**: Payments at the beginning (e.g., Insurance Premium, SIP at the start of the month).",
        difficulty: "easy" as const,
        examTag: "Conceptual"
    },
    {
        id: "fin_exam_3",
        question: "Find the present value of a deferred annuity of ₹20,000 p.a. for 5 years, the first payment being made at the end of 4 years, if money is worth 10% p.a. compounded annually.",
        solution: "1. Here $R = 20000, n = 5, i = 0.10$. The first payment is at end of 4 years, so $m = 3$ (gap periods).\n2. $P = R [ 1 - (1+i)^{-n} ] / i \\times (1+i)^{-m}$\n3. $P = 20000 [ 1 - (1.1)^{-5} ] / 0.1 \\times (1.1)^{-3}$\n4. $P = 20000 [ 3.7908 ] \\times 0.7513 \\approx ₹56,960$",
        difficulty: "hard" as const,
        examTag: "Loan Analysis"
    }
];
