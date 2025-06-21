import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faAngular,
  faVuejs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const items = [
  {
    title: 'Rocket - SaaS Template',
    percent: 34,
    icon: faBootstrap,
    color: 'bg-purple-500',
  },
  {
    title: 'Pixel - Design System',
    percent: 60,
    icon: faAngular,
    color: 'bg-red-500',
  },
  {
    title: 'Spaces - Listings Template',
    percent: 45,
    icon: faVuejs,
    color: 'bg-teal-600',
  },
  {
    title: 'Stellar - Dashboard',
    percent: 35,
    icon: faReact,
    color: 'bg-blue-600',
  },
  {
    title: 'Volt - Dashboard',
    percent: 34,
    icon: faBootstrap,
    color: 'bg-purple-500',
  },
];

function ProgressTrack() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Progress track</h2>

      {/* Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            {/* Row: icon + title + % */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl"
                  style={{ color: item.color.replace('bg-', '').replace('-500', '') }}
                />
                <span className="text-sm font-semibold text-gray-800">{item.title}</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{item.percent} %</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-gray-200 rounded">
              <div
                className={`h-1.5 rounded ${item.color}`}
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTrack;


