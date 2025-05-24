import healthData from '../../../data/healthData';

const HealthStatusCards = () => {
  const { healthStatusCards } = healthData;

  return (
    <div className="space-y-2 sm:space-y-4">
      {healthStatusCards.map((card) => (
        <div key={card.id} className="p-2 sm:p-3 rounded-lg">
          <div className="flex items-center mb-0.5 sm:mb-1">
            <span className="mr-1.5 sm:mr-2 text-base sm:text-xl">{card.icon}</span>
            <h3 className="text-sm sm:text-lg font-medium text-gray-800">{card.name}</h3>
          </div>
          <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            Date: {card.date}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div
              className={`h-1.5 sm:h-2 rounded-full ${
                card.status === 'good' ? 'bg-green-500' : 'bg-orange-500'
              }`}
              style={{ width: `${card.statusPercentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;

