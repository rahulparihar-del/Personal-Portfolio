import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Name and Title Section */}
          <div>
            <h3 className="text-2xl font-bold">Rahul Parihar</h3>
            <p className="mt-2 text-gray-400">Frontend Developer Developer</p>
          </div>

          {/* Social Links Section */}
          <div>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="hover:text-[#256c5b] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishiraj-singh-chauhan-0b2969225/" className="hover:text-[#256c5b] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rishiiiraj16@gmail.com" className="hover:text-[#256c5b] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <div>
            <p className="flex justify-center md:justify-end items-center text-gray-400">
              Made in {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Navigation and Copyright
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <nav className="mb-4">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
          <p>&copy; {new Date().getFullYear()} Rishi Raj Singh. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
