import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = "{Nasif}";
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed container mx-auto h-20 text-white flex justify-between items-center px-6  rounded-xl top-0 z-50 ${
        isScrolled ? "backdrop-blur-md bg-[#0C182E]/80" : "bg-transparent"
      } transition-all duration-300`}
      role="navigation"
    >
      {/* Logo */}
      <a
        href="#"
        className="text-2xl font-bold text-[#ffffff] hover:scale-105 transform transition-all duration-300"
      >
        {logo}
      </a>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex gap-6">
        {navLinks.map((link) => (
          <a
            href={link.to}
            key={link.name}
            className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-colors xl:text-2xl text-xl duration-300 
              before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
              before:bg-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
            aria-label={`Navigate to ${link.name}`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="xl:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0C182E]/90 backdrop-blur-md p-5 flex flex-col items-center gap-4 xl:hidden">
          {navLinks.map((link) => (
            <a
              href={link.to}
              key={link.name}
              className="text-gray-200 text-xl hover:text-cyan-400 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
