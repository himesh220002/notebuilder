export const statisticsData = {
    definitions: [
        { term: "Arithmetic Mean", def: "The sum of all observations divided by the total number of observations. $\\bar{x} = \\frac{\\sum x_i}{n}$." },
        { term: "Median", def: "The middle value of a data set when arranged in ascending or descending order. For grouped data, $M = l + (\\frac{n/2 - cf}{f}) \\times h$." },
        { term: "Mode", def: "The value that appears most frequently in a data set." },
        { term: "Range", def: "The difference between the maximum and minimum values in a data set. $R = X_{max} - X_{min}$." },
        { term: "Standard Deviation (\\sigma)", def: "The square root of the variance, representing the average spread of data from the mean." },
        { term: "Skewness", def: "A measure of the asymmetry of the probability distribution. It tells us if data is 'piled up' on one side." },
        { term: "Kurtosis", def: "A measure of the 'flatness' or 'peakedness' of the distribution compared to a normal curve." },
        { term: "Moments", def: "Statistical measures used to describe the characteristics of a distribution (Mean, Variance, Skewness, Kurtosis)." }
    ],

    formulas: {
        mean: {
            ungrouped: "$\\bar{x} = \\frac{\\sum x_i}{n}$",
            grouped: "$\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}$",
            shortcut: "$\\bar{x} = A + \\frac{\\sum f_i d_i}{\\sum f_i} \\text{ where } d_i = x_i - A$"
        },
        dispersion: {
            meanDeviationMean: "$MD(\\bar{x}) = \\frac{\\sum |x_i - \\bar{x}|}{n}$",
            meanDeviationMedian: "$MD(M) = \\frac{\\sum |x_i - M|}{n}$",
            variance: "$\\sigma^2 = \\frac{\\sum (x_i - \\bar{x})^2}{n}$",
            stdDev: "$\\sigma = \\sqrt{\\frac{\\sum x_i^2}{n} - (\\bar{x})^2}$"
        },
        moments: {
            raw: "$\\mu'_r = \\frac{\\sum (x_i - A)^r}{n} \\text{ (about point A)}$",
            central: "$\\mu_r = \\frac{\\sum (x_i - \\bar{x})^r}{n} \\text{ (about mean)}$",
            m1: "$\\mu_1 = 0$",
            m2: "$\\mu_2 = \\sigma^2 \\text{ (Variance)}$",
            m3: "$\\text{Used for Skewness}$",
            m4: "$\\text{Used for Kurtosis}$"
        },
        skewness: {
            karlPearson: "$S_k = \\frac{\\text{Mean} - \\text{Mode}}{\\sigma} \\approx \\frac{3(\\text{Mean} - \\text{Median})}{\\sigma}$",
            bowley: "$S_Q = \\frac{Q_3 + Q_1 - 2M}{Q_3 - Q_1} \\text{ (using Quartiles)}$",
            kelly: "$S_K = \\frac{D_9 + D_1 - 2M}{D_9 - D_1} \\text{ (using Deciles)}$"
        },
        kurtosis: {
            beta2: "$\\beta_2 = \\frac{\\mu_4}{\\mu_2^2}$",
            gamma2: "$\\gamma_2 = \\beta_2 - 3$",
            types: [
                { name: "Leptokurtic", cond: "$\\beta_2 > 3$ (Highly Peaked)", color: "rose" },
                { name: "Mesokurtic", cond: "$\\beta_2 = 3$ (Normal)", color: "indigo" },
                { name: "Platykurtic", cond: "$\\beta_2 < 3$ (Flat Top)", color: "emerald" }
            ]
        },
        frequencyAnalysis: {
            cv: "$\\text{Coefficient of Variation (C.V.)} = \\frac{\\sigma}{\\bar{x}} \\times 100$"
        },
        correlation: {
            covariance: "$Cov(X,Y) = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{n}$",
            karlPearson: "$r = \\frac{Cov(X,Y)}{\\sigma_x \\sigma_y} = \\frac{n\\sum xy - (\\sum x)(\\sum y)}{\\sqrt{[n\\sum x^2 - (\\sum x)^2][n\\sum y^2 - (\\sum y)^2]}}$",
            spearman: "$R = 1 - \\frac{6 \\sum d_i^2}{n(n^2 - 1)} \\text{ where } d_i = \\text{Difference in Ranks}$",
            rRange: "$-1 \\le r \\le 1$"
        }
    },

    examples: {
        skewness: {
            q: "If Mean = 45, Median = 48, and $\\sigma = 15$, find Karl Pearson's Coefficient of Skewness.",
            sol: "$S_k = \\frac{3(45 - 48)}{15} = \\frac{3(-3)}{15} = \\frac{-9}{15} = -0.6$\n(Negative Skewness)"
        },
        correlation: {
            q: "Calculate covariance if $\\sum (x-\\bar{x})(y-\\bar{y}) = 120$ and $n = 10$.",
            sol: "$Cov(X,Y) = 120/10 = 12$"
        }
    }
};

