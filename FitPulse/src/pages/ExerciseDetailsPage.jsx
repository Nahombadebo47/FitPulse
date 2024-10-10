import React from 'react';

const ExerciseDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-11/12 md:w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Biceps Curl</h2>

        <p className="mb-4">Instructions: Stand with a dumbbell in each hand, arms at your sides, and palms facing forward. Keep your elbows close to your torso. Curl the weights while contracting your biceps. Continue until your forearms are vertical and your biceps fully contracted. Slowly lower the dumbbells to the starting position.</p>

        <div className="space-y-4 mb-6">
          <div>
            <label>Sets: </label>
            <input type="number" className="border rounded p-2 w-16" value="3" />
          </div>
          <div>
            <label>Reps per Set: </label>
            <input type="number" className="border rounded p-2 w-16" value="10" />
          </div>
        </div>

        <label>Notes</label>
        <textarea className="border rounded p-2 w-full mb-6" rows="4"></textarea>

        <button className="bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 w-full">
          Add to Workout
        </button>
      </div>
    </div>
  );
};

export default ExerciseDetailsPage;
