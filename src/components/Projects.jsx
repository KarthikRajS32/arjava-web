// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Projects = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [animatingCards, setAnimatingCards] = useState(false);

//   const projects = {
//     brightbrains: {
//       title: "Bright Brains",
//       category: "Mobile App",
//       image: "/bbrain.jpeg",
//       description:
//         "An innovative mobile application designed to boost brain power through engaging games and cognitive challenges. The app features various brain training exercises, memory games, and puzzles that help users improve their cognitive abilities.",
//       features: [
//         "Brain Training Games",
//         "Memory Exercises",
//         "Progress Tracking",
//         "Cognitive Challenges",
//         "User Analytics",
//       ],
//     },
//     tnngo: {
//       title: "TN-NGO",
//       category: "Education",
//       image: "/tnngo.png",
//       description:
//         "A comprehensive platform connecting NGOs with students to provide quality education and learning opportunities. The system facilitates educational resource sharing and community engagement.",
//       features: [
//         "NGO Registration",
//         "Student Enrollment",
//         "Resource Management",
//         "Progress Tracking",
//         "Community Features",
//       ],
//     },
//     goddard: {
//       title: "Goddard",
//       category: "Web App",
//       image: "/goddardnew.png",
//       description:
//         "Comprehensive web application for daycare school management and operations. Streamlines administrative tasks, parent communication, and child development tracking.",
//       features: [
//         "Student Management",
//         "Parent Portal",
//         "Staff Scheduling",
//         "Activity Tracking",
//         "Billing System",
//       ],
//     },
//     findbed: {
//       title: "FindBed",
//       category: "Healthcare",
//       image: "/findabednew.png",
//       description:
//         "Healthcare bed booking platform that connects patients with available hospital beds in real-time. Simplifies the process of finding and reserving medical facilities.",
//       features: [
//         "Real-time Availability",
//         "Hospital Network",
//         "Booking System",
//         "Patient Records",
//         "Emergency Services",
//       ],
//     },
//     sorting: {
//       title: "Sorting Analysis",
//       category: "Analytics",
//       image: "/sortingnew.png",
//       description:
//         "Advanced sorting algorithm analysis and visualization tool for educational and research purposes. Provides interactive demonstrations of various sorting techniques.",
//       features: [
//         "Algorithm Visualization",
//         "Performance Analysis",
//         "Interactive Learning",
//         "Comparison Tools",
//         "Educational Content",
//       ],
//     },
//     mugavari: {
//       title: "Mugavari",
//       category: "Foundation",
//       image: "/mugavarinew.png",
//       description:
//         "Web application for Mugavari Foundation to manage their charitable activities and community outreach programs. Facilitates donation management and volunteer coordination.",
//       features: [
//         "Donation Management",
//         "Volunteer Portal",
//         "Event Organization",
//         "Impact Tracking",
//         "Community Engagement",
//       ],
//     },
//     rattham: {
//       title: "Rattham Udhavi",
//       category: "Healthcare",
//       image: "/raththam1.png",
//       description:
//         "Blood donation management system that connects donors with recipients and manages blood bank operations efficiently.",
//       features: [
//         "Donor Registration",
//         "Blood Bank Management",
//         "Emergency Requests",
//         "Inventory Tracking",
//         "Mobile Notifications",
//       ],
//     },
//     sehatuka: {
//       title: "SehatUka",
//       category: "Healthcare",
//       image: "/sehatuka.png",
//       description:
//         "Health monitoring application that helps users track their wellness journey and connect with healthcare providers.",
//       features: [
//         "Health Tracking",
//         "Doctor Consultation",
//         "Medication Reminders",
//         "Fitness Goals",
//         "Health Reports",
//       ],
//     },
//     grit: {
//       title: "Grit",
//       category: "Analytics",
//       image: "/grit-web-design.jpg",
//       description:
//         "Performance tracking system designed to monitor and analyze various metrics for improved productivity and goal achievement.",
//       features: [
//         "Performance Metrics",
//         "Goal Setting",
//         "Progress Analytics",
//         "Team Collaboration",
//         "Custom Reports",
//       ],
//     },
//     bharathi: {
//       title: "Bharathi Tamil Academy",
//       category: "Education",
//       image: "/barathi.png",
//       description:
//         "Bharathi Tamil Academy (BTA) is a registered 501(c)(3) nonprofit organization teaching Tamil language and culture in the Redmond area.",
//       features: [
//         "Language Classes",
//         "Cultural Programs",
//         "Student Portal",
//         "Progress Tracking",
//         "Community Events",
//       ],
//     },
//   };

