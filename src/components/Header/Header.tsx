import React, { useState, useEffect } from "react";
import logo from "../../assets/user.png";
import HeroButton from "../ui/HeroButton";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Project", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Track scrolling to add blur background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "backdrop-blur-md bg-white/40 shadow-md"
          : "bg-white"
      } fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-[#327380]">
            <img src={logo} alt="logo" className="w-10 h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-gray-600 hover:text-[#327380] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <HeroButton href="#contact" variant="primary">
              Hire Me
            </HeroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-[#327380] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3BottomLeftIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="block text-gray-600 hover:text-[#327380] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-4">
              <HeroButton href="#contact" variant="primary">
                Hire Me
              </HeroButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
