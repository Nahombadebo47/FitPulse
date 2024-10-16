import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'; // Use your actual logo path
import HomeIcon from '../assets/Home.png'; // Use your actual icon paths
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
        className={`bg-blue-900 h-screen fixed top-0 left-0 flex flex-col ${
          isExpanded ? 'w-48' : 'w-16'
        } duration-300 z-50 md:w-16`} // Ensure different behavior for medium (md) screens
        style={{ maxWidth: '100vw' }} // Prevents covering entire screen
      >
        {/* Logo and Hamburger */}
        <div className="flex items-center justify-between px-4 py-5">
          <Link to="/home">
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-blue-500 text-2xl focus:outline-none"
          >
            {isExpanded ? '×' : '≡'}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-between mt-10">
          <Link
            to="/home"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={HomeIcon}
              alt="Home Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Home
              </span>
            )}
          </Link>

          <Link
            to="/profile"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={ProfileIcon}
              alt="Profile Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Profile
              </span>
            )}
          </Link>

          <Link
            to="/progress-tracking"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={ProgressIcon}
              alt="Progress Tracking Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Progress Tracking
              </span>
            )}
          </Link>

          <Link
            to="/workout-history"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={HistoryIcon}
              alt="Workout History Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Workout History
              </span>
            )}
          </Link>

          <Link
            to="/workout-log"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={LogIcon}
              alt="Workout Log Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Log Workout
              </span>
            )}
          </Link>

          <Link
            to="/exercise-search"
            className="group flex items-center text-white py-4 hover:bg-blue-700 w-full px-4"
          >
            <img
              src={SearchIcon}
              alt="Exercise Search Icon"
              className="w-6 h-6 mr-3 group-hover:scale-110 duration-200"
            />
            {isExpanded && (
              <span className="group-hover:text-yellow-500 duration-200 block">
                Exercise Search
              </span>
            )}
          </Link>
        </nav>
      </div>

      {/* Main content wrapper to accommodate for the navbar */}
      <div className={`ml-${isExpanded ? '48' : '16'} flex-grow duration-300 md:ml-16`}> {/* Fixed for medium screens */}
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default NavBar;
