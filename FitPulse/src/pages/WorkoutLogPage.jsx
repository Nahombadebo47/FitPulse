import React from 'react';

const WorkoutLogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-11/12 md:w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Log New Workout</h2>

        <form className="space-y-4">
          <label>Date</label>
          <input type="date" className="border rounded p-2 w-full" />

          <label>Exercise Type</label>
          <select className="border rounded p-2 w-full">
            <option>Cardio</option>
            <option>Strength</option>
            <option>Flexibility</option>
            <option>Yoga</option>
          </select>

          <label>Duration (minutes)</label>
          <input type="number" className="border rounded p-2 w-full" />

          <label>Intensity</label>
          <input type="range" min="1" max="10" className="w-full" />

          <button className="bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 w-full">
            Save Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutLogPage;
