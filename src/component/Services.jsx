import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-16 bg-gradient-to-r flex flex-col from-gray-800 via-neutral-900 to-slate-800 border rounded-lg shadow-xl">
      <div className="relative flex gap-8">
        {/* Left Line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" />

        {/* Title Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative pl-8"
        >
          My Services
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Service Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Web Development
          </h3>
          <p className="text-gray-600">
            Creating responsive and modern websites that meet your needs and
            exceed expectations.
          </p>
        </motion.div>

        {/* Service Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            UI/UX Design
          </h3>
          <p className="text-gray-600">
            Crafting user-centered designs that are both beautiful and
            functional.
          </p>
        </motion.div>

        {/* Service Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Consulting
          </h3>
          <p className="text-gray-600">
            Offering professional guidance to help you navigate your projects
            and reach your goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
