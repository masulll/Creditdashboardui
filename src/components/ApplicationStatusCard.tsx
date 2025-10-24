import { FileCheck, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ApplicationStatusCardProps {
  total: number;
  approved: number;
  rejected: number;
  pending: number;
}

export function ApplicationStatusCard({
  total,
  approved,
  rejected,
  pending,
}: ApplicationStatusCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-gray-600 text-sm mb-1">Total Pengajuan Kredit</p>
            <h3 className="text-gray-900">{total}</h3>
            <p className="text-gray-500 text-sm mt-1">Aplikasi kredit</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
            <FileCheck className="w-6 h-6 text-[#0d6efd]" />
          </div>
        </div>

        {/* Status Breakdown */}
        <div className="space-y-3 pt-3 border-t border-gray-100 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 text-sm">Approved</span>
            </div>
            <span className="text-green-600">{approved}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-600" />
              <span className="text-gray-700 text-sm">Rejected</span>
            </div>
            <span className="text-red-600">{rejected}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              <span className="text-gray-700 text-sm">Pending</span>
            </div>
            <span className="text-orange-600">{pending}</span>
          </div>
        </div>
          <button className="w-full mt-4 px-4 py-2 bg-[#0d6efd] text-white rounded-lg hover:bg-blue-700 transition-colors text-center text-sm">
              Lihat Pengajuan
            </button>
      </CardContent>
    </Card>
  );
}
