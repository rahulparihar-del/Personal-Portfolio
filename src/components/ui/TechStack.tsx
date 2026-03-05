import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiExpress, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: FaNodeJs, label: 'Node.js', color: '#339933' },
  { icon: SiExpress, label: 'Express', color: '#444444' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
  { icon: FaDocker, label: 'Docker', color: '#2496ED' },
];

export default function TechStack() {
  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {technologies.map((tech) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.label}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer"
            whileHover={{ scale: 1.08, boxShadow: '0 4px 15px rgba(50,114,128,0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: tech.color }} />
            <span className="text-xs sm:text-sm font-medium">{tech.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}