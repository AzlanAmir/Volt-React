import React from 'react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Settings</h2>

      {/* Profile Settings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              value="Ali Raza"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value="ali.raza@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
            />
          </div>
        </div>
      </section>

      {/* Notification Settings */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email Notifications</span>
            <input type="checkbox" checked className="w-5 h-5 text-blue-600" readOnly />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Alerts</span>
            <input type="checkbox" className="w-5 h-5 text-blue-600" readOnly />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">App Notifications</span>
            <input type="checkbox" checked className="w-5 h-5 text-blue-600" readOnly />
          </div>
        </div>
      </section>

      {/* Privacy Settings */}
      <section>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Privacy</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Show profile to others</span>
            <input type="checkbox" checked className="w-5 h-5 text-blue-600" readOnly />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Two-factor authentication</span>
            <input type="checkbox" className="w-5 h-5 text-blue-600" readOnly />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
