import { ChevronLeft, ChevronRight } from 'lucide-react';
import calendarData from '../../../data/calendarData';

const CalendarView = () => {
  const { month, days, calendarAppointments } = calendarData;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Calendar Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">{month}</h2>
        <div className="flex space-x-1 sm:space-x-2">
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-600">
            <ChevronLeft size={18} />
          </button>
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-600">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Calendar Grid - Made responsive */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
        {/* Day Names */}
        {days.map((day) => (
          <div key={day.dayNum} className="text-center">
            <div className="text-xs sm:text-sm text-gray-500">{day.dayName}</div>
            <div className="text-base sm:text-lg font-semibold mt-1">{day.dayNum}</div>
          </div>
        ))}
        
       
        {days.map((day) => (
          <div key={`times-${day.dayNum}`} className="space-y-1 sm:space-y-2 mt-1 sm:mt-2 overflow-y-auto max-h-20 sm:max-h-none">
            {day.appointments.map((time, index) => (
              <div
                key={`${day.dayNum}-${time}`}
                className={`text-[10px] sm:text-xs py-0.5 sm:py-1 px-1 sm:px-2 rounded-md text-center ${
                  day.dayNum === 26 && time === '09:00' 
                    ? 'bg-indigo-600 text-white'
                    : day.dayNum === 27 && time === '12:00'
                    ? 'bg-indigo-600 text-white'
                    : day.dayNum === 30 && time === '12:00'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Calendar Appointments - Responsive grid on larger screens */}
      <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
        {calendarAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-2 sm:p-4 rounded-lg flex items-start space-x-2 sm:space-x-3"
            style={{ backgroundColor: `${appointment.color}20` }}
          >
            <div 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: appointment.color }}
            >
              <img 
                src={appointment.title === "Dentist" 
                  ? "https://cdn-icons-png.flaticon.com/512/2865/2865758.png" 
                  : "https://cdn-icons-png.flaticon.com/512/2839/2839413.png"} 
                alt={appointment.title}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-gray-800">{appointment.title}</h3>
              <div className="text-xs sm:text-sm text-gray-500">
                <span>{appointment.time}</span>
                <p className="text-xs truncate">{appointment.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
