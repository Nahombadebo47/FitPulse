import React from 'react';

const WorkoutHistoryPage = () => {
  const workoutHistory = [
    { name: 'Full-body Workout', date: 'January 11, 2024', duration: '1hr 15min', calories: '540 kcal' },
    { name: 'Cardio', date: 'January 10, 2024', duration: '30min', calories: '350 kcal' },
    { name: 'Legs', date: 'January 8, 2024', duration: '45min', calories: '410 kcal' },
    { name: 'Yoga', date: 'January 7, 2024', duration: '30min', calories: '110 kcal' }
  ];

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col items-center">
      <div className="w-11/12 md:w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Workout History</h2>
        
        {workoutHistory.map((workout, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md">
            <h3 className="font-bold">{workout.name}</h3>
            <p>Date: {workout.date}</p>
            <p>Duration: {workout.duration}</p>
            <p>Calories: {workout.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutHistoryPage;
