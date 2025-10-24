import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CompanyCard } from './components/CompanyCard';
import { ApplicationStatusCard } from './components/ApplicationStatusCard';
import { RadarScoreCard } from './components/RadarScoreCard';
import { ProgressCard } from './components/ProgressCard';
import { StatCard } from './components/StatCard';
import { DashboardCharts } from './components/DashboardCharts';
import { Award } from 'lucide-react';

// Mock data - in Laravel, this would come from your API/controller
// Example: $company = Company::with('profile')->find($id);
const companyData = {
  name: 'PT Maju Bersama Sejahtera',
  description: 'Perusahaan bergerak di bidang manufaktur dan distribusi produk elektronik dengan pengalaman 15 tahun.',
  industry: 'Manufaktur',
  location: 'Jakarta',
};

// Example: $applications = Application::where('company_id', $id)->get();
const applicationData = {
  total: 24,
  approved: 18,
  rejected: 3,
  pending: 3,
};

// Example: $psychometricScore = PsychometricTest::calculateScore($companyId);
const psychometricData = {
  totalScore: 418,
  maxScore: 500,
  radarData: [
    { category: 'Kreativitas', score: 85, fullMark: 100 },
    { category: 'Kepemimpinan', score: 78, fullMark: 100 },
    { category: 'Resiliensi', score: 92, fullMark: 100 },
    { category: 'Integritas', score: 88, fullMark: 100 },
    { category: 'Inisiatif', score: 75, fullMark: 100 },
  ],
};

// Example: $progress = ProfileCompletion::check($companyId);
const progressData = {
  sections: [
    { label: 'Profil Diri', completed: true },
    { label: 'Profil Usaha', completed: true },
    { label: 'Kinerja Keuangan', completed: false },
    { label: 'Karakter Kewirausahaan', completed: true },
  ],
};

// Example: $externalScore = ExternalScoring::getLatest($companyId);
const externalScoreData = {
  value: 'A+',
  subtitle: 'BI Checking',
  trend: { value: '1 grade', isPositive: true },
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Bootstrap-style Container */}
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h2 className="text-gray-900 mb-2">Dashboard Overview</h2>
              <p className="text-gray-600">
                Selamat datang! Berikut adalah ringkasan penilaian kredit Anda.
              </p>
            </div>

            {/* Summary Section - Bootstrap Grid Pattern */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Company Resume Card */}
              <CompanyCard
                companyName={companyData.name}
                description={companyData.description}
                industry={companyData.industry}
                location={companyData.location}
              />

              
               <ProgressCard sections={progressData.sections} />

              {/* Application Status Card */}
              <ApplicationStatusCard
                total={applicationData.total}
                approved={applicationData.approved}
                rejected={applicationData.rejected}
                pending={applicationData.pending}
              />

              {/* Psychometric Score Card with Radar */}
              <RadarScoreCard
                totalScore={psychometricData.totalScore}
                maxScore={psychometricData.maxScore}
                radarData={psychometricData.radarData}
              />

             
              
            </div>

            {/* Second Row: External Score + Laravel Tips */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"> */}
              {/* External Scoring Card */}
              {/* <StatCard
                title="Skor Eksternal"
                value={externalScoreData.value}
                subtitle={externalScoreData.subtitle}
                trend={externalScoreData.trend}
                icon={Award}
                iconColor="text-green-600"
                iconBgColor="bg-green-100"
              /> */}
              {/* Laravel Integration Note - Spans 3 columns */}
              {/* <div className="sm:col-span-1 lg:col-span-3">
             
                <div className="h-full p-4 bg-blue-50 border border-blue-200 rounded-lg flex flex-col justify-center">
                  <h3 className="text-blue-900 mb-2 text-sm">
                    🚀 Laravel Blade Integration Tips
                  </h3>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Replace <code className="px-1 bg-blue-100 rounded">companyData</code> with <code className="px-1 bg-blue-100 rounded">$company</code></li>
                    <li>• Replace <code className="px-1 bg-blue-100 rounded">applicationData</code> with <code className="px-1 bg-blue-100 rounded">$applications</code></li>
                    <li>• Use <code className="px-1 bg-blue-100 rounded">@foreach($sections as $section)</code> for progress tracking</li>
                    <li>• Use <code className="px-1 bg-blue-100 rounded">@json($radarData)</code> for psychometric chart</li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Charts Section */}
            <DashboardCharts />
          </div>
        </main>
      </div>
    </div>
  );
}
