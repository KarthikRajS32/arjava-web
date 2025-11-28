import { Link, useLocation } from "react-router-dom";


export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 sm:gap-12"> */}
        <div className="flex flex-row justify-evenly sm gap-8 sm:gap-12">
          {/* Logo + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/arjava logo.png"
              alt="Arjava"
              className="h-10 sm:h-14 mb-4 sm:mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              We create innovative software solutions that <br /> 
              transform businesses and drive digital success.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors xl:mr-[-1px] md:mr-[-2px]"
              >
                <i className="bi bi-facebook text-sm sm:text-base"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-instagram text-sm sm:text-base"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-twitter text-sm sm:text-base"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-linkedin text-sm sm:text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {currentPath !== "/" && (
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
              )}

              {currentPath !== "/about" && (
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
              )}

              {currentPath !== "/services" && (
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
              )}

              {currentPath !== "/projects" && (
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
              )}

              {/* {currentPath !== "/privacy" && (
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              )} */}

              {currentPath !== "/contact" && (
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p>
                19, Ganesh Nagar Main Road,
                <br />
                Selaiyur, Chennai - 600073
              </p>
              <p>
                <a
                  href="mailto:arjavatech@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  arjavatech@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:044-35675035"
                  className="hover:text-white transition-colors"
                >
                  044-35675035
                </a>
              </p>
            </div>
          </div>

          {/* Subscribe */}
          {/* <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Subscribe to get updates on our latest projects and services.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 text-sm sm:text-base transition-colors"
              />
              <button className="w-full bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center gap-2 border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            ©2025 Arjava Technologies. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base"> | </p>
          <Link
            to="/privacy"
            className="text-gray-400 text-sm sm:text-base hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