//   const projectItems = [
//     {
//       id: "brightbrains",
//       category: "app",
//       tag: "Mobile App",
//       description:
//         "An innovative app that boosts brain power through engaging games and cognitive challenges",
//     },
//     {
//       id: "tnngo",
//       category: "website",
//       tag: "Education",
//       description:
//         "Connecting NGOs with students to provide quality education and learning opportunities",
//     },
//     {
//       id: "goddard",
//       category: "webapp",
//       tag: "Web App",
//       description:
//         "Comprehensive web application for daycare school management and operations",
//     },
//     {
//       id: "findbed",
//       category: "webapp",
//       tag: "Healthcare",
//       description: "Healthcare bed booking platform",
//     },
//     {
//       id: "sorting",
//       category: "webapp",
//       tag: "Analytics",
//       description: "Advanced sorting algorithm analysis and visualization tool",
//     },
//     {
//       id: "mugavari",
//       category: "webapp",
//       tag: "Foundation",
//       description:
//         "Web application for Mugavari Foundation to manage their charitable activities and community outreach",
//     },
//     {
//       id: "rattham",
//       category: "app",
//       tag: "Healthcare",
//       description: "Blood donation management system",
//     },
//     {
//       id: "sehatuka",
//       category: "app",
//       tag: "Healthcare",
//       description: "Health monitoring application",
//     },
//     {
//       id: "grit",
//       category: "website",
//       tag: "Analytics",
//       description: "Performance tracking system",
//     },
//     {
//       id: "bharathi",
//       category: "website",
//       tag: "Education",
//       description:
//         "Bharathi Tamil Academy, nonprofit organization teaching Tamil in the Redmond",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(
//               "opacity-100",
//               "translate-y-0",
//               "translate-x-0"
//             );
//             entry.target.classList.remove(
//               "opacity-0",
//               "translate-y-12",
//               "-translate-x-12",
//               "translate-x-12"
//             );
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document
//       .querySelectorAll(".reveal, .fade-left, .fade-right")
//       .forEach((el) => {
//         observer.observe(el);
//       });

