import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/user.png";
import HeroButton from "../ui/HeroButton";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-lg border-b border-gray-100/50 dark:border-gray-800/50"
          : "bg-gradient-to-br from-slate-50 via-white to-[#e8f4f6] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full" />
            <span className="hidden sm:block text-lg font-bold bg-gradient-to-r from-[#327280] to-[#1a5c66] bg-clip-text text-transparent">
              Rahul
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#327280] dark:hover:text-[#5ab4c4] rounded-lg hover:bg-[#327280]/5 dark:hover:bg-[#327280]/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-[#327280] dark:hover:text-[#5ab4c4] hover:bg-[#327280]/10 dark:hover:bg-[#327280]/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <HeroButton href="#contact" variant="primary">
              Hire Me
            </HeroButton>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-[#327280] dark:hover:text-[#5ab4c4] hover:bg-[#327280]/5 dark:hover:bg-[#327280]/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-[#327280] dark:hover:text-[#5ab4c4] hover:bg-[#327280]/5 dark:hover:bg-[#327280]/20 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3BottomLeftIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <nav className="pt-4 pb-2 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.path}
                    href={link.path}
                    className="block px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:text-[#327280] dark:hover:text-[#5ab4c4] hover:bg-[#327280]/5 dark:hover:bg-[#327280]/10 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="pt-2 pb-4 px-4">
                <HeroButton href="#contact" variant="primary">
                  Hire Me
                </HeroButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
