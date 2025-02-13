import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col rounded-lg  bg-[#0C182E] text-white">
      {/* Section Header */}
      <div className="relative flex gap-8">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative pl-8"
        >
          Get In Touch
        </motion.h2>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start justify-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8 bg-[#112240] p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Contact Information
          </h3>
          <div className="flex items-center gap-4">
            <FiMail size={24} className="text-cyan-400" />
            <p className="text-lg">nasifuad007@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone size={24} className="text-cyan-400" />
            <p className="text-lg">+880-1953726489</p>
          </div>
          <div className="flex items-center gap-4">
            <FiMapPin size={24} className="text-cyan-400" />
            <p className="text-lg">Dhaka, Bangladesh</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#112240] p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
            Send a Message
          </h3>
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-all"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 px-6 rounded-lg w-full transition-all duration-300"
            >
              <FiSend size={18} />
              <span>Send Message</span>
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Decorative Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl"
      />
    </section>
  );
};

export default Contact;
