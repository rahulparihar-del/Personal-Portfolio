import { Github, Linkedin, Mail } from 'lucide-react';
import { Send, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroButton from './ui/HeroButton';
import TechStack from './ui/TechStack';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-400">Rishi Raj Singh</span>
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
            <a href="https://github.com" className="p-2 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rishiraj-singh-chauhan-0b2969225/" className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rishiiiraj16@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
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