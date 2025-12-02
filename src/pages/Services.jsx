import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Services = () => {
  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    // Add Bootstrap Icons CSS immediately
    const bootstrapIconsLink = document.createElement("link");
    bootstrapIconsLink.rel = "stylesheet";
    bootstrapIconsLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css";
    bootstrapIconsLink.onload = () => setIconsLoaded(true);

    // Check if already exists
    const existingBootstrapLink = document.head.querySelector(
      'link[href*="bootstrap-icons"]'
    );
    if (!existingBootstrapLink) {
      document.head.appendChild(bootstrapIconsLink);
    } else {
      setIconsLoaded(true);
    }

    // Add other dependencies
    const links = [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    ];

    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);

    links.forEach((linkData) => {
      const existingLink = document.head.querySelector(
        `link[href="${linkData.href}"]`
      );
      if (!existingLink) {
        const link = document.createElement("link");
        Object.assign(link, linkData);
        document.head.appendChild(link);
      }
    });

    // Initialize intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "translate-x-0"
            );
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-12",
              "-translate-x-12",
              "translate-x-12"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document
        .querySelectorAll(".reveal, .fade-left, .fade-right")
        .forEach((el) => {
          observer.observe(el);
        });
    }, 100);

    // Force icons to load after a delay if not loaded
    const fallbackTimer = setTimeout(() => {
      if (!iconsLoaded) {
        setIconsLoaded(true);
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

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

  return (
    <div className="font-['Inter'] bg-slate-50 text-slate-800 scroll-smooth overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      {/* <section
        className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]
    [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]"
      >
        <div className="max-w-4xl mx-auto text-white opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 rounded-full mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm sm:text-base">🚀 Our Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
            What We Do <span className="text-yellow-300">Best</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            We offer comprehensive technology solutions to help your business
            thrive in the digital world.
          </p>
        </div>
      </section> */}

      {/* Services Grid Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            {/* <div className="text-sm font-semibold text-blue-600 mb-4">
              WHAT WE OFFER
            </div> */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Our <font className="text-[#0047FF]">Services</font>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive technology solutions designed to drive your business
              forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#3b82f6_0%,#8b5cf6_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-laptop text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Modern, responsive websites and web applications built with the
                latest technologies and frameworks.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#3b82f6_0%,#8b5cf6_100%)] rounded-full mr-3"></div>
                  React & Vue.js Development
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#3b82f6_0%,#8b5cf6_100%)] rounded-full mr-3"></div>
                  Node.js Backend Solutions
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#3b82f6_0%,#8b5cf6_100%)] rounded-full mr-3"></div>
                  Database Design & Optimization
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#22c55e_0%,#0f766e_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-phone text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Native and cross-platform mobile applications for iOS and
                Android platforms with exceptional user experience.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#22c55e_0%,#0f766e_100%)] rounded-full mr-3"></div>
                  React Native Development
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#22c55e_0%,#0f766e_100%)] rounded-full mr-3"></div>
                  Flutter Applications
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#22c55e_0%,#0f766e_100%)] rounded-full mr-3"></div>
                  Native iOS/Android Apps
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#f97316_0%,#dc2626_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-cloud text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-orange-600 transition-colors duration-300">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Scalable cloud infrastructure and deployment solutions for your
                applications with enterprise-grade security.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#f97316_0%,#dc2626_100%)] rounded-full mr-3"></div>
                  AWS & Azure Solutions
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#f97316_0%,#dc2626_100%)] rounded-full mr-3"></div>
                  DevOps & CI/CD
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#f97316_0%,#dc2626_100%)] rounded-full mr-3"></div>
                  Microservices Architecture
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#a855f7_0%,#db2777_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-palette text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                UI/UX Design
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Beautiful, user-friendly interfaces that provide exceptional
                user experiences and drive engagement.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#a855f7_0%,#db2777_100%)] rounded-full mr-3"></div>
                  User Research & Testing
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#a855f7_0%,#db2777_100%)] rounded-full mr-3"></div>
                  Prototyping & Wireframing
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#a855f7_0%,#db2777_100%)] rounded-full mr-3"></div>
                  Design Systems
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#6366f1_0%,#2563eb_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-cpu text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                IoT Solutions
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Internet of Things solutions that connect devices and enable
                smart automation for modern businesses.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#6366f1_0%,#2563eb_100%)] rounded-full mr-3"></div>
                  Device Integration
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#6366f1_0%,#2563eb_100%)] rounded-full mr-3"></div>
                  Smart Automation
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#6366f1_0%,#2563eb_100%)] rounded-full mr-3"></div>
                  Data Analytics
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl opacity-0 translate-y-12 reveal border border-gray-100 shadow-lg group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[linear-gradient(135deg,#facc15_0%,#ea580c_100%)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                <i className="bi bi-shield-check text-xl sm:text-2xl text-white"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                Consulting
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Strategic technology consulting to help you make informed
                decisions and optimize your digital transformation.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#facc15_0%,#ea580c_100%)] rounded-full mr-3"></div>
                  Technology Strategy
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#facc15_0%,#ea580c_100%)] rounded-full mr-3"></div>
                  Digital Transformation
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <div className="w-2 h-2 bg-[linear-gradient(135deg,#facc15_0%,#ea580c_100%)] rounded-full mr-3"></div>
                  Process Optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32" style={{ background: "#1e293b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <div className="text-sm font-semibold text-blue-400 mb-4">
              HOW WE WORK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A streamlined approach to deliver exceptional results for every
              project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Discovery
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Understanding your needs and project requirements.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Planning
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Creating detailed project roadmap and timeline.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Development
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Building your solution with cutting-edge technologies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-white">
                4
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                Delivery
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Testing, deployment, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 flex items-center justify-center bg-[#adc4ffff]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and create innovative solutions that
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/projects"
              className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;