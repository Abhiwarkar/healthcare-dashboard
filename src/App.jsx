import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'
import { Menu } from 'lucide-react'
import './index.css'
import '@styles/global.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <div className="flex flex-col h-screen bg-background">
      
      <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
    
      <div className="flex flex-1 overflow-hidden">
       
        <div className="block sm:hidden absolute z-20 top-20 left-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-white shadow-md"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
    
        <div 
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transform transition-transform duration-300 ease-in-out fixed z-10 sm:relative sm:translate-x-0 h-[calc(100vh-64px)] overflow-y-auto`}
        >
          <Sidebar />
        </div>
        
       
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-0 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        
       
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 w-full">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  )
}

export default App;