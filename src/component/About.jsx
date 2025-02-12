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
    <section className="container mx-auto py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br rounded-2xl from-gray-900 to-gray-800 text-gray-100">
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
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        {/* Left Column */}
        <div className="space-y-6 text-lg text-gray-300 relative">
          <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
          {/* <p className="relative nas pl-8">
            I am a Full Stack Developer with expertise in native (
            <span className="highlight-cyan">Android & iOS</span>) and
            cross-platform (<span className="highlight-cyan">Flutter</span>)
            development. I specialize in creating user-friendly, scalable, and
            minimalistic solutions using{" "}
            <span className="highlight-amber">Swift</span>,
            <span className="highlight-blue">Java</span>,
            <span className="highlight-blue">Dart</span>, and tools like{" "}
            <span className="highlight-cyan">Android Studio</span>,
            <span className="highlight-cyan">Xcode</span>, and
            <span className="highlight-cyan">VS Code</span>.
          </p> */}
          <p className="relative nas pl-8">
            I am a Full Stack Developer with expertise in (
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Web and Mobile
            </span>
            ) and cross-platform (
            <span className="bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text text-transparent">
              React Native
            </span>
            ) development. I specialize in creating user-friendly, scalable, and
            minimalistic solutions using{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Node JS
            </span>
            ,
            <span className="bg-gradient-to-r from-green-400 to-lime-500 bg-clip-text text-transparent">
              Next JS
            </span>
            ,
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              React
            </span>
            ,
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
              Express
            </span>
            , and tools like{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
              Github, Vercel
            </span>
            ,
            <span className="bg-gradient-to-r from-gray-500 to-gray-200 bg-clip-text text-transparent">
              Docker
            </span>
            , and
            <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              VS Code
            </span>
            .
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            Throughout my career, I have built robust applications, modernized
            legacy systems, and mentored junior developers. Currently seeking
            new challenges to create impactful solutions.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.to}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r from-cyan-600/20 to-blue-700/20 border border-cyan-500/20 transition-all"
              >
                <link.icon className="text-xl text-cyan-400" />
                <span className="hidden md:inline text-gray-200">
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
