import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Profile({ setSidebarOpen }) {
  return (
    <div className="bg-white px-4 py-3 shadow-md flex justify-between items-center">
      {/* Only visible on small screens */}
      <div className="ml-auto lg:hidden">
        <button onClick={() => setSidebarOpen(true)}>
          <FontAwesomeIcon icon={faBars} className="text-gray-800 text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Profile;
