import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faChartLine, faClock } from '@fortawesome/free-solid-svg-icons'

function Acquisition() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Acquisition</h2>
      <p className="text-sm text-gray-600 mb-6">
        Tells you where your visitors originated from, such as search engines, social networks or website referrals.
      </p>

      {/* Bounce Rate */}
      <div className="flex items-center gap-4 mb-6">
        <FontAwesomeIcon icon={faChartBar} className="text-indigo-700 text-2xl" />
        <div>
          <p className="text-sm text-gray-500 font-medium">Bounce Rate</p>
          <p className="text-2xl font-semibold text-gray-900">33.50%</p>
        </div>
      </div>

      {/* Sessions */}
      <div className="flex items-center gap-4 mb-6">
        <FontAwesomeIcon icon={faChartLine} className="text-indigo-700 text-2xl" />
        <div>
          <p className="text-sm text-gray-500 font-medium">Sessions</p>
          <p className="text-2xl font-semibold text-gray-900">9,567</p>
        </div>
      </div>

      {/* Avg. Session Duration (Extra) */}
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faClock} className="text-indigo-700 text-2xl" />
        <div>
          <p className="text-sm text-gray-500 font-medium">Avg. Session Duration</p>
          <p className="text-2xl font-semibold text-gray-900">2m 43s</p>
        </div>
      </div>
    </div>
  )
}

export default Acquisition


