import React from 'react';
import { BookOpen } from 'lucide-react';

interface CourseRecommendationProps {
  preferences: string[];
}

const CourseRecommendation: React.FC<CourseRecommendationProps> = ({ preferences }) => {
  const getCourseRecommendations = (prefs: string[]) => {
    const courses = {
      'Data Science': ['Introduction to Python', 'Data Analysis with Pandas', 'Machine Learning Fundamentals'],
      'DevOps': ['Docker Essentials', 'Kubernetes for Beginners', 'CI/CD Pipelines'],
      'Web Development': ['HTML & CSS Mastery', 'JavaScript Fundamentals', 'React.js Bootcamp'],
      'Machine Learning': ['Linear Algebra for ML', 'Neural Networks and Deep Learning', 'TensorFlow in Practice'],
    };

    return prefs.flatMap((pref) => courses[pref as keyof typeof courses] || []);
  };

  const recommendedCourses = getCourseRecommendations(preferences);

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Courses</h3>
      <ul className="space-y-2">
        {recommendedCourses.map((course, index) => (
          <li key={index} className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
            <BookOpen className="text-primary-500 mr-3 flex-shrink-0" size={20} />
            <span className="text-sm md:text-base">{course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseRecommendation;