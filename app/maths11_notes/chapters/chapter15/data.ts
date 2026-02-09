export const utilityData = {
    fundamentals: {
        tariff: "Tariff is the rate or pricing structure at which a utility service provider charges customers for use.",
        fixedCharge: "A mandatory monthly fee independent of consumption level, covering maintenance and operational costs.",
        surcharge: "An additional charge levied on the base bill, often to recover specific costs like energy taxes or infrastructure upgrades."
    },
    electricity: {
        unit: "1 kWh (Kilowatt-Hour) = 1 Unit",
        components: [
            "Energy Charges (Slab-based)",
            "Fixed Charges (Sanctioned Load based)",
            "Regulatory Surcharge (usually 8-10%)",
            "Electricity Tax (State dependent)"
        ],
        slabs: [
            { range: "0 - 200 units", rate: "₹3.00 / unit" },
            { range: "201 - 400 units", rate: "₹4.50 / unit" },
            { range: "Above 400 units", rate: "₹6.50 / unit" }
        ]
    },
    water: {
        unit: "1 kl (Kilolitre) = 1000 Litres",
        components: [
            "Volumetric Water Charge",
            "Sewerage Charge (often % of water charge)",
            "Meter Rent",
            "Water Tax"
        ]
    },
    png: {
        unit: "1 SCM (Standard Cubic Meter)",
        components: [
            "Gas Consumption Charge",
            "Fixed Service Charge",
            "VAT / Taxes"
        ]
    }
};

export const problems = [
    {
        id: "util_1",
        question: "Find the electricity bill for 350 units if the tariff is: ₹3/unit for first 200 units, ₹4.5/unit for next 150 units. Fixed charge is ₹150 and surcharge is 8%.",
        solution: "1. 0-200 units: $200 times 3 = ₹600$\n2. 201-350 units: $150 times 4.5 = ₹675$\n3. Total Energy Charge = $600 + 675 = ₹1,275$\n4. Surcharge = 8% of $1,275$ = $₹102$\n5. Total Bill = Energy + Fixed + Surcharge = $1,275 + 150 + 102 = ₹1,527$",
        difficulty: "medium" as const
    },
    {
        id: "util_2",
        question: "A household consumed 15 kl of water. If the rate is ₹10/kl and sewerage charge is 60% of water charge, calculate total bill including ₹20 meter rent.",
        solution: "1. Water Charge = $15 times 10 = ₹150$\n2. Sewerage Charge = $60\% \text{ of } 150 = ₹90$\n3. Total Bill = Water + Sewerage + Rent = $150 + 90 + 20 = ₹260$",
        difficulty: "easy" as const
    },
    {
        id: "util_3",
        question: "Calculate PNG bill for 42 SCM at ₹45/SCM if fixed charge is ₹100 and VAT is 5% on total amount.",
        solution: "1. Gas Charge = $42 times 45 = ₹1,890$\n2. Base Amount = $1,890 + 100 = ₹1,990$\n3. VAT = $5\% \text{ of } 1,990 = ₹99.50$\n4. Final Total = $1,990 + 99.50 = ₹2,089.50$",
        difficulty: "medium" as const
    },
    {
        id: "util_4",
        question: "Electricity meter reading: Previous 4560, Current 4910. Calculate units consumed.",
        solution: "1. Units = Current - Previous = $4910 - 4560 = 350$ units.",
        difficulty: "easy" as const
    },
    {
        id: "util_5",
        question: "For a commercial shop, fixed charge is ₹500. Slabs: first 100 units @ ₹8, above 100 @ ₹10. Calculate bill for 150 units.",
        solution: "1. 0-100: $100 times 8 = ₹800$\n2. 101-150: $50 times 10 = ₹500$\n3. Total = Energy + Fixed = $800 + 500 + 500 = ₹1,800$.",
        difficulty: "medium" as const
    },
    {
        id: "util_6",
        question: "Water tax is levied at 10%. If water charge is ₹300, calculate total tax amount.",
        solution: "1. Tax = $10\% \text{ of } 300 = ₹30$.",
        difficulty: "easy" as const
    },
    {
        id: "util_7",
        question: "A factory uses 5000 units of electricity. Tariff is flat ₹7/unit with 10% energy tax. Find total.",
        solution: "1. Energy = $5000 times 7 = ₹35,000$\n2. Tax = $10\% \text{ of } 35,000 = ₹3,500$\n3. Total = ₹38,500.",
        difficulty: "hard" as const
    },
    {
        id: "util_8",
        question: "PNG security deposit is ₹5,000 (one-time). If monthly average bill is ₹800, how many months of consumption does the deposit cover roughly?",
        solution: "1. $5000 / 800 = 6.25$ months.",
        difficulty: "easy" as const
    }
];

export const examProblems = [
    {
        id: "util_exam_1",
        question: "A residential complex consumes 1200 units. Slabs: 0-200 @ ₹3, 201-500 @ ₹4.5, 501-1000 @ ₹6, above 1000 @ ₹8. Fixed charge ₹200, Surcharge 8%. Calculate net payable.",
        solution: "1. 0-200: $200 times 3 = 600$\n2. 201-500: $300 times 4.5 = 1350$\n3. 501-1000: $500 times 6 = 3000$\n4. 1001-1200: $200 times 8 = 1600$\n5. Energy = $600 + 1350 + 3000 + 1600 = ₹6,550$\n6. Surcharge = $8\% \text{ of } 6550 = ₹524$\n7. Total = $6550 + 200 + 524 = ₹7,274$",
        difficulty: "hard" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "util_exam_2",
        question: "Differentiate between fixed charge and consumption charge in utility bills with an example of an empty house.",
        solution: "1. Fixed charge is paid even with zero consumption.\n2. In an empty house (0 units), the bill will still include the monthly fixed charge (e.g. ₹150).",
        difficulty: "medium" as const,
        examTag: "Theory Focus"
    },
    {
        id: "util_exam_3",
        question: "A consumer noticed 20% water tax and 60% sewerage charge on his bill of ₹400 (base charge). If he saves 10% water by fixing a leak, how much money is saved?",
        solution: "1. Initial Charge = ₹400. Total = $400 + 400(0.20) + 400(0.60) = 400 + 80 + 240 = ₹720$\n2. New Charge (90%) = ₹360. New Total = $360 + 360(0.20) + 360(0.60) = 360 + 72 + 216 = ₹648$\n3. Savings = $720 - 648 = ₹72$.",
        difficulty: "hard" as const,
        examTag: "Application Based"
    },
    {
        id: "util_exam_4",
        question: "Calculate PNG bill for 35 SCM @ ₹48/SCM with 12% VAT and ₹150 fixed charge.",
        solution: "1. Gas = $35 times 48 = ₹1,680$\n2. Total base = $1680 + 150 = ₹1,830$\n3. VAT = 12% of $1830$ = $₹219.60$\n4. Total = ₹2,049.60",
        difficulty: "medium" as const,
        examTag: "CBSE 2022"
    },
    {
        id: "util_exam_5",
        question: "Why is water usage measured in kilolitres (kl) instead of litres?",
        solution: "1. household usage is high; 1 kl = 1000 litres. Measuring in kl keeps the numbers manageable for billing (e.g., 25 kl vs 25,000 L).",
        difficulty: "easy" as const,
        examTag: "General Awareness"
    }
];
