import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/rahulparihar-del',
      label: 'GitHub Profile',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rahulpariharr/',
      label: 'LinkedIn Profile',
    },
    {
      icon: Mail,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=rahulpariharmalii@gmail.com&su=Hello%20Rahul&body=Hi%20Rahul,%20I%20would%20like%20to%20connect%20with%20you!',
      label: 'Email Contact',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">Rahul Parihar</h3>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">Full-Stack Developer</p>
          </div>
          <div>
            <div className="flex justify-center space-x-5 sm:space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#327280] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="flex justify-center md:justify-end items-center text-sm sm:text-base text-gray-400">
              &copy; {new Date().getFullYear()} Rahul Parihar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
