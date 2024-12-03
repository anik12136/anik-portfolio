import { useState, useEffect, useRef } from "react";

import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const user = false;
  return (

    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-transparent bg-clip-text"
            >
              UIU Pathshala
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/home" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/gallery" className="text-gray-600 hover:text-gray-900">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <button
            onClick={closeMenu}
            className="self-end text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <X size={24} />
          </button>
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-gray-600 hover:text-gray-900"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900"
            onClick={closeMenu}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
