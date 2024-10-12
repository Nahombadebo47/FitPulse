import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from 'recharts';
import { useAuthStore } from '../Store/useAuthStore';

const ProgressTrackingPage = () => {
  const { darkMode, dailyStats } = useAuthStore();

  // Sample data for calories (weekly - Monday to Friday)
  const [caloriesData, setCaloriesData] = useState([
    { day: 'Monday', calories: 1200 },
    { day: 'Tuesday', calories: 1100 },
    { day: 'Wednesday', calories: 900 },
    { day: 'Thursday', calories: 1000 },
    { day: 'Friday', calories: 1300 },
  ]);

  // Sample data for distance covered and steps taken (weekly - Monday to Friday)
  const [distanceData, setDistanceData] = useState([
    { day: 'Monday', distance: 5, steps: 8000 },
    { day: 'Tuesday', distance: 4.5, steps: 7500 },
    { day: 'Wednesday', distance: 6, steps: 9000 },
    { day: 'Thursday', distance: 4, steps: 7000 },
    { day: 'Friday', distance: 5.2, steps: 8500 },
  ]);

  // Update the daily stats from Zustand
  useEffect(() => {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    // Update caloriesData with daily stats
    setCaloriesData((prevData) =>
      prevData.map((item) =>
        item.day === currentDay ? { ...item, calories: dailyStats.calories } : item
      )
    );

    // Update distanceData with daily stats
    setDistanceData((prevData) =>
      prevData.map((item) =>
        item.day === currentDay
          ? { ...item, distance: dailyStats.distance, steps: dailyStats.steps }
          : item
      )
    );
  }, [dailyStats]);

  return (
    <div className={`min-h-screen w-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex flex-col items-center`}>
      <div className={`w-11/12 md:w-1/2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md rounded-lg p-8`}>
        <h2 className="text-2xl font-bold mb-4">Your Fitness Progress</h2>

        {/* Calories Bar Chart */}
        <div className="mb-6">
          <h3 className="text-xl mb-2">Calories Burned (Weekly)</h3>
          <BarChart width={500} height={300} data={caloriesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="calories" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Distance and Steps Line Chart */}
        <div>
          <h3 className="text-xl mb-2">Distance Covered & Steps Taken (Weekly)</h3>
          <LineChart width={500} height={300} data={distanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="distance" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="steps" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPage;
