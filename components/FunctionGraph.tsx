'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

type FunctionType = 'identity' | 'constant' | 'modulus' | 'square' | 'cube' | 'signum' | 'step' | 'exponential' | 'reciprocal' | 'quadratic';

interface FunctionGraphProps {
    type: FunctionType;
    title?: string;
}

export default function FunctionGraph({ type, title }: FunctionGraphProps) {
    // Generate data based on function type
    const generateData = () => {
        const data = [];
        const range = 5; // -5 to 5
        const step = 0.1; // Finer step for better curves

        for (let x = -range; x <= range; x += step) {
            // Fix floating point math issues
            const cleanX = Math.round(x * 10) / 10;
            let y = 0;

            switch (type) {
                case 'identity': y = cleanX; break;
                case 'constant': y = 3; break;
                case 'modulus': y = Math.abs(cleanX); break;
                case 'square': y = cleanX * cleanX; break;
                case 'cube': y = cleanX * cleanX * cleanX; break;
                case 'signum':
                    if (cleanX > 0) y = 1;
                    else if (cleanX < 0) y = -1;
                    else y = 0;
                    break;
                case 'step': y = Math.floor(cleanX); break;
                case 'exponential': y = Math.pow(2, cleanX); break; // using 2^x
                case 'reciprocal':
                    y = cleanX === 0 ? NaN : 1 / cleanX;
                    break;
                case 'quadratic': y = cleanX * cleanX + 2 * cleanX + 1; break; // (x+1)^2
            }
            data.push({ x: cleanX, y });
        }
        return data;
    };

    const data = generateData();
    // Default fallback to identity if type is somehow mismached
    const safeType = type || 'identity';

    const config = {
        identity: { color: "#3b82f6", name: "f(x) = x" },
        constant: { color: "#ef4444", name: "f(x) = c" },
        modulus: { color: "#10b981", name: "f(x) = |x|" },
        square: { color: "#8b5cf6", name: "f(x) = x²" },
        cube: { color: "#f59e0b", name: "f(x) = x³" },
        signum: { color: "#ec4899", name: "f(x) = sgn(x)" },
        step: { color: "#6366f1", name: "f(x) = [x]" },
        exponential: { color: "#14b8a6", name: "f(x) = 2ˣ" },
        reciprocal: { color: "#f43f5e", name: "f(x) = 1/x" },
        quadratic: { color: "#8b5cf6", name: "f(x) = x² + 2x + 1" }
    }[safeType] || { color: "#000", name: "Function" };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center w-full">
            <h5 className="font-bold text-gray-700 mb-2">{title || config.name}</h5>
            <div className="w-full h-[250px] min-h-[250px] min-w-0">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis
                            dataKey="x"
                            type="number"
                            domain={['dataMin', 'dataMax']}
                            tickCount={11}
                            stroke="#94a3b8"
                            fontSize={12}
                            allowDecimals={false}
                        />
                        <YAxis
                            domain={['auto', 'auto']}
                            stroke="#94a3b8"
                            fontSize={12}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: any) => [typeof value === 'number' ? value.toFixed(2) : value, 'f(x)']}
                        />
                        <ReferenceLine x={0} stroke="#cbd5e1" />
                        <ReferenceLine y={0} stroke="#cbd5e1" />
                        <Line
                            type={type === 'step' ? "stepAfter" : "monotone"}
                            dataKey="y"
                            stroke={config.color}
                            strokeWidth={3}
                            dot={false}
                            animationDuration={1000}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
