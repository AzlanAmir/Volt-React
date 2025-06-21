// Navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
function Navbar({ setSidebarOpen }) {
  return (
    <div className="bg-gray-800 px-4 py-3 shadow-md flex justify-between items-center lg:hidden">
        <FontAwesomeIcon icon={faReact} className="text-blue-400 text-2xl"/>
      <button onClick={() => setSidebarOpen(true)}>
        <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
      </button>
    </div>
  );
}

export default Navbar;