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
          <Link to="/home">
            <img src={Logo} alt="Logo" className={`h-8 ${isExpanded ? 'block' : 'hidden'}`} />
          </Link>
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
          <Link to="/home" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              <img src="" alt="Home Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Home</span>}
          </Link>

          <Link to="/profile" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              <img src="" alt="Profile Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Profile</span>}
          </Link>

          <Link to="/progress-tracking" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              <img src="" alt="Progress Tracking Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Progress Tracking</span>}
          </Link>

          <Link to="/workout-history" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              <img src="" alt="Workout History Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Workout History</span>}
          </Link>

          <Link to="/workout-log" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
              <img src="" alt="Workout Log Icon" className="w-6 h-6" />
            </span>
            {isExpanded && <span className="text-white">Log Workout</span>}
          </Link>

          <Link to="/exercise-search" className="flex items-center text-white py-4">
            <span className={`mr-3 ${isExpanded ? 'block' : 'hidden'}`}>
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
