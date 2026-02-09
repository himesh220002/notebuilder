export const aptitudeData = {
    fundamentals: {
        calendar: {
            ordinaryYear: "A year with 365 days, having 1 odd day ($365 / 7 = 52$ weeks + 1 day).",
            leapYear: "A year with 366 days, having 2 odd days. Occurs when year is divisible by 4 (and centuries by 400).",
            oddDays: "The remainder of days left over after subtracting as many full weeks as possible from total days."
        },
        clocks: {
            speed: "Minute hand moves at $6 deg$ per minute. Hour hand moves at $0.5 deg$ per minute.",
            coincidence: "Hands coincide every $65 frac{5}{11}$ minutes.",
            angleFormula: "Angle $theta = |30H - 5.5M|$ where $H$ is hour and $M$ is minute."
        },
        workTime: {
            logic: "If A can do a piece of work in $n$ days, then A's 1-day work = $1/n$.",
            combined: "If A takes $x$ days and B takes $y$ days, together they take $(x times y)/(x + y)$ days."
        }
    },
    seating: {
        linear: "Arranging people in a straight line or row. Assume facing North if not mentioned.",
        circular: "Arranging people around a circular table. Facing Center implies Right is Clockwise-ish (for person facing in)."
    }
};

export const problems = [
    {
        id: "apt_1",
        question: "Find the angle between hour and minute hand at 5:40.",
        solution: "1. Formula: $theta = |30H - 5.5M|$\n2. Plug in $H=5, M=40$: $theta = |30(5) - 5.5(40)|$\n3. $theta = |150 - 220| = |-70| = 70 deg$.",
        difficulty: "easy" as const
    },
    {
        id: "apt_2",
        question: "A does a work in 10 days and B does it in 15 days. How long will they take working together?",
        solution: "1. A's 1-day work = $1/10$\n2. B's 1-day work = $1/15$\n3. (A+B)'s 1-day work = $1/10 + 1/15 = 5/30 = 1/6$\n4. Time taken = 6 days.",
        difficulty: "medium" as const
    },
    {
        id: "apt_3",
        question: "What day of the week was June 15, 2024? (Given Jan 1, 2024 was Monday)",
        solution: "1. Days from Jan 1 to June 15:\nJan: 30 (total 31 - starting 1), Feb: 29 (leap), Mar: 31, Apr: 30, May: 31, June: 15\n2. Total days = $30+29+31+30+31+15 = 166$\n3. Odd days = $166 / 7 Rightarrow 5$ remainder.\n4. Monday + 5 days = Saturday.",
        difficulty: "hard" as const
    },
    {
        id: "apt_4",
        question: "Two trains 150m and 120m long are running in opposite directions at 45 km/h and 36 km/h. How long will they take to cross each other?",
        solution: "1. Relative Speed = $45 + 36 = 81$ km/h = $81 times (5/18) = 22.5$ m/s\n2. Total Distance = $150 + 120 = 270$ m\n3. Time = $270 / 22.5 = 12$ seconds.",
        difficulty: "medium" as const
    },
    {
        id: "apt_5",
        question: "6 people A, B, C, D, E, F sit in a circle. A is second to left of C. B is immediate right of A. D is between C and F. Who is opposite A?",
        solution: "1. Arrange based on cues: [A, B, E, C, D, F] clockwise.\n2. C is opposite B, E is opposite F, D is opposite A?\n3. Let's re-verify: A, B(R of A), E(placeholder), C(A is 2nd left of C), D(between C/F), F.\n4. Circular order: A -> B -> E -> C -> D -> F.\n5. Opposite A is C.",
        difficulty: "hard" as const
    },
    {
        id: "apt_6",
        question: "How many odd days are there in 400 years?",
        solution: "1. 100 yrs = 5 odd days\n2. 400 yrs = $5 times 4 + 1$ (leap century) = 21 odd days\n3. $21 / 7 = 0$ remainder. So 0 odd days.",
        difficulty: "medium" as const
    },
    {
        id: "apt_7",
        question: "If a clock strikes 12, how many times do the hands overlap in a day?",
        solution: "1. Hands overlap 11 times in 12 hours (losing one during 11-1 shift).\n2. In a full day (24 hours), they overlap 22 times.",
        difficulty: "easy" as const
    },
    {
        id: "apt_8",
        question: "A man covers 300 km at 60 km/h and returns at 40 km/h. Find average speed.",
        solution: "1. Avg Speed = $2xy / (x+y) = (2 times 60 times 40) / 100 = 4800 / 100 = 48$ km/h.",
        difficulty: "medium" as const
    }
];

export const examProblems = [
    {
        id: "apt_exam_1",
        question: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through how many degrees?",
        solution: "1. Time = 5 hours 10 mins = 310 mins.\n2. Hour hand speed = $0.5 deg$ per min.\n3. Angle = $310 times 0.5 = 155 deg$.",
        difficulty: "medium" as const,
        examTag: "CBSE Aptitude"
    },
    {
        id: "apt_exam_2",
        question: "If 1st March of a year is Sunday, which day will 31st August of the same year be?",
        solution: "1. Odd days: Mar(3), Apr(2), May(3), Jun(2), Jul(3), Aug(30 days = 2)\n2. Total = $3+2+3+2+3+2 = 15$\n3. $15 / 7 = 1$ remainder.\n4. Sunday + 1 = Monday.",
        difficulty: "hard" as const,
        examTag: "Reasoning Unit"
    },
    {
        id: "apt_exam_3",
        question: "A can finish a work in 18 days and B can do the same work in half the time taken by A. Then, working together, what part of the same work can they finish in a day?",
        solution: "1. A's 1-day work = $1/18$\n2. B's 1-day work = $1/9$ (half time of 18 is 9)\n3. Together in 1 day = $1/18 + 1/9 = 3/18 = 1/6$.",
        difficulty: "medium" as const,
        examTag: "CBSE 2023"
    },
    {
        id: "apt_exam_4",
        question: "Eight people P, Q, R, S, T, U, V, W are sitting around a table facing center. P is second to the right of T who is the neighbor of R and V. S, the neighbor of U, is not the neighbor of P. V is the neighbor of U. Q is not between S and W. W is not between U and S. Who is the immediate right of V?",
        solution: "1. Circular arrangement logic results in U being immediate right of V.\n2. Order: T -> V -> U -> S -> R -> P -> W -> Q (clockwise).",
        difficulty: "hard" as const,
        examTag: "Logic Section"
    },
    {
        id: "apt_exam_5",
        question: "Relative speed of two trains is 72 km/h when moving in same direction. If speed of one is 120 km/h, find other.",
        solution: "1. Same direction: $|S_1 - S_2| = 72$\n2. $120 - S_2 = 72 Rightarrow S_2 = 48$ km/h or $S_2 = 192$ km/h.\n3. Usually smaller is expected: 48 km/h.",
        difficulty: "medium" as const,
        examTag: "Time-Distance"
    }
];
