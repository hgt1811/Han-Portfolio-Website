import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <Link
        to="/"
        className="hover:scale-110 duration-75 hover:text-[#CE7E9E] transition-colors"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="hover:scale-110 duration-75 hover:text-[#CE7E9E] transition-colors"
      >
        About
      </Link>
      <Link
        to="/projects"
        className="hover:scale-110 duration-75 hover:text-[#CE7E9E] transition-colors"
      >
        Projects
      </Link>
      <Link
        to="/experience"
        className="hover:scale-110 duration-75 hover:text-[#CE7E9E] transition-colors"
      >
        Experience
      </Link>
      <Link
        to="/contact"
        className="hover:scale-110 duration-75 hover:text-[#CE7E9E] transition-colors"
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="p-6 text-[#A480CF] font-semibold bg-background">
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-end gap-8">{menuItems}</div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden justify-end">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden items-end">
          {menuItems}
        </div>
      )}
    </nav>
  );
}