//     return () => observer.disconnect();
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const openModal = (projectId) => {
//     setSelectedProject(projects[projectId]);
//     setModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedProject(null);
//     document.body.style.overflow = "auto";
//   };

//   const filterProjects = (category) => {
//     if (category !== activeFilter) {
//       setAnimatingCards(true);
//       setTimeout(() => {
//         setActiveFilter(category);
//         setTimeout(() => setAnimatingCards(false), 50);
//       }, 150);
//     }
//   };

//   const filteredProjects =
//     activeFilter === "all"
//       ? projectItems
//       : projectItems.filter((project) => project.category === activeFilter);

//   return (
//     <div className="font-sans bg-slate-50 text-slate-800 overflow-x-hidden w-full max-w-full scroll-smooth">
//       <Header />

//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-6 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]">
//         <div className="max-w-4xl mx-auto text-white reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
//           <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/20 rounded-full mb-6 sm:mb-8">
//             <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
//             <span className="text-sm sm:text-base">🚀 Our Portfolio</span>
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight">
//             All <span className="text-yellow-300">Projects</span>
//           </h1>
//           <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
//             Explore our complete collection of innovative solutions and
//             successful projects.
//           </p>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
//             <button
//               onClick={() => filterProjects("all")}
//               className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg ${
//                 activeFilter === "all"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => filterProjects("app")}
//               className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
//                 activeFilter === "app"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//             >
//               Mobile App
//             </button>
//             <button
//               onClick={() => filterProjects("website")}
//               className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
//                 activeFilter === "website"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//             >
//               Website
//             </button>
//             <button
//               onClick={() => filterProjects("webapp")}
//               className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
//                 activeFilter === "webapp"
//                   ? "bg-white text-blue-600"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//             >
//               Web App
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
//             {filteredProjects.map((project, index) => (
//               <div
//                 key={`${activeFilter}-${project.id}`}
//                 className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-6 ${
//                   animatingCards
//                     ? "opacity-0 scale-95"
//                     : "opacity-100 scale-100"
//                 }`}
//                 style={{
//                   transitionDelay: animatingCards ? "0ms" : `${index * 50}ms`,
//                 }}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={projects[project.id].image}
//                     alt={projects[project.id].title}
//                     className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300"
//                   />
//                   <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
//                     {project.tag}
//                   </div>
//                   <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                     <div className="flex space-x-3">
//                       <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200 flex items-center">
//                         <i className="bi bi-link-45deg mr-2"></i>Live Demo
//                       </button>
//                       <button
//                         onClick={() => openModal(project.id)}
//                         className="bg-blue-500/80 backdrop-blur-md border border-blue-400/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600/80 transition-colors duration-200 flex items-center"
//                       >
//                         <i className="bi bi-info-circle mr-2"></i>Details
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     {projects[project.id].title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 sm:py-20 lg:py-28 flex items-center justify-center bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)]">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
//             Let's discuss your requirements and create innovative solutions that
//             drive your business forward.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
//             <a
//               href="contact us.html"
//               className="bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100"
//             >
//               Get Started
//             </a>
//             <a
//               href="our services.html"
//               className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600"
//             >
//               Our Services
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer/>

