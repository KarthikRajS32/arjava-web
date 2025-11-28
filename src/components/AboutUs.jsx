import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    // Add external dependencies
    const links = [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",
      },
    ];

    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);

    links.forEach((linkData) => {
      const link = document.createElement("link");
      Object.assign(link, linkData);
      document.head.appendChild(link);
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

    return () => {
      observer.disconnect();
      document.head.removeChild(script);
      links.forEach(() => {
        const linkElements = document.head.querySelectorAll(
          'link[href*="bootstrap-icons"], link[href*="googleapis"]'
        );
        linkElements.forEach((link) => document.head.removeChild(link));
      });
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
      <section className="relative pt-34 sm:pt-28 md:pt-40 min-h-screen px-4 sm:px-6 bg-white lg:bg-white overflow-hidden">
        {/* Background for mobile/tablet - Blue gradient + Hero Image */}
        <div className="absolute inset-0 lg:hidden z-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #00257aff 30%, #0045ceff 40%, #0066FF 50%)",
            }}
          ></div>
          <div className="relative rotate-44 top-10 border-[#0047FF] w-60 h-60 md:w-120 md:h-120 rounded-[80px] overflow-hidden border-[0px] shadow-2xl bg-gray-100">
            <img
              src="/about img.png"
              alt="About Arjava"
              className="pt-20 pl-4 w-[256px] h-[306px] transform -rotate-[22deg] scale-150 bg-gray-100"
            />
          </div>
        </div>

        {/* Big Blue curved background - Desktop only */}
        <div
          className="hidden lg:block absolute top-[24rem] left-[-21rem] -translate-x-1/2 w-[95rem] h-[98rem] rounded-full z-0 rotate-[-15deg] opacity-0 transition-all duration-1000 ease-out reveal"
          style={{
            background:
              "linear-gradient(135deg, #00257aff 30%, #0045ceff 40%, #0066FF 50%)",
            transform: "rotate(-15deg)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE IMAGE - Desktop only */}
            <div className="hidden lg:flex relative items-center justify-center h-full w-full opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
              <div className="relative rotate-44 top-20 border-[#0047FF] w-120 h-120 rounded-[80px] overflow-hidden border-[0px] shadow-2xl bg-gray-100">
                {/* <div className="absolute inset-0 rotate-45 border-[#0047FF] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl bg-gray-100"> */}
                <img
                  src="/about img.png"
                  alt="About Arjava"
                  className="pt-32 pl-4 w-[356px] h-[506px] transform -rotate-[22deg] scale-150 bg-gray-100"
                />
                {/* </div> */}
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-0 right-0 sm:bottom-[-10px] sm:right-[-10px] bg-yellow-400 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-lg">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs font-bold">5+ Years Experience</span>
              </div>
            </div>

            {/* CONTENT - Card on mobile/tablet */}
            <div className="lg:col-span-1">
              <div className="lg:bg-transparent bg-white/95 backdrop-blur-sm lg:backdrop-blur-none rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none text-left opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100/20 lg:bg-blue-100/20 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span className="text-gray-800 lg:text-gray-800">
                    About Arjava
                  </span>
                </div>

                <h1 className="text-gray-900 lg:text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                  Building the Future{" "}
                  <span className="text-[#0047FF]">Together</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 lg:text-gray-600 mb-8 sm:mb-12">
                  We develop innovative software and mobile solutions that help
                  businesses achieve their goals and drive digital
                  transformation.
                </p>

                <Link
                  to="/contact"
                  className="bg-[#0047FF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-sm sm:text-base"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Badge - Mobile/Tablet */}
        <div className="lg:hidden absolute bottom-6 right-6 bg-yellow-400 text-black px-3 py-2 rounded-full flex items-center gap-2 shadow-lg z-20">
          <div className="flex -space-x-1">
            <div className="w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-xs font-bold">5+ Years Experience</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                500+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
                Projects
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                50+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
                Clients
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                5+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
                Years
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-2 sm:mb-3 lg:mb-4">
                15+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
                Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="opacity-0 -translate-x-12 transition-all duration-700 ease-out fade-left">
              <div className="text-sm font-semibold text-blue-600 mb-4">
                OUR STORY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Our{" "}
                <span className="bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                At Arjava, we develop software and mobile product engineering
                services for businesses, educational and financial institutions,
                healthcare and government organizations to help them achieve
                their valued objectives and targets.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our goal is to create value-added and cost-effective software
                solutions tailored to our customer's specific requirements to
                help them increase their efficiency and productivity.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                We provide a full set of software development services
                supporting you through the whole project lifecycle from idea to
                release and post-production. We can develop a solution from
                scratch or step in at any stage of your project.
              </p>
            </div>

            <div className="opacity-0 translate-x-12 transition-all duration-700 ease-out fade-right">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl">
                <img
                  src="/story section.png"
                  alt="Arjava Story"
                  className="w-full rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <div className="text-sm font-semibold text-blue-400 mb-4">
              VISION & MISSION
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Driving innovation and excellence through our vision and mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8">
                <i className="bi bi-eye text-lg sm:text-2xl lg:text-3xl text-white"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                Our Vision
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Propel technological innovation that empowers mankind and
                creates a better future for all through cutting-edge software
                solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8">
                <i className="bi bi-target text-lg sm:text-2xl lg:text-3xl text-white"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Deliver full stack IT solutions and services, IoT solutions, and
                innovative product development that drives business success and
                digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 flex items-center justify-center bg-[#adc4ffff]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8">
            Ready to Work with Us?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create innovative solutions that
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
