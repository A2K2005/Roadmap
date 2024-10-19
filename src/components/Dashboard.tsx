import React from 'react';
import CourseRecommendation from './CourseRecommendation';
import Roadmap from './Roadmap';

interface DashboardProps {
  preferences: string[];
}

const Dashboard: React.FC<DashboardProps> = ({ preferences }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Your Learning Dashboard</h2>
      {preferences.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CourseRecommendation preferences={preferences} />
          <Roadmap preferences={preferences} />
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Select your learning preferences to get started</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;