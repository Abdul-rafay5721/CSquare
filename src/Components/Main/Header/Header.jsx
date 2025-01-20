import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import LogoIcon from '../Logo/LogoIcon';
import { createServicePath } from '../../../data/serviceData';

const serviceCategories = {
  "Compliance & Certifications": [
    "PCI DSS",
    "SAMA Cyber Security Framework",
    "NCA-National Cybersecurity Authority",
    "Saudi Data Management and Personal Data Protection Standards",
    "IS027001",
    "ISO/IEC 27017",
    "CPS 234",
    "NIST Cyber Security Framework",
    "Information Security Manual (ISM)",
    "Essential Eight",
    "GDPR",
    "COBIT"
  ],
  "Penetration Testing": [
    "Mobile Penetration Testing",
    "Network Penetration Testing",
    "API Penetration Testing",
    "Web Application Penetration Testing",
    "Red Team",
    "Purple team",
    "Wireless Security Testing",
    "OTP Penetration Testing Services"
  ],
  "Reviews & Assessments": [
    "Source Code Review",
    "Security Architecture Design & Review",
    "Firewall & Network Architecture Review",
    "Data Privacy Assessments & Audit",
    "Threat Vulnerability & Risk Assessment",
    "Compromise Assessments",
    "Cloud Security Assessments",
    "Vulnerability Assessments",
    "Social Engineering Assessments",
    "Cyber Security Maturity Assessment"
  ]
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileServices = (e) => {
    e.stopPropagation();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <>
      <nav
        className={`flex justify-between items-center bg-black fixed w-full left-0 right-0 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-40 py-3 lg:py-6 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'lg:bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to='/' className={`font-extrabold text-base sm:text-lg ${isScrolled ? 'text-black' : 'text-white'}`}>
            <LogoIcon color={isScrolled ? '#b91c1c' : '#ffffff'} className="w-24 sm:w-32" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center">
          <ul className='lg:flex hidden gap-3 xl:gap-7 items-center text-sm xl:text-base'>
            <li className='text-sm font-semibold tracking-wider'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${
                    isScrolled
                      ? isActive
                        ? 'text-red-700'
                        : 'text-black'
                      : isActive
                      ? 'text-red-700'
                      : 'text-[#ffffff99]'
                  } hover:text-red-700`
                }
              >
                HOME
              </NavLink>
            </li>
            <li className='text-sm font-semibold tracking-wider relative group'>
              <button
                className={`flex items-center gap-1 ${
                  isScrolled ? 'text-black' : 'text-[#ffffff99]'
                } hover:text-red-700`}
              >
                SERVICES <FaChevronDown className="text-xs ml-1" />
              </button>
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full w-screen lg:w-[90vw] xl:w-[900px] bg-white shadow-xl rounded-lg p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-x-1/2 left-1/2 max-h-[80vh] overflow-y-auto">
                {Object.entries(serviceCategories).map(([category, items]) => (
                  <div key={category} className="space-y-3 lg:space-y-4">
                    <h3 className="font-bold text-red-600 border-b pb-2 text-sm lg:text-base">{category}</h3>
                    <ul className="space-y-1 lg:space-y-2">
                      {items.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/services/${createServicePath(item)}`}
                            className="text-xs lg:text-sm text-gray-600 hover:text-red-600 block py-1"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
            <li className='text-sm font-semibold tracking-wider'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `${
                    isScrolled
                      ? isActive
                        ? 'text-red-700'
                        : 'text-black'
                      : isActive
                      ? 'text-red-700'
                      : 'text-[#ffffff99]'
                  } hover:text-red-700`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li className='text-sm font-semibold tracking-wider'>
              <NavLink
                to='/work'
                className={({ isActive }) =>
                  `${
                    isScrolled
                      ? isActive
                        ? 'text-red-700'
                        : 'text-black'
                      : isActive
                      ? 'text-red-700'
                      : 'text-[#ffffff99]'
                  } hover:text-red-700`
                }
              >
                WORK
              </NavLink>
            </li>
            <li className='text-sm font-semibold tracking-wider'>
              <NavLink
                to='/blog'
                className={({ isActive }) =>
                  `${
                    isScrolled
                      ? isActive
                        ? 'text-red-700'
                        : 'text-black'
                      : isActive
                      ? 'text-red-700'
                      : 'text-[#ffffff99]'
                  } hover:text-red-700`
                }
              >
                BLOG
              </NavLink>
            </li>
            
            <li className='text-sm font-semibold tracking-wider'>
              <NavLink
                to='/contact'
                className={({ isActive }) =>
                  `${
                    isScrolled
                      ? isActive
                        ? 'text-red-700'
                        : 'text-black'
                      : isActive
                      ? 'text-red-700'
                      : 'text-[#ffffff99]'
                  } hover:text-red-700`
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className='text-[#ffffff80] lg:hidden flex items-center gap-2 text-sm px-2 py-1 rounded-lg hover:bg-white/10 transition-colors'
            onClick={toggleMenu}
          >
            <span className="text-sm">MENU</span>
            <FaChevronDown className={`text-xs transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 right-0 w-full bg-black/95 backdrop-blur-sm z-40 text-white transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-[48px] sm:translate-y-[56px]' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4">
          <ul className="py-4 space-y-2">
            {/* Mobile Menu Items */}
            <li className="border-b border-gray-800 py-2">
              <NavLink 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="hover:text-red-600 transition-colors block"
              >
                HOME
              </NavLink>
            </li>
            {/* Services Dropdown */}
            <li className="border-b border-gray-800 py-2">
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full hover:text-red-600 transition-colors"
              >
                <span>SERVICES</span>
                <FaChevronDown className={`text-xs transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${
                isMobileServicesOpen ? 'max-h-[70vh] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
                {Object.entries(serviceCategories).map(([category, items]) => (
                  <div key={category} className="py-2 pl-4">
                    <h3 className="text-red-600 text-sm font-semibold mb-2">{category}</h3>
                    <ul className="space-y-1">
                      {items.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/services/${createServicePath(item)}`}
                            className="text-sm text-gray-400 hover:text-red-600 block py-1"
                            onClick={() => {
                              setIsMobileServicesOpen(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
            {/* Other Menu Items */}
            {['ABOUT', 'WORK', 'BLOG', 'CONTACT'].map((item) => (
              <li key={item} className="border-b border-gray-800 py-2">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-red-600 transition-colors block"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 w-full bg-black/50 z-30 lg:hidden"
          onClick={() => {
            setIsMenuOpen(false);
            setIsMobileServicesOpen(false);
          }}
        />
      )}
    </>
  );
}

export default Header;