export const problems = [
    {
        id: "stat_1",
        question: "Calculate the Mean Deviation about the mean for the data: 6, 7, 10, 12, 13, 4, 8, 12.",
        solution: "1. Mean $\\bar{x} = \\frac{6+7+10+12+13+4+8+12}{8} = 9$\n2. $|x_i - \\bar{x}|$: 3, 2, 1, 3, 4, 5, 1, 3\n3. Sum = 22\n4. $MD(\\bar{x}) = 22/8 = 2.75$",
        difficulty: "easy" as const
    },
    {
        id: "stat_adv_1",
        question: "The first four raw moments of a distribution about the point 4 are 1, 4, 10, and 45. Find the mean.",
        solution: "1. Given $A = 4$ and $\\mu'_1 = 1$\n2. Mean $\\bar{x} = A + \\mu'_1 = 4 + 1 = 5$",
        difficulty: "medium" as const
    },
    {
        id: "stat_adv_2",
        question: "In a frequency distribution, the third central moment $\\mu_3 = -2.5$ and variance $\\sigma^2 = 9$. Find the coefficient of skewness based on moments.",
        solution: "1. Coefficient of Skewness $\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}$\n2. $\\sigma = \\sqrt{9} = 3$\n3. $\\gamma_1 = \\frac{-2.5}{3^3} = \\frac{-2.5}{27} \\approx -0.09$",
        difficulty: "medium" as const
    },
    {
        id: "stat_adv_3",
        question: "Calculate Spearman's Rank Correlation for the following ranks: (1,3), (2,1), (3,2).",
        solution: "1. $d_i$: (1-3)=-2, (2-1)=1, (3-2)=1\n2. $d_i^2$: 4, 1, 1. $\\sum d_i^2 = 6$\n3. $R = 1 - \\frac{6(6)}{3(3^2-1)} = 1 - \\frac{36}{3(8)} = 1 - \\frac{36}{24} = 1 - 1.5 = -0.5$",
        difficulty: "hard" as const
    },
    {
        id: "stat_adv_4",
        question: "If $\\mu_4 = 100$ and $\\mu_2 = 5$, determine the type of kurtosis.",
        solution: "1. $\\beta_2 = \\mu_4 / \\mu_2^2 = 100 / 5^2 = 100 / 25 = 4$\n2. Since $\\beta_2 > 3$, the distribution is **Leptokurtic**.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "stat_exam_1",
        question: "Find the mean, variance and standard deviation for: 70, 72, 74, 76, 78, 80, 82.",
        solution: "1. $A = 76$. $d_i$: -6, -4, -2, 0, 2, 4, 6\n2. $\\bar{x} = 76 + 0 = 76$\n3. $\\sigma^2 = \\frac{36+16+4+0+4+16+36}{7} = 112/7 = 16$\n4. $\\sigma = 4$",
        difficulty: "medium" as const,
        examTag: "CBSE PYQ"
    },
    {
        id: "stat_exam_corr",
        question: "Prove that Karl Pearson's coefficient of correlation lies between -1 and +1.",
        solution: "1. Based on Cauchy-Schwarz inequality: $[\sum (x_i-\\bar{x})(y_i-\\bar{y})]^2 \le \sum (x_i-\\bar{x})^2 \sum (y_i-\\bar{y})^2$\n2. Dividing both sides by denom of $r^2$ gives $r^2 \le 1$\n3. Thus, $|r| \le 1$ or $-1 \le r \le 1$.",
        difficulty: "hard" as const,
        examTag: "Conceptual"
    },
    {
        id: "stat_exam_skew",
        question: "If the difference between Mean and Mode is 48 and standard deviation is 20, find the coefficient of skewness.",
        solution: "1. $S_k = (\\text{Mean} - \\text{Mode}) / \\sigma$\n2. $S_k = 48 / 20 = 2.4$\n3. This indicates a high positive skewness.",
        difficulty: "easy" as const,
        examTag: "CBSE 2022"
    }
];
