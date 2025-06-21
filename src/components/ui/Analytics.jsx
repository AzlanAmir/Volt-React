import React from 'react';
import Barchart from './BarChart';

const Analytics = () => {
  const stats = [
    { title: 'Total Users', value: '12,350', change: '+5.2%', trend: 'up' },
    { title: 'Monthly Revenue', value: 'PKR 1,250,000', change: '+3.1%', trend: 'up' },
    { title: 'Active Sessions', value: '872', change: '-2.4%', trend: 'down' },
    { title: 'Bounce Rate', value: '38.6%', change: '-1.2%', trend: 'down' },
  ];

  const trafficData = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 65 },
    { label: 'Wed', value: 50 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 30 },
    { label: 'Sat', value: 90 },
    { label: 'Sun', value: 60 },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Analytics Overview</h2>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h4 className="text-sm font-semibold text-gray-500 mb-1">{stat.title}</h4>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p
              className={`text-sm font-medium mt-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change} {stat.trend === 'up' ? '↑' : '↓'}
            </p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-gray-50 p-6 h-[600px] rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Weekly Traffic</h3>
        {/* <div className="flex items-end space-x-4 h-40">
          {trafficData.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="w-8 bg-blue-500 rounded-t"
                style={{ height: `${day.value * 1.2}px` }}
                title={`${day.value} visits`}
              ></div>
              <span className="mt-2 text-sm text-gray-600">{day.label}</span>
            </div>
          ))}
        </div> */}
          <Barchart />
              </div>
                    

    </div>
  );
};

export default Analytics;
