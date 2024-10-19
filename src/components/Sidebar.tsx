import React, { useState } from 'react';
import { Book, Code, Database, Layers, X } from 'lucide-react';

interface SidebarProps {
  onSubmit: (preferences: string[]) => void;
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSubmit, isOpen, closeSidebar }) => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const preferences = [
    { name: 'Data Science', icon: Database },
    { name: 'DevOps', icon: Layers },
    { name: 'Web Development', icon: Code },
    { name: 'Machine Learning', icon: Book },
  ];

  const togglePreference = (preference: string) => {
    setSelectedPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference]
    );
  };

  const handleSubmit = () => {
    if (selectedPreferences.length > 0) {
      onSubmit(selectedPreferences);
    }
  };

  return (
    <aside className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white shadow-md fixed md:static inset-0 z-50 overflow-auto`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 md:hidden">
          <h2 className="text-lg font-semibold text-gray-700">Learning Preferences</h2>
          <button onClick={closeSidebar} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-2">
          {preferences.map((pref) => (
            <button
              key={pref.name}
              onClick={() => togglePreference(pref.name)}
              className={`w-full flex items-center p-2 rounded-md transition-colors ${
                selectedPreferences.includes(pref.name)
                  ? 'bg-primary-100 text-primary-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <pref.icon className="mr-2" size={18} />
              {pref.name}
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="w-full btn btn-primary mt-4"
        >
          Update Dashboard
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;