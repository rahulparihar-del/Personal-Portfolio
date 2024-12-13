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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold">Rahul Parihar</h3>
            <p className="mt-2 text-gray-400">Frontend Developer</p>
          </div>
          <div>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#327380] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="flex justify-center md:justify-end items-center text-gray-400">
              Made in {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
