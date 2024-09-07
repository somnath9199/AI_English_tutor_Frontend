import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
          <img src={Logo} alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Menu toggle button (visible on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-gray-900 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li>
              <Link
                to="/features"
                className="text-gray-700 hover:text-blue-500 transition py-2 lg:py-0"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-500 transition py-2 lg:py-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 transition py-2 lg:py-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-500 transition py-2 lg:py-0"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <Link
            to="/Register"
            className="mt-4 lg:mt-0 lg:ml-6 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
