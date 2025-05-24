import SimpleAppointmentCard from '../../SimpleAppointmentCard';
import appointments from '../../../data/appointments';

const UpcomingSchedule = () => {
  const { upcomingSchedule } = appointments;

  return (
    <div className="space-y-3 sm:space-y-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800">The Upcoming Schedule</h2>
      
      {upcomingSchedule.map((daySchedule) => (
        <div key={daySchedule.day} className="space-y-2 sm:space-y-3">
          <h3 className="text-xs sm:text-sm text-gray-500">On {daySchedule.day}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {daySchedule.appointments.map((appointment) => (
              <div key={appointment.id} className="w-full">
                <SimpleAppointmentCard
                  appointment={appointment}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
