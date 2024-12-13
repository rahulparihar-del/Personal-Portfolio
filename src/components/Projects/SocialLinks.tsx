import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

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

const SocialLinks: React.FC = () => {
  return (
    <motion.div
      className="flex space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={href}
          href={href}
          aria-label={label}
          className="p-2 text-black hover:text-[#327380] transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          target="_blank"
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
