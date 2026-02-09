export const taxationData = {
    gst: {
        definition: "GST is an indirect tax used in India on the supply of goods and services. It is a destination-based tax levied on every value addition.",
        types: [
            { name: "CGST", full: "Central GST", desc: "Collected by Central Govt on intra-state sales." },
            { name: "SGST", full: "State GST", desc: "Collected by State Govt on intra-state sales." },
            { name: "IGST", full: "Integrated GST", desc: "Collected by Central Govt on inter-state sales." }
        ],
        rates: ["0%", "5%", "12%", "18%", "28%"],
        itcFormula: "$\\text{GST Payable} = \\text{Output GST} - \\text{Input Tax Credit (ITC)}$"
    },
    incomeTax: {
        terms: [
            { term: "Financial Year (FY)", definition: "The year in which income is earned (e.g., April 1 to March 31)." },
            { term: "Assessment Year (AY)", definition: "The year in which income of the previous FY is evaluated and taxed." },
            { term: "Gross Total Income", definition: "Sum of all incomes from salary, house property, business, capital gains, etc." },
            { term: "Taxable Income", definition: "Gross Total Income minus specified deductions." }
        ],
        deductions: [
            { section: "80C", limit: "₹1,50,000", items: "PPF, LIC, ELSS, NSC, Tuition Fees, Principal on Home Loan." },
            { section: "Section 24", limit: "₹2,00,000", items: "Interest on Home Loan (Self-occupied)." },
            { section: "80D", limit: "₹25,000 / ₹50,000", items: "Health Insurance Premiums." },
            { section: "80E", limit: "No limit", items: "Interest on Education Loan (up to 8 years)." },
            { section: "80G", limit: "Varies", items: "Donations to specified charitable institutions." },
            { section: "80TTA", limit: "₹10,000", items: "Interest on Savings Bank Account (for non-seniors)." }
        ],
        slabs: [
            { range: "Up to ₹2,50,000", rate: "Nil" },
            { range: "₹2,50,001 - ₹5,00,000", rate: "5%" },
            { range: "₹5,00,001 - ₹10,00,000", rate: "20%" },
            { range: "Above ₹10,00,000", rate: "30%" }
        ]
    }
};

export const problems = [
    {
        id: "tax_1",
        question: "A manufacturer marks an item at ₹5000 and sells it to a retailer at a 20% discount. The retailer sells it to a consumer at the marked price. If the GST rate is 18%, find the GST paid by the retailer to the government.",
        solution: "1. CP for Retailer = $5000 - 20\\% \\text{ of } 5000 = ₹4000$\n2. SP for Retailer = Mark Price = ₹5000\n3. Input Tax for Retailer = $18\\% \\text{ of } 4000 = ₹720$\n4. Output Tax for Retailer = $18\\% \\text{ of } 5000 = ₹900$\n5. GST Payable by Retailer = Output Tax - Input Tax = $900 - 720 = ₹180$",
        difficulty: "medium" as const
    },
    {
        id: "tax_2",
        question: "A company in Mumbai (Maharashtra) sells goods worth ₹20,000 to a dealer in Pune (Maharashtra). If GST rate is 12%, find CGST and SGST.",
        solution: "1. This is an Intra-state transaction.\n2. Total GST = $12\\% \\text{ of } 20,000 = ₹2400$\n3. CGST = Half of GST = $₹1200$\n4. SGST = Half of GST = $₹1200$",
        difficulty: "easy" as const
    },
    {
        id: "tax_3",
        question: "Mr. Sharma's gross annual income is ₹15,00,000. He invests ₹1,50,000 in PPF (80C) and pays ₹30,000 for health insurance (80D). He also pays ₹1,20,000 as home loan interest (Sec 24). Calculate his taxable income.",
        solution: "1. Gross Income = ₹15,00,000\n2. Standard Deduction = ₹50,000\n3. 80C Deduction = ₹1,50,000\n4. 80D Deduction = ₹25,000 (Note: limit is ₹25k if not senior)\n5. Sec 24 Deduction = ₹1,20,000\n6. Total Deductions = $50k + 150k + 25k + 120k = ₹3,45,000$\n7. Taxable Income = $15,00,000 - 3,45,000 = ₹11,55,000$",
        difficulty: "medium" as const
    },
    {
        id: "tax_4",
        question: "Find the total tax liability including 4% Health and Education Cess for a taxable income of ₹6,00,000.",
        solution: "1. 0 - 2.5L: Nil\n2. 2.5L - 5L: $5\\% \\text{ of } 2,50,000 = ₹12,500$\n3. 5L - 6L: $20\\% \\text{ of } 1,00,000 = ₹20,000$\n4. Total Base Tax = $12,500 + 20,000 = ₹32,500$\n5. Cess = $4\\% \\text{ of } 32,500 = ₹1,300$\n6. Total Tax = $32,500 + 1,300 = ₹33,800$",
        difficulty: "medium" as const
    },
    {
        id: "tax_5",
        question: "A dealer buys an article for ₹8000 and sells it for ₹10000. If everyone in the chain is in the same state and GST is 18%, calculate the CGST and SGST payable by the dealer.",
        solution: "1. Profit = $10,000 - 8,000 = ₹2,000$\n2. GST on Profit = $18\\% \\text{ of } 2000 = ₹360$\n3. CGST = ₹180, SGST = ₹180",
        difficulty: "easy" as const
    },
    {
        id: "tax_6",
        question: "Ms. Anjali's taxable income is ₹12,00,000. Calculate her total tax using the old regime slabs.",
        solution: "1. Slab 1 (0-2.5L): ₹0\n2. Slab 2 (2.5-5L @ 5%): ₹12,500\n3. Slab 3 (5-10L @ 20%): ₹1,00,000\n4. Slab 4 (10-12L @ 30%): $30\\% \\text{ of } (12L - 10L) = 30\\% \\text{ of } 2L = ₹60,000$\n5. Base Tax = $0 + 12,500 + 1,00,000 + 60,000 = ₹1,72,500$\n6. Cess @ 4% = ₹6,900\n7. Net Tax = $1,72,500 + 6,900 = ₹1,79,400$",
        difficulty: "hard" as const
    },
    {
        id: "tax_7",
        question: "Calculate the interest deduction under 80TTA if a person has ₹15,000 interest from savings account and ₹20,000 from fixed deposits.",
        solution: "1. 80TTA only applies to Savings Bank Interest.\n2. Deductible Amount = $\\min(15,000, 10,000) = ₹10,000$.",
        difficulty: "medium" as const
    },
    {
        id: "tax_8",
        question: "A shopkeeper buys goods for ₹4000 and sells them at a profit of 25%. If the GST rate is 5%, what is the total price the consumer pays?",
        solution: "1. SP = $4000 + 25\\% \\text{ of } 4000 = ₹5000$\n2. GST = $5\\% \\text{ of } 5000 = ₹250$\n3. Consumer Pays = $5000 + 250 = ₹5,250$",
        difficulty: "easy" as const
    }
];

