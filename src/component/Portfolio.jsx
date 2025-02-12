// import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import nasif from "../assets/nasif.png";
import About from "./About";
import { projects } from "../constants";
const Portfolio = () => {
  return (
    <div className="min-h-screen  text-gray-100 font-sans">
      <About />
      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <p className="text-xl mb-4">Hello! I am</p>
          <h2 className="text-5xl font-bold mb-6 text-[#007bff]">
            {" "}
            {/* Text color changed */}
            Wahab Khan
          </h2>
          <p className="text-2xl mb-6">Android & Mobile Developer</p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Mobile designer with expertise in native (Android) and
            cross-platform development. Specializing in creating user-friendly,
            scalable, and minimalistic mobile solutions using Swift, Java, Dart,
            and tools like Android Studio, Xcode, and VS Code.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#007bff] py-3 px-6 rounded-lg font-medium text-white transition-colors hover:bg-[#0056b3] flex items-center gap-2"
            >
              {" "}
              {/* Button color changed */}
              <FiLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="#"
              className="bg-gray-700 py-3 px-6 rounded-lg font-medium text-white transition-colors hover:bg-gray-600 flex items-center gap-2"
            >
              <FiGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={nasif}
            alt="Abdul Wahab Khan"
            className="w-64 h-64 rounded-full object-cover border-4 border-gray-700"
          />
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 bg-[#1A1A1A]/50 border-t border-gray-700">
        {" "}
        {/* Background color changed */}
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-[#007bff]">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#282828] p-6 rounded-xl hover:bg-[#202020] transition border border-gray-700"
              >
                <span className="text-[#007bff] text-sm">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold my-3 text-white">
                  {project.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 container mx-auto px-6 border-t border-gray-700">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-[#007bff]">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FiMail className="text-2xl text-[#007bff]" />
                <p>your.email@example.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FiPhone className="text-2xl text-[#007bff]" />
                <p>+123 456 7890</p>
              </div>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#282828] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#007bff] border border-gray-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#282828] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#007bff] border border-gray-700"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-[#282828] rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#007bff] border border-gray-700"
              ></textarea>
              <button className="bg-[#007bff] py-3 px-6 rounded-lg font-medium text-white transition-colors hover:bg-[#0056b3] w-full">
                {" "}
                {/* Button color changed */}
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
