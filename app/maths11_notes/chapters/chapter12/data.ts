export const straightLineData = {
    fundamentals: {
        distanceFormula: "$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
        sectionFormulaInternal: "$P(x, y) = \\left( \\frac{mx_2 + nx_1}{m+n}, \\frac{my_2 + ny_1}{m+n} \\right)$",
        sectionFormulaExternal: "$P(x, y) = \\left( \\frac{mx_2 - nx_1}{m-n}, \\frac{my_2 - ny_1}{m-n} \\right)$",
        centroid: "$G(x, y) = \\left( \\frac{x_1 + x_2 + x_3}{3}, \\frac{y_1 + y_2 + y_3}{3} \\right)$",
        collinearity: "$\text{Slope}(AB) = \text{Slope}(BC)$ or $\text{Area}(\\triangle ABC) = 0$"
    },
    lineForms: {
        pointSlope: "$y - y_1 = m(x - x_1)$",
        twoPoint: "$y - y_1 = \\frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$",
        slopeIntercept: "$y = mx + c$",
        interceptForm: "$\\frac{x}{a} + \\frac{y}{b} = 1$",
        normalForm: "$x \\cos \\alpha + y \\sin \\alpha = p$",
        generalForm: "$Ax + By + C = 0$"
    },
    slopes: {
        twoPoints: "$m = \\frac{y_2 - y_1}{x_2 - x_1}$",
        general: "$m = -\\frac{A}{B}$",
        xIntercept: "$x_{int} = -\\frac{C}{A}$",
        yIntercept: "$y_{int} = -\\frac{C}{B}$",
        parallel: "$m_1 = m_2$",
        perpendicular: "$m_1 m_2 = -1$"
    },
    angles: {
        betweenLines: "$\\tan \\theta = \\left| \\frac{m_2 - m_1}{1 + m_1 m_2} \\right|$",
        slopeFromAngle: "$m = \\tan \\theta$"
    },
    distances: {
        pointToLine: "$d = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}$",
        parallelLines: "$d = \\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$"
    },
    trigTable: [
        { angle: "0°", sin: "0", cos: "1", tan: "0" },
        { angle: "30°", sin: "1/2", cos: "√3/2", tan: "1/√3" },
        { angle: "45°", sin: "√2/2", cos: "√2/2", tan: "1" },
        { angle: "60°", sin: "√3/2", cos: "1/2", tan: "√3" },
        { angle: "90°", sin: "1", cos: "0", tan: "∞" },
        { angle: "120°", sin: "√3/2", cos: "-1/2", tan: "-√3" },
        { angle: "135°", sin: "√2/2", cos: "-√2/2", tan: "-1" },
        { angle: "150°", sin: "1/2", cos: "-√3/2", tan: "-1/√3" },
        { angle: "180°", sin: "0", cos: "-1", tan: "0" }
    ],
    reductionFormulas: {
        tan180Minus: "$\\tan(180^\\circ - \\theta) = -\\tan\\theta$",
        tan90Plus: "$\\tan(90^\\circ + \\theta) = -\\cot\\theta$",
        tanAMinusB: "$\\tan(A-B) = \\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$"
    }
};

