import React, { useState } from 'react';
import { Book, Code, Database, Layers } from 'lucide-react';

interface PreferenceInputProps {
  onSubmit: (preferences: string[]) => void;
}

const PreferenceInput: React.FC<PreferenceInputProps> = ({ onSubmit }) => {
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
    <div className="card">
      <h2 className="text-2xl font-semibold mb-6 text-primary">Select Your Preferences</h2>
      <div className="grid grid-cols-1 gap-4 mb-8">
        {preferences.map((pref) => (
          <button
            key={pref.name}
            onClick={() => togglePreference(pref.name)}
            className={`flex items-center justify-start p-4 rounded-lg transition-all duration-300 ${
              selectedPreferences.includes(pref.name)
                ? 'bg-primary text-white'
                : 'bg-background-light text-text hover:bg-opacity-80'
            }`}
          >
            <pref.icon className="mr-4" size={24} />
            {pref.name}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full btn btn-primary"
      >
        Generate Recommendations
      </button>
    </div>
  );
};

export default PreferenceInput;