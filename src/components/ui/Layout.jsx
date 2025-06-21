import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  const location = useLocation();

  // Detect if we are on /account route
  const isAccountPage = location.pathname === '/account';

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div
        className={`flex-1 overflow-auto ${
          isAccountPage ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
