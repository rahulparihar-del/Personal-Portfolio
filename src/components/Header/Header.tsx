import React, { useState } from "react";
import logo from "../../assets/user.png";
import HeroButton from "../ui/HeroButton";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-blue-500">
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
            className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none"
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
                  className="block text-gray-600 hover:text-blue-500 transition-colors"
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
