import { motion } from "framer-motion";

const experiences = [
  {
    title: "Education",
    description:
      "BSc in Computer Science and Engineering (CSE), Green University of Bangladesh, 2020-2024",
    icon: "🎓",
  },
  {
    title: "Work Experience",
    description: "UI/UX Designer at Robotech Valley, 2023-2024",
    icon: "💼",
  },
];

const Experience = () => {
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
          My Education & Experience
        </motion.h2>
      </div>

      {/* Education and Work Experience Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-700"
          >
            <div className="mb-4 text-4xl">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
