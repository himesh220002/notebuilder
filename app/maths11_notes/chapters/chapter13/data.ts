export const conicsData = {
    circles: {
        standardForm: "$(x-h)^2 + (y-k)^2 = r^2$",
        originForm: "$x^2 + y^2 = r^2$",
        generalForm: "$x^2 + y^2 + 2gx + 2fy + c = 0$",
        centerRadius: "Center: $(-g, -f)$, Radius: $\\sqrt{g^2 + f^2 - c}$",
        diameterForm: "$(x-x_1)(x-x_2) + (y-y_1)(y-y_2) = 0$",
        condition: "$g^2 + f^2 - c > 0$"
    },
    parabola: {
        forms: [
            { type: "$y^2 = 4ax$", focus: "$(a, 0)$", directrix: "$x = -a$", axis: "x-axis", lr: "$4a$" },
            { type: "$y^2 = -4ax$", focus: "$(-a, 0)$", directrix: "$x = a$", axis: "x-axis", lr: "$4a$" },
            { type: "$x^2 = 4ay$", focus: "$(0, a)$", directrix: "$y = -a$", axis: "y-axis", lr: "$4a$" },
            { type: "$x^2 = -4ay$", focus: "$(0, -a)$", directrix: "$y = a$", axis: "y-axis", lr: "$4a$" }
        ],
        latusRectum: "The chord through the focus perpendicular to the axis of the parabola."
    }
};

export const problems = [
    {
        id: "circles_1",
        question: "Find the equation of a circle whose center is (2, -3) and radius is 5.",
        solution: "1. Given: $(h, k) = (2, -3), r = 5$\n2. Formula: $(x-h)^2 + (y-k)^2 = r^2$\n3. Substituting: $(x-2)^2 + (y+3)^2 = 25$\n4. Expanding: $x^2 + y^2 - 4x + 6y + 4 + 9 = 25$\n5. Result: $x^2 + y^2 - 4x + 6y - 12 = 0$",
        difficulty: "easy" as const
    },
    {
        id: "circles_2",
        question: "Find the center and radius of the circle $x^2 + y^2 - 8x + 10y - 12 = 0$.",
        solution: "1. General form: $x^2 + y^2 + 2gx + 2fy + c = 0$\n2. Comparing: $2g = -8 \\implies g = -4$, $2f = 10 \\implies f = 5$, $c = -12$\n3. Center: $(-g, -f) = (4, -5)$\n4. Radius: $r = \\sqrt{g^2 + f^2 - c} = \\sqrt{(-4)^2 + 5^2 - (-12)} = \\sqrt{16 + 25 + 12} = \\sqrt{53}$ units",
        difficulty: "easy" as const
    },
    {
        id: "circles_3",
        question: "Find the equation of the circle passing through the points (3, 4) and (2, 1) as endpoints of a diameter.",
        solution: "1. Diameter Form: $(x-x_1)(x-x_2) + (y-y_1)(y-y_2) = 0$\n2. Substitute $(3, 4)$ and $(2, 1)$:\n3. $(x-3)(x-2) + (y-4)(y-1) = 0$\n4. $x^2 - 5x + 6 + y^2 - 5y + 4 = 0$\n5. Final: $x^2 + y^2 - 5x - 5y + 10 = 0$",
        difficulty: "medium" as const
    },
    {
        id: "circles_4",
        question: "Find the equation of the circle which passes through (4, 1), (6, 5) and has its center on the line 4x + y = 16.",
        solution: "1. Let center be $(h, k)$. Radius $r^2 = (4-h)^2 + (1-k)^2 = (6-h)^2 + (5-k)^2$\n2. Expand & Solve for $h, k$: $16-8h+h^2+1-2k+k^2 = 36-12h+h^2+25-10k+k^2$\n3. $4h + 8k = 44 \\implies h + 2k = 11$\n4. Given center on $4x + y = 16 \\implies 4h + k = 16$\n5. Solving simultaneously: $h=3, k=4$. Radius $r^2 = (4-3)^2 + (1-4)^2 = 1 + 9 = 10$.\n6. Equation: $(x-3)^2 + (y-4)^2 = 10 \\implies x^2 + y^2 - 6x - 8y + 15 = 0$",
        difficulty: "hard" as const
    },
    {
        id: "parabola_1",
        question: "Find the focus, axis and the length of the latus rectum for $y^2 = 12x$.",
        solution: "1. Compare with $y^2 = 4ax \\implies 4a = 12 \\implies a = 3$\n2. Focus: $(a, 0) = (3, 0)$\n3. Axis: x-axis ($y=0$)\n4. Length of Latus Rectum: $4a = 12$ units\n5. Directrix: $x = -3$",
        difficulty: "easy" as const
    },
    {
        id: "parabola_2",
        question: "Find the equation of the parabola whose focus is (0, -3) and directrix is y = 3.",
        solution: "1. Focus is on y-axis, below origin. This is of the form $x^2 = -4ay$.\n2. $a = 3$ (distance from vertex (0,0) to focus (0,-3)).\n3. Equation: $x^2 = -4(3)y$\n4. Result: $x^2 = -12y$",
        difficulty: "medium" as const
    },
    {
        id: "parabola_3",
        question: "Find the equation of the parabola with vertex at origin, axis along x-axis and passing through (2, 3).",
        solution: "1. Axis along x-axis $\\implies y^2 = 4ax$\n2. Passes through (2, 3) $\\implies 3^2 = 4a(2) \\implies 9 = 8a \\implies a = 9/8$\n3. Equation: $y^2 = 4(9/8)x \\implies y^2 = 4.5x$ or $2y^2 = 9x$",
        difficulty: "medium" as const
    },
    {
        id: "parabola_4",
        question: "Find the area of the triangle formed by the lines joining the vertex of the parabola $x^2=12y$ to the ends of its latus rectum.",
        solution: "1. Parabola $x^2 = 12y \\implies 4a = 12 \\implies a = 3$\n2. Vertex $O(0, 0)$. Focus $S(0, 3)$.\n3. Latus Rectum ends: $x^2 = 4ay \\implies x = \\pm 2a = \\pm 6$. Points are $(-6, 3)$ and $(6, 3)$.\n4. Base of triangle = distance between $(-6, 3)$ and $(6, 3) = 12$ units.\n5. Height of triangle = distance from $O(0,0)$ to focal line $y=3$ is $3$ units.\n6. Area = $\\frac{1}{2} \\times 12 \\times 3 = 18$ sq. units.",
        difficulty: "hard" as const
    }
];

