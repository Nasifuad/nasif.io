import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 95,
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 85,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: 80,
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 85,
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 75,
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: 90,
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: 70,
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: 80,
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: 85,
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: 65,
  },
];

const Skill = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate through skills
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % technologies.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#0C182E] to-[#1A2A4D] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="relative flex gap-8 mb-16">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <div className="pl-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mt-4 max-w-2xl"
            >
              Proficient in a diverse set of modern technologies and frameworks
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left: Skill Logos Column */}
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <div className="relative h-[500px] w-full max-w-xs flex items-center justify-center">
              {/* Connecting Line */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

              {/* Skill Logos Container */}
              <div className="relative h-[400px] w-full flex flex-col items-center justify-between">
                {technologies.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`w-24 h-24 rounded-full flex items-center justify-center backdrop-blur-lg border z-10 cursor-pointer ${
                      index === activeIndex
                        ? "shadow-xl scale-110 border-cyan-500 bg-cyan-500/15"
                        : "scale-90 border-gray-700 bg-gray-800/40"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      top: `${index * (350 / (technologies.length - 1))}px`,
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: isAnimating ? 0.5 : 1,
                      ease: isAnimating ? "easeInOut" : "easeOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-14 h-14 object-contain"
                    />

                    {/* Level indicator */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-xs font-bold text-white">
                      {skill.level}%
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Active Skill Details */}
          <div className="w-full md:w-3/5">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl backdrop-blur-lg border border-cyan-500/30 bg-gradient-to-br from-cyan-600/20 to-blue-700/20"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={technologies[activeIndex].icon}
                    alt={technologies[activeIndex].name}
                    className="w-16 h-16 object-contain"
                  />
                  <h3 className="text-3xl font-bold text-white">
                    {technologies[activeIndex].name}
                  </h3>
                </div>
                <span className="text-cyan-400 font-bold text-2xl">
                  {technologies[activeIndex].level}%
                </span>
              </div>

              <div className="h-3 bg-gray-700 rounded-full overflow-hidden mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${technologies[activeIndex].level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-5 bg-gray-700/30 rounded-xl">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                    Experience Level
                  </h4>
                  <p className="text-gray-300">
                    {technologies[activeIndex].level > 90
                      ? "Expert - Extensive production experience"
                      : technologies[activeIndex].level > 75
                      ? "Advanced - Significant project experience"
                      : "Proficient - Working knowledge"}
                  </p>
                </div>

                <div className="p-5 bg-gray-700/30 rounded-xl">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                    Project Experience
                  </h4>
                  <p className="text-gray-300">
                    {technologies[activeIndex].level > 90
                      ? "10+ production projects"
                      : technologies[activeIndex].level > 75
                      ? "5+ completed projects"
                      : "Multiple learning projects"}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  Key Capabilities
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "API Development",
                    "Performance Optimization",
                    "Debugging",
                    "System Design",
                  ].map((capability, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full text-sm bg-gray-700/50 text-gray-300"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                  Certifications & Training
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    Completed React Advanced Concepts course
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    Node.js Certified Developer (NCD)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    MongoDB University certification
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skill Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-cyan-400 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`View ${technologies[index].name} skill`}
            />
          ))}
        </div>

        {/* Skill Proficiency Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-gradient-to-br from-cyan-700/20 to-blue-800/20 backdrop-blur-lg rounded-xl border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
                ⭐
              </div>
              <h3 className="text-2xl font-bold text-white">Advanced Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies
                .filter((skill) => skill.level >= 85)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-cyan-700/20 to-blue-800/20 backdrop-blur-lg rounded-xl border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">
                🔧
              </div>
              <h3 className="text-2xl font-bold text-white">
                Proficient Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies
                .filter((skill) => skill.level >= 70 && skill.level < 85)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/30"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-cyan-700/20 to-blue-800/20 backdrop-blur-lg rounded-xl border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xl">
                📚
              </div>
              <h3 className="text-2xl font-bold text-white">Learning Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies
                .filter((skill) => skill.level < 70)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 rounded-full text-sm bg-indigo-500/10 text-indigo-300 border border-indigo-500/30"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skill;
