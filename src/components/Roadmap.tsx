import React from 'react';
import { CheckCircle } from 'lucide-react';

interface RoadmapProps {
  preferences: string[];
}

const Roadmap: React.FC<RoadmapProps> = ({ preferences }) => {
  const getRoadmapSteps = (prefs: string[]) => {
    const steps = {
      'Data Science': [
        'Learn Python basics',
        'Master data manipulation with Pandas',
        'Understand statistical concepts',
        'Explore machine learning algorithms',
        'Practice with real-world datasets',
      ],
      'DevOps': [
        'Learn Linux fundamentals',
        'Master version control with Git',
        'Understand containerization with Docker',
        'Explore cloud platforms (AWS, Azure, or GCP)',
        'Implement CI/CD pipelines',
      ],
      'Web Development': [
        'Master HTML, CSS, and JavaScript',
        'Learn a frontend framework (e.g., React)',
        'Understand backend development with Node.js',
        'Explore databases (SQL and NoSQL)',
        'Build full-stack projects',
      ],
      'Machine Learning': [
        'Strengthen mathematics and statistics foundation',
        'Master Python for data science',
        'Understand machine learning algorithms',
        'Explore deep learning and neural networks',
        'Work on ML projects and competitions',
      ],
    };

    return prefs.flatMap((pref) => steps[pref as keyof typeof steps] || []);
  };

  const roadmapSteps = getRoadmapSteps(preferences);

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Learning Roadmap</h3>
      <ol className="relative border-l border-gray-200 ml-3">
        {roadmapSteps.map((step, index) => (
          <li key={index} className="mb-6 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary-100 rounded-full -left-4 ring-4 ring-white">
              <CheckCircle className="w-5 h-5 text-primary-600" />
            </span>
            <h4 className="font-medium text-gray-900 text-sm md:text-base">{step}</h4>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Roadmap;