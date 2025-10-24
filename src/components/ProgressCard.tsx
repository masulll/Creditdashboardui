import { CheckCircle2, Circle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';

interface ProgressItem {
  label: string;
  completed: boolean;
}

interface ProgressCardProps {
  sections: ProgressItem[];
}

export function ProgressCard({ sections }: ProgressCardProps) {
  const completedCount = sections.filter((s) => s.completed).length;
  const totalCount = sections.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <p className="text-gray-600 text-sm mb-1">Progres Pengisian Data</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-gray-900">{completedCount}/{totalCount}</h3>
            <span className="text-gray-500 text-sm">bagian selesai</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-gray-500 text-xs mt-2">{progressPercentage.toFixed(0)}% complete</p>
        </div>

        {/* Section Status */}
        <div className="space-y-2 flex-1">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                {section.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
                <span
                  className={`text-sm ${
                    section.completed ? 'text-gray-700' : 'text-gray-500'
                  }`}
                >
                  {section.label}
                </span>
              </div>
              {section.completed && (
                <span className="text-green-600 text-xs">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA if not complete */}
        {completedCount < totalCount && (
          <button className="w-full mt-4 px-4 py-2 bg-[#0d6efd] text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm">
            Lengkapi Data
          </button>
        )}
      </CardContent>
    </Card>
  );
}
