import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Mock navLinks data
const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const logo = "{Nasif}";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full h-20 text-white flex justify-between items-center px-4 sm:px-6 lg:px-8 z-50 ${
        isScrolled ? "backdrop-blur-md bg-[#0C182E]/90" : "bg-transparent"
      } transition-all duration-300`}
      role="navigation"
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="text-2xl font-bold text-white hover:text-cyan-400 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        onClick={(e) => handleSmoothScroll(e, "#home")}
      >
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {logo}
        </span>
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-1">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.to}
            onClick={(e) => handleSmoothScroll(e, link.to)}
            className={`relative px-4 py-2 transition-all duration-300 text-lg font-medium
              ${
                activeSection === link.to
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            whileHover={{ y: -2 }}
            aria-label={`Navigate to ${link.name}`}
          >
            {link.name}
            {activeSection === link.to && (
              <motion.span
                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                layoutId="navIndicator"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              />
            )}
          </motion.a>
        ))}
      </nav>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        onClick={(e) => handleSmoothScroll(e, "#contact")}
        className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-[#112240]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0C182E]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.to}
                  onClick={(e) => handleSmoothScroll(e, link.to)}
                  className={`text-2xl font-medium transition-colors duration-300
                    ${
                      activeSection === link.to
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
                className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { delay: navLinks.length * 0.1 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>

            <motion.div
              className="absolute bottom-8 text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: (navLinks.length + 1) * 0.1 },
              }}
            >
              Scroll to navigate
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
