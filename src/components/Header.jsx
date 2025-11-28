import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    const container = document.getElementById("header-container");
    menu.classList.toggle("hidden");

    if (!menu.classList.contains("hidden")) {
      container.classList.remove("rounded-full");
      container.classList.add("rounded-2xl");
    } else {
      container.classList.remove("rounded-2xl");
      container.classList.add("rounded-full");
    }
  };

  const isActive = (path) => location.pathname === path;

  // Arjava Brand Colors
  const brandBlue = "text-[#1C4FA3]";
  const brandBlueHover = "hover:text-[#1C4FA3]";
  const brandBtn = "bg-[#1C4FA3] hover:bg-[#0F2E70]";
  const activeLink = "text-[#1C4FA3] font-semibold";

  return (
    <header className="fixed w-full top-2 sm:top-4 z-50 px-3 sm:px-6">
      <div
        id="header-container"
        className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl 
                  border border-white/40 shadow-md rounded-full 
                  px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/arjava logo.png"
              alt="Arjava"
              className="h-10 sm:h-16 drop-shadow-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            <Link
              to="/"
              className={`text-sm xl:text-base transition-all m-[0px_0px_0px_24px] ${
                isActive("/") ? activeLink : `text-gray-700 ${brandBlueHover}`
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-sm xl:text-base transition-all ${
                isActive("/about")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover}`
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`text-sm xl:text-base transition-all ${
                isActive("/services")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover}`
              }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`text-sm xl:text-base transition-all ${
                isActive("/projects")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover}`
              }`}
            >
              Projects
            </Link>

            {/* <Link
              to="/privacy"
              className={`text-sm xl:text-base transition-all ${
                isActive("/privacy")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover}`
              }`}
            >
              Privacy
            </Link> */}

            <Link
              to="/contact"
              className={`${brandBtn} text-white px-5 xl:px-7 py-2 rounded-full 
                         text-sm xl:text-base shadow-sm transition-all`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="lg:hidden hidden mt-4 pb-4 border-t border-gray-200"
        >
          <div className="flex flex-col space-y-1 pt-4">
            <Link
              to="/"
              className={`px-4 py-2 transition-colors rounded-lg ${
                isActive("/")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover} hover:bg-gray-50`
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 transition-colors rounded-lg ${
                isActive("/about")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover} hover:bg-gray-50`
              }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`px-4 py-2 transition-colors rounded-lg ${
                isActive("/services")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover} hover:bg-gray-50`
              }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`px-4 py-2 transition-colors rounded-lg ${
                isActive("/projects")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover} hover:bg-gray-50`
              }`}
            >
              Projects
            </Link>

            <Link
              to="/privacy"
              className={`px-4 py-2 transition-colors rounded-lg ${
                isActive("/privacy")
                  ? activeLink
                  : `text-gray-700 ${brandBlueHover} hover:bg-gray-50`
              }`}
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className={`${brandBtn} text-white px-4 py-2 rounded-full text-center mt-3 transition-all`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
