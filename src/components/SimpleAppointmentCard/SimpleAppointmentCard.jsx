const SimpleAppointmentCard = ({ appointment }) => {
  
  const getIconUrl = (title) => {
    const iconMap = {
      "Health checkup complete": "https://cdn-icons-png.flaticon.com/512/3004/3004458.png",
      "Ophthalmologist": "https://cdn-icons-png.flaticon.com/512/3344/3344325.png",
      "Cardiologist": "https://cdn-icons-png.flaticon.com/512/2863/2863614.png",
      "Neurologist": "https://cdn-icons-png.flaticon.com/512/2491/2491418.png"
    };
    
    return iconMap[title] || "https://cdn-icons-png.flaticon.com/512/3004/3004458.png";
  };
  
  return (
    <div 
      className="p-2 sm:p-4 rounded-lg overflow-visible"
      style={{ backgroundColor: appointment.color }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base break-normal whitespace-normal">
            {appointment.title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{appointment.time}</p>
        </div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
          <img 
            src={getIconUrl(appointment.title)} 
            alt={appointment.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;

