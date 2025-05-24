import { Search, Bell, Plus } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between border-b sticky top-0 z-30">
      {/* Logo */}
      <div className="text-primary text-xl sm:text-2xl font-bold">
        Healthcare.
      </div>

      {/* Search Bar and Notification - Responsive */}
      <div className="flex-1 max-w-xl mx-2 sm:mx-8 flex items-center">
        {/* Search Bar - Hidden on very small mobile, flex layout for responsive width */}
        <div className="relative flex-1 hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1.5 sm:py-2 w-full rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm sm:text-base"
          />
        </div>
        
        {/* Mobile search icon - only visible on very small screens */}
        <div className="sm:hidden mr-2">
          <button className="p-1.5 rounded-full bg-gray-100">
            <Search className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        
        {/* Notification Icon */}
        <div className="relative ml-2 sm:ml-4">
          <Bell className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-indigo-600 text-white rounded-full w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center text-[10px] sm:text-xs">
            1
          </span>
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* User Profile - Hidden on very small screens */}
        <div className="hidden xs:flex items-center space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User Avatar" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Add Button */}
        <button className="bg-indigo-600 text-white p-1.5 sm:p-2 rounded-md">
          <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
