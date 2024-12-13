import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com',
    label: 'GitHub Profile',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rishiraj-singh-chauhan-0b2969225/',
    label: 'LinkedIn Profile',
  },
  {
    icon: Mail,
    href: 'mailto:rishiiiraj16@gmail.com',
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
        >
          <Icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
