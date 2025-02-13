import { motion } from "framer-motion";
import { technologies } from "../constants";

const Skill = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <motion.section
      id="skill"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto py-20 px-6 md:px-12 lg:px-24 text-gray-100"
    >
      {/* Left Border Line Wrapper */}
      <div className="relative flex gap-8">
        {/* Left Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative pl-8"
        >
          Skills
        </motion.h2>
      </div>

      {/* Skills Icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pl-8"
      >
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:bg-gradient-to-br from-cyan-600/20 to-blue-700/20 transition-all"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain mb-3 filter grayscale hover:grayscale-0 transition-all"
            />
            <span className="text-sm text-gray-300 text-center">
              {technology.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skill;
