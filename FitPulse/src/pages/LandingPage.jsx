import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Outer Container */}
      <div className="bg-white rounded-lg shadow-lg w-11/12 xl:w-4/5 flex flex-col items-center">
        {/* Left Section: Logo */}
        <div className="bg-blue-900 flex flex-col justify-center items-center p-10 w-full">
          <div className="bg-white p-6 rounded-lg mb-6">
            <img src={Logo} alt="Fitpulse Logo" className="w-48 h-48" />
          </div>
        </div>

        {/* Right Section: Sign-up and Sign-in */}
        <div className="flex flex-col justify-center items-center p-10 w-full">
          <h2 className="text-2xl font-bold mb-6">Start your Fitness Journey Today</h2>
          <p className="text-gray-500 mb-6">Join Our Community of Fitness Enthusiasts</p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-blue-700 text-white py-2  px-8 rounded-full w-2/4 sm:w-3/4 md:w-2/4 hover:bg-blue-800 mb-4"
          >
            Join
          </button>
          <div className="border-t w-full mt-4 pt-4 text-center">
            <h3 className="text-gray-700 mb-4">Already a Member? Click Sign in</h3>
            <button
              onClick={() => navigate('/login')}
              className="bg-blue-700 text-white py-2 px-8 rounded-full w-2/4  sm:w-3/4 md:w-2/4 hover:bg-blue-800"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
