import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { getServiceImages, getPortfolioProjects } from "../services/apiService";

const HomePage = () => {
  const [serviceImages, setServiceImages] = useState([]);
  const [portfolioProjects, setPortfolioProjects] = useState([]);

  const cards = [
    { title: "Web Development", description: "Modern, responsive websites and web applications built with cutting-edge technologies and best practices.", icon: "bi-laptop"},
    { title: "Mobile Apps", description: "Native iOS and Android applications with exceptional user experience and performance optimization.", icon: "bi-phone"},
    { title: "Cloud Solutions", description: "Scalable cloud infrastructure, migration services, and DevOps solutions for modern businesses.", icon: "bi-cloud"},
    
  ];

  useEffect(() => {
    getServiceImages()
      .then(setServiceImages)
      .catch(console.error);

    getPortfolioProjects()
      .then(setPortfolioProjects)
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Initialize intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.1 }
    );

    setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <div className="font-['Inter'] bg-slate-50 text-slate-800 scroll-smooth overflow-x-hidden">
      <Header />
      {/* Hero - Digital Marketing Style */}

      <section className="relative pt-36 sm:pt-28 md:pt-40 lg:pt-28 min-h-screen px-4 sm:px-6 bg-white lg:bg-white overflow-hidden">
        {/* Background for mobile/tablet - Blue gradient + Hero Image */}
        <div className="absolute inset-0 lg:hidden z-0">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #00257aff 30%, #0045ceff 40%, #0066FF 50%)",
            }}
          ></div>
          <div className="absolute top-50 left-6 w-50 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 transform -translate-y-1/2 -rotate-32 rounded-3xl overflow-hidden opacity-50">
            <img
              src="/img.jpg"
              alt="Digital Marketing Solution"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-160 right-16 w-50 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 transform -translate-y-1/2 rotate-12 rounded-3xl overflow-hidden opacity-60">
            <img
              src="/img.jpeg"
              alt="Digital Marketing Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Big Blue curved background - Desktop only */}
        <div
          className="hidden lg:block absolute top-[22rem] right-[-67rem] -translate-x-1/2 w-[95rem] h-[98rem] rounded-full z-0 rotate-[-15deg] opacity-0 transition-all duration-1000 ease-out reveal"
          style={{
            background:
              "linear-gradient(135deg, #00257aff 30%, #0045ceff 40%, #0066FF 50%)",
            transform: "rotate(-15deg)",
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT SIDE - Card on mobile/tablet */}
            <div className="lg:col-span-2 xl:col-span-1">
              <div className="lg:bg-transparent bg-white/95 backdrop-blur-sm lg:backdrop-blur-none rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 shadow-xl lg:shadow-none text-left opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100/20 lg:bg-blue-100/20 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                  <span className="text-gray-800 lg:text-gray-800">
                    Leading IT Solutions
                  </span>
                </div>

                <h1 className="text-gray-900 lg:text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                  Build the Future with{" "}
                  <span className="text-[#0047FF]">Arjava</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-700 lg:text-gray-600 mb-8 sm:mb-12">
                  We create innovative software solutions that transform
                  businesses. From web applications to mobile apps, we deliver
                  excellence.
                </p>

                <Link
                  to="/contact"
                  className="bg-[#0047FF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-sm sm:text-base"
                >
                  GET STARTED
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE - Desktop only */}
            <div className="hidden lg:flex relative items-center justify-center h-full w-full opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
              <div className="relative rotate-44 top-20 border-[#0047FF] w-120 h-120 rounded-[80px] overflow-hidden border-[0px] shadow-2xl">
                {/* <div className="absolute inset-0 rotate-45 border-[#0047FF] rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] overflow-hidden shadow-2xl"> */}
                <img
                  src="/img.jpeg"
                  alt="Digital Marketing Solution"
                  className="pt-22 w-[298px] h-[362px] transform -rotate-40 scale-150"
                />
                {/* </div> */}
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-0 left-0 sm:bottom-[-10px] sm:left-[-10px] bg-yellow-400 text-black px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-lg">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-xs font-bold">20+ Trusted clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Centered */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#0047FF] mb-3 sm:mb-4">
                500+
              </div>
              <div className="text-gray-600 text-base sm:text-lg">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#0047FF] mb-3 sm:mb-4">
                50+
              </div>
              <div className="text-gray-600 text-base sm:text-lg">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-[#0047FF] mb-3 sm:mb-4">
                5+
              </div>
              <div className="text-gray-600 text-base sm:text-lg">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Asymmetric */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            <div className="lg:col-span-1 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
              <div className="lg:sticky lg:top-32">
                <div className="text-sm font-semibold text-[#0047FF] mb-4">
                  ABOUT US
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6">
                  We Build Software That Matters
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  At Arjava Technologies, we specialize in creating innovative
                  software solutions that help businesses grow and succeed in
                  the digital age.
                </p>
                <Link
                  to="/about"
                  className="bg-[#0047FF] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-blue-700 text-sm sm:text-base transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0047FF] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <i className="bi bi-code-slash text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Custom Development
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Tailored software solutions built to meet your specific
                    business requirements.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal sm:mt-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0047FF] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <i className="bi bi-phone text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Mobile Solutions
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Native and cross-platform mobile applications for iOS and
                    Android.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal sm:-mt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0047FF] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <i className="bi bi-cloud text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Cloud Services
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Scalable cloud infrastructure and deployment solutions.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal sm:mt-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#0047FF] rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <i className="bi bi-shield-check text-xl sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    Security First
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Enterprise-grade security measures in all our solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Full Width Cards */}
      <section className="py-16 sm:py-20 lg:py-32 bg-[#001A4D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <div className="text-sm font-semibold text-blue-400 mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6">
              What We Deliver
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              From concept to deployment, we provide comprehensive IT solutions
              that drive business growth.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 lg:p-8 xl:p-12 rounded-2xl sm:rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#0047FF] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8">
                      <i className={`bi ${card.icon} text-lg sm:text-2xl lg:text-3xl text-white`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
                      {card.description}
                    </p>
                    <Link
                      to="/services"
                      className="text-blue-400 font-semibold hover:text-blue-300 text-sm sm:text-base transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                  <div className="bg-white/5 p-3 sm:p-4 lg:p-8 rounded-2xl lg:order-1">
                    <img
                      src={serviceImages[index]?.url || card.fallback}
                      alt={card.title}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Masonry Style */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <div className="text-sm font-semibold text-[#0047FF] mb-4">
              OUR PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Discover our latest work and see how we've helped businesses
              transform their digital presence.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="break-inside-avoid bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full"
                />
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <Link
              to="/projects"
              className="bg-[#0047FF] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
            <div className="text-sm font-semibold text-[#0047FF] mb-4">
              OUR FOUNDERS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Leading innovation and excellence in software development with
              years of industry experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <img
                src="/palanianna.jpeg"
                alt="Palani Vairavan"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Palani Vairavan
              </h3>
              <p className="text-[#0047FF] text-sm sm:text-base">
                Founder & CEO
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <img
                src="/Saravanananna.png"
                alt="Saravanan Arumugam"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Saravanan Arumugam
              </h3>
              <p className="text-[#0047FF] text-sm sm:text-base">Manager</p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <img
                src="/KarthikAnna.png"
                alt="Karthikeyan Rajendran"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Karthikeyan Rajendran
              </h3>
              <p className="text-[#0047FF] text-sm sm:text-base">
                Co-Founder & CEO
              </p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <img
                src="/amrishannapic.png"
                alt="Amrish KS"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Amrish KS
              </h3>
              <p className="text-[#0047FF] text-sm sm:text-base">CTO</p>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-12 reveal text-center">
              <img
                src="/manianna.png"
                alt="Pitchaimani Rajaram"
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Pitchaimani Rajaram
              </h3>
              <p className="text-[#0047FF] text-sm sm:text-base">
                CTO/ Senior Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Full Screen */}
      <section className="py-16 sm:py-20 flex items-center justify-center bg-[#adc4ffff]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white opacity-0 translate-y-12 transition-all duration-700 ease-out reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and create innovative solutions that
            drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#0047FF] px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-6 sm:px-8 lg:px-12 py-2 sm:py-3 lg:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-[#0047FF] transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