export const examProblems = [
    {
        id: "tax_exam_1",
        question: "A wholesaler sells an item to a retailer at ₹12,000 including GST of 12%. The retailer sells it to a consumer at 10% profit on his cost price (excluding GST). Calculate the total tax received by the government and the final ITC of the retailer.",
        solution: "1. Price incl. GST = ₹12,000. $x + 0.12x = 12000 \\implies 1.12x = 12000 \\implies x = ₹10714.28$\n2. GST paid by retailer (Input tax) = $12000 - 10714.28 = ₹1285.72$\n3. Retailer CP (excl tax) = ₹10714.28\n4. Retailer SP (excl tax) = $10714.28 + 10\\% = ₹11785.71$\n5. Output GST = $12\\% \\text{ of } 11785.71 = ₹1414.28$\n6. Tax to Govt = Output tax from last chain = ₹1414.28\n7. Retailer ITC = ₹1285.72",
        difficulty: "hard" as const,
        examTag: "CBSE 2022"
    },
    {
        id: "tax_exam_2",
        question: "A person has an annual income of ₹10,00,000. He claims ₹1.5L under 80C, ₹25k under 80D and has a home loan interest of ₹2.5L. Calculate the net tax payable. (Note: limit of Sec 24 is ₹2L)",
        solution: "1. Gross Income = ₹10,00,000\n2. Std. Deduction = ₹50,000\n3. 80C = ₹1,50,000\n4. 80D = ₹25,000\n5. Sec 24 = ₹2,00,000 (restricted to 2L)\n6. Taxable Income = $10L - (50k + 150k + 25k + 200k) = ₹5,75,000$\n7. Tax on 2.5L-5L @ 5% = ₹12,500\n8. Tax on 5L-5.75L @ 20% = $20\\% \\text{ of } 75,000 = ₹15,000$\n9. Base Tax = $12,500 + 15,000 = ₹27,500$\n10. Cess @ 4% = ₹1,100. Total = ₹28,600",
        difficulty: "medium" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "tax_exam_3",
        question: "Explain why GST is called a destination-based tax with an example of inter-state trade.",
        solution: "1. In inter-state trade (A in State 1 to B in State 2), IGST is levied.\n2. The IGST collected is shared between Centre and the *Consuming* State.\n3. Example: Mobile sold from Delhi to Haryana. The tax revenue portion (SGST equivalent) goes to Haryana govt, not Delhi.",
        difficulty: "medium" as const,
        examTag: "Theory Focus"
    },
    {
        id: "tax_exam_4",
        question: "What is the maximum deduction possible for a senior citizen under section 80D and 80TTB?",
        solution: "1. 80D (Health) for Seniors: ₹50,000 (instead of 25k).\n2. 80TTB (Interest) for Seniors: ₹50,000 (instead of 10k in 80TTA).",
        difficulty: "easy" as const,
        examTag: "General Awareness"
    },
    {
        id: "tax_exam_5",
        question: "A dealer B buys goods from manufacturer A for ₹10,000 and sells to consumer C for ₹12,000. Manufacturer A pays ₹1,800 GST to govt. Dealer B pays ₹360 GST to govt. What is the GST rate?",
        solution: "1. GST paid by manufacturer A = ₹1800 on ₹10,000 sales.\n2. Rate = $(1800 / 10000) \\times 100 = 18\\%$\n3. Verify Dealer B: Output tax = $18\\% \\text{ of } 12,000 = ₹2160$\n4. Net tax for B = $2160 - 1800 = ₹360$. Matches!",
        difficulty: "medium" as const,
        examTag: "Logic Based"
    }
];