export const problems = [
    {
        id: "str_1",
        question: "Find the coordinates of the centroid of a triangle whose vertices are (1, 4), (2, 7) and (-3, -2).",
        solution: "1. Vertices: $(1, 4), (2, 7), (-3, -2)$\n2. Centroid $G = (\\frac{1+2-3}{3}, \\frac{4+7-2}{3}) = (\\frac{0}{3}, \\frac{9}{3})$\n3. $G = (0, 3)$",
        difficulty: "easy" as const
    },
    {
        id: "str_2",
        question: "Find the slope of a line which makes an angle of 150° with the positive direction of x-axis.",
        solution: "1. $\\theta = 150^\\circ$\n2. $m = \\tan(150^\\circ) = \\tan(180^\\circ - 30^\\circ) = -\\tan(30^\\circ)$\n3. $m = -1/\\sqrt{3}$",
        difficulty: "easy" as const
    },
    {
        id: "str_3",
        question: "Find the equation of a line passing through (2, 3) and perpendicular to the line 4x + 3y + 10 = 0.",
        solution: "1. Given line: $4x + 3y + 10 = 0 \\implies m_1 = -4/3$\n2. Perpendicular slope $m_2 = -1/m_1 = 3/4$\n3. Equation: $y - 3 = \\frac{3}{4}(x - 2) \\implies 4y - 12 = 3x - 6$\n4. Final Form: $3x - 4y + 6 = 0$",
        difficulty: "medium" as const
    },
    {
        id: "str_4",
        question: "Calculate the distance between the parallel lines 3x - 4y + 7 = 0 and 3x - 4y + 5 = 0.",
        solution: "1. $A=3, B=-4, C_1=7, C_2=5$\n2. $d = \\frac{|7 - 5|}{\\sqrt{3^2 + (-4)^2}} = \\frac{2}{\\sqrt{9 + 16}} = \\frac{2}{5} = 0.4$ units",
        difficulty: "medium" as const
    },
    {
        id: "str_5",
        question: "Find the value of k if the line (k-3)x - (4-k²)y + (k²-7k+6) = 0 is parallel to x-axis.",
        solution: "1. Line parallel to x-axis means slope $m = 0$\n2. $m = -\\frac{k-3}{-(4-k^2)} = 0 \\implies k-3 = 0$\n3. Result: $k = 3$",
        difficulty: "hard" as const
    },
    {
        id: "str_6",
        question: "Reduction to Normal Form: Reduce x - √3y + 8 = 0 into normal form.",
        solution: "1. $x - \\sqrt{3}y = -8 \\implies -x + \\sqrt{3}y = 8$\n2. Divide by $\\sqrt{(-1)^2 + (\\sqrt{3})^2} = 2$\n3. $-\\frac{1}{2}x + \\frac{\\sqrt{3}}{2}y = 4$\n4. $\\cos(120^\\circ)x + \\sin(120^\\circ)y = 4$",
        difficulty: "hard" as const
    },
    {
        id: "str_7",
        question: "Find the distance of the point (3, -5) from the line 3x - 4y - 26 = 0.",
        solution: "1. Point $(x_1, y_1) = (3, -5)$, Line $3x - 4y - 26 = 0$\n2. $d = \\frac{|3(3) - 4(-5) - 26|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|9 + 20 - 26|}{\\sqrt{9 + 16}}$\n3. $d = \\frac{|3|}{5} = 0.6$ units",
        difficulty: "medium" as const
    },
    {
        id: "str_8",
        question: "Find the distance between the parallel lines $15x + 8y - 34 = 0$ and $15x + 8y + 31 = 0$.",
        solution: "1. $A = 15, B = 8, C_1 = -34, C_2 = 31$\n2. $d = \\frac{|-34 - 31|}{\\sqrt{15^2 + 8^2}} = \\frac{|-65|}{\\sqrt{225 + 64}}$\n3. $d = \\frac{65}{\\sqrt{289}} = \\frac{65}{17}$ units",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "str_exam_1",
        question: "Find the equation of the line passing through the intersection of 2x + 3y = 4 and 3x - y = 5 and is perpendicular to x+3y=7.",
        solution: "1. Solve intersection: $x=19/11, y=2/11$ (approx)\n2. Perp slope to $x+3y=7$ is $m=3$\n3. Use point-slope form: $y - 2/11 = 3(x - 19/11)$\n4. $11y - 2 = 33x - 57 \\implies 33x - 11y - 55 = 0$",
        difficulty: "hard" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "str_exam_2",
        question: "Find the ratio in which the line 3x + 4y = 7 divides the segment joining (1, 2) and (-2, 1).",
        solution: "1. Let ratio be $k:1$. Point $P = (\\frac{-2k+1}{k+1}, \\frac{k+2}{k+1})$\n2. $P$ lies on $3x+4y=7 \\implies 3(\\frac{-2k+1}{k+1}) + 4(\\frac{k+2}{k+1}) = 7$\n3. $-6k + 3 + 4k + 8 = 7k + 7 \\implies -2k + 11 = 7k + 7$\n4. $9k = 4 \\implies k = 4/9$. Ratio is $4:9$.",
        difficulty: "medium" as const,
        examTag: "CBSE 2021"
    },
    {
        id: "str_exam_3",
        question: "Find the equation of a line which passes through (2, 2) and whose sum of intercepts on the axes is 9.",
        solution: "1. $a + b = 9 \\implies b = 9 - a$\n2. $\\frac{x}{a} + \\frac{y}{9-a} = 1$. Passes through (2, 2):\n3. $\\frac{2}{a} + \\frac{2}{9-a} = 1 \\implies 2(9-a) + 2a = a(9-a) \\implies 18 = 9a - a^2$\n4. $a^2 - 9a + 18 = 0 \\implies (a-3)(a-6) = 0$. Lines: $x/3 + y/6 = 1$ and $x/6 + y/3 = 1$.",
        difficulty: "hard" as const,
        examTag: "Board Favorite"
    },
    {
        id: "str_exam_4",
        question: "Distance from Origin: A line is such that its segment between the axes is bisected at the point (h, k). Show that its equation is x/h + y/k = 2.",
        solution: "1. Let intercepts be $(a, 0)$ and $(0, b)$.\n2. Midpoint: $(a/2, b/2) = (h, k) \\implies a = 2h, b = 2k$\n3. Intercept form: $\\frac{x}{2h} + \\frac{y}{2k} = 1$\n4. Multiply by 2: $\\frac{x}{h} + \\frac{y}{k} = 2$.",
        difficulty: "medium" as const,
        examTag: "Proof Based"
    },
    {
        id: "str_exam_5",
        question: "Find the image of the point (3, 8) with respect to the line x + 3y = 7 assuming the line to be a plane mirror.",
        solution: "1. Line: $x + 3y - 7 = 0$. Point: $(3, 8)$.\n2. Mirror formula: $\\frac{x-3}{1} = \\frac{y-8}{3} = -2 \\frac{(3 + 3(8) - 7)}{1^2 + 3^2}$\n3. $\\frac{x-3}{1} = \\frac{y-8}{3} = -2 \\frac{20}{10} = -4$\n4. $x = 3-4 = -1, y = 8-12 = -4$. Image is $(-1, -4)$.",
        difficulty: "hard" as const,
        examTag: "Advanced CBSE"
    }
];
