import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Privacy = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans bg-slate-50 text-slate-800 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[24rem] sm:min-h-[32rem] lg:min-h-[36rem] flex items-center justify-center text-center px-4 sm:px-6 bg-white pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-blue-100 rounded-full mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
            <i className="bi bi-shield-check mr-1 sm:mr-2"></i>
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Your Privacy <span className="text-[#0047FF]">Matters</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            We are committed to protecting your privacy and ensuring
            transparency in how we collect, use, and safeguard your information.
          </p>
          <p className="text-sm sm:text-base opacity-75">
            Last updated: December 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl reveal opacity-0 translate-y-12">
            <div className="prose max-w-none">
              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-slate-500 text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                <li className="mb-1 sm:mb-2">
                  Contact us through our website or email
                </li>
                <li className="mb-1 sm:mb-2">
                  Request information about our services
                </li>
                <li className="mb-1 sm:mb-2">Subscribe to our newsletter</li>
                <li className="mb-1 sm:mb-2">
                  Engage with our customer support
                </li>
              </ul>

              <h3 className="text-slate-600 font-semibold text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 lg:mt-6 mb-2 sm:mb-3">
                Personal Information
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                This may include your name, email address, phone number, company
                name, and any other information you choose to provide.
              </p>

              <h3 className="text-slate-600 font-semibold text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 lg:mt-6 mb-2 sm:mb-3">
                Usage Information
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We automatically collect certain information about your device
                and how you interact with our website, including IP address,
                browser type, pages visited, and time spent on our site.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-slate-500 text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                <li className="mb-1 sm:mb-2">
                  Provide and improve our services
                </li>
                <li className="mb-1 sm:mb-2">
                  Respond to your inquiries and requests
                </li>
                <li className="mb-1 sm:mb-2">
                  Send you updates about our services (with your consent)
                </li>
                <li className="mb-1 sm:mb-2">
                  Analyze website usage and improve user experience
                </li>
                <li className="mb-1 sm:mb-2">Comply with legal obligations</li>
              </ul>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                3. Information Sharing
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties except:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-slate-500 text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                <li className="mb-1 sm:mb-2">With your explicit consent</li>
                <li className="mb-1 sm:mb-2">
                  To trusted service providers who assist us in operating our
                  website
                </li>
                <li className="mb-1 sm:mb-2">
                  When required by law or to protect our rights
                </li>
                <li className="mb-1 sm:mb-2">
                  In connection with a business transfer or merger
                </li>
              </ul>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                4. Data Security
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                Our website uses cookies to enhance your browsing experience.
                You can control cookie settings through your browser
                preferences. We may use analytics tools to understand how
                visitors interact with our site.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-slate-500 text-sm sm:text-base mb-2 sm:mb-3 lg:mb-4">
                <li className="mb-1 sm:mb-2">
                  Access the personal information we hold about you
                </li>
                <li className="mb-1 sm:mb-2">
                  Request correction of inaccurate information
                </li>
                <li className="mb-1 sm:mb-2">
                  Request deletion of your personal information
                </li>
                <li className="mb-1 sm:mb-2">
                  Opt-out of marketing communications
                </li>
                <li className="mb-1 sm:mb-2">
                  Object to processing of your personal information
                </li>
              </ul>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                7. Data Retention
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
                If we become aware that we have collected such information, we
                will take steps to delete it.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information during such transfers.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                We may update this privacy policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date.
              </p>

              <h2 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                11. Contact Us
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 lg:mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>

              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg mt-4 sm:mt-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      India Office
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-start">
                        <i className="bi bi-geo-alt text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <div className="leading-relaxed">
                          19, Ganesh Nagar Main Road
                          <br />
                          Selaiyur, Chennai - 600073
                          <br />
                          Tamil Nadu, India
                        </div>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-envelope text-blue-600 mr-2 flex-shrink-0"></i>
                        <a
                          href="mailto:arjavatech@gmail.com"
                          className="text-blue-600 hover:underline break-all"
                        >
                          arjavatech@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-telephone text-blue-600 mr-2 flex-shrink-0"></i>
                        <span>044-35675035</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      USA Office
                    </h3>
                    <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                      <div className="flex items-start">
                        <i className="bi bi-geo-alt text-blue-600 mr-2 mt-1 flex-shrink-0"></i>
                        <div className="leading-relaxed">
                          2135 204th PL NE
                          <br />
                          Sammamish, WA - 98974
                          <br />
                          United States
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Privacy;
