import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-11/12 md:w-1/2 bg-white shadow-md rounded-lg p-8">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
            {/* Placeholder for user avatar */}
            A.T
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">Andrews Thompson</h2>
            <p>Male, 29 years old</p>
            <p>Height: 170cm, Weight: 70kg</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <button className="w-full bg-blue-700 text-white py-2 rounded-full">Theme Selection</button>
          <button className="w-full bg-blue-700 text-white py-2 rounded-full">Notification Preferences</button>
          <button className="w-full bg-blue-700 text-white py-2 rounded-full">Privacy Settings</button>
          <button className="w-full bg-blue-700 text-white py-2 rounded-full">Manage Account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
