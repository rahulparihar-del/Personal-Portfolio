import { Github, Linkedin, Mail } from "lucide-react";
import { Send, Code } from "lucide-react";
import { motion } from "framer-motion";
import HeroButton from "./ui/HeroButton";
import TechStack from "./ui/TechStack";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rahulparihar-del",
      label: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rahulpariharr/",
      label: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=rahulpariharmalii@gmail.com&su=Hello%20Rahul&body=Hi%20Rahul,%20I%20would%20like%20to%20connect%20with%20you!",
      label: "Email Contact",
    },
  ];

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-[#327380]">Rishi Raj Singh</span>
            <br />
            Software Developer
          </h1>
          <p className="text-xl text-gray-300">
            Passionate about creating elegant solutions to complex problems.
            Specialized in full-stack development with modern technologies.!
          </p>

          <TechStack />

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <HeroButton href="#contact" variant="primary" icon={Send}>
              Let's Talk!
            </HeroButton>
            <HeroButton href="#projects" variant="secondary" icon={Code}>
              View Work
            </HeroButton>
          </motion.div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={href}
                href={href}
                aria-label={label}
                className="p-2 text-gray-400 hover:text-[] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                target="_blank"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#327380] rounded-full opacity-10 blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
            alt="Coding workspace"
            className="rounded-lg shadow-2xl relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
