import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full container mx-auto py-8 bg-[#0C182E] text-white border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/nasifuad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nasif-fuad1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/nasifuad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="mailto:nasifuad007@gmail.com"
            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Nasif Fuad. All rights reserved.
        </p>

        {/* Optional: Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
