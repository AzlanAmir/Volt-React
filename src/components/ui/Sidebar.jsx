import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import {
  faChartPie, faEnvelope, faHandHoldingDollar, faGear,
  faCalendarDays, faMapPin, faTable, faFile, faBook,
  faBoxOpen, faRocket, faGreaterThan, faTimes,
  faTachometerAlt, faChartLine, faHeadset, faLayerGroup,faUserTie
} from '@fortawesome/free-solid-svg-icons';
import { AccountContext } from '../../context/AccountContext';

function Sidebar({ isOpen, setIsOpen }) {
  const [showTablesDropdown, setShowTablesDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showGettingStartedDropdown, setShowGettingStartedDropdown] = useState(false);
  const [showComponentsDropdown, setShowComponentsDropdown] = useState(false);
  const [showAccountOption, setShowAccountOption] = useState(false);
  const { account } = useContext(AccountContext);
  const navigate = useNavigate();

  const dropdowns = [
    {
      title: 'Tables', icon: faTable, show: showTablesDropdown,
      setShow: setShowTablesDropdown,
      items: ['Bootstrap Table', 'Pricing Table', 'Data Table']
    },
    {
      title: 'Page Examples', icon: faFile, show: showPagesDropdown,
      setShow: setShowPagesDropdown,
      items: ['Sign In', 'Sign Up', '404', 'Blank Page', 'Invoice']
    },
    {
      title: 'Getting Started', icon: faBook, show: showGettingStartedDropdown,
      setShow: setShowGettingStartedDropdown,
      items: ['Overview', 'Download', 'Installation', 'Quick Start']
    },
    {
      title: 'Components', icon: faBoxOpen, show: showComponentsDropdown,
      setShow: setShowComponentsDropdown,
      items: ['WidgetBox', 'CardPanel', 'Form Elements', 'Modals']
    }
  ];

  const staticLinks = [
    { icon: faChartPie, label: 'Overview', path: '/overview' },
    { icon: faChartPie, label: 'Submitted Applications', path: '/submitted' },
    { icon: faTachometerAlt, label: 'Dashboard', path: '/' },
    { icon: faEnvelope, label: 'Messages', path: '/messages' },
    { icon: faUserTie, label: 'Jobs', path: '/jobs' },
    { icon: faHandHoldingDollar, label: 'Transaction', path: '/transaction' },
    { icon: faChartLine, label: 'Analytics', path: '/analytics' },
    { icon: faGear, label: 'Settings', path: '/settings' },
    { icon: faCalendarDays, label: 'Calendar', path: '/calendar' },
    { icon: faMapPin, label: 'Map', path: '/map' },
    { icon: faHeadset, label: 'Support', path: '/support' },
    { icon: faFile, label: 'Account', path: '/account' }
    // { icon: faLayerGroup, label: 'Themesberg', path: '/themesberg' }
  ];

  const renderSidebarContent = () => (
    <div className="w-64 bg-black text-white h-screen shadow-lg flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faReact} className="text-blue-400" />
          <span className="text-lg font-semibold">Volt React</span>
        </div>
        {isOpen && (
          <FontAwesomeIcon
            icon={faTimes}
            className="text-white cursor-pointer lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Scrollable Middle Section */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">
        {staticLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}

        {dropdowns.map((dropdown, idx) => (
          <div key={idx}>
            <div
              onClick={() => dropdown.setShow(!dropdown.show)}
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-700"
            >
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={dropdown.icon} />
                <span>{dropdown.title}</span>
              </div>
              <FontAwesomeIcon
                icon={faGreaterThan}
                className={`transition-transform duration-300 ${dropdown.show ? 'rotate-90' : ''}`}
              />
            </div>
            {dropdown.show && (
              <div className="ml-8 py-1 space-y-1">
                {dropdown.items.map((item, subIdx) => (
                  <a key={subIdx} href="#" className="block px-2 py-1 rounded hover:bg-gray-700">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Themesberg link after Components dropdown */}
        <div
          onClick={() => navigate('/themesberg')}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-orange-400" />
          <span>Themesberg</span>
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 space-y-2">
        <div className="relative space-y-3">
          <div
            onClick={() => setShowAccountOption(!showAccountOption)}
            className="cursor-pointer border border-gray-600 flex items-center justify-start bg-black rounded p-2 shadow space-x-5"
          >
            {account.profileImage ? (
              <img
                src={
                  account.profileImage instanceof File
                    ? URL.createObjectURL(account.profileImage)
                    : account.profileImage
                }
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white text-lg uppercase">
                {account.name?.[0] || 'U'}
              </div>
            )}

            <div className="flex flex-col">
              <span className="text-md font-bold text-white">{account.name}</span>
              <span className="text-sm font-medium text-gray-400">{account.type}</span>
            </div>
          </div>

          {showAccountOption && (
            <div className="absolute top-[-45px] bg-gray-700 text-white rounded shadow p-2 w-40 z-10">
              <div
                onClick={() => {
                  navigate('/account');
                  setShowAccountOption(false);
                }}
                className="hover:bg-gray-600 px-2 py-1 rounded cursor-pointer"
              >
                My Account
              </div>
            </div>
          )}

          <button className="w-full bg-blue-400 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-blue-500">
            <FontAwesomeIcon icon={faRocket} className="text-white" />
            <span>Upgrade to Pro</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            {renderSidebarContent()}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        {renderSidebarContent()}
      </div>
    </>
  );
}

export default Sidebar;