export const examProblems = [
    {
        id: "exam_1",
        question: "Find the equation of the circle which touches both the axes and whose radius is 4 units.",
        solution: "1. Since it touches both axes, center is $(\\pm 4, \\pm 4)$.\n2. There are 4 such circles. Case 1 (Quadrant I): center $(4, 4), r=4$\n3. Equation: $(x-4)^2 + (y-4)^2 = 16 \\implies x^2 + y^2 - 8x - 8y + 16 = 0$\n4. In general: $x^2 + y^2 \\pm 8x \\pm 8y + 16 = 0$",
        difficulty: "hard" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "exam_2",
        question: "Find the equation of the parabola whose vertex is (0,0) and focus is (-2, 0). Also find directrix.",
        solution: "1. Vertex (0,0), Focus (-2, 0) $\\implies$ Opens left $\\implies y^2 = -4ax$.\n2. $a = 2$.\n3. Equation: $y^2 = -8x$.\n4. Directrix: $x = a \\implies x = 2$.",
        difficulty: "easy" as const,
        examTag: "CBSE 2021"
    },
    {
        id: "exam_3",
        question: "Find the coordinates of the focus and the length of the latus rectum for the parabola $3x^2 = -8y$.",
        solution: "1. Rewrite: $x^2 = -\\frac{8}{3}y$\n2. Compare with $x^2 = -4ay \\implies 4a = 8/3 \\implies a = 2/3$\n3. Focus: $(0, -a) = (0, -2/3)$\n4. Latus Rectum length: $4a = 8/3$ units.",
        difficulty: "medium" as const,
        examTag: "Common Board Problem"
    },
    {
        id: "exam_4",
        question: "If the equation $x^2 + y^2 + 2gx + 2fy + c = 0$ represents a circle, find the condition that the circle passes through the origin.",
        solution: "1. Circle passes through $(0, 0)$.\n2. Substitute $x=0, y=0$ in the equation: $0^2 + 0^2 + 2g(0) + 2f(0) + c = 0$\n3. Result: $c = 0$.",
        difficulty: "easy" as const,
        examTag: "Concept MCQ"
    },
    {
        id: "exam_5",
        question: "Find the equation of the circle which is concentric with $x^2+y^2-4x-6y-9=0$ and passes through ( -4, -5).",
        solution: "1. Concentric circles have same center. Original center: $2g = -4 \\implies g = -2, 2f = -6 \\implies f = -3$. Center = (2, 3).\n2. Circle passes through (-4, -5). Radius $r^2 = (2 - (-4))^2 + (3 - (-5))^2 = 6^2 + 8^2 = 100$.\n3. New equation: $(x-2)^2 + (y-3)^2 = 100 \\implies x^2 + y^2 - 4x - 6y - 87 = 0$.",
        difficulty: "hard" as const,
        examTag: "Most Repeated"
    }
];
