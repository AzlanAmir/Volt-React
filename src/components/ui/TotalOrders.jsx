import React from 'react'
import Barchart from './BarChart'
function TotalOrders() {
  return (
     <div className="bg-white shadow-md rounded-xl p-6">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-6">
        {/* Left Content */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Total Orders</h2>
          <p className="text-3xl font-semibold text-gray-900">452</p>
          <p className="text-green-600 text-sm mt-1">+18.2%</p>
        </div>

        {/* Right Dots */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span className="text-sm text-gray-700">July</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-700">August</span>
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="h-40 rounded-lg flex items-center justify-center text-gray-400">
        {/* Replace this with your actual chart */}
        <Barchart/>
      </div>
    </div>
  )
}

export default TotalOrders


