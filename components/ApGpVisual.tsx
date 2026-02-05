'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function ApGpVisual() {
    // Generate data comparing simple AP (Simple Interest) vs GP (Compound Interest)
    const generateData = () => {
        const data = [];
        const principal = 100;
        const rate = 0.5; // 50% growth for dramatic visual difference
        // AP: Adds 50 every step (100, 150, 200...)
        // GP: Multiplies by 1.5 every step (100, 150, 225...)

        for (let t = 0; t <= 6; t++) {
            const apVal = principal + (principal * rate * t);
            const gpVal = principal * Math.pow((1 + rate), t);

            data.push({
                time: t,
                AP: Math.round(apVal),
                GP: Math.round(gpVal)
            });
        }
        return data;
    };

    const data = generateData();

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-full flex flex-col items-center">
            <h5 className="font-bold text-gray-800 mb-2">Linear (AP) vs Exponential (GP) Growth</h5>
            <p className="text-xs text-gray-500 mb-4 text-center">
                Comparing arithmetic growth ($a+d$) vs geometric growth ($a \cdot r^n$).
                <br />
                Notice how GP (Exponential) overtakes AP (Linear) rapidly.
            </p>

            <div className="w-full h-[300px] min-h-[300px] min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis
                            dataKey="time"
                            label={{ value: 'Time (n)', position: 'insideBottomRight', offset: -5 }}
                            stroke="#94a3b8"
                        />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="AP"
                            stroke="#3b82f6"
                            name="Arithmetic (AP)"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="GP"
                            stroke="#ef4444"
                            name="Geometric (GP)"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
