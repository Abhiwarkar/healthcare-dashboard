import { ChevronDown } from 'lucide-react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-2 bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-gray-200 w-fit">
          <span className="text-xs sm:text-sm text-gray-600">This Week</span>
          <ChevronDown size={16} className="text-gray-500" />
        </div>
      </div>
      
      {/* Main Dashboard Grid - Responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Anatomy and Health Status Section */}
          <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="flex-1 mb-4 md:mb-0">
                <AnatomySection />
              </div>
              <div className="w-full md:w-1/3">
                <HealthStatusCards />
              </div>
            </div>
          </div>
          
          {/* Activity Section */}
          <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm">
            <ActivityFeed />
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Calendar Section */}
          <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm">
            <CalendarView />
          </div>
          
          {/* Upcoming Schedule Section */}
          <div className="bg-white p-3 sm:p-6 rounded-xl shadow-sm">
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
