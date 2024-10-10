import React from 'react';

const ExerciseSearchPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-11/12 md:w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Discover New Exercises</h2>

        <form className="space-y-4">
          <label>Search for Exercise</label>
          <input type="text" className="border rounded p-2 w-full" />

          <label>Muscle Group</label>
          <select className="border rounded p-2 w-full">
            <option>Upper Body</option>
            <option>Lower Body</option>
            <option>Core</option>
            <option>Full Body</option>
          </select>

          <label>Exercise Type</label>
          <select className="border rounded p-2 w-full">
            <option>Strength</option>
            <option>Cardio</option>
            <option>Flexibility</option>
            <option>Yoga</option>
          </select>

          <button className="bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 w-full">
            Search
          </button>
        </form>

        {/* Recent Searches Section */}
        <div className="mt-6">
          <h3 className="font-bold mb-4">Recent Searches</h3>
          <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md">Bicep Curl</div>
          <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md">Squats</div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSearchPage;
