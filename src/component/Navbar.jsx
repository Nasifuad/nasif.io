import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <>
      <header className="container mx-auto  h-20 text-white flex justify-center md:justify-end items-center sticky top-0 bg-[#0C182E] z-50">
        {navLinks.map((link) => (
          <a
            href={link.to}
            key={link.name}
            className="px-4 py-2 text-gray-100 hover:text-gray-300 "
          >
            {link.name}
          </a>
        ))}
      </header>
    </>
  );
};

export default Navbar;