//       {/* Modal */}
//       {modalOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
//           onClick={(e) => e.target === e.currentTarget && closeModal()}
//         >
//           <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300">
//             <div className="relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-white transition-colors"
//               >
//                 <i className="bi bi-x-lg text-lg"></i>
//               </button>
//               {selectedProject && (
//                 <>
//                   <div className="relative">
//                     <img
//                       src={selectedProject.image}
//                       alt={selectedProject.title}
//                       className="w-full h-auto max-h-96 object-contain rounded-t-2xl bg-gray-50"
//                     />
//                     <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium">
//                       {selectedProject.category}
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                       {selectedProject.title}
//                     </h2>
//                     <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                       {selectedProject.description}
//                     </p>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                         Key Features
//                       </h3>
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                         {selectedProject.features.map((feature, index) => (
//                           <div
//                             key={index}
//                             className="flex items-center text-gray-600"
//                           >
//                             <i className="bi bi-check-circle text-green-500 mr-2"></i>
//                             {feature}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex space-x-4">
//                       <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
//                         <i className="bi bi-link-45deg mr-2"></i>Live Demo
//                       </button>
//                       <button
//                         onClick={closeModal}
//                         className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
//                       >
//                         Close
//                       </button>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;




















import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [animatingCards, setAnimatingCards] = useState(false);

  // 🔥 NEW STATES FOR API DATA
  const [projects, setProjects] = useState({});
  const [projectItems, setProjectItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 FETCH DATA FROM BACKEND
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://your-backend.com/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjects(data.projects);
        setProjectItems(data.projectItems);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 🔥 SHOW LOADING SCREEN
  // if (loading) {
  //   return (
  //     <div className="text-center py-32 text-xl font-semibold text-gray-700">
  //       Loading projects…
  //     </div>
  //   );
  // }

  // 🔥 SHOW ERROR SCREEN
  // if (error) {
  //   return (
  //     <div className="text-center py-32 text-xl font-semibold text-red-600">
  //       {error}
  //     </div>
  //   );
  // }

  // Animations
  useEffect(() => {
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

    document
      .querySelectorAll(".reveal, .fade-left, .fade-right")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openModal = (projectId) => {
    setSelectedProject(projects[projectId]);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const filterProjects = (category) => {
    if (category !== activeFilter) {
      setAnimatingCards(true);
      setTimeout(() => {
        setActiveFilter(category);
        setTimeout(() => setAnimatingCards(false), 50);
      }, 150);
    }
  };

  const filteredProjects =
    activeFilter === "all"
      ? projectItems
      : projectItems.filter((project) => project.category === activeFilter);

  return (
    <div className="font-['Inter'] bg-slate-50 text-slate-800 overflow-x-hidden w-full max-w-full scroll-smooth">
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-[40rem] flex items-center justify-center text-center px-4 sm:px-6 bg-white ">
        <div className="max-w-4xl mx-auto font-black reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 rounded-full mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm sm:text-base">Our Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 sm:mb-8 leading-tight">
            All <span className="text-[#0047FF]">Projects</span>
          </h1>

          <p className="text-lg sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto px-4">
            Explore our complete collection of innovative solutions and
            successful projects.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            <button
              onClick={() => filterProjects("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#0047FF] text-white"
                  : "bg-gray-300 backdrop-blur-md text-black hover:bg-[#0047FF] hover:text-white"
              }`}
            >
              All
            </button>

            <button
              onClick={() => filterProjects("app")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === "app"
                  ? "bg-[#0047FF] text-white"
                  : "bg-gray-300 backdrop-blur-md text-black hover:bg-[#0047FF] hover:text-white"
              }`}
            >
              Mobile App
            </button>

            <button
              onClick={() => filterProjects("website")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === "website"
                  ? "bg-[#0047FF] text-white"
                  : "bg-gray-300 backdrop-blur-md text-black hover:bg-[#0047FF] hover:text-white"
              }`}
            >
              Website
            </button>

            <button
              onClick={() => filterProjects("webapp")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === "webapp"
                  ? "bg-[#0047FF] text-white"
                  : "bg-gray-300 backdrop-blur-md text-black hover:bg-[#0047FF] hover:text-white"
              }`}
            >
              Web App
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredProjects.map((project, index) => (
              <div
                key={`${activeFilter}-${project.id}`}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid mb-6 ${
                  animatingCards
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
                style={{
                  transitionDelay: animatingCards ? "0ms" : `${index * 50}ms`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={projects[project.id].image}
                    alt={projects[project.id].title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-300"
                  />

                  <div className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-800 shadow-sm">
                    {project.tag}
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30">
                        <i className="bi bi-link-45deg mr-2"></i>Live Demo
                      </button>

                      <button
                        onClick={() => openModal(project.id)}
                        className="bg-blue-500/80 backdrop-blur-md border border-blue-400/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600/80"
                      >
                        <i className="bi bi-info-circle mr-2"></i>Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {projects[project.id].title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Loading */}
        {loading && (
          <div className="text-center text-lg py-10 text-blue-500">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-lg py-10 text-red-500">
            Failed to load project data. Please try again later.
          </div>
        )}

        {/* Only render project list when data exists */}
        {!loading && !error && (
          <>
            {/* Your existing Projects List UI */}
            {/* example: */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md"
                  />
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 flex items-center justify-center bg-[#adc4ffff]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 text-white reveal opacity-0 translate-y-12 transition-all duration-700 ease-out">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
            Ready to Start Your Project?
          </h2>

          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and create innovative solutions that
            drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="contact us.html"
              className="bg-white text-blue-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100"
            >
              Get Started
            </a>

            <a
              href="our services.html"
              className="border-2 border-white text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-blue-600"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-transform duration-300">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-white"
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-96 object-contain rounded-t-2xl bg-gray-50"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h3 className="text-xl font-semibold mb-3">Key Features</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {selectedProject.features.map((f, i) => (
                    <div key={i} className="flex items-center text-gray-600">
                      <i className="bi bi-check-circle text-green-500 mr-2"></i>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    <i className="bi bi-link-45deg mr-2"></i>Live Demo
                  </button>

                  <button
                    onClick={closeModal}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
