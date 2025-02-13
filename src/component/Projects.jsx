import { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { projects } from "../constants";
import { ArrowBigRightDash, Link2Icon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="container mx-auto px-6 py-10 flex flex-col rounded-lg  bg-[#0C182E] text-white">
      <div className="relative flex gap-8">
        {/* Left Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative pl-8"
        >
          My Recent Works
        </motion.h2>
      </div>

      <div className="flex flex-col p-3 items-center">
        <motion.div
          className="flex gap-4 mb-8 justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 font-medium relative
              ${
                selectedCategory !== category
                  ? "bg-white text-gray-800 border-amber-300 hover:bg-amber-100"
                  : "bg-amber-500 text-white border-amber-500 shadow-lg"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                className="bg-[#112240] shadow-lg rounded-lg overflow-hidden group relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gray-800 p-2 rounded-full text-2xl hover:scale-110 shadow-md hover:bg-gray-700 transition-all"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gray-800 p-2 rounded-full text-2xl hover:scale-110 shadow-md hover:bg-gray-700 transition-all"
                    >
                      <Link2Icon />
                    </a>
                  </motion.div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-700 rounded-full px-2 py-1 text-xs font-semibold text-gray-300 hover:bg-gray-600 transition-colors duration-300"
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

        <motion.div
          className="flex items-center justify-center mt-8 bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 text-white py-2 px-4 rounded-full w-max shadow-md hover:shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-lg">View All Projects</p>
          <ArrowBigRightDash className="ml-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
