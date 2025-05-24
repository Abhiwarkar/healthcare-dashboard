import navigationLinks from '../../data/navigationLinks';

const Sidebar = () => {
  return (
    <aside className="w-64 max-w-full bg-white border-r p-4 sm:p-6 h-full">
      <div className="space-y-6">
        {/* General Heading */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
            General
          </h3>
        </div>
        
        {/* Navigation Links */}
        <nav className="space-y-1">
          {navigationLinks
            .filter(link => link.name !== 'Chat' && link.name !== 'Support' && link.name !== 'Setting')
            .map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href="#"
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                    link.active
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${link.active ? 'text-indigo-600' : 'text-gray-500'}`} />
                  <span className="truncate">{link.name}</span>
                </a>
              );
            })}
        </nav>
        
        {/* Tools Section */}
        <div>
          <h3 className="text-xs uppercase text-gray-500 font-semibold tracking-wider mt-6">
            Tools
          </h3>
          <nav className="mt-2 space-y-1">
            {navigationLinks
              .filter(link => link.name === 'Chat' || link.name === 'Support' || link.name === 'Setting')
              .map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.id}
                    href="#"
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                      link.active
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className={`mr-3 h-5 w-5 flex-shrink-0 ${link.active ? 'text-indigo-600' : 'text-gray-500'}`} />
                    <span className="truncate">{link.name}</span>
                  </a>
                );
              })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;