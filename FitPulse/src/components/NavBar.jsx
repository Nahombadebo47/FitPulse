import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // Import your logo

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded); // Toggle between expanded and collapsed
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-blue-900 h-screen sticky top-0 flex flex-col ${
          isExpanded ? 'w-48' : 'w-16'
        } duration-300`}
      >
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between px-4 py-5">
         
          <button
            onClick={toggleMenu}
            className={`text-white text-2xl focus:outline-none ${
              isExpanded ? 'ml-auto' : 'ml-0'
            }`}
          >
            {isExpanded ? '×' : '≡'}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-between mt-10">
          <Link to="/workout-history" className="flex items-center text-white py-4">
            {/* Placeholder for actual icon */}
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              {/* Replace with your actual icon */}
              <img src="" alt="Workout History Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Workout History</span>}
          </Link>

          <Link to="/workout-log" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              {/* Replace with your actual icon */}
              <img src="" alt="Workout Log Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Workout Log</span>}
          </Link>

          <Link to="/progress-tracking" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              {/* Replace with your actual icon */}
              <img src="" alt="Progress Tracking Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Progress Tracking</span>}
          </Link>

          <Link to="/exercise-search" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              {/* Replace with your actual icon */}
              <img src="" alt="Exercise Search Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Exercise Search</span>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
