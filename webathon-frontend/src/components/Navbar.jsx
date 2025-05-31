import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  // This would come from your auth context in a real app
  const [userRole, setUserRole] = useState('citizen'); // 'admin', 'official', 'citizen'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // For demo purposes - toggle between roles
  const cycleRole = () => {
    const roles = ['citizen', 'official', 'admin'];
    const currentIndex = roles.indexOf(userRole);
    const nextIndex = (currentIndex + 1) % roles.length;
    setUserRole(roles[nextIndex]);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white backdrop-blur-md bg-opacity-90 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">SCCD</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            
            {/* Interactive Map Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => toggleDropdown('map')} 
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Interactive Map
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'map' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all duration-300">
                  <Link to="/map" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Map</Link>
                  <Link to="/map/filter" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Filter Issues</Link>
                  <Link to="/map/ar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AR View</Link>
                </div>
              )}
            </div>

            {/* Departments Link */}
            <Link 
              to="/departments" 
              className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Departments
            </Link>

            {/* Dashboard - Conditionally Rendered Based on Role */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => toggleDropdown('dashboard')} 
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Dashboard
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'dashboard' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transform transition-all duration-300">
                  <Link to="/my-issues" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Issues</Link>
                  <Link to="/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notifications</Link>
                  <Link to="/voting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Voting</Link>
                </div>
              )}
            </div>

            {/* Proposals & Voting */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => toggleDropdown('proposals')} 
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Proposals
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'proposals' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="/proposals/view" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View Proposals</Link>
                  <Link to="/proposals/vote" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vote</Link>
                  <Link to="/proposals/results" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Voting Results</Link>
                </div>
              )}
            </div>

            {/* Communication */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => toggleDropdown('communication')} 
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Communication
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'communication' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="/communication/chat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Department Chat</Link>
                  <Link to="/communication/notifications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notifications Center</Link>
                  <Link to="/communication/files" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Shared Files</Link>
                </div>
              )}
            </div>

            {/* About */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => toggleDropdown('about')} 
                className="text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                About
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link to="/about/overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Project Overview</Link>
                  <Link to="/about/ar-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AR Feature Guide</Link>
                  <Link to="/about/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</Link>
                </div>
              )}
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="text-gray-700 hover:text-teal-600 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Login
                </Link>
                <Link to="/signup" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-teal-600 hover:to-blue-700 transition-colors duration-200">
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={() => toggleDropdown('profile')} 
                  className="flex items-center text-gray-700 hover:text-teal-600"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white">
                    {userRole.charAt(0).toUpperCase()}
                  </div>
                  <span className="ml-2 text-sm font-medium">{userRole}</span>
                </button>
                {activeDropdown === 'profile' && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                    <button 
                      onClick={cycleRole} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Change Role (Demo)
                    </button>
                    <button 
                      onClick={() => setIsLoggedIn(false)} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transform transition-all duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
            onClick={toggleMenu}
          >
            Home
          </Link>
          
          {/* Mobile Accordion Menus */}
          <MobileAccordion title="Interactive Map" toggleMenu={toggleMenu}>
            <Link to="/map" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">View Map</Link>
            <Link to="/map/filter" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Filter Issues</Link>
            <Link to="/map/ar" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">AR View</Link>
          </MobileAccordion>
          
          <MobileAccordion title="Departments" toggleMenu={toggleMenu}>
            <Link to="/departments/transport" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Transport</Link>
            <Link to="/departments/sanitation" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Sanitation</Link>
            <Link to="/departments/health" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Health</Link>
            {userRole === 'admin' && (
              <Link to="/departments/add" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Add Department</Link>
            )}
            <Link to="/departments/kpis" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Department KPIs</Link>
          </MobileAccordion>
          
          <MobileAccordion title="Dashboard" toggleMenu={toggleMenu}>
            <Link to="/my-issues" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">My Issues</Link>
            <Link to="/notifications" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Notifications</Link>
            <Link to="/voting" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Voting</Link>
          </MobileAccordion>
          
          <MobileAccordion title="Communication" toggleMenu={toggleMenu}>
            <Link to="/communication/chat" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Department Chat</Link>
            <Link to="/communication/notifications" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Notifications Center</Link>
            <Link to="/communication/files" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Shared Files</Link>
          </MobileAccordion>
          
          <MobileAccordion title="About" toggleMenu={toggleMenu}>
            <Link to="/about/overview" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Project Overview</Link>
            <Link to="/about/ar-guide" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">AR Feature Guide</Link>
            <Link to="/about/docs" className="block pl-8 py-2 text-sm text-gray-700 hover:text-teal-600">Documentation</Link>
          </MobileAccordion>

          {/* Auth Section - Mobile */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            {!isLoggedIn ? (
              <div className="flex items-center justify-center space-x-4">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center px-4 py-2 rounded-md text-base font-medium bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="px-4">
                <div className="flex items-center pb-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white">
                    {userRole.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">User ({userRole})</div>
                    <div className="text-sm font-medium text-gray-500">user@example.com</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Your Profile
                  </Link>
                  <button
                    onClick={() => {
                      cycleRole();
                    }}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Change Role (Demo)
                  </button>
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toggleMenu();
                    }}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Mobile Accordion Component for Mobile Menu
const MobileAccordion = ({ title, children, toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-3 py-2 text-left text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
      >
        {title}
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} py-2`}>
        {children}
      </div>
    </div>
  );
};

export default Navbar; 