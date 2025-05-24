import appointments from '../../../data/appointments';

const ActivityFeed = () => {
  const { activityData } = appointments;
  
  const maxAppointments = Math.max(
    ...activityData.dailyActivity.map(day => 
      day.appointments.reduce((sum, apt) => sum + apt.duration, 0)
    )
  );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-0">Activity</h2>
        <div className="text-xs sm:text-sm text-gray-500">
          {activityData.weeklyAppointmentsCount} appointments on this week
        </div>
      </div>
      
      {/* Activity Chart - Responsive height */}
      <div className="flex items-end h-24 sm:h-32 space-x-1 sm:space-x-4 mt-2 sm:mt-0">
        {activityData.dailyActivity.map((day, index) => {
          const totalDuration = day.appointments.reduce(
            (sum, apt) => sum + apt.duration, 0
          );
          
          return (
            <div key={day.day} className="flex-1 flex flex-col items-center">
              <div className="flex space-x-0.5 sm:space-x-1 h-20 sm:h-24 items-end mb-1 sm:mb-2">
                {day.appointments.map((apt, aptIndex) => {
                  const height = (apt.duration / maxAppointments) * 100;
                  return (
                    <div
                      key={`${day.day}-${aptIndex}`}
                      className={`w-1.5 sm:w-3 rounded-t-sm ${aptIndex % 2 === 0 ? 'bg-primary' : 'bg-indigo-600'}`}
                      style={{ height: `${height}%` }}
                    ></div>
                  );
                })}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500">{day.day}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;

