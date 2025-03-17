import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation items with dropdown menus
  const navItems = [
    {
      title: 'About Us',
      path: '/about-us',
      dropdown: [
        { name: 'Our Story', path: '/about-us/our-story' },
        { name: 'Mission & Values', path: '/about-us/mission-values' },
        { name: 'Therapy Team', path: '/about-us/therapy-team' },
        { name: 'Board of Directors', path: '/about-us/board-of-directors' },
        { name: 'Locations', path: '/about-us/locations' },
        { name: 'Who We Serve', path: '/about-us/who-we-serve' },
      ]
    },
    {
      title: 'Therapy Services',
      path: '/therapy-services',
      dropdown: [
        { name: 'Intensive Physical Therapy', path: '/therapy-services/intensive-physical-therapy' },
        { name: 'Traditional Physical Therapy', path: '/therapy-services/traditional-physical-therapy' },
        { name: 'Who We Serve', path: '/therapy-services/who-we-serve' },
        { name: 'Treatment Methods', path: '/therapy-services/treatment-methods' },
        { name: 'Therapy Schedule', path: '/therapy-services/therapy-schedule' },
      ]
    },
    {
      title: 'For Families',
      path: '/for-families',
      dropdown: [
        { name: 'Getting Started', path: '/for-families/getting-started' },
        { name: 'Therapy Schedule', path: '/for-families/therapy-schedule' },
        { name: 'Payment & Financial Aid', path: '/for-families/payment-financial-aid' },
        { name: 'Accommodations', path: '/for-families/accommodations' },
        { name: 'Testimonials', path: '/for-families/testimonials' },
        { name: 'FAQs', path: '/for-families/faqs' },
      ]
    },
    {
      title: 'Get Involved',
      path: '/get-involved',
      dropdown: [
        { name: 'Donate', path: '/get-involved/donate' },
        { name: 'Volunteer Opportunities', path: '/get-involved/volunteer-opportunities' },
        { name: 'Our Donors', path: '/get-involved/our-donors' },
      ]
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
      dropdown: null
    },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when path changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
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
                <li key={index} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                      ${location.pathname === item.path || location.pathname.startsWith(item.path + '/') 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'}`}
                    onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.title}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && (
                    <div 
                      className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-150 
                        ${(activeDropdown === index) ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                              ${location.pathname === dropdownItem.path ? 'bg-blue-50 text-blue-600' : ''}`}
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
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg bg-white">
          {navItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
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
                {item.dropdown && (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 focus:outline-none"
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
              {item.dropdown && activeDropdown === index && (
                <div className="pl-4 py-2 space-y-1">
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