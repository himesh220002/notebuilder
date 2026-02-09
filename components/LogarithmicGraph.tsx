'use client';

import MathText from './MathText';
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
  log2: number;
  log3: number;
  log10: number;
}

export default function LogarithmicGraph() {
  // Generate data points for logarithmic functions
  const data: DataPoint[] = [];
  for (let i = 0.1; i <= 10; i += 0.3) {
    data.push({
      x: i,
      log2: Math.log(i) / Math.log(2),
      log3: Math.log(i) / Math.log(3),
      log10: Math.log10(i),
    });
  }

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6 border border-green-200 mt-8">
      <h3 className="text-2xl font-bold text-green-900 mb-4">
        📈 <MathText text="Logarithmic Functions: $log_2(x), log_3(x), log_{10}(x)$" />
      </h3>
      <p className="text-gray-700 mb-6">
        Logarithmic functions are the <strong>inverse</strong> of exponential functions. They grow slowly and are useful for measuring scales that span many orders of magnitude.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            type="number"
            dataKey="x"
            label={{ value: 'Input Value (x)', position: 'insideBottomRight', offset: -5 }}
            stroke="#666"
          />
          <YAxis
            label={{ value: 'Logarithm Value ($\\log_a(x)$)', angle: -90, position: 'insideLeft' }}
            stroke="#666"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#f0f4f8',
              border: '1px solid #10b981',
              borderRadius: '8px',
            }}
            formatter={(value?: number | string) => typeof value === 'number' ? value.toFixed(3) : String(value)}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <ReferenceLine x={1} stroke="#999" strokeDasharray="5 5" label="x=1" />
          <ReferenceLine y={0} stroke="#999" strokeDasharray="5 5" />

          <Line
            type="monotone"
            dataKey="log2"
            stroke="#10b981"
            name="$\\log_2(x)$"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="log3"
            stroke="#f59e0b"
            name="$\\log_3(x)$"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
          <Line
            type="monotone"
            dataKey="log10"
            stroke="#06b6d4"
            name="$\\log_{10}(x)$"
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-lg text-green-900 mb-2">📌 Key Observations:</h4>
        <ul className="space-y-2 text-gray-700">
          <li>✓ All curves pass through the point (1, 0) because <MathText text="$log_a(1) = 0$" /></li>
          <li>✓ Logarithmic functions grow very slowly compared to exponentials</li>
          <li>✓ Smaller base = steeper curve (compare <MathText text="$log_2$ and $log_{10}$" />)</li>
          <li>✓ Undefined for <MathText text="$x <= 0$" /> (logarithms only exist for positive values)</li>
          <li>✓ These are <strong>inverse functions</strong> of exponentials</li>
        </ul>
      </div>
    </div>
  );
}
