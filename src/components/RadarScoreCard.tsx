import { Brain } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface RadarScoreCardProps {
  totalScore: number;
  maxScore: number;
  radarData: Array<{
    category: string;
    score: number;
    fullMark: number;
  }>;
}

export function RadarScoreCard({ totalScore, maxScore, radarData }: RadarScoreCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-gray-600 text-sm mb-1">Total Skor Psikometrik</p>
            <h3 className="text-gray-900">{totalScore}</h3>
            <p className="text-gray-500 text-sm mt-1">dari {maxScore} poin</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
        </div>

        {/* Radar Chart */}
        <div className="flex-1 flex items-center justify-center">
          <ResponsiveContainer width="100%" height={180}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: '#6b7280', fontSize: 10 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: '#6b7280', fontSize: 9 }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#0d6efd"
                fill="#0d6efd"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* API Placeholder */}
          <button className="w-full mt-4 px-4 py-2 bg-[#0d6efd] text-white rounded-lg hover:bg-blue-700 transition-colors text-sm text-center">
            Mulai Tes
          </button>
        {/* <div className="mt-2 p-2 bg-purple-50 border border-purple-200 rounded text-xs text-purple-800">
          💡 Use <code className="px-1 bg-purple-100 rounded">@json($radarData)</code>
        </div> */}
      </CardContent>
    </Card>
  );
}
