import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data - easily replaceable with API data via Laravel's @json($chartData)
const scoringBreakdownData = [
  { category: 'Personality', score: 85, color: '#0d6efd' },
  { category: 'Prospect', score: 78, color: '#6610f2' },
  { category: 'Productivity', score: 92, color: '#6f42c1' },
  { category: 'Payment', score: 88, color: '#d63384' },
];

const scoring5cBreakdownData = [
  { category: 'Character', score: 24, color: '#0d6efd' },
  { category: 'Capacity', score: 16, color: '#6610f2' },
  { category: 'Collateral', score: 21, color: '#6f42c1' },
  { category: 'Capital', score: 24, color: '#d63384' },
  { category: 'Condition', score: 28, color: '#33D677' },
];

const totalScoringData = [
  { name: 'Score Achieved', value: 343, color: '#0d6efd' },
  { name: 'Remaining', value: 57, color: '#e5e7eb' },
];

export function DashboardCharts() {
  const totalScore = totalScoringData[0].value;
  const maxScore = 400;
  const scorePercentage = ((totalScore / maxScore) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Gauge/Pie Chart - Total Credit Score */}
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Total Credit Score</CardTitle>
          <p className="text-gray-500 text-sm">Skor kredit keseluruhan</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={totalScoringData}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
              >
                {totalScoringData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Score Display */}
          <div className="text-center -mt-20 mb-16">
            <div className="text-gray-900">{totalScore}</div>
            <p className="text-gray-600 text-sm">out of {maxScore}</p>
          </div>

          {/* Score Details */}
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-700 text-sm">Persentase</span>
              <span className="text-[#0d6efd]">{scorePercentage}%</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 text-sm">Rating</span>
              <span className="text-green-600">Excellent</span>
            </div>
          </div>

          {/* API Placeholder */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-xs">
              💡 Use <code className="px-1 bg-blue-100 rounded">@json($totalScore)</code>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bar Chart - Credit Scoring Breakdown */}
      <Card className="lg:col-span-2 bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Credit Scoring Breakdown</CardTitle>
          <p className="text-gray-500 text-sm">
            4P Analysis: Personality, Prospect, Productivity, Payment
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={scoringBreakdownData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="category"
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value} points`, 'Score']}
              />
              <Legend />
              <Bar
                dataKey="score"
                radius={[8, 8, 0, 0]}
                name="Score"
              >
                {scoringBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Legend with indicators */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {scoringBreakdownData.map((item) => (
              <div key={item.category} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-700 text-sm">{item.category}</span>
                </div>
                <span className="text-gray-900">{item.score}</span>
              </div>
            ))}
          </div>

          {/* Data placeholder comment for Laravel */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-xs">
              💡 <strong>Laravel Integration:</strong> Replace scoringBreakdownData with 
              <code className="mx-1 px-1 bg-blue-100 rounded">@json($scoringData)</code>
            </p>
          </div>
        </CardContent>
      </Card>

       {/* Bar Chart - 5C Credit Scoring Breakdown */}
      <Card className="lg:col-span-2 bg-white border border-gray-200 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-900">Credit Scoring Breakdown</CardTitle>
          <p className="text-gray-500 text-sm">
            5C Analysis: Character, Capacity, Collateral, Capital, Condition
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={scoring5cBreakdownData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="category"
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#6b7280"
                style={{ fontSize: '12px' }}
                domain={[0, 30]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`${value} points`, 'Score']}
              />
              <Legend />
              <Bar
                dataKey="score"
                radius={[8, 8, 0, 0]}
                name="Score"
              >
                {scoring5cBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Legend with indicators */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {scoring5cBreakdownData.map((item) => (
              <div key={item.category} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-700 text-sm">{item.category}</span>
                </div>
                <span className="text-gray-900">{item.score}</span>
              </div>
            ))}
          </div>

          {/* Data placeholder comment for Laravel */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 text-xs">
              💡 <strong>Laravel Integration:</strong> Replace scoringBreakdownData with 
              <code className="mx-1 px-1 bg-blue-100 rounded">@json($scoringData)</code>
            </p>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}
