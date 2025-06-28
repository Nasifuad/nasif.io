import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaLightbulb,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaChartLine,
  FaCloud,
  FaSyncAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting responsive, high-performance websites with React, Next.js, and modern frameworks.",
    icon: <FaCode className="text-3xl" />,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces with user-centered design principles and interactive prototypes.",
    icon: <FaPaintBrush className="text-3xl" />,
    color: "from-purple-400 to-pink-500",
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic guidance for digital transformation and technology stack optimization.",
    icon: <FaLightbulb className="text-3xl" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications with React Native and Flutter.",
    icon: <FaMobileAlt className="text-3xl" />,
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable APIs and microservices with Node.js, Express, and cloud technologies.",
    icon: <FaServer className="text-3xl" />,
    color: "from-indigo-400 to-violet-500",
  },
  {
    title: "Performance Optimization",
    description:
      "Accelerating web applications through advanced optimization techniques.",
    icon: <FaRocket className="text-3xl" />,
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Data Visualization",
    description:
      "Transforming complex data into interactive dashboards and visual insights.",
    icon: <FaChartLine className="text-3xl" />,
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Cloud Solutions",
    description:
      "Implementing and managing cloud infrastructure on AWS, Azure, and GCP.",
    icon: <FaCloud className="text-3xl" />,
    color: "from-sky-400 to-blue-500",
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Automating deployment pipelines and infrastructure with Docker and Kubernetes.",
    icon: <FaSyncAlt className="text-3xl" />,
    color: "from-emerald-400 to-green-500",
  },
];

const Services = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#0C182E] to-[#1A2A4D]">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex gap-8 mb-16">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Services
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              I provide comprehensive digital solutions to transform your ideas
              into exceptional digital experiences
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                hover: { duration: 0.3 },
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
              />

              {/* Service card */}
              <div className="h-full bg-gray-800/40 backdrop-blur-lg p-6 rounded-xl border border-gray-700 group-hover:border-transparent transition-all duration-500">
                <div
                  className={`mb-5 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Figma", "Node.js", "AWS"].map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-700/20 to-blue-800/20 backdrop-blur-lg border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to start your project?
            </h3>
            <p className="text-cyan-100 max-w-xl">
              Lets collaborate to bring your vision to life with cutting-edge
              solutions
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
