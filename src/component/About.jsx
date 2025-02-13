import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import nasif from "../assets/nasif.png";
import { socialLinks } from "../constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const imageVariants = {
    hover: {
      y: -10,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="container mx-auto py-20 px-6 md:px-12 lg:px-24  rounded-2xl  text-gray-100">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16"
      >
        {/* Text Content */}
        <motion.div variants={childVariants} className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Hello!
          </motion.h2>

          <motion.h1
            variants={childVariants}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-cyan-300 bg-clip-text text-transparent"
          >
            I&lsquo;m Nasif Fuad
          </motion.h1>

          {/* Typewriter Effect with Gradient Highlight */}
          <motion.div
            variants={childVariants}
            className="text-2xl md:text-3xl mb-8 h-12"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "React Specialist",
                  "MERN Stack Expert",
                  "UI/UX Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1000}
                cursorBlinking={true}
              />
            </span>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={childVariants}
          whileHover="hover"
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            variants={imageVariants}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse" />
            <img
              src={nasif}
              alt="Nasif"
              className="relative z-10 border-2 border-cyan-500/30 rounded-full w-full h-full object-cover shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* About Content */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid md:grid-cols-2 gap-12 mb-16 relative"
      >
        {/* Gradient Decoration */}
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl -z-10" />

        {/* Left Column */}
        <div className="space-y-6 text-lg text-gray-300 relative">
          <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative pl-8 leading-relaxed"
          >
            I&apos;m a Full Stack Developer specializing in{" "}
            <span className="highlight-gradient-cyan">web/mobile</span> and{" "}
            <span className="highlight-gradient-green">cross-platform</span>{" "}
            solutions. My toolkit includes modern technologies like{" "}
            <TechPill color="from-yellow-400 to-amber-500">Node.js</TechPill>,{" "}
            <TechPill color="from-green-400 to-lime-500">Next.js</TechPill>,{" "}
            <TechPill color="from-blue-400 to-cyan-500">React</TechPill>, and{" "}
            <TechPill color="from-purple-400 to-violet-500">Express</TechPill>.
            I leverage tools like{" "}
            <TechPill color="from-cyan-400 to-teal-500">
              GitHub & Vercel
            </TechPill>
            , <TechPill color="from-gray-500 to-gray-200">Docker</TechPill>, and{" "}
            <TechPill color="from-pink-400 to-red-500">VS Code</TechPill> to
            build scalable, user-centric applications.
          </motion.p>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            With a track record of modernizing legacy systems and mentoring
            teams, I&apos;m currently focused on tackling complex challenges
            through innovative full-stack solutions that create measurable
            impact.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.to}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex items-center gap-2 px-4 py-2.5 bg-gray-800/50 backdrop-blur-sm 
                     rounded-lg hover:bg-gradient-to-r from-cyan-600/20 to-blue-700/20 
                     border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
                custom={index}
              >
                <link.icon className="text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="text-gray-200 group-hover:text-cyan-50 transition-colors">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
// TechPill Component (add to your components)
// eslint-disable-next-line react/prop-types
const TechPill = ({ children, color }) => (
  <span
    className={`relative inline-block px-2 py-1 bg-gradient-to-r ${color} 
                   text-transparent bg-clip-text font-medium`}
  >
    {children}
    <span
      className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg 
                     opacity-10 -z-10`}
    />
  </span>
);
