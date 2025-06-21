import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 overflow-auto relative bg-white">
        {/* Topbar for small screens */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-black text-white shadow-md">
          <div className="text-lg font-semibold">Volt React</div>
          <button 
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors duration-200"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
