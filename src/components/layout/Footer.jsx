import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import arjavaLogo from "../../assets/arjava logo.png";

export default function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    // Ensure consistent positioning after navigation
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo + Social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={arjavaLogo}
              alt="Arjava"
              className="h-8 sm:h-10 lg:h-14 mb-4 sm:mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base leading-relaxed">
              We create innovative software solutions that transform businesses
              and drive digital success.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors mr-[-1px] xl:mr-[-1px] md:mr-[-2px]"
              >
                <i className="bi bi-facebook text-xs sm:text-sm lg:text-base"></i>
              </a>
              <a
                href="https://www.instagram.com/arjavatech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-instagram text-xs sm:text-sm lg:text-base"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-twitter text-xs sm:text-sm lg:text-base"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/arjavatech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <i className="bi bi-linkedin text-xs sm:text-sm lg:text-base"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {currentPath !== "/" && (
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Home
                  </Link>
                </li>
              )}

              {currentPath !== "/about" && (
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About
                  </Link>
                </li>
              )}

              {currentPath !== "/services" && (
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Services
                  </Link>
                </li>
              )}

              {currentPath !== "/projects" && (
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Projects
                  </Link>
                </li>
              )}

              {/* {currentPath !== "/privacy" && (
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Privacy
                  </Link>
                </li>
              )} */}

              {currentPath !== "/contact" && (
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="leading-relaxed">
                19, Ganesh Nagar Main Road,
                <br />
                Selaiyur, Chennai - 600073
              </p>
              <p>
                <a
                  href="mailto:arjavatech@gmail.com"
                  className="hover:text-white transition-colors break-all"
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 border-t border-gray-800 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-10 text-center">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base">
            ©2025 Arjava Technologies. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm lg:text-base hidden sm:block">
            {" "}
            |{" "}
          </p>
          <Link
            to="/privacy"
            className="text-gray-400 text-xs sm:text-sm lg:text-base hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
