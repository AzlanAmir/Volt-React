import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine,
  faCashRegister,
  faGlobe,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons'
import ProgressChart from './ProgressChart'

function Card() {
  return (
    <div className="bg-white px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Customers Card */}
        <div className="bg-white rounded-xl shadow p-4 flex justify-around items-center space-x-4">
          <FontAwesomeIcon icon={faChartLine} className="text-4xl text-gray-700" />
          <div className="flex flex-col">
            <h4 className="text-gray-700 text-sm">Customers</h4>
            <h2 className="text-2xl font-semibold text-gray-900">345k</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feb 1 - Apr 1, <FontAwesomeIcon icon={faGlobe} /> Worldwide
            </p>
            <p className="text-green-500 text-sm">
              18.2% <span className="text-gray-500">Since last month</span>
            </p>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-around space-x-4">
          <FontAwesomeIcon icon={faCashRegister} className="text-4xl text-gray-700" />
          <div className="flex flex-col">
            <h4 className="text-gray-700 text-sm">Revenue</h4>
            <h2 className="text-2xl font-semibold text-gray-900">$43,594</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Feb 1 - Apr 1, <FontAwesomeIcon icon={faGlobe} /> Worldwide
            </p>
            <p className="text-green-500 text-sm">
              28.4% <span className="text-gray-500">Since last month</span>
            </p>
          </div>
        </div>

        {/* Traffic Share Card */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-around space-x-4">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex-shrink-0">
            <ProgressChart />
          </div>
          <div className="flex flex-col gap-2 text-left text-sm">
            <h4 className="text-gray-700 text-sm">Traffic Share</h4>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faDesktop} className="text-sky-500" />
              <span>Desktop 60%</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMobileAlt} className="text-black" />
              <span>Mobile Web 30%</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTabletAlt} className="text-teal-500" />
              <span>Tablet Web 10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
