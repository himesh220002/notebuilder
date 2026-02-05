'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface DataPoint {
  x: number;
  exp2: number;
  exp3: number;
  exp05: number;
}

export default function ExponentialGraph() {
  // Generate data points for exponential functions
  const data: DataPoint[] = [];
  for (let i = -3; i <= 3; i += 0.5) {
    data.push({
      x: i,
      exp2: Math.pow(2, i),
      exp3: Math.pow(3, i),
      exp05: Math.pow(0.5, i),
    });
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 border border-blue-200">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">
        📊 Exponential Functions: $2^x$, $3^x$, $(0.5)^x$
      </h3>
      <p className="text-gray-700 mb-6">
        Exponential functions grow or decay at constant rates. As the exponent increases, the value grows exponentially.
      </p>
      
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            type="number"
            dataKey="x"
            label={{ value: 'Exponent (x)', position: 'insideBottomRight', offset: -5 }}
            stroke="#666"
          />
          <YAxis
            label={{ value: 'Value ($a^x$)', angle: -90, position: 'insideLeft' }}
            stroke="#666"
            domain={[0, 10]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f0f4f8',
              border: '1px solid #3b82f6',
              borderRadius: '8px',
            }}
            formatter={(value?: number | string) => typeof value === 'number' ? value.toFixed(3) : String(value)}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <ReferenceLine x={0} stroke="#999" strokeDasharray="5 5" />
          <ReferenceLine y={1} stroke="#999" strokeDasharray="5 5" />
          
          <Line
            type="monotone"
            dataKey="exp2"
            stroke="#3b82f6"
            name="$2^x$ (Growing)"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="exp3"
            stroke="#ef4444"
            name="$3^x$ (Faster Growth)"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="exp05"
            stroke="#8b5cf6"
            name="$(0.5)^x$ (Decay)"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-lg text-blue-900 mb-2">📌 Key Observations:</h4>
        <ul className="space-y-2 text-gray-700">
          <li>✓ All curves pass through the point (0, 1) because $a^0 = 1$</li>
          <li>✓ When base {'>'} 1: exponential growth (curves rise)</li>
          <li>✓ When 0 {'<'} base {'<'} 1: exponential decay (curves fall)</li>
          <li>✓ Larger bases grow faster (compare $2^x$ and $3^x$)</li>
        </ul>
      </div>
    </div>
  );
}
