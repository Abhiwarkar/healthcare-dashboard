import { Search } from 'lucide-react';

const AnatomySection = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center">
   
      <div className="absolute top-0 right-0 z-10">
        <button className="p-1.5 sm:p-2 rounded-full bg-gray-100">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
        </button>
      </div>
      
     
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
       
        <img 
          src="/images/anatomy.jpg" 
          alt="Human Anatomy" 
          className="h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://static.vecteezy.com/system/resources/previews/002/896/807/original/male-muscular-system-front-view-free-vector.jpg";
          }}
        />
        
 
        <div 
          className="absolute"
          style={{ top: '30%', right: '35%' }}
        >
          <div 
            className="text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center"
            style={{ backgroundColor: '#3F51B5' }}
          >
            <span className="mr-1">❤️</span>
            <span className="whitespace-nowrap">Healthy Heart</span>
          </div>
        </div>
        
   
        <div 
          className="absolute"
          style={{ top: '75%', left: '35%' }}
        >
          <div 
            className="text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full flex items-center"
            style={{ backgroundColor: '#00C2CB' }}
          >
            <span className="mr-1">🦵</span>
            <span className="whitespace-nowrap">Healthy Leg</span>
          </div>
        </div>
      </div>
      
 
      <div className="w-full mt-2 sm:mt-4">
        <div className="relative h-1 bg-gray-200 rounded-full">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;

