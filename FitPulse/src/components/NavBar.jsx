import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // Import the logo

// Import the icons
import HomeIcon from '../assets/Home.png';
import ProfileIcon from '../assets/Profile.png';
import ProgressIcon from '../assets/Progress.png';
import HistoryIcon from '../assets/History.png';
import LogIcon from '../assets/Log.png';
import SearchIcon from '../assets/Search.png';

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
        <nav className="flex flex-col mt-10 space-y-4">
          {/* Each Link with icon, text, and hover effect */}
          <Link to="/home" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={HomeIcon} alt="Home Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Home</span>}
            {/* Hover Effect */}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Home
              </span>
            )}
          </Link>

          <Link to="/profile" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={ProfileIcon} alt="Profile Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Profile</span>}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Profile
              </span>
            )}
          </Link>

          <Link to="/progress-tracking" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={ProgressIcon} alt="Progress Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Progress Tracking</span>}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Progress Tracking
              </span>
            )}
          </Link>

          <Link to="/workout-history" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={HistoryIcon} alt="Workout History Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Workout History</span>}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Workout History
              </span>
            )}
          </Link>

          <Link to="/workout-log" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={LogIcon} alt="Workout Log Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Log Workout</span>}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Log Workout
              </span>
            )}
          </Link>

          <Link to="/exercise-search" className="group flex items-center justify-center md:justify-start text-white relative">
            <img src={SearchIcon} alt="Exercise Search Icon" className="w-8 h-8" />
            {isExpanded && <span className="ml-4">Exercise Search</span>}
            {!isExpanded && (
              <span className="absolute left-16 ml-2 text-sm bg-gray-700 text-white rounded py-1 px-2 opacity-0 group-hover:opacity-100">
                Exercise Search
              </span>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
