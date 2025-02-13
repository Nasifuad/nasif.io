import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaLightbulb,
  FaMobileAlt,
  FaServer,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Creating responsive and modern websites with the latest technologies.",
    icon: <FaCode className="text-4xl text-cyan-400" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-friendly and aesthetically pleasing interfaces.",
    icon: <FaPaintBrush className="text-4xl text-blue-400" />,
  },
  {
    title: "Consulting",
    description: "Providing expert guidance for your digital projects.",
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Building high-performance mobile applications using React Native.",
    icon: <FaMobileAlt className="text-4xl text-green-400" />,
  },
  {
    title: "Backend Development",
    description:
      "Developing scalable and efficient backend solutions with Node.js & Express.",
    icon: <FaServer className="text-4xl text-purple-400" />,
  },
  {
    title: "SEO & Optimization",
    description:
      "Optimizing websites for performance, accessibility, and search engines.",
    icon: <FaRocket className="text-4xl text-pink-400" />,
  },
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-16 rounded-lg text-gray-100">
      <div className="relative flex gap-8 mb-12">
        {/* Left Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative pl-8"
        >
          My Services
        </motion.h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-700"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
