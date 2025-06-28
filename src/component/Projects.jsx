import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce solution with payment processing and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["React", "Firebase", "Material UI", "Redux"],
      category: "Frontend",
    },
    {
      title: "API Analytics Dashboard",
      description:
        "Real-time analytics dashboard for monitoring API performance.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["Next.js", "Express", "Redis", "Chart.js"],
      category: "Backend",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard for managing multiple social media accounts and scheduling posts.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["React", "Node.js", "PostgreSQL", "OAuth"],
      category: "Full Stack",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts.",
      image:
        "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["React", "REST API", "Geolocation", "Tailwind CSS"],
      category: "Frontend",
    },
    {
      title: "Inventory Management System",
      description:
        "Enterprise inventory tracking system with reporting capabilities.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
      github: "https://github.com",
      link: "https://example.com",
      tech: ["Java", "Spring Boot", "MySQL", "Docker"],
      category: "Backend",
    },
  ];

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  useEffect(() => {
    setIsLoading(true);

    // Simulate API call delay
    const timer = setTimeout(() => {
      setFilteredProjects(
        selectedCategory === "All"
          ? projects
          : projects.filter((project) => project.category === selectedCategory)
      );
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#0C182E] to-[#1A2A4D] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative flex gap-8 mb-16">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold pl-8"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Recent Works
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute right-0 top-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full px-4 py-1 text-sm font-medium"
          >
            {projects.length} Projects
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            className="flex flex-wrap gap-3 mb-12 justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium relative
                ${
                  selectedCategory !== category
                    ? "bg-white/10 text-gray-300 border-cyan-500/30 hover:bg-cyan-500/20"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.span
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="bg-[#112240] shadow-xl rounded-xl overflow-hidden group relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-cyan-500/20"
                    variants={item}
                    layout
                  >
                    <div className="relative">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-90" />

                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <motion.div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-full text-xl hover:scale-110 shadow-md transition-all"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-gradient-to-r from-cyan-600 to-blue-700 p-3 rounded-full text-xl hover:scale-110 shadow-md transition-all"
                          aria-label={`Visit ${project.title} live site`}
                        >
                          <FiExternalLink />
                        </a>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 min-h-[60px]">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gradient-to-r hover:from-cyan-600/30 hover:to-blue-700/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mt-12 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg font-medium">View All Projects</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
