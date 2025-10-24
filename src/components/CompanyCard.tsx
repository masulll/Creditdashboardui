import { Building2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CompanyCardProps {
  companyName: string;
  description: string;
  industry?: string;
  location?: string;
}

export function CompanyCard({
  companyName,
  description,
  industry,
  location,
}: CompanyCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-auto">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-6 h-6 text-[#0d6efd]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-600 text-sm mb-1">Resume Perusahaan</p>
            <h3 className="text-gray-900 mb-2">{companyName}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-6">
              {description}
            </p>
            {(industry || location) && (
              <div className="flex flex-wrap gap-2">
                {industry && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {industry}
                  </span>
                )}
                {location && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {location}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
          <button className="w-full mt-4 px-4 py-2 bg-[#0d6efd] text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm">
              Selengkapnya
            </button>
      </CardContent>
    </Card>
  );
}
