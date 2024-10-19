import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handlePreferencesSubmit = (preferences: string[]) => {
    setSelectedPreferences(preferences);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex-grow flex flex-col md:flex-row">
        <Sidebar 
          onSubmit={handlePreferencesSubmit} 
          isOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
        <main className="flex-grow p-4 md:p-6 overflow-auto">
          <Dashboard preferences={selectedPreferences} />
        </main>
      </div>
    </div>
  );
};

export default App;