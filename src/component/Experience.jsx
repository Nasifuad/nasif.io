import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    title: "BSc in Computer Science",
    organization: "Green University of Bangladesh",
    date: "2020 - 2024",
    description: "Specialized in software engineering and web development",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    organization: "Dhaka College",
    date: "2018 - 2020",
    description: "Science Division with focus on Computer Science",
    icon: "📚",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    organization: "Programming Hero",
    date: "2021",
    description: "Completed intensive full-stack web development program",
    icon: "🚀",
  },
];

const experience = [
  {
    id: 1,
    title: "UI/UX Designer",
    organization: "Robotech Valley",
    date: "2023 - Present",
    description:
      "Designed user interfaces for SaaS products and mobile applications",
    icon: "💼",
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    organization: "Tech Solutions Ltd",
    date: "2022 - 2023",
    description:
      "Developed responsive web applications using React and TypeScript",
    icon: "💻",
  },
];

const Experience = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#0C182E] to-[#1A2A4D] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex gap-8 mb-16">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold pl-8"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Journey
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

            <div className="pl-8">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="text-3xl">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-100">
                    Education
                  </h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-9 top-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center text-white z-10 shadow-lg">
                      {item.icon}
                    </div>

                    <div className="bg-gray-800/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700 transition-all duration-300 hover:border-cyan-500/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-100">
                            {item.title}
                          </h3>
                          <p className="text-cyan-300 text-sm">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-gray-900/30 px-2 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>

                      <p className="mt-3 text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

            <div className="pl-8">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="text-3xl">💼</div>
                  <h3 className="text-2xl font-bold text-gray-100">
                    Experience
                  </h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-9 top-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center text-white z-10 shadow-lg">
                      {item.icon}
                    </div>

                    <div className="bg-gray-800/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700 transition-all duration-300 hover:border-cyan-500/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-bold text-gray-100">
                            {item.title}
                          </h3>
                          <p className="text-cyan-300 text-sm">
                            {item.organization}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-gray-900/30 px-2 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>

                      <p className="mt-3 text-gray-300 text-sm">
                        {item.description}
                      </p>

                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Figma",
                            "UI Design",
                            "User Research",
                            "Prototyping",
                          ].map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
