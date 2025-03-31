import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Updated navigation items with simplified structure
  const navItems = [
    {
      title: 'About',
      path: '/about-us',
      dropdown: [
        { name: 'Our Story & Mission', path: '/about-us/our-story-mission' },
        { name: 'Our Team', path: '/about-us/our-team' },
        { name: 'Locations', path: '/about-us/locations' },
      ],
      clickable: false  // Not clickable
    },
    {
      title: 'Therapy Services',
      path: '/therapy-services',
      dropdown: [
        { name: 'Intensive Therapy', path: '/therapy-services/intensive-physical-therapy' },
        { name: 'Traditional Therapy', path: '/therapy-services/traditional-physical-therapy' },
        { name: 'Treatment Methods', path: '/therapy-services/treatment-methods' },
        { name: 'Therapy Schedule', path: '/therapy-services/therapy-schedule' },
      ],
      clickable: false  // Not clickable
    },
    {
      title: 'For Families',
      path: '/for-families',
      dropdown: [
        { name: 'Getting Started', path: '/for-families/getting-started' },
        { name: 'Payment & Financial Aid', path: '/for-families/financial-support' },
        { name: 'Accommodations', path: '/for-families/accommodations' },
        { name: 'Family Resources', path: '/for-families/family-resources' },
      ],
      clickable: false  // Not clickable
    },
    {
      title: 'Support Us',
      path: '/support-us',
      dropdown: null,  // No dropdown for Support Us
      clickable: true  // Keep this clickable
    },
    {
      title: 'Contact',
      path: '/contact-us',
      dropdown: null,
      clickable: true  // Keep this clickable
    },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleNavItemMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  };

  const handleNavMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Function to handle nav item click
  const handleNavItemClick = (e, item) => {
    if (!item.clickable && item.dropdown) {
      e.preventDefault(); // Prevent navigation for non-clickable items
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-gray-50/80 py-4'}`}>
      <div className="container-custom mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-heading text-blue-600">Now I Can</span>
            <span className="ml-1 text-sm font-medium text-purple-500">Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => handleNavItemMouseEnter(index)}
                  onMouseLeave={handleNavMouseLeave}
                >
                  {item.clickable ? (
                    // Clickable nav item (for Support Us and Contact)
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center
                        ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'}`}
                      aria-expanded={activeDropdown === index}
                      aria-haspopup={item.dropdown ? "true" : "false"}
                    >
                      {item.title}
                      {item.dropdown && (
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'transform rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  ) : (
                    // Non-clickable nav item (for About, Therapy Services, For Families)
                    <div
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center cursor-pointer
                        ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') 
                          ? 'text-blue-600' 
                          : 'text-gray-700 hover:text-blue-600'}`}
                      aria-expanded={activeDropdown === index}
                      aria-haspopup={item.dropdown ? "true" : "false"}
                    >
                      {item.title}
                      {item.dropdown && (
                        <svg
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index ? 'transform rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}

                  {item.dropdown && (
                    <div 
                      className={`absolute left-0 mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-150
                        ${activeDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`dropdown-button-${index}`}
                    >
                      {/* Visual connector */}
                      <div className="absolute -top-2 left-5 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-200"></div>
                      
                      <div className="py-1 relative rounded-md overflow-hidden">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                              ${location.pathname === dropdownItem.path ? 'bg-blue-50 text-blue-600' : ''}`}
                            role="menuitem"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Consultation Button */}
          <div className="hidden lg:block">
            <Link
              to="/for-families/getting-started/free-consultation"
              className="btn-primary btn-sm py-2 px-4 rounded-full text-sm font-medium"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white">
          {navItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                {item.clickable ? (
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    onClick={() => !item.dropdown && setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.title}
                  </div>
                )}
                {item.dropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
                    aria-expanded={activeDropdown === index}
                  >
                    <svg
                      className={`h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === index ? 'transform rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              {item.dropdown && (
                <div 
                  className={`pl-4 py-2 space-y-1 overflow-hidden transition-all duration-300 ${
                    activeDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === dropdownItem.path
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              to="/for-families/getting-started/free-consultation"
              className="w-full block text-center btn-primary py-2 px-4 rounded-full text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;