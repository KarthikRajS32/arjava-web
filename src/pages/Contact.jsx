import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { submitContact } from "../services/apiService";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
      el.classList.add('active');
    });
  }, []);



  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContact(formData);
      setPopupMessage('Message sent successfully!');
      setIsSuccess(true);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setPopupMessage('Failed to send message. Please try again.');
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="font-['Inter'] bg-slate-50 text-slate-800 scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[30rem] flex items-center justify-center text-center px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 rounded-full mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm sm:text-base">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            Let's Start Your <span className="text-[#0047FF]">Project</span>
          </h1>
          <p className="text-lg sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            Ready to transform your ideas into reality? Get in touch with our
            team and let's discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:shadow-xl reveal hover-lift">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="first name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="abc@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">
                      Mobile Development
                    </option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="iot-solutions">IoT Solutions</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(90deg,#3b82f6_0%,#9333ea_100%)] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:bg-[linear-gradient(90deg,#2563eb_0%,#7e22ce_100%)] hover:scale-101 hover:shadow-xl transition-all duration-300 text-sm sm:text-base cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 reveal">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Get in Touch
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We're here to help you bring your ideas to life. Whether you
                  have a project in mind or just want to learn more about our
                  services, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[linear-gradient(135deg,#3b82f6_0%,#9333ea_100%)] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <i className="bi bi-geo-alt text-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Office Address
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      19, Ganesh Nagar Main Road
                      <br />
                      Selaiyur, Chennai - 600073
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[linear-gradient(135deg,#22c55e_0%,#0d9488_100%)] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <i className="bi bi-envelope text-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Email Us
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">
                      arjavatech@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[linear-gradient(135deg,#f97316_0%,#dc2626_100%)] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <i className="bi bi-telephone text-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Call Us
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      044-35675035
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-xl p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-sm">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[linear-gradient(135deg,#a855f7_0%,#db2777_100%)] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <i className="bi bi-clock text-white text-sm sm:text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-[1px] hover:shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7479910917946!2d80.14273187428608!3d12.923912115923658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ee2295d5c29%3A0xf83071011e4a93e5!2s19%2C%20Ganesh%20Nagar%20Main%20Rd%2C%20Mahalakshmi%20Nagar%2C%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600059!5e0!3m2!1sen!2sin!4v1697103920581!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="sm:h-[300px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 text-center">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
              isSuccess ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <i className={`bi ${isSuccess ? 'bi-check-circle text-green-500' : 'bi-x-circle text-red-500'} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {isSuccess ? 'Success!' : 'Error!'}
            </h3>
            <p className="text-gray-600">{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
