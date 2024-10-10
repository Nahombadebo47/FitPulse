import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png'; // Make sure to use your logo path

const HomePage = () => {
  // State for fitness stats
  const [stats, setStats] = useState({
    calories: 1200,
    distance: 5, // kilometers
    steps: 10000,
  });

  // State for recent and upcoming workouts
  const [recentWorkouts, setRecentWorkouts] = useState([
    { name: 'Full Body Workout', timeAgo: '2 days ago' },
    { name: 'Cardio', timeAgo: '1 day ago' },
  ]);

  const [upcomingWorkouts, setUpcomingWorkouts] = useState([
    { name: 'Yoga', time: 'Tomorrow' },
    { name: 'HIIT', time: 'In 2 days' },
  ]);

  // Dummy useEffect to simulate fetching data from an API in the future
  useEffect(() => {
    // Simulate API call to fetch data for stats and workouts
  }, []);

  return (
    <div className="min-h-screen w-screen flex justify-center bg-gray-100">
      {/* Container to control max width and center content */}
      <div className="w-full max-w-5xl flex flex-col items-center p-4">
        {/* Top Section with Logo and Greeting */}
        <div className="w-full flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-12" />
            <h1 className="text-xl font-bold ml-4">Ready for your Workout today?</h1>
          </div>
          <div>
            {/* Profile Icon Placeholder */}
            <span className="w-10 h-10 rounded-full bg-gray-400 inline-block"></span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center w-full">
            {/* Icon Placeholder */}
            <div className="w-8 h-8 bg-gray-300 rounded-full mb-2"></div> {/* Replace this with a calorie icon */}
            <p className="text-lg font-bold">{stats.calories}</p>
            <p className="text-gray-600">Calories Burned</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center w-full">
            {/* Icon Placeholder */}
            <div className="w-8 h-8 bg-gray-300 rounded-full mb-2"></div> {/* Replace this with a distance icon */}
            <p className="text-lg font-bold">{stats.distance} km</p>
            <p className="text-gray-600">Distance Traveled</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center w-full">
            {/* Icon Placeholder */}
            <div className="w-8 h-8 bg-gray-300 rounded-full mb-2"></div> {/* Replace this with a steps icon */}
            <p className="text-lg font-bold">{stats.steps}</p>
            <p className="text-gray-600">Steps Taken</p>
          </div>
        </div>

        {/* Log Your Workout Section */}
        <div className="w-full bg-yellow-100 shadow-lg rounded-lg p-4 flex justify-between items-center mb-6">
          <p className="font-semibold">Log Your Workout</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Log</button>
        </div>

        {/* Recent Workouts Section */}
        <div className="w-full mb-6">
          <h2 className="font-bold mb-4">Recent Workouts</h2>
          {recentWorkouts.map((workout, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 flex justify-between items-center mb-4">
              <p>{workout.name}</p>
              <span className="text-gray-500">{workout.timeAgo}</span>
            </div>
          ))}
        </div>

        {/* Upcoming Workouts Section */}
        <div className="w-full mb-6">
          <h2 className="font-bold mb-4">Upcoming Workouts</h2>
          {upcomingWorkouts.map((workout, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 flex justify-between items-center mb-4">
              <p>{workout.name}</p>
              <span className="text-gray-500">{workout.time}</span>
            </div>
          ))}
        </div>

        {/* Inspire Your Journey Section */}
        <div className="w-full bg-yellow-100 shadow-lg rounded-lg p-4 text-center">
          <p>"The only bad workout is the one that didn’t happen."</p>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">More</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
