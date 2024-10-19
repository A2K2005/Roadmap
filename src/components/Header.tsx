import React from 'react';
import { Compass, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-2 md:hidden">
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
            <Compass className="h-8 w-8 text-primary-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Course Compass</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Courses</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Profile</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;