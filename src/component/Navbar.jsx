import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to toggle blurry background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`container mx-auto h-20 text-white  flex justify-center xl:justify-end items-center sticky rounded-xl top-0 z-50 ${
        isScrolled ? "backdrop-blur-md bg-[#0C182E]/80" : "bg-transparent"
      } transition-all duration-300`}
      role="navigation"
    >
      {/* Nav Links */}
      {navLinks.map((link) => (
        <a
          href={link.to}
          key={link.name}
          className="relative px-4 py-2 text-gray-200 hover:text-cyan-400 transition-colors xl:text-2xl  text-xl duration-300 
          before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
          before:bg-cyan-400 before:transition-all before:duration-300 hover:before:w-full"
          aria-label={`Navigate to ${link.name}`}
        >
          {link.name}
        </a>
      ))}
    </motion.header>
  );
};

export default Navbar;
