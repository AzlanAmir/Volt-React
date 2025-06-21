import React from 'react';

const Overview = () => {
  const users = [
    { name: 'John Doe', role: 'Administrator', status: 'Active' },
    { name: 'Jane Smith', role: 'Manager', status: 'Inactive' },
    { name: 'Alice Johnson', role: 'Editor', status: 'Active' },
    { name: 'Bob Williams', role: 'Viewer', status: 'Pending' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Overview</h1>
        <p className="text-gray-600 mb-6">
          Welcome to your admin dashboard. Here is an overview of key metrics and users.
        </p>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-blue-800">1,245</h2>
            <p className="text-sm text-blue-700">Total Users</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-green-800">320</h2>
            <p className="text-sm text-green-700">Orders</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-yellow-800">$8,900</h2>
            <p className="text-sm text-yellow-700">Revenue</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold text-red-800">18</h2>
            <p className="text-sm text-red-700">Pending Issues</p>
          </div>
        </div>

        {/* User Table */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Team Members</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-2 border-b">Name</th>
              <th className="text-left p-2 border-b">Role</th>
              <th className="text-left p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-2 border-b">{user.name}</td>
                <td className="p-2 border-b">{user.role}</td>
                <td className="p-2 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-200 text-green-800'
                        : user.status === 'Inactive'
                        ? 'bg-red-200 text-red-800'
                        : 'bg-yellow-200 text-yellow-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer Note */}
        <p className="mt-8 text-sm text-gray-500">
          Last updated: June 21, 2025 · Version 1.0.0
        </p>
      </div>
    </div>
  );
};

export default Overview;
